import axios from "axios";
import { arrayOfRolesOfAssignedChampions, arrayOfChampionInTeamComp } from "./MainConstants";

//USED FUNCTIONS
//get the latest version of api
function fetchLolApiVersion(versionstate) {
    axios.get('https://ddragon.leagueoflegends.com/api/versions.json')
        .then(res => {

            const versionValues = Object.values(res.data)
            const versions = versionValues.map(i => i)
            const latestVersion = versions[0];

            versionstate(latestVersion)
        })
}

//rendering datas of all champions
function fetchStartingData(version, language, latestChampName, latestChampTitle, latestChampImage, champRoles, allChampionData) {
    axios.get(`http://ddragon.leagueoflegends.com/cdn/${version}/data/${language}/champion.json`)
        .then(res => {

            const allChamps = res.data.data
            const champValues = Object.values(allChamps)
            const champNumbers = champValues.map(i => i.key) //getting the key property of every champion

            //getting all champion roles from api using proper path (then loop over them)
            const allChampRoles = champValues.map(i => i.tags[0])
            //take looped champ roles to a new array (these roles are unique: there is no duplication in array)
            const uniqueChampRoles = [...new Set(allChampRoles)]

            //The key of latest champ (taking highest key by spreading champNumbers and converting it to string)
            const latestChampsNumberAsString = Math.max(...champNumbers).toString()

            //Latest champ
            //getting values of api array and loop over its data
            Object.values(allChamps).forEach(i => {

                //if champion's key is equal to latest champ's key, display it's id (name), title (champion's title) and image as background (champion's image)  
                if (i.key === latestChampsNumberAsString) {
                    latestChampName(i.id)
                    latestChampTitle(i.title)
                    latestChampImage(`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${i.id}_0.jpg`)
                }
            })

            //rendering unique champ roles
            champRoles(uniqueChampRoles)

            //rendering data of all champion 
            allChampionData(champValues)
        })
}

//activating map roles when clicking on lane on minimap
function switchLever(e, setSortButtonActiveClass, lever, setLever) {

    const targetClassname = e.target.classList

    switch (true) {
        case targetClassname.contains('topCircle'):
            setSortButtonActiveClass('1')
            break;
        case targetClassname.contains('midCircle'):
            setSortButtonActiveClass('2')
            break;
        case targetClassname.contains('jungleCircle'):
            setSortButtonActiveClass('3')
            break;
        case targetClassname.contains('bottomCircle'):
            setSortButtonActiveClass('4')
            break;
        case targetClassname.contains('supportCircle'):
            setSortButtonActiveClass('5')
            break;
        default:
            break;
    }

    if (lever === false) {
        setLever(true);
    }
}

