import "./Button.css";

function Button({
  text,
  type = "button",
  loading = false,
  disabled = false,
}) {
  return (
    <button
      type={type}
      className="custom-button"
      disabled={disabled || loading}
    >
      {loading ? "Submitting..." : text}

      {!loading && <span>›</span>}
    </button>
  );
}

export default Button;