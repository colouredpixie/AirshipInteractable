(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"mainCanvas_atlas_1", frames: [[1988,108,51,47],[993,646,860,413],[1298,1462,222,148],[219,1318,242,241],[1579,1430,243,201],[653,1128,276,272],[1988,157,54,33],[1893,1266,151,47],[1893,1315,151,47],[1855,978,152,47],[1893,1217,152,47],[993,1061,303,567],[463,1402,414,124],[1298,1061,719,154],[219,1128,432,188],[0,0,1000,640],[0,642,991,484],[0,1128,217,464],[1988,0,52,52],[1988,54,52,52],[1855,646,191,224],[1002,0,984,644],[1298,1217,279,243],[1579,1217,312,211],[1855,872,154,104],[1824,1430,212,162]]}
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



(lib.ButtonPlay = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.ButtonPlay_hover = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.ButtonPopup = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.ButtonPopup_hover = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Cloud = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Cloud1 = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Cloud2 = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Cloud3 = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Frame = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.FrameDecor = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Glow = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.i = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.i_hover = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.InfoPopup = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.PaleGlow = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.PuttiLeft = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.PuttiRight = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.ShipDrifter = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.ShipWobler = function() {
	this.initialize(ss["mainCanvas_atlas_1"]);
	this.gotoAndStop(25);
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
p.nominalBounds = new cjs.Rectangle(-95.5,-112,191,224);


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
p.nominalBounds = new cjs.Rectangle(-95.5,-112,191,224);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD2A8").s().p("AoMdSQgKgKAAgPQAAgOAKgKQALgLAOAAQAPAAAKALQAKAKAAAOQAAAPgKAKQgKAKgPAAQgOAAgLgKgACWYNQgFgFAAgJQAAgIAFgGQAGgFAJgBQAIABAGAFQAGAGAAAIQAAAJgGAFQgGAGgIABQgJgBgGgGgABQScQgFgGAAgJQAAgIAFgGQAGgFAJgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIABQgJgBgGgFgAnzRcQgUgUAAgcQAAgcAUgUQAUgUAcAAQAcAAATAUQAUAUAAAcQAAAcgUAUQgTATgcAAQgcAAgUgTgAIgQvQgJgJAAgOQAAgNAJgKQAKgJANAAQAOAAAJAJQAKAKAAANQAAAOgKAJQgJAKgOAAQgNAAgKgKgAFWQxQgHgHAAgLQAAgKAHgIQAHgGALgBQAKABAHAGQAIAIAAAKQAAALgIAHQgHAHgKABQgLgBgHgHgADwMHQgFgGAAgJQAAgIAFgGQAGgFAJgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIABQgJgBgGgFgABfJ2QgPgPAAgWQAAgVAPgQQAQgPAVAAQAWAAAPAPQAQAQAAAVQAAAWgQAPQgPAPgWABQgVgBgQgPgAIdJhQgGgGAAgKQAAgJAGgHQAHgGAJgBQAKABAGAGQAHAHAAAJQAAAKgHAGQgGAGgKAAQgJAAgHgGgACcCzQgLgMAAgQQAAgRALgMQAMgMARAAQAQAAAMAMQAMAMAAARQAAAQgMAMQgMAMgQAAQgRAAgMgMgApGoOQgRgQAAgYQAAgYARgRQARgQAYgBQAYABAQAQQARARAAAYQAAAYgRAQQgQASgYgBQgYABgRgSgAITruQgLgKAAgQQAAgQALgKQALgMAPAAQAQAAALAMQALAKAAAQQAAAQgLAKQgLAMgQAAQgPAAgLgMgAinwCQgRgRAAgaQAAgZARgRQASgSAZAAQAZAAARASQASARAAAZQAAAagSARQgRASgZAAQgZAAgSgSgAE4zAQgMgNAAgRQAAgSAMgMQANgMARAAQASAAAMAMQANAMAAASQAAARgNANQgMAMgSAAQgRAAgNgMgAoH8GQgPgPAAgVQAAgUAPgPQAPgPAUAAQAVAAAOAPQAPAPAAAUQAAAVgPAPQgOAPgVAAQgUAAgPgPg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.9,-188.4,119.9,376.9);


(lib.Tween53 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFD2A8").s().p("AoMdSQgKgKAAgPQAAgOAKgKQALgLAOAAQAPAAAKALQAKAKAAAOQAAAPgKAKQgKAKgPAAQgOAAgLgKgACWYNQgFgFAAgJQAAgIAFgGQAGgFAJgBQAIABAGAFQAGAGAAAIQAAAJgGAFQgGAGgIABQgJgBgGgGgABQScQgFgGAAgJQAAgIAFgGQAGgFAJgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIABQgJgBgGgFgAnzRcQgUgUAAgcQAAgcAUgUQAUgUAcAAQAcAAATAUQAUAUAAAcQAAAcgUAUQgTATgcAAQgcAAgUgTgAIgQvQgJgJAAgOQAAgNAJgKQAKgJANAAQAOAAAJAJQAKAKAAANQAAAOgKAJQgJAKgOAAQgNAAgKgKgAFWQxQgHgHAAgLQAAgKAHgIQAHgGALgBQAKABAHAGQAIAIAAAKQAAALgIAHQgHAHgKABQgLgBgHgHgADwMHQgFgGAAgJQAAgIAFgGQAGgFAJgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIABQgJgBgGgFgABfJ2QgPgPAAgWQAAgVAPgQQAQgPAVAAQAWAAAPAPQAQAQAAAVQAAAWgQAPQgPAPgWABQgVgBgQgPgAIdJhQgGgGAAgKQAAgJAGgHQAHgGAJgBQAKABAGAGQAHAHAAAJQAAAKgHAGQgGAGgKAAQgJAAgHgGgACcCzQgLgMAAgQQAAgRALgMQAMgMARAAQAQAAAMAMQAMAMAAARQAAAQgMAMQgMAMgQAAQgRAAgMgMgApGoOQgRgQAAgYQAAgYARgRQARgQAYgBQAYABAQAQQARARAAAYQAAAYgRAQQgQASgYgBQgYABgRgSgAITruQgLgKAAgQQAAgQALgKQALgMAPAAQAQAAALAMQALAKAAAQQAAAQgLAKQgLAMgQAAQgPAAgLgMgAinwCQgRgRAAgaQAAgZARgRQASgSAZAAQAZAAARASQASARAAAZQAAAagSARQgRASgZAAQgZAAgSgSgAE4zAQgMgNAAgRQAAgSAMgMQANgMARAAQASAAAMAMQANAMAAASQAAARgNANQgMAMgSAAQgRAAgNgMgAoH8GQgPgPAAgVQAAgUAPgPQAPgPAUAAQAVAAAOAPQAPAPAAAUQAAAVgPAPQgOAPgVAAQgUAAgPgPg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.9,-188.4,119.9,376.9);


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


(lib.Tween37 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CC9900").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-500,-425.4,1000,850.8);


(lib.Tween36 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CC9900").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-500,-425.4,1000,850.8);


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

}).prototype = getMCSymbolPrototype(lib.Cloud_1, new cjs.Rectangle(-161,-284,303,567), null);


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
p.nominalBounds = new cjs.Rectangle(-96,-112,191,224);


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

	// Layer_2
	this.instance = new lib.Glow();
	this.instance.setTransform(-109,-232);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12));

	// Layer_1
	this.instance_1 = new lib.Tween53("synched",0);
	this.instance_1.setTransform(23.5,-10.5);

	this.instance_2 = new lib.Tween54("synched",0);
	this.instance_2.setTransform(23.5,-10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.1,regY:-0.1,scaleX:0.99,scaleY:0.99,x:31.15,y:-10.6},2).to({regX:0,regY:0,scaleX:1.02,scaleY:1.02,x:42.45,y:-10.45},3).to({regX:0.1,regY:-0.1,scaleX:0.98,scaleY:0.98,x:43.05,y:-10.55},3).to({_off:true,regX:0,regY:0,scaleX:1,scaleY:1,x:23.5,y:-10.5},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109,-232,217,464);


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

	// Effect
	this.instance = new lib.Tween36("synched",0);
	this.instance.setTransform(1000,-854.6);

	this.instance_1 = new lib.Tween37("synched",0);
	this.instance_1.setTransform(-500,1000);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},78).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-500,y:1000},78).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1000,-1280,2500,2705.4);


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
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({scaleX:1.781,x:-185,alpha:1},8).to({scaleX:1.6644,x:-265},5).to({scaleX:1.9924,x:-425,alpha:0},12).wait(15).to({skewY:180,x:-424.85},0).to({_off:true},1).wait(32));

	// CloudRight
	this.instance_1 = new lib.Cloud_1();
	this.instance_1.setTransform(0,0,1,1,0,0,180);
	this.instance_1.alpha = 0;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({scaleX:1.781,x:185,alpha:1},8).to({scaleX:1.6644,x:265},5).to({scaleX:1.9924,x:425,alpha:0},12).wait(15).to({x:424.85},0).to({_off:true},1).wait(32));

	// Base
	this.instance_2 = new lib.Tween34();
	this.instance_2.setTransform(0,0,0.25,0.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,alpha:1,mode:"synched",startPosition:0},17).to({startPosition:0},44).to({scaleX:0.25,scaleY:0.5,alpha:0},17).wait(1));

	// GlowLeft
	this.instance_3 = new lib.Glow_1();
	this.instance_3.setTransform(-220,0,1,1,0,0,180);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({x:-357,alpha:1},26).wait(19).to({alpha:0.1406},6).to({x:-196,alpha:0},9).to({_off:true},1).wait(8));

	// GlowRight
	this.instance_4 = new lib.Glow_1();
	this.instance_4.setTransform(220,0);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({x:357,alpha:1},26).wait(19).to({alpha:0.1406},6).to({x:196,alpha:0},9).to({_off:true},1).wait(8));

	// PaleGlow
	this.instance_5 = new lib.PaleGlow_1();
	this.instance_5.setTransform(0,0,0.1736,0.5728);
	this.instance_5.alpha = 0.1719;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({scaleX:0.2865,scaleY:0.7722,alpha:0.8008},5).to({regX:0.1,regY:0.1,scaleX:0.9203,scaleY:1,x:0.1,y:0.1,alpha:0.8984},8).to({regX:0.3,scaleX:1.0724,x:0.3},9).to({regX:0.2,scaleX:1.5342,alpha:0},16).to({_off:true},3).wait(32));

	// Shadow
	this.instance_6 = new lib.Tween33("synched",0);
	this.instance_6.setTransform(17.6,-8);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:1},11).to({startPosition:0},52).to({alpha:0},15).wait(1));

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
		_this.InfoButton.gotoAndPlay("hover");
		_this.InfoPopup.play();
		});
		
		var _this = this;
		_this.InfoPopup.on('click', function(){
		_this.InfoPopup.gotoAndPlay('Close');
		});
		
		var _this = this;
		_this.PopupButton.on('click', function(){
		_this.PopupButton.gotoAndPlay("hover");
		_this.Popup.play();
		});
		
		var _this = this;
		_this.PlayButton.on('click', function(){
		_this.PlayButton.gotoAndPlay("hover");
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
	this.RightRollerLeft.setTransform(749.05,79.95,0.1761,0.1761,0,0,0,-0.3,-0.3);

	this.RightRollerRight = new lib.Roll();
	this.RightRollerRight.name = "RightRollerRight";
	this.RightRollerRight.setTransform(789.35,74.1,0.1887,0.1887,0,0,0,-0.2,-0.2);

	this.LeftRollerRight = new lib.Roll();
	this.LeftRollerRight.name = "LeftRollerRight";
	this.LeftRollerRight.setTransform(216.8,72.85,0.1762,0.1762,0,0,0,0.3,0.3);

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
	this.instance_2 = new lib.FrameDecor();
	this.instance_2.setTransform(5,5);

	this.instance_3 = new lib.Frame();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(79));

	// Effect
	this.Effect = new lib.Effect();
	this.Effect.name = "Effect";
	this.Effect.setTransform(1000,-854.6,1,1,0,0,0,1000,-854.6);

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
	this.instance_4 = new lib.Cloud1();
	this.instance_4.setTransform(1,516);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(79));

	// RoamingShip
	this.instance_5 = new lib.ShipDrifter_1("synched",0);
	this.instance_5.setTransform(-147.35,542);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:1012.7},78).wait(1));

	// Cloud2
	this.instance_6 = new lib.Cloud2();
	this.instance_6.setTransform(268,486);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(79));

	// WoblingShip
	this.instance_7 = new lib.ShipWobler_1();
	this.instance_7.setTransform(337.8,534.65,1,1,0,0,0,106,81);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(79));

	// Cloud3
	this.instance_8 = new lib.Cloud3();
	this.instance_8.setTransform(224,452);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(79));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.3,-1280,1647.3,1928.3);


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

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("EhPrAzkMAAAhnHMCfXAAAMAAABnHg");
	this.shape_1.setTransform(500,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(79));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(352.7,-960,1147.3,1608);
// library properties:
lib.properties = {
	id: '303C2E8208D3414CBA2B52E197D5F01E',
	width: 1000,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
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