(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"mainCanvas_atlas_1", frames: [[0,0,250,250]]}
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



(lib.loaderShip = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
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


(lib.Roll = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhUBVQgjgkAAgxQAAgwAjgkQAjgjAxAAQAyAAAjAjQAjAkAAAwQAAAxgjAkQgjAjgyAAQgxAAgjgjg");
	this.shape.setTransform(0.05,-20.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC33").s().p("AkYEZQh0h1gBikQABikB0h0QB0h0CkgBQCkABB1B0QB1B0gBCkQABCkh1B1Qh1B1ikgBQikABh0h1gAhRkjQgjAkAAAxQAAAxAjAkQAjAjAxAAQAyAAAjgjQAjgkAAgxQAAgxgjgkQgjgjgyAAQgxAAgjAjg");
	this.shape_1.setTransform(-0.25,-0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-40,79.5,79.5);


(lib.loaderShip_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.loaderShip();
	this.instance.setTransform(-50,-23,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.loaderShip_1, new cjs.Rectangle(-50,-23,200,200), null);


(lib.InfoButton = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("i", "bold 24px 'Verdana'", "#00FF33");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 12;
	this.text.parent = this;
	this.text.setTransform(-0.05,-14.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiaCbQg7g7gEhRIgBgLIAAgEIABgIQAChVA9g9QBAhABaAAIAEAAIAEAAQBWADA8A9QA9A9AEBSIAAAEIAAACIAAAFIAAACIAAACIAAAGIAAABQgEBTg9A9QhABAhaAAQhaAAhAhAg");
	this.shape.setTransform(0.05,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC33").s().p("Ai1C2QhMhLABhrQgBhqBMhLQBLhMBqABQBrgBBLBMQBMBLgBBqQABBrhMBLQhLBMhrgBQhqABhLhMgAiaiaQg9A9gCBVIgBAIIAAAEIABALQAEBRA7A7QBBBABaAAQBaAABAhAQA9g9AEhTIAAgBIAAgGIAAgCIAAgCIAAgFIAAgCIAAgEQgEhSg9g9Qg9g9hWgDIgEAAIgDAAQhaAAhBBAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.7,-25.7,51.5,51.5);


(lib.Button01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Button01
	this.text = new cjs.Text("double click!", "bold 14px 'Verdana'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 144;
	this.text.parent = this;
	this.text.setTransform(75,15);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC9933").s().p("ArtD6IAAnzIXbAAIAAHzg");
	this.shape.setTransform(74.975,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,50);


// stage content:
(lib.mainCanvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		stage.enableMouseOver(30);
		
		var _this = this;
		stage.on('stagemousemove', function (e){
			var radians = Math.atan2(e.localY - _this.RollerLeft.y, e.localX - _this.RollerLeft.x);
			var degrees = radians * (180 - Math.PI);
			_this.RollerLeft.rotation = degrees - 90;
			_this.RollerRight.rotation = degrees - 90;
		});
		var _this = this;
		_this.Button00.on('dblclick', function(){
		_this.Button00.rotation+=30;
		});
		-_this.Button01.on('dblclick', function(){
		_this.Button01.rotation+=30;
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24));

	// Roller
	this.RollerRight = new lib.Roll();
	this.RollerRight.name = "RollerRight";
	this.RollerRight.setTransform(159.6,81.25);

	this.RollerLeft = new lib.Roll();
	this.RollerLeft.name = "RollerLeft";
	this.RollerLeft.setTransform(72.6,81.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.RollerLeft},{t:this.RollerRight}]}).wait(24));

	// StaticButtons
	this.instance = new lib.InfoButton("synched",0);
	this.instance.setTransform(897.95,515.95);

	this.Button01 = new lib.Button01();
	this.Button01.name = "Button01";
	this.Button01.setTransform(596.65,319.05,1,1,0,0,0,75,25);

	this.Button00 = new lib.Button01();
	this.Button00.name = "Button00";
	this.Button00.setTransform(413.45,319.05,1,1,0,0,0,75,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Button00},{t:this.Button01},{t:this.instance}]}).wait(24));

	// RoamingShip
	this.instance_1 = new lib.loaderShip_1("synched",0);
	this.instance_1.setTransform(170,420,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:898.5},12).to({skewY:0,x:800},1).to({x:100},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(520,361.3,430,235.7);
// library properties:
lib.properties = {
	id: '303C2E8208D3414CBA2B52E197D5F01E',
	width: 1000,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"resources/images/mainCanvas_atlas_1.png", id:"mainCanvas_atlas_1"}
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