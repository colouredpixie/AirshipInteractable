const options = {
	backgroundColor: 0xeba9c3,
	width: 600,
	height: 500,
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

      // Create the sprite and add it to the stage
      await PIXI.Assets.load('resources/loader.png');
      let sprite = PIXI.Sprite.from('resources/loader.png');
      loaderScene.addChild(sprite);
	  // TODO: change anchor point
	  sprite.x = 160;
	  sprite.y = 100;

      // Add a ticker callback to move the sprite back and forth
      let elapsed = 0.0;
      app.ticker.add((ticker) => {
        elapsed += ticker.deltaTime;
		sprite.width += Math.cos(elapsed/25.0);
		sprite.height += Math.cos(elapsed/25.0);
      });
/*
	await PIXI.Assets.load('resources/Loader_HTML5Canvas.svg');
	const spriteSvg = PIXI.Assets.load({
        src: 'resources/Loader_HTML5Canvas.svg',
        data: {
            parseAsGraphicsContext: true,
        },
    });

    const graphics = new PIXI.Graphics(spriteSvg);

    // line it up as this svg is not centered
    const bounds = graphics.getLocalBounds();
    graphics.pivot.set((bounds.x + bounds.width) / 2, (bounds.y + bounds.height) / 2);
    graphics.position.set(app.screen.width / 2, app.screen.height / 2);

    app.stage.addChild(graphics);
	*/

// Create a basic button shape using PIXI Graphics
const button = new PIXI.Graphics();
button.beginFill(0xDE3249);  // Fill color for the button
button.drawRoundedRect(0, 0, 150, 60, 15);  // Draw rectangle (x, y, width, height, radius)
button.endFill();
button.x = (app.screen.width - button.width) / 2;  // Position the button in the center
button.y = (app.screen.height - button.height) / 2 + 150;
button.cursor = "pointer";


// Create a text label for the button
const buttonText = new PIXI.Text('Click Me!', style);
buttonText.x = button.x + button.width / 2 - buttonText.width / 2;  // Center the text on the button
buttonText.y = button.y + button.height / 2 - buttonText.height / 2;

// Add button and text to the stage
loaderScene.addChild(button);
loaderScene.addChild(buttonText);

// Make the button interactive and set the cursor to a pointer
button.interactive = true;
button.buttonMode = true;

// Add an event listener to the button
button.on('pointerdown', onButtonClick);

// Define what happens when the button is clicked
function onButtonClick() {
    button.clear();  // Clear the button graphics
    button.beginFill(0x66CCFF);  // Change the color when clicked
    button.drawRoundedRect(0, 0, 150, 60, 15);
    button.endFill();

    // You can also perform other actions, like changing the text or triggering other functions
    buttonText.text = 'Clicked!';
	buttonText.x = button.x + button.width / 2 - buttonText.width / 2;

	app.stage.removeChild(loaderScene);
	app.stage.addChild(mainScene);
}

const startGameText = new PIXI.Text('Start Game', style);
startGameText.x = app.view.width / 2 - startGameText.width / 2;
startGameText.y = app.view.height / 2 - startGameText.height / 2;
startGameText.eventMode = "static";
startGameText.cursor = "pointer";

startGameText.on("click", () => {
	app.stage.removeChild(loaderScene);
	app.stage.addChild(mainScene);
});

loaderScene.addChild(startGameText);

app.stage.addChild(loaderScene);

const mainScene = new PIXI.Container();



