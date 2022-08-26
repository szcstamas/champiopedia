import { motion } from 'framer-motion';

const SkillBox = ({ skillKey, skillName, skillDescription, skillCostText, skillCost, skillCdText, skillCd }) => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="skillItem">
            <div className="skillShortkey">{skillKey}</div>
            <h4 className="skillName">{skillName}</h4>
            <p className="skillDesc">{skillDescription}</p>
            <p className='skillCost'><strong>{skillCostText}:</strong> {skillCost}</p>
            <p className='skillCd'><strong>{skillCdText}:</strong> {skillCd}</p>
        </motion.div>
    );
}

export default SkillBox;