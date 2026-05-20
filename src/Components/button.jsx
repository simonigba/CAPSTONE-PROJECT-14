import './Button.css';

const Button = ({ children }) => {


  return (
    <button className="custom-btn" onClick={() => alert("Button clicked")}>
      {children}
    </button>
  );
};

export default Button;