import React from 'react'

const MainContainer = ({ mainContainerText, getFunction, resetFunction, refValue }) => {
    return (
        <div className="container">
            <h1>champs.info</h1>
            <p id="lead">{mainContainerText.searchH2Title}</p>
            <p>{mainContainerText.searchParagraph}</p>
            <div className="inputContainer">
                <input ref={refValue} type="text" placeholder={mainContainerText.searchPlaceholder} id="input" autoComplete='off' spellCheck="false" onChange={getFunction} />
                <button id="reset" onClick={resetFunction}><i className="fa-solid fa-rotate-left"></i></button>
            </div>
        </div>
    )
}

export default MainContainer