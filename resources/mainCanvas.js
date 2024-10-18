(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"mainCanvas_atlas_1", frames: [[1988,162,51,47],[0,642,860,413],[1084,1265,222,148],[595,1057,242,241],[839,1098,243,201],[1347,992,276,272],[1988,211,54,33],[1781,802,265,265],[1308,1266,151,47],[1461,1266,151,47],[1849,752,152,47],[1625,992,152,47],[862,646,264,450],[1625,1069,414,124],[1128,646,719,154],[1347,802,432,188],[0,0,1000,640],[1128,802,217,461],[1988,0,52,52],[1988,54,52,52],[1988,108,52,52],[1625,1195,204,224],[1002,0,984,644],[0,1057,279,243],[281,1057,312,211],[1849,646,154,104],[1831,1195,212,162]]}
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



(lib.Anchor = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Base = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Boat1 = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Boat2 = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Boat3 = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.BoatBig = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.BoatSmall = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bubble = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.ButtonPlay = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.ButtonPlay_hover = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.ButtonPopup = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.ButtonPopup_hover = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Cloud = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Cloud1 = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Cloud2 = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Cloud3 = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Frame = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Glow = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.GlowLight = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.i = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.i_hover = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.InfoPopup = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.PaleGlow = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.PuttiLeft = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.PuttiRight = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.ShipDrifter = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.ShipWobler = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(26);
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


(lib.Tween60 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.InfoPopup();
	this.instance.setTransform(-95.5,-112);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.5,-112,204,224);


(lib.Tween59 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.InfoPopup();
	this.instance.setTransform(-95.5,-112);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.5,-112,204,224);


(lib.Tween56 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.GlowLight();
	this.instance.setTransform(-13,-13,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-13,26,26);


(lib.Tween55 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.GlowLight();
	this.instance.setTransform(-13,-13,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-13,26,26);


(lib.Tween52 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ButtonPlay_hover();
	this.instance.setTransform(-75.5,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,-23.5,151,47);


(lib.Tween51 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ButtonPlay_hover();
	this.instance.setTransform(-75.5,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,-23.5,151,47);


(lib.Tween50 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ButtonPopup_hover();
	this.instance.setTransform(-76,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-23.5,152,47);


(lib.Tween49 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ButtonPopup_hover();
	this.instance.setTransform(-76,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-23.5,152,47);


(lib.Tween48 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.i_hover();
	this.instance.setTransform(-26,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-26,52,52);


(lib.Tween47 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.i_hover();
	this.instance.setTransform(-26,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-26,52,52);


(lib.Tween34 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Base();
	this.instance.setTransform(-430,-207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-430,-207,860,413);


(lib.Tween33 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("EhQGAzPMAAAhmdMCgNAAAMAAABmdg");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512.6,-327.9,1025.3000000000002,655.8);


(lib.Tween30 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BoatSmall();
	this.instance.setTransform(-27,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-16.5,54,33);


(lib.Tween29 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BoatSmall();
	this.instance.setTransform(-27,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-16.5,54,33);


(lib.Tween28 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BoatSmall();
	this.instance.setTransform(-27,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-16.5,54,33);


(lib.Tween26 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Boat3();
	this.instance.setTransform(-121.5,-100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.5,-100.5,243,201);


(lib.Tween25 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Boat3();
	this.instance.setTransform(-121.5,-100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.5,-100.5,243,201);


(lib.Tween24 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Boat3();
	this.instance.setTransform(-121.5,-100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.5,-100.5,243,201);


(lib.Tween22 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Boat2();
	this.instance.setTransform(-121,-120.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-120.5,242,241);


(lib.Tween21 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Boat2();
	this.instance.setTransform(-121,-120.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-120.5,242,241);


(lib.Tween20 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Boat2();
	this.instance.setTransform(-121,-120.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-120.5,242,241);


(lib.Tween18 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BoatBig();
	this.instance.setTransform(-138,-136);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138,-136,276,272);


(lib.Tween17 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BoatBig();
	this.instance.setTransform(-138,-136);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138,-136,276,272);


(lib.Tween16 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BoatBig();
	this.instance.setTransform(-138,-136);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138,-136,276,272);


(lib.Tween14 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Boat1();
	this.instance.setTransform(-111,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111,-74,222,148);


(lib.Tween13 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Boat1();
	this.instance.setTransform(-111,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111,-74,222,148);


(lib.Tween12 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Boat1();
	this.instance.setTransform(-111,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111,-74,222,148);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ShipWobler();
	this.instance.setTransform(-106,-81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106,-81,212,162);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ShipWobler();
	this.instance.setTransform(-106,-81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106,-81,212,162);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ShipWobler();
	this.instance.setTransform(-106,-81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106,-81,212,162);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ShipDrifter();
	this.instance.setTransform(-65.5,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.5,-44.5,154,104);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ShipDrifter();
	this.instance.setTransform(-65.5,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.5,-44.5,154,104);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ShipDrifter();
	this.instance.setTransform(-65.5,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.5,-44.5,154,104);


(lib.Tween63 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bubble();
	this.instance.setTransform(129,-204,0.4619,0.4619);

	this.instance_1 = new lib.Bubble();
	this.instance_1.setTransform(99,-118,0.6928,0.6928);

	this.instance_2 = new lib.Bubble();
	this.instance_2.setTransform(-276,-72,1.0779,1.0779);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-276,-204,558.6,417.7);


(lib.Tween62 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bubble();
	this.instance.setTransform(129,-204,0.4619,0.4619);

	this.instance_1 = new lib.Bubble();
	this.instance_1.setTransform(99,-118,0.6928,0.6928);

	this.instance_2 = new lib.Bubble();
	this.instance_2.setTransform(-276,-72,1.0781,1.0781);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-276,-204,558.6,417.7);


(lib.Tween61 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bubble();
	this.instance.setTransform(120,-235,0.2362,0.2362);

	this.instance_1 = new lib.Bubble();
	this.instance_1.setTransform(104,-191,0.3543,0.3543);

	this.instance_2 = new lib.Bubble();
	this.instance_2.setTransform(-87,-168,0.5513,0.5513);

	this.instance_3 = new lib.Bubble();
	this.instance_3.setTransform(-60,99,0.1538,0.1538);

	this.instance_4 = new lib.Bubble();
	this.instance_4.setTransform(-1,109,0.3543,0.3543);

	this.instance_5 = new lib.Bubble();
	this.instance_5.setTransform(-195,143,0.3588,0.3588);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195,-235,392.9,473.1);


(lib.Tween58 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bubble();
	this.instance.setTransform(120,-235,0.2362,0.2362);

	this.instance_1 = new lib.Bubble();
	this.instance_1.setTransform(104,-191,0.3543,0.3543);

	this.instance_2 = new lib.Bubble();
	this.instance_2.setTransform(-87,-168,0.5513,0.5513);

	this.instance_3 = new lib.Bubble();
	this.instance_3.setTransform(-60,99,0.1538,0.1538);

	this.instance_4 = new lib.Bubble();
	this.instance_4.setTransform(-1,109,0.3543,0.3543);

	this.instance_5 = new lib.Bubble();
	this.instance_5.setTransform(-195,143,0.3588,0.3588);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195,-235,392.9,473.1);


(lib.Tween57 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bubble();
	this.instance.setTransform(-437.3,165.7,0.1536,0.1536,180);

	this.instance_1 = new lib.Bubble();
	this.instance_1.setTransform(-503.95,61.05,0.2304,0.2304,180);

	this.instance_2 = new lib.Bubble();
	this.instance_2.setTransform(-506,-81,0.3585,0.3585,180);

	this.instance_3 = new lib.Bubble();
	this.instance_3.setTransform(-268.5,1.5,0.1,0.1,180);

	this.instance_4 = new lib.Bubble();
	this.instance_4.setTransform(-434.95,-133.95,0.2304,0.2304,180);

	this.instance_5 = new lib.Bubble();
	this.instance_5.setTransform(-312.2,-159.2,0.2332,0.2332,180);

	this.instance_6 = new lib.Bubble();
	this.instance_6.setTransform(286,-124,0.1536,0.1536);

	this.instance_7 = new lib.Bubble();
	this.instance_7.setTransform(276,-95,0.2304,0.2304);

	this.instance_8 = new lib.Bubble();
	this.instance_8.setTransform(151,-80,0.3585,0.3585);

	this.instance_9 = new lib.Bubble();
	this.instance_9.setTransform(169,93,0.1,0.1);

	this.instance_10 = new lib.Bubble();
	this.instance_10.setTransform(207,100,0.2304,0.2304);

	this.instance_11 = new lib.Bubble();
	this.instance_11.setTransform(81,122,0.2332,0.2332);

	this.instance_12 = new lib.Bubble();
	this.instance_12.setTransform(286,-317,0.1536,0.1536);

	this.instance_13 = new lib.Bubble();
	this.instance_13.setTransform(261,-295,0.2304,0.2304);

	this.instance_14 = new lib.Bubble();
	this.instance_14.setTransform(151,-273,0.3585,0.3585);

	this.instance_15 = new lib.Bubble();
	this.instance_15.setTransform(169,-100,0.1,0.1);

	this.instance_16 = new lib.Bubble();
	this.instance_16.setTransform(207,-93,0.2304,0.2304);

	this.instance_17 = new lib.Bubble();
	this.instance_17.setTransform(81,-71,0.2332,0.2332);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-601,-317,938.1,500.8);


(lib.Tween54 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bubble();
	this.instance.setTransform(-180,-100,0.1,0.1);

	this.instance_1 = new lib.Bubble();
	this.instance_1.setTransform(-195.3,164.7,0.1536,0.1536,180);

	this.instance_2 = new lib.Bubble();
	this.instance_2.setTransform(-261.95,61.05,0.2304,0.2304,180);

	this.instance_3 = new lib.Bubble();
	this.instance_3.setTransform(-264,-81,0.3585,0.3585,180);

	this.instance_4 = new lib.Bubble();
	this.instance_4.setTransform(-74.5,1.5,0.1,0.1,180);

	this.instance_5 = new lib.Bubble();
	this.instance_5.setTransform(-192.95,-133.95,0.2304,0.2304,180);

	this.instance_6 = new lib.Bubble();
	this.instance_6.setTransform(-123,-164,0.2,0.2,180);

	this.instance_7 = new lib.Bubble();
	this.instance_7.setTransform(286,-124,0.1536,0.1536);

	this.instance_8 = new lib.Bubble();
	this.instance_8.setTransform(276,-95,0.2304,0.2304);

	this.instance_9 = new lib.Bubble();
	this.instance_9.setTransform(151,-80,0.3585,0.3585);

	this.instance_10 = new lib.Bubble();
	this.instance_10.setTransform(101,93,0.1,0.1);

	this.instance_11 = new lib.Bubble();
	this.instance_11.setTransform(139,100,0.2304,0.2304);

	this.instance_12 = new lib.Bubble();
	this.instance_12.setTransform(13,122,0.2332,0.2332);

	this.instance_13 = new lib.Bubble();
	this.instance_13.setTransform(286,-317,0.1536,0.1536);

	this.instance_14 = new lib.Bubble();
	this.instance_14.setTransform(253,-298,0.2304,0.2304);

	this.instance_15 = new lib.Bubble();
	this.instance_15.setTransform(151,-273,0.3585,0.3585);

	this.instance_16 = new lib.Bubble();
	this.instance_16.setTransform(169,-100,0.1,0.1);

	this.instance_17 = new lib.Bubble();
	this.instance_17.setTransform(207,-93,0.2304,0.2304);

	this.instance_18 = new lib.Bubble();
	this.instance_18.setTransform(81,-71,0.2332,0.2332);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-359,-317,696.1,500.8);


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
	this.shape.graphics.f("#D8EAFF").s().p("AkYEZQh1h1ABikQgBijB1h1QB1h1CjABQCkgBB1B1QB1B1AACjQAACkh1B1Qh1B1ikAAQijAAh1h1gAhRkjQgjAkAAAxQAAAyAjAiQAkAkAwAAQAxAAAjgkQAkgiAAgyQAAgxgkgkQgjgjgxAAQgwAAgkAjg");
	this.shape.setTransform(-0.25,-0.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhUBUQgjgiAAgyQAAgwAjgkQAkgjAwAAQAxAAAjAjQAkAkAAAwQAAAygkAiQgjAkgxAAQgwAAgkgkg");
	this.shape_1.setTransform(0.05,-20.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-40,79.5,79.5);


(lib.PaleGlow_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_33
	this.instance = new lib.PaleGlow();
	this.instance.setTransform(-492,-322,1,0.9999);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-492,-322,984,644);


(lib.Cloud_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Cloud();
	this.instance.setTransform(-161,-284);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cloud_1, new cjs.Rectangle(-161,-284,264,450), null);


(lib.Anchor_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Anchor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Anchor_1, new cjs.Rectangle(0,0,51,47), null);


(lib.ShipWobler_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween4("synched",0);
	this.instance.setTransform(106,81);

	this.instance_1 = new lib.Tween5("synched",0);
	this.instance_1.setTransform(106,73);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween6("synched",0);
	this.instance_2.setTransform(106,81);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},35).to({state:[{t:this.instance_2}]},36).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:73},35).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},35).to({_off:true,y:81},36).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-8,212,170);


(lib.ShipDrifter_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(65.5,44.5);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(65.5,39.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.setTransform(65.5,44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_2}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:39.5},8).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},8).to({_off:true,y:44.5},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5,154,109);


(lib.InfoPopup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Close:12};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		_this.stop();
	}
	this.frame_11 = function() {
		var _this = this;
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(13));

	// Layer_2
	this.instance = new lib.Tween59("synched",0);
	this.instance.setTransform(-0.5,0,0.1,0.1,0,0,0,-0.5,0);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Tween60("synched",0);
	this.instance_1.setTransform(-0.5,0,0.1,0.1,0,0,0,-0.5,0);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},11).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},11).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,scaleX:1,scaleY:1,alpha:1},11).to({startPosition:0},1).to({_off:true,regX:-0.5,scaleX:0.1,scaleY:0.1,alpha:0},11).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-112,204,224);


(lib.InfoButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"default":0,hover:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		_this.stop();
	}
	this.frame_1 = function() {
		var _this = this;
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(5));

	// Layer_1
	this.instance = new lib.Tween47("synched",0);
	this.instance.setTransform(26,26);
	this.instance._off = true;

	this.instance_1 = new lib.Tween48("synched",0);
	this.instance_1.setTransform(26,26);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true,alpha:0},4).wait(1));

	// Layer_2
	this.instance_2 = new lib.i();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5081AA").s().p("AidCeQhChBABhdQgBhcBChBQBBhCBcABQBdgBBBBCQBBBBAABcQAABdhBBBQhBBBhdAAQhcAAhBhBg");
	this.shape.setTransform(26,26);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,52);


(lib.GlowLight_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween55("synched",0);
	this.instance.setTransform(13,13);

	this.instance_1 = new lib.Tween56("synched",0);
	this.instance_1.setTransform(13,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_1}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:17.9,y:9.5,alpha:0.8984},3).to({x:27.4,y:11.35,alpha:0.7695},3).to({x:32.95,y:20.1,alpha:0.6289},3).to({x:32.4,y:24.75,alpha:0.5},3).to({x:28.95,y:29.4,alpha:0.3984},3).to({x:26.3,y:30.85,alpha:0.5},3).to({x:19.65,y:32.2,alpha:0.6016},3).to({x:13,y:28.95,alpha:0.6992},3).to({x:10.35,y:23.65,alpha:0.8008},3).to({x:10.7,y:18.3,alpha:0.8984},3).to({_off:true,x:13,y:13,alpha:1},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.6,-3.5,48.6,48.7);


(lib.Glow_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.GlowLight_1();
	this.instance.setTransform(40.05,-167.2,0.7,0.7,45,0,0,13.1,13);
	this.instance.alpha = 0.75;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_4
	this.instance_1 = new lib.GlowLight_1();
	this.instance_1.setTransform(85.55,-130.75,0.3996,0.3996,20.0211,0,0,13.2,12.8);
	this.instance_1.alpha = 0.75;
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_4
	this.instance_2 = new lib.GlowLight_1();
	this.instance_2.setTransform(54.1,-89.7,0.8,0.8,89.9945,0,0,13.1,13);
	this.instance_2.alpha = 0.75;
	this.instance_2.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer_4
	this.instance_3 = new lib.GlowLight_1();
	this.instance_3.setTransform(98.3,-48.5,0.7993,0.7993,104.8257,0,0,13,13);
	this.instance_3.alpha = 0.75;
	this.instance_3.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer_4
	this.instance_4 = new lib.GlowLight_1();
	this.instance_4.setTransform(54.15,-4.55,0.9,0.9,0,0,0,13.1,13);
	this.instance_4.alpha = 0.75;
	this.instance_4.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer_4
	this.instance_5 = new lib.GlowLight_1();
	this.instance_5.setTransform(66.15,62.7,1.0491,1.0491,14.8243,0,0,13.1,13.1);
	this.instance_5.alpha = 0.75;
	this.instance_5.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Layer_4
	this.instance_6 = new lib.GlowLight_1();
	this.instance_6.setTransform(14.05,94.7,0.4995,0.4995,109.8339,0,0,13.1,13);
	this.instance_6.alpha = 0.75;
	this.instance_6.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Layer_4
	this.instance_7 = new lib.GlowLight_1();
	this.instance_7.setTransform(4.5,160.1,0.75,0.75,75.0002,0,0,13,13.1);
	this.instance_7.alpha = 0.75;
	this.instance_7.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Glow
	this.instance_8 = new lib.Glow();
	this.instance_8.setTransform(-109,-232);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Glow_1, new cjs.Rectangle(-109,-232,220,461), null);


(lib.Effect = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(79));

	// Close
	this.instance = new lib.Tween62("synched",0);
	this.instance.setTransform(1300,203.75);
	this.instance._off = true;

	this.instance_1 = new lib.Tween63("synched",0);
	this.instance_1.setTransform(-284.4,903.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},36).to({state:[{t:this.instance_1}]},21).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36).to({_off:false},0).to({_off:true,x:-284.4,y:903.75},21).wait(22));

	// Middle
	this.instance_2 = new lib.Tween58("synched",0);
	this.instance_2.setTransform(1200,54.85);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween61("synched",0);
	this.instance_3.setTransform(-203.2,534.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},17).to({state:[{t:this.instance_3}]},38).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).to({_off:true,x:-203.2,y:534.85},38).wait(24));

	// Far
	this.instance_4 = new lib.Tween54("synched",0);
	this.instance_4.setTransform(1400,197.15);

	this.instance_5 = new lib.Tween57("synched",0);
	this.instance_5.setTransform(-340.8,437.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},78).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,x:-340.8,y:437.1},78).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-941.8,-180.1,2678.8999999999996,1297.5);


