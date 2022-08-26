import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import SkillBox from './SkillBox';
import { SkillKeys } from '../../constants/SkillKeys';
import './OneChampionResults.scss';

const OneChampionResults = ({ oneChampionDisplay, champion, championImg, hp, armor, costType, roleText, loreText, passiveText, skillsText, skillsCd, costText, costTypeIfEmpty }) => {

    //if value of champion.partype is empty, replace it with costTypeIfEmpty (unknown)
    champion.partype = champion.partype === "" ? champion.partype = costTypeIfEmpty : champion.partype;

    //replacing unnecessary phrases in API call on champion.passive.description
    if (champion.passive) {
        champion.passive.description = champion.passive.description.replace('<physicalDamage>physical damage</physicalDamage>', 'physical damage').replace('<magicalDamage>magical damage</magicalDamage>', 'magical damage').replace(/<font color='#669900'>|<font color='#FF9900'>|<font color='#cccc00'>|<br>/g, ' ').replace(/<\/font>/g, '');
    }

    return (
        <AnimatePresence>
            {oneChampionDisplay && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: 'easeInOut' }}
                    exit={{ opacity: 0 }}

                    className="results">

                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        className="imgHeader">
                        <div className="img-container">
                            <img src={championImg} alt={champion.name} />
                        </div>
                    </motion.div>

                    <div className="champResults">
                        <motion.div
                            initial={{ y: -50, opacity: 0, }}
                            whileInView={{ y: 0, opacity: 1, }}
                            className="role flexItem">
                            <span className='flexItemName'>{roleText}</span>
                            <h2 className="roleName">{champion.tags && champion.tags[0]}</h2>
                            <div className="hpArmorCost">
                                <div className="roleHp"><span>{hp}</span> <span className="insValue">{champion.stats && champion.stats.hp}</span></div>
                                <div className="roleArmor"><span>{armor}</span> <span className="insValue">{champion.stats && champion.stats.armor}</span></div>
                                <div className="roleMpOrEnergy"><span>{costType}</span> <span className="insValue">{champion.partype}</span></div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ y: -50, opacity: 0, }}
                            whileInView={{ y: 0, opacity: 1, transition: { delay: .1 } }}
                            className="header flexItem">
                            <h1 className="champName">{champion.name}</h1>
                            <h2 className="title">{champion.title}</h2>
                            <a className="championBuildLink" target="_blank" href={`https://u.gg/lol/champions/${champion.name}/build`}>U.GG Builds<i className="fa-solid fa-fire"></i></a>
                        </motion.div>
                        <motion.div
                            initial={{ y: -50, opacity: 0, }}
                            whileInView={{ y: 0, opacity: 1, transition: { delay: .2 } }}
                            className="passive flexItem">
                            <span className='flexItemName'>{passiveText}</span>
                            <h2>{champion.passive && champion.passive.name}</h2>
                            <span className="passiveDesc">{champion.passive && champion.passive.description}</span>
                        </motion.div>
                        <motion.div
                            initial={{ y: -50, opacity: 0, }}
                            whileInView={{ y: 0, opacity: 1, transition: { delay: .3 } }}
                            className="lore flexItem">
                            <span className='flexItemName'>{loreText}</span>
                            <span>{champion.lore}</span>
                        </motion.div>
                        <motion.div
                            initial={{ y: -50, opacity: 0, }}
                            whileInView={{ y: 0, opacity: 1, transition: { delay: .4 } }}
                            className="skills flexItem">
                            <span className='flexItemName'>{skillsText}</span>

                            {champion.spells && champion.spells.map((spell, index) => {

                                //replacing unnecessary phrases in description
                                spell.description = spell.description.replace(/<br>/g, ' ').replace(/#FF9900|<font color=''>|<\/font>|<font color='#669900'>/g, '');

                                return <SkillBox
                                    skillKey={SkillKeys[index]}
                                    skillName={spell.name}
                                    skillDescription={spell.description}
                                    skillCostText={costText}
                                    skillCost={JSON.stringify(spell.cost).replace(/[\[\]]/g, '').replace(/,/g, '/')}
                                    skillCdText={skillsCd}
                                    skillCd={JSON.stringify(spell.cooldown).replace(/[\[\]]/g, '').replace(/,/g, '/')}
                                />

                            })}
                        </motion.div>

                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default OneChampionResults;