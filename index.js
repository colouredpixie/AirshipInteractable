const options = {
	backgroundColor: 0xeba9c3,
	width: 600,
	height: 500,
}
const app = new PIXI.Application();
await app.init(options);
document.body.appendChild(app.canvas);

/*
var score = 0;
let count = 0;
const blurFilter = new PIXI.filters.BlurFilter();

const mainScene = new PIXI.Container();
const style = new PIXI.TextStyle({
	fill: "#FFFFFF",
	fontSize: 30,
	fontStyle: "italic",
	align: "center"
});
const startGameText = new PIXI.Text('Start Game', style);
startGameText.x = app.view.width / 2 - startGameText.width / 2;
startGameText.y = app.view.height / 2 - startGameText.height / 2;
startGameText.eventMode = "static";
startGameText.cursor = "pointer";
mainScene.addChild(startGameText);

const winScene = new PIXI.Container();
var winText = new PIXI.Text( 'You won!\nTotal score: 00', style );
winText.x = app.view.width / 2 - winText.width / 2;
winText.y = app.view.height / 2 - winText.height / 2;
winScene.addChild(winText);
const winRestartText = new PIXI.Text( 'Restart', style );
winRestartText.x = app.view.width / 2 - winRestartText.width / 2;
winRestartText.y = app.view.height / 2 + winText.height * 2;
winRestartText.eventMode = "static";
winRestartText.cursor = "pointer";
winScene.addChild(winRestartText);

const looseScene = new PIXI.Container();
var looseText = new PIXI.Text( ('Game over\nTotal score: 0' + score), style);
looseText.x = app.view.width / 2 - looseText.width / 2;
looseText.y = app.view.height / 2 - looseText.height / 2;
looseScene.addChild(looseText);
const looseRestartText = new PIXI.Text( 'Restart', style );
looseRestartText.x = app.view.width / 2 - looseRestartText.width / 2;
looseRestartText.y = app.view.height / 2 + looseText.height * 2;
looseRestartText.eventMode = "static";
looseRestartText.cursor = "pointer";
looseScene.addChild(looseRestartText);

app.stage.addChild(mainScene);

const gameScene = new PIXI.Container();

function createGameScene(gameScene)
{
	const player = new PIXI.Container();
	gameScene.addChild(player);

	const diamonds = new PIXI.Container();
	gameScene.addChild(diamonds);

	const animatedPlayerSprite = createPlayerAnimation();
	animatedPlayerSprite.position.x = 100;
	animatedPlayerSprite.position.y = 150;
	animatedPlayerSprite.animationSpeed = 0.1;
	animatedPlayerSprite.anchor.set(0.5, 1)
	player.addChild(animatedPlayerSprite);

	const enemy = new PIXI.Container();
	gameScene.addChild(enemy);

	const enemySprite = createEnemyAnimation();
	enemySprite.position.x = ( app.view.width - 100 );
	enemySprite.position.y = app.view.height;
	enemySprite.animationSpeed = 0.1;
	enemySprite.anchor.set(0.5, 1);
	enemySprite.scale.set(0.5, 0.5); 
	enemy.addChild(enemySprite);

	blurFilter.blur = 1;
	enemySprite.filters = [blurFilter];

	const diamondsCount = 10;
	for (let i = 0; i < diamondsCount; i++)
	{
		const diamond = PIXI.Sprite.from("resources/diamond.png");
		diamond.position.x = Math.random() * ( app.view.width - diamond.width);
		diamond.position.y = Math.random() * ( app.view.height - diamond.height);
		diamonds.addChild(diamond);
	}

	const counter = new PIXI.Container();
	const counterStyle = new PIXI.TextStyle({
		fill: "#FFFFFF",
		fontSize: 30,
		fontStyle: "italic"
	});
	let counterText = new PIXI.Text('00', counterStyle);
	counterText.x = app.view.width - 50;
	counterText.y = 10;
	counter.addChild(counterText);
	gameScene.addChild(counter);

	const keysMap = {};
	attachListeners(keysMap);

	return (delay) => {
		tryToMovePlayer(keysMap, animatedPlayerSprite, enemySprite, delay);
		checkCollission(animatedPlayerSprite, diamonds);
		counterText.text = score;
		checkEndGame(animatedPlayerSprite, enemySprite, diamondsCount);
	}
}

const updateScene = createGameScene(gameScene);

let state = "menu";

startGameText.on("click", () => {
	state = "game";
	app.stage.removeChild(mainScene);
	app.stage.addChild(gameScene);
});

app.ticker.add((delay) => {
	if (state === "game")
	{
		count += 0.025;
		blurFilter.blur = 20 * (Math.cos(count));
		updateScene(delay);
	}
});


function attachListeners(keysMap)
{
	document.onkeydown = (event) => {
		keysMap[event.code] = true;
	}

	document.onkeyup = (event) => {
		keysMap[event.code] = false;
	}
}

function tryToMovePlayer(keysMap, playerAnimatedSprite, enemySprite, delay)
{
	let isMoving = false;
	const speed = 4;
	if (keysMap["ArrowLeft"])
	{
		if (playerAnimatedSprite.position.x < 0) {
			playerAnimatedSprite.position.x = app.view.width;
		} else {
			playerAnimatedSprite.position.x -= delay * speed;
		}
		playerAnimatedSprite.scale.x = 1;
		isMoving = true;
	}

	if (keysMap["ArrowRight"])
	{
		if (playerAnimatedSprite.position.x > app.view.width) {
			playerAnimatedSprite.position.x = 0;
		} else {
		playerAnimatedSprite.position.x += delay * speed;
		}
		playerAnimatedSprite.scale.x = -1;
		isMoving = true;
	}

	if (keysMap["ArrowDown"])
	{
		if (playerAnimatedSprite.position.y > ( app.view.height + playerAnimatedSprite.height)) {
			playerAnimatedSprite.position.y = 0;
		} else {
		playerAnimatedSprite.position.y += delay * speed;
		}
		playerAnimatedSprite.scale.x = 1;
		isMoving = true;
	}

	if (keysMap["ArrowUp"])
	{
		if (playerAnimatedSprite.position.y < 0) {
			playerAnimatedSprite.position.y = app.view.height;
		} else {
		playerAnimatedSprite.position.y -= delay * speed;
		}
		playerAnimatedSprite.scale.x = -1;
		isMoving = true;
	}

	if (isMoving)
	{
		playerAnimatedSprite.play();
		enemySprite.play();
		addEnemyMovement(playerAnimatedSprite, enemySprite, speed, delay);
	}
	else
	{
		playerAnimatedSprite.stop();
		enemySprite.stop();
	}
}

function checkCollission(playerSpite, diamonds)
{
	for (const diamond of diamonds.children)
	{
		if (diamond.getBounds().intersects(playerSpite.getBounds()))
		{
			diamonds.removeChild(diamond);
			score += 1;
		}
	}
}

function createPlayerAnimation()
{
	const keyFramesCount = 8;
	const keyFrames = [];
	for (let i = 1; i <= keyFramesCount; i++)
	{
		keyFrames.push(PIXI.Texture.from(`resources/player_walking_${i}.png`));
	}

	return new PIXI.AnimatedSprite(keyFrames);
}

function createEnemyAnimation()
{
	const keyFramesCount = 8;
	const keyFrames = [];
	for (let i = 1; i <= keyFramesCount; i++)
	{
		keyFrames.push(PIXI.Texture.from(`resources/enemy_walking_${i}.png`));
	}

	return new PIXI.AnimatedSprite(keyFrames);
}

function addEnemyMovement(playerAnimatedSprite, enemySprite, speed, delay) {
	let x = enemySprite.position.x - playerAnimatedSprite.position.x;
	let y = enemySprite.position.y - playerAnimatedSprite.position.y;
	let length = Math.sqrt( ( Math.pow(x, 2) + Math.pow(y, 2) ) );
	x /= length;
	y /= length;

	enemySprite.position.x -= x * speed / 2 * delay; // added half speed for easier testing
	enemySprite.position.y -= y * speed / 2 * delay;
	if (x > 0) {
		enemySprite.scale.x = -0.5;
	} else {
		enemySprite.scale.x = 0.5;
	}
}

function checkEndGame(playerSpite, enemySprite, diamondsCount) {
	if (score == diamondsCount) {
		winText.text = 'You won!\nTotal score: ' + score;
		state = "menu";
		app.stage.removeChild(gameScene);
		app.stage.addChild(winScene);
	}
	if (enemySprite.getBounds().intersects(playerSpite.getBounds())) {
		looseText.text = 'Game over!\nTotal score: ' + score;
		state = "menu";
		app.stage.removeChild(gameScene);
		app.stage.addChild(looseScene);
	}
}

//TODO: reset scene and counters
winRestartText.on("click", () => {
	state = "game";
	app.stage.removeChild(winScene);
	app.stage.addChild(gameScene);
});

looseRestartText.on("click", () => {
	state = "game";
	app.stage.removeChild(looseScene);
	app.stage.addChild(gameScene);
});
*/