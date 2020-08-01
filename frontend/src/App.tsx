import React, { useState, FormEvent } from 'react';
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
import Message from './Components/Message'



const App = () => {

  const [show_edit_modal, set_edit_modal] = useState(true);
  const [show_message, set_message] = useState(false);
  const [hero, update_hero] = useState(data.characters[0]);

  const toggle_edit_modal = () => (
    set_edit_modal(!show_edit_modal)
  );

  const handle_submit = (event: FormEvent, character: character) => {
    event.preventDefault();
    update_hero(character);
    toggle_edit_modal();
    set_message(true);
    setTimeout(() => {
      set_message(false)
    }, 3000);
  }

  return (
    <div className='App'>
      {show_edit_modal ? <EditModal modal_callback={toggle_edit_modal} character={hero} handle_submit={handle_submit} /> : ''}
      <Header name={hero.name} level={hero.level} race={hero.race} dnd_class={hero.dnd_class} modal_callback={toggle_edit_modal} />
      <section className='section character'>
        <AbilityRow abilities={hero.abilities} />
        <div className='columns'>
          <div className='column is-one-quarter'>
            <Skills skills={hero.skills} proficiency_bonus={hero.proficiency_bonus} abilities={hero.abilities} />
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
              proficiency_bonus={hero.proficiency_bonus}
            />
          </div>
        </div>
      {show_message ? <Message /> : ''}
      </section>
      <Footer />
    </div>
  )
}

export default App;