(lib.ButtonPopup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"hover":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		_this.stop();
	}
	this.frame_5 = function() {
		var _this = this;
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer_3
	this.instance = new lib.Tween49("synched",0);
	this.instance.setTransform(76,23.5);
	this.instance._off = true;

	this.instance_1 = new lib.Tween50("synched",0);
	this.instance_1.setTransform(76,23.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true,alpha:0},4).wait(1));

	// Layer_1
	this.instance_2 = new lib.ButtonPopup();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152,47);


(lib.ButtonPlay_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"hover":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		_this.stop();
	}
	this.frame_5 = function() {
		var _this = this;
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer_4
	this.instance = new lib.Tween51("synched",0);
	this.instance.setTransform(75.5,23.5);
	this.instance._off = true;

	this.instance_1 = new lib.Tween52("synched",0);
	this.instance_1.setTransform(75.5,23.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true,alpha:0},4).wait(1));

	// Button01
	this.instance_2 = new lib.ButtonPlay();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151,47);


(lib.Base_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Close":47};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		_this.stop();
	}
	this.frame_47 = function() {
		var _this = this;
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(47).call(this.frame_47).wait(32));

	// CloudLeft
	this.instance = new lib.Cloud_1();
	this.instance.setTransform(0,40);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({x:-237,alpha:1},8).to({x:-291},5).to({x:-482,alpha:0},12).wait(15).to({skewY:180,x:-424.8,y:0,compositeOperation:NaN},0).to({_off:true},1).wait(32));

	// CloudGlowLeft
	this.instance_1 = new lib.Cloud_1();
	this.instance_1.setTransform(0,40);
	this.instance_1.alpha = 0;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({scaleX:1.781,x:-185,alpha:0.5},8).to({scaleX:1.6644,x:-265},5).to({scaleX:1.9924,x:-425,alpha:0},12).wait(15).to({skewY:180,x:-424.85,y:0},0).to({_off:true},1).wait(32));

	// CloudRight
	this.instance_2 = new lib.Cloud_1();
	this.instance_2.setTransform(0,40,1,1,0,0,180);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({x:237,alpha:1},8).to({x:291},5).to({x:428,alpha:0},12).wait(15).to({x:424.8,y:0,compositeOperation:NaN},0).to({_off:true},1).wait(32));

	// CloudGlowRight
	this.instance_3 = new lib.Cloud_1();
	this.instance_3.setTransform(0,40,1,1,0,0,180);
	this.instance_3.alpha = 0;
	this.instance_3.compositeOperation = "lighter";
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({scaleX:1.781,x:185,alpha:0.5},8).to({scaleX:1.6644,x:265},5).to({scaleX:1.9924,x:425,alpha:0},12).wait(15).to({x:424.85,y:0},0).to({_off:true},1).wait(32));

	// Base
	this.instance_4 = new lib.Tween34();
	this.instance_4.setTransform(0,0,0.25,0.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,alpha:1,mode:"synched",startPosition:0},17).to({startPosition:0},44).to({scaleX:0.25,scaleY:0.5,alpha:0},17).wait(1));

	// GlowLeft
	this.instance_5 = new lib.Glow_1();
	this.instance_5.setTransform(-220,33,1,1,0,0,180);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({x:-368,alpha:1},26).wait(19).to({x:-370},0).to({x:-357,alpha:0.1406},6).to({x:-196,alpha:0},9).to({_off:true},1).wait(8));

	// GlowRight
	this.instance_6 = new lib.Glow_1();
	this.instance_6.setTransform(220,0);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).to({x:368,alpha:1},26).wait(19).to({x:370},0).to({x:357,alpha:0.1406},6).to({x:196,alpha:0},9).to({_off:true},1).wait(8));

	// PaleGlow
	this.instance_7 = new lib.PaleGlow_1();
	this.instance_7.setTransform(0,0,0.1736,0.5728);
	this.instance_7.alpha = 0.1719;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({scaleX:0.2865,scaleY:0.7722,alpha:0.8008},5).to({regX:0.1,regY:0.1,scaleX:0.9203,scaleY:1,x:0.1,y:0.1,alpha:0.8984},8).to({regX:0.3,scaleX:1.0724,x:0.3},9).to({regX:0.2,scaleX:1.5342,alpha:0},16).to({_off:true},3).wait(32));

	// Shadow
	this.instance_8 = new lib.Tween33("synched",0);
	this.instance_8.setTransform(17.6,-8);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:1},11).to({startPosition:0},52).to({alpha:0},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-754.8,-335.9,1509.6999999999998,657.9);


