import { useEffect, useState } from "react";
import "./PlanetSection.css";
import PlanetImages from "../../utils/PlanetImages";

function PlanetSection() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function fetchPlanets() {
      try {
        const response = await fetch(
          "https://anurella.github.io/json/planets.json",
        );

        const data = await response.json();

        // FIX IMAGE PATHS DYNAMICALLY
        const updatedPlanets = data.map((planet) => {
          return {
            ...planet,

            image: `https://anurella.github.io/json/images/${planet.image
              .split("/")
              .pop()}`,
          };
        });

        setPlanets(updatedPlanets);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPlanets();
  }, []);

  return (
    <section className="planet-section">
      <div className="planet-header">
        <h2>Visualizing the Differences Between Planets</h2>

        <p>
          Each planet in our solar system has unique physical characteristics.
          Visual comparisons help highlight how vastly different terrestrial
          planets are from gas giants and ice giants.
        </p>
      </div>

      <div className="planet-grid">
        {planets.map((planet) => (
          <article className="planet-card" key={planet.planet}>
            <figure className="planet-image-wrapper">
              <img
                src={PlanetImages[planet.planet]}
                alt={planet.planet}
                className="planet-image"
                loading="lazy"
              />
            </figure>

            <div className="planet-content">
              <h3>{planet.planet}</h3>

              <p>{planet.distanceFromSun} million km</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PlanetSection;
