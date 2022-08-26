import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

const LanguageLoader = ({ isVisible, siteText, bgImg }) => {

    return (
        <AnimatePresence>
            {isVisible &&
                <motion.div
                    initial={{ opacity: 0, scale: 0, transformOrigin: 'center', borderRadius: '50%' }}
                    animate={{ opacity: 1, scale: 1, borderRadius: '0%' }}
                    exit={{ opacity: 0, scale: 0, borderRadius: '50%' }}
                    style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', boxShadow: 'inset 0 0 0 2000px rgba(227, 184, 132, .6)' }}
                    className='language-loader'>
                    <i class="fa-solid fa-spinner"></i>
                    <h1>{siteText.loader}</h1>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default LanguageLoader;