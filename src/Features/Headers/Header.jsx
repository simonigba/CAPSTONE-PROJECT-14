import "./Header.css";
import Button from "../../Components/Extra-Button/Button";
import { scrollToSection } from "../../utils/ScrollSection";

function Header() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="navbar">
          <a href="/">
            <img
              src="https://res.cloudinary.com/dva4kkwec/image/upload/v1778449959/Logo_gl7yjh.png"
              width="auto"
              height="50px"
              margin-top="20px"
              alt="logo"
            />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="head">
        <div className="header">
          <div className="header-content">
            <h1>
              Explore Our Solar <br /> System Through Data
            </h1>

            <p className="p">
              Understand the planets not just by name, but by measurable facts.
              From size and mass to gravity and density, this page breaks down
              the solar system in a clear, data-driven way.
            </p>

            <div className="hero-buttons">
              <Button
                text="Explore Data" 
                onClick={() => scrollToSection("data")}
              />
              <Button
                text="Contact Us"
                onClick={() => scrollToSection("contact")}
                variant="secondary"
              />
            </div>
          </div>

          <div className="header-image">
            <img
              src="https://res.cloudinary.com/dva4kkwec/image/upload/v1778449959/ImageFirst_rnfc7s.png"
              alt="Earth Globe"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
