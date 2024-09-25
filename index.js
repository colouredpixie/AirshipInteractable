const options = {
	backgroundColor: 0xeba9c3,
	width: 600,
	height: 500,
}
const app = new PIXI.Application();
await app.init(options);
document.body.appendChild(app.canvas);

      // Create the sprite and add it to the stage
      await PIXI.Assets.load('resources/loader.png');
      let sprite = PIXI.Sprite.from('resources/loader.png');
      app.stage.addChild(sprite);
	  sprite.y = 100;

      // Add a ticker callback to move the sprite back and forth
      let elapsed = 0.0;
      app.ticker.add((ticker) => {
        elapsed += ticker.deltaTime;
        sprite.x = 170.0 + Math.cos(elapsed/25.0) * 10.0;
      });
