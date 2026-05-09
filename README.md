# ma1805-group-final-project

# Pop-Up Panic

## Project links

GitHub repository: https://github.com/SchlorpyDorp/ma1805-group-final-project

Live site: https://schlorpydorp.github.io/ma1805-group-final-project/

## Project description

Pop-Up Panic is an interactive p5.js browser game that uses a fake computer desktop as the setting for the game, overwhelmed by pop-up error windows. The player will need to click on the red X buttons to close the pop-up boxes before too many appear on the screen. If the desktop becomes cluttered with too many pop-ups, the game will switch to the System Recovery, where the player then has to repair the broken file icons in a limited amount of time (6.7 Seconds).

This project's style is inspired by nostalgic old desktop interfaces, system message boxes, taskbars and computer error screens. I wanted the game to be easy, a little crazy and a little bit funny. The pop-ups aren't error alerts, they're half-joking, fake alerts that help to make the game more lighthearted.

The overall concept of the project is the classic digital overload. The game illustrates the issue of a computer that is overloaded and too difficult to use and the subsequent stress. The player is always attempting to maintain control over everything, but as more and more pop-ups begin to appear, the game gets increasingly difficult.

## Theme and concept

This project will reflect the theme of digital clutter, online disruptions and how computer interfaces can distract from one another. Pop-up windows are used as the main symbol of this. They are unwanted, reoccurring and open up more and more rapidly as the player closes them down.

In the second part of the game, System Recovery, the theme is continued by depicting what happens when the Desktop becomes overloaded. The player has to click a lot of broken files to repair the system and win the game. This makes the project seem more complete as the game does not just stop when the desktop is flooded, and it also throws in another little challenge.

The project is also meant to be humorous. To make the game less serious, I used silly messages like fake system warnings, and sarcastic computer errors. This helped to add some personality to the project while maintaining the theme of obnoxious digital interfaces.

## How to play

1. Click the start button on the opening screen.
2. Close pop-up windows by clicking the red X button.
3. Try to stop the number of open windows from reaching 12.
4. If the desktop becomes overloaded, click Start Recovery.
5. In the recovery mini-game, click all the broken file icons before the timer runs out.
6. If all files are repaired in time, the system is restored.
7. If the timer runs out, recovery fails.

## Technical approach

The project was made using p5.js. The whole game is built inside "sketch.js", with a simple "index.html" file used to load the p5.js sketch.

Main technical features:

- a start screen
- a main pop-up closing game
- a score system
- randomly positioned pop-up windows
- different pop-up sizes
- mouse click detection
- a game over screen
- a second recovery mini-game
- a countdown timer using "millis()"
- a success screen and a failed recovery screen
- original visuals drawn using p5.js shapes

The pop-up windows are stored in an array, named "popups". Every pop-up is saved as an object containing an X position, Y position, width, height and a message. The position and size of the new pop-up is randomly determined when it is created. This will help the game to not be as repetitive.

The player clicks the X button on a pop-up to close it. The code checks if the mouse's position is inside the close button's area. If it is, the pop up is deleted from the array, and the score is raised.

There is another array, "brokenFiles", that is used for the recovery mini-game. The broken files are manually put on the desktop. A player clicks one of the file icons, the icon is taken out of the array and the recovery score increases every time.

for the timer I used “millis()” instead of just only using frame count. This allows the game to time the events more accurately, and show decimal numbers in the recovery countdown.

## Design approach

The visual style is based on old desktop computer interfaces. I went with a flat blue background, simple desktop icons, a bottom task bar and system style message boxes. The design is purposely blocky and simple.

Most of the visuals consist of simple shapes (rectangles) and text. I didn't want to use complicated artwork as I wanted the project to have a more handmade edge to it and slightly less confusing. This also helped in allowing the code to be more understandable and more easily modifiable.

The pop-up windows have a simple title bar, red close button, text for the message and a fake OK button. These design choices came from the typical error boxes of old computers and system message boxes.

The recovery files are also made of basic shapes. They're all similar to the basic file icons, and have a warning symbol. This helps to keep the recovery minigame theme style consistent with the desktop theme that's seen at the start.

## Sources of inspiration

The project was inspired by:

- old nostalgic Windows desktop interfaces
- computer error message boxes
- early internet pop-up adverts
- cluttered and busy browser windows
- notification overload
- simple browser-based reaction games
- glitchy or broken computer interface aesthetics
- Feeling overwhelmed

Useful reference links:

- p5.js reference: https://p5js.org/reference/
- p5.js examples: https://p5js.org/examples/
- DMCT Wiki - GitHub Pages documentation: https://heavenly-roof-302.notion.site/GitHub-Pages-Setup-free-web-hosting-1ad14bebd0b9816baf15e089df5ca0c3?pvs=25
- Error message background: https://en.wikipedia.org/wiki/Error_message
- Pop-up advert background: https://en.wikipedia.org/wiki/Pop-up_ad

## Original assets

The project uses original visuals made in p5.js using standard shapes. The desktop icons, taskbar, pop-up windows, buttons, broken file icons, and interface screens were all drawn using code.

No external images were used for the main artwork. This helped keep the visual style of this project much more consistent and also made sure the project used only original assets made from within p5.js.

## Individual working

This project was completed individually with permission from the tutor.

Because I worked alone, I was responsible for all parts of the project. This included:

- planning the idea
- writing the p5.js code
- designing the desktop interface
- creating the pop-up game
- creating the recovery mini-game
- testing the interaction
- writing the comments in the code
- researching inspiration
- writing the README documentation

## Process and development

This project initially started off as just a simple pop-up closing game. The initial point of it was just to randomly display the windows, and then close the windows by clicking the red X button.

Once the basic version was relatively successful, I added a start screen, score counter and game over condition. This made the project feel more like a full game, instead of a visual experiment.

Then I added the System Recovery mini-game to the project. This provided the game with a second phase and added to the overall aesthetic of the game. If too many windows show up, the player isn't just out of luck, but will have another opportunity to fix the desktop.

The difficulty I encountered when developing was that certain drawing settings were passed from function to function. For instance, when I used "noStroke()" in one portion of the code, then it had an impact on other shapes later on. I solved this by adjusting the use of "stroke()" and "noStroke()" within the functions where they were needed.

A challenge was to make the recovery timer fair. I timed it and went with a short 6.7 second timer to make the second section feel fast and frantic.

## Reflection

I believe the best part of this project is that it has a pretty clear theme and interaction is relatively easy. The player is instantly aware of what to do and the fake desktop style ensures that the project looks visually consistent everywhere.

The project also grew beyond what I originally thought it would be like. It began as a normal pop-up game, but eventually turned into a two-part game with a full recovery section. This felt like a more complete and rounded off game and it gave me even more chances to use a few different coding skills.

I was able to learn about the usefulness of game states in p5.js. I managed to create variables for different portions of the game to display them at different times such as "startScreen", "gameOver", "recoveryMode", "finalScreen" and "recoveryFailed".

I also gained more knowledge about the objects and arrays. Both the pop-ups and broken files utilised arrays, making it simpler to include, draw and remove items from the screen.

I would have made it more difficult, added sound effects and more animation if I had more time. I did develop this project beyond just the simple pop-up idea,but I didn't want the code to get too complicated and wanted the visual style to be as simple as possible.

## Files included

- "index.html" - loads the p5.js project
- "style.css" - basic page styling
- "sketch.js" - main game code
- "README.md" - project documentation
- "individual-contribution-yasin.txt" - individual contribution file