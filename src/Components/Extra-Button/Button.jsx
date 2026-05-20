import "./Button.css";

function Button({
  text,
  type = "button",
  loading = false,
  disabled = false,
  onClick,
  href,
  variant = "primary",
  showArrow = false,
}) {
  if (href) {
    return (
      <a href={href} className={`custom-button ${variant}`}>
        {text}
        {showArrow && <span>›</span>}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={`custom-button ${variant}`}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? "Submitting..." : text}
      {!loading && showArrow && <span>›</span>}
    </button>
  );
}

export default Button;