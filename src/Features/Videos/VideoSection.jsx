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
            src="https://res.cloudinary.com/dm0tdhw88/video/upload/v1779316885/WhatsApp_Video_2026-05-20_at_11.38.27_PM_1_tmvj2y.mp4"
          />
          Your browser does not support video.
        </video>
      </div>
    </section>
  );
}

export default VideoSection;
