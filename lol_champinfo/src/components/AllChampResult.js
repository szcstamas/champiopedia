import React from 'react'

const AllChampResult = ({ containerOpacity, containerIndex, containerDisplay, containerText, containerBackgroundImage, latestChampName, latestChampTitle, changeFunction, sortChampFunction, uniqueRoleArray, uniqueRoleIcons, allChampsData }) => {

    return (
        <div className="champContentContainer" style={{ opacity: containerOpacity, zIndex: containerIndex, display: containerDisplay }}>
            <div className="latestChampionContainer">
                <div className="latestChampionHeader">{containerText.latestChamp}</div>
                <button style={{ background: `url(${containerBackgroundImage})` }} className='latestChampion' data-name={latestChampName} onClick={changeFunction}>
                    <h4>{latestChampName}</h4>
                    <p>{latestChampTitle}</p>
                    <div className="latestChampionBackgroundLayer"></div>
                </button>
            </div>
            <div className="sortAllChampionsContainer">
                {uniqueRoleArray && uniqueRoleArray.map((i, index) => {

                    return <a key={i} href='#allChampionContainer' data-champ={i} onClick={sortChampFunction}>
                        <div className="sortAllChampsButtonImageContainer">{uniqueRoleIcons[index]}</div>
                        {i}</a>
                })}
            </div>
            <div className="allChampionContainer" id="allChampionContainer">
                {allChampsData.map((i) => {
                    return (
                        <a key={i.id} className='oneChampLink' data-champrole={i.tags[0]} href="#">

                            <button style={{ backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${i.id}_0.jpg)` }} className="oneChampButton" data-name={i.id} key={i.key} id={i.id} onClick={changeFunction}>
                                <div className="oneChampHeader">
                                    <div className="oneChampName">{i.id}</div>
                                    <div className="oneChampTitle">{i.title}</div>
                                </div>
                                <div className="oneChampButtonShadow"></div>
                            </button>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default AllChampResult