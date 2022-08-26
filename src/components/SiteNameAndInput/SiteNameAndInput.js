import React from 'react'
import InputError from './InputError';
import './SiteNameAndInput.scss';

const SiteNameAndInput = ({ mainContainerText, getFunction, resetFunction, refValue, inputErrorText, inputErrorDisplay }) => {
    return (
        <div id='siteHeaderMainContainer' className="container">
            <h1>CHAMPIOPEDIA</h1>
            <p id="lead">{mainContainerText.searchH2Title}</p>
            <p>{mainContainerText.searchParagraph}</p>
            <div className="inputContainer">
                <input ref={refValue} type="text" placeholder={mainContainerText.searchPlaceholder} id="input" autoComplete='off' spellCheck="false" onChange={getFunction} />
                <button id="reset" onClick={resetFunction}><i className="fa-solid fa-rotate-left"></i></button>
            </div>
            <InputError
                inputErrorText={inputErrorText}
                inputErrorDisplay={inputErrorDisplay}
            />
        </div>
    )
}

export default SiteNameAndInput