(lib.Anchored = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Anchor
	this.instance = new lib.Anchor_1();
	this.instance.setTransform(248.5,273.5,1,1,0,0,0,25.5,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(97));

	// Layer_6
	this.instance_1 = new lib.Tween12("synched",0);
	this.instance_1.setTransform(362,220);

	this.instance_2 = new lib.Tween13("synched",0);
	this.instance_2.setTransform(361,225);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween14("synched",0);
	this.instance_3.setTransform(358,218);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:365,y:223},23).to({_off:true,x:361,y:225},24).wait(24).to({_off:false,x:362,y:220},25).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},24).to({_off:true,x:358,y:218},24).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(47).to({_off:false},24).to({_off:true,x:362,y:220},25).wait(1));

	// BoatBig
	this.instance_4 = new lib.Tween16("synched",0);
	this.instance_4.setTransform(208,136);

	this.instance_5 = new lib.Tween17("synched",0);
	this.instance_5.setTransform(213,129);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween18("synched",0);
	this.instance_6.setTransform(211,139);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:211,y:133},23).to({_off:true,x:213,y:129},24).wait(24).to({_off:false,x:208,y:136},25).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(23).to({_off:false},24).to({_off:true,x:211,y:139},24).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(47).to({_off:false},24).to({_off:true,x:208,y:136},25).wait(1));

	// Layer_4
	this.instance_7 = new lib.Tween20("synched",0);
	this.instance_7.setTransform(372,149.5);

	this.instance_8 = new lib.Tween21("synched",0);
	this.instance_8.setTransform(372,143.5);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween22("synched",0);
	this.instance_9.setTransform(369,151.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:375,y:146.5},23).to({_off:true,x:372,y:143.5},24).wait(24).to({_off:false,y:149.5},25).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(23).to({_off:false},24).to({_off:true,x:369,y:151.5},24).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(47).to({_off:false},24).to({_off:true,x:372,y:149.5},25).wait(1));

	// Layer_3
	this.instance_10 = new lib.Tween24("synched",0);
	this.instance_10.setTransform(121.5,178.5);

	this.instance_11 = new lib.Tween25("synched",0);
	this.instance_11.setTransform(123.5,182.5);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween26("synched",0);
	this.instance_12.setTransform(125.5,180.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:118.5,y:181.5},23).to({_off:true,x:123.5,y:182.5},24).wait(24).to({_off:false,x:121.5,y:178.5},25).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(23).to({_off:false},24).to({_off:true,x:125.5,y:180.5},24).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(47).to({_off:false},24).to({_off:true,x:121.5,y:178.5},25).wait(1));

	// BoatSmall
	this.instance_13 = new lib.Tween28("synched",0);
	this.instance_13.setTransform(276,250);

	this.instance_14 = new lib.Tween29("synched",0);
	this.instance_14.setTransform(273,241.5);
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween30("synched",0);
	this.instance_15.setTransform(271,245.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({y:243.5},23).to({_off:true,x:273,y:241.5},24).wait(24).to({_off:false,x:276,y:250},25).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(23).to({_off:false},24).to({_off:true,x:271,y:245.5},24).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(47).to({_off:false},24).to({_off:true,x:276,y:250},25).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-7,499,306);


