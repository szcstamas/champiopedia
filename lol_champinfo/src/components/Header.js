import React from 'react'

const Header = ({ buttonLanguageClass, buttonLanguageFunction }) => {
    return (
        <header>
            <div className="socialMedia">
                <a href="https://www.facebook.com/leagueoflegends/"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/leagueoflegends/"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://twitter.com/leagueoflegends"><i className="fa-brands fa-twitter"></i></a>
            </div>
            <div className="languageButtons">

                <a href="#"><button className={buttonLanguageClass === '1' ? 'huLanguage active' : 'huLanguage'} onClick={buttonLanguageFunction}>HU</button></a>
                <a href="#"><button className={buttonLanguageClass === '2' ? 'engLanguage active' : 'engLanguage'} onClick={buttonLanguageFunction}>EN</button></a>
            </div>
        </header>
    )
}

export default Header