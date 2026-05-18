import SectionHeader from "../../components/SectionHeader/SectionHeader";
import "./FactsSection.css";

function FactsSection() {
  // Planetary facts data matching the mockup exactly (uses identical placeholder values)
  const planetaryFacts = [
    {
      category: "Terrestrial Planets",
      subcategory: null,
      name: "Mercury",
      mass: "0.330",
      diameter: "4,878",
      density: "5427",
      gravity: "3.7",
    },
    {
      category: "Terrestrial Planets",
      subcategory: null,
      name: "Venus",
      mass: "0.330",
      diameter: "4,878",
      density: "5427",
      gravity: "3.7",
    },
    {
      category: "Terrestrial Planets",
      subcategory: null,
      name: "Earth",
      mass: "0.330",
      diameter: "4,878",
      density: "5427",
      gravity: "3.7",
    },
    {
      category: "Terrestrial Planets",
      subcategory: null,
      name: "Mars",
      mass: "0.330",
      diameter: "4,878",
      density: "5427",
      gravity: "3.7",
    },
    {
      category: "Jovian Planets",
      subcategory: "Gas Giants",
      name: "Jupiter",
      mass: "0.330",
      diameter: "4,878",
      density: "5427",
      gravity: "3.7",
    },
    {
      category: "Jovian Planets",
      subcategory: "Gas Giants",
      name: "Saturn",
      mass: "0.330",
      diameter: "4,878",
      density: "5427",
      gravity: "3.7",
    },
    {
      category: "Jovian Planets",
      subcategory: "Ice Giants",
      name: "Uranus",
      mass: "0.330",
      diameter: "4,878",
      density: "5427",
      gravity: "3.7",
    },
    {
      category: "Jovian Planets",
      subcategory: "Ice Giants",
      name: "Neptune",
      mass: "0.330",
      diameter: "4,878",
      density: "5427",
      gravity: "3.7",
    },
    {
      category: "Dwarf Planets",
      subcategory: null,
      name: "Pluto",
      mass: "0.330",
      diameter: "4,878",
      density: "5427",
      gravity: "3.7",
    },
  ];

  return (
    <section className="facts-section" id="facts">
      <div className="container">
        {/* Reusing SectionHeader to ensure exact visual and structural parity */}
        <SectionHeader
          title="Planetary Facts at a Glance"
          descriptionOne="Below is a comparative table of major planets in our solar system. The data highlights key physical properties used by astronomers and researchers worldwide."
        />

        {/* Small subtitle right above the table matching the mockup */}
        <p className="table-caption">
          Data about the planets of our solar system (Planetary facts taken from NASA)
        </p>

        {/* Premium responsive table wrapper */}
        <div className="table-wrapper">
          <table className="facts-table">
            <thead>
              <tr>
                {/* Spans the Category and Subcategory columns */}
                <th colSpan="2" className="empty-header-cell"></th>
                <th>Name</th>
                <th>Mass (10 24kg)</th>
                <th>Diameter (km)</th>
                <th>Density (kg/m3)</th>
                <th>Gravity (m/s2)</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1: Mercury (Terrestrial Planets spans 4 rows, covers both category columns) */}
              <tr>
                <td rowSpan="4" colSpan="2" className="category-cell">
                  Terrestrial Planets
                </td>
                <td className="planet-name-cell">Mercury</td>
                <td>{planetaryFacts[0].mass}</td>
                <td>{planetaryFacts[0].diameter}</td>
                <td>{planetaryFacts[0].density}</td>
                <td>{planetaryFacts[0].gravity}</td>
              </tr>
              {/* Row 2: Venus */}
              <tr>
                <td className="planet-name-cell">Venus</td>
                <td>{planetaryFacts[1].mass}</td>
                <td>{planetaryFacts[1].diameter}</td>
                <td>{planetaryFacts[1].density}</td>
                <td>{planetaryFacts[1].gravity}</td>
              </tr>
              {/* Row 3: Earth */}
              <tr>
                <td className="planet-name-cell">Earth</td>
                <td>{planetaryFacts[2].mass}</td>
                <td>{planetaryFacts[2].diameter}</td>
                <td>{planetaryFacts[2].density}</td>
                <td>{planetaryFacts[2].gravity}</td>
              </tr>
              {/* Row 4: Mars */}
              <tr>
                <td className="planet-name-cell">Mars</td>
                <td>{planetaryFacts[3].mass}</td>
                <td>{planetaryFacts[3].diameter}</td>
                <td>{planetaryFacts[3].density}</td>
                <td>{planetaryFacts[3].gravity}</td>
              </tr>

              {/* Row 5: Jupiter (Jovian Planets spans 4 rows, Gas Giants spans 2 rows) */}
              <tr>
                <td rowSpan="4" className="category-cell">
                  Jovian Planets
                </td>
                <td rowSpan="2" className="category-cell subcategory-cell">
                  Gas Giants
                </td>
                <td className="planet-name-cell">Jupiter</td>
                <td>{planetaryFacts[4].mass}</td>
                <td>{planetaryFacts[4].diameter}</td>
                <td>{planetaryFacts[4].density}</td>
                <td>{planetaryFacts[4].gravity}</td>
              </tr>
              {/* Row 6: Saturn */}
              <tr>
                <td className="planet-name-cell">Saturn</td>
                <td>{planetaryFacts[5].mass}</td>
                <td>{planetaryFacts[5].diameter}</td>
                <td>{planetaryFacts[5].density}</td>
                <td>{planetaryFacts[5].gravity}</td>
              </tr>

              {/* Row 7: Uranus (Ice Giants spans 2 rows) */}
              <tr>
                <td rowSpan="2" className="category-cell subcategory-cell">
                  Ice Giants
                </td>
                <td className="planet-name-cell">Uranus</td>
                <td>{planetaryFacts[6].mass}</td>
                <td>{planetaryFacts[6].diameter}</td>
                <td>{planetaryFacts[6].density}</td>
                <td>{planetaryFacts[6].gravity}</td>
              </tr>
              {/* Row 8: Neptune */}
              <tr>
                <td className="planet-name-cell">Neptune</td>
                <td>{planetaryFacts[7].mass}</td>
                <td>{planetaryFacts[7].diameter}</td>
                <td>{planetaryFacts[7].density}</td>
                <td>{planetaryFacts[7].gravity}</td>
              </tr>

              {/* Row 9: Pluto (Dwarf Planets spans 1 row, covers both category columns) */}
              <tr>
                <td colSpan="2" className="category-cell">
                  Dwarf Planets
                </td>
                <td className="planet-name-cell">Pluto</td>
                <td>{planetaryFacts[8].mass}</td>
                <td>{planetaryFacts[8].diameter}</td>
                <td>{planetaryFacts[8].density}</td>
                <td>{planetaryFacts[8].gravity}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default FactsSection;
