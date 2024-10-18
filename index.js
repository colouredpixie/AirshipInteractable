// Constants and global styles
const options = {
	backgroundColor: 0x5081aa,
	width: 1000,
	height: 640,
}

const style = new PIXI.TextStyle({
	fill: "#FFFFFF",
	fontSize: 30,
	fontStyle: "italic",
	align: "center",
	fontFamily: "\"Cormorant Garamond\", serif"
});

const app = new PIXI.Application();
await app.init(options);
document.body.appendChild(app.canvas);

// Creating game scenes
// Loader scene
const loaderScene = new PIXI.Container();

// Creating the loader sprites and adding them to the stage
await PIXI.Assets.load('resources/images/loaderCloud.png');
let spriteBG = PIXI.Sprite.from('resources/images/loaderCloud.png');
loaderScene.addChild(spriteBG);
spriteBG.anchor.x = 0.5;
spriteBG.anchor.y = 0.5;
spriteBG.x = app.screen.width / 2;
spriteBG.y = app.screen.height / 2;

await PIXI.Assets.load('resources/images/loaderShip.png');
let sprite = PIXI.Sprite.from('resources/images/loaderShip.png');
loaderScene.addChild(sprite);
sprite.anchor.x = 0.5;
sprite.anchor.y = 0.5;
sprite.x = app.screen.width / 2;
let elapsed = 0.0;
app.ticker.add((ticker) => {
	elapsed += ticker.deltaTime;
	sprite.width += Math.cos(elapsed/25.0) / 10;
	sprite.height += Math.cos(elapsed/25.0) / 10;
	sprite.y = app.screen.height / 2 + Math.cos(elapsed/25.0) * 5;
});

// Creating Start Demo button
const startDemoButton = new PIXI.Graphics();
startDemoButton.beginFill(0xc46762);
startDemoButton.drawRoundedRect(0, 0, 200, 50, 15);
startDemoButton.endFill();
startDemoButton.x = app.view.width / 2 - startDemoButton.width / 2;
startDemoButton.y = app.view.height / 2 - startDemoButton.height / 2 + 200;
startDemoButton.eventMode = "static";
startDemoButton.cursor = "pointer";
startDemoButton.on("click", () => {
	app.stage.removeChild(loaderScene);
	app.stage.addChild(mainScene);
	init();
});
loaderScene.addChild(startDemoButton);

const startDemoText = new PIXI.Text('Start Demo', style);
startDemoText.x = startDemoButton.x + startDemoButton.width / 2 - startDemoText.width / 2;  // Center the text on the button
startDemoText.y = startDemoButton.y + startDemoButton.height / 2 - startDemoText.height / 2;
loaderScene.addChild(startDemoText);

app.stage.addChild(loaderScene);

// Main scene: filled by Animate exported script
const mainScene = new PIXI.Container();
