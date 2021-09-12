import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { planetsConfig } from '../../planetsConfig.js';
import PlanetsDataJSON from '../../planetsData.json';
import './PlanetPage.css';

export default function PlanetPage() {
  const [planetData, setPlanetData] = useState({});

  let { planet } = useParams();

  if (!planet) {
    planet = planetsConfig.DEFAULT_PLANET;
  }

  console.log(planetData);

  useEffect(() => {
    // Loads the appropriate planet data into state based on URL param from planetsData.json file
    for (let i = 0; i < PlanetsDataJSON.length; i++) {
      if (PlanetsDataJSON[i].name.toLowerCase() === planet.toLowerCase()) {
        return setPlanetData(PlanetsDataJSON[i]);
      }
    }
  }, [planet]);

  return (
    <main>
      <h3>Default home page</h3>
    </main>
  );
}
