import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './styles/styles.css';
import Champion from './Champion';

const App = () => {

  //DATA --> DATA --> champion name --> attributes (lore (as blurb), image, stats, tags)
  const [champion, setChampion] = useState([]);
  const [championImg, setChampionImg] = useState('');
  const [resultOpacity, setResultOpacity] = useState('0');
  
  const hun = 'hu_HU'
  const eng = 'en_US'

  const [language, setLanguage] = useState(eng);
  let inputText = React.createRef();

  function changeHun() {

    setLanguage(hun, getValue())
    // setLanguage(hun)
    // getValue()
    console.log(language)
  }

  function changeEng() {

    setLanguage(eng, getValue())

    // setLanguage(hun)
    // getValue()
    // console.log(language)
  }

  // function engLanguage() {

  //   setLanguage(eng)
  //   getValue()
  //   console.log(language)
  // }

  function getValue() {

      const value = inputText.current.value
      const inputValue = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      const dataBaseUrl = `http://ddragon.leagueoflegends.com/cdn/12.6.1/data/${language}/champion/${inputValue}.json`
      const imgUrl = `http://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${inputValue}.png`
  
      axios.get(dataBaseUrl)
      .then(res => { 
  
        const champData = res.data.data[inputValue]
        setChampion(champData)
        setChampionImg(imgUrl)
        setResultOpacity('1')
  
       })

       .catch(
        setResultOpacity('0'),
       )

    }

  return (
    <>
      <header>
        <div className="socialMedia">
          <a href="https://www.facebook.com/leagueoflegends/"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/leagueoflegends/"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://twitter.com/leagueoflegends"><i className="fa-brands fa-twitter"></i></a>
        </div>
        <div className="languageButtons">

        {console.log(language)}

        <button className="huLanguage" onClick={changeHun}>HU</button>
        <button className="enLanguage" onClick={changeEng}>EN</button>
        </div>
      </header>

      <div className="container">
        <h1>champs.info</h1>
        <p id="lead">search</p>
        <p>Search for your champion!</p>
        <input ref={inputText} type="text" placeholder="Who's your champion?" id="input" autoComplete='off' spellCheck="false" onChange={getValue} />
      </div>

      <Champion
        champion={champion}
        championImg={championImg}
        resultOpacity={resultOpacity}
      />

      <div className="backgroundLayer"></div>
      <img id="backgroundImg" src="https://i.pinimg.com/originals/3e/91/d8/3e91d84cfd3643dbfbdca1f742021568.jpg"></img>

      </>
  );
}

export default App;
