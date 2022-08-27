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

//APP VARIABLE
const App = () => {

  //USED VARIABLES
  let inputText = React.createRef();
  let champInput = document.querySelector('#input');

  const [oneChampData, setOneChampData] = useState([]);
  const [allChampData, setAllChampData] = useState([]);

  const [latestChampName, setLatestChampName] = useState([]);
  const [latestChampTitle, setLatestChampTitle] = useState([]);
  const [latestChampImage, setLatestChampImage] = useState('');

  const [uniqueRoles, setUniqueRoles] = useState([]);

  const [championImg, setChampionImg] = useState('');
  const [oneChampionDisplay, setOneChampionDisplay] = useState(false);
  const [allChampionDisplay, setAllChampionDisplay] = useState(true);
  const [languageButtonActiveClass, setActiveClass] = useState('2');
  const [sortButtonActiveClass, setSortButtonActiveClass] = useState('0');

  const [inputErrorDisplay, setInputErrorDisplay] = useState(false);

  const [loaderDisplay, setLoaderDisplay] = useState(false);
  const [loaderBgImgIndex, setLoaderBgImgIndex] = useState(0);

  const [lever, setLever] = useState(false);

  const [siteText, setSiteText] = useState(EnglishSiteText);
  const [version, setVersion] = useState('');
  const [language, setLanguage] = useState(SiteLanguages.eng);

  const [champCompInfoText, setChampionCompRolesText] = useState(siteText.champCompDefaultText);
  const [championCompRolesColor, setChampionCompRolesColor] = useState('');
  const [championCompRolesIcon, setChampionCompRolesIcon] = useState("fa-solid fa-down-long");

  //get the latest version of api
  useEffect(() => {

    functions.fetchLolApiVersion(setVersion);

  }, [])

  //rendering datas of all champions
  useEffect(() => {

    functions.fetchStartingData(version, language, setLatestChampName, setLatestChampTitle, setLatestChampImage, setUniqueRoles, setAllChampData);

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
        buttonLanguageFunction={(e) => functions.changeLanguageAndActiveClass(e, setLanguage, setActiveClass, setSiteText, SiteLanguages.hun, SiteLanguages.eng, HungarianSiteText, EnglishSiteText, inputText, version, language, setOneChampData, setChampionImg, setOneChampionDisplay, setAllChampionDisplay, setInputErrorDisplay, setChampionCompRolesText, setChampionCompRolesColor, setChampionCompRolesIcon, setLoaderDisplay, LoaderImgs, setLoaderBgImgIndex)}
      />

      {/* Go to top button */}
      <GoTopButton />

      {/* H1 and search input */}
      <SiteNameAndInput
        mainContainerText={siteText}
        getFunction={() => functions.getChampionByInputName(version, inputText, language, setOneChampData, setChampionImg, setOneChampionDisplay, setAllChampionDisplay, setInputErrorDisplay)}
        resetFunction={() => functions.resetValue(champInput, version, inputText, language, setOneChampData, setChampionImg, setOneChampionDisplay, setAllChampionDisplay, setInputErrorDisplay, setChampionCompRolesText, setChampionCompRolesColor, setChampionCompRolesIcon)}
        refValue={inputText}
        inputErrorText={siteText.inputError}
        inputErrorDisplay={inputErrorDisplay}
      />

      {/* Latest champion, minimap, sorting buttons and 'all champ' buttons */}
      <AllChampionResults
        allChampionDisplay={allChampionDisplay}
        containerText={siteText}
        containerBackgroundImage={latestChampImage}
        latestChampName={latestChampName}
        latestChampTitle={latestChampTitle}
        champCompInfoText={champCompInfoText}
        championCompRolesColor={championCompRolesColor}
        championCompRolesIcon={championCompRolesIcon}
        leverFunction={(e) => functions.switchLever(e, setSortButtonActiveClass, lever, setLever)}
        sortButtonClass={sortButtonActiveClass}
        changeFunction={(e) => functions.changeInputToChamp(e, version, lever, champInput, inputText, language, setSortButtonActiveClass, setOneChampData, setLever, setChampionImg, setOneChampionDisplay, setAllChampionDisplay, setInputErrorDisplay, setChampionCompRolesText, setChampionCompRolesColor, setChampionCompRolesIcon)}
        allChampsData={allChampData}
        uniqueRoleArray={uniqueRoles}
        uniqueRoleIcons={UniqueRoleImages}
        sortChampFunction={(e) => functions.sortChampionsByRole(e)}
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
        getValue={() => functions.getChampionByInputName(version, inputText, language, setOneChampData, setChampionImg, setOneChampionDisplay, setAllChampionDisplay, setInputErrorDisplay, setChampionCompRolesText, setChampionCompRolesColor, setChampionCompRolesIcon)}
      />

      {/* Footer of site */}
      <Footer />

    </>
  );
}

export default App;