//show data of one champ when clicking on its button
function changeInputToChamp(e, version, lever, champInput, inputText, language, sortButtonActiveClass, setOneChampData, setLever, setChampionImg, setOneChampionDisplay, setAllChampionDisplay, setInputErrorDisplay, setChampionCompRolesText, setChampionCompRolesColor, setChampionCompRolesIcon) {

    // if the lever is set to false (which lever is controlled by switchLever function above), the informations about one champion loads in as you press on its own button
    if (lever === false) {
        champInput.value = e.target.dataset.name;
        getChampionByInputName(version, inputText, language, setOneChampData, setChampionImg, setOneChampionDisplay, setAllChampionDisplay, setInputErrorDisplay, setChampionCompRolesText, setChampionCompRolesColor, setChampionCompRolesIcon);
        setAllChampionDisplay(false);
    }
    // if lever is true, assemble clicked champ to picked lane
    else {
        const sortLaneNames = document.querySelectorAll('.assembleTeamNames');
        const selectedActiveSortLaneButton = document.querySelector('.activeSortButton');

        let roleOfChosenChampion = e.target.parentElement.dataset.champrole;
        let nameOfChosenChampion = e.target.dataset.name;

        sortLaneNames.forEach(sortLaneName => {

            if (!arrayOfChampionInTeamComp.includes(nameOfChosenChampion)) {

                if (selectedActiveSortLaneButton.dataset.sortlanename === sortLaneName.dataset.lane) {

                    selectedActiveSortLaneButton.childNodes[0].src = `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${e.target.dataset.name}.png`;
                    selectedActiveSortLaneButton.style.overflow = 'hidden';
                    selectedActiveSortLaneButton.childNodes[0].style.width = '110%';
                    selectedActiveSortLaneButton.childNodes[0].style.filter = 'brightness(100%)';

                    sortLaneName.textContent = e.target.dataset.name;
                    sortLaneName.dataset.role = roleOfChosenChampion;
                    sortButtonActiveClass('0')

                    //CHAMPION TEAM-COMPOSITION CHECKER
                    if (arrayOfRolesOfAssignedChampions.length < 5) {

                        arrayOfRolesOfAssignedChampions.push(roleOfChosenChampion);
                        arrayOfChampionInTeamComp.push(nameOfChosenChampion);

                    } else {
                        //when clicking on a championBox after selecting a lane-icon, saves role of champion into an array
                        switch (selectedActiveSortLaneButton.dataset.sortlanename) {
                            case "top":
                                arrayOfRolesOfAssignedChampions[0] = roleOfChosenChampion;
                                arrayOfChampionInTeamComp[0] = nameOfChosenChampion;
                                break;
                            case "jungle":
                                arrayOfRolesOfAssignedChampions[1] = roleOfChosenChampion;
                                arrayOfChampionInTeamComp[1] = nameOfChosenChampion;
                                break;
                            case "mid":
                                arrayOfRolesOfAssignedChampions[2] = roleOfChosenChampion;
                                arrayOfChampionInTeamComp[2] = nameOfChosenChampion;
                                break;
                            case "bottom":
                                arrayOfRolesOfAssignedChampions[3] = roleOfChosenChampion;
                                arrayOfChampionInTeamComp[3] = nameOfChosenChampion;
                                break;
                            case "support":
                                arrayOfRolesOfAssignedChampions[4] = roleOfChosenChampion;
                                arrayOfChampionInTeamComp[4] = nameOfChosenChampion;
                                break;
                            default:
                                return;
                        }
                    };

                }
            } else {
                return
            }
        })

        setLever(false);
    }

}

//change between english and hungarian language when user clicks on proper button
function changeLanguageAndActiveClass(e, setLanguage, setActiveClass, setSiteText, huLang, enLang, huText, enText, inputText, version, language, setOneChampData, setChampionImg, setOneChampionDisplay, setAllChampionDisplay, setInputErrorDisplay, setChampionCompRolesText, setChampionCompRolesColor, setChampionCompRolesIcon, setLoaderDisplay, arrayOfLoaderBgImages, setLoaderBgImgIndex) {

    let randomNumber = Math.floor(Math.random() * arrayOfLoaderBgImages.length);

    if (e.target.classList.contains('huLanguage')) {

        // if clicked on button that contains huLanguage class, change the api url from en_US to hu_HU 
        setLanguage(huLang);
        // if clicked on that button, give it an .active classname
        setActiveClass('1');
        // if clicked on that button, modify text contents to hungarian
        setSiteText(huText);

        //making loader visible for 2sec
        setTimeout(() => { setLoaderDisplay(true) }, 0);
        setTimeout(() => { setLoaderDisplay(false) }, 2000);

        //changing bg to a random bg from array
        setLoaderBgImgIndex(randomNumber);
    }

    else if (e.target.classList.contains('engLanguage')) {

        // if clicked on button that NOT contains huLanguage class (in this case its only one other button), change the api url from hu_HU to en_US 
        setLanguage(enLang);
        // if clicked on that button, give it a .active classname
        setActiveClass('2');
        // if clicked on that button, modify text contents to english
        setSiteText(enText)

        //making loader visible for 2sec
        setTimeout(() => { setLoaderDisplay(true) }, 0);
        setTimeout(() => { setLoaderDisplay(false) }, 2000);

        //changing bg to a random bg from array
        setLoaderBgImgIndex(randomNumber);
    }

    //reset the value of main input field, so the user gets back to homepage
    inputText.current.value = '';
    //rerun the getValue function, which rerenders and fetches api url again
    getChampionByInputName(version, inputText, language, setOneChampData, setChampionImg, setOneChampionDisplay, setAllChampionDisplay, setInputErrorDisplay, setChampionCompRolesText, setChampionCompRolesColor, setChampionCompRolesIcon);
}

