import React, { useState } from 'react';
import Header from './Components/Header';
import AbilityRow from './Components/AbilityRow';
import Skills from './Components/Skills';
import CombatStats from './Components/CombatStats'
import './App.scss';
import data from './data.json'
import { character } from './Types';
import HealthBox from './Components/HealthBox';
import CharacterInfo from './Components/CharacterInfo';
import CombatBox from './Components/CombatBox';
import EditModal from './Components/Edit/EditModal';
import Footer from './Components/Footer'



const App = () => {

  const [show_modal, set_modal] = useState(false);
  const hero: character = data.characters[0];

  const toggle_modal = () => (
    set_modal(!show_modal)
  );

  return (
    <div className='App'>
      {show_modal  ? <EditModal modal_callback={toggle_modal} character={hero}/> : ''}
      <Header name={hero.name} level={hero.level} race={hero.race} dnd_class={hero.dnd_class} modal_callback={toggle_modal} />
      <section className='section character'>
        <AbilityRow abilities={hero.abilities} />
        <div className='columns'>
          <div className='column is-one-quarter'>
            <Skills proficiencies={hero.proficiencies} proficiency_bonus={hero.proficiency_bonus} abilities={hero.abilities} />
          </div>
          <div className='column'>
            <CombatStats ac={hero.ac} initiative={hero.initiative} speed={hero.speed} />
            <HealthBox hp={hero.hp} hit_dice={hero.hit_dice} death_saves={hero.death_saves} />
            <CombatBox atk_bonus={hero.atk_bonus} dmg_bonus={hero.dmg_bonus} dmg_die={hero.dmg_die} equipment={hero.equipment} />
          </div>
          <div className='column'>
            <CharacterInfo
              inspiration={hero.inspiration}
              background={hero.background}
              alignment={hero.alignment}
              languages={hero.languages}
              xp={hero.xp}
              features={hero.features}
              feats={hero.feats}
              inventory={hero.inventory}
            />
          </div>
        </div>

      </section>
      <Footer />
    </div>
  )
}

export default App;
