import React from 'react';
import Header from './Components/Header';
import AttributeRow from './Components/AttributeRow';
import Skills from './Components/Skills';
import './App.scss';
import data from './data.json'

const hero = data.characters[0];

const App = () => (
  <div className='App'>
    <Header name={hero.name} level={hero.level} race={hero.race} dnd_class={hero.class}/>
    <section className='section character'>
      <AttributeRow />
      <div className='columns'>
        <div className='column'>
          <Skills />
        </div>
      </div>

    </section>
  </div>
);

export default App;
