import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';

function displayFact(e) {
  // get name of the animal the event is targeting
  const animal = e.target.alt;
  
// // selects the animal from the animals object
  const selectedAnimal = animals[animal];

// selects a random fact from the facts array inside the animals[animal] object
  const randomIndex = Math.floor(Math.random() * selectedAnimal.facts.length);

// takes the value of the fact with randomIndex
  const fact = selectedAnimal.facts[randomIndex];
  document.getElementById("fact").innerHTML = fact;
};

const images = [];
for (const animal in animals) {
  images.push(
    <img 
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      arial-label={animal}
      role='button'
      onClick={displayFact}
    />
  );
};

const showBackground = true;
const background = <img 
  className ="background" 
  alt = "ocean" 
  src="/images/ocean.jpg" />

const animalFacts = (
  <div>
    {showBackground && background}
    <div className="animals">
      {images}
    </div>
    <h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>
    <p id="fact"></p>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById('root'));