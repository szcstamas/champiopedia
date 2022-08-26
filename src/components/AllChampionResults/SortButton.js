import React from 'react';
import { motion } from "framer-motion";

const SortButton = ({ animationDelay, roleName, roleIcon, sortChampOnClickFunction }) => {
    return (
        <motion.a
            initial={{ x: -50 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: .2, delay: animationDelay }}
            whileInView={{ x: 0 }} key={roleName} href='#allChampionContainer' data-champ={roleName} onClick={sortChampOnClickFunction}>
            <div className="sortAllChampsButtonImageContainer">{roleIcon}</div>
            {roleName}</motion.a>
    )
}

export default SortButton;