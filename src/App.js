import React, { useState, useEffect } from 'react';
import { Header, GoTopButton, SiteNameAndInput, AllChampionResults, OneChampionResults, Footer } from './components';
import LanguageLoader from './components/LanguageLoader';
import DocNotice from './components/DocNotice';
import functions from './constants/Functions';
import UniqueRoleImages from './constants/RoleImages';
import { EnglishSiteText, HungarianSiteText } from './constants/languages/SiteText';
import { SiteLanguages } from './constants/languages/SiteLanguages';
import './globalstyles/GlobalStyles.css';
import { LoaderImgs } from './constants/LoaderBg';

//destructuring languages and functions
const { huLanguage, engLanguage } = SiteLanguages;
const { fetchLolApiVersion, fetchStartingData, changeLanguageAndActiveClass, getChampionByInputName, resetValue, switchLever, changeInputToChamp, sortChampionsByRole } = functions;

//APP VARIABLE
const App = () => {

  //USED VARIABLES
  let inputText = React.createRef();
  let champInput = document.querySelector('#input');

  //for main API data
  const [oneChampData, setOneChampData] = useState([]);
  const [allChampData, setAllChampData] = useState([]);

  //for latest champion data
  const [latestChampName, setLatestChampName] = useState([]);
  const [latestChampTitle, setLatestChampTitle] = useState([]);
  const [latestChampImage, setLatestChampImage] = useState('');

  //for rendering unique roles in sort buttons
  const [uniqueRoles, setUniqueRoles] = useState([]);

  //for img of one champion and display of data
  const [championImg, setChampionImg] = useState('');
  const [oneChampionDisplay, setOneChampionDisplay] = useState(false);

  //for displaying boxes of all champions
  const [allChampionDisplay, setAllChampionDisplay] = useState(true);

  //for language buttons in header
  const [languageButtonActiveClass, setActiveClass] = useState(2);
  const [sortButtonActiveClass, setSortButtonActiveClass] = useState('0');

  //for displaying error when the champ name written in input field is incorrect or unknown
  const [inputErrorDisplay, setInputErrorDisplay] = useState(false);

  //for display of loader when changing language
  const [loaderDisplay, setLoaderDisplay] = useState(false);
  const [loaderBgImgIndex, setLoaderBgImgIndex] = useState(0);

  //for lever function which changes behaviour of champion-boxes when clicking on a lane icon on minimap
  const [lever, setLever] = useState(false);

  //for using language and version variables in API url
  const [siteText, setSiteText] = useState(EnglishSiteText);
  const [version, setVersion] = useState('');
  const [language, setLanguage] = useState(engLanguage);

  //for teamcomp-function
  const [champCompInfoText, setChampionCompRolesText] = useState(siteText.champCompDefaultText);
  const [championCompRolesColor, setChampionCompRolesColor] = useState('');
  const [championCompRolesIcon, setChampionCompRolesIcon] = useState("fa-solid fa-down-long");

  //get the latest version of api
  useEffect(() => {

    fetchLolApiVersion(setVersion);

  }, [])

  //rendering datas of all champions
  useEffect(() => {

    fetchStartingData(version, language, setLatestChampName, setLatestChampTitle, setLatestChampImage, setUniqueRoles, setAllChampData);

  },
    //data rendering by default and when these states changes
    [version, siteText, language])


  //RENDERED CONTENT
  return (
    <>
      {/* Tiny notice when window is loaded */}
      <DocNotice />

      {/* Language Loader */}
      <LanguageLoader
        siteText={siteText}
        isVisible={loaderDisplay}
        bgImg={LoaderImgs[loaderBgImgIndex]}
      />

      {/* Header of site */}
      <Header
        buttonLanguageClass={languageButtonActiveClass}
        buttonLanguageFunction={(e) => changeLanguageAndActiveClass(e, setLanguage, setActiveClass, setSiteText, huLanguage, engLanguage, HungarianSiteText, EnglishSiteText, inputText, version, language, setOneChampData, setChampionImg, setOneChampionDisplay, setAllChampionDisplay, setInputErrorDisplay, setChampionCompRolesText, setChampionCompRolesColor, setChampionCompRolesIcon, setLoaderDisplay, LoaderImgs, setLoaderBgImgIndex)}
      />

      {/* Go to top button */}
      <GoTopButton />

      {/* H1 and search input */}
      <SiteNameAndInput
        mainContainerText={siteText}
        getFunction={() => getChampionByInputName(version, inputText, language, setOneChampData, setChampionImg, setOneChampionDisplay, setAllChampionDisplay, setInputErrorDisplay)}
        resetFunction={() => resetValue(champInput, version, inputText, language, setOneChampData, setChampionImg, setOneChampionDisplay, setAllChampionDisplay, setInputErrorDisplay, setChampionCompRolesText, setChampionCompRolesColor, setChampionCompRolesIcon)}
        refValue={inputText}
        inputErrorText={siteText.inputError}
        inputErrorDisplay={inputErrorDisplay}
      />

      {/* Latest champion, minimap, sorting buttons and "all champ" buttons */}
      <AllChampionResults
        allChampionDisplay={allChampionDisplay}
        containerText={siteText}
        containerBackgroundImage={latestChampImage}
        latestChampName={latestChampName}
        latestChampTitle={latestChampTitle}
        champCompInfoText={champCompInfoText}
        championCompRolesColor={championCompRolesColor}
        championCompRolesIcon={championCompRolesIcon}
        leverFunction={(e) => switchLever(e, setSortButtonActiveClass, lever, setLever)}
        sortButtonClass={sortButtonActiveClass}
        changeFunction={(e) => changeInputToChamp(e, version, lever, champInput, inputText, language, setSortButtonActiveClass, setOneChampData, setLever, setChampionImg, setOneChampionDisplay, setAllChampionDisplay, setInputErrorDisplay, setChampionCompRolesText, setChampionCompRolesColor, setChampionCompRolesIcon)}
        allChampsData={allChampData}
        uniqueRoleArray={uniqueRoles}
        uniqueRoleIcons={UniqueRoleImages}
        sortChampFunction={(e) => sortChampionsByRole(e)}
      />

      {/* Data of one champion after request 200 */}
      <OneChampionResults
        oneChampionDisplay={oneChampionDisplay}
        champion={oneChampData}
        championImg={championImg}
        hp={siteText.hp}
        armor={siteText.armor}
        costType={siteText.cost}
        costTypeIfEmpty={siteText.costTypeIfEmpty}
        roleText={siteText.roleText}
        loreText={siteText.loreText}
        passiveText={siteText.passiveText}
        skillsText={siteText.skillsText}
        skillsCd={siteText.skillsCd}
        costText={siteText.costText}
        getValue={() => getChampionByInputName(version, inputText, language, setOneChampData, setChampionImg, setOneChampionDisplay, setAllChampionDisplay, setInputErrorDisplay, setChampionCompRolesText, setChampionCompRolesColor, setChampionCompRolesIcon)}
      />

      {/* Footer of site */}
      <Footer />

    </>
  );
}

export default App;
