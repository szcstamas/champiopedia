import React from 'react';
import { motion } from "framer-motion";
import { arrayOfRolesOfAssignedChampions } from "../../constants/MainConstants";

const MapContainer = ({ siteText, minimapHeaderText, minimapInfoText, laneIconClass, laneIconOnclickFunction, laneIconTopImageSrc, laneIconMidImageSrc, laneIconJungleImageSrc, laneIconBottomImageSrc, laneIconSupportImageSrc, champCompInfoText, championCompRolesColor, championCompRolesIcon }) => {

    //this array is filled up by other function in Function.js
    if (arrayOfRolesOfAssignedChampions.length === 5) {
        if (!arrayOfRolesOfAssignedChampions.includes("Mage")) {
            champCompInfoText = siteText.champCompMageMissing;
            championCompRolesColor = "rgb(255, 104, 104)";
            championCompRolesIcon = "fa-solid fa-circle-exclamation";
        } else if (!arrayOfRolesOfAssignedChampions.includes("Assassin") && !arrayOfRolesOfAssignedChampions.includes("Marksman")) {
            champCompInfoText = siteText.champCompAttackDamageMissing;
            championCompRolesColor = "rgb(255, 104, 104)";
            championCompRolesIcon = "fa-solid fa-circle-exclamation";
        } else if (!arrayOfRolesOfAssignedChampions.includes("Marksman")) {
            champCompInfoText = siteText.champCompWhoIsAdc;
            championCompRolesColor = "rgb(230, 213, 64)";
            championCompRolesIcon = "fa-solid fa-question";
        } else if (!arrayOfRolesOfAssignedChampions.includes("Tank")) {
            champCompInfoText = siteText.champCompWhoIsTank;
            championCompRolesColor = "rgb(230, 213, 64)";
            championCompRolesIcon = "fa-solid fa-question";
        } else if (arrayOfRolesOfAssignedChampions.includes(("Mage" && "Tank" && "Marksman" && "Fighter" && "Assassin") || ("Mage" && "Tank" && "Marksman" && "Support" && "Fighter") || ("Mage" && "Tank" && "Marksman" && "Support" && "Assassin") || ("Mage" && "Tank" && "Marksman" && "Fighter"))) {
            champCompInfoText = siteText.champCompGoodSetup;
            championCompRolesColor = "rgb(48, 191, 38)";
            championCompRolesIcon = "fa-solid fa-circle-check";
        } else {
            champCompInfoText = siteText.champCompNotBadSetup;
            championCompRolesColor = "rgb(175, 214, 69)";
            championCompRolesIcon = "fa-solid fa-thumbs-up";
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: .1 } }}
            className="mapContainer"
            id="mapContainer"
        >
            <div className="latestChampionHeader">
                <p className="champCompInfoText" style={{ color: championCompRolesColor }}><i className={championCompRolesIcon}></i>
                    {champCompInfoText} {arrayOfRolesOfAssignedChampions.length}/5</p>
                <p>{minimapHeaderText}</p>
                <span className="assembleInfo"><span>i</span><span className='assembleText'>{minimapInfoText}</span></span>
            </div>
            <div className="assembleAndMinimapContainer">
                <div className="minimapImgContainer">
                    <a href='#sortAllChampionsContainer' className={laneIconClass === '1' ? 'topCircle minimapCircle activeSortButton' : 'topCircle minimapCircle'} data-sortlanename='top' onClick={laneIconOnclickFunction}><img src={laneIconTopImageSrc} alt="top icon" /></a>
                    <a href='#sortAllChampionsContainer' className={laneIconClass === '2' ? 'midCircle minimapCircle activeSortButton' : 'midCircle minimapCircle'} data-sortlanename='mid' onClick={laneIconOnclickFunction}><img src={laneIconMidImageSrc} alt="middle icon" /></a>
                    <a href='#sortAllChampionsContainer' className={laneIconClass === '3' ? 'jungleCircle minimapCircle activeSortButton' : 'jungleCircle minimapCircle'} data-sortlanename='jungle' onClick={laneIconOnclickFunction}><img src={laneIconJungleImageSrc} alt="jungle icon" /></a>
                    <a href='#sortAllChampionsContainer' className={laneIconClass === '4' ? 'bottomCircle minimapCircle activeSortButton' : 'bottomCircle minimapCircle'} data-sortlanename='bottom' onClick={laneIconOnclickFunction}><img src={laneIconBottomImageSrc} alt="bottom icon" /></a>
                    <a href='#sortAllChampionsContainer' className={laneIconClass === '5' ? 'supportCircle minimapCircle activeSortButton' : 'supportCircle minimapCircle'} data-sortlanename='support' onClick={laneIconOnclickFunction}><img src={laneIconSupportImageSrc} alt="support icon" /></a>
                    <img src="http://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map11.png" alt="league of legends minimap" />
                </div>
                <div className="assembleTeamContainer">
                    <div className="assembleTeam">
                        <h4>Top</h4><p className='assembleTeamNames' data-lane='top' data-role=''>-</p>
                    </div>
                    <div className="assembleTeam">
                        <h4>Mid</h4><p className='assembleTeamNames' data-lane='mid' data-role=''>-</p>
                    </div>
                    <div className="assembleTeam">
                        <h4>Jungle</h4><p className='assembleTeamNames' data-lane='jungle' data-role=''>-</p>
                    </div>
                    <div className="assembleTeam">
                        <h4>Bottom</h4><p className='assembleTeamNames' data-lane='bottom' data-role=''>-</p>
                    </div>
                    <div className="assembleTeam">
                        <h4>Support</h4><p className='assembleTeamNames' data-lane='support' data-role=''>-</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default MapContainer