import React from 'react';
import { motion } from "framer-motion";

const LatestChampionContainer = ({ latestContainerHeader, containerBackgroundImage, onClickFunction, latestChampName, latestChampTitle }) => {

    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="latestChampionContainer">
            <div className="latestChampionHeader">{latestContainerHeader}</div>
            <div style={{ background: `url(${containerBackgroundImage})` }} className='latestChampion' data-name={latestChampName} onClick={onClickFunction}>
                <h4>{latestChampName}</h4>
                <p>{latestChampTitle}</p>
                <div className="latestChampionBackgroundLayer"></div>
            </div>
        </motion.div>
    )
}

export default LatestChampionContainer