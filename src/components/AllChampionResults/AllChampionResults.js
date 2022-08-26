import React from 'react';
import LaneIcons from '../../constants/LaneIcons';
import LatestChampionContainer from './LatestChampionContainer';
import MapContainer from './MapContainer';
import OneChampionTab from './OneChampionTab';
import SortButton from './SortButton';
import { motion, AnimatePresence } from "framer-motion";

const AllChampionResults = ({ allChampionDisplay, containerText, containerBackgroundImage, latestChampName, latestChampTitle, sortButtonClass, leverFunction, changeFunction, sortChampFunction, uniqueRoleArray, uniqueRoleIcons, allChampsData, champCompInfoText, championCompRolesColor, championCompRolesIcon }) => {
    return (
        <AnimatePresence>
            {allChampionDisplay && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: 'easeInOut' }}
                    exit={{ opacity: 0 }}

                    className="champContentContainer">
                    <div className="latestChampAndMinimap">
                        <LatestChampionContainer
                            latestContainerHeader={containerText.latestChamp}
                            containerBackgroundImage={containerBackgroundImage}
                            onClickFunction={changeFunction}
                            latestChampName={latestChampName}
                            latestChampTitle={latestChampTitle}
                        />
                        <MapContainer
                            siteText={containerText}
                            minimapHeaderText={containerText.minimapHeader}
                            minimapInfoText={containerText.minimapInfo}
                            laneIconClass={sortButtonClass}
                            champCompInfoText={containerText.champCompDefaultText}
                            championCompRolesColor={championCompRolesColor}
                            championCompRolesIcon={championCompRolesIcon}
                            laneIconOnclickFunction={leverFunction}
                            laneIconTopImageSrc={LaneIcons.top}
                            laneIconMidImageSrc={LaneIcons.middle}
                            laneIconJungleImageSrc={LaneIcons.jungle}
                            laneIconBottomImageSrc={LaneIcons.bottom}
                            laneIconSupportImageSrc={LaneIcons.support}
                        />
                    </div>
                    <div id="sortAllChampionsContainer">
                        {uniqueRoleArray && uniqueRoleArray.map((i, index) => {

                            return (
                                <SortButton
                                    animationDelay={"0." + index}
                                    key={index}
                                    roleName={i}
                                    roleIcon={uniqueRoleIcons[index]}
                                    sortChampOnClickFunction={sortChampFunction}
                                />
                            )
                        })}
                    </div>
                    <div className="allChampionContainer" id="allChampionContainer">
                        {allChampsData.map((i) => {
                            return (
                                <OneChampionTab
                                    oneChampTabName={i.id}
                                    key={i.key}
                                    oneChampTabKey={i.key}
                                    oneChampTabRole={i.tags[0]}
                                    oneChampTabOnClickFunction={changeFunction}
                                    oneChampTabTitle={i.title}
                                />
                            )
                        })}
                    </div>
                </motion.div >
            )}
        </AnimatePresence>
    )
}

export default AllChampionResults