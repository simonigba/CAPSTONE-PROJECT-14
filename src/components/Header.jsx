import React from 'react'
import "./Header.css";

function Header() {
return (
<>
{/* Header */}
<header className="ader">
<div className="navbar">
<a href="/">
<img className="logo"
src="https://res.cloudinary.com/dva4kkwec/image/upload/v1778449959/Logo_gl7yjh.png" alt="logo"
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

  <div class="hero-buttons">
    <a href="#planet-data" class="btn primary">Explore the Data</a>
    <a href="#form" class="btn secondary">Contact Us</a>
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

export default Header
