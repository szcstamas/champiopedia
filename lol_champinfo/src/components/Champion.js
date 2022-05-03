import React from 'react'

const Champion = ({ champion, championImg, resultOpacity, resultIndex, resultDisplay, hp, armor, costType, roleText, loreText, passiveText, skillsText, costText }) => {

  return (

    <>
      <div className="results" style={{ opacity: resultOpacity, zIndex: resultIndex, display: resultDisplay }}>

        <div className="imgHeader" style={{ opacity: resultOpacity }}>
          <div className="img-container">
            <img src={championImg} alt="" />
          </div>
        </div>

        <div className="champResults">
          <div className="role flexItem">
            <span className='flexItemName'>{roleText}</span>
            <h2 className="roleName">{champion.tags && champion.tags[0]}</h2>
            <div className="hpArmorCost">
              <div className="roleHp"><span>{hp}</span> <span className="insValue">{champion.stats && champion.stats.hp}</span></div>
              <div className="roleArmor"><span>{armor}</span> <span className="insValue">{champion.stats && champion.stats.armor}</span></div>
              <div className="roleMpOrEnergy"><span>{costType}</span> <span className="insValue">{champion.partype}</span></div>
            </div>
          </div>
          <div className="header flexItem">
            <h1 className="champName">{champion.name}</h1>
            <h2 className="title">{champion.title}</h2>
          </div>
          <div className="passive flexItem">
            <span className='flexItemName'>{passiveText}</span>
            <h2>{champion.passive && champion.passive.name}</h2>
            <span className="passiveDesc">{champion.passive && champion.passive.description.replace('<physicalDamage>physical damage</physicalDamage>', 'physical damage').replace('<magicalDamage>magical damage</magicalDamage>', 'magical damage').replace(/<font color='#669900'>/g, '').replace(/<\/font>/g, '')}</span>
          </div>
          <div className="lore flexItem">
            <span className='flexItemName'>{loreText}</span>
            <span>{champion.lore}</span>
          </div>
          <div className="skills flexItem">
            <span className='flexItemName'>{skillsText}</span>
            <div className="skillQ skillItem">
              <div className="skillShortkey">Q</div>
              <h4 className="skillName">{champion.spells && champion.spells[0].name}</h4>
              <p className="skillDesc">{champion.spells && champion.spells[0].description.replace(/<br><br>/g, ' ').replace(/#FF9900/g, '').replace(/<font color=''>/g, '').replace(/<\/font>/g, '').replace(/<font color='#669900'>/g, '').replace(/<\/font>/g, '')}</p>
              <p className='skillCost'><strong>{costText}:</strong> {champion.spells && JSON.stringify(champion.spells[0].cost).replace(/[\[\]]/g, '').replace(/,/g, '/')}</p>
            </div>
            <div className="skillW skillItem">
              <div className="skillShortkey">W</div>
              <h4 className="skillName">{champion.spells && champion.spells[1].name}</h4>
              <p className="skillDesc">{champion.spells && champion.spells[1].description.replace(/<br><br>/g, ' ').replace(/#FF9900/g, '').replace(/<font color=''>/g, '').replace(/<\/font>/g, '').replace(/<font color='#669900'>/g, '').replace(/<\/font>/g, '')}</p>
              <p className='skillCost'><strong>{costText}:</strong> {champion.spells && JSON.stringify(champion.spells[1].cost).replace(/[\[\]]/g, '').replace(/,/g, '/')}</p>
            </div>
            <div className="skillE skillItem">
              <div className="skillShortkey">E</div>
              <h4 className="skillName">{champion.spells && champion.spells[2].name}</h4>
              <p className="skillDesc">{champion.spells && champion.spells[2].description.replace(/<br><br>/g, ' ').replace(/#FF9900/g, '').replace(/<font color=''>/g, '').replace(/<\/font>/g, '').replace(/<font color='#669900'>/g, '').replace(/<\/font>/g, '')}</p>
              <p className='skillCost'><strong>{costText}:</strong> {champion.spells && JSON.stringify(champion.spells[2].cost).replace(/[\[\]]/g, '').replace(/,/g, '/')}</p>
            </div>
            <div className="skillUlt skillItem">
              <div className="skillShortkey">R</div>
              <h4 className="skillName">{champion.spells && champion.spells[3].name}</h4>
              <p className="skillDesc">{champion.spells && champion.spells[3].description.replace(/<br><br>/g, ' ').replace(/#FF9900/g, '').replace(/<font color=''>/g, '').replace(/<\/font>/g, '').replace(/<font color='#669900'>/g, '').replace(/<\/font>/g, '')}</p>
              <p className='skillCost'><strong>{costText}:</strong> {champion.spells && JSON.stringify(champion.spells[3].cost).replace(/[\[\]]/g, '').replace(/,/g, '/')}</p>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Champion