const options = {
	backgroundColor: 0x5081aa,
	width: 1000,
	height: 640,
}
const app = new PIXI.Application();
await app.init(options);
document.body.appendChild(app.canvas);

const style = new PIXI.TextStyle({
	fill: "#FFFFFF",
	fontSize: 30,
	fontStyle: "italic",
	align: "center"
});

//const blurFilter = new PIXI.filters.BlurFilter();

const loaderScene = new PIXI.Container();

// Create the sprites and add to the stage
await PIXI.Assets.load('resources/loaderCloud.png');
let spriteBG = PIXI.Sprite.from('resources/loaderCloud.png');
loaderScene.addChild(spriteBG);
spriteBG.anchor.x = 0.5;
spriteBG.anchor.y = 0.5;
spriteBG.x = app.screen.width / 2;
spriteBG.y = app.screen.height / 2 - 20;

await PIXI.Assets.load('resources/loaderShip.png');
      let sprite = PIXI.Sprite.from('resources/loaderShip.png');
      loaderScene.addChild(sprite);
	  sprite.anchor.x = 0.5;
	  sprite.anchor.y = 0.5;
	  sprite.x = app.screen.width / 2;
	  sprite.y = app.screen.height / 2 - 25;
// Add a ticker callback to move the sprite back and forth
      let elapsed = 0.0;
      app.ticker.add((ticker) => {
        elapsed += ticker.deltaTime;
		sprite.width += Math.cos(elapsed/25.0);
		sprite.height += Math.cos(elapsed/25.0);
});


const startGameButton = new PIXI.Graphics();
startGameButton.beginFill(0xc46762);
startGameButton.drawRoundedRect(0, 0, 200, 50, 15);
startGameButton.endFill();
startGameButton.x = app.view.width / 2 - startGameButton.width / 2;
startGameButton.y = app.view.height / 2 - startGameButton.height / 2 + 170;
loaderScene.addChild(startGameButton);

const startGameText = new PIXI.Text('Start Demo', style);
startGameText.x = startGameButton.x + startGameButton.width / 2 - startGameText.width / 2;  // Center the text on the button
startGameText.y = startGameButton.y + startGameButton.height / 2 - startGameText.height / 2;
startGameText.eventMode = "static";
startGameText.cursor = "pointer";

startGameText.on("click", () => {
	app.stage.removeChild(loaderScene);
	app.stage.addChild(mainScene);
	init();
});

loaderScene.addChild(startGameText);

app.stage.addChild(loaderScene);

const mainScene = new PIXI.Container();

// Create a basic button shape using PIXI Graphics
const button = new PIXI.Graphics();
button.beginFill(0xc46762);  // Fill color for the button
button.drawRoundedRect(0, 0, 150, 60, 15);  // Draw rectangle (x, y, width, height, radius)
button.endFill();
button.x = (app.screen.width - button.width) / 2;  // Position the button in the center
button.y = (app.screen.height - button.height) / 2 - 150;
button.cursor = "pointer";

// Create a text label for the button
const buttonText = new PIXI.Text('Click Me!', style);
buttonText.x = button.x + button.width / 2 - buttonText.width / 2;  // Center the text on the button
buttonText.y = button.y + button.height / 2 - buttonText.height / 2;

// Add button and text to the stage
mainScene.addChild(button);
mainScene.addChild(buttonText);

// Make the button interactive and set the cursor to a pointer
button.interactive = true;
button.buttonMode = true;

// Add an event listener to the button
button.on('pointerdown', onButtonClick);

// Define what happens when the button is clicked
function onButtonClick() {

    // Changing the text or triggering other functions
    buttonText.text = 'Clicked!';
	buttonText.x = button.x + button.width / 2 - buttonText.width / 2;

	alert("I am an alert box!");
}