//reset input value when clicking on reset button next to inputfield
function resetValue(champInput, version, inputText, language, setOneChampData, setChampionImg, setOneChampionDisplay, setAllChampionDisplay, setInputErrorDisplay, setChampionCompRolesText, setChampionCompRolesColor, setChampionCompRolesIcon) {

    champInput.value = '';
    //rerun the getChampionByInputName function, which rerenders and fetches api url again
    getChampionByInputName(version, inputText, language, setOneChampData, setChampionImg, setOneChampionDisplay, setAllChampionDisplay, setInputErrorDisplay, setChampionCompRolesText, setChampionCompRolesColor, setChampionCompRolesIcon);
    setInputErrorDisplay(false);
    //reset size of array of champroles which takes place in minimap
    arrayOfRolesOfAssignedChampions.length = 0;
}

//sort all champions by role
function sortChampionsByRole(e) {

    //select all champion buttons
    const champButtons = document.querySelectorAll('.oneChampLink')
    //loop through them
    champButtons.forEach(i => {

        //if sort button's dataset is equal to champion button's dataset (which was given by api data), show that champion button
        if (e.target.dataset.champ === i.dataset.champrole) {

            i.style.display = 'block';
        }

        //if its not equal, hide them
        else {

            i.style.display = 'none';
        }
    });
}

//for getting the correct link and data of proper api when writing the correct champ name into inputfield
function getChampionByInputName(version, inputText, language, setOneChampData, setChampionImg, setOneChampionDisplay, setAllChampionDisplay, setInputErrorDisplay, setChampionCompRolesText, setChampionCompRolesColor, setChampionCompRolesIcon) {

    let value = inputText.current.value;

    // if user types name-slangs (these are mainly abbreviations), show champion -- it's a long list, so do not open if not necessary
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
        default:
            break;
            ;
    }

    // erre kéne egy szebb megoldás (ha az input tartalmaz space-t, akkor azt a spacet cserélje le)... a .contains nem működik
    if (value === 'dr mundo'
        || value === 'aurelion sol'
        || value === 'kog maw'
        || value === 'lee sin'
        || value === 'master yi'
        || value === 'miss fortune'
        || value === 'rek sai'
        || value === 'tahm kench'
        || value === 'twisted fate'
        || value === 'xin zhao'
    ) {

        //remove space that was written by user 
        const noSpaceWord = value.split(' ');
        //divide that word: first word + second word which first letter is in uppercase + rest of second word 
        const firstWordPlusFirstLetterOfSecondWordUppercase = noSpaceWord[0] + noSpaceWord[1].charAt(0).toUpperCase() + noSpaceWord[1].slice(1);
        //replace value variable with divided and modified word 
        value = firstWordPlusFirstLetterOfSecondWordUppercase;
    }

    //make first letter of search field value uppercase, so it can render properly
    const inputValue = value.charAt(0).toUpperCase() + value.slice(1);

    //main api url
    const dataBaseUrl = `http://ddragon.leagueoflegends.com/cdn/${version}/data/${language}/champion/${inputValue}.json`

    //main image api url
    const imgBaseUrl = `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${inputValue}.png`

    //using axios to fetch api data
    axios.get(dataBaseUrl)
        //when champ name is correct, renders api data
        .then(res => {

            //give one-champ api data a single variable
            const champData = res.data.data[inputValue]
            //set one-champ api data to OneChampionResults component 
            setOneChampData(champData)
            //set one-champ image api data to OneChampionResults component 
            setChampionImg(imgBaseUrl)
            //hiding all champions and show one champion
            setOneChampionDisplay(true)
            setAllChampionDisplay(false)
            //set inputerror display to none
            setInputErrorDisplay(false)
            //reset mapcontainer text and emptying array of champroles
            setChampionCompRolesText("Set up your team!");
            setChampionCompRolesColor("");
            setChampionCompRolesIcon("fa-solid fa-down-long");
            arrayOfRolesOfAssignedChampions.length = 0;

        })

        //when champ name is incorrect, hide all data
        .catch(
            //hiding one champion and show all champions
            setOneChampionDisplay(false),
            setAllChampionDisplay(true),
            //set inputerror display to flex
            setInputErrorDisplay(true),
        )

    if (value === '') {

        setInputErrorDisplay(false);
    }

}

const functions = { fetchLolApiVersion, fetchStartingData, switchLever, changeInputToChamp, changeLanguageAndActiveClass, resetValue, sortChampionsByRole, getChampionByInputName };

export default functions;