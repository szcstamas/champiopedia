# CHAMPIOPEDIA
Welcome to the repository of my first detailed ( - just a bit ) React application! I was working with component-based architecture while used Axios for fetching data, SCSS for styling and Framer Motion for animations.

Link to webapp: <a href="https://szcstamas.github.io/champiopedia/">https://szcstamas.github.io/champiopedia/</a>

<hr>

## What's this all about?
This project is based on the popular online video game called League of Legends. The main purpose of this app is to practicing my skills and help me checking out the newest champions in the game. Below I describe everything that you have to know about this simple application.

<hr>

### `The main input`
Core of the application. Inside the input field you can write the whole name of a champion or it's abbreviation (e.g. try writing **"mf"** instead of **"miss fortune"** or **"Miss Fortune"**). After giving the name of an existing champion, it's whole data will appear including **role, starting hp, title, lore, passive and active skills**. If the given name does not exist or not correct, an error message will be shown. You can always click or tap on the reset button to clear input value and get back to mainpage.

### `Latest champion`
First tab under input is the container of latest champion. It shows exactly the latest released champion (name with title) of the game based on it's key value in external API. Clicking or tapping on the container shows up the data of latest champion.

### `Minimap and roles`
You can see a minimap with role icons next to the latest champion container. It's the original 5v5 map of League of Legends where each player plays on different lanes: top, mid, jungle, bottom and support (these last two roles are on the same lane).
1. If you click or tap on a role icon, the page scrolls down meaning that you can select one of the champions by clicking or tapping on its container.
2. This time the clicked container does not show up any specific data, but it assigns the chosen champion to the chosen lane.
3. If you fill up all roles with champions, a message will be shown if your team is good enough to battle. If it's not, the message will says what role does your team needs (e.g. "Not enough magical damage" || "Not enough attack damage!"). Basically, it's a "team-assembler" function on the page, where you can plan your team composition before playing a real-time game.

### `Sorting buttons`
You can always sort champions by their role if you click on one of these buttons. Use these buttons while assembling champions to minimap-roles too! Some champion roles may be different from the meta, but these roles are in accordation to official League of Legends API.

### `Boxes of champions`
If you click on a champion below sorting-buttons, the whole information will be shown to you about that character. Use reset button next to input field to clearing its value and return to mainpage. If you click on a champion after you activated one of the minimap-roles, the selected champion will be assigned to the chosen lane.

### `Language buttons`
The application can be seen in **english** and **hungarian** languages at the moment. You can switch between languages by clicking on one of these language buttons at the right side of header. Texts are built on a class called SiteText which takes different types of texts as arguments.

### `Data of one specific champion`
When clicking on a box of champion (or using input field with correct champion name), the whole information about that champion will appear including **role, starting hp, title, link for builds (on U.GG), lore, passive and active skills**. All content on mainpage will be hidden while seeing these informations. If you would like to go back to mainpage, just simply hit reset button to clear input value.  

### `Go-top-button`
You scrolled down that much and dont want to scroll back manually? Just hit the arrow icon at the bottom-right of app to get back at the top of page.

<hr>

### Adding languages
Let's just say that you want to see Champiopedia in a language other than english or hungarian. Well, there is a way to add your language into it!
1. Go into `constants/languages/SiteLanguages.js` and add a key-value pair according to your language (e.g. you want to add spanish, so your key-value pair will be `espLanguage: 'es_ES'`). The value **must be** one of the strings I mentioned in the comments inside of SiteLangue.js, but key can be anything you like.
2. Go into `constants/languages/SiteText.js` and create a new SiteText class with your strings (you can name your new class anything you want, but make sure to add strings in correct order to get best results).
3. Your language variable and class is ready to go! Now it's time to assign these cuties into the `changeLanguageAndActiveClass` function. You can reach this function in `constants/Functions.js`. 
4. In the `changeLanguageAndActiveClass` function you have to add another `else if` condition with your `key` based on key-value pair you added in `SiteLanguages.js` before. Just copy the whole `else if` condition based on english text, and replace `.contains('engLanguage')` with your `key`. Next, replace `setLanguage` (this is going to be the key in `SiteLanguage.js`) and `setSiteText` (this is going to be the new SiteText class you just created) with brand new parameters while adding +1 for `setActiveClass`. Don't forget to pass these new parameters to function!
5. We're almost ready! Go into `App.js`, and destructure your key-value pair from `SiteLanguages` with `key` on **line 13** while you also destructure your new SiteText class from SiteText.js on **line 7**. If you got it, head over to **line 85**, add the key and class you just destructured into `changeLanguageAndActiveClass` function as parameters.
6. Great! And finally, we can set up our new button in header. Go to `components/Header/Header.js`, and add a simple, yet functional string into `languageButtonTexts` array. This is going to be the text that appear on the new button in header (e.g ESP). That's it! The new button will be rendered immediately, and it will change the language of text on site when you click on it.
