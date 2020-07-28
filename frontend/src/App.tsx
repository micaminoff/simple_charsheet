import React from 'react';
import Header from './Components/Header';
import AbilityRow from './Components/AbilityRow';
import Skills from './Components/Skills';
import CombatStats from './Components/CombatStats'
import './App.scss';
import data from './data.json'
import { character } from './Types';
import HealthBox from './Components/HealthBox';
import CharacterInfo from './Components/CharacterInfo';

const hero: character = data.characters[0];

const App = () => (
  <div className='App'>
    <Header name={hero.name} level={hero.level} race={hero.race} dnd_class={hero.dnd_class} />
    <section className='section character'>
      <AbilityRow abilities={hero.abilities} />
      <div className='columns'>
        <div className='column is-one-quarter'>
          <Skills proficiencies={hero.proficiencies} proficiency_bonus={hero.proficiency_bonus} abilities={hero.abilities} />
        </div>
        <div className='column'>
          <CombatStats ac={hero.ac} initiative={hero.initiative} speed={hero.speed}/>
          <HealthBox hp={hero.hp} hit_dice={hero.hit_dice} death_saves={hero.death_saves}/>
        </div>
        <div className='column'>
          <CharacterInfo inspiration={hero.inspiration} background={hero.background} alignment={hero.alignment} languages={hero.languages} xp={hero.xp}/>
        </div>
      </div>

    </section>
  </div>
);

export default App;
