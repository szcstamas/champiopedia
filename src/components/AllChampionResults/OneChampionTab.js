import React from 'react'
import { motion } from "framer-motion";

const OneChampionTab = ({ oneChampTabName, oneChampTabKey, oneChampTabRole, oneChampTabOnClickFunction, oneChampTabTitle }) => {


    const regex = /[A-Z]/g;
    const upperCasesInChampName = oneChampTabName.match(regex);

    if (oneChampTabName.includes(upperCasesInChampName[1])) {

        oneChampTabName = oneChampTabName.replace(`${upperCasesInChampName[1]}`, ` ${upperCasesInChampName[1]}`);
    }

    return (

        <motion.a
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            key={oneChampTabName}
            className='oneChampLink'
            data-champrole={oneChampTabRole}
            href="#">

            <button style={{ backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${oneChampTabName.replace(' ', '')}_0.jpg)` }} className="oneChampButton" data-name={oneChampTabName.replace(' ', '')} key={oneChampTabKey} id={oneChampTabName} onClick={oneChampTabOnClickFunction}>
                <div className="oneChampHeader">
                    <div className="oneChampName">{oneChampTabName}</div>
                    <div className="oneChampTitle">{oneChampTabTitle}</div>
                </div>
                <div className="oneChampButtonShadow"></div>
            </button>
        </motion.a>
    )
}

export default OneChampionTab;