import "./SectionHeader.css";

function SectionHeader({ title, descriptionOne, descriptionTwo }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>

      <p>{descriptionOne}</p>

      <p>{descriptionTwo}</p>
    </div>
  );
}

export default SectionHeader;