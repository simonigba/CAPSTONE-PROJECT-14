import { useState, useRef } from "react";
import "./ContactForm.css";

import Button from "../../Components/Exra-Button/Button";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";

// --- SANITIZER: escapes HTML special characters to prevent XSS injection ---
function sanitize(str) {
  return str
    .trim()
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#x27;")
    .replaceAll("/", "&#x2F;");
}

// --- 2. VALIDATION RULES: strict per-field checks ---
const rules = {
  fullName: (v) => /^[a-zA-Z\s'-]{2,60}$/.test(v.trim()),

  // Standard email format
  email: (v) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v.trim()),

  // Only digits
  phone: (v) => {
    const digitsOnly = v.replaceAll(/\D/g, "");
    return /^[0-9+\s()-]{11,14}$/.test(v.trim()) && digitsOnly.length >= 7;
  },

  // No HTML tags allowed, min 10 chars, max 100
  message: (v) => {
    const clean = v.trim();
    return clean.length >= 10 && clean.length <= 100 && !/<[^>]*>/.test(clean);
  },
};

const errorMessages = {
  fullName: "Enter your full name (letters only, 2–60 characters).",
  email: "Enter a valid email address.",
  phone:
    "Enter a valid phone number.",
  message: "Please leave a message (10–100 characters).",
};

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  // --- PER-FIELD ERROR STATE ---
  const [fieldErrors, setFieldErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  // SUBMISSION LOCK: prevents duplicate/spam submissions

  const submitting = useRef(false);

  const API_ENDPOINT =
    "https://corsproxy.io/?https://whitebricks.com/tsacademy.php";

  // Validates a single field and updates its error message
  function validateField(name, value) {
    const ok = rules[name](value);
    setFieldErrors((prev) => ({
      ...prev,
      [name]: ok ? "" : errorMessages[name],
    }));
    return ok;
  }

  function handleChange(event) {
    const { name, value } = event.target;

    // MAXLENGTH ENFORCEMENT IN STATE (belt-and-suspenders with maxLength attr)
    const limits = { fullName: 60, email: 100, phone: 20, message: 100 };
    if (value.length > limits[name]) return;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error as user corrects the field
    if (fieldErrors[name]) {
      validateField(name, value);
    }
  }

  // Validate on blur so user sees error only after leaving the field
  function handleBlur(event) {
    const { name, value } = event.target;
    validateField(name, value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    //  6. BLOCK CONCURRENT SUBMISSIONS
    if (submitting.current) return;

    // 7. RE-VALIDATE ALL FIELDS BEFORE FETCH
    const fields = ["fullName", "email", "phone", "message"];
    const allValid = fields
      .map((f) => validateField(f, formData[f]))
      .every(Boolean);

    if (!allValid) return;

    submitting.current = true;
    setStatus({ loading: true, success: "", error: "" });

    try {
      // 8. SANITIZE BEFORE SENDING
      const sanitizedBody = {
        fullName: sanitize(formData.fullName),
        email: sanitize(formData.email),
        phone: sanitize(formData.phone),
        message: sanitize(formData.message),
      };

      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sanitizedBody),
      });

      if (!response.ok) {
        throw new Error("Submission failed. Please try again.");
      }

      setStatus({
        loading: false,
        success: "Message submitted successfully!",
        error: "",
      });
      setFormData({ fullName: "", email: "", phone: "", message: "" });
      setFieldErrors({ fullName: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus({
        loading: false,
        success: "",
        error: err.message || "Something went wrong. Please try again.",
      });
    } finally {
      submitting.current = false;
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <SectionHeader
          title="Have Questions About Planetary Science?"
          descriptionOne="Interested in learning more about space, astronomy, or how planetary data is collected and analyzed?"
          descriptionTwo="Reach out and we'll get back to you."
        />

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            {/* FULL NAME */}
            <div className="form-group">
              <label>
                Full Name<span>*</span>
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={60}
                required
              />
              {fieldErrors.fullName && (
                <small className="field-error">{fieldErrors.fullName}</small>
              )}
            </div>

            {/* EMAIL */}
            <div className="form-group">
              <label>
                Email<span>*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@example.com"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={100}
                required
              />
              {fieldErrors.email && (
                <small className="field-error">{fieldErrors.email}</small>
              )}
            </div>

            {/* PHONE */}
            <div className="form-group">
              <label>
                Phone Number<span>*</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Please enter a valid phone number."
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={20}
                required
              />
              {fieldErrors.phone && (
                <small className="field-error">{fieldErrors.phone}</small>
              )}
            </div>

            {/* MESSAGE */}
            <div className="form-group">
              <label>
                Message<span>*</span>
              </label>
              <textarea
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={100}
                required
              />
              {fieldErrors.message && (
                <small className="field-error">{fieldErrors.message}</small>
              )}
              <small>{formData.message.length}/100 characters</small>
            </div>
          </div>

          {status.success && (
            <div className="success-message">{status.success}</div>
          )}
          {status.error && <div className="error-message">{status.error}</div>}

          <Button text="Submit" type="submit" loading={status.loading} />
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
