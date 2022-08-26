import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InputError = ({ inputErrorDisplay, inputErrorText }) => {
    return (
        <AnimatePresence>
            {inputErrorDisplay && (
                <motion.div
                    key='inputError'
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: 'easeInOut' }}
                    exit={{ opacity: 0, y: -10 }}

                    id="inputError">
                    <i class="fa-solid fa-circle-exclamation"></i>
                    <p>{inputErrorText}</p>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default InputError