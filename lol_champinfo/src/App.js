import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './styles/styles.css';
import Champion from './components/Champion';
import Background from './components/Background';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import AllChampResult from './components/AllChampResult';
import UniqueRoleImages from './components/RoleImages';
import { FaBeer } from 'react-icons/fa';


//MAIN VARIABLE
const App = () => {

  //USED VARIABLES
  let inputText = React.createRef();
  let champInput = document.querySelector('#input')
  const [oneChampData, setOneChampData] = useState([]);
  const [allChampData, setAllChampData] = useState([]);
  const [latestChampName, setLatestChampName] = useState([]);
  const [latestChampTitle, setLatestChampTitle] = useState([]);
  const [latestChampImage, setLatestChampImage] = useState('');
  const [uniqueRoles, setUniqueRoles] = useState([]);
  const [championImg, setChampionImg] = useState('');
  const [resultOpacity, setResultOpacity] = useState('0');
  const [resultIndex, setResultIndex] = useState('-100');
  const [resultDisplay, setResultDisplay] = useState('none');
  const [allChampContainerOpacity, setAllChampContainerOpacity] = useState('1');
  const [allChampContainerIndex, setAllChampContainerIndex] = useState('100');
  const [allChampContainerDisplay, setAllChampContainerDisplay] = useState('flex');
  const [languageButtonActiveClass, setActiveClass] = useState('2');
  const [siteText, setSiteText] = useState({
    searchH2Title: 'search',
    searchParagraph: 'Search for your champion!',
    searchPlaceholder: 'Who is your champion?',
    latestChamp: 'Latest champion',
    hp: 'Starting health points',
    armor: 'Starting armor points',
    cost: 'Cost type',
    roleText: 'role',
    loreText: 'lore',
    passiveText: 'passive',
    skillsText: 'skills',
    costText: 'Cost on each skill-level',
  });
  const hun = 'hu_HU'
  const eng = 'en_US'
  const [language, setLanguage] = useState(eng);




  //USED FUNCTIONS

  //for rendering datas of all champions
  useEffect(() => {

    axios.get(`http://ddragon.leagueoflegends.com/cdn/12.6.1/data/${language}/champion.json`)
      .then(res => {

        console.log(res)

        const allChamps = res.data.data
        const champNames = Object.keys(allChamps)
        const champValues = Object.values(allChamps)
        const champNumbers = champValues.map(i => i.key)
        const allChampRoles = champValues.map(i => i.tags[0])
        const uniqueChampRoles = [...new Set(allChampRoles)];

        // setUniqueRoles(uniqueChampRoles)

        //The key of latest champ converted to string
        const latestChampsNumberAsString = Math.max(...champNumbers).toString()

        //Latest champ
        const latestChampName = Object.values(allChamps).map(i => {

          if (i.key === latestChampsNumberAsString) {
            setLatestChampName(i.id)
            setLatestChampTitle(i.title)
            setLatestChampImage(`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${i.id}_0.jpg`)
          }
        })
        setUniqueRoles(uniqueChampRoles)
        setAllChampData(champValues)
      })

  }, [siteText])
  //for setting up one champ when clicking on its button
  function changeInputToChamp(e) {

    champInput.value = e.target.dataset.name
    getValue()
    setAllChampContainerOpacity('0')
    // console.log(e.target.value)

  }

  //for change between english and hungarian language when user clicks on proper button
  function changeLanguageAndActiveClass(e) {

    if (e.target.classList.contains('huLanguage')) {

      setLanguage(hun);
      setActiveClass('1');
      setSiteText({

        searchH2Title: 'keresés',
        searchParagraph: 'Keress rá a bajnokodra!',
        searchPlaceholder: 'Ki a te bajnokod?',
        latestChamp: 'Legújabb hős',
        hp: 'Kezdő életpontok',
        armor: 'Kezdő páncél',
        cost: 'Képességek költségtípusa',
        roleText: 'szerep',
        loreText: 'történet',
        passiveText: 'passzív',
        skillsText: 'képességek',
        costText: 'Képesség költsége szinttől függően',
        fighter: 'harcos'
      })
    }

    else {

      setLanguage(eng);
      setActiveClass('2');
      setSiteText({

        searchH2Title: 'search',
        searchParagraph: 'Search for your champ!',
        searchPlaceholder: 'Who is your champion?',
        latestChamp: 'Latest champion',
        hp: 'Starting health points',
        armor: 'Starting armor points',
        cost: 'Cost type',
        roleText: 'role',
        loreText: 'lore',
        passiveText: 'passive',
        skillsText: 'skills',
        costText: 'Cost'
      })
    }

    inputText.current.value = '';
    getValue();
  }

  //for reset input value when clicking on reset button next to inputfield
  function resetValue() {

    champInput.value = ''
    getValue()
  }

  function sortChampData(e) {

    console.log(e.target.dataset.champ)
    const champButtons = document.querySelectorAll('.oneChampLink')
    champButtons.forEach(i => {

      if (e.target.dataset.champ === i.dataset.champrole) {

        i.style.display = 'block'
      }
      else {

        i.style.display = 'none'
      }
    })
  }

  //for getting the correct link and data of proper api when writing the correct champ name into inputfield
  function getValue() {

    let value = inputText.current.value

    // if user types name-slangs (these are mainly abbreviations) -- it's a long list, so do not open if not necessary
    switch (value) {
      case 'blitz':
        value = 'blitzcrank'
        break;
      case 'mundo':
        value = 'drMundo'
        break;
      case 'cass':
        value = 'cassiopeia'
        break;
      case 'wukong':
        value = 'monkeyKing'
        break;
      case 'wuki':
        value = 'monkeyKing'
        break;
      case 'ali':
        value = 'alistar'
        break;
      case 'cait':
        value = 'caitlyn'
        break;
      case 'cho':
        value = 'chogath'
        break;
      case 'chogi':
        value = 'chogath'
        break;
      case 'eve':
        value = 'evelynn'
        break;
      case 'ez':
        value = 'ezreal'
        break;
      case 'fiddle':
        value = 'fiddlesticks'
        break;
      case 'gp':
        value = 'gangplank'
        break;
      case 'heca':
        value = 'hecarim'
        break;
      case 'heimer':
        value = 'heimerdinger'
        break;
      case 'jarvan':
        value = 'jarvanIV'
        break;
      case 'kass':
        value = 'kassadin'
        break;
      case 'kata':
        value = 'katarina'
        break;
      case 'kha':
        value = 'khazix'
        break;
      case 'kog':
        value = 'kogMaw'
        break;
      case 'lb':
        value = 'leBlanc'
        break;
      case 'lee':
        value = 'leeSin'
        break;
      case 'malz':
        value = 'malzahar'
        break;
      case 'mao':
        value = 'maokai'
        break;
      case 'yi':
        value = 'masterYi'
        break;
      case 'master':
        value = 'masterYi'
        break;
      case 'mf':
        value = 'missFortune'
        break;
      case 'morde':
        value = 'mordekaiser'
        break;
      case 'morg':
        value = 'morgana'
        break;
      case 'noc':
        value = 'nocturne'
        break;
      case 'ori':
        value = 'orianna'
        break;
      case 'rene':
        value = 'renekton'
        break;
      case 'seju':
        value = 'sejuani'
        break;
      case 'sera':
        value = 'seraphine'
        break;
      case 'tahm':
        value = 'tahmKench'
        break;
      case 'devil':
        value = 'teemo'
        break;
      case 'tito':
        value = 'teemo'
        break;
      case 'trist':
        value = 'tristana'
        break;
      case 'trynda':
        value = 'tryndamere'
        break;
      case 'tf':
        value = 'twistedFate'
        break;
      case 'vel':
        value = 'velkoz'
        break;
      case 'vlad':
        value = 'vladimir'
        break;
      case 'voli':
        value = 'volibear'
        break;
      case 'ww':
        value = 'warwick'
        break;
      case 'xin':
        value = 'xinZhao'
        break;
      case 'yas':
        value = 'yasuo'
        break;
    }

    // erre kéne egy szebb megoldás (ha az input tartalmaz space-t, akkor azt a spacet cserélje le)... a .contains nem működik
    if (inputText.current.value === 'dr mundo'
      || inputText.current.value === 'aurelion sol'
      || inputText.current.value === 'kog maw'
      || inputText.current.value === 'lee sin'
      || inputText.current.value === 'master yi'
      || inputText.current.value === 'miss fortune'
      || inputText.current.value === 'rek sai'
      || inputText.current.value === 'tahm kench'
      || inputText.current.value === 'twisted fate'
      || inputText.current.value === 'xin zhao'
    ) {

      const words = inputText.current.value.split(' ')
      const upperCaseOnFirstLetterOfSecondWord = words[0] + words[1].charAt(0).toUpperCase() + words[1].slice(1)
      inputText.current.value = upperCaseOnFirstLetterOfSecondWord
      inputText.current.value.replace(' ', '')
      getValue()
    }

    const inputValue = value.charAt(0).toUpperCase() + value.slice(1);
    const dataBaseUrl = `http://ddragon.leagueoflegends.com/cdn/12.6.1/data/${language}/champion/${inputValue}.json`
    const imgBaseUrl = `http://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${inputValue}.png`

    axios.get(dataBaseUrl)
      //when champ name is correct, renders api data
      .then(res => {

        const champData = res.data.data[inputValue]
        setOneChampData(champData)
        setChampionImg(imgBaseUrl)
        setResultOpacity('1')
        setResultIndex('100')
        setResultDisplay('block')
        setAllChampContainerOpacity('0')
        setAllChampContainerIndex('-100')
        setAllChampContainerDisplay('none')

      })

      //when champ name is incorrect, hide all data
      .catch(
        setResultOpacity('0'),
        setResultIndex('-100'),
        setResultDisplay('none'),
        setAllChampContainerOpacity('1'),
        setAllChampContainerIndex('100'),
        setAllChampContainerDisplay('flex')
      )

  }


  //RENDERED CONTENT
  return (
    <>
      {/* Header of site */}
      <Header
        buttonLanguageClass={languageButtonActiveClass}
        buttonLanguageFunction={changeLanguageAndActiveClass}
      />

      {/* Main static container of site */}
      <MainContainer
        mainContainerText={siteText}
        getFunction={getValue}
        resetFunction={resetValue}
        refValue={inputText}
      />

      {/* Container of "all-champ" buttons */}

      <AllChampResult
        containerOpacity={allChampContainerOpacity}
        containerDisplay={allChampContainerDisplay}
        containerIndex={allChampContainerIndex}
        containerText={siteText}
        containerBackgroundImage={latestChampImage}
        latestChampName={latestChampName}
        latestChampTitle={latestChampTitle}
        changeFunction={changeInputToChamp}
        allChampsData={allChampData}
        uniqueRoleArray={uniqueRoles}
        uniqueRoleIcons={UniqueRoleImages}
        sortChampFunction={sortChampData}
      />

      {/* Container for datas of one champion */}
      <Champion
        champion={oneChampData}
        championImg={championImg}
        hp={siteText.hp}
        armor={siteText.armor}
        costType={siteText.cost}
        resultOpacity={resultOpacity}
        resultIndex={resultIndex}
        resultDisplay={resultDisplay}
        roleText={siteText.roleText}
        loreText={siteText.loreText}
        passiveText={siteText.passiveText}
        skillsText={siteText.skillsText}
        costText={siteText.costText}
        getValue={getValue}
      />

      {/* Background image and a layer which gives an overlay-gradient to it */}
      <Background />

    </>
  );
}

export default App;
