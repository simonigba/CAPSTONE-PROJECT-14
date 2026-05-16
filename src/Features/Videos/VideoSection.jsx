import "./VideoSection.css";

function VideoSection() {
  return (
    <section className="video-section">
      {/* RIGHT: TEXT CONTENT */}
      <div className="video-content">
        <h2>How Planetary Data Helps Us Understand Space</h2>

        <p>
          Planetary science goes beyond images. Comparing <span>mass</span>,{" "}
          <span>diameter</span>, <span>gravity</span>, and <span>density</span>,
          we gain insight into how planets form, behave, and interact within the
          solar system.
        </p>
      </div>

      {/* LEFT: VIDEO BLOCK */}
      <div className="video-wrapper">
        <video className="video" autoPlay muted loop playsInline>
          <source
            src="https://res.cloudinary.com/dm0tdhw88/video/upload/v1770056764/12286635-hd_1920_1028_60fps_zt0cph.mp4"
            type="video/mp4"
          />
          Your browser does not support video.
        </video>
      </div>
    </section>
  );
}

export default VideoSection;
