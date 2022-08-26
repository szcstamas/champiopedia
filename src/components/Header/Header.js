import React from 'react'

const Header = ({ buttonLanguageClass, buttonLanguageFunction }) => {
    return (
        <header>

            <span className="hamburger">-
                <input type="checkbox" id="socialCheckbox" />
                <span className="upperLine"></span>
                <span className="lowerLine"></span>
                <div className="hamburgerSocialMedia">
                    <a href="https://www.facebook.com/leagueoflegends/"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/leagueoflegends/"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://twitter.com/leagueoflegends"><i className="fa-brands fa-twitter"></i></a>
                </div>
            </span>
            <div className="socialMedia">
                <a href="https://www.facebook.com/leagueoflegends/"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/leagueoflegends/"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://twitter.com/leagueoflegends"><i className="fa-brands fa-twitter"></i></a>
            </div>

            <svg id='headerSVG' viewBox="0 0 140 215" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M56.8894 1.49771C32.8804 7.94371 12.3684 29.5697 3.40336 57.8897C1.92336 62.5647 0.47236 69.7647 0.17936 73.8897C-0.28864 80.4537 0.0283575 82.5327 2.71836 90.5507C11.1134 115.576 11.6244 138.234 4.26936 159.39C2.35736 164.89 0.702359 170.13 0.591359 171.034C0.462359 172.082 9.54636 180.344 25.6014 193.784C39.4674 205.392 51.0594 214.89 51.3614 214.89C51.6634 214.89 51.7934 195.463 51.6504 171.719L51.3894 128.548L36.7164 119.469C28.6464 114.476 21.7174 110.062 21.3204 109.661C20.4914 108.824 18.0204 95.7107 17.9424 91.7277C17.8904 89.1317 18.3874 89.3387 38.3644 100.228L58.8394 111.39L58.8644 128.554L58.8894 145.718L63.9044 148.804C66.6624 150.501 69.4354 151.89 70.0664 151.89C70.6984 151.89 73.3914 150.493 76.0514 148.786L80.8894 145.682V128.809V111.936L83.3894 110.413C84.7644 109.575 87.0174 108.203 88.3964 107.362L90.9034 105.835L85.7134 99.3577C82.8594 95.7957 78.1314 91.2337 75.2064 89.2197C69.7564 85.4657 68.2644 83.9497 71.9754 85.9357C76.5814 88.4007 74.4054 85.6487 63.1664 74.7907C51.5554 63.5747 51.6094 62.8457 63.3894 71.7477C73.2934 79.2317 83.3204 88.5187 89.4794 95.9137C92.6754 99.7507 95.6444 102.89 96.0774 102.89C96.5104 102.89 102.563 99.7397 109.529 95.8897C116.495 92.0397 122.257 88.8897 122.334 88.8897C122.41 88.8897 121.804 93.4557 120.985 99.0367L119.498 109.184L112.693 113.585C108.951 116.006 105.889 118.182 105.889 118.42C105.889 119.995 112.421 131.679 113.076 131.275C113.523 130.998 113.889 130.973 113.889 131.219C113.889 131.464 115.689 138.742 117.889 147.39C120.089 156.038 121.871 163.626 121.85 164.252C121.798 165.765 119.244 159.835 116.741 152.39C114.552 145.881 103.322 123.494 101.477 121.963C100.722 121.336 98.2594 122.345 94.1154 124.98L87.8894 128.939V171.998C87.8894 195.68 88.2664 214.907 88.7264 214.723C89.1874 214.54 95.0114 209.89 101.669 204.39C113.08 194.964 113.777 194.178 113.832 190.698C113.893 186.744 108.401 167.571 104.354 157.61C103 154.279 102.077 151.369 102.303 151.143C102.817 150.629 110.781 166.67 111.363 169.39C111.598 170.49 113.139 174.765 114.787 178.89C116.436 183.015 118.031 187.21 118.333 188.211C118.791 189.735 120.393 188.768 128.135 182.294C133.225 178.038 138.002 174.002 138.751 173.325C139.89 172.296 139.619 170.81 137.089 164.242C132.566 152.497 130.721 142.106 130.721 128.39C130.721 115.118 132.302 105.861 137.127 90.8897C140.743 79.6697 140.791 74.7017 137.411 61.3767C129.863 31.6237 106.273 6.33871 81.0904 1.01071C73.9304 -0.504292 63.5684 -0.295292 56.8894 1.49771Z" fill="#CDBE91" />
            </svg>


            <div className="languageButtons">
                {/* if buttonLanguageClass props is 1 or 2, give that button an ".active" className  */}
                <a href="#"><button className={buttonLanguageClass === '1' ? 'huLanguage active' : 'huLanguage'} onClick={buttonLanguageFunction}>HU</button></a>
                <a href="#"><button className={buttonLanguageClass === '2' ? 'engLanguage active' : 'engLanguage'} onClick={buttonLanguageFunction}>EN</button></a>
            </div>
        </header>
    )
}

export default Header