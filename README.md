# CHAMPIOPEDIA
Welcome to the repository of my first React application! 😄 It was created with simple components and functions including basic hooks. I've used Axios to handling API data, and Framer Motion for using animations.

## What's this all about?
This project is based on the popular online video game called League of Legends. The main purpose of this app is to practicing my skills and help me checking out the newest champions in the game. Below I describe everything that you have to know about this simple application.

<hr>

### `The main input`
Core of the application. Inside the main input field you can write the whole name of a champion or it's abbreviation (e.g. try writing **"mf"** instead of **"miss fortune"** or **"Miss Fortune"**). After giving the name of an existing champion, it's whole data will appear including **role, starting hp, title, lore, passive and active skills**. If the given name does not exist or not correct, an error message will be shown. You can always click or tap on the reset button to clear input value and return to mainpage. Want to give it a try? Just type **devil** into the input field...

### `Latest champion`
First tab under input is the container of latest champion. It shows exactly the latest released champion (name with title) of the game based on it's key value in external API. Clicking or tapping on the container shows up the data of latest champion.

### `Minimap and lane-roles`
You can see a minimap with role icons next to the latest champion container. It's the original 5v5 minimap of League of Legends where each player plays on different lanes: top, mid, jungle, bottom and support (these last two roles are on the same lane).
1. If you click or tap on a role icon, the page scrolls down meaning that you can select one of the champions by clicking or tapping on its container.
2. This time the clicked container does not show up any specific data, but it assigns the chosen champion to the chosen lane.
3. If you fill up all roles with champions, a message will be shown if your team is good enough to battle. These messages can be 'Set up your team!' (by default), 'Not enough magical damage!', 'Not enough attack damage!', 'Who is the ADC?', 'But who is the tank?', 'Your team setup is good!', and 'Your team setup is not bad!'. Basically, it's a "team-assembler" function on the page, where you can plan your team composition before playing a real-time game. You can not push the same champion twice into minimap.