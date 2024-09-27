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

const startGameText = new PIXI.Text('Start Game', style);
startGameText.x = app.view.width / 2 - startGameText.width / 2;
startGameText.y = app.view.height / 2 - startGameText.height / 2;
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

    mainScene.addChild(graphics);
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
mainScene.addChild(button);
mainScene.addChild(buttonText);

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
}

(function (cjs, an) {

	var p; // shortcut to reference prototypes
	var lib={};var ss={};var img={};
	lib.ssMetadata = [
			{name:"Loader_HTML5 Canvas_atlas_1", frames: [[0,0,250,250]]}
	];
	
	
	(lib.AnMovieClip = function(){
		this.actionFrames = [];
		this.ignorePause = false;
		this.gotoAndPlay = function(positionOrLabel){
			cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
		}
		this.play = function(){
			cjs.MovieClip.prototype.play.call(this);
		}
		this.gotoAndStop = function(positionOrLabel){
			cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		}
		this.stop = function(){
			cjs.MovieClip.prototype.stop.call(this);
		}
	}).prototype = p = new cjs.MovieClip();
	// symbols:
	
	(lib.loader = function() {
		this.initialize(ss["Loader_HTML5 Canvas_atlas_1"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	// helper functions:
	
	function mc_symbol_clone() {
		var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
		clone.gotoAndStop(this.currentFrame);
		clone.paused = this.paused;
		clone.framerate = this.framerate;
		return clone;
	}
	
	function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
		var prototype = cjs.extend(symbol, cjs.MovieClip);
		prototype.clone = mc_symbol_clone;
		prototype.nominalBounds = nominalBounds;
		prototype.frameBounds = frameBounds;
		return prototype;
		}
	
	
	(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.instance = new lib.loader();
		this.instance.setTransform(-50,-23,0.8,0.8);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-50,-23,200,200), null);
	
	
	// stage content:
	(lib.Loader_HTML5Canvas = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.instance = new lib.Symbol1("synched",0);
		this.instance.setTransform(266.3,259.55);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:372.6},12).to({x:260.05},11).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new lib.AnMovieClip();
	p.nominalBounds = new cjs.Rectangle(530.1,476.6,-7.5,-40);
	// library properties:
	lib.properties = {
		id: '303C2E8208D3414CBA2B52E197D5F01E',
		width: 640,
		height: 480,
		fps: 24,
		color: "#FFFFFF",
		opacity: 1.00,
		manifest: [
			{src:"resources/images/Loader_HTML5 Canvas_atlas_1.png", id:"Loader_HTML5 Canvas_atlas_1"}
		],
		preloads: []
	};
	
	
	
	// bootstrap callback support:
	
	(lib.Stage = function(canvas) {
		createjs.Stage.call(this, canvas);
	}).prototype = p = new createjs.Stage();
	
	p.setAutoPlay = function(autoPlay) {
		this.tickEnabled = autoPlay;
	}
	p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
	p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
	p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
	p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }
	
	p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }
	
	an.bootcompsLoaded = an.bootcompsLoaded || [];
	if(!an.bootstrapListeners) {
		an.bootstrapListeners=[];
	}
	
	an.bootstrapCallback=function(fnCallback) {
		an.bootstrapListeners.push(fnCallback);
		if(an.bootcompsLoaded.length > 0) {
			for(var i=0; i<an.bootcompsLoaded.length; ++i) {
				fnCallback(an.bootcompsLoaded[i]);
			}
		}
	};
	
	an.compositions = an.compositions || {};
	an.compositions['303C2E8208D3414CBA2B52E197D5F01E'] = {
		getStage: function() { return exportRoot.stage; },
		getLibrary: function() { return lib; },
		getSpriteSheet: function() { return ss; },
		getImages: function() { return img; }
	};
	
	an.compositionLoaded = function(id) {
		an.bootcompsLoaded.push(id);
		for(var j=0; j<an.bootstrapListeners.length; j++) {
			an.bootstrapListeners[j](id);
		}
	}
	
	an.getComposition = function(id) {
		return an.compositions[id];
	}
	
	
	an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}
			domContainers[0].width = w * pRatio * sRatio;			
			domContainers[0].height = h * pRatio * sRatio;
			domContainers.forEach(function(container) {				
				container.style.width = w * sRatio + 'px';				
				container.style.height = h * sRatio + 'px';			
			});
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;
			lastW = iw; lastH = ih; lastS = sRatio;            
			stage.tickOnUpdate = false;            
			stage.update();            
			stage.tickOnUpdate = true;		
		}
	}
	an.handleSoundStreamOnTick = function(event) {
		if(!event.paused){
			var stageChild = stage.getChildAt(0);
			if(!stageChild.paused || stageChild.ignorePause){
				stageChild.syncStreamSounds();
			}
		}
	}
	an.handleFilterCache = function(event) {
		if(!event.paused){
			var target = event.target;
			if(target){
				if(target.filterCacheList){
					for(var index = 0; index < target.filterCacheList.length ; index++){
						var cacheInst = target.filterCacheList[index];
						if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
							cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
						}
					}
				}
			}
		}
	}
	
	
	})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
	var createjs, AdobeAn;

