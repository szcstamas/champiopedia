import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'

const DocNotice = () => {

    const [isVisible, setVisible] = useState(false);

    //when window loads in, start notice timeout
    window.addEventListener('load', () => {
        setTimeout(() => { setVisible(true) }, 2000);
    })

    return (
        <AnimatePresence>
            {isVisible &&
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    className='noticebox'>
                    <button onClick={() => {
                        setVisible(false);
                    }}><i class="fa-solid fa-xmark"></i></button>
                    <p>Thanks for visiting my first React application! If you would like to know more about this site, make sure to read <a href="https://github.com/szcstamas/champiopedia">the documentation on my Github</a>.</p>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default DocNotice