import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { planetsConfig } from '../../planetsConfig.js';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Button from '../../components/Button/Button';
import PlanetsDataJSON from '../../planetsData.json';
import './PlanetPage.css';

export default function PlanetPage() {
  const [planetData, setPlanetData] = useState();

  const [activeTab, setActiveTab] = useState('overview');

  let { planet } = useParams();

  if (!planet) {
    planet = planetsConfig.DEFAULT_PLANET;
  }

  useEffect(() => {
    // Loads the appropriate planet data into state based on URL param from planetsData.json file
    for (let i = 0; i < PlanetsDataJSON.length; i++) {
      if (PlanetsDataJSON[i].name.toLowerCase() === planet.toLowerCase()) {
        return setPlanetData(PlanetsDataJSON[i]);
      }
    }
  }, [planet]);

  function setActiveTabHandler(tab) {
    setActiveTab(tab);
  }

  console.log(planetData);

  return planetData ? (
    <main className='planet-page'>
      <div className='planet-page-container'>
        <section className='planet-page-main'>
          <div className='planet-page-img-outer-container'>
            <div className='planet-page-img-inner-container'>
              {(activeTab === 'overview' || activeTab === 'geology') && (
                <img src={`/assets/${planetData.images.planet}`} alt={`${planetData.name} illustration`} />
              )}
              {activeTab === 'structure' && (
                <img
                  src={`/assets/${planetData.images.internal}`}
                  alt={`${planetData.name} internal structure illustration overlaying the main planet illustration`}
                />
              )}
              {activeTab === 'geology' && (
                <img
                  src={`/assets/${planetData.images.geology}`}
                  alt={`${planetData.name} surface geology illustration`}
                  className='planet-img-geology'
                />
              )}
            </div>
          </div>
          <div className='planet-page-text'>
            <h1>{planetData.name}</h1>
            <p className='body planet-page-subtitle'>{planetData[activeTab].content}</p>
            <p className='body-s planet-page-source'>
              Source{'\u00A0'}:{'\u00A0'}
              <a href={planetData[activeTab].source} target='_blank' rel='noreferrer'>
                Wikipedia
              </a>
              <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12'>
                <path
                  fill='#FFF'
                  d='M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z'
                  opacity='.5'
                />
              </svg>
            </p>
            <Button
              number='01'
              text='Overview'
              active={activeTab === 'overview'}
              activeColour={planetData.name.toLowerCase()}
              onClick={() => setActiveTabHandler('overview')}
            />
            <Button
              number='02'
              text='Internal Structure'
              active={activeTab === 'structure'}
              activeColour={planetData.name.toLowerCase()}
              onClick={() => setActiveTabHandler('structure')}
            />
            <Button
              number='03'
              text='Surface Geology'
              active={activeTab === 'geology'}
              activeColour={planetData.name.toLowerCase()}
              onClick={() => setActiveTabHandler('geology')}
            />
          </div>
        </section>
        <section className='planet-page-stats'></section>
      </div>
    </main>
  ) : (
    <LoadingSpinner />
  );
}
