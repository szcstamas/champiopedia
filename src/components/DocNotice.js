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
<<<<<<< HEAD:src/components/DocNotice.js
                    <p>Thanks for visiting my first React application! If you would like to know more about this site, make sure to read <a href="/">the documentation on my Github</a>.</p>
=======
                    <p>Thanks for visiting my first React application! If you would like to know more about this site, make sure to read <a href="#">the documentation on my Github</a>.</p>
>>>>>>> d676963 (adding noticebox component to app with styles):lol_champinfo/src/components/DocNotice.js
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default DocNotice