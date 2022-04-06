import React from 'react'

const Champion = ( { champion, championImg, resultOpacity } ) => {

  return (

    <>
    <div className="results" style={ { opacity: resultOpacity } }>
      
    <div className="imgHeader" style={ { opacity: resultOpacity } }>
      <div className="img-container">
        <img src={championImg} alt="" />
      </div>
    </div>

    <div className="champResults">
    <div className="role flexItem">
      <h2 className="roleName">{champion.tags && champion.tags[0]}</h2>
      <div className="hpArmorCost">
        <div className="roleHp"><span>Starting health points:</span> <span className="insValue">{champion.stats && champion.stats.hp}</span></div>
        <div className="roleArmor"><span>Starting armor points:</span> <span className="insValue">{champion.stats && champion.stats.armor}</span></div>
        <div className="roleMpOrEnergy"><span>Cost type:</span> <span className="insValue">{champion.partype}</span></div>
      </div>
    </div>
    <div className="header flexItem">
        <h1 className="champName">{champion.name}</h1>
        <h2 className="title">{champion.title}</h2>
    </div>
    <div className="lore flexItem">
      <span>{champion.blurb}</span>
    </div>
    <div className="passive flexItem">
    <h2>{champion.passive && champion.passive.name}</h2>
    <span className="passiveDesc">{champion.passive && champion.passive.description.replace('<physicalDamage>physical damage</physicalDamage>', 'physical damage').replace('<magicalDamage>magical damage</magicalDamage>', 'magical damage')}</span>
    </div>
    {/* <div className="tips">
      <h2>Tips</h2>
      <span>{champion.allytips && champion.allytips[0]}</span>
      <span>{champion.allytips && champion.allytips[1]}</span>
      <span>{champion.allytips && champion.allytips[2]}</span>
    </div> */}

    </div>

    </div>
    </>
  )
}

export default Champion