(lib.MainScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		_this.InfoButton.on('click', function(){
		_this.InfoButton.gotoAndPlay('hover');
		_this.InfoPopup.play();
		});
		
		var _this = this;
		_this.InfoPopup.on('click', function(){
		_this.InfoPopup.gotoAndPlay('Close');
		});
		
		var _this = this;
		_this.PopupButton.on('click', function(){
		_this.PopupButton.gotoAndPlay('hover');
		_this.Popup.play();
		});
		
		var _this = this;
		_this.PlayButton.on('click', function(){
		_this.PlayButton.gotoAndPlay('hover');
		_this.Effect.play();
		});
		var _this = this;
		_this.Popup.on('click', function(){
		_this.Popup.gotoAndPlay('Close');
		});
		stage.enableMouseOver(30);
		
		var _this = this;
		stage.on('stagemousemove', function (e){
			var radians = Math.atan2(e.localY - _this.RightRollerLeft.y, e.localX - _this.RightRollerLeft.x);
			var degrees = radians * (180 - Math.PI);
			_this.RightRollerLeft.rotation = degrees - 90;
			_this.RightRollerRight.rotation = degrees - 90;
		});
		stage.on('stagemousemove', function (e){
			var radians = Math.atan2(e.localY - _this.LeftRollerLeft.y, e.localX - _this.LeftRollerLeft.x);
			var degrees = radians * (180 - Math.PI);
			_this.LeftRollerLeft.rotation = degrees - 90;
			_this.LeftRollerRight.rotation = degrees - 90;
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(79));

	// Popup
	this.Popup = new lib.Base_1();
	this.Popup.name = "Popup";
	this.Popup.setTransform(481.9,328.15);

	this.timeline.addTween(cjs.Tween.get(this.Popup).wait(78).to({x:483.25,y:328.45},0).wait(1));

	// Roller
	this.RightRollerLeft = new lib.Roll();
	this.RightRollerLeft.name = "RightRollerLeft";
	this.RightRollerLeft.setTransform(747.55,81.2,0.1761,0.1761,0,0,0,-0.3,-0.3);

	this.RightRollerRight = new lib.Roll();
	this.RightRollerRight.name = "RightRollerRight";
	this.RightRollerRight.setTransform(789.6,74.6,0.1887,0.1887,0,0,0,-0.2,-0.2);

	this.LeftRollerRight = new lib.Roll();
	this.LeftRollerRight.name = "LeftRollerRight";
	this.LeftRollerRight.setTransform(217.4,72.65,0.1762,0.1762,0,0,0,0.3,0.3);

	this.LeftRollerLeft = new lib.Roll();
	this.LeftRollerLeft.name = "LeftRollerLeft";
	this.LeftRollerLeft.setTransform(177.7,68.4,0.1882,0.1882,0,0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.LeftRollerLeft},{t:this.LeftRollerRight},{t:this.RightRollerRight},{t:this.RightRollerLeft}]}).wait(79));

	// FramePutti
	this.instance = new lib.PuttiRight();
	this.instance.setTransform(689,3,0.92,0.92);

	this.instance_1 = new lib.PuttiLeft();
	this.instance_1.setTransform(23,12,0.92,0.92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(79));

	// FrameBG
	this.instance_2 = new lib.Frame();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79));

	// Effect
	this.Effect = new lib.Effect();
	this.Effect.name = "Effect";
	this.Effect.setTransform(665,-316.9,1,1,0,0,0,665,-316.9);

	this.timeline.addTween(cjs.Tween.get(this.Effect).wait(79));

	// InfoPopup
	this.InfoPopup = new lib.InfoPopup_1();
	this.InfoPopup.name = "InfoPopup";
	this.InfoPopup.setTransform(817.95,416.75);

	this.timeline.addTween(cjs.Tween.get(this.InfoPopup).wait(79));

	// StaticButtons
	this.InfoButton = new lib.InfoButton();
	this.InfoButton.name = "InfoButton";
	this.InfoButton.setTransform(832.5,486.05);

	this.PopupButton = new lib.ButtonPopup_1();
	this.PopupButton.name = "PopupButton";
	this.PopupButton.setTransform(586.25,420.75,1,1,0,0,0,75,25);

	this.PlayButton = new lib.ButtonPlay_1();
	this.PlayButton.name = "PlayButton";
	this.PlayButton.setTransform(395.9,420.75,1,1,0,0,0,75,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.PlayButton},{t:this.PopupButton},{t:this.InfoButton}]}).wait(79));

	// Anchored
	this.Anchored = new lib.Anchored();
	this.Anchored.name = "Anchored";
	this.Anchored.setTransform(497.5,235.5,1,1,0,0,0,246.5,148.5);

	this.timeline.addTween(cjs.Tween.get(this.Anchored).wait(79));

	// Cloud1
	this.instance_3 = new lib.Cloud1();
	this.instance_3.setTransform(1,516);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(79));

	// RoamingShip
	this.instance_4 = new lib.ShipDrifter_1("synched",0);
	this.instance_4.setTransform(-147.35,542);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:1012.7},78).wait(1));

	// Cloud2
	this.instance_5 = new lib.Cloud2();
	this.instance_5.setTransform(268,486);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(79));

	// WoblingShip
	this.instance_6 = new lib.ShipWobler_1();
	this.instance_6.setTransform(337.8,534.65,1,1,0,0,0,106,81);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(79));

	// Cloud3
	this.instance_7 = new lib.Cloud3();
	this.instance_7.setTransform(224,452);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(79));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.3,-119.8,1884.3999999999999,768.0999999999999);


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

	// MainScreen
	this.instance = new lib.MainScreen();
	this.instance.setTransform(500,320,1,1,0,0,0,500,320);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EhPrgzjMCfXAAAMAAABnHMifXAAAg");
	this.shape.setTransform(500,320);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(79));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(352.7,200.2,1384.3999999999999,447.8);
// library properties:
lib.properties = {
	id: '303C2E8208D3414CBA2B52E197D5F01E',
	width: 1000,
	height: 640,
	fps: 24,
	color: "#000000",
	opacity: 0.00,
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