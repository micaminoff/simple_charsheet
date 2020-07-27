import React from 'react';
import Header from './Components/Header';
import AbilityRow from './Components/AbilityRow';
import Skills from './Components/Skills';
import './App.scss';
import data from './data.json'
import { character } from './Types';

const hero: character = data.characters[0];

const App = () => (
  <div className='App'>
    <Header name={hero.name} level={hero.level} race={hero.race} dnd_class={hero.dnd_class}/>
    <section className='section character'>
      <AbilityRow abilities={hero.abilities}/>
      <div className='columns'>
        <div className='column'>
          <Skills proficiencies={hero.proficiencies} proficiency_bonus={hero.proficiency_bonus} abilities={hero.abilities}/>
        </div>
      </div>

    </section>
  </div>
);

export default App;
