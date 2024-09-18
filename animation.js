(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("game-client", [], factory);
	else if(typeof exports === 'object')
		exports["game-client"] = factory();
	else
		root["game-client"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!../resources/assets/styles/main.css":
/*!**********************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../resources/assets/styles/main.css ***!
  \**********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../fonts/RobotoB.ttf */ "../resources/assets/fonts/RobotoB.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: \"ROBOTO_BOLD\";\r\n    src: local(\"RobotoB\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"ttf\");\r\n}\r\n\r\nbody {\r\n    background-color: #171717;\r\n    font-size: 24px;\r\n    font-family: \"ROBOTO_BOLD\", serif;\r\n}\r\n", "",{"version":3,"sources":["webpack://./../resources/assets/styles/main.css"],"names":[],"mappings":"AAAA;IACI,0BAA0B;IAC1B,4EAAkE;AACtE;;AAEA;IACI,yBAAyB;IACzB,eAAe;IACf,iCAAiC;AACrC","sourcesContent":["@font-face {\r\n    font-family: \"ROBOTO_BOLD\";\r\n    src: local(\"RobotoB\"), url(\"./../fonts/RobotoB.ttf\") format(\"ttf\");\r\n}\r\n\r\nbody {\r\n    background-color: #171717;\r\n    font-size: 24px;\r\n    font-family: \"ROBOTO_BOLD\", serif;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../resources/assets/styles/main.css":
/*!*******************************************!*\
  !*** ../resources/assets/styles/main.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./main.css */ "../node_modules/css-loader/dist/cjs.js!../resources/assets/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./DevMain.ts":
/*!********************!*\
  !*** ./DevMain.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevMain": () => (/* binding */ DevMain)
/* harmony export */ });
/* harmony import */ var app_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/Main */ "./Main.ts");
/* harmony import */ var app_dev_DevController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/dev/DevController */ "./dev/DevController.ts");


class DevMain extends app_Main__WEBPACK_IMPORTED_MODULE_0__.Main {
    devInit() {
        new app_dev_DevController__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
}
const main = new DevMain();
main.init();
main.devInit();


/***/ }),

/***/ "./Main.ts":
/*!*****************!*\
  !*** ./Main.ts ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var res_configs_localization_en_json__WEBPACK_IMPORTED_MODULE_19___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Main": () => (/* binding */ Main),
/* harmony export */   "gameSize": () => (/* binding */ gameSize)
/* harmony export */ });
/* harmony import */ var _scenes_SceneManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenes/SceneManager */ "./scenes/SceneManager.ts");
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var _pixi_ticker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pixi/ticker */ "../node_modules/@pixi/ticker/lib/index.mjs");
/* harmony import */ var _pixi_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pixi/core */ "../node_modules/@pixi/core/lib/index.mjs");
/* harmony import */ var _pixi_graphics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pixi/graphics */ "../node_modules/@pixi/graphics/lib/index.mjs");
/* harmony import */ var app_loader_SpineLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/loader/SpineLoader */ "./loader/SpineLoader.ts");
/* harmony import */ var app_dev_DevPixiInit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/dev/DevPixiInit */ "./dev/DevPixiInit.ts");
/* harmony import */ var res_styles_main_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! res/styles/main.css */ "../resources/assets/styles/main.css");
/* harmony import */ var app_layoutManager_LayoutManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/layoutManager/LayoutManager */ "./layoutManager/LayoutManager.ts");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_layoutManager_PixiLayoutPlugin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/layoutManager/PixiLayoutPlugin */ "./layoutManager/PixiLayoutPlugin.ts");
/* harmony import */ var app_stateMachine_StateMachine__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/stateMachine/StateMachine */ "./stateMachine/StateMachine.ts");
/* harmony import */ var app_game_states_LoaderState__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/game/states/LoaderState */ "./game/states/LoaderState.ts");
/* harmony import */ var app_game_states_IntroState__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/game/states/IntroState */ "./game/states/IntroState.ts");
/* harmony import */ var app_typing_mutability_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/typing/mutability/types */ "./typing/mutability/types.ts");
/* harmony import */ var app_game_states_NextState__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/game/states/NextState */ "./game/states/NextState.ts");
/* harmony import */ var app_game_SoundController__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/game/SoundController */ "./game/SoundController.ts");
/* harmony import */ var app_game_states_PreLoaderState__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/game/states/PreLoaderState */ "./game/states/PreLoaderState.ts");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! gsap */ "../node_modules/gsap/index.js");
/* harmony import */ var gsap_CustomEase__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! gsap/CustomEase */ "../node_modules/gsap/CustomEase.js");
/* harmony import */ var app_localization_Localization__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/localization/Localization */ "./localization/Localization.ts");
/* harmony import */ var res_configs_localization_en_json__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! res/configs/localization/en.json */ "../resources/assets/configs/localization/en.json");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/lib/index.mjs");























document.body.style.margin = "0";
document.body.style.overflow = "hidden";
const globalScale = 1;
const gameSize = {
    width: 1920 * globalScale,
    height: 1080 * globalScale,
    scale: globalScale,
    centerPosition: { x: 1920 * globalScale * .5, y: 1080 * globalScale * .5 },
    isPortrait: false,
};
class Main {
    constructor() {
        this.dt = -1;
        this.updateLayoutTimeoutId = 0;
        this.app = new pixi_js__WEBPACK_IMPORTED_MODULE_20__.Application({
            width: gameSize.width,
            height: gameSize.height,
            backgroundColor: 0x000000,
            antialias: true,
            eventMode: "auto",
            eventFeatures: {
                globalMove: true,
                move: true,
                click: true,
            },
        });
        this.stateMachine = new app_stateMachine_StateMachine__WEBPACK_IMPORTED_MODULE_11__["default"](true);
        this.mainSceneManager = new _scenes_SceneManager__WEBPACK_IMPORTED_MODULE_0__["default"](this.app, false);
    }
    init() {
        console.log("new Main");
        Main.MAIN = this;
        gsap__WEBPACK_IMPORTED_MODULE_21__["default"].registerPlugin(gsap_CustomEase__WEBPACK_IMPORTED_MODULE_22__["default"]);
        this.app.stage.name = "Root";
        this.app.stage.hitArea = this.app.screen;
        if (true) {
            (0,app_dev_DevPixiInit__WEBPACK_IMPORTED_MODULE_6__.devPixiInit)(this.app);
        }
        Main.APP = this.app;
        this.initSpineLoader();
        const layoutManager = new app_layoutManager_LayoutManager__WEBPACK_IMPORTED_MODULE_8__["default"](() => {
            window.dispatchEvent(new Event("resize"));
        });
        const localization = new app_localization_Localization__WEBPACK_IMPORTED_MODULE_18__["default"]("en");
        localization.addTranslation("en", /*#__PURE__*/ (res_configs_localization_en_json__WEBPACK_IMPORTED_MODULE_19___namespace_cache || (res_configs_localization_en_json__WEBPACK_IMPORTED_MODULE_19___namespace_cache = __webpack_require__.t(res_configs_localization_en_json__WEBPACK_IMPORTED_MODULE_19__, 2))));
        app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_9__["default"].register(app_localization_Localization__WEBPACK_IMPORTED_MODULE_18__["default"], localization);
        app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_9__["default"].register(app_layoutManager_LayoutManager__WEBPACK_IMPORTED_MODULE_8__["default"], layoutManager);
        app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_9__["default"].register(_pixi_ticker__WEBPACK_IMPORTED_MODULE_2__.Ticker, this.app.ticker);
        this.setupStateMachine().then(async () => {
            await this.stateMachine.goto("preLoaderState");
            await this.stateMachine.goto("loaderState");
            await this.stateMachine.goto("introState");
            await this.stateMachine.goto("mainGameState");
        });
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].howlerReadyPromise.then(howler => {
            new app_game_SoundController__WEBPACK_IMPORTED_MODULE_16__["default"](howler).compose();
        });
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].updateLayout.add(layoutManager.update, layoutManager, 1);
        layoutManager.addPlugin(new app_layoutManager_PixiLayoutPlugin__WEBPACK_IMPORTED_MODULE_10__["default"](this.app.stage));
        window.addEventListener("resize", this.resize.bind(this), { capture: true });
        this.resize();
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].updateLayout.onListenerAdded.add(() => {
            this.updateLayout();
        });
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].pauseGame.add(opt => {
            if (opt.pause) {
                this.app.ticker.stop();
            }
            else {
                this.app.ticker.start();
            }
        });
    }
    async setupStateMachine() {
        await this.stateMachine.add("preLoaderState", new app_game_states_PreLoaderState__WEBPACK_IMPORTED_MODULE_17__["default"]());
        await this.stateMachine.add("loaderState", new app_game_states_LoaderState__WEBPACK_IMPORTED_MODULE_12__["default"]());
        await this.stateMachine.add("introState", new app_game_states_IntroState__WEBPACK_IMPORTED_MODULE_13__["default"]());
        await this.stateMachine.add("nextState", new app_game_states_NextState__WEBPACK_IMPORTED_MODULE_15__["default"]());
    }
    resize() {
        const innerWidth = window.innerWidth;
        const innerHeight = window.innerHeight;
        const width = 1920;
        const height = 1080;
        const scale = Math.min(innerWidth / width, innerHeight / height);
        const newWidth = Math.max(innerWidth / scale, width);
        const newHeight = Math.max(innerHeight / scale, height);
        this.app.renderer.resize(newWidth, newHeight);
         true && console.log("resize: ", {
            width,
            innerWidth,
            newWidth,
            height,
            innerHeight,
            newHeight,
            scale,
        });
        const canvas = this.app.view;
        canvas.style.width = newWidth * scale + "px";
        canvas.style.height = newHeight * scale + "px";
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.marginTop = `${(innerHeight - newHeight * scale) / 2}px`;
        canvas.style.marginLeft = `${(innerWidth - newWidth * scale) / 2}px`;
        gameSize.scale = this.app.renderer.width / 1920;
        gameSize.width = this.app.renderer.width;
        gameSize.height = this.app.renderer.height;
        gameSize.centerPosition = {
            x: gameSize.width * .5,
            y: gameSize.height * .5,
        };
        gameSize.isPortrait = this.getIsPortrait();
        this.updateLayout();
    }
    getIsPortrait() {
        const aspect = gameSize.width / gameSize.height;
        const portraitAspect = 1920 / 2561;
        const landscapeAspect = 1920 / 1440;
        const middleAspect = portraitAspect + (landscapeAspect - portraitAspect) / 2;
        return aspect < middleAspect;
    }
    updateLayout() {
        if (this.dt == -1) {
            this.dt = Date.now();
        }
        else {
            clearTimeout(this.updateLayoutTimeoutId);
        }
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].pauseGame.emit({ pause: true });
        this.updateLayoutTimeoutId = setTimeout(async () => {
            await app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].updateLayout.emit(gameSize).all();
            app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].pauseGame.emit({ pause: false });
            this.dt = -1;
        }, 10);
    }
    getTexture(containerToRender) {
        const bounds = containerToRender.getBounds();
        const baseRenderTexture = new _pixi_core__WEBPACK_IMPORTED_MODULE_3__.BaseRenderTexture({ width: bounds.width, height: bounds.height });
        const renderTexture = new _pixi_core__WEBPACK_IMPORTED_MODULE_3__.RenderTexture(baseRenderTexture);
        this.app.renderer.render(containerToRender, { renderTexture });
        return renderTexture;
    }
    initSpineLoader() {
        const size = 500;
        const graphics = new _pixi_graphics__WEBPACK_IMPORTED_MODULE_4__.Graphics()
            .beginFill(0xffffff, 1)
            .drawRect(0, 0, size, size);
        const step = size / 10;
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                graphics
                    .beginFill(0xff0000, 1)
                    .drawRect((i - j % 2) * step, (j - i % 2) * step, step, step);
            }
        }
        graphics.drawRect(9 * step, 9 * step, step, step);
        if (false) {}
        const texture = this.getTexture(graphics);
        app_loader_SpineLoader__WEBPACK_IMPORTED_MODULE_5__["default"].init(texture);
        this.app.stage.name = "Stage";
        /*
        //todo: uncomment to look on texture
        let sprite = new Sprite(texture);
        sprite.anchor.set(0.5);
        gameModel.updateLayout.add(value => {
            sprite.parent.addChild(sprite);
            sprite.position.set(value.width * 0.5, value.height * 0.5);
        });
        this.app.stage.addChild(sprite);*/
    }
    devInit() {
        if (true) {
            Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("dev_DevController_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! app/dev/DevController */ "./dev/DevController.ts")).then(value => {
                const DevController = value.default;
                new DevController();
            });
        }
    }
}
(0,app_typing_mutability_types__WEBPACK_IMPORTED_MODULE_14__.initTypes)();


/***/ }),

/***/ "./common/factory/Factory.ts":
/*!***********************************!*\
  !*** ./common/factory/Factory.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Factory": () => (/* binding */ Factory)
/* harmony export */ });
class Factory {
    constructor() {
        this.builders = new Map();
    }
    build(payload) {
        const builder = this.builders.get(payload);
        if (!builder) {
            throw new Error(`Not builders for: ${payload}`);
        }
        return builder.build();
    }
    add(type, builder) {
        this.builders.set(type, builder);
        return this;
    }
}


/***/ }),

/***/ "./controls/AutoplayControl.ts":
/*!*************************************!*\
  !*** ./controls/AutoplayControl.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AutoplayControl)
/* harmony export */ });
/* harmony import */ var _MainControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainControl */ "./controls/MainControl.ts");
/* harmony import */ var app_controls_SpriteControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/controls/SpriteControl */ "./controls/SpriteControl.ts");
/* harmony import */ var app_controls_button_AutoplayBtnControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/controls/button/AutoplayBtnControl */ "./controls/button/AutoplayBtnControl.ts");
/* harmony import */ var app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/helpers/signals/signal/Signal */ "./helpers/signals/signal/Signal.ts");
/* harmony import */ var app_controls_extensions_VisibilityExtension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/controls/extensions/VisibilityExtension */ "./controls/extensions/VisibilityExtension.ts");
/* harmony import */ var app_model_TextStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/model/TextStyles */ "./model/TextStyles.ts");
/* harmony import */ var _pixi_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pixi/text */ "../node_modules/@pixi/text/lib/index.mjs");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_localization_Localization__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/localization/Localization */ "./localization/Localization.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









class AutoplayControl extends _MainControl__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(autoPlays) {
        super();
        this.label = new _pixi_text__WEBPACK_IMPORTED_MODULE_6__.Text("", app_model_TextStyles__WEBPACK_IMPORTED_MODULE_5__["default"].POPUP_LABEL_STYLE);
        this.sprite = new app_controls_SpriteControl__WEBPACK_IMPORTED_MODULE_1__.SpriteControl("auto_spin_bg.png", { x: 0.5, y: 0.6 });
        this.changeAutoplay = new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.buttons = [];
        this.autoPlays = autoPlays;
    }
    init() {
        super.init();
        this.add(this.sprite);
        this.label.text = this.localization.text("autoplay_ctrl_title");
        this.label.anchor.set(0.5, 2.3);
        this.container.addChild(this.label);
        this.createButtons();
        this.addExtension(new app_controls_extensions_VisibilityExtension__WEBPACK_IMPORTED_MODULE_4__.FadeInOutVisibilityExtension(0.25, 1));
        super.hide();
        this.container.alpha = 0;
    }
    dispose() {
        this.buttons.forEach(value => value.onClick.unload(this));
        this.container.removeChildren();
        super.dispose();
    }
    createButtons() {
        this.autoPlays.forEach((item, index) => {
            const button = new app_controls_button_AutoplayBtnControl__WEBPACK_IMPORTED_MODULE_2__["default"](item);
            const offset = 370;
            button.container.position.x = ((this.autoPlays.length - 1) * offset) / 2 - index * offset;
            button.onClick.add(() => {
                this.changeAutoplay.emit(index);
            }, this);
            this.add(button);
            this.buttons.push(button);
        });
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_7__.inject)(app_localization_Localization__WEBPACK_IMPORTED_MODULE_8__["default"])
], AutoplayControl.prototype, "localization", void 0);


/***/ }),

/***/ "./controls/BackgroundControl.ts":
/*!***************************************!*\
  !*** ./controls/BackgroundControl.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackgroundShadowControl": () => (/* binding */ BackgroundShadowControl),
/* harmony export */   "default": () => (/* binding */ BackgroundControl)
/* harmony export */ });
/* harmony import */ var _MainControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainControl */ "./controls/MainControl.ts");
/* harmony import */ var app_view_IntroShadow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/view/IntroShadow */ "./view/IntroShadow.ts");
/* harmony import */ var app_controls_SpineControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/controls/SpineControl */ "./controls/SpineControl.ts");



class BackgroundControl extends app_controls_SpineControl__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor() {
        super("background");
        this.setBounds(1922, 1080);
    }
    init() {
        super.init();
        this.setSkin("main");
        this.play("idle", { loop: true });
    }
    dispose() {
        super.dispose();
    }
    async setBackground(type) {
        this.setSkin(type);
    }
}
class BackgroundShadowControl extends _MainControl__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.shadow = new app_view_IntroShadow__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    init() {
        super.init();
        this.container.addChild(this.shadow);
    }
    resize(gameSize) {
        this.shadow.resize(gameSize);
    }
}


/***/ }),

/***/ "./controls/BetControl.ts":
/*!********************************!*\
  !*** ./controls/BetControl.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BetControl)
/* harmony export */ });
/* harmony import */ var _MainControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainControl */ "./controls/MainControl.ts");
/* harmony import */ var app_controls_SpriteControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/controls/SpriteControl */ "./controls/SpriteControl.ts");
/* harmony import */ var app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/helpers/signals/signal/Signal */ "./helpers/signals/signal/Signal.ts");
/* harmony import */ var app_controls_extensions_VisibilityExtension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/controls/extensions/VisibilityExtension */ "./controls/extensions/VisibilityExtension.ts");
/* harmony import */ var app_controls_button_BetBtnControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/controls/button/BetBtnControl */ "./controls/button/BetBtnControl.ts");
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var _pixi_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pixi/text */ "../node_modules/@pixi/text/lib/index.mjs");
/* harmony import */ var app_model_TextStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/model/TextStyles */ "./model/TextStyles.ts");
/* harmony import */ var app_localization_Localization__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/localization/Localization */ "./localization/Localization.ts");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










class BetControl extends _MainControl__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(bets) {
        super();
        this.label = new _pixi_text__WEBPACK_IMPORTED_MODULE_6__.Text("", app_model_TextStyles__WEBPACK_IMPORTED_MODULE_7__["default"].POPUP_LABEL_STYLE);
        this.betChanged = new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.sprite = new app_controls_SpriteControl__WEBPACK_IMPORTED_MODULE_1__.SpriteControl("bet_bg.png", { x: 0.5, y: 0.55 });
        this.buttons = [];
        this.bets = bets;
    }
    init() {
        super.init();
        this.add(this.sprite);
        this.label.text = this.localization.text("bet_ctrl_title");
        this.label.anchor.set(0.5, 4);
        this.container.addChild(this.label);
        this.createButtons();
        this.addExtension(new app_controls_extensions_VisibilityExtension__WEBPACK_IMPORTED_MODULE_3__.FadeInOutVisibilityExtension(0.25, 1));
        super.hide();
        this.container.alpha = 0;
    }
    dispose() {
        this.buttons.forEach(value => value.onClick.unload(this));
        this.container.removeChildren();
        super.dispose();
    }
    createButtons() {
        this.bets.forEach((item, index) => {
            const button = new app_controls_button_BetBtnControl__WEBPACK_IMPORTED_MODULE_4__.BetBtnControl(item.value);
            button.container.position.set((((index) % 5 - 2) * 350), ((Math.floor(index / 5) - 0.5) * 350));
            button.onClick.add(() => {
                this.betChanged.emit(item.id);
                app_model_GameModel__WEBPACK_IMPORTED_MODULE_5__["default"].getHowler().play("custom-button");
            }, this);
            this.add(button);
            this.buttons.push(button);
        });
    }
    enable() {
        this.buttons.forEach(btn => btn.enable());
    }
    disable() {
        this.buttons.forEach(btn => btn.disable());
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_9__.inject)(app_localization_Localization__WEBPACK_IMPORTED_MODULE_8__["default"])
], BetControl.prototype, "localization", void 0);


/***/ }),

/***/ "./controls/BetSelectorControl.ts":
/*!****************************************!*\
  !*** ./controls/BetSelectorControl.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BetSelectorControl)
/* harmony export */ });
/* harmony import */ var _pixi_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pixi/text */ "../node_modules/@pixi/text/lib/index.mjs");
/* harmony import */ var app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/helpers/signals/signal/Signal */ "./helpers/signals/signal/Signal.ts");
/* harmony import */ var app_model_TextStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/model/TextStyles */ "./model/TextStyles.ts");
/* harmony import */ var _button_SpriteSheetButtonControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button/SpriteSheetButtonControl */ "./controls/button/SpriteSheetButtonControl.ts");




class BetSelectorControl extends _button_SpriteSheetButtonControl__WEBPACK_IMPORTED_MODULE_3__["default"] {
    constructor(bets) {
        super("bet_chooser.png");
        this.bets = bets;
        this.betChanged = new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.index = 0;
        this.currentBetLabel = new _pixi_text__WEBPACK_IMPORTED_MODULE_0__.Text(`${bets[this.index].value}`, app_model_TextStyles__WEBPACK_IMPORTED_MODULE_2__["default"].BET_SELECTOR_BUTTON_CONTROL);
    }
    init() {
        super.init();
        this.currentBetLabel.anchor.set(0.5, 0.3);
        this.container.addChild(this.currentBetLabel);
    }
    dispose() {
        this.container.removeChildren();
        super.dispose();
    }
    increment() {
        if (this.index != this.bets.length - 1) {
            this.index += 1;
        }
        else {
            this.index = 0;
        }
        const betId = this.bets[this.index].id;
        this.betChanged.emit(betId);
        this.updateText();
    }
    decrement() {
        if (this.index != 0) {
            this.index -= 1;
        }
        else {
            this.index = this.bets.length - 1;
        }
        const betId = this.bets[this.index].id;
        this.betChanged.emit(betId);
        this.updateText();
    }
    updateText() {
        const bet = this.bets[this.index];
        this.currentBetLabel.text = `${bet.value}`;
    }
    updateBetIndex(betId) {
        this.index = this.bets.findIndex(value => value.id == betId);
        this.updateText();
    }
}


/***/ }),

/***/ "./controls/CoinControl.ts":
/*!*********************************!*\
  !*** ./controls/CoinControl.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CoinControl)
/* harmony export */ });
/* harmony import */ var app_controls_SpineControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/controls/SpineControl */ "./controls/SpineControl.ts");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_controls_motion_view_MotionLayerControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/controls/motion/view/MotionLayerControl */ "./controls/motion/view/MotionLayerControl.ts");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "../node_modules/gsap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




class CoinControl extends app_controls_SpineControl__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super("bonus");
    }
    async animate(from, to, resolve) {
        this.setPosition(from);
        this.setScale({ x: 0, y: 0 });
        gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(this.container.scale, {
            x: .2,
            y: .2,
            duration: .3 + Math.random() * .5,
            ease: "elastic.out(1.75,0.4)",
        });
        const motionPromise = this.motionLayer.move({
            from: from,
            to: to,
            duration: .75,
            what: this.container,
            fitToSize: false,
            ease: "power1.inOut",
        }).then(() => {
            this.setScale({ x: 0, y: 0 });
            this.removeFromParent();
        });
        this.playInTime("jump", 0.75);
        await motionPromise;
        resolve && resolve();
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_1__.inject)(app_controls_motion_view_MotionLayerControl__WEBPACK_IMPORTED_MODULE_2__["default"])
], CoinControl.prototype, "motionLayer", void 0);


/***/ }),

/***/ "./controls/GameControl.ts":
/*!*********************************!*\
  !*** ./controls/GameControl.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameControl)
/* harmony export */ });
/* harmony import */ var app_controls_MainControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/controls/MainControl */ "./controls/MainControl.ts");
/* harmony import */ var app_controls_reels_ReelsControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/controls/reels/ReelsControl */ "./controls/reels/ReelsControl.ts");
/* harmony import */ var app_controls_reels_LinesControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/controls/reels/LinesControl */ "./controls/reels/LinesControl.ts");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_controls_motion_view_MotionLayerControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/controls/motion/view/MotionLayerControl */ "./controls/motion/view/MotionLayerControl.ts");
/* harmony import */ var app_controls_reels_ReelsBackgroundExtension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/controls/reels/ReelsBackgroundExtension */ "./controls/reels/ReelsBackgroundExtension.ts");
/* harmony import */ var app_controls_SpineControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/controls/SpineControl */ "./controls/SpineControl.ts");
/* harmony import */ var _pixi_display__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @pixi/display */ "../node_modules/@pixi/display/lib/index.mjs");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








class GameControl extends app_controls_SpineControl__WEBPACK_IMPORTED_MODULE_6__["default"] {
    constructor(mainGameInfo) {
        super("reels");
        this.mainGameInfo = mainGameInfo;
        this.linesControl = new app_controls_reels_LinesControl__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.topLayer = new class extends app_controls_MainControl__WEBPACK_IMPORTED_MODULE_0__["default"] {
        };
        this.boundsWidth = 1410;
        this.boundsHeight = 866;
        this.addExtension(new app_controls_reels_ReelsBackgroundExtension__WEBPACK_IMPORTED_MODULE_5__.ReelsBackgroundExtension());
        this.reelsControl = new app_controls_reels_ReelsControl__WEBPACK_IMPORTED_MODULE_1__["default"](this.mainGameInfo);
        this.setBounds(this.boundsWidth, this.boundsHeight);
    }
    init() {
        super.init();
        this.replace("reels_content", this.reelsControl.container);
        this.reelsControl.reels.forEach((value, index) => {
            const container = new _pixi_display__WEBPACK_IMPORTED_MODULE_7__.Container();
            this.replace(`reels_content${index + 1}`, container);
            container.addChild(value.container);
            value.container.x = 0;
        });
        this.play("idle", { loop: true });
        this.add(this.linesControl);
        this.add(this.topLayer);
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__.inject)(app_controls_motion_view_MotionLayerControl__WEBPACK_IMPORTED_MODULE_4__["default"])
], GameControl.prototype, "motionLayer", void 0);


/***/ }),

/***/ "./controls/GameTitle.ts":
/*!*******************************!*\
  !*** ./controls/GameTitle.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameTitle)
/* harmony export */ });
/* harmony import */ var _model_GameModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var _model_TextStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/TextStyles */ "./model/TextStyles.ts");
/* harmony import */ var _MainControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainControl */ "./controls/MainControl.ts");
/* harmony import */ var _pixi_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pixi/text */ "../node_modules/@pixi/text/lib/index.mjs");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "../node_modules/gsap/index.js");





class GameTitle extends _MainControl__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(title, style) {
        super();
        this.title = title;
        style = style !== null && style !== void 0 ? style : _model_TextStyles__WEBPACK_IMPORTED_MODULE_1__["default"].GAME_LABEL;
        this.gameTitle = new _pixi_text__WEBPACK_IMPORTED_MODULE_3__.Text(title, style);
        this.container.addChild(this.gameTitle);
        this.gameTitle.anchor.set(0.5, 0.5);
        window.addEventListener("beforeunload", () => {
            _model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].unload(this);
        });
    }
    animate() {
        gsap__WEBPACK_IMPORTED_MODULE_4__["default"].fromTo(this.gameTitle, { alpha: 0.4 }, { alpha: 1, ease: "sine.inOut", repeat: -1, yoyo: true, duration: 1 });
    }
    stopAnimate() {
        gsap__WEBPACK_IMPORTED_MODULE_4__["default"].killTweensOf(this.gameTitle);
    }
}


/***/ }),

/***/ "./controls/LoaderControl.ts":
/*!***********************************!*\
  !*** ./controls/LoaderControl.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoaderControl)
/* harmony export */ });
/* harmony import */ var _MainControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainControl */ "./controls/MainControl.ts");
/* harmony import */ var _helpers_GuiPrimitive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/GuiPrimitive */ "./helpers/GuiPrimitive.ts");
/* harmony import */ var app_helpers_promise_gsap_PromisableGsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/helpers/promise/gsap/PromisableGsap */ "./helpers/promise/gsap/PromisableGsap.ts");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "../node_modules/gsap/index.js");




class LoaderControl extends _MainControl__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.layers = [];
        this.colors = {
            yellow: 0xffc600,
            black: 0x000000,
            white: 0xffffff,
        };
        this.loaderWidth = 1000;
        this.loaderHeight = 40;
        this.loaderRadius = 50;
        this.loaderWidthPadding = 5;
        this.progress = 0;
        const firstLayer = (0,_helpers_GuiPrimitive__WEBPACK_IMPORTED_MODULE_1__.getRect)(this.loaderWidth, this.loaderHeight, this.colors.white);
        const secondLayer = (0,_helpers_GuiPrimitive__WEBPACK_IMPORTED_MODULE_1__.getRect)(this.loaderWidth - 8, this.loaderHeight - 8, this.colors.black);
        const thirdLayer = (0,_helpers_GuiPrimitive__WEBPACK_IMPORTED_MODULE_1__.getRect)(this.loaderWidth - 15, this.loaderHeight - 15, this.colors.yellow);
        const forthLayer = (0,_helpers_GuiPrimitive__WEBPACK_IMPORTED_MODULE_1__.getRect)(this.loaderWidth - 22, this.loaderHeight - 22, this.colors.black);
        this.fill = (0,_helpers_GuiPrimitive__WEBPACK_IMPORTED_MODULE_1__.getRect)(this.loaderWidth, this.loaderHeight, this.colors.yellow);
        this.fill.updateWidth(this.loaderWidth - 15).update();
        this.fill.updateHeight(this.loaderHeight - 22).update();
        this.layers.push(firstLayer, secondLayer, thirdLayer, forthLayer, this.fill);
        this.layers.forEach((layer) => {
            layer.updateRadius(this.loaderRadius).update();
            this.setPivotTo(layer, _MainControl__WEBPACK_IMPORTED_MODULE_0__.PivotType.C);
            this.container.addChild(layer);
        });
    }
    update(progress) {
        if (progress < this.progress) {
            return;
        }
        this.updateView(Math.min(1, this.progress));
        this.animateFakeLoad(progress);
    }
    animateFakeLoad(progress) {
        gsap__WEBPACK_IMPORTED_MODULE_3__["default"].killTweensOf(this);
        this.progress = progress;
        app_helpers_promise_gsap_PromisableGsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(this, {
            duration: 10,
            progress: progress + (1 - progress) * 0.05,
            onUpdate: () => {
                this.updateView(Math.min(1, this.progress));
            },
        }).then();
    }
    updateView(progress) {
        const width = (this.loaderWidth - 10 - this.loaderWidthPadding) * progress;
        this.fill.updateWidth(width).update();
    }
}


/***/ }),

/***/ "./controls/MainControl.ts":
/*!*********************************!*\
  !*** ./controls/MainControl.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlExtensionContainer": () => (/* binding */ ControlExtensionContainer),
/* harmony export */   "PivotType": () => (/* binding */ PivotType),
/* harmony export */   "default": () => (/* binding */ MainControl)
/* harmony export */ });
/* harmony import */ var app_controls_extensions_VisibilityExtension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/controls/extensions/VisibilityExtension */ "./controls/extensions/VisibilityExtension.ts");
/* harmony import */ var app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/helpers/signals/signal/Signal */ "./helpers/signals/signal/Signal.ts");
/* harmony import */ var _pixi_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pixi/display */ "../node_modules/@pixi/display/lib/index.mjs");



class MainControl {
    constructor(container) {
        this.uid = MainControl._UID++;
        this.extensions = [];
        this.onHide = new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.onShow = new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.container = container !== null && container !== void 0 ? container : new _pixi_display__WEBPACK_IMPORTED_MODULE_2__.Container();
        this.container.on("added", this.init, this);
        this.container.on("removed", this.dispose, this);
        this.addExtension(new app_controls_extensions_VisibilityExtension__WEBPACK_IMPORTED_MODULE_0__["default"]());
    }
    add(control) {
        this.container.addChild(control.container);
    }
    addExtension(extension, options) {
        options = options !== null && options !== void 0 ? options : {
            removeOnDispose: true,
        };
        const extensionContainer = new ControlExtensionContainer(extension, options);
        this.extensions.push(extensionContainer);
        extensionContainer.init(this);
    }
    removeExtension(extension) {
        const isContainer = extension instanceof ControlExtensionContainer;
        const extensionToRemove = isContainer ? extension : this.extensions.find(value => value.extension == extension);
        if (extensionToRemove) {
            this.extensions.remove(extensionToRemove);
        }
    }
    removeFromParent() {
        var _a;
        (_a = this.container.parent) === null || _a === void 0 ? void 0 : _a.removeChild(this.container);
    }
    moveBottom() {
        this.container.zIndex = 0;
        this.updateZOrder();
        const children = this.container.parent.children;
        children.remove(this.container);
        children.unshift(this.container);
        return this;
    }
    moveTop() {
        const children = this.container.parent.children;
        children.remove(this.container);
        children.push(this.container);
        return this;
    }
    updateZOrder() {
        this.container.parent.children.sort((a, b) => a.zIndex - b.zIndex);
    }
    remove(control) {
        this.container.removeChild(control.container);
    }
    setPosition(position) {
        this.container.position.set(position.x, position.y);
    }
    setScale(scale) {
        var _a, _b;
        const x = (_a = scale.x) !== null && _a !== void 0 ? _a : 0;
        const y = (_b = scale.y) !== null && _b !== void 0 ? _b : scale.x;
        this.container.scale.set(x, y);
    }
    setPivotTo(displayObject = this.container, type = PivotType.C) {
        const scaleX = displayObject.scale.x;
        displayObject.scale.set(1);
        const width = displayObject.width;
        const height = displayObject.height;
        const centerX = width * .5;
        const centerY = height * .5;
        switch (type) {
            case PivotType.C:
                displayObject.pivot.set(centerX, centerY);
                break;
            case PivotType.L:
                displayObject.pivot.set(0, centerY);
                break;
            case PivotType.TL:
                displayObject.pivot.set(0, 0);
                break;
            case PivotType.T:
                displayObject.pivot.set(centerX, 0);
                break;
            case PivotType.TR:
                displayObject.pivot.set(width, 0);
                break;
            case PivotType.R:
                displayObject.pivot.set(width, centerY);
                break;
            case PivotType.BR:
                displayObject.pivot.set(width, height);
                break;
            case PivotType.B:
                displayObject.pivot.set(centerX, height);
                break;
            case PivotType.BL:
                displayObject.pivot.set(0, height);
                break;
        }
        displayObject.scale.set(scaleX);
    }
    init() {
        this.extensions.forEach(value => {
            value.init(this);
        });
    }
    dispose() {
        this.extensions.slice().forEach(value => {
            value.dispose(this);
            if (value.options.removeOnDispose) {
                this.removeExtension(value);
            }
        });
    }
    async hide() {
        await this.onHide.emit().all();
        return this;
    }
    async show() {
        await this.onShow.emit().all();
        return this;
    }
    name(name) {
        this.container.name = name;
        return this;
    }
    setBounds(boundsWidth, boundsHeight) {
        const container = this.container;
        container.boundsWidth = boundsWidth;
        container.boundsHeight = boundsHeight;
    }
}
MainControl._UID = 1;
var PivotType;
(function (PivotType) {
    PivotType[PivotType["C"] = 0] = "C";
    PivotType[PivotType["L"] = 1] = "L";
    PivotType[PivotType["TL"] = 2] = "TL";
    PivotType[PivotType["T"] = 3] = "T";
    PivotType[PivotType["TR"] = 4] = "TR";
    PivotType[PivotType["R"] = 5] = "R";
    PivotType[PivotType["BR"] = 6] = "BR";
    PivotType[PivotType["B"] = 7] = "B";
    PivotType[PivotType["BL"] = 8] = "BL";
})(PivotType || (PivotType = {}));
class ControlExtensionContainer {
    constructor(extension, options) {
        this.extension = extension;
        this.options = options;
        this.isInit = false;
    }
    init(instance) {
        if (!this.isInit) {
            this.extension.init(instance);
            this.isInit = true;
        }
    }
    dispose(instance) {
        if (this.isInit) {
            this.extension.dispose(instance);
            this.isInit = false;
        }
    }
}


/***/ }),

/***/ "./controls/MessageBarControl.ts":
/*!***************************************!*\
  !*** ./controls/MessageBarControl.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageBarControl": () => (/* binding */ MessageBarControl)
/* harmony export */ });
/* harmony import */ var app_controls_MainControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/controls/MainControl */ "./controls/MainControl.ts");
/* harmony import */ var _pixi_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pixi/text */ "../node_modules/@pixi/text/lib/index.mjs");
/* harmony import */ var _pixi_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pixi/display */ "../node_modules/@pixi/display/lib/index.mjs");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ "../node_modules/gsap/index.js");
/* harmony import */ var app_model_TextStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/model/TextStyles */ "./model/TextStyles.ts");
/* harmony import */ var app_helpers_ObjectHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/helpers/ObjectHelper */ "./helpers/ObjectHelper.ts");






class MessageBarControl extends app_controls_MainControl__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(messageArray, updateFrequency) {
        super(new _pixi_display__WEBPACK_IMPORTED_MODULE_2__.Container());
        this.fontStyle = new _pixi_text__WEBPACK_IMPORTED_MODULE_1__.TextStyle(app_model_TextStyles__WEBPACK_IMPORTED_MODULE_3__["default"].MESSAGE_BAR_TEXT_STYLE);
        this.messageArray = messageArray;
        this.updateFrequency = updateFrequency;
        this.messageText = new _pixi_text__WEBPACK_IMPORTED_MODULE_1__.Text("", this.fontStyle);
    }
    init() {
        super.init();
        this.container.addChild(this.messageText);
        this.messageText.anchor.set(0.5);
        this.update();
        this.startUpdating();
        const scale = .8;
        this.setBounds(1120 * scale, 30 * scale);
    }
    update() {
        const newMessage = (0,app_helpers_ObjectHelper__WEBPACK_IMPORTED_MODULE_4__.ensure)(this.messageArray.shift());
        this.messageArray.push(newMessage);
        this.messageText.text = `${newMessage}`;
    }
    startUpdating() {
        this.gsapUpdateInterval = gsap__WEBPACK_IMPORTED_MODULE_5__["default"].set(this.update, {
            delay: this.updateFrequency,
            onRepeat: () => this.update(),
            repeat: -1,
            repeatDelay: this.updateFrequency,
        });
    }
    stopUpdating() {
        this.gsapUpdateInterval.pause();
    }
    dispose() {
        this.gsapUpdateInterval.kill();
        this.container.removeChild(this.messageText);
        super.dispose();
    }
}


/***/ }),

/***/ "./controls/OptionsControl.ts":
/*!************************************!*\
  !*** ./controls/OptionsControl.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OptionsControl)
/* harmony export */ });
/* harmony import */ var _MainControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainControl */ "./controls/MainControl.ts");
/* harmony import */ var app_controls_SpriteControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/controls/SpriteControl */ "./controls/SpriteControl.ts");
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var app_controls_button_SpriteSheetButtonControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/controls/button/SpriteSheetButtonControl */ "./controls/button/SpriteSheetButtonControl.ts");
/* harmony import */ var app_controls_button_SoundBtnControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/controls/button/SoundBtnControl */ "./controls/button/SoundBtnControl.ts");
/* harmony import */ var app_helpers_promise_gsap_PromisableGsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/helpers/promise/gsap/PromisableGsap */ "./helpers/promise/gsap/PromisableGsap.ts");
/* harmony import */ var app_controls_button_FullScreenBtnControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/controls/button/FullScreenBtnControl */ "./controls/button/FullScreenBtnControl.ts");
/* harmony import */ var app_controls_button_ForceBtnControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/controls/button/ForceBtnControl */ "./controls/button/ForceBtnControl.ts");








class OptionsControl extends _MainControl__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.box = new app_controls_SpriteControl__WEBPACK_IMPORTED_MODULE_1__.SpriteControl("info_options.png");
        this.info = new app_controls_button_SpriteSheetButtonControl__WEBPACK_IMPORTED_MODULE_3__["default"]("options_info.png");
        this.fullScreenBtn = new app_controls_button_FullScreenBtnControl__WEBPACK_IMPORTED_MODULE_6__["default"]();
        this.sound = new app_controls_button_SoundBtnControl__WEBPACK_IMPORTED_MODULE_4__["default"](app_model_GameModel__WEBPACK_IMPORTED_MODULE_2__["default"].isSoundMuted);
        this.force = new app_controls_button_ForceBtnControl__WEBPACK_IMPORTED_MODULE_7__.ForceBtnControl(app_model_GameModel__WEBPACK_IMPORTED_MODULE_2__["default"].isForce);
        this.info.setPosition({
            x: this.box.container.width / 2,
            y: this.box.container.height - 175,
        });
        this.sound.setPosition({
            x: this.box.container.width / 2,
            y: this.box.container.height - 425,
        });
        this.fullScreenBtn.setPosition({
            x: this.box.container.width / 2,
            y: this.box.container.height - 675,
        });
        this.force.setPosition({
            x: this.box.container.width / 2,
            y: this.box.container.height - 925,
        });
    }
    init() {
        super.init();
        this.info.onClick.add(() => {
            app_model_GameModel__WEBPACK_IMPORTED_MODULE_2__["default"].game.signals.ui.options.info.show.emit();
            this.container.alpha = 0.9;
            this.hide();
        });
        this.add(this.box);
        this.add(this.sound);
        this.add(this.info);
        this.add(this.fullScreenBtn);
        this.add(this.force);
        this.container.visible = false;
        this.container.alpha = 0;
    }
    dispose() {
        this.container.removeChildren();
        super.dispose();
    }
    enable() {
        this.info.enable();
    }
    disable() {
        this.info.disable();
    }
    async show() {
        if (!this.container.visible) {
            await super.show();
            await app_helpers_promise_gsap_PromisableGsap__WEBPACK_IMPORTED_MODULE_5__["default"].to(this.container, { alpha: 1, duration: 0.25 });
        }
        return this;
    }
    async hide() {
        await app_helpers_promise_gsap_PromisableGsap__WEBPACK_IMPORTED_MODULE_5__["default"].to(this.container, { alpha: 0, duration: 0.25 });
        await super.hide();
        return this;
    }
}


/***/ }),

/***/ "./controls/SpineControl.ts":
/*!**********************************!*\
  !*** ./controls/SpineControl.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypingSpineControl": () => (/* binding */ TypingSpineControl),
/* harmony export */   "default": () => (/* binding */ SpineControl)
/* harmony export */ });
/* harmony import */ var app_controls_MainControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/controls/MainControl */ "./controls/MainControl.ts");
/* harmony import */ var app_loader_SpineLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/loader/SpineLoader */ "./loader/SpineLoader.ts");
/* harmony import */ var _pixi_ticker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pixi/ticker */ "../node_modules/@pixi/ticker/lib/index.mjs");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_helpers_spine_SpineStateListenerFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/helpers/spine/SpineStateListenerFactory */ "./helpers/spine/SpineStateListenerFactory.ts");
/* harmony import */ var app_helpers_promise_ResolvablePromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/helpers/promise/ResolvablePromise */ "./helpers/promise/ResolvablePromise.ts");
/* harmony import */ var app_helpers_spine_SpineHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/helpers/spine/SpineHelper */ "./helpers/spine/SpineHelper.ts");
/* harmony import */ var app_helpers_ObjectHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/helpers/ObjectHelper */ "./helpers/ObjectHelper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








class SpineControl extends app_controls_MainControl__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(spineKey) {
        super(app_loader_SpineLoader__WEBPACK_IMPORTED_MODULE_1__["default"].getSpine(spineKey));
        this.playPromises = new Map();
        this.lastTrackAnimation = new Map();
        this.resetSpineOnReSkin = false;
        this.spine = this.container;
        this.spine.autoUpdate = true;
    }
    getSkin() {
        return this.spine.skeleton.skin.name;
    }
    updateSkin() {
        this.setSkin(this.spine.skeleton.skin.name);
    }
    setSkin(name) {
        this.spine.skeleton.setSkinByName(name);
        if (this.resetSpineOnReSkin) {
            this.spine.skeleton.setToSetupPose();
        }
    }
    stop() {
        return {
            track: (track) => {
                this.spine.state.clearTrack(track);
            },
            name: (name) => {
                this.spine.state.tracks
                    .filter(value => value != null)
                    .filter(value => value.animation.name == name)
                    .forEach(value => {
                    this.spine.state.clearTrack(value.trackIndex);
                });
            },
        };
    }
    getCurrentAnimation(trackIndex) {
        return this.lastTrackAnimation.get(trackIndex);
    }
    playInTime(animationId, duration) {
        const timeScale = this.getAnimationData(animationId).duration / duration;
        return this.play(animationId, { timeScale: timeScale });
    }
    play(name, data) {
        var _a, _b, _c, _d, _e, _f, _g;
        data = data !== null && data !== void 0 ? data : {};
        const trackIndex = (_a = data === null || data === void 0 ? void 0 : data.trackIndex) !== null && _a !== void 0 ? _a : 0;
        const loop = (_b = data === null || data === void 0 ? void 0 : data.loop) !== null && _b !== void 0 ? _b : false;
        data.timeScale = (_c = data === null || data === void 0 ? void 0 : data.timeScale) !== null && _c !== void 0 ? _c : 1;
        data.frameAt = (_d = data === null || data === void 0 ? void 0 : data.frameAt) !== null && _d !== void 0 ? _d : -1;
        const overrideAnimation = (_e = data.overrideAnimation) !== null && _e !== void 0 ? _e : true;
        const playPromises = this.playPromises;
        const lastTrackAnimation = this.lastTrackAnimation;
        const promise = (_f = playPromises.get(trackIndex)) !== null && _f !== void 0 ? _f : app_helpers_promise_ResolvablePromise__WEBPACK_IMPORTED_MODULE_5__["default"].getResolvablePromise();
        if (!overrideAnimation && lastTrackAnimation.get(trackIndex) == name && playPromises.has(trackIndex)) {
            return (0,app_helpers_ObjectHelper__WEBPACK_IMPORTED_MODULE_7__.ensure)(playPromises.get(trackIndex));
        }
        lastTrackAnimation.set(trackIndex, name);
        promise.resolve();
        let loopsLimit = (_g = data === null || data === void 0 ? void 0 : data.loopsLimit) !== null && _g !== void 0 ? _g : -1;
        const resolvablePromise = app_helpers_promise_ResolvablePromise__WEBPACK_IMPORTED_MODULE_5__["default"].getResolvablePromise();
        playPromises.set(trackIndex, resolvablePromise);
        const trackEntry = this.spine.state.setAnimation(trackIndex, name, loop);
        if (data.frameAt >= 0 && data.frameAt <= 1) {
            const frameAt = Math.min(Math.max(0.01, data.frameAt), 0.999999);
            const time = this.getAnimationDuration(name) * frameAt;
            trackEntry.trackTime = time;
            trackEntry.timeScale = 0.000001;
            resolvablePromise.resolve();
        }
        else {
            trackEntry.timeScale = data.timeScale;
        }
        // console.log(`Animation[${this.uid}] ${name} start, loop(${data?.loop})`)
        trackEntry.listener = app_helpers_spine_SpineStateListenerFactory__WEBPACK_IMPORTED_MODULE_4__["default"].complete(() => {
            var _a;
            if (loopsLimit-- < 0) {
                (_a = this.ticker) === null || _a === void 0 ? void 0 : _a.remove(this.update, this);
                resolvablePromise.resolve();
                if (!loop) {
                    this.spine.state.clearTrack(trackIndex);
                }
                // console.log(`Animation[${this.uid}] ${name} end, loop(${data?.loop})`)
            }
        });
        trackEntry.listener.event = (entry, event) => {
            var _a;
            (_a = data === null || data === void 0 ? void 0 : data.event) === null || _a === void 0 ? void 0 : _a.emit(event);
        };
        this.ticker.remove(this.update, this);
        this.ticker.add(this.update, this);
        return resolvablePromise;
    }
    getAnimations() {
        return this.spine.spineData.animations.map(value => {
            return value.name;
        });
    }
    update(dt) {
        if (!this.spine.autoUpdate) {
            this.spine.update(((1000 / 60) / 1000) * dt);
        }
    }
    replace(name, displayObject, copySlotsData = false) {
        app_helpers_spine_SpineHelper__WEBPACK_IMPORTED_MODULE_6__["default"].replaceInSlotContainer(this, name, displayObject, copySlotsData);
    }
    getSlotContainer(name) {
        return app_helpers_spine_SpineHelper__WEBPACK_IMPORTED_MODULE_6__["default"].getSlotContainer(this, name);
    }
    replaceTo(parent, name) {
        app_helpers_spine_SpineHelper__WEBPACK_IMPORTED_MODULE_6__["default"].replaceInSlotContainer(parent, name, this.container);
    }
    addToSlot(name, displayObject) {
        app_helpers_spine_SpineHelper__WEBPACK_IMPORTED_MODULE_6__["default"].addToSlotContainer(this, name, displayObject);
    }
    getAnimationDuration(animation) {
        const animationData = this.getAnimationData(animation);
        if (!animationData) {
            console.warn("no data for animation: ", animation);
        }
        return animationData.duration;
    }
    dispose() {
        this.ticker && this.ticker.remove(this.update, this);
        super.dispose();
    }
    getAnimationData(animation) {
        return this.spine.spineData.findAnimation(animation);
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__.inject)(_pixi_ticker__WEBPACK_IMPORTED_MODULE_2__.Ticker)
], SpineControl.prototype, "ticker", void 0);
class TypingSpineControl extends SpineControl {
    setSkin(name) {
        super.setSkin(name);
    }
    getSkin() {
        return super.getSkin();
    }
    getCurrentAnimation(trackIndex) {
        return super.getCurrentAnimation(trackIndex);
    }
    play(name, data) {
        return super.play(name, data);
    }
}


/***/ }),

/***/ "./controls/SpriteControl.ts":
/*!***********************************!*\
  !*** ./controls/SpriteControl.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpriteControl": () => (/* binding */ SpriteControl)
/* harmony export */ });
/* harmony import */ var app_controls_MainControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/controls/MainControl */ "./controls/MainControl.ts");
/* harmony import */ var _pixi_sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pixi/sprite */ "../node_modules/@pixi/sprite/lib/index.mjs");
/* harmony import */ var app_pixi_StrictResourcesHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pixi/StrictResourcesHelper */ "./pixi/StrictResourcesHelper.ts");



class SpriteControl extends app_controls_MainControl__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(textureId, anchor) {
        super(new _pixi_sprite__WEBPACK_IMPORTED_MODULE_1__.Sprite(app_pixi_StrictResourcesHelper__WEBPACK_IMPORTED_MODULE_2__["default"].getSomeTexture(textureId)));
        this.textureId = textureId;
        this.sprite = this.container;
        anchor = anchor !== null && anchor !== void 0 ? anchor : { x: 0, y: 0 };
        this.sprite.anchor.copyFrom(anchor);
    }
    get texture() {
        return this.textureId;
    }
    set texture(textureId) {
        this.textureId = textureId;
        this.sprite.texture = app_pixi_StrictResourcesHelper__WEBPACK_IMPORTED_MODULE_2__["default"].getSomeTexture(textureId);
    }
}


/***/ }),

/***/ "./controls/button/AutoplayBtnControl.ts":
/*!***********************************************!*\
  !*** ./controls/button/AutoplayBtnControl.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AutoplayBtnControl)
/* harmony export */ });
/* harmony import */ var _pixi_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pixi/display */ "../node_modules/@pixi/display/lib/index.mjs");
/* harmony import */ var _pixi_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pixi/text */ "../node_modules/@pixi/text/lib/index.mjs");
/* harmony import */ var app_controls_button_ButtonControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/controls/button/ButtonControl */ "./controls/button/ButtonControl.ts");
/* harmony import */ var app_model_TextStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/model/TextStyles */ "./model/TextStyles.ts");
/* harmony import */ var app_controls_button_SpriteSheetButtonControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/controls/button/SpriteSheetButtonControl */ "./controls/button/SpriteSheetButtonControl.ts");





class AutoplayBtnControl extends app_controls_button_ButtonControl__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(value) {
        super(new _pixi_display__WEBPACK_IMPORTED_MODULE_0__.Container());
        this.autoplayButton = new app_controls_button_SpriteSheetButtonControl__WEBPACK_IMPORTED_MODULE_4__["default"]("auto_spin_nm_bg.png");
        this.labelValue = new _pixi_text__WEBPACK_IMPORTED_MODULE_1__.Text(`${value}`, app_model_TextStyles__WEBPACK_IMPORTED_MODULE_3__["default"].AUTOPLAY_BUTTON);
        this.labelValue.anchor.set(0.5, 0.5);
        this.labelValue.eventMode = "passive";
    }
    init() {
        super.init();
        this.add(this.autoplayButton);
        this.container.addChild(this.labelValue);
        this.container.filters = [];
    }
    dispose() {
        this.container.removeChildren();
        super.dispose();
    }
}


/***/ }),

/***/ "./controls/button/AutoplayButtonControl.ts":
/*!**************************************************!*\
  !*** ./controls/button/AutoplayButtonControl.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoplayButtonControl": () => (/* binding */ AutoplayButtonControl)
/* harmony export */ });
/* harmony import */ var app_controls_button_SpriteSheetButtonControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/controls/button/SpriteSheetButtonControl */ "./controls/button/SpriteSheetButtonControl.ts");
/* harmony import */ var _pixi_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pixi/text */ "../node_modules/@pixi/text/lib/index.mjs");
/* harmony import */ var app_model_TextStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/model/TextStyles */ "./model/TextStyles.ts");
/* harmony import */ var app_controls_MainControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/controls/MainControl */ "./controls/MainControl.ts");
/* harmony import */ var _pixi_display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pixi/display */ "../node_modules/@pixi/display/lib/index.mjs");





class AutoplayButtonControl extends app_controls_MainControl__WEBPACK_IMPORTED_MODULE_3__["default"] {
    constructor() {
        super(new _pixi_display__WEBPACK_IMPORTED_MODULE_4__.Container());
        this.start = new app_controls_button_SpriteSheetButtonControl__WEBPACK_IMPORTED_MODULE_0__["default"]("autoplay_btn.png");
        this.stop = new app_controls_button_SpriteSheetButtonControl__WEBPACK_IMPORTED_MODULE_0__["default"]("autoplay_btn_numbers.png");
        this.spinsNumber = new _pixi_text__WEBPACK_IMPORTED_MODULE_1__.Text("", app_model_TextStyles__WEBPACK_IMPORTED_MODULE_2__["default"].AUTOPLAY_BUTTON_CONTROL);
        this.spinsNumber.anchor.set(0.4, 0.5);
    }
    init() {
        super.init();
        this.add(this.stop);
        this.add(this.start);
        this.stop.container.visible = false;
        this.container.addChild(this.spinsNumber);
    }
    dispose() {
        this.container.removeChildren();
        super.dispose();
    }
    setSpinsNumber(value) {
        value = Math.max(0, value);
        this.spinsNumber.text = value === 0 ? "" : `${value}`;
    }
    async showPlay() {
        await [this.stop.hide(), this.start.show()].promise().all();
    }
    async showStop() {
        await [this.stop.show(), this.start.hide()].promise().all();
    }
    disable() {
        this.start.disable();
        this.stop.disable();
    }
    enable() {
        this.start.enable();
        this.stop.enable();
    }
}


/***/ }),

/***/ "./controls/button/BetBtnControl.ts":
/*!******************************************!*\
  !*** ./controls/button/BetBtnControl.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BetBtnControl": () => (/* binding */ BetBtnControl)
/* harmony export */ });
/* harmony import */ var app_controls_button_SpriteSheetButtonControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/controls/button/SpriteSheetButtonControl */ "./controls/button/SpriteSheetButtonControl.ts");
/* harmony import */ var _pixi_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pixi/text */ "../node_modules/@pixi/text/lib/index.mjs");
/* harmony import */ var _pixi_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pixi/display */ "../node_modules/@pixi/display/lib/index.mjs");
/* harmony import */ var app_model_TextStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/model/TextStyles */ "./model/TextStyles.ts");
/* harmony import */ var app_controls_button_ButtonControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/controls/button/ButtonControl */ "./controls/button/ButtonControl.ts");





class BetBtnControl extends app_controls_button_ButtonControl__WEBPACK_IMPORTED_MODULE_4__["default"] {
    constructor(value) {
        super(new _pixi_display__WEBPACK_IMPORTED_MODULE_2__.Container());
        this.betButton = new app_controls_button_SpriteSheetButtonControl__WEBPACK_IMPORTED_MODULE_0__["default"]("auto_spin_nm_bg.png");
        this.labelValue = new _pixi_text__WEBPACK_IMPORTED_MODULE_1__.Text(`${value}`, app_model_TextStyles__WEBPACK_IMPORTED_MODULE_3__["default"].AUTOPLAY_BUTTON);
        this.labelValue.anchor.set(0.5, 0.5);
        this.labelValue.eventMode = "passive";
    }
    init() {
        super.init();
        this.add(this.betButton);
        this.container.addChild(this.labelValue);
        this.container.filters = [];
    }
    dispose() {
        this.container.removeChildren();
        super.dispose();
    }
    enable() {
        this.betButton.enable();
    }
    disable() {
        this.betButton.disable();
    }
}


/***/ }),

/***/ "./controls/button/BetSelectorBtnsControl.ts":
/*!***************************************************!*\
  !*** ./controls/button/BetSelectorBtnsControl.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BetSelectorBtnsControl)
/* harmony export */ });
/* harmony import */ var _pixi_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pixi/display */ "../node_modules/@pixi/display/lib/index.mjs");
/* harmony import */ var app_controls_button_PlusBtnControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/controls/button/PlusBtnControl */ "./controls/button/PlusBtnControl.ts");
/* harmony import */ var app_controls_BetSelectorControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/controls/BetSelectorControl */ "./controls/BetSelectorControl.ts");
/* harmony import */ var app_controls_button_MinusBtnControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/controls/button/MinusBtnControl */ "./controls/button/MinusBtnControl.ts");
/* harmony import */ var app_controls_MainControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/controls/MainControl */ "./controls/MainControl.ts");
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/helpers/signals/signal/Signal */ "./helpers/signals/signal/Signal.ts");
/* harmony import */ var _extensions_ControlShowerExtension__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../extensions/ControlShowerExtension */ "./controls/extensions/ControlShowerExtension.ts");








class BetSelectorBtnsControl extends app_controls_MainControl__WEBPACK_IMPORTED_MODULE_4__["default"] {
    constructor(bets, betControl) {
        super(new _pixi_display__WEBPACK_IMPORTED_MODULE_0__.Container());
        this.betChanged = new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_6__["default"]();
        this.plusBtnControl = new app_controls_button_PlusBtnControl__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.minusBtnControl = new app_controls_button_MinusBtnControl__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.isEnable = true;
        this.betSelectorControl = new app_controls_BetSelectorControl__WEBPACK_IMPORTED_MODULE_2__["default"](bets);
        if (betControl) {
            this.betSelectorControl.addExtension(new _extensions_ControlShowerExtension__WEBPACK_IMPORTED_MODULE_7__["default"](betControl));
        }
    }
    init() {
        super.init();
        const plusBtnControl = this.plusBtnControl;
        const minusBtnControl = this.minusBtnControl;
        const betSelectorControl = this.betSelectorControl;
        this.add(betSelectorControl);
        this.add(plusBtnControl);
        this.add(minusBtnControl);
        minusBtnControl.container.position.x = -betSelectorControl.container.width;
        plusBtnControl.container.position.x = betSelectorControl.container.width;
        betSelectorControl.betChanged.add(betId => this.betChanged.emit(betId), this);
        plusBtnControl.onClick.add(() => {
            app_model_GameModel__WEBPACK_IMPORTED_MODULE_5__["default"].getHowler().play("custom-button");
            betSelectorControl.increment();
        }, this);
        minusBtnControl.onClick.add(() => {
            app_model_GameModel__WEBPACK_IMPORTED_MODULE_5__["default"].getHowler().play("custom-button");
            betSelectorControl.decrement();
        }, this);
        document.addEventListener("keyup", this.onKeyUp.bind(this));
    }
    disable() {
        this.isEnable = false;
        this.betSelectorControl.disable();
        this.plusBtnControl.disable();
        this.minusBtnControl.disable();
    }
    enable() {
        this.isEnable = true;
        this.betSelectorControl.enable();
        this.plusBtnControl.enable();
        this.minusBtnControl.enable();
    }
    updateBetIndex(betId) {
        this.betSelectorControl.updateBetIndex(betId);
    }
    dispose() {
        this.container.removeChildren();
        this.plusBtnControl.onClick.unload(this);
        this.minusBtnControl.onClick.unload(this);
        this.betChanged.unload(this);
        document.removeEventListener("keyup", this.onKeyUp);
        super.dispose();
    }
    onKeyUp(e) {
        if (this.isEnable) {
            if (e.keyCode == 37) {
                this.betSelectorControl.decrement();
            }
            else if (e.keyCode == 39) {
                this.betSelectorControl.increment();
            }
        }
    }
}


/***/ }),

/***/ "./controls/button/ButtonControl.ts":
/*!******************************************!*\
  !*** ./controls/button/ButtonControl.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ButtonControl)
/* harmony export */ });
/* harmony import */ var _MainControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../MainControl */ "./controls/MainControl.ts");
/* harmony import */ var _pixi_filter_glow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pixi/filter-glow */ "../node_modules/@pixi/filter-glow/dist/filter-glow.mjs");
/* harmony import */ var _pixi_filter_color_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pixi/filter-color-matrix */ "../node_modules/@pixi/filter-color-matrix/lib/index.mjs");
/* harmony import */ var app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/helpers/signals/signal/Signal */ "./helpers/signals/signal/Signal.ts");
/* harmony import */ var _pixi_display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pixi/display */ "../node_modules/@pixi/display/lib/index.mjs");
/* harmony import */ var _pixi_sprite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pixi/sprite */ "../node_modules/@pixi/sprite/lib/index.mjs");
/* harmony import */ var app_pixi_StrictResourcesHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pixi/StrictResourcesHelper */ "./pixi/StrictResourcesHelper.ts");







class ButtonControl extends _MainControl__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(texture, opt) {
        var _a, _b;
        super();
        this.opt = opt;
        this.onClick = new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.additionalFilters = [];
        opt = opt ? opt : {};
        this.opt = opt;
        opt.hoverColor = opt.hoverColor === undefined ? 0xffffff : opt.hoverColor;
        opt.strokeColor = (_a = opt.strokeColor) !== null && _a !== void 0 ? _a : 0xaeaeae;
        opt.align = opt.align === undefined ? _MainControl__WEBPACK_IMPORTED_MODULE_0__.PivotType.TL : opt.align;
        this.target = opt.target;
        if (typeof texture == "string") {
            texture = app_pixi_StrictResourcesHelper__WEBPACK_IMPORTED_MODULE_6__["default"].getSomeTexture(texture);
        }
        this.button = texture instanceof _pixi_display__WEBPACK_IMPORTED_MODULE_4__.Container ? texture : new _pixi_sprite__WEBPACK_IMPORTED_MODULE_5__.Sprite(texture);
        this.glowFilter = new _pixi_filter_glow__WEBPACK_IMPORTED_MODULE_1__.GlowFilter({
            color: (_b = opt.strokeColor) !== null && _b !== void 0 ? _b : 0xcecece, outerStrength: 50, distance: 10, quality: 0.3,
        });
        this.sepiaColorFilter = new _pixi_filter_color_matrix__WEBPACK_IMPORTED_MODULE_2__.ColorMatrixFilter();
        this.sepiaColorFilter.sepia(false);
        // this.button.hitArea = new Polygon(getCirclePolygons(this.button.width * .5, 10));
        this.container.addChild(this.button);
        this.setPivotTo(this.button, opt.align);
        this.container.filters = [this.glowFilter];
    }
    init() {
        super.init();
        this.container.on("pointerover", () => {
            this.onOver();
        });
        this.container.on("pointerout", () => {
            this.onOut();
        });
        this.container.on("pointerdown", () => {
            this.onClicked();
        });
        this.container.eventMode = "static";
        this.container.cursor = "pointer";
    }
    onClicked() {
        if (this.isEnable()) {
            this.onClick.emit(this);
        }
    }
    onOut() {
        var _a, _b;
        this.glowFilter.color = (_b = (_a = this.opt) === null || _a === void 0 ? void 0 : _a.strokeColor) !== null && _b !== void 0 ? _b : 0xcecece;
    }
    onOver() {
        var _a, _b;
        this.glowFilter.color = (_b = (_a = this.opt) === null || _a === void 0 ? void 0 : _a.hoverColor) !== null && _b !== void 0 ? _b : 0xcecece;
    }
    set hitArea(value) {
        this.button.hitArea = value;
    }
    isEnable() {
        return this.button.alpha === 1;
    }
    enable() {
        this.button.alpha = 1;
        this.container.filters = [this.glowFilter];
        this.container.eventMode = "static";
        this.container.cursor = "pointer";
    }
    disable() {
        if (this.button.alpha === 1) {
            this.container.eventMode = "auto";
            this.container.cursor = "default";
            this.container.filters = [this.sepiaColorFilter, this.glowFilter, ...this.additionalFilters];
            this.button.alpha = 0.5;
        }
    }
    addFilter(filter) {
        this.additionalFilters.push(filter);
        this.container.filters = [...this.additionalFilters];
    }
}


/***/ }),

/***/ "./controls/button/ForceBtnControl.ts":
/*!********************************************!*\
  !*** ./controls/button/ForceBtnControl.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForceBtnControl": () => (/* binding */ ForceBtnControl)
/* harmony export */ });
/* harmony import */ var app_controls_button_SpriteSheetButtonControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/controls/button/SpriteSheetButtonControl */ "./controls/button/SpriteSheetButtonControl.ts");
/* harmony import */ var app_controls_button_ButtonControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/controls/button/ButtonControl */ "./controls/button/ButtonControl.ts");
/* harmony import */ var _pixi_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pixi/display */ "../node_modules/@pixi/display/lib/index.mjs");



class ForceBtnControl extends app_controls_button_ButtonControl__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(isForce) {
        super(new _pixi_display__WEBPACK_IMPORTED_MODULE_2__.Container());
        this.isForce = isForce;
        this.forceOn = new app_controls_button_SpriteSheetButtonControl__WEBPACK_IMPORTED_MODULE_0__["default"]("force_btn.png");
        this.forceOff = new app_controls_button_SpriteSheetButtonControl__WEBPACK_IMPORTED_MODULE_0__["default"]("force_btn_off.png");
        this.container.filters = [];
    }
    init() {
        super.init();
        this.add(this.forceOn);
        this.add(this.forceOff);
        if (this.isForce) {
            this.forceOn.moveTop();
        }
    }
    dispose() {
        this.container.removeChildren();
        super.dispose();
    }
    switchToggleState() {
        const forceBtn = this.isForce ? this.forceOff : this.forceOn;
        forceBtn.moveTop();
        this.isForce = !this.isForce;
    }
}


/***/ }),

/***/ "./controls/button/FullScreenBtnControl.ts":
/*!*************************************************!*\
  !*** ./controls/button/FullScreenBtnControl.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FullScreenBtnControl)
/* harmony export */ });
/* harmony import */ var app_controls_MainControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/controls/MainControl */ "./controls/MainControl.ts");
/* harmony import */ var app_controls_button_SpriteSheetButtonControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/controls/button/SpriteSheetButtonControl */ "./controls/button/SpriteSheetButtonControl.ts");


class FullScreenBtnControl extends app_controls_MainControl__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(htmlElement = document.body) {
        super();
        this.fullScreenButtonControl = new app_controls_button_SpriteSheetButtonControl__WEBPACK_IMPORTED_MODULE_1__["default"]("full_screen_btn.png");
        this.exitFullScreenButtonControl = new app_controls_button_SpriteSheetButtonControl__WEBPACK_IMPORTED_MODULE_1__["default"]("full_screen_exit_btn.png");
        this.onExitFullScreen = () => {
            if (!this.isFullscreen()) {
                this.fullScreenButtonControl.moveTop();
            }
        };
        this.htmlElement = htmlElement;
        this.container.eventMode = "static";
        this.container.cursor = "pointer";
    }
    init() {
        super.init();
        this.add(this.exitFullScreenButtonControl);
        this.add(this.fullScreenButtonControl);
        this.container.on("pointerup", this.onClick, this);
        window.addEventListener("fullscreenchange", this.onExitFullScreen);
    }
    dispose() {
        this.remove(this.exitFullScreenButtonControl);
        this.remove(this.fullScreenButtonControl);
        window.removeEventListener("fullscreenchange", this.onExitFullScreen);
        this.container.off("pointerup", this.onClick, this);
        super.dispose();
    }
    async onClick() {
        this.container.eventMode = "auto";
        if (this.isFullscreen()) {
            await this.offFullScreen();
        }
        else {
            await this.onFullScreen(this.htmlElement);
            this.exitFullScreenButtonControl.moveTop();
        }
        this.container.eventMode = "static";
    }
    async onFullScreen(htmlElement) {
        if (!htmlElement) {
            return Promise.resolve();
        }
        const el = htmlElement.parentElement;
        if (el.requestFullscreen) {
            await el.requestFullscreen().catch(reason => {
                console.error(reason);
            });
        }
        else if (el.mozRequestFullScreen) {
            await el.mozRequestFullScreen();
        }
        else if (el.webkitRequestFullscreen) {
            await el.webkitRequestFullscreen();
        }
        else if (el.msRequestFullscreen) {
            await el.msRequestFullscreen();
        }
        else {
            return Promise.reject(new Error("no methods to resolve fullscreen in"));
        }
    }
    async offFullScreen() {
        const doc = document;
        if (doc.exitFullscreen) {
            await doc.exitFullscreen();
        }
        else if (doc.mozCancelFullScreen) {
            await doc.mozCancelFullScreen();
        }
        else if (doc.webkitExitFullscreen) {
            await doc.webkitExitFullscreen();
        }
        else if (doc.msExitFullscreen) {
            await doc.msExitFullscreen();
        }
        else {
            return Promise.reject(new Error("no methods to resolve fullscreen out"));
        }
    }
    isFullscreen() {
        const doc = document;
        return !!(doc.webkitFullscreenElement ||
            doc.mozFullScreenElement ||
            doc.webkitCurrentFullScreenElement ||
            doc.fullscreenElement);
    }
}


/***/ }),

/***/ "./controls/button/MinusBtnControl.ts":
/*!********************************************!*\
  !*** ./controls/button/MinusBtnControl.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MinusBtnControl)
/* harmony export */ });
/* harmony import */ var app_controls_button_SpriteSheetButtonControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/controls/button/SpriteSheetButtonControl */ "./controls/button/SpriteSheetButtonControl.ts");

class MinusBtnControl extends app_controls_button_SpriteSheetButtonControl__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super("minus.png");
    }
    init() {
        super.init();
    }
    dispose() {
        this.container.removeChildren();
        super.dispose();
    }
}


/***/ }),

/***/ "./controls/button/OptionsBtnControl.ts":
/*!**********************************************!*\
  !*** ./controls/button/OptionsBtnControl.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OptionsBtnControl)
/* harmony export */ });
/* harmony import */ var app_controls_button_SpriteSheetButtonControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/controls/button/SpriteSheetButtonControl */ "./controls/button/SpriteSheetButtonControl.ts");

class OptionsBtnControl extends app_controls_button_SpriteSheetButtonControl__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super("info.png");
    }
    init() {
        super.init();
    }
    dispose() {
        this.container.removeChildren();
        super.dispose();
    }
}


/***/ }),

/***/ "./controls/button/PlusBtnControl.ts":
/*!*******************************************!*\
  !*** ./controls/button/PlusBtnControl.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlusBtnControl)
/* harmony export */ });
/* harmony import */ var app_controls_button_SpriteSheetButtonControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/controls/button/SpriteSheetButtonControl */ "./controls/button/SpriteSheetButtonControl.ts");

class PlusBtnControl extends app_controls_button_SpriteSheetButtonControl__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super("plus.png");
    }
    init() {
        super.init();
    }
    dispose() {
        this.container.removeChildren();
        super.dispose();
    }
}


/***/ }),

/***/ "./controls/button/SoundBtnControl.ts":
/*!********************************************!*\
  !*** ./controls/button/SoundBtnControl.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SoundBtnControl)
/* harmony export */ });
/* harmony import */ var app_controls_button_SpriteSheetButtonControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/controls/button/SpriteSheetButtonControl */ "./controls/button/SpriteSheetButtonControl.ts");
/* harmony import */ var _pixi_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pixi/display */ "../node_modules/@pixi/display/lib/index.mjs");
/* harmony import */ var app_controls_button_ButtonControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/controls/button/ButtonControl */ "./controls/button/ButtonControl.ts");



class SoundBtnControl extends app_controls_button_ButtonControl__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(isSoundMuted) {
        super(new _pixi_display__WEBPACK_IMPORTED_MODULE_1__.Container());
        this.isSoundMuted = isSoundMuted;
        this.soundOn = new app_controls_button_SpriteSheetButtonControl__WEBPACK_IMPORTED_MODULE_0__["default"]("options_sound_on.png");
        this.soundOff = new app_controls_button_SpriteSheetButtonControl__WEBPACK_IMPORTED_MODULE_0__["default"]("options_sound_off.png");
        this.container.filters = [];
    }
    init() {
        super.init();
        this.add(this.soundOff);
        this.add(this.soundOn);
        if (this.isSoundMuted) {
            this.soundOff.moveTop();
        }
        this.onClick.add(this.switchSoundState, this);
    }
    dispose() {
        this.onClick.unload(this);
        this.container.removeChildren();
        super.dispose();
    }
    switchSoundState() {
        const soundBtn = this.isSoundMuted ? this.soundOn : this.soundOff;
        soundBtn.moveTop();
        this.isSoundMuted = !this.isSoundMuted;
    }
}


/***/ }),

/***/ "./controls/button/SpinBtnControl.ts":
/*!*******************************************!*\
  !*** ./controls/button/SpinBtnControl.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SpinBtnControl)
/* harmony export */ });
/* harmony import */ var _pixi_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pixi/text */ "../node_modules/@pixi/text/lib/index.mjs");
/* harmony import */ var app_controls_button_SpriteSheetButtonControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/controls/button/SpriteSheetButtonControl */ "./controls/button/SpriteSheetButtonControl.ts");
/* harmony import */ var app_model_TextStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/model/TextStyles */ "./model/TextStyles.ts");



class SpinBtnControl extends app_controls_button_SpriteSheetButtonControl__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor() {
        super("spin_btn.png");
        this.spinsNumber = new _pixi_text__WEBPACK_IMPORTED_MODULE_0__.Text("", app_model_TextStyles__WEBPACK_IMPORTED_MODULE_2__["default"].SPIN_BTN_TEXT_STYLE);
        this.spinsNumber.anchor.set(0.5, 0.5);
    }
    init() {
        super.init();
        this.container.addChild(this.spinsNumber);
    }
    dispose() {
        this.container.removeChildren();
        super.dispose();
    }
    setSpinsNumber(value) {
        value = Math.max(0, value);
        this.spinsNumber.text = value === 0 ? "" : `${value}`;
    }
}


/***/ }),

/***/ "./controls/button/SpriteSheetButtonControl.ts":
/*!*****************************************************!*\
  !*** ./controls/button/SpriteSheetButtonControl.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SpriteSheetButtonControl)
/* harmony export */ });
/* harmony import */ var _MainControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../MainControl */ "./controls/MainControl.ts");
/* harmony import */ var app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/helpers/signals/signal/Signal */ "./helpers/signals/signal/Signal.ts");
/* harmony import */ var app_controls_SpriteControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/controls/SpriteControl */ "./controls/SpriteControl.ts");



class SpriteSheetButtonControl extends _MainControl__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(texture, options) {
        var _a, _b;
        super();
        this.onClick = new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.texture = texture;
        this.disableTexture = (_a = options === null || options === void 0 ? void 0 : options.disable) !== null && _a !== void 0 ? _a : texture.replace(/(\.[^.]+)$/, "_disable$1");
        this.hover = (_b = options === null || options === void 0 ? void 0 : options.hover) !== null && _b !== void 0 ? _b : texture.replace(/(\.[^.]+)$/, "_hov$1");
        this.button = new app_controls_SpriteControl__WEBPACK_IMPORTED_MODULE_2__.SpriteControl(texture);
        this.container.eventMode = "static";
        this.container.cursor = "pointer";
        this.setPivotTo(this.button.container);
    }
    init() {
        super.init();
        this.add(this.button);
        this.container.on("pointerover", () => {
            this.onOver();
        });
        this.container.on("pointerout", () => {
            this.onOut();
        });
        this.container.on("pointerdown", () => {
            this.onClicked();
            this.onOut();
        });
        this.container.eventMode = "static";
        this.container.cursor = "pointer";
    }
    dispose() {
        this.container.removeChildren();
        this.container.off("pointerdown");
        this.container.off("pointerout");
        this.container.off("pointerover");
        super.dispose();
    }
    isEnable() {
        return this.button.texture !== this.disableTexture;
    }
    enable() {
        this.container.eventMode = "static";
        this.container.cursor = "pointer";
        this.button.texture = this.texture;
    }
    disable() {
        if (this.isEnable()) {
            this.container.eventMode = "none";
            this.container.cursor = "default";
            this.button.texture = this.disableTexture;
        }
    }
    onClicked() {
        if (this.isEnable()) {
            this.onClick.emit(this);
        }
    }
    onOut() {
        this.button.texture = this.texture;
    }
    onOver() {
        this.button.texture = this.hover;
    }
}


/***/ }),

/***/ "./controls/character/CharacterControl.ts":
/*!************************************************!*\
  !*** ./controls/character/CharacterControl.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CharacterControl)
/* harmony export */ });
/* harmony import */ var app_controls_SpineControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/controls/SpineControl */ "./controls/SpineControl.ts");
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");


class CharacterControl extends app_controls_SpineControl__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super("character");
        this.gameSignals = app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals;
        this.playWinAnimation = () => {
            this.play("win", { loop: false, timeScale: 0.6 }).then(this.playIdleAnimation);
        };
        this.playGreetingsAnimation = () => {
            this.play("greetings", { loop: false }).then(this.playIdleAnimation);
        };
        this.playIdleAnimation = () => {
            this.play("idle", { loop: true, timeScale: 0.9 });
        };
    }
    init() {
        super.init();
        this.playIdleAnimation();
        this.container.interactive = true;
        this.container.cursor = "pointer";
        this.gameSignals.popup.fsIntro.hidden.add(this.playWinAnimation, this);
        this.container.addEventListener("click", this.playGreetingsAnimation);
        this.container.addEventListener("touchstart", this.playGreetingsAnimation);
    }
    dispose() {
        this.gameSignals.popup.fsIntro.hidden.remove(this.playWinAnimation);
        this.container.removeEventListener("click", this.playGreetingsAnimation);
        this.container.removeEventListener("touchstart", this.playGreetingsAnimation);
    }
}


/***/ }),

/***/ "./controls/extensions/CentralizingExtension.ts":
/*!******************************************************!*\
  !*** ./controls/extensions/CentralizingExtension.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CentralizingExtension)
/* harmony export */ });
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");

class CentralizingExtension {
    init(instance) {
        instance.setPosition(app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].gameSize.centerPosition);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].updateLayout.add(value => {
            instance.setPosition(value.centerPosition);
        }, instance);
    }
    dispose(instance) {
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].updateLayout.unload(instance);
    }
}


/***/ }),

/***/ "./controls/extensions/ControlShowerExtension.ts":
/*!*******************************************************!*\
  !*** ./controls/extensions/ControlShowerExtension.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ControlShowerExtension)
/* harmony export */ });
/* harmony import */ var app_helpers_DisplayObjectHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/helpers/DisplayObjectHelper */ "./helpers/DisplayObjectHelper.ts");
/* harmony import */ var app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/helpers/TimeHelper */ "./helpers/TimeHelper.ts");
/* harmony import */ var app_helpers_ObjectHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/helpers/ObjectHelper */ "./helpers/ObjectHelper.ts");



class ControlShowerExtension {
    constructor(controlToShow) {
        this.controlToShow = controlToShow;
    }
    init(instance) {
        instance.onClick.add(async () => {
            if (this.controlToShow.container.visible) {
                await this.controlToShow.hide();
            }
            else {
                this.addOutsideControlClickHandler(this.controlToShow, instance);
                await this.controlToShow.show();
            }
        });
    }
    dispose(instance) {
        instance.onClick.unload(this);
    }
    addOutsideControlClickHandler(control, ignoreControl) {
        const type = "pointerdown";
        const container = control.container;
        let currentTarget;
        const onClose = async () => {
            document.body.removeEventListener(type, onClose);
            control.container.off(type, clickHandler, this);
            const isVisible = container.visible && container.alpha == 1;
            if (!currentTarget) {
                if (isVisible) {
                    await control.hide();
                }
                return;
            }
            const child = (0,app_helpers_ObjectHelper__WEBPACK_IMPORTED_MODULE_2__.ensure)(currentTarget);
            currentTarget = undefined;
            const isOurContainer = app_helpers_DisplayObjectHelper__WEBPACK_IMPORTED_MODULE_0__["default"].isChildOff(child, container);
            const isIgnoreContainer = app_helpers_DisplayObjectHelper__WEBPACK_IMPORTED_MODULE_0__["default"].isChildOff(child, ignoreControl.container);
            if (!isOurContainer || isIgnoreContainer) {
                if (isVisible) {
                    await control.hide();
                }
            }
            else if (isVisible) {
                document.body.addEventListener(type, onClose);
                control.container.on(type, clickHandler, this);
                control.container.eventMode = "static";
                control.container.cursor = "pointer";
            }
        };
        const clickHandler = async (e) => {
            currentTarget = e.target;
        };
        (0,app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_1__.promiseDelay)(1, app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_1__.TimeUnit.mls).then(() => {
            document.body.addEventListener(type, onClose);
            control.container.on(type, clickHandler, this);
            control.container.eventMode = "static";
            control.container.cursor = "pointer";
        });
    }
}


/***/ }),

/***/ "./controls/extensions/GlowFilterExtension.ts":
/*!****************************************************!*\
  !*** ./controls/extensions/GlowFilterExtension.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GlowFilterExtension)
/* harmony export */ });
/* harmony import */ var _pixi_filter_glow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pixi/filter-glow */ "../node_modules/@pixi/filter-glow/dist/filter-glow.mjs");

class GlowFilterExtension {
    constructor(options) {
        this.options = options;
        this.options = { color: 0x5f3422, outerStrength: 5, distance: 5, quality: 0.5, ...this.options };
    }
    init(instance) {
        instance.container.filters = [new _pixi_filter_glow__WEBPACK_IMPORTED_MODULE_0__.GlowFilter(this.options)];
    }
    dispose(instance) {
        instance.container.filters = [];
    }
}


/***/ }),

/***/ "./controls/extensions/LocalizationExtension.ts":
/*!******************************************************!*\
  !*** ./controls/extensions/LocalizationExtension.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalizationExtension": () => (/* binding */ LocalizationExtension)
/* harmony export */ });
/* harmony import */ var app_localization_Localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/localization/Localization */ "./localization/Localization.ts");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


class LocalizationExtension {
    init(instance) {
        instance.container.children.filter(value => { var _a; return (_a = value.name) === null || _a === void 0 ? void 0 : _a.includes("to_translate"); }).forEach(value => {
            var _a;
            const key = ((_a = value.name) !== null && _a !== void 0 ? _a : "").replace("_to_translate", "").replace("to_translate", "");
            value.children[0].text = this.localization.text(key);
        });
    }
    dispose() {
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_1__.inject)(app_localization_Localization__WEBPACK_IMPORTED_MODULE_0__["default"])
], LocalizationExtension.prototype, "localization", void 0);


/***/ }),

/***/ "./controls/extensions/OnResizeExtension.ts":
/*!**************************************************!*\
  !*** ./controls/extensions/OnResizeExtension.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnResizeExtension)
/* harmony export */ });
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");

class OnResizeExtension {
    constructor(hasPriority = false) {
        this.hasPriority = hasPriority;
    }
    dispose(instance) {
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].updateLayout.unload(instance);
    }
    init(instance) {
        instance.container.parent && instance.resize(app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].gameSize);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].updateLayout.add(instance.resize, instance, this.hasPriority ? 1 : 0);
    }
}


/***/ }),

/***/ "./controls/extensions/ShakeExtension.ts":
/*!***********************************************!*\
  !*** ./controls/extensions/ShakeExtension.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShakeExtension": () => (/* binding */ ShakeExtension)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "../node_modules/gsap/index.js");

class ShakeControl {
    constructor(control, shaking) {
        this.control = control;
        this.shaking = shaking;
        this.speedFactor = 1;
    }
    shake() {
        if (this.shakeTimeline) {
            this.shakeTimeline.totalProgress(1).kill();
        }
        const initialY = { y: this.control.container.position.y };
        this.shakeTimeline = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
            onComplete: () => {
                this.control.container.position.y = initialY.y;
            },
        }).to(this.control.container.position, {
            y: this.control.container.position.y + this.shaking.yOffset,
            ease: "rough({ strength: 12, points: 20, template: none.out })",
            duration: this.shaking.duration.down / this.speedFactor,
            repeat: 1,
            yoyo: true,
        }).to(this.control.container.position, {
            y: initialY.y,
            duration: this.shaking.duration.up / this.speedFactor,
        });
    }
}
class ShakeExtension {
    constructor(signals, shaking) {
        this.signals = signals;
        this.shaking = shaking;
    }
    init(instance) {
        const shakeControl = new ShakeControl(instance, this.shaking);
        this.signals.speedFactorUpdate.add((speedFactor) => {
            shakeControl.speedFactor = speedFactor;
        }, instance);
        this.signals.shakeSignal.add(() => {
            shakeControl.shake();
        }, instance);
    }
    dispose(instance) {
        this.signals.shakeSignal.unload(instance);
        this.signals.speedFactorUpdate.unload(instance);
    }
}


/***/ }),

/***/ "./controls/extensions/SpeedFactorExtension.ts":
/*!*****************************************************!*\
  !*** ./controls/extensions/SpeedFactorExtension.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SpeedFactorExtension)
/* harmony export */ });
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! res/configs/gameConfig.json */ "../resources/assets/configs/gameConfig.json");


class SpeedFactorExtension {
    init(instance) {
        const slot = (speedFactor) => {
            instance.speedFactor = speedFactor;
            instance.updateSpeedFactor(speedFactor);
        };
        slot(app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].isForce ? res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_1__.forceSpeedFactor : res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_1__.defaultSpeedFactor);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals.speedFactorUpdate.add(slot, instance);
    }
    dispose(instance) {
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals.speedFactorUpdate.unload(instance);
    }
}


/***/ }),

/***/ "./controls/extensions/SpineAspectExtension.ts":
/*!*****************************************************!*\
  !*** ./controls/extensions/SpineAspectExtension.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SpineAspectExtension)
/* harmony export */ });
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");

class SpineAspectExtension {
    constructor(aspect) {
        this.aspect = aspect;
    }
    init(instance) {
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].updateLayout.add((gameSize, resolve) => {
            const aspect = gameSize.width / gameSize.height;
            const aspectTo = this.aspect.aspectTo; // 1920 / 1080;
            const aspectAt = this.aspect.aspectAt; // 1080 / 1920;
            const frameAt = (Math.max(Math.min(aspectTo, aspect), aspectAt) - aspectAt) / (aspectTo - aspectAt);
            instance.play("aspect", { frameAt: 1 - frameAt, trackIndex: 1 });
            resolve === null || resolve === void 0 ? void 0 : resolve();
        }, instance);
    }
    dispose(instance) {
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].updateLayout.unload(instance);
    }
}


/***/ }),

/***/ "./controls/extensions/SpineLazyAssetsUpdateExtension.ts":
/*!***************************************************************!*\
  !*** ./controls/extensions/SpineLazyAssetsUpdateExtension.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SpineLazyAssetsUpdateExtension)
/* harmony export */ });
/* harmony import */ var _pixi_assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pixi/assets */ "../node_modules/@pixi/assets/lib/index.mjs");
/* harmony import */ var app_loader_SpineLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/loader/SpineLoader */ "./loader/SpineLoader.ts");


class SpineLazyAssetsUpdateExtension {
    constructor(spine, asset) {
        this.spine = spine;
        this.asset = asset;
    }
    init(instance) {
        _pixi_assets__WEBPACK_IMPORTED_MODULE_0__.Assets.load(this.asset).then(() => {
            instance.spine.skeleton.data = app_loader_SpineLoader__WEBPACK_IMPORTED_MODULE_1__["default"].updateTextures(this.spine);
            instance.updateSkin();
            instance.spine.skeleton.setToSetupPose();
        });
    }
    dispose() { }
}


/***/ }),

/***/ "./controls/extensions/VisibilityExtension.ts":
/*!****************************************************!*\
  !*** ./controls/extensions/VisibilityExtension.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FadeInOutVisibilityExtension": () => (/* binding */ FadeInOutVisibilityExtension),
/* harmony export */   "SpineVisibilityExtension": () => (/* binding */ SpineVisibilityExtension),
/* harmony export */   "default": () => (/* binding */ VisibilityExtension)
/* harmony export */ });
/* harmony import */ var app_helpers_promise_gsap_PromisableGsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/helpers/promise/gsap/PromisableGsap */ "./helpers/promise/gsap/PromisableGsap.ts");

class VisibilityExtension {
    init(instance) {
        instance.onHide.add((value, resolve) => {
            instance.container.visible = false;
            resolve === null || resolve === void 0 ? void 0 : resolve();
        }, this);
        instance.onShow.add((value, resolve) => {
            instance.container.visible = true;
            resolve === null || resolve === void 0 ? void 0 : resolve();
        }, this);
    }
    dispose(instance) {
        instance.onHide.unload(this);
        instance.onShow.unload(this);
    }
}
class SpineVisibilityExtension {
    constructor(data) {
        this.data = data;
    }
    init(instance) {
        var _a;
        const data = { timeScale: (_a = this.data.timeScale) !== null && _a !== void 0 ? _a : 1 };
        instance.onHide.add(async (value, resolve) => {
            await instance.play(this.data.hide, data);
            instance.container.visible = false;
            resolve === null || resolve === void 0 ? void 0 : resolve();
        }, this);
        instance.onShow.add(async (value, resolve) => {
            instance.container.visible = true;
            await instance.play(this.data.show, data);
            resolve === null || resolve === void 0 ? void 0 : resolve();
        }, this);
    }
    dispose(instance) {
        instance.onHide.unload(this);
        instance.onShow.unload(this);
    }
}
class FadeInOutVisibilityExtension {
    constructor(duration, visibleAlpha = 1) {
        this.duration = duration;
        this.visibleAlpha = visibleAlpha;
    }
    init(instance) {
        let isInHide = false;
        instance.onHide.add(async (value, resolve) => {
            if (!isInHide) {
                isInHide = true;
                await app_helpers_promise_gsap_PromisableGsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(instance.container, {
                    duration: this.duration,
                    alpha: 0,
                });
                instance.container.visible = false;
            }
            resolve === null || resolve === void 0 ? void 0 : resolve();
        }, this);
        instance.onShow.add(async (value, resolve) => {
            if (isInHide) {
                isInHide = false;
                instance.container.visible = true;
                await app_helpers_promise_gsap_PromisableGsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(instance.container, {
                    duration: this.duration,
                    alpha: this.visibleAlpha,
                });
            }
            resolve === null || resolve === void 0 ? void 0 : resolve();
        }, this);
    }
    dispose(instance) {
        instance.onHide.unload(this);
        instance.onShow.unload(this);
    }
}


/***/ }),

/***/ "./controls/extensions/WildBonus1Extension.ts":
/*!****************************************************!*\
  !*** ./controls/extensions/WildBonus1Extension.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WildBonus1Extension)
/* harmony export */ });
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_controls_motion_view_MotionLayerControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/controls/motion/view/MotionLayerControl */ "./controls/motion/view/MotionLayerControl.ts");
/* harmony import */ var _SpineControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SpineControl */ "./controls/SpineControl.ts");
/* harmony import */ var app_helpers_promise_UsablePromises__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/helpers/promise/UsablePromises */ "./helpers/promise/UsablePromises.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





class WildBonus1Extension {
    constructor() {
        this.wildBonusConfig = {
            spineId: "wildbonus1",
            animationId: "jump",
            animationDuration: 1,
        };
    }
    init(instance) {
        this.reelsControl = instance;
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals.reels.showWildBonus1Presentation.add(this.onShowWildBonus1Wins, this);
    }
    dispose() {
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals.reels.showWildBonus1Presentation.unload(this);
    }
    async onShowWildBonus1Wins(wildBonusPaths, resolve) {
        await Promise.all(wildBonusPaths.map(async (wildBonusPath) => {
            this.wildBonusControl = new _SpineControl__WEBPACK_IMPORTED_MODULE_3__["default"](this.wildBonusConfig.spineId);
            this.motionLayer.add(this.wildBonusControl);
            await this.moveAlongPath(this.reelsControl, wildBonusPath);
            this.wildBonusControl.removeFromParent();
        }));
        resolve && resolve();
    }
    async moveAlongPath(reelsControl, wildBonusPath) {
        const breakPromise = app_helpers_promise_UsablePromises__WEBPACK_IMPORTED_MODULE_4__["default"].getClickOnStagePromise();
        this.reelsControl.updateSymbol(wildBonusPath[0].jumpFrom, wildBonusPath[0].replaceOn);
        for (const jump of wildBonusPath) {
            const fromSymbol = reelsControl.getSymbol(jump.jumpFrom).container;
            const toSymbol = reelsControl.getSymbol(jump.jumpTo).container;
            const movePromise = this.motionLayer.move({
                from: fromSymbol,
                to: toSymbol,
                duration: this.wildBonusConfig.animationDuration,
                what: this.wildBonusControl.container,
                fitToSize: false,
                breakPromise: breakPromise,
            });
            this.wildBonusControl.playInTime(this.wildBonusConfig.animationId, this.wildBonusConfig.animationDuration);
            this.lookAt(jump);
            await Promise.race([breakPromise, movePromise]);
            this.reelsControl.updateSymbol(jump.jumpTo, jump.replaceOn);
        }
    }
    lookAt(jump) {
        this.wildBonusControl.setScale({ x: jump.jumpFrom.x > jump.jumpTo.x ? -1 : 1, y: 1 });
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_1__.inject)(app_controls_motion_view_MotionLayerControl__WEBPACK_IMPORTED_MODULE_2__["default"])
], WildBonus1Extension.prototype, "motionLayer", void 0);


/***/ }),

/***/ "./controls/extensions/WildBonus2Extension.ts":
/*!****************************************************!*\
  !*** ./controls/extensions/WildBonus2Extension.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WildBonus2Extension)
/* harmony export */ });
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var app_server_service_typing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/server/service/typing */ "./server/service/typing.ts");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_controls_motion_view_MotionLayerControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/controls/motion/view/MotionLayerControl */ "./controls/motion/view/MotionLayerControl.ts");
/* harmony import */ var _SpineControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SpineControl */ "./controls/SpineControl.ts");
/* harmony import */ var app_helpers_promise_UsablePromises__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/helpers/promise/UsablePromises */ "./helpers/promise/UsablePromises.ts");
/* harmony import */ var _pixi_display__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pixi/display */ "../node_modules/@pixi/display/lib/index.mjs");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







class WildBonus2Extension {
    constructor() {
        this.jumpDuration = 1.0;
        this.flyAwayDuration = 1.5;
        this.wildBonusSkin = "robin";
        this.wildBonusFlyAwayTarget = new _pixi_display__WEBPACK_IMPORTED_MODULE_6__.Container();
        this.flyAwayTargetPositionY = -100;
    }
    init(instance) {
        this.reelsControl = instance;
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals.reels.showWildBonus2Presentation.add(this.onShowWildBonus2Animation, this);
    }
    dispose() {
        this.wildBonusFlyAwayTarget.destroy();
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals.reels.showWildBonus2Presentation.unload(this);
    }
    addReturnJump(jumps) {
        const result = [...jumps];
        jumps.push({
            jumpFrom: jumps[jumps.length - 1].jumpTo,
            jumpTo: jumps[0].jumpFrom,
            replaceOn: app_server_service_typing__WEBPACK_IMPORTED_MODULE_1__.TSymbolId.WILD,
        });
        return result;
    }
    createJumpingWild() {
        const jumpingWild = new _SpineControl__WEBPACK_IMPORTED_MODULE_4__["default"]("wildbonus2");
        jumpingWild.setSkin(this.wildBonusSkin);
        return jumpingWild;
    }
    async onShowWildBonus2Animation(allJumps, resolve) {
        allJumps.forEach(jumps => this.addReturnJump(jumps));
        await allJumps.map(async (jumps) => {
            const jumpingWild = this.createJumpingWild();
            this.motionLayer.add(jumpingWild);
            await this.moveJumpingWild(jumps, jumpingWild);
            await this.flyAway(jumps[jumps.length - 1].jumpTo, jumpingWild);
            jumpingWild.removeFromParent();
        }).promise().all();
        resolve && resolve();
    }
    async moveJumpingWild(jumps, jumpingWild) {
        const breakPromise = app_helpers_promise_UsablePromises__WEBPACK_IMPORTED_MODULE_5__["default"].getClickOnStagePromise();
        for (const jump of jumps) {
            const fromSymbol = this.reelsControl.getSymbol(jump.jumpFrom).container;
            const toSymbol = this.reelsControl.getSymbol(jump.jumpTo).container;
            const movePromise = this.motionLayer.move({
                from: fromSymbol,
                to: toSymbol,
                duration: this.jumpDuration,
                what: jumpingWild.container,
                fitToSize: false,
                breakPromise: breakPromise,
            });
            jumpingWild.playInTime("jump", this.jumpDuration);
            jumpingWild.setScale({ x: this.getXScale(jump.jumpFrom, jump.jumpTo), y: 1 });
            await Promise.race([breakPromise, movePromise]);
            this.reelsControl.updateSymbol(jump.jumpTo, jump.replaceOn);
        }
    }
    getXScale(jumpFrom, jumpTo) {
        return (jumpFrom.x > jumpTo.x ? -1 : 1);
    }
    async flyAway(lastPosition, jumpingWild) {
        this.updateFlyAwayTargetPosition();
        const fromSymbol = this.reelsControl.getSymbol(lastPosition).container;
        const flyAwayPromise = this.motionLayer.move({
            from: fromSymbol,
            to: this.wildBonusFlyAwayTarget,
            duration: this.flyAwayDuration,
            what: jumpingWild.container,
            fitToSize: false,
        });
        jumpingWild.setScale({ x: this.getXScale(fromSymbol.getGlobalPosition(), this.wildBonusFlyAwayTarget.position), y: 1 });
        jumpingWild.play("flight", { loop: true });
        await flyAwayPromise;
    }
    updateFlyAwayTargetPosition() {
        const newX = app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].gameSize.width / 2;
        this.wildBonusFlyAwayTarget.position.set(newX, this.flyAwayTargetPositionY);
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_2__.inject)(app_controls_motion_view_MotionLayerControl__WEBPACK_IMPORTED_MODULE_3__["default"])
], WildBonus2Extension.prototype, "motionLayer", void 0);


/***/ }),

/***/ "./controls/game/extensions/PaytableExtension.ts":
/*!*******************************************************!*\
  !*** ./controls/game/extensions/PaytableExtension.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PaytableExtension)
/* harmony export */ });
/* harmony import */ var _pixi_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pixi/text */ "../node_modules/@pixi/text/lib/index.mjs");
/* harmony import */ var app_model_TextStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/model/TextStyles */ "./model/TextStyles.ts");
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var app_helpers_ObjectHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/helpers/ObjectHelper */ "./helpers/ObjectHelper.ts");
/* harmony import */ var _pixi_display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pixi/display */ "../node_modules/@pixi/display/lib/index.mjs");
/* harmony import */ var app_server_service_typing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/server/service/typing */ "./server/service/typing.ts");
/* harmony import */ var _pixi_sprite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pixi/sprite */ "../node_modules/@pixi/sprite/lib/index.mjs");
/* harmony import */ var app_pixi_StrictResourcesHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pixi/StrictResourcesHelper */ "./pixi/StrictResourcesHelper.ts");
/* harmony import */ var app_model_BetModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/model/BetModel */ "./model/BetModel.ts");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_controls_reels_SpineReelSymbol__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/controls/reels/SpineReelSymbol */ "./controls/reels/SpineReelSymbol.ts");











class SymbolInfo extends _pixi_display__WEBPACK_IMPORTED_MODULE_4__.Container {
    constructor(symbol, bet) {
        super();
        symbol.pays
            .map((pay, i) => ({ pay: pay * bet, i }))
            .filter(value => value.pay != 0)
            .forEach((pay, i) => {
            const symbolsAmountContainer = new _pixi_text__WEBPACK_IMPORTED_MODULE_0__.Text(`${pay.i + 1} - `, app_model_TextStyles__WEBPACK_IMPORTED_MODULE_1__["default"].PAYTABLE_TITLE_STYLE);
            symbolsAmountContainer.anchor.set(1, 0.5);
            const payContainer = new _pixi_text__WEBPACK_IMPORTED_MODULE_0__.Text(`${pay.pay.toFixed(2)}`, app_model_TextStyles__WEBPACK_IMPORTED_MODULE_1__["default"].PAYTABLE_WHITE_TITLE_STYLE);
            payContainer.anchor.set(0, 0.5);
            payContainer.y = symbolsAmountContainer.y = i * 120;
            this.addChild(payContainer, symbolsAmountContainer);
        });
    }
}
class LineBox extends _pixi_display__WEBPACK_IMPORTED_MODULE_4__.Container {
    constructor(line) {
        super();
        line.forEach((value, index) => {
            const reelHeight = 3;
            for (let i = 0; i < reelHeight; i++) {
                const textureId = `ball_${value == i ? "orange" : "white"}.png`;
                const ball = new _pixi_sprite__WEBPACK_IMPORTED_MODULE_6__.Sprite(app_pixi_StrictResourcesHelper__WEBPACK_IMPORTED_MODULE_7__["default"].getSomeTexture(textureId));
                const scale = reelHeight;
                const padding = 5;
                const size = (16 + padding) * scale;
                ball.scale.set(scale);
                ball.position.set((index - line.length / 2) * size, (i - reelHeight / 2) * size);
                this.addChild(ball);
            }
        });
    }
}
class PaytableExtension {
    init(instance) {
        instance.spine.spineData.slots
            .filter(value => value.name.includes("to_translate"))
            .map(value => value.name)
            .forEach(value => {
            const style = value.includes("head") ? app_model_TextStyles__WEBPACK_IMPORTED_MODULE_1__["default"].PAYTABLE_TITLE_STYLE : app_model_TextStyles__WEBPACK_IMPORTED_MODULE_1__["default"].PAYTABLE_STYLE;
            const align = value.includes("_LA_") ? "left" : "center";
            const alignStyle = { ...style, align };
            const text = new _pixi_text__WEBPACK_IMPORTED_MODULE_0__.Text(value, alignStyle);
            text.anchor.set(0.5);
            text.name = value;
            instance.replace(value, text, true);
        });
        this.initFirstPage(instance);
        this.initPaytablePages(instance);
        this.initLinePages(instance);
    }
    initFirstPage(spineControl) {
        const fsAmount = new _pixi_text__WEBPACK_IMPORTED_MODULE_0__.Text("x3 = 5 \nx4 = 10 \nx5 = 20 \nx6 = 40", app_model_TextStyles__WEBPACK_IMPORTED_MODULE_1__["default"].PAYTABLE_SCATTER_STYLE);
        fsAmount.anchor.set(0.5);
        spineControl.replace("p1_fs_amount_1", fsAmount, true);
        const scatterSymbolData = (0,app_helpers_ObjectHelper__WEBPACK_IMPORTED_MODULE_3__.ensure)(app_model_GameModel__WEBPACK_IMPORTED_MODULE_2__["default"].mainGameInfo.symbols.find(value => value.id == app_server_service_typing__WEBPACK_IMPORTED_MODULE_5__.TSymbolId.BONUS));
        const container1 = new _pixi_display__WEBPACK_IMPORTED_MODULE_4__.Container();
        const container2 = new _pixi_display__WEBPACK_IMPORTED_MODULE_4__.Container();
        for (let i = 1; i <= 10; i++) {
            const scattersAmount = new _pixi_text__WEBPACK_IMPORTED_MODULE_0__.Text(`${i} - `, app_model_TextStyles__WEBPACK_IMPORTED_MODULE_1__["default"].PAYTABLE_TITLE_STYLE);
            scattersAmount.anchor.set(1, 0.5);
            const bonusPay = new _pixi_text__WEBPACK_IMPORTED_MODULE_0__.Text(`${scatterSymbolData.pays[i - 1]}`, app_model_TextStyles__WEBPACK_IMPORTED_MODULE_1__["default"].PAYTABLE_WHITE_TITLE_STYLE);
            bonusPay.anchor.set(0, 0.5);
            const container = (i % 2) + 1 == 1 ? container2 : container1;
            const padding = 70;
            bonusPay.y = scattersAmount.y = i * padding - ((i - 1) % 2) * padding;
            container.addChild(bonusPay, scattersAmount);
        }
        spineControl.replace("scatters_on_fs_ammount_column1", container1);
        spineControl.replace("scatters_on_fs_ammount_column2", container2);
    }
    initPaytablePages(spineControl) {
        const bet = (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_9__.$)(app_model_BetModel__WEBPACK_IMPORTED_MODULE_8__["default"]).getChosenBet().value;
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_2__["default"].mainGameInfo.symbols.filter(value => !value.isScatter && !value.isWild && value.name != "blank")
            .forEach((value, i) => {
            spineControl.replace(`symbol/description${i + 1}`, new SymbolInfo(value, bet));
            const spineReelSymbol = new app_controls_reels_SpineReelSymbol__WEBPACK_IMPORTED_MODULE_10__["default"]("symbols");
            const skin = value.name.toLowerCase();
            spineControl.replace(skin, spineReelSymbol.container);
            spineReelSymbol.setScale({ x: 1.5 });
            setTimeout(() => {
                spineReelSymbol.setSkin(skin);
                spineReelSymbol.play("win", { loop: true, timeScale: 0.25 });
            }, 1);
        });
    }
    initLinePages(spineControl) {
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_2__["default"].mainGameInfo.lines.forEach((value, i) => {
            spineControl.replace(`winline${i + 1}`, new LineBox(value));
        });
    }
    dispose() { }
}


/***/ }),

/***/ "./controls/grass/GrassControl.ts":
/*!****************************************!*\
  !*** ./controls/grass/GrassControl.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GrassControl)
/* harmony export */ });
/* harmony import */ var app_controls_SpineControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/controls/SpineControl */ "./controls/SpineControl.ts");

class GrassControl extends app_controls_SpineControl__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super("grass");
    }
    init() {
        super.init();
        this.play("animation", { loop: true });
    }
    dispose() {
    }
}


/***/ }),

/***/ "./controls/motion/port/MotionPort.ts":
/*!********************************************!*\
  !*** ./controls/motion/port/MotionPort.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MotionPort)
/* harmony export */ });
/* harmony import */ var app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/helpers/signals/signal/Signal */ "./helpers/signals/signal/Signal.ts");

class MotionPort {
}
MotionPort.PORT = {
    SHOW: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
    HIDE: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
    MOVE: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
    PLAY_ON: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
    MOVE_BY_CURVE: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
    GET_ELEMENT_POSITION: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
};


/***/ }),

/***/ "./controls/motion/view/MotionLayerControl.ts":
/*!****************************************************!*\
  !*** ./controls/motion/view/MotionLayerControl.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MotionLayerControl)
/* harmony export */ });
/* harmony import */ var _pixi_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pixi/display */ "../node_modules/@pixi/display/lib/index.mjs");
/* harmony import */ var _pixi_graphics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pixi/graphics */ "../node_modules/@pixi/graphics/lib/index.mjs");
/* harmony import */ var app_controls_motion_port_MotionPort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/controls/motion/port/MotionPort */ "./controls/motion/port/MotionPort.ts");
/* harmony import */ var app_helpers_promise_gsap_PromisableGsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/helpers/promise/gsap/PromisableGsap */ "./helpers/promise/gsap/PromisableGsap.ts");
/* harmony import */ var _pixi_math__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pixi/math */ "../node_modules/@pixi/math/lib/index.mjs");
/* harmony import */ var app_helpers_promise_ResolvablePromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/helpers/promise/ResolvablePromise */ "./helpers/promise/ResolvablePromise.ts");
/* harmony import */ var app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/helpers/TimeHelper */ "./helpers/TimeHelper.ts");
/* harmony import */ var app_controls_MainControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/controls/MainControl */ "./controls/MainControl.ts");
/* harmony import */ var app_controls_extensions_VisibilityExtension__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/controls/extensions/VisibilityExtension */ "./controls/extensions/VisibilityExtension.ts");









class MotionLayerControl extends app_controls_MainControl__WEBPACK_IMPORTED_MODULE_7__["default"] {
    constructor() {
        super(new _pixi_display__WEBPACK_IMPORTED_MODULE_0__.Container());
        this.bgGraphics = new _pixi_graphics__WEBPACK_IMPORTED_MODULE_1__.Graphics();
        this.screen = {
            width: 1920,
            height: 1920,
            offsetX: -1920 * .5,
            offsetY: -1920 * .5,
        };
        this.alphaLayer = this.container;
        this.addExtension(new app_controls_extensions_VisibilityExtension__WEBPACK_IMPORTED_MODULE_8__.FadeInOutVisibilityExtension(0.25, 0.25));
    }
    init() {
        this.updateBgRegardingAspect();
        this.alphaLayer.addChild(this.bgGraphics);
        this.alphaLayer.alpha = 0;
        this.container.sortableChildren = true;
        this.initListeners();
    }
    initListeners() {
        app_controls_motion_port_MotionPort__WEBPACK_IMPORTED_MODULE_2__["default"].PORT.SHOW.add(this.show, this);
        app_controls_motion_port_MotionPort__WEBPACK_IMPORTED_MODULE_2__["default"].PORT.HIDE.add(this.hide, this);
        app_controls_motion_port_MotionPort__WEBPACK_IMPORTED_MODULE_2__["default"].PORT.PLAY_ON.add(this.playOn, this);
        app_controls_motion_port_MotionPort__WEBPACK_IMPORTED_MODULE_2__["default"].PORT.MOVE.add(this.move, this);
        app_controls_motion_port_MotionPort__WEBPACK_IMPORTED_MODULE_2__["default"].PORT.MOVE_BY_CURVE.add(this.moveByUsingCurve, this);
        app_controls_motion_port_MotionPort__WEBPACK_IMPORTED_MODULE_2__["default"].PORT.GET_ELEMENT_POSITION.add(this.getElementPosition, this);
    }
    resize(data) {
        this.screen.width = data.width;
        this.screen.height = data.height;
        const isPortrait = data.isPortrait;
        if (this.isPortrait !== isPortrait) {
            this.isPortrait = isPortrait;
            this.screen.offsetX = 0;
            this.screen.offsetY = 0;
        }
        this.updateBgRegardingAspect();
    }
    async playOn(data, resolve) {
        var _a, _b;
        this.validateGeneralData(data);
        const where = data.where ? data.where : this.container.parent;
        data.offsetX = (_a = data.offsetX) !== null && _a !== void 0 ? _a : 0;
        data.offsetY = (_b = data.offsetY) !== null && _b !== void 0 ? _b : 0;
        const position = this.getLocalPosition(data.on, data.offsetX, data.offsetY, where);
        data.what.position.copyFrom(position);
        const duration = data.duration ? data.duration : 0.5;
        data.what.position.copyFrom(position);
        where.addChild(data.what);
        await Promise.race([data.breakPromise, (0,app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_6__.promiseDelay)(duration, app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_6__.TimeUnit.sec)]);
        resolve === null || resolve === void 0 ? void 0 : resolve();
    }
    async move(data, resolve) {
        this.validateGeneralData(data);
        const where = data.where ? data.where : this.container.parent;
        const fromPosition = this.getLocalPosition(data.from, data.offsetX, data.offsetY, where);
        const toPosition = this.getLocalPosition(data.to, 0, 0, where);
        const duration = data.duration ? data.duration : 0.5;
        const bounds = this.getGlobalBounds(data.to);
        data.what.position.copyFrom(fromPosition);
        where.addChild(data.what);
        const promises = [];
        const promise = app_helpers_promise_gsap_PromisableGsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(data.what, {
            duration,
            breakPromise: data.breakPromise,
            x: toPosition.x,
            y: toPosition.y,
            ease: data.ease,
        });
        promises.push(promise);
        if (data.fitToSize) {
            promises.push(app_helpers_promise_gsap_PromisableGsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(data.what, {
                duration,
                width: bounds.width,
                height: bounds.height,
            }));
        }
        await promises.promise().all();
        data.what.position.copyFrom(toPosition);
        resolve === null || resolve === void 0 ? void 0 : resolve();
    }
    moveByUsingCurve(data, resolve) {
        var _a;
        this.validateGeneralData(data);
        data.toOffsetX = data.toOffsetX ? data.toOffsetX : 0;
        data.toOffsetY = data.toOffsetY ? data.toOffsetY : 0;
        data.motionPathType = data.motionPathType ? data.motionPathType : "cubic";
        data.repeat = data.repeat ? data.repeat : 0;
        data.repeatDelay = data.repeatDelay ? data.repeatDelay : 0;
        data.yoyo = data.yoyo ? data.yoyo : false;
        const fromPosition = this.getLocalPosition(data.from, data.offsetX, data.offsetY);
        const toPosition = this.getLocalPosition(data.to, data.toOffsetX, data.toOffsetY);
        const pointsPath = [{
                x: fromPosition.x,
                y: fromPosition.y,
            }];
        data.path.unshift(fromPosition.x, fromPosition.y);
        data.path.push(toPosition.x, toPosition.y);
        const path = data.path;
        for (let i = 0; i < path.length; i = i + 2) {
            pointsPath.push({ x: path[i], y: path[i + 1] });
        }
        let dispose = () => {
        };
        if (data.sendToBack) {
            this.container.parent.addChildAt(data.what, 1);
        }
        else {
            this.container.parent.addChild(data.what);
        }
        if (data.drawDebugPath) {
            const graphics = MotionLayerControl.getDebugGraphicsPath(data, path);
            this.container.parent.addChild(graphics);
            dispose = () => {
                graphics.parent.removeChild(graphics);
            };
        }
        data.what.position.set(0, 0);
        const targets = { position: data.moveBy, x: data.path[0], y: data.path[1] };
        const moveBy = (_a = data.moveBy) !== null && _a !== void 0 ? _a : { x: 0, y: 0 };
        app_helpers_promise_gsap_PromisableGsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(targets, {
            breakPromise: data.breakPromise,
            duration: data.duration,
            repeat: data.repeat,
            repeatDelay: data.repeatDelay,
            yoyo: data.yoyo,
            ease: "none",
            onUpdate: () => {
                moveBy.x = targets.x;
                moveBy.y = targets.y;
            },
            onComplete: () => {
                dispose();
                resolve === null || resolve === void 0 ? void 0 : resolve();
            },
            motionPath: {
                path: pointsPath,
                autoRotate: true,
                type: data.motionPathType,
            },
        });
    }
    getElementPosition(data, resolve) {
        const container = data instanceof _pixi_display__WEBPACK_IMPORTED_MODULE_0__.Container ? data : data.container;
        const offsetX = data instanceof _pixi_display__WEBPACK_IMPORTED_MODULE_0__.Container ? 0 : data.offsetX;
        const offsetY = data instanceof _pixi_display__WEBPACK_IMPORTED_MODULE_0__.Container ? 0 : data.offsetY;
        resolve === null || resolve === void 0 ? void 0 : resolve();
        return this.getLocalPosition(container, offsetX, offsetY);
    }
    getGlobalBounds(displayObject) {
        const localPosition = this.getLocalPosition(displayObject);
        const localBRPosition = this.getLocalPosition(displayObject, displayObject.width, displayObject.height);
        return new _pixi_math__WEBPACK_IMPORTED_MODULE_4__.Rectangle(localPosition.x, localPosition.y, Math.abs(localBRPosition.x - localPosition.x), Math.abs(localBRPosition.y - localPosition.y));
    }
    getLocalPosition(displayObject, offsetX = 0, offsetY = 0, where) {
        let result;
        if (offsetX != 0 || offsetY != 0) {
            const oldX = displayObject.x;
            const oldY = displayObject.y;
            displayObject.x -= offsetX;
            displayObject.y -= offsetY;
            result = displayObject.toGlobal(new _pixi_math__WEBPACK_IMPORTED_MODULE_4__.Point(0, 0));
            displayObject.x = oldX;
            displayObject.y = oldY;
        }
        else {
            result = displayObject.toGlobal(new _pixi_math__WEBPACK_IMPORTED_MODULE_4__.Point(0, 0));
        }
        result.set(result.x / this.container.parent.scale.x, result.y / this.container.parent.scale.y);
        where = where ? where : this.container;
        return where.toLocal(result);
    }
    static getDebugGraphicsPath(data, path) {
        var _a;
        const graphics = new _pixi_graphics__WEBPACK_IMPORTED_MODULE_1__.Graphics();
        graphics.lineStyle(3, 0x3500FA, 1);
        graphics.moveTo(data.path[0], data.path[1]);
        (_a = data.moveBy) === null || _a === void 0 ? void 0 : _a.set(data.path[0], data.path[1]);
        for (let i = 0; i < data.path.length; i += 6) {
            graphics.bezierCurveTo(data.path[i], data.path[i + 1], data.path[i + 2], data.path[i + 3], data.path[i + 4], data.path[i + 5]);
        }
        const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xff00ff, 0xffffff];
        for (let i = 0; i < path.length; i = i + 2) {
            graphics.lineStyle(3, colors[i / 2], 1);
            graphics.drawRect(data.path[i] - 5, data.path[i + 1] - 5, 10, 10);
        }
        graphics.moveTo(100, 100);
        return graphics;
    }
    updateBgRegardingAspect() {
        const graphics = this.bgGraphics;
        graphics.clear();
        graphics.beginFill(0x000000, 1);
        graphics.drawRect(0, 0, this.screen.width, this.screen.height);
        graphics.endFill();
        graphics.position.set(this.screen.offsetX, this.screen.offsetY);
    }
    validateGeneralData(data) {
        data.breakPromise = data.breakPromise ? data.breakPromise : app_helpers_promise_ResolvablePromise__WEBPACK_IMPORTED_MODULE_5__["default"].getResolvablePromise();
    }
}


/***/ }),

/***/ "./controls/particles/BackgroundParticleControl.ts":
/*!*********************************************************!*\
  !*** ./controls/particles/BackgroundParticleControl.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BackgroundParticleControl)
/* harmony export */ });
/* harmony import */ var app_controls_particles_ParticleControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/controls/particles/ParticleControl */ "./controls/particles/ParticleControl.ts");
/* harmony import */ var app_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/Main */ "./Main.ts");
/* harmony import */ var app_helpers_MathUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/helpers/MathUtils */ "./helpers/MathUtils.ts");



class BackgroundParticleControl extends app_controls_particles_ParticleControl__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super({
            lifetime: { min: 4, max: 10 },
            frequency: 1,
            spawnChance: 1,
            particlesPerWave: 20,
            maxParticles: 1000,
            pos: { x: app_Main__WEBPACK_IMPORTED_MODULE_1__.Main.APP.screen.width / 2, y: app_Main__WEBPACK_IMPORTED_MODULE_1__.Main.APP.screen.height / 2 },
            autoUpdate: true,
            behaviors: [
                {
                    type: "spawnShape",
                    config: {
                        type: "torus", data: { x: 0, y: 0, radius: app_Main__WEBPACK_IMPORTED_MODULE_1__.Main.APP.screen.height },
                    },
                },
                {
                    type: "blendMode",
                    config: {
                        "blendMode": "add",
                    },
                },
                {
                    type: "rotationStatic",
                    config: {
                        min: 0,
                        max: 180,
                    },
                },
                {
                    type: "movePath",
                    config: {
                        path: "sin(x/10) * x / 15",
                        speed: {
                            list: [
                                { value: 10, time: 0 }, { value: 50, time: 1 },
                            ],
                            ease: (value) => {
                                return (0,app_helpers_MathUtils__WEBPACK_IMPORTED_MODULE_2__.easeInSine01)(value);
                            },
                        },
                        minMult: 0.1,
                    },
                },
                {
                    type: "alpha",
                    config: {
                        alpha: {
                            list: [
                                { value: 0, time: 0 }, { value: 1, time: .5 }, { value: 0, time: 1 },
                            ],
                            ease: (value) => {
                                return (0,app_helpers_MathUtils__WEBPACK_IMPORTED_MODULE_2__.easeInSine01)(value);
                            },
                        },
                    },
                },
                {
                    type: "scale",
                    config: {
                        scale: {
                            list: [
                                { value: 0, time: 0 }, { value: 1, time: .7 }, { value: 0, time: 1 },
                            ],
                            ease: (value) => {
                                return (0,app_helpers_MathUtils__WEBPACK_IMPORTED_MODULE_2__.easeInSine01)(value);
                            },
                        },
                    },
                },
            ],
        });
    }
}


/***/ }),

/***/ "./controls/particles/ParticleControl.ts":
/*!***********************************************!*\
  !*** ./controls/particles/ParticleControl.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ParticleControl)
/* harmony export */ });
/* harmony import */ var app_controls_MainControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/controls/MainControl */ "./controls/MainControl.ts");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/lib/index.mjs");
/* harmony import */ var _pixi_particle_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pixi/particle-emitter */ "../node_modules/@pixi/particle-emitter/lib/particle-emitter.es.js");



class ParticleControl extends app_controls_MainControl__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(config) {
        super(new pixi_js__WEBPACK_IMPORTED_MODULE_1__.ParticleContainer());
        this.config = config;
    }
    initParticleSystem(texture) {
        this.config.behaviors.push({
            type: "textureSingle",
            config: {
                texture,
            },
        });
        this.emitter = new _pixi_particle_emitter__WEBPACK_IMPORTED_MODULE_2__.Emitter(this.container, this.config);
    }
    startEmitting() {
        this.emitter.emit = true;
    }
    stopEmitting() {
        this.emitter.emit = false;
    }
}


/***/ }),

/***/ "./controls/popups/PopupControl.ts":
/*!*****************************************!*\
  !*** ./controls/popups/PopupControl.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupControlFactory": () => (/* binding */ PopupControlFactory)
/* harmony export */ });
/* harmony import */ var app_controls_SpineControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/controls/SpineControl */ "./controls/SpineControl.ts");
/* harmony import */ var app_pixi_effects_WinCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pixi/effects/WinCounter */ "./pixi/effects/WinCounter.ts");
/* harmony import */ var _pixi_text_bitmap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pixi/text-bitmap */ "../node_modules/@pixi/text-bitmap/lib/index.mjs");
/* harmony import */ var app_helpers_promise_UsablePromises__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/helpers/promise/UsablePromises */ "./helpers/promise/UsablePromises.ts");
/* harmony import */ var app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/helpers/TimeHelper */ "./helpers/TimeHelper.ts");





class PopupControlFactory {
    static getPopup(options) {
        var _a;
        const { skin, counterValue, popupSignal } = options;
        const useCurrency = skin !== "intro";
        const useDecimals = skin !== "intro";
        const time = (_a = options.time) !== null && _a !== void 0 ? _a : (skin == "low_win_counter" ? 0.5 : 1.25);
        const font = skin == "low_win_counter" ? "win_counter" : skin;
        const popupControl = new PopupControl(useCurrency, useDecimals, time, font);
        popupControl.setSkin(skin);
        popupControl.setCounterValue(counterValue);
        const listener = async (v, resolve) => {
            await popupControl.hide();
            popupSignal.hide.unload(this);
            popupSignal.hidden.emit();
            resolve === null || resolve === void 0 ? void 0 : resolve();
        };
        popupSignal.hide.add(listener, this);
        return popupControl;
    }
}
class PopupControl extends app_controls_SpineControl__WEBPACK_IMPORTED_MODULE_0__.TypingSpineControl {
    constructor(useCurrency, useDecimals, time = 1.25, font) {
        super("fs_intro_popup");
        this.time = time;
        this.counterValue = -1;
        this.speedFactor = 1;
        this.label = new _pixi_text_bitmap__WEBPACK_IMPORTED_MODULE_2__.BitmapText("", { fontName: font, fontSize: 62 });
        this.winCounter = new app_pixi_effects_WinCounter__WEBPACK_IMPORTED_MODULE_1__["default"](this.label, useCurrency, useDecimals);
    }
    updateSpeedFactor(speedFactor) {
        this.speedFactor = speedFactor;
    }
    init() {
        super.init();
        this.replace("counter", this.label);
        this.label.anchor.set(0.5, 0.5);
    }
    async hide() {
        await this.play("hide", { timeScale: 1 });
        return super.hide();
    }
    async show() {
        const superPromise = super.show();
        this.label.text = `${this.counterValue}`;
        const timeScale = (this.getAnimationDuration("show") / this.time) * this.speedFactor;
        const clickOnStagePromise = app_helpers_promise_UsablePromises__WEBPACK_IMPORTED_MODULE_3__["default"].getClickOnStagePromise();
        let isShown = false;
        clickOnStagePromise.then(() => {
            if (isShown) {
                return;
            }
            const current = this.spine.state.getCurrent(0);
            if (current) {
                current.timeScale = 5;
            }
        });
        await [
            this.play("show", { timeScale: timeScale }),
            this.winCounter.animate(this.counterValue, this.time / this.speedFactor, clickOnStagePromise),
        ].promise().all();
        isShown = true;
        clickOnStagePromise.resolve(new Event("click"));
        this.play("idle", { loop: true });
        if (this.speedFactor !== 1) {
            await (0,app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_4__.promiseDelay)(0.3, app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_4__.TimeUnit.sec);
        }
        return superPromise;
    }
    setCounterValue(counterValue) {
        this.counterValue = counterValue;
    }
}


/***/ }),

/***/ "./controls/popups/ShadowControl.ts":
/*!******************************************!*\
  !*** ./controls/popups/ShadowControl.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShadowControl),
/* harmony export */   "shadowLayout": () => (/* binding */ shadowLayout)
/* harmony export */ });
/* harmony import */ var app_controls_MainControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/controls/MainControl */ "./controls/MainControl.ts");
/* harmony import */ var _pixi_graphics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pixi/graphics */ "../node_modules/@pixi/graphics/lib/index.mjs");


const shadowLayout = {
    name: "shadow",
    height: "100%",
    width: "100%",
};
class ShadowControl extends app_controls_MainControl__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        const shadow = new _pixi_graphics__WEBPACK_IMPORTED_MODULE_1__.Graphics();
        shadow.beginFill(0x000000, 0.5);
        shadow.beginFill(0x000000, 0.75);
        shadow.drawRect(0, 0, 100, 100);
        shadow.endFill();
        this.container.addChild(shadow);
        this.container.name = "shadow";
    }
    init() {
        super.init();
        this.hide();
    }
}


/***/ }),

/***/ "./controls/reels/AnticipationFrameControl.ts":
/*!****************************************************!*\
  !*** ./controls/reels/AnticipationFrameControl.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AnticipationFrameControl)
/* harmony export */ });
/* harmony import */ var app_controls_SpineControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/controls/SpineControl */ "./controls/SpineControl.ts");

class AnticipationFrameControl extends app_controls_SpineControl__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(reelInfo) {
        super("anticipator");
        this.reelInfo = reelInfo;
    }
    moveOnReel(reelIndex) {
        const reelFrameGap = this.reelInfo.reels.reelFrameGap;
        const reelGap = this.reelInfo.reels.reelGap;
        const symbolWidth = this.reelInfo.symbol.width;
        const symbolHeight = this.reelInfo.symbol.height;
        this.container.position.x = reelFrameGap * 9 + reelIndex * (symbolWidth + reelGap) + symbolWidth * .5;
        this.container.position.y = reelFrameGap * 5 + symbolHeight * 1.5;
    }
    async show() {
        await super.show();
        this.play("show", { loop: true });
        return this;
    }
    async hide() {
        this.stop().name("show");
        await super.hide();
        return this;
    }
}


/***/ }),

/***/ "./controls/reels/LinesControl.ts":
/*!****************************************!*\
  !*** ./controls/reels/LinesControl.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LineControl": () => (/* binding */ LineControl),
/* harmony export */   "LineSpineViewControl": () => (/* binding */ LineSpineViewControl),
/* harmony export */   "LineViewControlImpl": () => (/* binding */ LineViewControlImpl),
/* harmony export */   "default": () => (/* binding */ LinesControl)
/* harmony export */ });
/* harmony import */ var app_controls_MainControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/controls/MainControl */ "./controls/MainControl.ts");
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var app_view_lines_LineDrawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/view/lines/LineDrawer */ "./view/lines/LineDrawer.ts");
/* harmony import */ var _pixi_graphics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pixi/graphics */ "../node_modules/@pixi/graphics/lib/index.mjs");
/* harmony import */ var app_helpers_promise_gsap_PromisableGsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/helpers/promise/gsap/PromisableGsap */ "./helpers/promise/gsap/PromisableGsap.ts");
/* harmony import */ var app_pixi_StrictResourcesHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pixi/StrictResourcesHelper */ "./pixi/StrictResourcesHelper.ts");
/* harmony import */ var app_helpers_ObjectHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/helpers/ObjectHelper */ "./helpers/ObjectHelper.ts");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/lib/index.mjs");
/* harmony import */ var app_controls_SpineControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/controls/SpineControl */ "./controls/SpineControl.ts");









class LineSpineViewControl extends app_controls_SpineControl__WEBPACK_IMPORTED_MODULE_8__["default"] {
    constructor(id) {
        super("paylines");
        this.id = id;
    }
    async highlight() {
        await this.show();
        this.container.alpha = 0.5;
        await app_helpers_promise_gsap_PromisableGsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(this.container, { duration: 0.0625, alpha: 1 });
        await app_helpers_promise_gsap_PromisableGsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(this.container, { duration: 0.125, alpha: 0 });
        this.container.alpha = 1;
        await this.hide();
    }
    async show() {
        await super.show();
        await this.play(`${this.id}`);
        return this;
    }
}
class LineViewControlImpl extends app_controls_MainControl__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(linePath, lineColor) {
        super();
        const line = app_view_lines_LineDrawer__WEBPACK_IMPORTED_MODULE_2__["default"].draw({
            linePath, color: lineColor, fillColor: 0xFFFFFF,
        });
        this.container.addChild(line);
    }
    async highlight() {
        await this.show();
        this.container.alpha = 0.5;
        await app_helpers_promise_gsap_PromisableGsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(this.container, { duration: 0.0625, alpha: 1 });
        await app_helpers_promise_gsap_PromisableGsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(this.container, { duration: 0.125, alpha: 0 });
        this.container.alpha = 1;
        await this.hide();
    }
}
class LineControl extends app_controls_MainControl__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(container, lineConfig) {
        super(container);
        const mainGameInfo = app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].mainGameInfo;
        const lines = mainGameInfo.lines;
        const yPadding = 40;
        const reelHeight = 866;
        const reelWidth = 1410;
        const yOffset = (reelHeight - yPadding) / lines.length;
        const y = lineConfig.yOffset + lineConfig.orderOffset * yOffset + yPadding;
        this.line = new LineSpineViewControl(lineConfig.id);
        this.line.container.name = `${lineConfig.id}_line`;
        this.line.setPosition({
            x: reelWidth * .5,
            y: y,
        });
        this.line.hide().then();
        this.add(this.line);
    }
    async highlight() {
        await this.line.highlight();
    }
    async show() {
        await this.line.show();
        return super.show();
    }
    async hide() {
        await this.line.hide();
        return this;
    }
}
class LinesControl extends app_controls_MainControl__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.config = {
            lineColours: [
                new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#f370e0"),
                new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#8800ff"),
                new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#ff0000"),
                new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#ffff00"),
                new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#7ad8fd"),
                new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#00ff00"),
                new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#ff8800"),
                new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#91efe8"),
                new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#ffc08c"),
                new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#ff008c"),
                new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#ff008c"),
            ],
            lines: [
                {
                    id: 4,
                    orderOffset: 0,
                    yOffset: 80,
                    color: new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#f370e0"),
                },
                {
                    id: 7,
                    orderOffset: 1,
                    yOffset: 30,
                    color: new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#8800ff"),
                },
                {
                    id: 0,
                    orderOffset: 2,
                    yOffset: -20,
                    color: new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#ff0000"),
                },
                {
                    id: 1,
                    orderOffset: 3,
                    yOffset: 50,
                    color: new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#ffff00"),
                },
                {
                    id: 3,
                    orderOffset: 4,
                    yOffset: 0,
                    color: new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#7ad8fd"),
                },
                {
                    id: 2,
                    orderOffset: 5,
                    yOffset: -50,
                    color: new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#00ff00"),
                },
                {
                    id: 8,
                    orderOffset: 6,
                    yOffset: 20,
                    color: new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#ff8800"),
                },
                {
                    id: 6,
                    orderOffset: 7,
                    yOffset: -30,
                    color: new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#91efe8"),
                },
                {
                    id: 5,
                    orderOffset: 8,
                    yOffset: -80,
                    color: new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#ffc08c"),
                },
                {
                    id: 9,
                    orderOffset: 9,
                    yOffset: -90,
                    color: new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#ff008c"),
                },
                {
                    id: 10,
                    orderOffset: 1,
                    yOffset: -90,
                    color: new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#ff008c"),
                },
                {
                    id: 11,
                    orderOffset: 9,
                    yOffset: -90,
                    color: new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#ff008c"),
                },
                {
                    id: 12,
                    orderOffset: 9,
                    yOffset: -90,
                    color: new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#ff008c"),
                },
                {
                    id: 13,
                    orderOffset: 9,
                    yOffset: -90,
                    color: new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#ff008c"),
                },
                {
                    id: 14,
                    orderOffset: 9,
                    yOffset: -90,
                    color: new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#ff008c"),
                },
                {
                    id: 15,
                    orderOffset: 9,
                    yOffset: -90,
                    color: new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#ff008c"),
                },
                {
                    id: 16,
                    orderOffset: 9,
                    yOffset: -90,
                    color: new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#ff008c"),
                },
                {
                    id: 17,
                    orderOffset: 9,
                    yOffset: -90,
                    color: new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#ff008c"),
                },
                {
                    id: 18,
                    orderOffset: 9,
                    yOffset: -90,
                    color: new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#ff008c"),
                },
                {
                    id: 19,
                    orderOffset: 9,
                    yOffset: -90,
                    color: new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#ff008c"),
                },
                {
                    id: 20,
                    orderOffset: 9,
                    yOffset: -90,
                    color: new pixi_js__WEBPACK_IMPORTED_MODULE_7__.Color("#ff008c"),
                },
            ].sort((a, b) => {
                var _a, _b;
                return ((_a = app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].mainGameInfo.lines[a.id]) !== null && _a !== void 0 ? _a : [3])[0] - ((_b = app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].mainGameInfo.lines[b.id]) !== null && _b !== void 0 ? _b : [3])[0];
            }),
        };
        this.lines = [];
    }
    init() {
        super.init();
        const mainGameInfo = app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].mainGameInfo;
        const lines = mainGameInfo.lines;
        this.config.lines.forEach((line, index) => {
            line.orderOffset = index;
            line.color = this.config.lineColours[index % this.config.lineColours.length];
            line.yOffset = 0;
        });
        const reelTexture = app_pixi_StrictResourcesHelper__WEBPACK_IMPORTED_MODULE_5__["default"].getSomeTexture("reels.png");
        const reels = mainGameInfo.reels;
        const symbolWidth = mainGameInfo.symbol.width;
        const reelGap = reels.reelGap;
        const width = reels.amount * (symbolWidth + reelGap);
        const height = width * (reelTexture.height / reelTexture.width);
        const body = new _pixi_graphics__WEBPACK_IMPORTED_MODULE_3__.Graphics()
            .beginFill(0xff0000, 0.0)
            .drawRect(0, 0, width, height);
        this.container.addChild(body);
        for (let i = 0; i < lines.length; i++) {
            const lineConfig = (0,app_helpers_ObjectHelper__WEBPACK_IMPORTED_MODULE_6__.ensure)(this.config.lines.find(value => value.id == i));
            this.lines.push(new LineControl(this.container, lineConfig));
        }
    }
    async showLine(lineNumber) {
        await this.lines[lineNumber].show();
    }
    async showLines(wins) {
        await wins.map(value => value.lineId).map(async (value) => {
            await this.lines[value].show();
        }).promise().all();
    }
    async hideLines(wins) {
        await wins.map(value => value.lineId).map(async (value) => {
            await this.lines[value].hide();
        }).promise().all();
    }
    async hideAllLines() {
        await this.lines.map(async (value) => await value.hide()).promise().all();
    }
}


/***/ }),

/***/ "./controls/reels/ReelControl.ts":
/*!***************************************!*\
  !*** ./controls/reels/ReelControl.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReelControl)
/* harmony export */ });
/* harmony import */ var app_controls_MainControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/controls/MainControl */ "./controls/MainControl.ts");
/* harmony import */ var _pixi_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pixi/display */ "../node_modules/@pixi/display/lib/index.mjs");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var _pixi_ticker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pixi/ticker */ "../node_modules/@pixi/ticker/lib/index.mjs");
/* harmony import */ var app_helpers_promise_gsap_PromisableGsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/helpers/promise/gsap/PromisableGsap */ "./helpers/promise/gsap/PromisableGsap.ts");
/* harmony import */ var app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/helpers/TimeHelper */ "./helpers/TimeHelper.ts");
/* harmony import */ var app_controls_reels_SpineReelSymbol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/controls/reels/SpineReelSymbol */ "./controls/reels/SpineReelSymbol.ts");
/* harmony import */ var app_helpers_promise_ResolvablePromise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/helpers/promise/ResolvablePromise */ "./helpers/promise/ResolvablePromise.ts");
/* harmony import */ var app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/helpers/signals/signal/Signal */ "./helpers/signals/signal/Signal.ts");
/* harmony import */ var res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! res/configs/gameConfig.json */ "../resources/assets/configs/gameConfig.json");
/* harmony import */ var gsap_CustomEase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! gsap/CustomEase */ "../node_modules/gsap/CustomEase.js");
/* harmony import */ var app_helpers_ObjectHelper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/helpers/ObjectHelper */ "./helpers/ObjectHelper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












class ReelControl extends app_controls_MainControl__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(reelIndex, mainGameInfo) {
        super(new _pixi_display__WEBPACK_IMPORTED_MODULE_1__.Container());
        this.reelIndex = reelIndex;
        this.mainGameInfo = mainGameInfo;
        this.reelStopped = new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_8__["default"]();
        this.speedFactor = 1;
        this.symbols = [];
        this.speed = 0;
        this.reelOffset = 0;
        this.nearSymbolsAmount = 1;
        this.reelStoppedPromise = app_helpers_promise_ResolvablePromise__WEBPACK_IMPORTED_MODULE_7__["default"].getResolvablePromise();
        this.isInSpin = false;
        this.stopIndex = -1;
        this.ease = gsap_CustomEase__WEBPACK_IMPORTED_MODULE_11__["default"].create("custom", 
        // eslint-disable-next-line max-len
        "M0,0 C0.116,0.278 0.494,1.15 0.64,1.094 0.712,1.062 0.818,0.96 0.872,0.96 0.914,0.96 0.963,1.003 0.994,1 0.994,1 0.998,1 1,1 ");
        this.strips = mainGameInfo.strips[reelIndex];
        this.originReelStrip = this.strips.slice();
        const symbolInfo = mainGameInfo.symbol;
        this.reelHeight = symbolInfo.height * this.strips.length;
    }
    updateSpeedFactor(speedFactor) {
        this.speedFactor = speedFactor;
    }
    async init() {
        super.init();
        const mainGameInfo = this.mainGameInfo;
        const reels = mainGameInfo.reels;
        for (let i = 0; i < reels.height + this.nearSymbolsAmount * 2; i++) {
            const symbol = this.getSpineSymbol(0, 0);
            symbol.setScale({ x: mainGameInfo.symbol.scale });
            this.add(symbol);
            this.symbols.push(symbol);
        }
        void this.updateAnimations("idle", true);
        const stopIndex = mainGameInfo.userStats.reelStops[this.reelIndex];
        this.reelOffset = this.getReelStopOffset(stopIndex);
        this.onUpdate(1);
    }
    getSpineSymbol(x = 0, y = 0) {
        const spineControl = new app_controls_reels_SpineReelSymbol__WEBPACK_IMPORTED_MODULE_6__["default"]("symbols");
        spineControl.resetSpineOnReSkin = false;
        spineControl.container.position.set(x, y);
        return spineControl;
    }
    updateSkins(skin) {
        this.symbols.forEach(value => value.setSkin(skin));
    }
    async updateAnimations(animation, loop = true, trackIndex = 1) {
        const options = { trackIndex, loop, overrideAnimation: false, timeScale: 1 };
        await Promise.all(this.getVisibleSymbols().map(async (value) => await value.play(animation, options)));
    }
    async spin(reelSpeed) {
        this.reelStoppedPromise = app_helpers_promise_ResolvablePromise__WEBPACK_IMPORTED_MODULE_7__["default"].getResolvablePromise();
        reelSpeed = reelSpeed !== null && reelSpeed !== void 0 ? reelSpeed : res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_9__.reels.speed;
        this.ticker.add(this.onUpdate, this);
        this.speed = 0;
        const promise = app_helpers_promise_gsap_PromisableGsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(this, {
            duration: res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_9__.reel.spinDuration / this.speedFactor,
            speed: reelSpeed,
            ease: "back.in(1)",
        });
        await Promise.all(this.symbols.map(async (symbol) => {
            await symbol.play("dim_for_spin", { trackIndex: 1 });
        }).concat(promise));
        this.isInSpin = true;
        this.symbols.forEach(value => value.moveTop());
        this.strips.length = 0;
        this.strips.push(...this.originReelStrip);
        await this.reelStoppedPromise;
    }
    async moveTo(stopIndex) {
        stopIndex = stopIndex % this.strips.length;
        this.ticker.add(this.onUpdate, this);
        const reelOffset = this.getReelStopOffset(stopIndex);
        await app_helpers_promise_gsap_PromisableGsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(this, { duration: 1 / this.speedFactor, reelOffset: reelOffset, ease: "back.out(1)" });
        this.ticker.remove(this.onUpdate, this);
        this.onUpdate(1);
    }
    async forceStop(stopIndex) {
        stopIndex = stopIndex % this.strips.length;
        this.reelOffset = this.getReelStopOffset(stopIndex);
        this.onUpdate(1);
        this.speed = 0;
    }
    async stop(stopIndex, force = false) {
        stopIndex = stopIndex % this.strips.length;
        this.stopIndex = stopIndex;
        await (0,app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_5__.promiseDelay)(force ? 0 : res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_9__.reel.firstStopDelay / this.speedFactor, app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_5__.TimeUnit.sec);
        const mainGameInfo = this.mainGameInfo;
        const symbolInfo = mainGameInfo.symbol;
        const reelOffset = this.getReelStopOffset(stopIndex);
        const symbolIndex = this.getSymbolIndex(0);
        const reelHeight = symbolInfo.height * mainGameInfo.reels.height;
        const symbolOffset = this.reelOffset % symbolInfo.height;
        this.reelOffset = (reelOffset - symbolInfo.gap - reelHeight + symbolOffset) % this.reelHeight;
        for (let i = 0; i < mainGameInfo.reels.height + this.nearSymbolsAmount; i++) {
            const currentStripIndex = (stopIndex + 3 + i) % this.strips.length;
            const originStripIndex = (symbolIndex + i + this.nearSymbolsAmount) % this.originReelStrip.length;
            this.strips[currentStripIndex] = this.originReelStrip[originStripIndex];
        }
        const dtPerFrame = 1000 / 60;
        const stepsToEnd = (reelHeight * 2) / this.speed;
        this.speed = 0;
        const gapDelay = 0.75;
        const duration = ((stepsToEnd * dtPerFrame) / 1000);
        this.ticker.remove(this.onUpdate, this);
        const reelOffsetCorrection = (reelOffset % this.reelHeight) < this.reelOffset ? this.reelHeight : 0;
        const gsapPromise = app_helpers_promise_gsap_PromisableGsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(this, {
            duration: duration / gapDelay,
            reelOffset: reelOffset % this.reelHeight + reelOffsetCorrection,
            ease: this.ease,
            onUpdate: () => {
                this.onUpdate(1);
            },
        });
        await (0,app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_5__.promiseDelay)(duration, app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_5__.TimeUnit.sec);
        this.reelStoppedPromise.resolve();
        this.isInSpin = false;
        this.reelStopped.emit({ reelIndex: this.reelIndex, state: "early_stop" });
        await gsapPromise;
        this.reelOffset = reelOffset;
        this.onUpdate(1);
        this.reelStopped.emit({ reelIndex: this.reelIndex, state: "bounce_stop" });
        this.reelStopped.emit({ reelIndex: this.reelIndex, state: "fully_stop" });
    }
    getReelStopOffset(stopIndex) {
        const symbolInfo = this.mainGameInfo.symbol;
        const stripHeight = symbolInfo.height * this.strips.length;
        return stripHeight * 2 + symbolInfo.height * (stopIndex + this.nearSymbolsAmount) * -1 + symbolInfo.gap;
    }
    getSymbolSkin(symbolId) {
        const symbolData = (0,app_helpers_ObjectHelper__WEBPACK_IMPORTED_MODULE_10__.ensure)(this.mainGameInfo.symbols.find(value => value.id == symbolId), `no symbol data for symbolId: ${symbolId}`);
        const skin = (this.isInSpin ? "blur/" : "") + symbolData.name.toLowerCase();
        return skin;
    }
    getVisibleSymbols() {
        const start = this.nearSymbolsAmount;
        const end = start + this.mainGameInfo.reels.height;
        return this.symbols.slice(start, end);
    }
    getSymbolsSymbols() {
        return this.symbols.slice();
    }
    getSymbol(y) {
        return this.symbols[y + this.nearSymbolsAmount];
    }
    onUpdate(dtFactor) {
        const symbolInfo = this.mainGameInfo.symbol;
        this.reelOffset += this.speed * dtFactor;
        const reelSymbolOffset = this.reelOffset % symbolInfo.height;
        this.symbols.forEach((symbol, index) => {
            const yPosition = symbolInfo.height * (index - this.nearSymbolsAmount);
            const symbolIndex = this.getSymbolIndex(index);
            const symbolId = this.strips[symbolIndex];
            symbol.setSkin(this.getSymbolSkin(symbolId));
            symbol.updateSymbolData({ id: symbolId, symbolIndex, symbolTileIndex: index });
            symbol.container.position.y = yPosition;
            symbol.container.position.y += reelSymbolOffset;
        });
    }
    getSymbolIndex(index) {
        const symbolInfo = this.mainGameInfo.symbol;
        const stripLength = this.strips.length;
        const stripHeight = symbolInfo.height * stripLength;
        const reelStripOffset = (this.reelOffset % stripHeight) - symbolInfo.height / 2;
        const stripIndexOffset = stripLength - Math.round((reelStripOffset / stripHeight) * stripLength);
        return (stripIndexOffset + index + stripLength - this.nearSymbolsAmount * 2) % stripLength;
    }
    showDebugInfo() {
        this.symbols.forEach(value => value.showSymbolData());
    }
    hideDebugInfo() {
        this.symbols.forEach(value => value.hideSymbolData());
    }
    updateReelOffset(reelOffset) {
        const symbolInfo = this.mainGameInfo.symbol;
        const stripHeight = symbolInfo.height * this.strips.length;
        this.reelOffset = stripHeight * reelOffset;
        this.onUpdate(1);
    }
    updateSymbol(y, symbolId) {
        this.strips[(this.stopIndex + y) % this.strips.length] = symbolId;
        this.onUpdate(0);
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_2__.inject)(_pixi_ticker__WEBPACK_IMPORTED_MODULE_3__.Ticker)
], ReelControl.prototype, "ticker", void 0);


/***/ }),

/***/ "./controls/reels/ReelsBackgroundExtension.ts":
/*!****************************************************!*\
  !*** ./controls/reels/ReelsBackgroundExtension.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReelsBackgroundExtension": () => (/* binding */ ReelsBackgroundExtension)
/* harmony export */ });
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");

class ReelsBackgroundDirector {
    constructor(gameControl) {
        this.gameControl = gameControl;
        this.signals = app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals;
    }
    compose() {
        this.signals.background.show.add(this.onShow, this);
    }
    dispose() {
        this.signals.background.show.unload(this);
    }
    onShow(type) {
        switch (type) {
            case "fs":
            case "main":
                this.gameControl.setSkin(type);
        }
    }
}
class ReelsBackgroundExtension {
    init(instance) {
        this.director = new ReelsBackgroundDirector(instance);
        this.director.compose();
    }
    dispose() {
        this.director.dispose();
    }
}


/***/ }),

/***/ "./controls/reels/ReelsControl.ts":
/*!****************************************!*\
  !*** ./controls/reels/ReelsControl.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReelsControl)
/* harmony export */ });
/* harmony import */ var app_controls_MainControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/controls/MainControl */ "./controls/MainControl.ts");
/* harmony import */ var _pixi_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pixi/display */ "../node_modules/@pixi/display/lib/index.mjs");
/* harmony import */ var app_controls_reels_ReelControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/controls/reels/ReelControl */ "./controls/reels/ReelControl.ts");
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/helpers/TimeHelper */ "./helpers/TimeHelper.ts");
/* harmony import */ var app_server_service_typing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/server/service/typing */ "./server/service/typing.ts");
/* harmony import */ var app_controls_reels_SpineReelSymbol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/controls/reels/SpineReelSymbol */ "./controls/reels/SpineReelSymbol.ts");
/* harmony import */ var app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/helpers/signals/signal/Signal */ "./helpers/signals/signal/Signal.ts");
/* harmony import */ var app_controls_reels_AnticipationFrameControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/controls/reels/AnticipationFrameControl */ "./controls/reels/AnticipationFrameControl.ts");
/* harmony import */ var app_controls_extensions_SpeedFactorExtension__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/controls/extensions/SpeedFactorExtension */ "./controls/extensions/SpeedFactorExtension.ts");
/* harmony import */ var res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! res/configs/gameConfig.json */ "../resources/assets/configs/gameConfig.json");
/* harmony import */ var app_controls_motion_view_MotionLayerControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/controls/motion/view/MotionLayerControl */ "./controls/motion/view/MotionLayerControl.ts");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_controls_extensions_WildBonus2Extension__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/controls/extensions/WildBonus2Extension */ "./controls/extensions/WildBonus2Extension.ts");
/* harmony import */ var app_controls_extensions_WildBonus1Extension__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/controls/extensions/WildBonus1Extension */ "./controls/extensions/WildBonus1Extension.ts");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/lib/index.mjs");
/* harmony import */ var app_model_TextStyles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/model/TextStyles */ "./model/TextStyles.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















class ReelsControl extends app_controls_MainControl__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(mainGameInfo) {
        super();
        this.mainGameInfo = mainGameInfo;
        this.reelsContainer = new _pixi_display__WEBPACK_IMPORTED_MODULE_1__.Container();
        this.anticipationReels = [];
        this.reels = [];
        this.anticipationShown = new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_7__["default"]();
        this.signals = {
            reelStopped: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_7__["default"](),
            reelSpinStarted: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_7__["default"](),
            reelStopStarted: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_7__["default"](),
        };
        this.speedFactor = 1;
        this.anticipationFrame = new app_controls_reels_AnticipationFrameControl__WEBPACK_IMPORTED_MODULE_8__["default"](mainGameInfo);
        this.addExtension(new app_controls_extensions_SpeedFactorExtension__WEBPACK_IMPORTED_MODULE_9__["default"]());
        this.addExtension(new app_controls_extensions_WildBonus1Extension__WEBPACK_IMPORTED_MODULE_14__["default"]());
        this.addExtension(new app_controls_extensions_WildBonus2Extension__WEBPACK_IMPORTED_MODULE_13__["default"]());
    }
    updateSpeedFactor(speedFactor) {
        this.speedFactor = speedFactor;
    }
    init() {
        super.init();
        const mainGameInfo = this.mainGameInfo;
        const reels = mainGameInfo.reels;
        for (let i = 0; i < reels.amount; i++) {
            const reelControl = new app_controls_reels_ReelControl__WEBPACK_IMPORTED_MODULE_2__["default"](i, mainGameInfo);
            reelControl.addExtension(new app_controls_extensions_SpeedFactorExtension__WEBPACK_IMPORTED_MODULE_9__["default"]());
            reelControl.name(`reel_${i}`);
            this.reels.push(reelControl);
        }
        this.container.addChild(this.reelsContainer);
        this.add(this.anticipationFrame);
        this.anticipationFrame.moveOnReel(0);
        this.anticipationFrame.hide().then();
    }
    updateSkins(skin) {
        this.reels.forEach(value => {
            value.updateSkins(skin);
        });
    }
    stopAllSymbols() {
        this.reels.map(async (value) => {
            value.getVisibleSymbols().forEach(value1 => {
                value1.stop().name("idle");
            });
        });
    }
    async updateAnimation(animation, loop = true, trackIndex = 1) {
        await Promise.all(this.reels.map(async (value) => {
            await value.updateAnimations(animation, loop, trackIndex);
        }));
    }
    async spin(speed) {
        this.clearSymbols();
        await Promise.all(this.reels.map(async (reel, index) => {
            await (0,app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_4__.promiseDelay)((res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_10__.reels.spinDelay * index) / this.speedFactor, app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_4__.TimeUnit.sec);
            this.signals.reelSpinStarted.emit(index);
            await reel.spin(speed);
            this.signals.reelStopped.emit(index);
        }));
    }
    async forceStop(reelStops) {
        this.reels.forEach((reel, index) => {
            reel.forceStop(reelStops[index]);
        });
    }
    async stop(reelStops) {
        await Promise.all(this.reels.map(async (reel, index) => {
            const delay = this.anticipationReels.filter((value, i) => i <= index)
                .map(value => value == 0 ? res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_10__.reels.stopDelay : res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_10__.reels.anticipationDelay)
                .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
            await (0,app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_4__.promiseDelay)(delay, app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_4__.TimeUnit.sec);
            reel.reelStopped.promise().then(this.showAnticipationReel.bind(this));
            this.signals.reelStopStarted.emit(index);
            await reel.stop(reelStops[index]);
        }));
    }
    async showScatterWins(scatterWins) {
        await Promise.all(scatterWins.map(async (win) => {
            if (win.symbolId == app_server_service_typing__WEBPACK_IMPORTED_MODULE_5__.TSymbolId.BONUS) {
                await this.showBonusScattersWin(win);
            }
            await Promise.all(win.symbols.map(async (symbol) => {
                await this.reels[symbol.x].getSymbol(symbol.y).moveTop().play("undim", { timeScale: 4 });
                await this.reels[symbol.x].getSymbol(symbol.y).moveTop().play("win", { timeScale: 2 });
            }));
        }));
    }
    async showBonusScattersWin(bonusWin) {
        const wins = bonusWin.symbols.map(symbol => {
            const symbolContainer = this.getSymbol({ x: symbol.x, y: symbol.y }).container;
            const globalPosition = symbolContainer.getGlobalPosition();
            return { position: globalPosition, winnings: bonusWin.win };
        });
        await app_model_GameModel__WEBPACK_IMPORTED_MODULE_3__["default"].game.signals.ui.balance.showCashReplenishment.emit(wins).all();
    }
    async showLineWins(wins) {
        if (wins.length == 0) {
            return;
        }
        const winSymbols = this.getWinSymbols(wins);
        await Promise.all(winSymbols.map(async (symbol) => symbol.symbol.moveTop().play("undim", { timeScale: 4 })));
        await Promise.all(winSymbols.map(async (symbol) => symbol.symbol.moveTop().play("win", { timeScale: 2 })));
    }
    updateSymbol(symbolPosition, symbolId) {
        this.reels[symbolPosition.x].updateSymbol(symbolPosition.y, symbolId);
    }
    clearSymbols() {
        this.reels.forEach(reel => {
            reel.getVisibleSymbols().forEach(symbol => symbol.removeAdditionalInfo());
        });
    }
    getWinSymbols(wins) {
        const cache = [];
        const result = [];
        wins.forEach(win => {
            this.mainGameInfo.lines[win.lineId].forEach((lineOffset, index) => {
                if (index < win.symbolsAmount) {
                    const symbol = this.reels[index].getSymbol(lineOffset);
                    if (!cache.includes(symbol)) {
                        cache.push(symbol);
                        result.push({
                            symbol,
                            position: { x: index, y: lineOffset },
                            symbolId: win.symbolId,
                        });
                    }
                }
            });
        });
        return result;
    }
    async undimAllSymbols() {
        await this.reels.map(async (reel) => {
            await reel.getSymbolsSymbols()
                .map(async (symbol) => {
                const isSpecial = symbol.getSkin() == "wild" || symbol.getSkin() == "scatter";
                const ignore = symbol.getCurrentAnimation(1) == "dim_for_spin" && isSpecial;
                const timeScale = ignore ? 100 : this.speedFactor;
                await symbol.play("undim", { overrideAnimation: false, timeScale: timeScale, trackIndex: 1 });
            }).promise().all();
        }).promise().all();
    }
    async dimAllSymbols(except) {
        await this.reels.map(async (reel, x) => {
            await reel.getSymbolsSymbols()
                .filter((symbol, y) => {
                if (except == null) {
                    return true;
                }
                return except.find(pos => pos.x == x && pos.y == y - reel.nearSymbolsAmount) == null;
            })
                .map(async (symbol) => {
                const isSpecial = symbol.getSkin() == "wild" || symbol.getSkin() == "scatter";
                const ignore = symbol.getCurrentAnimation(1) == "dim_for_spin" && !isSpecial;
                const timeScale = ignore ? 100 : this.speedFactor;
                await symbol.play("dim", { overrideAnimation: false, timeScale: timeScale, trackIndex: 1 });
            }).promise().all();
        }).promise().all();
    }
    async dimSpecificSymbols(symbols) {
        await this.updateSymbols(symbols, "dim");
    }
    async undimSpecificSymbols(symbols) {
        await this.updateSymbols(symbols, "undim");
    }
    async updateSymbols(symbols, animation) {
        await this.reels.map(async (reel, x) => {
            await reel.getVisibleSymbols()
                .filter((symbol, y) => {
                return symbols.find(pos => pos.x == x && pos.y == y) !== undefined;
            })
                .map(async (symbol) => {
                const isSpecial = symbol.getSkin() == "wild" || symbol.getSkin() == "scatter";
                const ignore = symbol.getCurrentAnimation(1) == "dim_for_spin" && isSpecial;
                const timeScale = ignore ? 100 : this.speedFactor;
                await symbol.play(animation, { overrideAnimation: false, timeScale: timeScale, trackIndex: 1 });
            }).promise().all();
        }).promise().all();
    }
    async showWinValue(winElem) {
        await this.reels.map(async (reel, x) => {
            await reel.getVisibleSymbols()
                .filter((elem, y) => {
                return winElem.symbol.x == x && winElem.symbol.y == y;
            })
                .map(async (elem) => {
                const winValue = new app_controls_reels_SpineReelSymbol__WEBPACK_IMPORTED_MODULE_6__["default"]("symbols");
                winValue.setSkin("winlabel");
                const winText1 = new pixi_js__WEBPACK_IMPORTED_MODULE_15__.BitmapText("$" + winElem.win, { fontName: "win_counter", fontSize: 24 });
                const winText = new pixi_js__WEBPACK_IMPORTED_MODULE_15__.Text("$" + winElem.win, app_model_TextStyles__WEBPACK_IMPORTED_MODULE_16__["default"].TITLE);
                winText1.anchor.set(0.5, 6);
                winText.anchor.set(0.5, 1.9);
                winValue.addAdditionalInfo(winText1);
                const container = winValue.getContainer();
                container.position.y += container.height / 2;
                elem.addAdditionalInfo(container);
            }).promise().all();
        }).promise().all();
    }
    async hideWinValue(symbol) {
        await this.reels.map(async (reel, x) => {
            await reel.getVisibleSymbols()
                .filter((elem, y) => {
                return symbol.x == x && symbol.y == y;
            })
                .map(async (elem) => {
                elem.removeAdditionalInfo();
            }).promise().all();
        }).promise().all();
    }
    async setWinValue(winElem) {
        await this.showWinValue(winElem);
    }
    async removeWinValue(symbol) {
        await this.hideWinValue(symbol);
    }
    showDebugInfo() {
        this.reels.forEach(value => value.showDebugInfo());
    }
    hideDebugInfo() {
        this.reels.forEach(value => value.hideDebugInfo());
    }
    async playSymbolAnimation(payload, resolve) {
        var _a;
        await this.reels[payload.x].getSymbol(payload.y).play(payload.animation, { trackIndex: (_a = payload.track) !== null && _a !== void 0 ? _a : 2 });
        resolve === null || resolve === void 0 ? void 0 : resolve();
    }
    setAnticipationReels(reels) {
        this.anticipationReels.length = 0;
        this.anticipationReels.push(...reels);
    }
    async showAnticipationReel(payload) {
        const reelIndex = payload.reelIndex;
        if (payload.state == "early_stop") {
            await this.anticipationFrame.hide();
            if (this.anticipationReels[reelIndex + 1] == 1) {
                this.anticipationFrame.moveOnReel(reelIndex + 1);
                this.anticipationShown.emit(reelIndex + 1);
                await this.anticipationFrame.show();
            }
        }
    }
    getSymbol(pos) {
        return this.reels[pos.x].getSymbol(pos.y);
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_12__.inject)(app_controls_motion_view_MotionLayerControl__WEBPACK_IMPORTED_MODULE_11__["default"])
], ReelsControl.prototype, "motionLayer", void 0);


/***/ }),

/***/ "./controls/reels/SpineReelSymbol.ts":
/*!*******************************************!*\
  !*** ./controls/reels/SpineReelSymbol.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SpineReelSymbol)
/* harmony export */ });
/* harmony import */ var app_controls_SpineControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/controls/SpineControl */ "./controls/SpineControl.ts");
/* harmony import */ var _pixi_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pixi/text */ "../node_modules/@pixi/text/lib/index.mjs");
/* harmony import */ var app_model_TextStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/model/TextStyles */ "./model/TextStyles.ts");
/* harmony import */ var _pixi_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pixi/display */ "../node_modules/@pixi/display/lib/index.mjs");




class SpineReelSymbol extends app_controls_SpineControl__WEBPACK_IMPORTED_MODULE_0__.TypingSpineControl {
    constructor() {
        super(...arguments);
        this.id = -1;
        this.label = new _pixi_text__WEBPACK_IMPORTED_MODULE_1__.Text("asd", app_model_TextStyles__WEBPACK_IMPORTED_MODULE_2__["default"].SYMBOL_DEV_INFO);
        this.symbolData = { id: -1, symbolIndex: -1, symbolTileIndex: -1 };
    }
    updateSymbolData(data) {
        this.symbolData = data;
        this.label.text =
            `id:${this.symbolData.id}
idx:${this.symbolData.symbolIndex}
tidx:${this.symbolData.symbolTileIndex}`;
    }
    getSymbolData() {
        return {
            ...this.symbolData,
        };
    }
    showSymbolData() {
        this.container.addChild(this.label);
        this.label.anchor.set(0.5, 0.5);
    }
    hideSymbolData() {
        var _a;
        (_a = this.label.parent) === null || _a === void 0 ? void 0 : _a.removeChild(this.label);
    }
    update(dt) {
        super.update(dt);
        if (this.label.parent != undefined) {
            this.updateSymbolData(this.symbolData);
        }
    }
    removeAdditionalInfo() {
        this.replace("label", new _pixi_display__WEBPACK_IMPORTED_MODULE_3__.Container());
    }
    addAdditionalInfo(container) {
        this.replace("label", container);
    }
    getLabelContainer() {
        const labelContainer = this.getSlotContainer("label");
        if (!labelContainer) {
            throw new Error("labelContainer is not found");
        }
        return labelContainer;
    }
    getContainer() {
        return this.container;
    }
}


/***/ }),

/***/ "./controls/ui/BalanceControl.ts":
/*!***************************************!*\
  !*** ./controls/ui/BalanceControl.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BalanceControl)
/* harmony export */ });
/* harmony import */ var _pixi_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pixi/display */ "../node_modules/@pixi/display/lib/index.mjs");
/* harmony import */ var app_model_TextStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/model/TextStyles */ "./model/TextStyles.ts");
/* harmony import */ var app_controls_ui_LabelControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/controls/ui/LabelControl */ "./controls/ui/LabelControl.ts");
/* harmony import */ var app_model_CurrencyFormatterHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/model/CurrencyFormatterHelper */ "./model/CurrencyFormatterHelper.ts");
/* harmony import */ var app_controls_ui_extensions_BalanceReplenishmentVisualsExtension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/controls/ui/extensions/BalanceReplenishmentVisualsExtension */ "./controls/ui/extensions/BalanceReplenishmentVisualsExtension.ts");





class BalanceControl extends app_controls_ui_LabelControl__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(title) {
        super(new _pixi_display__WEBPACK_IMPORTED_MODULE_0__.Container(), {
            titleStyle: app_model_TextStyles__WEBPACK_IMPORTED_MODULE_1__["default"].LABEL_TITLE_STYLE,
            valueStyle: app_model_TextStyles__WEBPACK_IMPORTED_MODULE_1__["default"].LABEL_TEXT_STYLE,
            title: title,
            initialValue: 100,
            innerPadding: 0.1,
        });
        this.title = title;
    }
    init() {
        super.init();
        this.addExtension(new app_controls_ui_extensions_BalanceReplenishmentVisualsExtension__WEBPACK_IMPORTED_MODULE_4__.BalanceReplenishmentVisualsExtension());
    }
    dispose() {
        super.dispose();
    }
    setValue(value) {
        this.labelValue.text = `${app_model_CurrencyFormatterHelper__WEBPACK_IMPORTED_MODULE_3__["default"].format(value)} `;
    }
}


/***/ }),

/***/ "./controls/ui/LabelControl.ts":
/*!*************************************!*\
  !*** ./controls/ui/LabelControl.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LabelControl)
/* harmony export */ });
/* harmony import */ var app_controls_MainControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/controls/MainControl */ "./controls/MainControl.ts");
/* harmony import */ var _pixi_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pixi/text */ "../node_modules/@pixi/text/lib/index.mjs");
/* harmony import */ var app_model_TextStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/model/TextStyles */ "./model/TextStyles.ts");



class LabelControl extends app_controls_MainControl__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(container, opt) {
        var _a, _b;
        super(container);
        this.value = 0;
        opt.initialValue = (_a = opt.initialValue) !== null && _a !== void 0 ? _a : 0;
        const innerPadding = (_b = opt.innerPadding) !== null && _b !== void 0 ? _b : 0;
        this.labelTitle = new _pixi_text__WEBPACK_IMPORTED_MODULE_1__.Text(opt.title, app_model_TextStyles__WEBPACK_IMPORTED_MODULE_2__["default"].LABEL_TITLE_STYLE);
        this.labelValue = new _pixi_text__WEBPACK_IMPORTED_MODULE_1__.Text(`$ ${this.value}`, app_model_TextStyles__WEBPACK_IMPORTED_MODULE_2__["default"].LABEL_TEXT_STYLE);
        this.labelTitle.anchor.set(0.5, 0 - innerPadding);
        this.labelValue.anchor.set(0.5, 1 + innerPadding);
        this.labelTitle.position.y = -40;
        this.labelValue.position.y = 25;
        this.setValue(opt.initialValue);
    }
    init() {
        super.init();
        this.container.addChild(this.labelTitle, this.labelValue);
        const boundsWidth = 130;
        const boundsHeight = (boundsWidth * 1082) / 1920;
        this.setBounds(boundsWidth, boundsHeight);
    }
    dispose() {
        this.container.removeChildren();
        super.dispose();
    }
    setTitle(title) {
        this.labelTitle.text = title;
    }
    setValue(value) {
        this.labelValue.text = `$ ${value.toFixed(2)}`;
    }
}


/***/ }),

/***/ "./controls/ui/TotalBetControl.ts":
/*!****************************************!*\
  !*** ./controls/ui/TotalBetControl.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TotalBetControl)
/* harmony export */ });
/* harmony import */ var _pixi_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pixi/display */ "../node_modules/@pixi/display/lib/index.mjs");
/* harmony import */ var app_model_TextStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/model/TextStyles */ "./model/TextStyles.ts");
/* harmony import */ var app_controls_ui_LabelControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/controls/ui/LabelControl */ "./controls/ui/LabelControl.ts");
/* harmony import */ var app_model_CurrencyFormatterHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/model/CurrencyFormatterHelper */ "./model/CurrencyFormatterHelper.ts");




class TotalBetControl extends app_controls_ui_LabelControl__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(title) {
        super(new _pixi_display__WEBPACK_IMPORTED_MODULE_0__.Container(), {
            titleStyle: app_model_TextStyles__WEBPACK_IMPORTED_MODULE_1__["default"].LABEL_TITLE_STYLE,
            valueStyle: app_model_TextStyles__WEBPACK_IMPORTED_MODULE_1__["default"].LABEL_TEXT_STYLE,
            title: title,
            initialValue: 100,
            innerPadding: 0.1,
        });
        this.title = title;
    }
    setValue(value) {
        this.labelValue.text = `${app_model_CurrencyFormatterHelper__WEBPACK_IMPORTED_MODULE_3__["default"].format(value)}`;
    }
}


/***/ }),

/***/ "./controls/ui/WinControl.ts":
/*!***********************************!*\
  !*** ./controls/ui/WinControl.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WinControl)
/* harmony export */ });
/* harmony import */ var _pixi_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pixi/display */ "../node_modules/@pixi/display/lib/index.mjs");
/* harmony import */ var app_model_TextStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/model/TextStyles */ "./model/TextStyles.ts");
/* harmony import */ var app_controls_ui_LabelControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/controls/ui/LabelControl */ "./controls/ui/LabelControl.ts");
/* harmony import */ var app_model_CurrencyFormatterHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/model/CurrencyFormatterHelper */ "./model/CurrencyFormatterHelper.ts");




class WinControl extends app_controls_ui_LabelControl__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(title) {
        super(new _pixi_display__WEBPACK_IMPORTED_MODULE_0__.Container(), {
            titleStyle: app_model_TextStyles__WEBPACK_IMPORTED_MODULE_1__["default"].LABEL_TITLE_STYLE,
            valueStyle: app_model_TextStyles__WEBPACK_IMPORTED_MODULE_1__["default"].LABEL_TEXT_STYLE,
            title: title,
            initialValue: 0,
            innerPadding: 0.1,
        });
        this.title = title;
    }
    setValue(balance) {
        this.labelValue.text = balance === 0 ? "" : `${app_model_CurrencyFormatterHelper__WEBPACK_IMPORTED_MODULE_3__["default"].format(balance)} `;
    }
}


/***/ }),

/***/ "./controls/ui/extensions/BalanceReplenishmentVisualsExtension.ts":
/*!************************************************************************!*\
  !*** ./controls/ui/extensions/BalanceReplenishmentVisualsExtension.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BalanceReplenishmentVisualsExtension": () => (/* binding */ BalanceReplenishmentVisualsExtension)
/* harmony export */ });
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var app_controls_CoinControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/controls/CoinControl */ "./controls/CoinControl.ts");
/* harmony import */ var _pixi_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pixi/display */ "../node_modules/@pixi/display/lib/index.mjs");
/* harmony import */ var app_helpers_math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/helpers/math */ "./helpers/math.ts");
/* harmony import */ var app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/helpers/TimeHelper */ "./helpers/TimeHelper.ts");
/* harmony import */ var app_helpers_promise_ResolvablePromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/helpers/promise/ResolvablePromise */ "./helpers/promise/ResolvablePromise.ts");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gsap */ "../node_modules/gsap/index.js");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_model_UserModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/model/UserModel */ "./model/UserModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









class BalanceReplenishmentVisualsExtension {
    constructor() {
        this.winnings = 0;
    }
    init(instance) {
        this.balanceControl = instance;
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals.ui.balance.showCashReplenishment.add(this.onShowCashReplenishment, this);
    }
    dispose() {
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals.ui.balance.showCashReplenishment.unload(this);
    }
    async onShowCashReplenishment(cashSources, resolve) {
        await cashSources.map(async (cashSource, index) => {
            const promises = [];
            const coinsCount = this.calculateCoinsCount(cashSource.winnings);
            for (let i = 0; i < coinsCount; i++) {
                const coinControl = new app_controls_CoinControl__WEBPACK_IMPORTED_MODULE_1__["default"]();
                this.balanceControl.add(coinControl);
                const startPoint = new _pixi_display__WEBPACK_IMPORTED_MODULE_2__.Container();
                const randomOffset = (0,app_helpers_math__WEBPACK_IMPORTED_MODULE_3__.randomPointOnUnitCircle)().scale(50 + 70 * Math.random());
                const localCoords = startPoint.toLocal(cashSource.position);
                startPoint.position.set(localCoords.x + randomOffset.x, localCoords.y + randomOffset.y);
                promises.push(coinControl.animate(startPoint, this.balanceControl.container));
                await (0,app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_4__.promiseDelay)(20 + Math.round(Math.random() * 50), app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_4__.TimeUnit.mls);
            }
            if (index == 0) {
                await Promise.race(promises);
                const totalWinnings = cashSources.length * cashSource.winnings;
                this.animateBalanceLabel({
                    winnings: totalWinnings,
                    duration: 1,
                }).then();
            }
            await Promise.all(promises);
        }).promise().all();
        resolve && resolve();
    }
    animateBalanceLabel(props) {
        const balanceSignals = app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals.ui.balance;
        balanceSignals.startBalanceAnimation.emit();
        const resolvablePromise = app_helpers_promise_ResolvablePromise__WEBPACK_IMPORTED_MODULE_5__["default"].getResolvablePromise();
        const winnings = props.winnings;
        this.tween = gsap__WEBPACK_IMPORTED_MODULE_8__["default"].to(this, props.duration, {
            winnings,
            onUpdate: this.tick,
            onComplete: () => {
                this.winnings = 0;
                this.clear();
                balanceSignals.balanceChangesDisplayed.emit();
                resolvablePromise.resolve();
            },
            callbackScope: this,
        });
        return resolvablePromise;
    }
    tick() {
        this.balanceControl.setValue(this.userModel.getCurrentBalance() + this.winnings);
    }
    clear() {
        if (this.tween) {
            this.tween.kill();
        }
    }
    calculateCoinsCount(winnings) {
        if (winnings <= 0) {
            return 0;
        }
        else if (winnings == 1) {
            return 3;
        }
        else if (winnings < 10) {
            return 10;
        }
        return 20;
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_6__.inject)(app_model_UserModel__WEBPACK_IMPORTED_MODULE_7__["default"])
], BalanceReplenishmentVisualsExtension.prototype, "userModel", void 0);


/***/ }),

/***/ "./dev/DevController.ts":
/*!******************************!*\
  !*** ./dev/DevController.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DevController)
/* harmony export */ });
/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dat.gui */ "../node_modules/dat.gui/build/dat.gui.module.js");
/* harmony import */ var app_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/Main */ "./Main.ts");
/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stats.js */ "../node_modules/stats.js/build/stats.min.js");
/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(stats_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_dev_tools_GeneralDevTool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/dev/tools/GeneralDevTool */ "./dev/tools/GeneralDevTool.ts");
/* harmony import */ var app_dev_tools_SoundDevTool__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/dev/tools/SoundDevTool */ "./dev/tools/SoundDevTool.ts");
/* harmony import */ var app_dev_tools_GameLayoutDevTool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/dev/tools/GameLayoutDevTool */ "./dev/tools/GameLayoutDevTool.ts");
/* harmony import */ var app_dev_tools_HotKeyDevTool__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/dev/tools/HotKeyDevTool */ "./dev/tools/HotKeyDevTool.ts");
/* harmony import */ var app_dev_tools_SceneDevTool__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/dev/tools/SceneDevTool */ "./dev/tools/SceneDevTool.ts");








class DevController {
    constructor() {
        this.stats = new (stats_js__WEBPACK_IMPORTED_MODULE_2___default())();
        this.setupStats();
        const gui = new dat_gui__WEBPACK_IMPORTED_MODULE_0__.GUI();
        if (true) {
            new app_dev_tools_GeneralDevTool__WEBPACK_IMPORTED_MODULE_3__.GeneralDevTool(gui);
            new app_dev_tools_SoundDevTool__WEBPACK_IMPORTED_MODULE_4__.SoundDevTool(gui);
            new app_dev_tools_GameLayoutDevTool__WEBPACK_IMPORTED_MODULE_5__["default"](gui);
        }
        new app_dev_tools_SceneDevTool__WEBPACK_IMPORTED_MODULE_7__.SceneDevTool(gui);
        new app_dev_tools_HotKeyDevTool__WEBPACK_IMPORTED_MODULE_6__["default"](this.stats);
    }
    setupStats() {
        const stats = this.stats;
        stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
        document.body.appendChild(stats.dom);
        app_Main__WEBPACK_IMPORTED_MODULE_1__.Main.APP.ticker.add(() => {
            stats.update();
        });
    }
}


/***/ }),

/***/ "./dev/DevPixiInit.ts":
/*!****************************!*\
  !*** ./dev/DevPixiInit.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "devPixiInit": () => (/* binding */ devPixiInit)
/* harmony export */ });
function devPixiInit(app) {
    if (true) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        globalThis.__PIXI_APP__ = app;
    }
    return app;
}


/***/ }),

/***/ "./dev/HotKeyTool.ts":
/*!***************************!*\
  !*** ./dev/HotKeyTool.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": () => (/* binding */ Action),
/* harmony export */   "default": () => (/* binding */ HotKeyTool)
/* harmony export */ });
/* eslint-disable */
class HotKeyTool {
    constructor() {
        this.actions = new Map();
        this.isDevice = eval("(navigator.maxTouchPoints || 'ontouchstart' in document.documentElement)") != false;
        if (this.isDevice) {
            // new HotKeyPanel(actions).activateTouchScreen();
        }
        // new ErrorsConsole().activateScreen();
        this.activateHotKeys();
        this.initSystemHotkeys();
    }
    /**
     * @deprecated Only for dev debugging. remove in release packages;
     */
    static get instance() {
        if (!this._instance) {
            this._instance = new HotKeyTool();
        }
        return this._instance;
    }
    activateHotKeys() {
        document.addEventListener("keypress", (event) => {
            this.onkeypress(event);
        });
    }
    initSystemHotkeys() {
        const unRegisterFunctionalKeys = () => {
            for (let i = 0; i < 10; i++) {
                this.unregisterOnKey(`${i}`);
            }
            this.unregisterOnKey(" ");
        };
        if (!this.isDevice) {
            this.registerOnKey("`", () => {
                // new HotKeyPanel(actions).activateTouchScreen();
                // new ErrorsConsole().activateScreen();
                this.unregisterOnKey("`");
                this.registerOnKey("`", () => {
                }, "Show FPS meter");
            }, "activate touch screen");
        }
        this.registerOnKey("F10", this.dispatchKeyBoardDownEvent.bind(this, { keyCode: 121 }), "TODO: Show Fps graph tool");
        this.registerOnKey("Alt + i", this.dispatchKeyBoardDownEvent.bind(this, {
            keyCode: 73,
            altKey: true,
        }), "Show elements inspector");
        this.registerOnKey("d", unRegisterFunctionalKeys.bind(this), "UNREGISTER SYSTEM KEYS");
        this.registerOnKey("~", this.showAllPopupWithHotKeysDescriptions.bind(this), "Show popup with hot keys descriptions");
    }
    dispatchKeyBoardDownEvent(eventData) {
        const e = new KeyboardEvent("keydown", eventData);
        document.body.dispatchEvent(e);
        window.dispatchEvent(e);
    }
    showAllPopupWithHotKeysDescriptions() {
        const allActions = [];
        for (const actions of Array.from(this.actions.values())) {
            for (const action of actions) {
                allActions.push(action);
            }
        }
        while (allActions.length > 0) {
            const actions = allActions.splice(0, 23);
            if (!this.showPopupWithActionsDescription(actions)) {
                return;
            }
        }
    }
    showPopupWithActionsDescription(actions) {
        let message = "Actual reserved hot keys:\n";
        for (const action of actions) {
            message += `• ${action.key} : ${action.description}\n`;
        }
        return window.confirm(message);
    }
    unregisterOnKey(key) {
        if (this.actions.has(key)) {
            this.actions.delete(key);
        }
    }
    unRegisterOnKeyCode(keyCode) {
        const key = this.getKeyCode(keyCode);
        if (this.actions.has(key)) {
            this.actions.delete(key);
        }
    }
    registerOnKeyCode(keyCode, action, description = "Empty description") {
        const key = this.getKeyCode(keyCode);
        if (!this.actions.has(key)) {
            this.actions.set(key, []);
        }
        this.actions.get(key).push(new Action(action, description, key, keyCode));
    }
    getKeyCode(keyCode) {
        return `keyCode_${keyCode}`;
    }
    registerOnKey(key, action, description = "Empty description") {
        const theSameAction = this.getActionByKeyAndDescription(key, description);
        if (!this.actions.has(key)) {
            this.actions.set(key, []);
        }
        const actions = this.actions.get(key);
        if (theSameAction != null && actions) {
            // this.actions.get(key)!.remove(theSameAction);
            const startIndex = actions.indexOf(theSameAction);
            startIndex >= 0 && actions.splice(startIndex);
            const bindedAction = () => {
                theSameAction.action.call(this);
                action.call(this);
            };
            actions.push(new Action(bindedAction, description, key));
        }
        else {
            actions.push(new Action(action, description, key));
        }
    }
    getActionByKeyAndDescription(key, description) {
        let result = null;
        const actions = this.actions.get(key);
        if (actions) {
            for (const action of actions) {
                if (action.description == description) {
                    result = action;
                    break;
                }
            }
        }
        return result;
    }
    onkeypress(e) {
        console.log(`GC::HotKeyTool:
                \te.ctrlKey: ${e.ctrlKey}
                \te.altKey: ${e.altKey}
                \te.shiftKey: ${e.shiftKey}
                \te.charCode: ${e.charCode}
                \te.keyCode: ${e.keyCode}
                \te.key: ${e.key}
                \te.repeat: ${e.repeat}
            `);
        this.call(e.key);
        this.call(this.getKeyCode(e.keyCode));
    }
    unRegisterFunctionalKeys() {
        this.call("e");
    }
    call(key) {
        const actions = this.actions.get(key);
        if (actions) {
            for (const action of actions) {
                if (action.action != null) {
                    action.action.call(this);
                }
            }
        }
    }
}
class Action {
    constructor(action, description, key, keyCode) {
        this.action = action;
        this.description = description;
        this.key = key;
        this.keyCode = keyCode;
    }
}


/***/ }),

/***/ "./dev/tools/GameLayoutDevTool.ts":
/*!****************************************!*\
  !*** ./dev/tools/GameLayoutDevTool.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameLayoutDevTool)
/* harmony export */ });
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");

// noinspection JSUnusedGlobalSymbols
class GameLayoutDevTool {
    constructor(gui) {
        gui.add({
            gameLayoutUpdate: () => {
                window.dispatchEvent(new Event("resize"));
            },
            gameLayoutTest: () => {
                app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].updateLayout.emit({
                    height: 800,
                    width: 600,
                    scale: 2,
                    isPortrait: false,
                    centerPosition: { x: 400, y: 300 },
                });
            },
        }, "gameLayoutUpdate");
    }
}


/***/ }),

/***/ "./dev/tools/GeneralDevTool.ts":
/*!*************************************!*\
  !*** ./dev/tools/GeneralDevTool.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralDevTool": () => (/* binding */ GeneralDevTool)
/* harmony export */ });
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");

// noinspection JSUnusedGlobalSymbols
class GeneralDevTool {
    constructor(gui) {
        const generalGui = gui.addFolder("general");
        generalGui.add({ version: "0.0.1" }, "version");
        generalGui.add({
            play: () => {
                app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].pauseGame.emit({ pause: false });
            },
        }, "play");
        generalGui.add({
            pause: () => {
                app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].pauseGame.emit({ pause: true });
            },
        }, "pause");
    }
}


/***/ }),

/***/ "./dev/tools/HotKeyDevTool.ts":
/*!************************************!*\
  !*** ./dev/tools/HotKeyDevTool.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HotKeyDevTool)
/* harmony export */ });
/* harmony import */ var app_dev_HotKeyTool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/dev/HotKeyTool */ "./dev/HotKeyTool.ts");
/* harmony import */ var app_layoutManager_DevPixiDrawLayoutPlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/layoutManager/DevPixiDrawLayoutPlugin */ "./layoutManager/DevPixiDrawLayoutPlugin.ts");
/* harmony import */ var app_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/Main */ "./Main.ts");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_layoutManager_LayoutManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layoutManager/LayoutManager */ "./layoutManager/LayoutManager.ts");





// noinspection JSUnusedGlobalSymbols
class HotKeyDevTool {
    constructor(stats) {
        this.stats = stats;
        const hotKeyTool = app_dev_HotKeyTool__WEBPACK_IMPORTED_MODULE_0__["default"].instance;
        const devPixiDrawLayoutPlugin = new app_layoutManager_DevPixiDrawLayoutPlugin__WEBPACK_IMPORTED_MODULE_1__["default"](app_Main__WEBPACK_IMPORTED_MODULE_2__.Main.APP.stage);
        hotKeyTool.registerOnKey("D", () => {
            hotKeyTool.registerOnKey("1", () => {
                this.stats.dom.style.opacity = this.stats.dom.style.opacity == "0.9" ? "0.2" : "0.9";
            }, "stats visibility");
            hotKeyTool.registerOnKey("2", () => {
                const layoutManager = app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__["default"].resolve(app_layoutManager_LayoutManager__WEBPACK_IMPORTED_MODULE_4__["default"]);
                if (layoutManager.hasPlugin(devPixiDrawLayoutPlugin)) {
                    layoutManager.removePlugin(devPixiDrawLayoutPlugin);
                }
                else {
                    layoutManager.addPlugin(devPixiDrawLayoutPlugin);
                }
            }, "show layouts");
        }, "dev tools");
    }
}


/***/ }),

/***/ "./dev/tools/SceneDevTool.ts":
/*!***********************************!*\
  !*** ./dev/tools/SceneDevTool.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var res_hooks_hooks_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SceneDevTool": () => (/* binding */ SceneDevTool)
/* harmony export */ });
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var app_utils_DevToolUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/utils/DevToolUtils */ "./utils/DevToolUtils.ts");
/* harmony import */ var app_scenes_SceneManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/scenes/SceneManager */ "./scenes/SceneManager.ts");
/* harmony import */ var app_scenes_subscenes_ReelScene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/scenes/subscenes/ReelScene */ "./scenes/subscenes/ReelScene.ts");
/* harmony import */ var res_hooks_hooks_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! res/hooks/hooks.json */ "../resources/assets/hooks/hooks.json");
/* harmony import */ var app_dev_tools_SymbolsDevTool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/dev/tools/SymbolsDevTool */ "./dev/tools/SymbolsDevTool.ts");






// noinspection JSUnusedGlobalSymbols
class SceneDevTool {
    constructor(gui) {
        this.gui = gui;
        app_scenes_SceneManager__WEBPACK_IMPORTED_MODULE_2__["default"].SIGNALS.SCENE.ACTIVATED.add(value => {
            switch (value.constructor) {
                case app_scenes_subscenes_ReelScene__WEBPACK_IMPORTED_MODULE_3__["default"]: {
                    this.setupReelScene(gui, value);
                    break;
                }
            }
        });
        app_scenes_SceneManager__WEBPACK_IMPORTED_MODULE_2__["default"].SIGNALS.SCENE.DIACTIVATED.add(() => {
            this.sceneFolder && gui.removeFolder(this.sceneFolder);
            this.sceneFolder = undefined;
        });
    }
    setupReelScene(gui, scene) {
        const self = this;
        let hookName = "";
        const updateHook = () => {
            var _a, _b;
            const hookList = /*#__PURE__*/ (res_hooks_hooks_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache || (res_hooks_hooks_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache = __webpack_require__.t(res_hooks_hooks_json__WEBPACK_IMPORTED_MODULE_4__, 2)))[hookName];
            const value = (_a = hookList.shift()) !== null && _a !== void 0 ? _a : [];
            hookList.push(value);
            force.hook = JSON.stringify(value);
            app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].mainGameInfo.hook = JSON.parse(force.hook);
            (_b = this.sceneFolder) === null || _b === void 0 ? void 0 : _b.updateDisplay();
        };
        app_scenes_SceneManager__WEBPACK_IMPORTED_MODULE_2__["default"].SIGNALS.SCENE.DIACTIVATED.addOnce(() => {
            app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals.spinComplete.remove(updateHook);
        }, this);
        const getPopupActions = (signals, payload) => {
            const result = {
                payload,
                showPopup: () => {
                    signals.show.emit(result.payload);
                },
                hidePopup: () => {
                    signals.hide.emit();
                },
            };
            return result;
        };
        const popups = {
            intro: getPopupActions(app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals.popup.fsIntro, 10),
            outro: getPopupActions(app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals.popup.fsOutro, 10000),
            winCounter: getPopupActions(app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals.popup.winCounter, 100500.100500),
            lowWinCounter: getPopupActions(app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals.popup.winCounter, 10),
        };
        const symbols = new app_dev_tools_SymbolsDevTool__WEBPACK_IMPORTED_MODULE_5__.SymbolsDevTool(scene.reelsControl).getTool();
        const force = {
            hook: "[0, 0, 0, 0, 0]",
            _hookUpdate: () => {
                console.log(force.hook);
                force.hook = force.hook == "" ? "[]" : force.hook;
                app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].mainGameInfo.hook = JSON.parse(force.hook);
            },
            hooks: Object.keys(/*#__PURE__*/ (res_hooks_hooks_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache || (res_hooks_hooks_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache = __webpack_require__.t(res_hooks_hooks_json__WEBPACK_IMPORTED_MODULE_4__, 2)))),
            _hooksItems: Object.keys(/*#__PURE__*/ (res_hooks_hooks_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache || (res_hooks_hooks_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache = __webpack_require__.t(res_hooks_hooks_json__WEBPACK_IMPORTED_MODULE_4__, 2)))).filter(value => value != "default"),
            _hooksUpdate: (value) => {
                var _a;
                hookName = value;
                updateHook();
                force.hook = JSON.stringify(/*#__PURE__*/ (res_hooks_hooks_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache || (res_hooks_hooks_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache = __webpack_require__.t(res_hooks_hooks_json__WEBPACK_IMPORTED_MODULE_4__, 2)))[value][0]);
                app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].mainGameInfo.hook = JSON.parse(force.hook);
                (_a = this.sceneFolder) === null || _a === void 0 ? void 0 : _a.updateDisplay();
                app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals.spinComplete.remove(updateHook);
                app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals.spinComplete.add(updateHook, self);
            },
            force: () => {
                app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.fruit.serverCommunicator.forceReelStop(JSON.parse(force.hook)).then();
            },
        };
        const target = {
            lines: {
                lineNumbers: "[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]",
                _lineNumbersUpdate: () => {
                    app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals.reels.hideLines.emit();
                    const list = JSON.parse(target.lines.lineNumbers);
                    list.forEach(lineNumber => app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals.reels.showLine.emit(lineNumber));
                },
                show: () => {
                    const list = JSON.parse(target.lines.lineNumbers);
                    list.forEach(lineNumber => app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals.reels.showLine.emit(lineNumber));
                },
            },
            reels: {
                reelStopsStr: "[0, 0, 0, 0, 0]",
                _reelStopsStrUpdate: () => {
                    var _a;
                    const list = JSON.parse(target.reels.reelStopsStr);
                    list.forEach((value, index) => target.reels.reelStops[index] = value);
                    (_a = this.sceneFolder) === null || _a === void 0 ? void 0 : _a.updateDisplay();
                },
                reelStops: [0, 0, 0, 0, 0],
                reelSpeed: 20,
                reelOffset: -0.025,
                _reelOffsetStep: .001,
                _reelOffsetMin: -.25,
                _reelOffsetMax: 1.25,
                _reelOffsetUpdate: () => {
                    app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals.reels.updateReelOffset.emit(target.reels.reelOffset);
                },
                reelOffsetUpdate: () => {
                    app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals.reels.updateReelOffset.emit(target.reels.reelOffset);
                },
                blur: () => {
                    scene.reelsControl.updateSkins("blur/scatter");
                },
                unblur: () => {
                    scene.reelsControl.updateSkins("scatter");
                },
                spin: (reelSpeed) => scene.startReelSpinning(reelSpeed !== null && reelSpeed !== void 0 ? reelSpeed : target.reels.reelSpeed),
                stop: () => scene.stopReelSpinning(target.reels.reelStops),
                showDevInfo: () => {
                    scene.showDebugInfo();
                },
                hideDevInfo: () => {
                    scene.hideDebugInfo();
                },
                moveToReelStops: async () => {
                    await Promise.all(scene.reelsControl.reels.map(async (value, index) => {
                        await value.moveTo(target.reels.reelStops[index]);
                    }));
                },
                moveDown: async () => {
                    var _a;
                    target.reels.reelStops.forEach((value, index) => {
                        target.reels.reelStops[index] = value + 1;
                    });
                    target.reels.reelStopsStr = JSON.stringify(target.reels.reelStops);
                    (_a = this.sceneFolder) === null || _a === void 0 ? void 0 : _a.updateDisplay();
                    await Promise.all(scene.reelsControl.reels.map(async (value, index) => {
                        await value.moveTo(target.reels.reelStops[index]);
                    }));
                },
                moveUp: async () => {
                    target.reels.reelStops.forEach((value, index) => {
                        target.reels.reelStops[index] = value - 1;
                    });
                    await Promise.all(scene.reelsControl.reels.map(async (value, index) => {
                        await value.moveTo(target.reels.reelStops[index]);
                    }));
                },
            },
        };
        this.sceneFolder = gui.addFolder("Reel scene");
        app_utils_DevToolUtils__WEBPACK_IMPORTED_MODULE_1__["default"].setupObj(force, "forces", this.sceneFolder);
        if (true) {
            app_utils_DevToolUtils__WEBPACK_IMPORTED_MODULE_1__["default"].setupObj(popups, "popups", this.sceneFolder);
            app_utils_DevToolUtils__WEBPACK_IMPORTED_MODULE_1__["default"].setupObj(symbols, "symbols", this.sceneFolder);
            app_utils_DevToolUtils__WEBPACK_IMPORTED_MODULE_1__["default"].setupObj(target, "", this.sceneFolder);
        }
    }
    getSpineDevControl(spine) {
        const animations = {
            loop: false,
        };
        spine.spine.spineData.animations.forEach((value, index) => {
            animations[value.name] = () => {
                spine.play(value.name, { loop: animations.loop, trackIndex: index });
            };
        });
        return animations;
    }
}


/***/ }),

/***/ "./dev/tools/SoundDevTool.ts":
/*!***********************************!*\
  !*** ./dev/tools/SoundDevTool.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var res_sounds_sound_list_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SoundDevTool": () => (/* binding */ SoundDevTool)
/* harmony export */ });
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var res_sounds_sound_list_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! res/sounds/sound_list.json */ "../resources/assets/sounds/sound_list.json");
/* harmony import */ var app_utils_DevToolUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/utils/DevToolUtils */ "./utils/DevToolUtils.ts");



// noinspection JSUnusedGlobalSymbols
class SoundDevTool {
    constructor(gui) {
        const soundsGui = gui.addFolder("sounds");
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals.loader.complete.promise().then(() => {
            Object.keys(/*#__PURE__*/ (res_sounds_sound_list_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (res_sounds_sound_list_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(res_sounds_sound_list_json__WEBPACK_IMPORTED_MODULE_1__, 2)))).forEach(value => {
                const sound = value.replace(/\..*/, "");
                app_utils_DevToolUtils__WEBPACK_IMPORTED_MODULE_2__["default"].setupObj(this.getSoundsActions(sound), "", soundsGui);
            });
        });
    }
    getSoundsActions(sound) {
        let soundId = 0;
        const howler = app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].getHowler();
        const soundAction = {
            rate: 1,
            _rateMin: 0,
            _rateMax: 5,
            _rateStep: 0.001,
            _rateUpdate: () => {
                howler.rate(soundAction.rate, soundId);
            },
            volume: 1,
            _volumeMin: 0,
            _volumeMax: 1,
            _volumeStep: 0.001,
            _volumeUpdate: () => {
                howler.volume(soundAction.volume, soundId);
            },
            play: () => {
                howler.stop(soundId);
                soundId = howler.play(sound);
                howler.rate(soundAction.rate, soundId);
                howler.volume(soundAction.volume, soundId);
            },
            rateUp: () => {
                howler.stop(soundId);
                soundId = howler.play(sound);
                soundAction.rate += 0.1;
                howler.rate(soundAction.rate, soundId);
            },
            rateDown: () => {
                howler.stop(soundId);
                soundId = howler.play(sound);
                soundAction.rate -= 0.1;
                howler.rate(soundAction.rate, soundId);
            },
            loop: () => {
                howler.stop(soundId);
                soundId = howler.play(sound);
                howler.loop(true, soundId);
            },
            fadeDown: () => {
                howler.fade(1, 0, 1000, soundId);
            },
            stop: () => {
                howler.stop(soundId);
            },
            mute: () => {
                howler.mute(true, soundId);
            },
        };
        return {
            [`${sound}`]: soundAction,
        };
    }
}


/***/ }),

/***/ "./dev/tools/SymbolsDevTool.ts":
/*!*************************************!*\
  !*** ./dev/tools/SymbolsDevTool.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SymbolsDevTool": () => (/* binding */ SymbolsDevTool)
/* harmony export */ });
class SymbolsDevTool {
    constructor(reelsControl) {
        this.reelsControl = reelsControl;
    }
    getTool() {
        const eachAllSymbols = (callBack) => {
            this.reelsControl.reels.forEach(value => {
                value.getSymbolsSymbols().forEach(symbol => {
                    callBack(symbol);
                });
            });
        };
        const devToolProceed = (callBack) => {
            if (symbols.all) {
                eachAllSymbols(callBack);
            }
            else {
                callBack(this.reelsControl.reels[symbols.x].getSymbol(symbols.y));
            }
        };
        const symbols = {
            x: 0, y: 0,
            all: false,
            scale: {
                scale: 1,
                _scaleUpdate: () => {
                    devToolProceed(symbol => symbol.setScale({ x: symbols.scale.scale }));
                },
            },
            skin: {
                skin: "wild",
                _skinItems: [
                    "high1",
                    "high2",
                    "high3",
                    "high4",
                    "low1",
                    "low2",
                    "low3",
                    "low4",
                    "low5",
                    "scatter",
                    "bonus",
                    "wild",
                    "blank",
                    "blur/high1",
                    "blur/high2",
                    "blur/high3",
                    "blur/high4",
                    "blur/low1",
                    "blur/low2",
                    "blur/low3",
                    "blur/low4",
                    "blur/low5",
                    "blur/scatter",
                    "blur/bonus",
                    "blur/wild",
                    "blur/blank",
                ],
                set: async () => {
                    devToolProceed(symbol => symbol.setSkin(symbols.skin.skin));
                },
            },
            play: {
                animation: "win",
                track: 0,
                play: async () => {
                    devToolProceed(symbol => symbol.play(symbols.play.animation, {
                        trackIndex: symbols.play.track, loop: true,
                    }));
                },
            },
        };
        return symbols;
    }
}


/***/ }),

/***/ "./game/AnticipationReelsProvider.ts":
/*!*******************************************!*\
  !*** ./game/AnticipationReelsProvider.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllScattersAnticipationReelsProvider": () => (/* binding */ AllScattersAnticipationReelsProvider),
/* harmony export */   "CountryAdventureAnticipationReelsProvider": () => (/* binding */ CountryAdventureAnticipationReelsProvider),
/* harmony export */   "SmartAnticipationReelsProvider": () => (/* binding */ SmartAnticipationReelsProvider)
/* harmony export */ });
class AllScattersAnticipationReelsProvider {
    constructor(reelInfo) {
        this.reelInfo = reelInfo;
    }
    provide(payload) {
        const anticipationReels = [0, 0, 0, 0, 0];
        if (payload.scatters.wins.length > 0) {
            const scatterSymbols = payload.scatters.wins[0].symbols;
            let scatterAmount = 0;
            for (let i = 0; i < this.reelInfo.reels.amount; i++) {
                anticipationReels[i] = scatterAmount >= 2 ? 1 : 0;
                scatterAmount += scatterSymbols.filter(value => value.x == i).length;
            }
        }
        return anticipationReels;
    }
}
class SmartAnticipationReelsProvider {
    constructor(reelsAmount, scatterId, scattersAmountForFeatureTrigger, reelsForScatterLand) {
        this.reelsAmount = reelsAmount;
        this.scatterId = scatterId;
        this.scattersAmountForFeatureTrigger = scattersAmountForFeatureTrigger;
        this.reelsForScatterLand = reelsForScatterLand;
        this.reelsForScatterLand.sort((a, b) => a - b);
    }
    provide(payload) {
        const anticipationReels = new Array(this.reelsAmount).fill(0);
        let startAt = this.reelsAmount;
        let endOn = undefined;
        payload.scatters.wins
            .filter(value => value.symbolId == this.scatterId)
            .map(scatter => {
            return scatter.symbols.filter(value => this.reelsForScatterLand.includes(value.x));
        }).flat().sort((a, b) => a.x - b.x).reduce((previousValue, currentValue) => {
            if (previousValue == this.scattersAmountForFeatureTrigger - 1) {
                startAt = this.reelsForScatterLand[this.reelsForScatterLand.indexOf(currentValue.x) + 1];
            }
            if (previousValue > this.scattersAmountForFeatureTrigger - 1) {
                endOn = endOn || currentValue.x;
            }
            return previousValue + 1;
        }, 1);
        if (startAt) {
            anticipationReels.fill(1, startAt, endOn);
            if (startAt == endOn) {
                anticipationReels[startAt] = 1;
            }
        }
        return anticipationReels;
    }
}
class CountryAdventureAnticipationReelsProvider {
    constructor(reelsAmount, scatterId, scattersAmountForFeatureTrigger, reelsForScatterLand) {
        this.reelsAmount = reelsAmount;
        this.scatterId = scatterId;
        this.scattersAmountForFeatureTrigger = scattersAmountForFeatureTrigger;
        this.reelsForScatterLand = reelsForScatterLand;
        this.reelsForScatterLand.sort((a, b) => a - b);
    }
    provide(payload) {
        const anticipationReels = new Array(this.reelsAmount).fill(0);
        let startAt = this.reelsAmount;
        payload.scatters.wins
            .filter(value => value.symbolId == this.scatterId)
            .map(scatter => {
            return scatter.symbols.filter(value => this.reelsForScatterLand.includes(value.x));
        }).flat().sort((a, b) => a.x - b.x).reduce((previousValue, currentValue) => {
            if (previousValue == this.scattersAmountForFeatureTrigger - 1) {
                startAt = this.reelsForScatterLand[this.reelsForScatterLand.indexOf(currentValue.x) + 1];
            }
            return previousValue + 1;
        }, 1);
        if (startAt) {
            anticipationReels.forEach((_, index, anticipationReels) => {
                if (index >= startAt && this.reelsForScatterLand.contains(index)) {
                    anticipationReels[index] = 1;
                }
            });
        }
        return anticipationReels;
    }
}


/***/ }),

/***/ "./game/BigWinCalculator.ts":
/*!**********************************!*\
  !*** ./game/BigWinCalculator.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BigWinCalculator)
/* harmony export */ });
class BigWinCalculator {
    constructor(bet) {
        this.bet = bet;
        this.settings = {
            lowWinLimit: 1,
            mediumWinLimit: 5,
            bigWinLimit: 15,
            superWinLimit: 30,
            epicWinLimit: 60,
        };
    }
    isBigWin(win) {
        return !this.isLowWin(win);
    }
    isLowWin(win) {
        return win < (this.settings.lowWinLimit * this.bet);
    }
    getWinType(win) {
        if (win < (this.settings.lowWinLimit * this.bet)) {
            return "LOW";
        }
        if (win < (this.settings.mediumWinLimit * this.bet)) {
            return "MEDIUM";
        }
        if (win < (this.settings.bigWinLimit * this.bet)) {
            return "BIG";
        }
        if (win < (this.settings.superWinLimit * this.bet)) {
            return "SUPER";
        }
        return "EPIC";
    }
}


/***/ }),

/***/ "./game/CurrencyFormatter.ts":
/*!***********************************!*\
  !*** ./game/CurrencyFormatter.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CurrencyFormatter)
/* harmony export */ });
/* harmony import */ var app_model_CurrencyFormatterHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/model/CurrencyFormatterHelper */ "./model/CurrencyFormatterHelper.ts");

class CurrencyFormatter {
    formatAmount(value, useDecimals, currency) {
        const style = currency ? "currency" : "decimal";
        const options = { style: style, minimumFractionDigits: useDecimals ? 2 : 0 };
        return app_model_CurrencyFormatterHelper__WEBPACK_IMPORTED_MODULE_0__["default"].format(value, options);
    }
}


/***/ }),

/***/ "./game/SoundController.ts":
/*!*********************************!*\
  !*** ./game/SoundController.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SoundController)
/* harmony export */ });
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var app_helpers_GameLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/helpers/GameLocalStorage */ "./helpers/GameLocalStorage.ts");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_model_BetModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/model/BetModel */ "./model/BetModel.ts");




class ReelSoundsController {
    constructor(howler) {
        this.howler = howler;
        this.spinSoundId = -1;
        this.anticipationSoundId = -1;
        this.scatterReels = [];
        this.coinShower = new SoundCoinShower(howler);
    }
    compose() {
        const gameSignals = app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals;
        gameSignals.spinStarted.add(this.onSpinStarted, this);
        gameSignals.spinComplete.add(this.onSpinComplete, this);
        gameSignals.reels.stopped.add(this.onReelStopped, this);
        gameSignals.reels.showScatterWins.add(this.showScatterWins, this);
        gameSignals.reels.showLineWins.add(this.showWins, this);
        gameSignals.reels.anticipationShown.add(this.onAnticipationShown, this);
        gameSignals.reels.anticipationShown.add(this.onAnticipationShown, this);
        gameSignals.reels.anticipationShown.add(this.onAnticipationShown, this);
        gameSignals.ui.balance.startBalanceAnimation.add(this.onDisplayBonusScatterWin, this);
        gameSignals.ui.balance.balanceChangesDisplayed.add(this.onBonusScatterWinDisplayed, this);
        gameSignals.reels.scatterReels.add(scatterReels => this.scatterReels = scatterReels, this);
    }
    dispose() {
        const gameSignals = app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals;
        gameSignals.spinStarted.unload(this);
        gameSignals.spinComplete.unload(this);
        gameSignals.reels.stopped.unload(this);
        gameSignals.reels.showScatterWins.unload(this);
        gameSignals.reels.showLineWins.unload(this);
        gameSignals.reels.anticipationShown.unload(this);
        gameSignals.reels.anticipateReels.unload(this);
        gameSignals.reels.scatterReels.unload(this);
        gameSignals.ui.balance.startBalanceAnimation.unload(this);
        gameSignals.ui.balance.balanceChangesDisplayed.unload(this);
    }
    onSpinStarted() {
        this.howler.stop(this.spinSoundId);
        this.spinSoundId = this.howler.play("reel-spin");
        this.howler.fade(0, 1, 200, this.spinSoundId);
        this.howler.play("spin-button");
        this.howler.play("reel-spin-start");
    }
    onReelStopped(reelId) {
        this.howler.play("reel-stop");
        if (reelId == 0) {
            const id = this.howler.play("reel-spin-stop");
            this.howler.volume(0.5, id);
        }
        if (this.scatterReels[reelId] == 1) {
            this.howler.play("scatter_land");
        }
        if (reelId == 4) {
            this.howler.stop(this.spinSoundId);
        }
    }
    showScatterWins(scatterWins, resolve) {
        var _a;
        if (scatterWins.find(value => value.win > 0)) {
            this.howler.play("coin");
        }
        else if (((_a = scatterWins[0]) === null || _a === void 0 ? void 0 : _a.symbolsAmount) == 3) {
            this.howler.play("scatter_preview");
            setTimeout(() => {
                this.howler.play("scatter_preview");
            }, 500);
        }
        resolve === null || resolve === void 0 ? void 0 : resolve();
    }
    showWins(_, resolve) {
        this.howler.play("win-line");
        this.howler.play("coin");
        resolve === null || resolve === void 0 ? void 0 : resolve();
    }
    onDisplayBonusScatterWin(_, resolve) {
        this.coinShower.play();
        resolve === null || resolve === void 0 ? void 0 : resolve();
    }
    onBonusScatterWinDisplayed(_, resolve) {
        this.coinShower.stop();
        resolve === null || resolve === void 0 ? void 0 : resolve();
    }
    onSpinComplete() {
        if (this.anticipationSoundId >= 0) {
            this.howler.fade(0.25, 0, 100, this.anticipationSoundId);
            this.anticipationSoundId = -1;
        }
    }
    onAnticipationShown() {
        this.anticipationSoundId = this.howler.play("anticipation");
        this.howler.fade(0.125, 0, 1500, this.anticipationSoundId);
    }
}
class BackgroundSoundController {
    constructor(howler, coinShower) {
        this.howler = howler;
        this.coinShower = coinShower;
        this.themeSoundId = -1;
        this.themeAmbientSoundId = -1;
        this.state = "base_game";
    }
    compose() {
        const gameSignals = app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals;
        gameSignals.popup.fsIntro.show.add(this.onFreeSpinsIntro, this);
        gameSignals.popup.fsOutro.show.add(this.onFreeSpinsOutro, this);
        gameSignals.popup.fsOutro.shown.add(this.onFreeSpinsOutroShown, this);
        gameSignals.popup.fsOutro.hide.add(this.onMainGame, this);
        gameSignals.popup.fsIntro.hide.add(this.onFreeSpinsGame, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].firstUserInteractionPromise.then(this.onInit.bind(this));
    }
    dispose() {
        const gameSignals = app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals;
        gameSignals.popup.fsIntro.show.unload(this);
        gameSignals.popup.fsOutro.show.unload(this);
        gameSignals.popup.fsOutro.hide.unload(this);
        gameSignals.popup.fsIntro.hide.unload(this);
    }
    onFreeSpinsIntro(_, resolve) {
        this.howler.fade(0.25, 0, 500, this.themeSoundId);
        this.howler.fade(0.125, 0, 500, this.themeAmbientSoundId);
        this.themeSoundId = this.howler.play("fs-transition1");
        this.howler.fade(0, 0.25, 500, this.themeSoundId);
        resolve === null || resolve === void 0 ? void 0 : resolve();
    }
    onMainGame(_, resolve) {
        this.howler.fade(0.25, 0, 500, this.themeSoundId);
        this.howler.fade(0.125, 0, 500, this.themeAmbientSoundId);
        this.themeSoundId = this.howler.play("main-game-loop");
        this.themeAmbientSoundId = this.howler.play("main-game-ambient.loop");
        this.howler.fade(0, 0.125, 500, this.themeSoundId);
        this.howler.fade(0, 0.125, 500, this.themeAmbientSoundId);
        resolve === null || resolve === void 0 ? void 0 : resolve();
    }
    onFreeSpinsOutro(_, resolve) {
        this.state = "base_game";
        this.howler.fade(0.25, 0, 500, this.themeSoundId);
        this.howler.fade(0.125, 0, 500, this.themeAmbientSoundId);
        this.themeSoundId = this.howler.play("fs-transition2");
        this.howler.fade(0, 0.125, 500, this.themeSoundId);
        this.coinShower.play();
        resolve === null || resolve === void 0 ? void 0 : resolve();
    }
    onFreeSpinsOutroShown() {
        this.coinShower.stop();
    }
    onFreeSpinsGame(_, resolve) {
        this.state = "free_spins";
        this.howler.fade(0.25, 0, 500, this.themeSoundId);
        this.howler.fade(0.125, 0, 500, this.themeAmbientSoundId);
        this.themeSoundId = this.howler.play("fs-game-loop");
        this.howler.fade(0, 0.25, 500, this.themeSoundId);
        resolve === null || resolve === void 0 ? void 0 : resolve();
    }
    onInit() {
        this.themeSoundId = this.howler.play("main-game-loop");
        this.themeAmbientSoundId = this.howler.play("main-game-ambient.loop");
        this.howler.fade(0, 0.125, 500, this.themeSoundId);
        this.howler.fade(0, 0.125, 500, this.themeAmbientSoundId);
    }
}
class PopupSoundController {
    constructor(howler) {
        this.howler = howler;
    }
    compose() {
        const gameSignals = app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals;
        gameSignals.popup.winCounter.show.add(this.onShowWin, this);
        gameSignals.popup.winCounter.shown.add(this.onWinShown, this);
        gameSignals.popup.winCounter.hide.add(this.onHideWin, this);
    }
    dispose() {
        const gameSignals = app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals;
        gameSignals.popup.winCounter.show.unload(this);
        gameSignals.popup.winCounter.shown.unload(this);
        gameSignals.popup.winCounter.hide.unload(this);
    }
    onShowWin(win, resolve) {
        const winType = (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_2__.$)(app_model_BetModel__WEBPACK_IMPORTED_MODULE_3__["default"]).bigWinCalculator.getWinType(win);
        switch (winType) {
            case "LOW":
                this.howler.play("low_win_popup");
                break;
            case "MEDIUM":
                this.howler.play("mid_win_popup");
                break;
            case "BIG":
            case "SUPER":
            case "EPIC":
                this.howler.play("big_win_popup");
                break;
        }
        resolve === null || resolve === void 0 ? void 0 : resolve();
    }
    onWinShown() { }
    onHideWin(_, resolve) {
        const id = this.howler.play("win-line");
        this.howler.volume(0.1, id);
        this.howler.rate(0.7, id);
        resolve === null || resolve === void 0 ? void 0 : resolve();
    }
}
class SoundController {
    constructor(howler) {
        this.howler = howler;
        this.coinShower = new SoundCoinShower(howler);
        this.reelSoundsController = new ReelSoundsController(howler);
        this.backgroundSoundController = new BackgroundSoundController(howler, this.coinShower);
        this.popupSoundController = new PopupSoundController(howler);
    }
    compose() {
        const gameSignals = app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals;
        gameSignals.popup.winCounter.show.add(this.onWinCounter, this);
        gameSignals.popup.winCounter.shown.add(this.onWinCounterShown, this);
        gameSignals.ui.options.toggleSound.add(() => {
            app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].getHowler().mute(!app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].isSoundMuted);
            app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].isSoundMuted = !app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].isSoundMuted;
            app_helpers_GameLocalStorage__WEBPACK_IMPORTED_MODULE_1__["default"].setItem("isSoundMuted", app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].isSoundMuted.toString());
        }, this);
        this.reelSoundsController.compose();
        this.backgroundSoundController.compose();
        this.popupSoundController.compose();
    }
    dispose() {
        const gameSignals = app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals;
        gameSignals.popup.winCounter.show.unload(this);
        gameSignals.popup.winCounter.shown.unload(this);
        gameSignals.ui.options.toggleSound.unload(this);
        this.reelSoundsController.dispose();
        this.backgroundSoundController.dispose();
        this.popupSoundController.dispose();
    }
    onWinCounter(_, resolve) {
        this.coinShower.play();
        resolve === null || resolve === void 0 ? void 0 : resolve();
    }
    onWinCounterShown(_, resolve) {
        this.coinShower.stop();
        resolve === null || resolve === void 0 ? void 0 : resolve();
    }
}
class SoundCoinShower {
    constructor(howl) {
        this.howl = howl;
        this.intervalId = -1;
    }
    play() {
        this.stop();
        this.intervalId = setInterval(() => {
            const id = this.howl.play("coin");
            this.howl.volume(0.2, id);
        }, 60);
    }
    stop() {
        clearInterval(this.intervalId);
    }
}


/***/ }),

/***/ "./game/states/AutoPlayState.ts":
/*!**************************************!*\
  !*** ./game/states/AutoPlayState.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AutoPlayState)
/* harmony export */ });
/* harmony import */ var app_game_states_GameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/game/states/GameState */ "./game/states/GameState.ts");
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var app_model_BetModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/model/BetModel */ "./model/BetModel.ts");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_model_UserModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/model/UserModel */ "./model/UserModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





class AutoPlayState extends app_game_states_GameState__WEBPACK_IMPORTED_MODULE_0__.GameState {
    async run() {
        const mainGameInfo = app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].mainGameInfo;
        const serverCommunicator = app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.fruit.serverCommunicator;
        const reelSignals = app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels;
        this.gameSignals.ui.showWin.emit({ win: 0 });
        reelSignals.spin.emit();
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.ui.disableControls.emit();
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.ui.autoplayButton.enable.emit();
        this.userModel.takeBet(this.betModel.getTotalBet());
        if (mainGameInfo.hook.length) {
            await serverCommunicator.forceReelStop(mainGameInfo.hook);
        }
        const betId = this.betModel.getChosenBet().id;
        const linesAmount = app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.linesId;
        this.spinResponse = await serverCommunicator.spin({
            bet_id: `${betId}`,
            lines_amount: `${linesAmount}`,
            gameKey: "internship",
        });
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].autoplay.spins -= 1;
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.autoplay.decrease.emit();
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.infobar.stop.emit();
        await this.goto("spinStopState");
        await this.goto("wildBonus1State");
        await this.goto("wildBonus2State");
        await this.goto("winLineState");
        await this.goto("scatterWinState");
        await this.goto("freeSpinsIntroState");
        await this.goto("freeSpinsState");
        await this.goto("freeSpinsOutroState");
        await this.goto("winPresentationState");
        const finalState = app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].autoplay.spins > 0 ? "autoPlayState" : "mainGameState";
        if (app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].autoplay.spins === 0) {
            app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.ui.autoplayButton.enable.emit();
        }
        await this.goto(finalState);
        return this;
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__.inject)(app_model_UserModel__WEBPACK_IMPORTED_MODULE_4__["default"])
], AutoPlayState.prototype, "userModel", void 0);
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__.inject)(app_model_BetModel__WEBPACK_IMPORTED_MODULE_2__["default"])
], AutoPlayState.prototype, "betModel", void 0);


/***/ }),

/***/ "./game/states/FinalSpinsState.ts":
/*!****************************************!*\
  !*** ./game/states/FinalSpinsState.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinalSpinsState": () => (/* binding */ FinalSpinsState)
/* harmony export */ });
/* harmony import */ var app_game_states_GameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/game/states/GameState */ "./game/states/GameState.ts");

class FinalSpinsState extends app_game_states_GameState__WEBPACK_IMPORTED_MODULE_0__.GameState {
    async run() {
        await this.gameSignals.reels.updateAnimation.emit("idle").all();
        return this;
    }
}


/***/ }),

/***/ "./game/states/GameState.ts":
/*!**********************************!*\
  !*** ./game/states/GameState.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameState": () => (/* binding */ GameState)
/* harmony export */ });
/* harmony import */ var app_stateMachine_State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/stateMachine/State */ "./stateMachine/State.ts");
/* harmony import */ var app_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/Main */ "./Main.ts");
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_model_MainGameModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/model/MainGameModel */ "./model/MainGameModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





class GameState extends app_stateMachine_State__WEBPACK_IMPORTED_MODULE_0__.State {
    constructor() {
        super(...arguments);
        this.sceneManager = app_Main__WEBPACK_IMPORTED_MODULE_1__.Main.MAIN.mainSceneManager;
        this.gameSignals = app_model_GameModel__WEBPACK_IMPORTED_MODULE_2__["default"].game.signals;
    }
    async compose() {
        await super.compose();
        this.gameSignals.data.spin.add(this.onSpinResponse, this);
        this.spinResponse = this.mainGameModel.spinResponse;
    }
    onSpinResponse(spinResponse) {
        this.spinResponse = spinResponse;
    }
    async dispose() {
        this.gameSignals.data.spin.unload(this);
        await super.dispose();
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__.inject)(app_model_MainGameModel__WEBPACK_IMPORTED_MODULE_4__["default"])
], GameState.prototype, "mainGameModel", void 0);


/***/ }),

/***/ "./game/states/IntroState.ts":
/*!***********************************!*\
  !*** ./game/states/IntroState.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IntroState)
/* harmony export */ });
/* harmony import */ var app_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/Main */ "./Main.ts");
/* harmony import */ var app_scenes_IntroGameScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/scenes/IntroGameScene */ "./scenes/IntroGameScene.ts");
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var app_stateMachine_State__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/stateMachine/State */ "./stateMachine/State.ts");
/* harmony import */ var app_game_states_MainGameIdleState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/game/states/MainGameIdleState */ "./game/states/MainGameIdleState.ts");
/* harmony import */ var app_game_states_SpinState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/game/states/SpinState */ "./game/states/SpinState.ts");
/* harmony import */ var app_game_states_SpinStopState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/game/states/SpinStopState */ "./game/states/SpinStopState.ts");
/* harmony import */ var app_game_states_ScatterWinState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/game/states/ScatterWinState */ "./game/states/ScatterWinState.ts");
/* harmony import */ var app_game_states_WinLineState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/game/states/WinLineState */ "./game/states/WinLineState.ts");
/* harmony import */ var app_game_states_WinState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/game/states/WinState */ "./game/states/WinState.ts");
/* harmony import */ var app_game_states_PaytableState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/game/states/PaytableState */ "./game/states/PaytableState.ts");
/* harmony import */ var app_game_states_AutoPlayState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/game/states/AutoPlayState */ "./game/states/AutoPlayState.ts");
/* harmony import */ var app_game_states_freespins_FreeSpinsIntroState__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/game/states/freespins/FreeSpinsIntroState */ "./game/states/freespins/FreeSpinsIntroState.ts");
/* harmony import */ var app_game_states_freespins_FreeSpinsOutroState__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/game/states/freespins/FreeSpinsOutroState */ "./game/states/freespins/FreeSpinsOutroState.ts");
/* harmony import */ var app_game_states_freespins_FreeSpinsState__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/game/states/freespins/FreeSpinsState */ "./game/states/freespins/FreeSpinsState.ts");
/* harmony import */ var app_game_states_freespins_FreeSpinsScatterWinState__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/game/states/freespins/FreeSpinsScatterWinState */ "./game/states/freespins/FreeSpinsScatterWinState.ts");
/* harmony import */ var app_game_states_freespins_FreeSpinsLinesWinState__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/game/states/freespins/FreeSpinsLinesWinState */ "./game/states/freespins/FreeSpinsLinesWinState.ts");
/* harmony import */ var app_game_states_freespins_FreeSpinsWinState__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/game/states/freespins/FreeSpinsWinState */ "./game/states/freespins/FreeSpinsWinState.ts");
/* harmony import */ var app_game_states_freespins_FreeSpinsStopState__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/game/states/freespins/FreeSpinsStopState */ "./game/states/freespins/FreeSpinsStopState.ts");
/* harmony import */ var app_game_states_freespins_ReSpinsState__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/game/states/freespins/ReSpinsState */ "./game/states/freespins/ReSpinsState.ts");
/* harmony import */ var app_game_states_FinalSpinsState__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/game/states/FinalSpinsState */ "./game/states/FinalSpinsState.ts");
/* harmony import */ var app_game_AnticipationReelsProvider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/game/AnticipationReelsProvider */ "./game/AnticipationReelsProvider.ts");
/* harmony import */ var app_server_service_typing__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! app/server/service/typing */ "./server/service/typing.ts");
/* harmony import */ var app_game_states_WildBonus2State__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! app/game/states/WildBonus2State */ "./game/states/WildBonus2State.ts");
/* harmony import */ var app_game_states_WildBonus1State__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! app/game/states/WildBonus1State */ "./game/states/WildBonus1State.ts");
/* harmony import */ var app_game_states_freespins_FreeSpinsWildBonus1State__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! app/game/states/freespins/FreeSpinsWildBonus1State */ "./game/states/freespins/FreeSpinsWildBonus1State.ts");
/* harmony import */ var app_game_states_freespins_FreeSpinsWildBonus2State__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! app/game/states/freespins/FreeSpinsWildBonus2State */ "./game/states/freespins/FreeSpinsWildBonus2State.ts");



























class IntroState extends app_stateMachine_State__WEBPACK_IMPORTED_MODULE_3__.State {
    async run() {
        const sceneManager = app_Main__WEBPACK_IMPORTED_MODULE_0__.Main.MAIN.mainSceneManager;
        await sceneManager.navigate(app_scenes_IntroGameScene__WEBPACK_IMPORTED_MODULE_1__["default"]);
        await [
            app_model_GameModel__WEBPACK_IMPORTED_MODULE_2__["default"].firstUserInteractionPromise,
            app_model_GameModel__WEBPACK_IMPORTED_MODULE_2__["default"].ready,
        ].promise().all();
        await this.setupGameState();
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_2__["default"].setForceMode(app_model_GameModel__WEBPACK_IMPORTED_MODULE_2__["default"].isForce);
        return this;
    }
    async setupGameState() {
        const anticipationReelsProvider = new app_game_AnticipationReelsProvider__WEBPACK_IMPORTED_MODULE_21__.CountryAdventureAnticipationReelsProvider(app_model_GameModel__WEBPACK_IMPORTED_MODULE_2__["default"].mainGameInfo.reels.amount, app_server_service_typing__WEBPACK_IMPORTED_MODULE_22__.TSymbolId.SCATTER, 3, [0, 2, 4]);
        await this.addState("mainGameState", new app_game_states_MainGameIdleState__WEBPACK_IMPORTED_MODULE_4__["default"]());
        await this.addState("spinState", new app_game_states_SpinState__WEBPACK_IMPORTED_MODULE_5__["default"]());
        await this.addState("spinStopState", new app_game_states_SpinStopState__WEBPACK_IMPORTED_MODULE_6__["default"](anticipationReelsProvider));
        await this.addState("scatterWinState", new app_game_states_ScatterWinState__WEBPACK_IMPORTED_MODULE_7__["default"]());
        await this.addState("winLineState", new app_game_states_WinLineState__WEBPACK_IMPORTED_MODULE_8__["default"]());
        await this.addState("winPresentationState", new app_game_states_WinState__WEBPACK_IMPORTED_MODULE_9__["default"]());
        await this.addState("paytableState", new app_game_states_PaytableState__WEBPACK_IMPORTED_MODULE_10__["default"]());
        await this.addState("autoPlayState", new app_game_states_AutoPlayState__WEBPACK_IMPORTED_MODULE_11__["default"]());
        await this.addState("freeSpinsIntroState", new app_game_states_freespins_FreeSpinsIntroState__WEBPACK_IMPORTED_MODULE_12__["default"]());
        await this.addState("freeSpinsOutroState", new app_game_states_freespins_FreeSpinsOutroState__WEBPACK_IMPORTED_MODULE_13__["default"]());
        await this.addState("freeSpinsState", new app_game_states_freespins_FreeSpinsState__WEBPACK_IMPORTED_MODULE_14__["default"]());
        await this.addState("fsScatterWinState", new app_game_states_freespins_FreeSpinsScatterWinState__WEBPACK_IMPORTED_MODULE_15__["default"]());
        await this.addState("fsWildBonus1State", new app_game_states_freespins_FreeSpinsWildBonus1State__WEBPACK_IMPORTED_MODULE_25__["default"]());
        await this.addState("fsWildBonus2State", new app_game_states_freespins_FreeSpinsWildBonus2State__WEBPACK_IMPORTED_MODULE_26__["default"]());
        await this.addState("fsLinesWinState", new app_game_states_freespins_FreeSpinsLinesWinState__WEBPACK_IMPORTED_MODULE_16__["default"]());
        await this.addState("fsWinState", new app_game_states_freespins_FreeSpinsWinState__WEBPACK_IMPORTED_MODULE_17__["default"]());
        await this.addState("fsSpinStopState", new app_game_states_freespins_FreeSpinsStopState__WEBPACK_IMPORTED_MODULE_18__["default"](anticipationReelsProvider));
        await this.addState("reSpinsState", new app_game_states_freespins_ReSpinsState__WEBPACK_IMPORTED_MODULE_19__["default"]());
        await this.addState("finalState", new app_game_states_FinalSpinsState__WEBPACK_IMPORTED_MODULE_20__.FinalSpinsState());
        await this.addState("wildBonus1State", new app_game_states_WildBonus1State__WEBPACK_IMPORTED_MODULE_24__["default"]());
        await this.addState("wildBonus2State", new app_game_states_WildBonus2State__WEBPACK_IMPORTED_MODULE_23__["default"]());
    }
}


/***/ }),

/***/ "./game/states/LoaderState.ts":
/*!************************************!*\
  !*** ./game/states/LoaderState.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoaderState)
/* harmony export */ });
/* harmony import */ var app_stateMachine_State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/stateMachine/State */ "./stateMachine/State.ts");
/* harmony import */ var app_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/Main */ "./Main.ts");
/* harmony import */ var app_scenes_LoaderScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/scenes/LoaderScene */ "./scenes/LoaderScene.ts");
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var app_helpers_promise_ResolvablePromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/helpers/promise/ResolvablePromise */ "./helpers/promise/ResolvablePromise.ts");
/* harmony import */ var _pixi_assets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pixi/assets */ "../node_modules/@pixi/assets/lib/index.mjs");
/* harmony import */ var app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/helpers/signals/signal/Signal */ "./helpers/signals/signal/Signal.ts");
/* harmony import */ var app_loader_SpineLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/loader/SpineLoader */ "./loader/SpineLoader.ts");








class LoaderState extends app_stateMachine_State__WEBPACK_IMPORTED_MODULE_0__.State {
    constructor() {
        super(...arguments);
        this.loaderSignals = app_model_GameModel__WEBPACK_IMPORTED_MODULE_3__["default"].game.signals.loader;
        this.legacyLoaderSignals = {
            onProgress: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_6__["default"](),
            onComplete: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_6__["default"](),
        };
        this.loadPromise = app_helpers_promise_ResolvablePromise__WEBPACK_IMPORTED_MODULE_4__["default"].getPromiseCounter(1);
        this.soundLoadPromise = app_helpers_promise_ResolvablePromise__WEBPACK_IMPORTED_MODULE_4__["default"].getResolvablePromise();
        this.loaderPromise = new Promise(() => { });
    }
    async compose() {
        await super.compose();
        this.loaderPromise = _pixi_assets__WEBPACK_IMPORTED_MODULE_5__.Assets.init({
            manifest: {
                bundles: [
                    {
                        name: "game-assets",
                        assets: [
                            { alias: "UI", src: "assets/atlases/ui.json" },
                            { alias: "splash", src: "assets/atlases/splash.json" },
                            { alias: "symbols", src: "assets/atlases/symbols.json" },
                            { alias: "reels", src: "assets/atlases/reels.json" },
                            { alias: "pop_up", src: "assets/atlases/pop_up.json" },
                            { alias: "common", src: "assets/atlases/common.json" },
                            { alias: "background", src: "assets/atlases/background.json" },
                            { alias: "vfx", src: "assets/atlases/vfx.json" },
                            { alias: "paytable", src: "assets/atlases/paytable.json" },
                            { alias: "winline", src: "assets/atlases/winline.json" },
                            { alias: "character", src: "assets/atlases/character.json" },
                            { alias: "wildbonus", src: "assets/atlases/wildbonus.json" },
                            { alias: "grass", src: "assets/atlases/grass.json" },
                            // bitmap fonts
                            { alias: "win_counter", src: "./assets/fonts/bitmap/win_counter.xml" },
                            { alias: "intro", src: "./assets/fonts/bitmap/intro.xml" },
                            { alias: "outro", src: "./assets/fonts/bitmap/outro.xml" },
                            { alias: "RobotoB", src: "./assets/fonts/RobotoB.ttf" },
                            { alias: "SuperMarioGalaxy", src: "./assets/fonts/SuperMarioGalaxy.ttf" },
                        ],
                    },
                ],
            },
        });
    }
    async activate() {
        await super.activate();
        const sceneManager = app_Main__WEBPACK_IMPORTED_MODULE_1__.Main.MAIN.mainSceneManager;
        await sceneManager.navigate(app_scenes_LoaderScene__WEBPACK_IMPORTED_MODULE_2__["default"]);
        let progress = 0;
        const progressFactorStep = 0.1;
        let progressFactor = progressFactorStep * 8;
        this.legacyLoaderSignals.onComplete.add(async (loader) => {
            progress = loader.progress * progressFactor;
            this.loaderSignals.progressUpdate.emit(progress);
            this.loadPromise.resolve();
        }, this);
        this.legacyLoaderSignals.onProgress.add(loader => {
            progress = loader.progress * progressFactor;
            this.loaderSignals.progressUpdate.emit(progress);
        }, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_3__["default"].ready.then(() => {
            progressFactor += progressFactorStep;
            this.loaderSignals.progressUpdate.emit(progress * progressFactor);
        });
        this.soundLoadPromise.then(() => {
            progressFactor += progressFactorStep;
            this.loaderSignals.progressUpdate.emit(progress * progressFactor);
        });
        [this.loadPromise, app_model_GameModel__WEBPACK_IMPORTED_MODULE_3__["default"].ready, this.soundLoadPromise].promise().all().then(() => {
            // todo: analyze why it works [#4]
            /* for (const resourcesKey in this.loader.resources) {
                if (Object.prototype.hasOwnProperty.call(this.loader.resources, resourcesKey)) {
                    Loader.shared.resources[resourcesKey] = this.loader.resources[resourcesKey];
                }
            } */
            this.loaderSignals.complete.emit();
        });
    }
    async run() {
        document.body.appendChild(app_Main__WEBPACK_IMPORTED_MODULE_1__.Main.APP.view);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_3__["default"].initHowler().then(() => {
            this.soundLoadPromise.resolve();
        });
        await [_pixi_assets__WEBPACK_IMPORTED_MODULE_5__.Assets.loadBundle("game-assets", progress => {
                this.legacyLoaderSignals.onProgress.emit({ progress });
            }), app_loader_SpineLoader__WEBPACK_IMPORTED_MODULE_7__["default"].load()].promise().all();
        this.legacyLoaderSignals.onComplete.emit({ progress: 1 });
        await this.loaderPromise;
        this.loadPromise.resolve();
        await this.soundLoadPromise;
        await this.loadPromise;
        await app_model_GameModel__WEBPACK_IMPORTED_MODULE_3__["default"].ready;
        return this;
    }
    async deactivate() {
        this.legacyLoaderSignals.onComplete.unload(this);
        this.legacyLoaderSignals.onProgress.unload(this);
        await super.deactivate();
    }
}


/***/ }),

/***/ "./game/states/MainGameIdleState.ts":
/*!******************************************!*\
  !*** ./game/states/MainGameIdleState.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainGameIdleState)
/* harmony export */ });
/* harmony import */ var app_game_states_GameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/game/states/GameState */ "./game/states/GameState.ts");
/* harmony import */ var app_scenes_MainGameScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/scenes/MainGameScene */ "./scenes/MainGameScene.ts");
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_model_UserModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/model/UserModel */ "./model/UserModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





class MainGameIdleState extends app_game_states_GameState__WEBPACK_IMPORTED_MODULE_0__.GameState {
    async activate() {
        await super.activate();
        this.gameSignals.ui.spinButton.clicked.add(async () => {
            await this.goto("spinState");
            await this.goto("spinStopState");
            await this.goto("wildBonus1State");
            await this.goto("wildBonus2State");
            await this.goto("winLineState");
            await this.goto("scatterWinState");
            await this.goto("freeSpinsIntroState");
            await this.goto("freeSpinsState");
            await this.goto("freeSpinsOutroState");
            await this.goto("winPresentationState");
            await this.goto("finalState");
            await this.goto("mainGameState");
        }, this);
        this.gameSignals.autoplay.changed.add(() => {
            this.goto("autoPlayState");
        }, this);
        this.gameSignals.ui.options.info.show.add(() => {
            this.goto("paytableState");
        }, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_2__["default"].game.signals.infobar.start.emit();
    }
    async run() {
        await this.sceneManager.navigate(app_scenes_MainGameScene__WEBPACK_IMPORTED_MODULE_1__["default"]);
        this.gameSignals.ui.enableControls.emit();
        return this;
    }
    async deactivate() {
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_2__["default"].game.signals.infobar.stop.emit();
        this.gameSignals.ui.disableControls.emit();
        this.gameSignals.ui.showWin.emit({ win: 0 });
        this.userModel.betChanged.unload(this);
        this.gameSignals.ui.spinButton.clicked.unload(this);
        this.gameSignals.autoplay.changed.unload(this);
        this.gameSignals.ui.options.info.show.unload(this);
        await super.deactivate();
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__.inject)(app_model_UserModel__WEBPACK_IMPORTED_MODULE_4__["default"])
], MainGameIdleState.prototype, "userModel", void 0);


/***/ }),

/***/ "./game/states/NextState.ts":
/*!**********************************!*\
  !*** ./game/states/NextState.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NextState)
/* harmony export */ });
/* harmony import */ var app_stateMachine_State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/stateMachine/State */ "./stateMachine/State.ts");

class NextState extends app_stateMachine_State__WEBPACK_IMPORTED_MODULE_0__.State {
    async run() {
        return this;
    }
}


/***/ }),

/***/ "./game/states/PaytableState.ts":
/*!**************************************!*\
  !*** ./game/states/PaytableState.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PaytableState)
/* harmony export */ });
/* harmony import */ var app_game_states_GameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/game/states/GameState */ "./game/states/GameState.ts");
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");


class PaytableState extends app_game_states_GameState__WEBPACK_IMPORTED_MODULE_0__.GameState {
    async activate() {
        await super.activate();
        this.gameSignals.ui.options.info.hide.add(() => {
            app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.paytableHide.emit();
            this.goto("mainGameState");
        }, this);
        this.gameSignals.reels.stopAllAnimations.emit();
    }
    async run() {
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.paytableShow.emit();
        return this;
    }
    async deactivate() {
        this.gameSignals.reels.updateAnimation.emit("idle");
        this.gameSignals.ui.options.info.hide.unload(this);
        await super.deactivate();
    }
}


/***/ }),

/***/ "./game/states/PreLoaderState.ts":
/*!***************************************!*\
  !*** ./game/states/PreLoaderState.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PreLoaderState)
/* harmony export */ });
/* harmony import */ var app_stateMachine_State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/stateMachine/State */ "./stateMachine/State.ts");
/* harmony import */ var _pixi_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pixi/assets */ "../node_modules/@pixi/assets/lib/index.mjs");
/* harmony import */ var app_loader_SpineLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/loader/SpineLoader */ "./loader/SpineLoader.ts");
/* harmony import */ var app_loader_CursorLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/loader/CursorLoader */ "./loader/CursorLoader.ts");




class PreLoaderState extends app_stateMachine_State__WEBPACK_IMPORTED_MODULE_0__.State {
    async run() {
        await Promise.all([
            _pixi_assets__WEBPACK_IMPORTED_MODULE_1__.Assets.load("assets/atlases/initial.json"),
            app_loader_SpineLoader__WEBPACK_IMPORTED_MODULE_2__["default"].preLoad(),
            app_loader_CursorLoader__WEBPACK_IMPORTED_MODULE_3__["default"].setUp(),
        ]);
        return this;
    }
    async deactivate() {
        var _a;
        const elements = document.getElementsByClassName("spinner-box");
        if (elements.length > 0) {
            (_a = elements[0].parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(elements[0]);
        }
        await super.deactivate();
    }
}


/***/ }),

/***/ "./game/states/ScatterWinState.ts":
/*!****************************************!*\
  !*** ./game/states/ScatterWinState.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScatterWinState)
/* harmony export */ });
/* harmony import */ var app_game_states_GameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/game/states/GameState */ "./game/states/GameState.ts");
/* harmony import */ var app_helpers_ObjectHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/helpers/ObjectHelper */ "./helpers/ObjectHelper.ts");


class ScatterWinState extends app_game_states_GameState__WEBPACK_IMPORTED_MODULE_0__.GameState {
    enable() {
        return super.enable() && this.spinResponse.scatters.wins.length > 0;
    }
    async run() {
        const scatterWins = this.spinResponse.scatters.wins;
        if (this.spinResponse.scatters.totalWin > 0) {
            const scatterWin = (0,app_helpers_ObjectHelper__WEBPACK_IMPORTED_MODULE_1__.ensure)(scatterWins.find(scatter => scatter.win > 0));
            await this.showScatterWins(scatterWin);
        }
        const fsScatterWin = scatterWins.find(scatter => scatter.win == 0);
        if (fsScatterWin && fsScatterWin.symbolsAmount == 3) {
            await this.showScatterWins(fsScatterWin);
        }
        return this;
    }
    async showScatterWins(scatterWin) {
        const reel = this.gameSignals.reels;
        reel.dimAllSymbols.emit({ dim: true, except: scatterWin.symbols });
        this.gameSignals.ui.showWin.emit({ win: scatterWin.win });
        await reel.showScatterWins.emit([scatterWin]).all();
    }
}


/***/ }),

/***/ "./game/states/SpinState.ts":
/*!**********************************!*\
  !*** ./game/states/SpinState.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SpinState)
/* harmony export */ });
/* harmony import */ var app_game_states_GameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/game/states/GameState */ "./game/states/GameState.ts");
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var app_model_BetModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/model/BetModel */ "./model/BetModel.ts");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_model_UserModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/model/UserModel */ "./model/UserModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





class SpinState extends app_game_states_GameState__WEBPACK_IMPORTED_MODULE_0__.GameState {
    async run() {
        const mainGameInfo = app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].mainGameInfo;
        const serverCommunicator = app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.fruit.serverCommunicator;
        const reelSignals = app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels;
        this.gameSignals.ui.disableControls.emit();
        reelSignals.spin.emit();
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.infobar.stop.emit();
        this.userModel.takeBet(this.betModel.getTotalBet());
        if (mainGameInfo.hook.length) {
            await serverCommunicator.forceReelStop(mainGameInfo.hook);
        }
        const betId = this.betModel.getChosenBet().id;
        const linesAmount = app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.linesId;
        this.spinResponse = await serverCommunicator.spin({
            bet_id: `${betId}`,
            lines_amount: `${linesAmount}`,
            gameKey: "internship",
        });
        return this;
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__.inject)(app_model_BetModel__WEBPACK_IMPORTED_MODULE_2__["default"])
], SpinState.prototype, "betModel", void 0);
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__.inject)(app_model_UserModel__WEBPACK_IMPORTED_MODULE_4__["default"])
], SpinState.prototype, "userModel", void 0);


/***/ }),

/***/ "./game/states/SpinStopState.ts":
/*!**************************************!*\
  !*** ./game/states/SpinStopState.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SpinStopState)
/* harmony export */ });
/* harmony import */ var app_game_states_GameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/game/states/GameState */ "./game/states/GameState.ts");
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/helpers/TimeHelper */ "./helpers/TimeHelper.ts");
/* harmony import */ var app_server_service_typing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/server/service/typing */ "./server/service/typing.ts");




class SpinStopState extends app_game_states_GameState__WEBPACK_IMPORTED_MODULE_0__.GameState {
    constructor(anticipationReelsProvider) {
        super();
        this.scatterId = -1;
        this.landAnimationPromises = [];
        this.symbolsForLand = [
            app_server_service_typing__WEBPACK_IMPORTED_MODULE_3__.TSymbolId.SCATTER,
            app_server_service_typing__WEBPACK_IMPORTED_MODULE_3__.TSymbolId.WILD,
            app_server_service_typing__WEBPACK_IMPORTED_MODULE_3__.TSymbolId.BONUS,
        ];
        this.anticipationReelsProvider = anticipationReelsProvider;
    }
    async compose() {
        await super.compose();
        const mainGameInfo = app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].mainGameInfo;
        const scatter = mainGameInfo.symbols.find(value => value.isScatter);
        if (!scatter) {
            throw new Error("no scatter symbols in symbols list:" + JSON.stringify(mainGameInfo.symbols));
        }
        this.scatterId = scatter.id;
    }
    async activate() {
        await super.activate();
        this.gameSignals.reels.stopped.add(this.onReelStopped, this);
        this.landAnimationPromises = [];
    }
    async run() {
        const mainGameInfo = app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].mainGameInfo;
        const reelSignals = app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels;
        this.updateAnticipationReels();
        this.updateScatterReels();
        await (0,app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_2__.promiseDelay)(mainGameInfo.timings.minSpinDuration, app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_2__.TimeUnit.sec);
        reelSignals.stop.emit(this.spinResponse.userStats.reelStops);
        await this.gameSignals.spinComplete.promise();
        await this.landAnimationPromises.promise().all();
        if (this.spinResponse.totalWin == 0) {
            await this.gameSignals.reels.dimAllSymbols.emit({ dim: false }).all();
        }
        return this;
    }
    updateAnticipationReels() {
        const anticipationReels = this.anticipationReelsProvider.provide(this.spinResponse);
        this.gameSignals.reels.anticipateReels.emit(anticipationReels);
    }
    updateScatterReels() {
        const scatterReels = [0, 0, 0, 0, 0];
        const scatterWins = this.spinResponse.scatters.wins;
        scatterWins.forEach(scatterWin => scatterWin.symbols.forEach(scatter => scatterReels[scatter.x] = 1));
        this.gameSignals.reels.scatterReels.emit(scatterReels);
    }
    async deactivate() {
        this.gameSignals.reels.stopped.unload(this);
        await super.deactivate();
    }
    onReelStopped(reelIndex) {
        const reelWindow = this.spinResponse.reelWindow[reelIndex];
        const hasScatters = reelWindow.includes(this.scatterId);
        reelWindow.forEach((symbolId, y) => {
            if (this.symbolsForLand.contains(symbolId)) {
                const promiseList = this.gameSignals.reels.play.emit({
                    x: reelIndex, y, animation: "land",
                });
                this.landAnimationPromises.push(promiseList.all());
            }
        });
        if (hasScatters) {
            const scatters = this.spinResponse.scatters.wins[0].symbols;
            scatters.filter(value => value.x == reelIndex).forEach(scatter => {
                const promiseList = this.gameSignals.reels.play.emit({
                    x: reelIndex, y: scatter.y, animation: "land",
                });
                this.landAnimationPromises.push(promiseList.all());
            });
            this.gameSignals.reels.shake.emit();
        }
    }
}


/***/ }),

/***/ "./game/states/WildBonus1State.ts":
/*!****************************************!*\
  !*** ./game/states/WildBonus1State.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WildBonus1State)
/* harmony export */ });
/* harmony import */ var app_game_states_GameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/game/states/GameState */ "./game/states/GameState.ts");

class WildBonus1State extends app_game_states_GameState__WEBPACK_IMPORTED_MODULE_0__.GameState {
    enable() {
        this.wildBonus1Symbols = this.getWildBonus1Symbols();
        return super.enable() && this.wildBonus1Symbols.length > 0;
    }
    async run() {
        await this.gameSignals.reels.showWildBonus1Presentation.emit(this.wildBonus1Symbols).all();
        return this;
    }
    getWildBonus1Symbols() {
        return this.spinResponse.wildFeature.jumps
            .filter(jump => jump.length === 2);
    }
}


/***/ }),

/***/ "./game/states/WildBonus2State.ts":
/*!****************************************!*\
  !*** ./game/states/WildBonus2State.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WildBonus2State)
/* harmony export */ });
/* harmony import */ var app_game_states_GameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/game/states/GameState */ "./game/states/GameState.ts");

class WildBonus2State extends app_game_states_GameState__WEBPACK_IMPORTED_MODULE_0__.GameState {
    constructor() {
        super(...arguments);
        this.WILD_JUMPS = 3;
    }
    enable() {
        const jumps = this.getWildJumps();
        return super.enable() && jumps.length > 0;
    }
    async run() {
        const jumps = this.getWildJumps();
        const reelsSignals = this.gameSignals.reels;
        await reelsSignals.showWildBonus2Presentation.emit(jumps).all();
        return this;
    }
    getWildJumps() {
        const jumps = this.spinResponse.wildFeature.jumps
            .filter(jump => jump.length === this.WILD_JUMPS);
        return jumps;
    }
}


/***/ }),

/***/ "./game/states/WinLineState.ts":
/*!*************************************!*\
  !*** ./game/states/WinLineState.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WinLineState)
/* harmony export */ });
/* harmony import */ var app_game_states_GameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/game/states/GameState */ "./game/states/GameState.ts");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_model_BetModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/model/BetModel */ "./model/BetModel.ts");
/* harmony import */ var app_helpers_promise_UsablePromises__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/helpers/promise/UsablePromises */ "./helpers/promise/UsablePromises.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




class WinLineState extends app_game_states_GameState__WEBPACK_IMPORTED_MODULE_0__.GameState {
    constructor() {
        super(...arguments);
        this.delayBetweenEachLineDisplay = 500;
    }
    enable() {
        return super.enable() && this.spinResponse.winLines.wins.length > 0;
    }
    async run() {
        this.gameSignals.reels.dimAllSymbols.emit({ dim: true });
        await this.showWinsLineByLine(this.spinResponse.winLines.wins);
        await this.showAllWins(this.spinResponse.winLines.wins);
        const winsWin = this.spinResponse.winLines.totalWin;
        this.gameSignals.ui.showWin.emit({ win: winsWin });
        return this;
    }
    async showWin(winLines) {
        const reel = this.gameSignals.reels;
        const winSymbols = this.mainGameModel.getWinSymbolsPositions(winLines);
        reel.undimSpecificSymbols.emit(winSymbols);
        await reel.showLineWins.emit(winLines).all();
        await app_helpers_promise_UsablePromises__WEBPACK_IMPORTED_MODULE_3__["default"].getTimeoutOrClickOnStagePromise(this.delayBetweenEachLineDisplay);
        reel.dimSpecificSymbols.emit(winSymbols);
    }
    async showAllWins(winLines) {
        await this.showWin(winLines);
    }
    async showWinsLineByLine(winLines) {
        for (const win of winLines) {
            const winSymbols = this.mainGameModel.getWinSymbolsPositions([win]);
            this.gameSignals.reels.addWinLable.emit({ symbol: winSymbols[Math.floor(winSymbols.length / 2)],
                win: win.win * this.betModel.getChosenBet().value });
            await this.showWin([win]);
            this.gameSignals.reels.removeWinLable.emit(winSymbols[Math.floor(winSymbols.length / 2)]);
        }
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_1__.inject)(app_model_BetModel__WEBPACK_IMPORTED_MODULE_2__["default"])
], WinLineState.prototype, "betModel", void 0);


/***/ }),

/***/ "./game/states/WinState.ts":
/*!*********************************!*\
  !*** ./game/states/WinState.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WinState)
/* harmony export */ });
/* harmony import */ var app_game_states_GameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/game/states/GameState */ "./game/states/GameState.ts");
/* harmony import */ var app_helpers_promise_UsablePromises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/helpers/promise/UsablePromises */ "./helpers/promise/UsablePromises.ts");
/* harmony import */ var app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/helpers/TimeHelper */ "./helpers/TimeHelper.ts");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_model_BetModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/model/BetModel */ "./model/BetModel.ts");
/* harmony import */ var app_model_UserModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/model/UserModel */ "./model/UserModel.ts");
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







class WinState extends app_game_states_GameState__WEBPACK_IMPORTED_MODULE_0__.GameState {
    constructor(isNeedToShowBigWin = true) {
        super();
        this.isNeedToShowBigWin = isNeedToShowBigWin;
    }
    async compose() {
        return super.compose();
    }
    enable() {
        const hasWins = this.spinResponse.totalWin > 0;
        return super.enable() && hasWins;
    }
    async run() {
        const reel = this.gameSignals.reels;
        const winCounterSignals = this.gameSignals.popup.winCounter;
        const totalWin = this.spinResponse.totalWin;
        reel.dimAllSymbols.emit({ dim: false });
        await winCounterSignals.show.emit(totalWin).all();
        this.gameSignals.ui.showWin.emit({ win: totalWin, isTotalWin: true });
        const isBigWin = this.betModel.bigWinCalculator.isBigWin(totalWin);
        const isNeedToShowBigWin = this.isNeedToShowBigWin && !app_model_GameModel__WEBPACK_IMPORTED_MODULE_6__["default"].isForce;
        if (isNeedToShowBigWin && isBigWin) {
            await app_helpers_promise_UsablePromises__WEBPACK_IMPORTED_MODULE_1__["default"].getClickOnStagePromise();
        }
        else if (isNeedToShowBigWin && !isBigWin) {
            await (0,app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_2__.promiseDelay)(0.5);
        }
        else {
            await (0,app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_2__.promiseDelay)(0.25);
        }
        await winCounterSignals.hide.emit().all();
        this.userModel.updateUserStats(this.spinResponse.userStats);
        return this;
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__.inject)(app_model_BetModel__WEBPACK_IMPORTED_MODULE_4__["default"])
], WinState.prototype, "betModel", void 0);
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__.inject)(app_model_UserModel__WEBPACK_IMPORTED_MODULE_5__["default"])
], WinState.prototype, "userModel", void 0);


/***/ }),

/***/ "./game/states/freespins/FreeSpinsIntroState.ts":
/*!******************************************************!*\
  !*** ./game/states/freespins/FreeSpinsIntroState.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FreeSpinsIntroState)
/* harmony export */ });
/* harmony import */ var app_game_states_GameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/game/states/GameState */ "./game/states/GameState.ts");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_model_FreeSpinModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/model/FreeSpinModel */ "./model/FreeSpinModel.ts");
/* harmony import */ var app_helpers_promise_UsablePromises__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/helpers/promise/UsablePromises */ "./helpers/promise/UsablePromises.ts");
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





class FreeSpinsIntroState extends app_game_states_GameState__WEBPACK_IMPORTED_MODULE_0__.GameState {
    enable() {
        return super.enable() && this.spinResponse.freeSpins.spins.length > 0;
    }
    async run() {
        this.gameSignals.autoplay.stop.emit();
        this.gameSignals.reels.dimAllSymbols.emit({ dim: false });
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.infobar.hide.emit();
        const firstWheelWin = this.mainGameModel.getInitialWinForFreeSpinsGame();
        this.gameSignals.background.show.emit("fs");
        await this.gameSignals.popup.fsIntro.show.emit(this.spinResponse.freeSpins.spins.length).all();
        if (this.freeSpinModel.spinRemains > 0) {
            this.freeSpinModel.addSpins(this.spinResponse, true);
        }
        else {
            this.freeSpinModel.setup(this.spinResponse.freeSpins.spins, firstWheelWin);
        }
        await app_helpers_promise_UsablePromises__WEBPACK_IMPORTED_MODULE_3__["default"].getClickOnStagePromise();
        await this.gameSignals.popup.fsIntro.hide.emit().all();
        return this;
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_1__.inject)(app_model_FreeSpinModel__WEBPACK_IMPORTED_MODULE_2__["default"])
], FreeSpinsIntroState.prototype, "freeSpinModel", void 0);


/***/ }),

/***/ "./game/states/freespins/FreeSpinsLinesWinState.ts":
/*!*********************************************************!*\
  !*** ./game/states/freespins/FreeSpinsLinesWinState.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FreeSpinsLinesWinState)
/* harmony export */ });
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_model_FreeSpinModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/model/FreeSpinModel */ "./model/FreeSpinModel.ts");
/* harmony import */ var app_game_states_WinLineState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/game/states/WinLineState */ "./game/states/WinLineState.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



class FreeSpinsLinesWinState extends app_game_states_WinLineState__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor() {
        super();
    }
    async activate() {
        await super.activate();
        this.spinResponse = this.freeSpinModel.getCurrentSpinResult();
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_0__.inject)(app_model_FreeSpinModel__WEBPACK_IMPORTED_MODULE_1__["default"])
], FreeSpinsLinesWinState.prototype, "freeSpinModel", void 0);


/***/ }),

/***/ "./game/states/freespins/FreeSpinsOutroState.ts":
/*!******************************************************!*\
  !*** ./game/states/freespins/FreeSpinsOutroState.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FreeSpinsOutroState)
/* harmony export */ });
/* harmony import */ var app_game_states_GameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/game/states/GameState */ "./game/states/GameState.ts");
/* harmony import */ var app_helpers_promise_UsablePromises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/helpers/promise/UsablePromises */ "./helpers/promise/UsablePromises.ts");
/* harmony import */ var app_model_FreeSpinModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/model/FreeSpinModel */ "./model/FreeSpinModel.ts");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_model_MainGameModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/model/MainGameModel */ "./model/MainGameModel.ts");
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






class FreeSpinsOutroState extends app_game_states_GameState__WEBPACK_IMPORTED_MODULE_0__.GameState {
    enable() {
        return super.enable() && this.freeSpinModel.hasSpin();
    }
    async run() {
        await this.gameSignals.popup.fsOutro.show.emit(this.spinResponse.totalWin).all();
        await app_helpers_promise_UsablePromises__WEBPACK_IMPORTED_MODULE_1__["default"].getClickOnStagePromise();
        const spinResponse = this.mainGameModel.spinResponse;
        this.gameSignals.reels.clearSymbols.emit();
        this.gameSignals.reels.forceMoveOn.emit(spinResponse.userStats.reelStops);
        await this.gameSignals.popup.fsOutro.hide.emit().all();
        this.gameSignals.background.show.emit("main");
        this.freeSpinModel.reset();
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_5__["default"].game.signals.infobar.show.emit();
        return this;
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__.inject)(app_model_FreeSpinModel__WEBPACK_IMPORTED_MODULE_2__["default"])
], FreeSpinsOutroState.prototype, "freeSpinModel", void 0);
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__.inject)(app_model_MainGameModel__WEBPACK_IMPORTED_MODULE_4__["default"])
], FreeSpinsOutroState.prototype, "mainGameModel", void 0);


/***/ }),

/***/ "./game/states/freespins/FreeSpinsScatterWinState.ts":
/*!***********************************************************!*\
  !*** ./game/states/freespins/FreeSpinsScatterWinState.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FreeSpinsScatterWinState)
/* harmony export */ });
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_model_FreeSpinModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/model/FreeSpinModel */ "./model/FreeSpinModel.ts");
/* harmony import */ var app_game_states_ScatterWinState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/game/states/ScatterWinState */ "./game/states/ScatterWinState.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



class FreeSpinsScatterWinState extends app_game_states_ScatterWinState__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor() {
        super();
    }
    async activate() {
        await super.activate();
        this.spinResponse = this.freeSpinModel.getCurrentSpinResult();
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_0__.inject)(app_model_FreeSpinModel__WEBPACK_IMPORTED_MODULE_1__["default"])
], FreeSpinsScatterWinState.prototype, "freeSpinModel", void 0);


/***/ }),

/***/ "./game/states/freespins/FreeSpinsState.ts":
/*!*************************************************!*\
  !*** ./game/states/freespins/FreeSpinsState.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FreeSpinsState)
/* harmony export */ });
/* harmony import */ var app_game_states_GameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/game/states/GameState */ "./game/states/GameState.ts");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_model_FreeSpinModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/model/FreeSpinModel */ "./model/FreeSpinModel.ts");
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var app_model_BetModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/model/BetModel */ "./model/BetModel.ts");
/* harmony import */ var app_model_UserModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/model/UserModel */ "./model/UserModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






class FreeSpinsState extends app_game_states_GameState__WEBPACK_IMPORTED_MODULE_0__.GameState {
    enable() {
        return super.enable() && this.freeSpinModel.hasNextSpin();
    }
    async run() {
        const reelSignals = app_model_GameModel__WEBPACK_IMPORTED_MODULE_3__["default"].game.signals.reels;
        this.gameSignals.ui.spinButton.disable.emit();
        this.spinResponse = this.freeSpinModel.nextSpin();
         true && console.log("fs spin: ", this.spinResponse);
        this.gameSignals.ui.spinButton.updateCounter.emit(this.freeSpinModel.spinRemains);
        reelSignals.spin.emit();
        await this.goto("fsSpinStopState");
        await this.goto("fsWildBonus1State");
        await this.goto("fsWildBonus2State");
        await this.goto("fsLinesWinState");
        await this.goto("fsScatterWinState");
        await this.goto("reSpinsState");
        await this.goto("fsWinState");
        this.gameSignals.ui.showWin.emit({ win: this.freeSpinModel.totalWin, isTotalWin: true });
        await this.goto("freeSpinsState");
        return this;
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_1__.inject)(app_model_FreeSpinModel__WEBPACK_IMPORTED_MODULE_2__["default"])
], FreeSpinsState.prototype, "freeSpinModel", void 0);
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_1__.inject)(app_model_BetModel__WEBPACK_IMPORTED_MODULE_4__["default"])
], FreeSpinsState.prototype, "betModel", void 0);
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_1__.inject)(app_model_UserModel__WEBPACK_IMPORTED_MODULE_5__["default"])
], FreeSpinsState.prototype, "userModel", void 0);


/***/ }),

/***/ "./game/states/freespins/FreeSpinsStopState.ts":
/*!*****************************************************!*\
  !*** ./game/states/freespins/FreeSpinsStopState.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FreeSpinsStopState)
/* harmony export */ });
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_model_FreeSpinModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/model/FreeSpinModel */ "./model/FreeSpinModel.ts");
/* harmony import */ var app_game_states_SpinStopState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/game/states/SpinStopState */ "./game/states/SpinStopState.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



class FreeSpinsStopState extends app_game_states_SpinStopState__WEBPACK_IMPORTED_MODULE_2__["default"] {
    async activate() {
        await super.activate();
        this.spinResponse = this.freeSpinModel.getCurrentSpinResult();
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_0__.inject)(app_model_FreeSpinModel__WEBPACK_IMPORTED_MODULE_1__["default"])
], FreeSpinsStopState.prototype, "freeSpinModel", void 0);


/***/ }),

/***/ "./game/states/freespins/FreeSpinsWildBonus1State.ts":
/*!***********************************************************!*\
  !*** ./game/states/freespins/FreeSpinsWildBonus1State.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FreeSpinsWildBonus1State)
/* harmony export */ });
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_model_FreeSpinModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/model/FreeSpinModel */ "./model/FreeSpinModel.ts");
/* harmony import */ var app_game_states_WildBonus1State__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/game/states/WildBonus1State */ "./game/states/WildBonus1State.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



class FreeSpinsWildBonus1State extends app_game_states_WildBonus1State__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor() {
        super();
    }
    async activate() {
        await super.activate();
        this.spinResponse = this.freeSpinModel.getCurrentSpinResult();
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_0__.inject)(app_model_FreeSpinModel__WEBPACK_IMPORTED_MODULE_1__["default"])
], FreeSpinsWildBonus1State.prototype, "freeSpinModel", void 0);


/***/ }),

/***/ "./game/states/freespins/FreeSpinsWildBonus2State.ts":
/*!***********************************************************!*\
  !*** ./game/states/freespins/FreeSpinsWildBonus2State.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FreeSpinsWildBonus2State)
/* harmony export */ });
/* harmony import */ var app_game_states_WildBonus2State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/game/states/WildBonus2State */ "./game/states/WildBonus2State.ts");
/* harmony import */ var app_model_FreeSpinModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/model/FreeSpinModel */ "./model/FreeSpinModel.ts");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



class FreeSpinsWildBonus2State extends app_game_states_WildBonus2State__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
    }
    async activate() {
        await super.activate();
        this.spinResponse = this.freeSpinModel.getCurrentSpinResult();
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_2__.inject)(app_model_FreeSpinModel__WEBPACK_IMPORTED_MODULE_1__["default"])
], FreeSpinsWildBonus2State.prototype, "freeSpinModel", void 0);


/***/ }),

/***/ "./game/states/freespins/FreeSpinsWinState.ts":
/*!****************************************************!*\
  !*** ./game/states/freespins/FreeSpinsWinState.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FreeSpinsWinState)
/* harmony export */ });
/* harmony import */ var app_game_states_WinState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/game/states/WinState */ "./game/states/WinState.ts");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_model_FreeSpinModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/model/FreeSpinModel */ "./model/FreeSpinModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



class FreeSpinsWinState extends app_game_states_WinState__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(false);
    }
    async activate() {
        await super.activate();
        this.spinResponse = this.freeSpinModel.getCurrentSpinResult();
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_1__.inject)(app_model_FreeSpinModel__WEBPACK_IMPORTED_MODULE_2__["default"])
], FreeSpinsWinState.prototype, "freeSpinModel", void 0);


/***/ }),

/***/ "./game/states/freespins/ReSpinsState.ts":
/*!***********************************************!*\
  !*** ./game/states/freespins/ReSpinsState.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReSpinsState)
/* harmony export */ });
/* harmony import */ var app_game_states_GameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/game/states/GameState */ "./game/states/GameState.ts");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_model_FreeSpinModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/model/FreeSpinModel */ "./model/FreeSpinModel.ts");
/* harmony import */ var app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/helpers/TimeHelper */ "./helpers/TimeHelper.ts");
/* harmony import */ var app_helpers_promise_UsablePromises__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/helpers/promise/UsablePromises */ "./helpers/promise/UsablePromises.ts");
/* harmony import */ var res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! res/configs/gameConfig.json */ "../resources/assets/configs/gameConfig.json");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






class ReSpinsState extends app_game_states_GameState__WEBPACK_IMPORTED_MODULE_0__.GameState {
    enable() {
        return super.enable() && this.freeSpinModel.getCurrentSpinResult().freeSpins.spins.length > 0;
    }
    async run() {
        const currentSpinResult = this.freeSpinModel.getCurrentSpinResult();
        const reSpinsAmount = currentSpinResult.freeSpins.spins.length;
        const fsIntroSignals = this.gameSignals.popup.fsIntro;
        await fsIntroSignals.show.emit(reSpinsAmount).all();
        this.freeSpinModel.addReSpins();
        await Promise.race([
            (0,app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_3__.promiseDelay)(res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_5__.popup.generalTimeout, app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_3__.TimeUnit.sec),
            app_helpers_promise_UsablePromises__WEBPACK_IMPORTED_MODULE_4__["default"].getClickOnStagePromise(),
        ]);
        await fsIntroSignals.hide.emit().all();
        this.gameSignals.ui.spinButton.updateCounter.emit(reSpinsAmount);
        return this;
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_1__.inject)(app_model_FreeSpinModel__WEBPACK_IMPORTED_MODULE_2__["default"])
], ReSpinsState.prototype, "freeSpinModel", void 0);


/***/ }),

/***/ "./helpers/ArrayUtils.ts":
/*!*******************************!*\
  !*** ./helpers/ArrayUtils.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ArrayUtils)
/* harmony export */ });
class ArrayUtils {
    static remove(arr, o) {
        while (arr.indexOf(o) >= 0) {
            const indexOf = arr.indexOf(o);
            arr.splice(indexOf, 1);
        }
    }
}


/***/ }),

/***/ "./helpers/DisplayObjectHelper.ts":
/*!****************************************!*\
  !*** ./helpers/DisplayObjectHelper.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DisplayObjectHelper)
/* harmony export */ });
class DisplayObjectHelper {
    static isChildOff(child, parent) {
        if (child.parent === null) {
            return false;
        }
        else if (parent === child) {
            return true;
        }
        else {
            return this.isChildOff(child.parent, parent);
        }
    }
    static isChildHaveName(child, name) {
        if (child.parent === null) {
            return false;
        }
        else if (child.name === name) {
            return true;
        }
        else {
            return this.isChildHaveName(child.parent, name);
        }
    }
}


/***/ }),

/***/ "./helpers/GameLocalStorage.ts":
/*!*************************************!*\
  !*** ./helpers/GameLocalStorage.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class GameLocalStorage {
    constructor(gameName) {
        this.gameName = gameName;
    }
    getItem(key) {
        const fullKey = `${this.gameName}.${key}`;
        return window.localStorage.getItem(fullKey);
    }
    setItem(key, value) {
        const fullKey = `${this.gameName}.${key}`;
        window.localStorage.setItem(fullKey, value);
    }
    removeItem(key) {
        const fullKey = `${this.gameName}.${key}`;
        window.localStorage.removeItem(fullKey);
    }
    /**
     * @deprecated removes all other games values
     */
    clear() {
        window.localStorage.clear();
    }
}
const gameLocalStorage = new GameLocalStorage("country-adventures");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameLocalStorage);


/***/ }),

/***/ "./helpers/GuiPrimitive.ts":
/*!*********************************!*\
  !*** ./helpers/GuiPrimitive.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoundRect": () => (/* binding */ RoundRect),
/* harmony export */   "getCircle": () => (/* binding */ getCircle),
/* harmony export */   "getCircleTexture": () => (/* binding */ getCircleTexture),
/* harmony export */   "getRect": () => (/* binding */ getRect)
/* harmony export */ });
/* harmony import */ var _pixi_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pixi/math */ "../node_modules/@pixi/math/lib/index.mjs");
/* harmony import */ var _pixi_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pixi/constants */ "../node_modules/@pixi/constants/lib/index.mjs");
/* harmony import */ var _pixi_graphics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pixi/graphics */ "../node_modules/@pixi/graphics/lib/index.mjs");



function getCircleTexture(renderer, radius, color = 0xff0000, alpha = 1) {
    const circle = getCircle(radius, color, alpha);
    const rectangle = new _pixi_math__WEBPACK_IMPORTED_MODULE_0__.Rectangle(-radius - 2, -radius - 2, radius * 2, radius * 2);
    return renderer.generateTexture(circle, {
        region: rectangle,
        scaleMode: _pixi_constants__WEBPACK_IMPORTED_MODULE_1__.SCALE_MODES.LINEAR,
        multisample: 10,
    });
}
function getCircle(radius, color = 0xff0000, alpha = 1) {
    const result = new _pixi_graphics__WEBPACK_IMPORTED_MODULE_2__.Graphics();
    result.beginFill(color, alpha);
    result.drawCircle(0, 0, radius);
    result.endFill();
    return result;
}
function getRect(w, h, color = 0xff0000, alpha = 1) {
    return new RoundRect(w, h, 0, color, alpha);
}
class RoundRect extends _pixi_graphics__WEBPACK_IMPORTED_MODULE_2__.Graphics {
    constructor(width, height, radius = 5, bgColor = 0xebeced, alpha = 1) {
        super();
        this.__width = 0;
        this.__height = 0;
        this._radius = 0;
        this._bgColor = 0;
        this._alpha = 0;
        this
            .updateWidth(width)
            .updateHeight(height)
            .updateRadius(radius)
            .updateBgColor(bgColor)
            .updateAlpha(alpha);
        this.update();
    }
    update() {
        this.clear();
        this.beginFill(this._bgColor, this._alpha);
        this.drawRoundedRect(0, 0, this.__width, this.__height, this._radius);
        this.endFill();
        this.x = 0;
        this.y = 0;
        return this;
    }
    updateWidth(value) {
        this.__width = value;
        return this;
    }
    updateHeight(value) {
        this.__height = value;
        return this;
    }
    updateRadius(value) {
        this._radius = value;
        return this;
    }
    updateBgColor(value) {
        this._bgColor = value;
        return this;
    }
    updateAlpha(value) {
        this._alpha = value;
        return this;
    }
}


/***/ }),

/***/ "./helpers/HrefParamReader.ts":
/*!************************************!*\
  !*** ./helpers/HrefParamReader.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HrefParamReader": () => (/* binding */ HrefParamReader)
/* harmony export */ });
class HrefParamReader {
    constructor(href) {
        const params = (href !== null && href !== void 0 ? href : window.location.href).replace(/.*\?/, "");
        this.searchParams = new URLSearchParams(params);
    }
    has(urlParam) {
        return this.searchParams.get(urlParam) != null;
    }
    get(urlParam, defaultResult) {
        var _a;
        const result = (_a = (this.searchParams.get(urlParam))) !== null && _a !== void 0 ? _a : defaultResult;
        if (!result) {
            throw new Error(`urlParam[${urlParam}] is not exist in href`);
        }
        return result;
    }
}


/***/ }),

/***/ "./helpers/MathUtils.ts":
/*!******************************!*\
  !*** ./helpers/MathUtils.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "correctDivision": () => (/* binding */ correctDivision),
/* harmony export */   "correctMultiplication": () => (/* binding */ correctMultiplication),
/* harmony export */   "easeInSine01": () => (/* binding */ easeInSine01)
/* harmony export */ });
/*
    * floatPointOffset - Offset floating-point to avoid issue of division with numbers floating-point
    * JS float numbers division bug: 0.15/0.05 = 2.9999999999999996 instead of 3
    */
function correctDivision(dividend, divisor, floatPointOffset = 100) {
    return (dividend * floatPointOffset) / (divisor * floatPointOffset);
}
/*
* floatPointOffset - Offset floating-point to avoid issue of multiplication with numbers floating-point
* JS float numbers multiplication bug: 0.8*3 = 2.4000000000000004 instead of 2.4
*/
function correctMultiplication(factor, multiplier, floatPointOffset = 100) {
    return ((factor * floatPointOffset) * (multiplier * floatPointOffset)) / (floatPointOffset * floatPointOffset);
}
/*
* ease in function, valid for range 0..1
*/
function easeInSine01(t) {
    return -1 * Math.cos(t * (Math.PI * 0.5)) + 1;
}


/***/ }),

/***/ "./helpers/ObjectHelper.ts":
/*!*********************************!*\
  !*** ./helpers/ObjectHelper.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ensure": () => (/* binding */ ensure)
/* harmony export */ });
const defaultEnsureMessage = "This value was promised to be there.";
const ensure = (argument, message = defaultEnsureMessage) => {
    if (argument === undefined || argument === null) {
        throw new TypeError(message);
    }
    return argument;
};


/***/ }),

/***/ "./helpers/ScaleHelper.ts":
/*!********************************!*\
  !*** ./helpers/ScaleHelper.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScaleHelper": () => (/* binding */ ScaleHelper)
/* harmony export */ });
class ScaleHelper {
    static scaleFontToFit(parentObject, label, padding) {
        const scale = Math.min(1, Math.min((parentObject.width - padding) / label.width, (parentObject.height - padding) / label.height));
        label.style.fontSize = Number(label.style.fontSize) * scale;
    }
    static scaleFontToFitWidth(width, label) {
        const scale = Math.min(1, Math.min(width / label.width));
        label.style.fontSize = Number(label.style.fontSize) * scale;
    }
    static scaleToHeight(container, height) {
        container.scale.set(1);
        const scale = Math.min(1, height / container.height);
        container.scale.set(scale);
    }
    static scaleToWidth(container, width) {
        container.scale.set(1);
        const scale = Math.min(1, width / container.width);
        container.scale.set(scale);
    }
    static scaleToSize(pixiContainer, size) {
        var _a, _b;
        pixiContainer.scale.set(1);
        const width = size.width;
        const height = size.height;
        const containerWidth = (_a = pixiContainer.boundsWidth) !== null && _a !== void 0 ? _a : pixiContainer.width;
        const containerHeight = (_b = pixiContainer.boundsHeight) !== null && _b !== void 0 ? _b : pixiContainer.height;
        const scale = Math.max(width / containerWidth, height / containerHeight);
        pixiContainer.scale.set(scale);
    }
    static scaleToSizeIn(pixiContainer, size) {
        var _a, _b;
        pixiContainer.scale.set(1);
        const width = size.width;
        const height = size.height;
        const containerWidth = (_a = pixiContainer.boundsWidth) !== null && _a !== void 0 ? _a : pixiContainer.width;
        const containerHeight = (_b = pixiContainer.boundsHeight) !== null && _b !== void 0 ? _b : pixiContainer.height;
        const scale = Math.min(width / containerWidth, height / containerHeight);
        pixiContainer.scale.set(scale);
    }
    static scaleToContainerFit(pixiContainer, pixiContainerToFit) {
        pixiContainer.scale.set(1);
        const width = pixiContainerToFit.width;
        const height = pixiContainerToFit.height;
        const scale = Math.max(width / pixiContainer.width, height / pixiContainer.height);
        pixiContainer.scale.set(scale);
    }
}


/***/ }),

/***/ "./helpers/TimeHelper.ts":
/*!*******************************!*\
  !*** ./helpers/TimeHelper.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ETimeUnit": () => (/* binding */ ETimeUnit),
/* harmony export */   "TimeUnit": () => (/* binding */ TimeUnit),
/* harmony export */   "promise": () => (/* binding */ promise),
/* harmony export */   "promiseDelay": () => (/* binding */ promiseDelay)
/* harmony export */ });
var ETimeUnit;
(function (ETimeUnit) {
    ETimeUnit[ETimeUnit["mls"] = 0] = "mls";
    ETimeUnit[ETimeUnit["sec"] = 1] = "sec";
    ETimeUnit[ETimeUnit["min"] = 2] = "min";
})(ETimeUnit || (ETimeUnit = {}));
class TimeUnit {
    constructor(timeUnit) {
        this.timeUnit = timeUnit;
    }
    toMillis(duration) {
        switch (this.timeUnit) {
            case ETimeUnit.mls:
                return duration;
            case ETimeUnit.sec:
                return duration * 1000;
            case ETimeUnit.min:
                return duration * 60 * 1000;
        }
    }
    toSeconds(duration) {
        return this.toMillis(duration) / 1000;
    }
    toMinutes(duration) {
        return this.toSeconds(duration) / 60;
    }
    async await(duration) {
        await promiseDelay(duration, this);
    }
}
TimeUnit.mls = new TimeUnit(ETimeUnit.mls);
TimeUnit.sec = new TimeUnit(ETimeUnit.sec);
TimeUnit.min = new TimeUnit(ETimeUnit.min);
function promiseDelay(delay, timeUnit = TimeUnit.mls) {
    return new Promise(resolve => {
        setTimeout(resolve, timeUnit.toMillis(delay));
    });
}
const promise = Object.assign((awaitChecker, options) => {
    const interval = options.interval;
    const duration = options.duration;
    const time = Date.now();
    const promiseAwaitDuration = duration.timeUnit.toMillis(duration.duration);
    const timeout = interval.timeUnit.toMillis(interval.duration);
    return new Promise((resolve, reject) => {
        const intervalId = setInterval(() => {
            if (awaitChecker()) {
                clearInterval(intervalId);
                resolve();
                return;
            }
            if (Date.now() - time > promiseAwaitDuration) {
                clearInterval(intervalId);
                reject(new Error("Wait time expired"));
            }
        }, timeout);
    });
}, {
    in: (timeUnit) => {
        return {
            tobe: (awaitChecker, duration, interval) => {
                return promise(awaitChecker, {
                    duration: { timeUnit, duration },
                    interval: { timeUnit, duration: interval },
                });
            },
        };
    },
});


/***/ }),

/***/ "./helpers/math.ts":
/*!*************************!*\
  !*** ./helpers/math.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vector": () => (/* binding */ Vector),
/* harmony export */   "distance": () => (/* binding */ distance),
/* harmony export */   "randomInt": () => (/* binding */ randomInt),
/* harmony export */   "randomPointOnUnitCircle": () => (/* binding */ randomPointOnUnitCircle)
/* harmony export */ });
class Vector {
    constructor(x, y) {
        this.x = typeof x == "number" ? x : x.x;
        this.y = typeof x == "number" ? y !== null && y !== void 0 ? y : 0 : x.y;
    }
    data() {
        return {
            x: this.x, y: this.y,
        };
    }
    add(v) {
        this.y = this.y + v.y;
        this.x = this.x + v.x;
        return this;
    }
    merge(v) {
        this.y = (this.y + v.y) * 0.5;
        this.x = (this.x + v.x) * 0.5;
        return this;
    }
    sub(v) {
        this.x = this.x - v.x;
        this.y = this.y - v.y;
        return this;
    }
    scale(n) {
        this.x = this.x * n;
        this.y = this.y * n;
        return this;
    }
    scaleDown(n) {
        this.x = this.x / n;
        this.y = this.y / n;
        return this;
    }
    dotProduct(v) {
        return this.x * v.x + this.y * v.y;
    }
    project(v) {
        const normalized = v.clone().normalize();
        return normalized.scale(this.dotProduct(normalized));
    }
    copyFrom(v) {
        this.x = v.x;
        this.y = v.y;
        return this;
    }
    negate() {
        return this.scale(-1);
    }
    mult(v) {
        this.x = this.x * v.x;
        this.y = this.y * v.y;
        return this;
    }
    div(v) {
        this.x = this.x / v.x;
        this.y = this.y / v.y;
        return this;
    }
    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    angle() {
        return Math.atan2(this.y, this.x);
    }
    normalize() {
        const m = this.mag();
        this.scaleDown(m);
        return this;
    }
    clone() {
        return new Vector(this);
    }
    set(x, y) {
        this.x = x;
        this.y = y;
    }
}
function distance(p1, p2) {
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
}
function randomInt(upperBound) {
    return Math.floor(Math.random() * (upperBound + 1));
}
function randomPointOnUnitCircle() {
    const angle = Math.random() * Math.PI * 2;
    const x = Math.cos(angle);
    const y = Math.sin(angle);
    return new Vector(x, y);
}


/***/ }),

/***/ "./helpers/promise/PromiseList.ts":
/*!****************************************!*\
  !*** ./helpers/promise/PromiseList.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PromiseList)
/* harmony export */ });
class PromiseList {
    constructor(promises) {
        this.promises = promises;
    }
    all() {
        return Promise.all(this.promises);
    }
    race() {
        return Promise.race(this.promises);
    }
}


/***/ }),

/***/ "./helpers/promise/ResolvablePromise.ts":
/*!**********************************************!*\
  !*** ./helpers/promise/ResolvablePromise.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class PromiseHelper {
    getResolvablePromise() {
        let resolver;
        const promise = new Promise(resolve => {
            resolver = resolve;
        });
        const assign = Object.assign(promise, {
            resolve: (data) => {
                resolver(data);
            },
            resolved: false,
        });
        assign.then(() => {
            assign.resolved = true;
        });
        return assign;
    }
    getPromiseCounter(count) {
        let resolver;
        const promise = new Promise(resolve => {
            resolver = resolve;
        });
        const assign = Object.assign(promise, {
            resolve: (data) => {
                if (--count <= 0) {
                    resolver(data);
                }
            },
            resolved: false,
        });
        assign.then(() => {
            assign.resolved = true;
        });
        return assign;
    }
}
const promiseHelper = new PromiseHelper();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (promiseHelper);


/***/ }),

/***/ "./helpers/promise/UsablePromises.ts":
/*!*******************************************!*\
  !*** ./helpers/promise/UsablePromises.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsablePromises": () => (/* binding */ UsablePromises),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var app_helpers_promise_ResolvablePromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/helpers/promise/ResolvablePromise */ "./helpers/promise/ResolvablePromise.ts");
/* harmony import */ var app_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/Main */ "./Main.ts");
/* harmony import */ var app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/helpers/TimeHelper */ "./helpers/TimeHelper.ts");



class UsablePromises {
    getTimeoutOrClickOnStagePromise(milliseconds) {
        const timeoutPromise = app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_2__.TimeUnit.mls["await"](milliseconds);
        const clickPromise = this.getClickOnStagePromise();
        return Promise.race([timeoutPromise, clickPromise]);
    }
    getClickOnStagePromise() {
        return this.getClickPromise(app_Main__WEBPACK_IMPORTED_MODULE_1__.Main.APP.stage);
    }
    getClickPromise(container) {
        const promise = app_helpers_promise_ResolvablePromise__WEBPACK_IMPORTED_MODULE_0__["default"].getResolvablePromise();
        container.eventMode = "static";
        container.once("pointerdown", promise.resolve, this);
        promise.then(() => {
            container.eventMode = "auto";
        });
        return promise;
    }
}
const usablePromises = new UsablePromises();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usablePromises);


/***/ }),

/***/ "./helpers/promise/gsap/PromisableGsap.ts":
/*!************************************************!*\
  !*** ./helpers/promise/gsap/PromisableGsap.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "../node_modules/gsap/index.js");
/* harmony import */ var app_helpers_promise_ResolvablePromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/helpers/promise/ResolvablePromise */ "./helpers/promise/ResolvablePromise.ts");
// eslint-disable-next-line import/no-named-as-default


class PromisableGsap {
    // eslint-disable-next-line
    to(target, prop) {
        const breakPromise = prop.breakPromise ? prop.breakPromise : app_helpers_promise_ResolvablePromise__WEBPACK_IMPORTED_MODULE_0__["default"].getResolvablePromise();
        if (breakPromise.resolved) {
            return Promise.resolve();
        }
        delete prop.breakPromise;
        return new Promise(resolve => {
            const tween = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(target, {
                duration: 0.75,
                ...prop,
                onComplete: resolve,
            });
            breakPromise.then(() => {
                tween.kill();
            });
        });
    }
}
const pgsap = new PromisableGsap();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pgsap);


/***/ }),

/***/ "./helpers/signals/signal/Signal.ts":
/*!******************************************!*\
  !*** ./helpers/signals/signal/Signal.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Signal)
/* harmony export */ });
/* harmony import */ var _promise_PromiseList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../promise/PromiseList */ "./helpers/promise/PromiseList.ts");

class Signal {
    constructor() {
        this.slots = [];
    }
    get onListenerAdded() {
        var _a;
        this._onListenerAdded = (_a = this._onListenerAdded) !== null && _a !== void 0 ? _a : new Signal();
        return this._onListenerAdded;
    }
    addOnce(slot, $this = null, priory = 0) {
        this.add(value => {
            this.remove(slot);
            slot(value);
        }, $this, priory);
        return this;
    }
    reAdd(slot, $this = null) {
        this.remove(slot);
        this.add(slot, $this);
        return this;
    }
    add(slot, $this = null, priory = 0) {
        this.slots.push(new SignalSlotContainer(slot, $this, priory));
        return this;
    }
    emit(payload) {
        return this.notify(this.slots, payload);
    }
    notify(slots, payload) {
        const promises = [];
        slots
            .sort((a, b) => a.priority - b.priority)
            .forEach(slot => {
            if (slot.length == 1) {
                slot.call(payload);
            }
            else {
                promises.push(new Promise(resolve => {
                    slot.call(payload, resolve);
                }));
            }
        });
        return new _promise_PromiseList__WEBPACK_IMPORTED_MODULE_0__["default"](promises);
    }
    remove(slot) {
        this.slots = this.slots.filter(function (item) {
            const result = item.slot !== slot;
            if (!result) {
                item.dispose();
            }
            return result;
        });
        return this;
    }
    unload($this) {
        this.slots = this.slots.filter(function (item) {
            const result = item.ctx !== $this;
            if (!result) {
                item.dispose();
            }
            return result;
        });
    }
    async promise() {
        return new Promise(resolve => {
            this.addOnce(value => {
                resolve(value);
            });
        });
    }
    filter(cb, $this = null) {
        const signal = new Signal();
        const slot = (value) => {
            if (cb(value)) {
                signal.emit(value);
            }
        };
        this.add(slot, $this);
        return signal;
    }
}
class SignalSlotContainer {
    constructor(slot, ctx, priority) {
        this.slot = slot;
        this.ctx = ctx;
        this.priority = priority;
        this.isDisposed = false;
        this.length = slot.length;
    }
    call(payload, resolve) {
        if (this.isDisposed) {
            return;
        }
        if (this.ctx) {
            this.slot.call(this.ctx, payload, resolve);
        }
        else {
            this.slot.call(this.slot, payload, resolve);
        }
    }
    dispose() {
        this.isDisposed = true;
    }
}


/***/ }),

/***/ "./helpers/spine/AnimationEndStateListener.ts":
/*!****************************************************!*\
  !*** ./helpers/spine/AnimationEndStateListener.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationEndStateListener": () => (/* binding */ AnimationEndStateListener)
/* harmony export */ });
/* harmony import */ var app_helpers_spine_BaseAnimationStateListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/helpers/spine/BaseAnimationStateListener */ "./helpers/spine/BaseAnimationStateListener.ts");

class AnimationEndStateListener extends app_helpers_spine_BaseAnimationStateListener__WEBPACK_IMPORTED_MODULE_0__.BaseAnimationStateListener {
    constructor(endListener) {
        super();
        this.endListener = endListener;
    }
    end(entry) {
        this.endListener(entry);
    }
}


/***/ }),

/***/ "./helpers/spine/BaseAnimationStateListener.ts":
/*!*****************************************************!*\
  !*** ./helpers/spine/BaseAnimationStateListener.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseAnimationStateListener": () => (/* binding */ BaseAnimationStateListener)
/* harmony export */ });
class BaseAnimationStateListener {
    start(entry) { }
    interrupt(entry) { }
    end(entry) { }
    dispose(entry) { }
    complete(entry) { }
    event(entry, event) { }
}


/***/ }),

/***/ "./helpers/spine/CompleteAnimationStateListener.ts":
/*!*********************************************************!*\
  !*** ./helpers/spine/CompleteAnimationStateListener.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompleteAnimationStateListener": () => (/* binding */ CompleteAnimationStateListener)
/* harmony export */ });
/* harmony import */ var app_helpers_spine_BaseAnimationStateListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/helpers/spine/BaseAnimationStateListener */ "./helpers/spine/BaseAnimationStateListener.ts");

class CompleteAnimationStateListener extends app_helpers_spine_BaseAnimationStateListener__WEBPACK_IMPORTED_MODULE_0__.BaseAnimationStateListener {
    constructor(fn) {
        super();
        this.fn = fn;
    }
    complete(entry) {
        this.fn(entry);
    }
}


/***/ }),

/***/ "./helpers/spine/EventAnimationStateListener.ts":
/*!******************************************************!*\
  !*** ./helpers/spine/EventAnimationStateListener.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventAnimationStateListener": () => (/* binding */ EventAnimationStateListener)
/* harmony export */ });
/* harmony import */ var app_helpers_spine_BaseAnimationStateListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/helpers/spine/BaseAnimationStateListener */ "./helpers/spine/BaseAnimationStateListener.ts");

class EventAnimationStateListener extends app_helpers_spine_BaseAnimationStateListener__WEBPACK_IMPORTED_MODULE_0__.BaseAnimationStateListener {
    constructor(fn) {
        super();
        this.fn = fn;
    }
    event(entry, event) {
        this.fn(entry, event);
    }
}


/***/ }),

/***/ "./helpers/spine/SpineHelper.ts":
/*!**************************************!*\
  !*** ./helpers/spine/SpineHelper.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SpineHelper)
/* harmony export */ });
// noinspection JSUnusedGlobalSymbols
class SpineHelper {
    static clearSlotContainers(spineControl, ...names) {
        const spine = spineControl.spine;
        if (!names || names.length == 0) {
            spine.slotContainers.forEach(slotContainer => slotContainer.removeChildren());
        }
        else {
            names.forEach(name => {
                const slotIndex = spine.spineData.slots.findIndex(slot => slot.name == name);
                spine.slotContainers[slotIndex].removeChildren();
            });
        }
    }
    static replaceInSlotContainer(spineControl, name, container, copySlotsData = false) {
        container.rotation = Math.PI;
        container.skew.y = Math.PI;
        const spine = spineControl.spine;
        const slots = spine.spineData.slots;
        for (let i = 0; i < slots.length; i++) {
            if (slots[i].name == name) {
                const slotContainer = spine.slotContainers[i];
                const displayObjects = slotContainer.removeChildren();
                if (copySlotsData) {
                    container.x = displayObjects[0].x;
                    container.y = displayObjects[0].y;
                    // todo: need to check for items that added in already replaced spine;
                    // container.rotation = displayObjects[0].rotation + Math.PI;
                    // container.skew.y = displayObjects[0].skew.y + Math.PI;
                }
                slotContainer.addChild(container);
                slotContainer.name = name;
                return slotContainer;
            }
        }
        return null;
    }
    static addToSlotContainer(spineControl, name, container) {
        container.rotation = Math.PI;
        container.skew.y = Math.PI;
        const spine = spineControl.spine;
        const slots = spine.spineData.slots;
        for (let i = 0; i < slots.length; i++) {
            if (slots[i].name == name) {
                const slotContainer = spine.slotContainers[i];
                slotContainer.addChild(container);
                return slotContainer;
            }
        }
        return null;
    }
    static getSlotContainer(spineControl, name) {
        const spine = spineControl.spine;
        const slots = spine.spineData.slots;
        const slot = slots.find(slot => slot.name == name);
        if (slot) {
            return spine.slotContainers[slot.index];
        }
        return null;
    }
    static getSlot(spine, name) {
        const slots = spine.skeleton.slots;
        for (let i = 0; i < slots.length; i++) {
            if (slots[i].data.name == name) {
                return slots[i];
            }
        }
        return null;
    }
    static printSlots(spine) {
        const slots = spine.spineData.slots;
        let output = "Slots: ";
        for (let i = 0; i < slots.length; i++) {
            output += "[" + i + "] == " + slots[i].name;
            if (i < slots.length - 1) {
                output += ", ";
            }
        }
        console.log(output);
    }
    static printBones(spine) {
        const bones = spine.spineData.bones;
        let output = "Bones: ";
        for (let i = 0; i < bones.length; i++) {
            const bone = bones[i];
            output += "[" + i + "] == " + bone.name;
            if (i < bones.length - 1) {
                output += ", ";
            }
        }
        console.log(output);
    }
}


/***/ }),

/***/ "./helpers/spine/SpineStateListenerFactory.ts":
/*!****************************************************!*\
  !*** ./helpers/spine/SpineStateListenerFactory.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var app_helpers_spine_CompleteAnimationStateListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/helpers/spine/CompleteAnimationStateListener */ "./helpers/spine/CompleteAnimationStateListener.ts");
/* harmony import */ var app_helpers_spine_EventAnimationStateListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/helpers/spine/EventAnimationStateListener */ "./helpers/spine/EventAnimationStateListener.ts");
/* harmony import */ var app_helpers_spine_AnimationEndStateListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/helpers/spine/AnimationEndStateListener */ "./helpers/spine/AnimationEndStateListener.ts");



// noinspection JSUnusedGlobalSymbols
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class SpineStateListenerFactory {
    complete(fn) {
        return new app_helpers_spine_CompleteAnimationStateListener__WEBPACK_IMPORTED_MODULE_0__.CompleteAnimationStateListener(fn);
    }
    event(fn) {
        return new app_helpers_spine_EventAnimationStateListener__WEBPACK_IMPORTED_MODULE_1__.EventAnimationStateListener(fn);
    }
    end(fn) {
        return new app_helpers_spine_AnimationEndStateListener__WEBPACK_IMPORTED_MODULE_2__.AnimationEndStateListener(fn);
    }
}());


/***/ }),

/***/ "./layoutManager/DevPixiDrawLayoutPlugin.ts":
/*!**************************************************!*\
  !*** ./layoutManager/DevPixiDrawLayoutPlugin.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DevPixiDrawLayoutPlugin)
/* harmony export */ });
/* harmony import */ var _pixi_graphics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pixi/graphics */ "../node_modules/@pixi/graphics/lib/index.mjs");
/* harmony import */ var _pixi_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pixi/text */ "../node_modules/@pixi/text/lib/index.mjs");


class DevPixiDrawLayoutPlugin {
    constructor(stage) {
        this.stage = stage;
        this.graphics = new _pixi_graphics__WEBPACK_IMPORTED_MODULE_0__.Graphics();
    }
    update(layout) {
        const graphics = this.graphics;
        graphics.lineStyle(5, 0xff0000, .5);
        graphics.beginFill(0x00ff00, .125);
        if (layout.uid == "") {
            this.drawLayout(layout);
        }
    }
    beforeUpdate() {
        const graphics = this.graphics;
        this.stage.addChild(graphics);
        graphics.clear();
        graphics.removeChildren();
    }
    afterUpdate() { }
    drawLayout(layout) {
        const graphics = this.graphics;
        const finalLayout = layout.finalLayout;
        graphics.drawRect(finalLayout.x, finalLayout.y, finalLayout.width, finalLayout.height);
        const showSize = false;
        const size = showSize ? `[x:${finalLayout.x}, y:${finalLayout.y}, w:${finalLayout.width}, h:${finalLayout.height}, ]` : "";
        const text = new _pixi_text__WEBPACK_IMPORTED_MODULE_1__.Text(` ${layout.name} ${size}\n`, {
            stroke: "white",
            strokeThickness: 1,
        });
        this.graphics.addChild(text);
        text.position.set(finalLayout.x, finalLayout.y);
        layout.layouts.forEach(value => {
            this.drawLayout(value);
        });
    }
    dispose() {
        this.graphics.clear();
        this.graphics.removeChildren();
    }
}


/***/ }),

/***/ "./layoutManager/LayoutManager.ts":
/*!****************************************!*\
  !*** ./layoutManager/LayoutManager.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LayoutManager)
/* harmony export */ });
/* harmony import */ var _helpers_ArrayUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../helpers/ArrayUtils */ "./helpers/ArrayUtils.ts");
/* harmony import */ var _src_helpers_ObjectHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../src/helpers/ObjectHelper */ "./helpers/ObjectHelper.ts");
/* eslint-disable max-len */


// noinspection SuspiciousTypeOfGuard
class LayoutManager {
    constructor(applicationUpdateRequest) {
        this.layouts = [];
        this.uniqueLayouts = [];
        this.plugins = [];
        this.applicationUpdateRequest = applicationUpdateRequest != undefined ? applicationUpdateRequest : () => { };
    }
    addLayout(...partialLayouts) {
        const layouts = partialLayouts.map(partialLayout => this.getLayoutFromPartial(partialLayout));
        this.layouts.push(...layouts);
        this.uniqueLayouts.push(...partialLayouts.filter(value => value.uid && value.uid != ""));
        return layouts;
    }
    clearLayouts() {
        this.layouts.length = 0;
        this.uniqueLayouts.length = 0;
    }
    removeLayout(...layouts) {
        layouts.forEach(layout => {
            const layoutByName = this.getLayoutByName(layout.name);
            _helpers_ArrayUtils__WEBPACK_IMPORTED_MODULE_0__["default"].remove(this.layouts, layoutByName);
            if (layout.uid && layout.uid != "") {
                _helpers_ArrayUtils__WEBPACK_IMPORTED_MODULE_0__["default"].remove(this.uniqueLayouts, this.getLayoutByUid(layout.uid));
            }
        });
    }
    getLayoutByName(name) {
        return this.layouts.filter(value => value.name == name)[0];
    }
    getLayoutByUid(uid) {
        return this.uniqueLayouts.filter(value => value.uid == uid)[0];
    }
    getLayoutFromPartial(partialLayout) {
        var _a, _b, _c, _d;
        if (partialLayout.extend && partialLayout.extend != "") {
            this.uniqueLayouts.filter(value => value.uid == partialLayout.extend || value.uid && (0,_src_helpers_ObjectHelper__WEBPACK_IMPORTED_MODULE_1__.ensure)(partialLayout.extend).indexOf(value.uid) >= 0).forEach(baseLayout => {
                this.extendLayout(partialLayout, baseLayout);
            });
        }
        const layout = {
            uid: (_a = partialLayout.uid) !== null && _a !== void 0 ? _a : "",
            extend: (_b = partialLayout.extend) !== null && _b !== void 0 ? _b : "",
            name: partialLayout.name,
            aspects: (_c = partialLayout.aspects) !== null && _c !== void 0 ? _c : {},
            layouts: partialLayout.layouts ? partialLayout.layouts.map(value => this.getLayoutFromPartial(value)) : [],
            finalLayout: {},
            width: partialLayout.width == undefined ? 0 : partialLayout.width,
            height: partialLayout.height == undefined ? 0 : partialLayout.height,
            left: partialLayout.left == undefined ? 0 : partialLayout.left,
            top: partialLayout.top == undefined ? 0 : partialLayout.top,
            padding: partialLayout.padding == undefined ? {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            } : partialLayout.padding,
            sortBy: partialLayout.sortBy ? partialLayout.sortBy : "horizontal",
            display: partialLayout.display ? partialLayout.display : "table",
            scaleBy: partialLayout.scaleBy ? partialLayout.scaleBy : "both",
            align: partialLayout.align ? partialLayout.align : "tl",
            alignIn: partialLayout.alignIn ? partialLayout.alignIn : "tl",
            avoidBounding: partialLayout.avoidBounding ? partialLayout.avoidBounding : "no",
        };
        layout.finalLayout = (_d = layout.finalLayout) !== null && _d !== void 0 ? _d : {};
        return layout;
    }
    update(gameSize) {
        const aspect = gameSize.width / gameSize.height;
        const layouts = this.layouts.map(layout => {
            layout = this.applyAspect(layout, aspect);
            return this.calculateLayout(Object.assign(gameSize, { x: 0, y: 0 }), layout);
        });
        this.plugins.forEach(value => value.beforeUpdate());
        this.plugins.forEach(value => layouts.forEach(value1 => value.update(value1)));
        this.plugins.forEach(value => value.afterUpdate());
    }
    calculateLayout(layoutSize, layout) {
        if (typeof layout.width == "number") {
            layout.finalLayout.width = layout.width;
        }
        else if (typeof layout.width == "string") {
            layout.finalLayout.width = layoutSize.width * parseFloat(layout.width) / 100;
        }
        if (typeof layout.height == "number") {
            layout.finalLayout.height = layout.height;
        }
        else if (typeof layout.height == "string") {
            layout.finalLayout.height = layoutSize.height * parseFloat(layout.height) / 100;
        }
        this.calculateLayoutLeftPosition(layout, layoutSize);
        this.calculateLayoutTopPosition(layout, layoutSize);
        const sortByHorizontal = layout.sortBy == "horizontal";
        const sortByVertical = layout.sortBy == "vertical";
        switch (layout.display) {
            case "table": {
                layout.layouts.forEach((value, i, arr) => this.calculateLayout({
                    width: layout.finalLayout.width / (sortByHorizontal ? arr.length : 1),
                    height: layout.finalLayout.height / (sortByVertical ? arr.length : 1),
                    x: layout.finalLayout.x + (sortByHorizontal ? i * layout.finalLayout.width / arr.length : 0),
                    y: layout.finalLayout.y + (sortByVertical ? i * layout.finalLayout.height / arr.length : 0),
                }, value));
                break;
            }
            case "fixed": {
                layout.layouts.forEach(value => this.calculateLayout({
                    width: layout.finalLayout.width,
                    height: layout.finalLayout.height,
                    x: layout.finalLayout.x,
                    y: layout.finalLayout.y,
                }, value));
                break;
            }
            case "relative": {
                const finalLayout = {
                    x: layout.finalLayout.x,
                    y: layout.finalLayout.y,
                    width: layout.finalLayout.width,
                    height: layout.finalLayout.height,
                };
                layout.layouts.forEach(value => {
                    const childLayoutSize = {
                        width: finalLayout.width /* / (sortByHorizontal?arr.length:1)*/,
                        height: finalLayout.height /* / (sortByVertical?arr.length:1)*/,
                        x: finalLayout.x /* + (sortByHorizontal?i * finalLayout.width / arr.length:0)*/,
                        y: finalLayout.y /* + (sortByVertical?i * finalLayout.height / arr.length:0)*/,
                    };
                    this.calculateLayout(childLayoutSize, value);
                    finalLayout.width -= (sortByHorizontal && !(typeof value.width === "string")) ? value.finalLayout.width : 0;
                    finalLayout.height -= sortByVertical && !(typeof value.height === "string") ? value.finalLayout.height - (childLayoutSize.y - value.finalLayout.y) : 0;
                    finalLayout.x += sortByHorizontal ? value.finalLayout.width : 0;
                    finalLayout.y += sortByVertical ? (value.finalLayout.y - childLayoutSize.y) + value.finalLayout.height : 0;
                });
                break;
            }
        }
        return layout;
    }
    calculateLayoutTopPosition(layout, layoutSize) {
        const layoutTop = this.getLayoutTopPosition(layout, layoutSize);
        switch (layout.align) {
            case "bl":
            case "br":
            case "b":
                layout.finalLayout.y = layoutSize.y + (layoutSize.height - layout.finalLayout.height) + layoutTop;
                break;
            case "tl":
            case "tr":
            case "t":
                layout.finalLayout.y = layoutSize.y + layoutTop;
                break;
            case "r":
            case "l":
            case "c":
                layout.finalLayout.y = layoutSize.y + (layoutSize.height - layout.finalLayout.height) / 2 + layoutTop;
                break;
        }
    }
    calculateLayoutLeftPosition(layout, layoutSize) {
        const layoutLeft = this.getLayoutLeftPosition(layout, layoutSize);
        switch (layout.align) {
            case "tr":
            case "br":
            case "r":
                layout.finalLayout.x = layoutSize.x + (layoutSize.width - layout.finalLayout.width) + layoutLeft;
                break;
            case "tl":
            case "bl":
            case "l":
                layout.finalLayout.x = layoutSize.x + layoutLeft;
                break;
            case "b":
            case "t":
            case "c":
                layout.finalLayout.x = layoutSize.x + (layoutSize.width - layout.finalLayout.width) / 2 + layoutLeft /* + layoutLeft*/;
                break;
        }
    }
    getLayoutTopPosition(layout, layoutSize) {
        let result = 0;
        if (typeof layout.top == "number") {
            result = layout.top;
        }
        else if (typeof layout.top == "string") {
            result = layoutSize.height * parseFloat(layout.top) / 100;
        }
        return result;
    }
    getLayoutLeftPosition(layout, layoutSize) {
        let result = 0;
        if (typeof layout.left == "number") {
            result = layout.left;
        }
        else if (typeof layout.left == "string") {
            result = layoutSize.width * parseFloat(layout.left) / 100;
        }
        return result;
    }
    addPlugin(plugin) {
        this.plugins.push(plugin);
        this.applicationUpdateRequest();
    }
    hasPlugin(plugin) {
        return this.plugins.indexOf(plugin) >= 0;
    }
    removePlugin(plugin) {
        while (this.hasPlugin(plugin)) {
            const indexOf = this.plugins.indexOf(plugin);
            this.plugins.splice(indexOf, 1);
        }
        plugin.dispose();
    }
    extendLayout(partialLayout, baseLayout) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        partialLayout.align = (_a = partialLayout.align) !== null && _a !== void 0 ? _a : baseLayout.align;
        partialLayout.alignIn = (_b = partialLayout.alignIn) !== null && _b !== void 0 ? _b : baseLayout.alignIn;
        partialLayout.avoidBounding = (_c = partialLayout.avoidBounding) !== null && _c !== void 0 ? _c : baseLayout.avoidBounding;
        partialLayout.display = (_d = partialLayout.display) !== null && _d !== void 0 ? _d : baseLayout.display;
        partialLayout.height = (_e = partialLayout.height) !== null && _e !== void 0 ? _e : baseLayout.height;
        partialLayout.left = (_f = partialLayout.left) !== null && _f !== void 0 ? _f : baseLayout.left;
        partialLayout.padding = (_g = partialLayout.padding) !== null && _g !== void 0 ? _g : baseLayout.padding;
        partialLayout.scaleBy = (_h = partialLayout.scaleBy) !== null && _h !== void 0 ? _h : baseLayout.scaleBy;
        partialLayout.sortBy = (_j = partialLayout.sortBy) !== null && _j !== void 0 ? _j : baseLayout.sortBy;
        partialLayout.top = (_k = partialLayout.top) !== null && _k !== void 0 ? _k : baseLayout.top;
        partialLayout.width = (_l = partialLayout.width) !== null && _l !== void 0 ? _l : baseLayout.width;
        partialLayout.aspects = (_m = partialLayout.aspects) !== null && _m !== void 0 ? _m : baseLayout.aspects;
        // todo: support child nodes extending [#39]
        // partialLayout.layouts = baseLayout.layouts ?? partialLayout.layouts;
    }
    overrideLayout(partialLayout, baseLayout, clone = true) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        let result;
        if (clone) {
            result = { ...partialLayout };
            if (partialLayout.layouts) {
                result.layouts = [...partialLayout.layouts];
            }
        }
        else {
            result = partialLayout;
        }
        result.align = (_a = baseLayout.align) !== null && _a !== void 0 ? _a : partialLayout.align;
        result.alignIn = (_b = baseLayout.alignIn) !== null && _b !== void 0 ? _b : partialLayout.alignIn;
        result.avoidBounding = (_c = baseLayout.avoidBounding) !== null && _c !== void 0 ? _c : partialLayout.avoidBounding;
        result.display = (_d = baseLayout.display) !== null && _d !== void 0 ? _d : partialLayout.display;
        result.height = (_e = baseLayout.height) !== null && _e !== void 0 ? _e : partialLayout.height;
        result.left = (_f = baseLayout.left) !== null && _f !== void 0 ? _f : partialLayout.left;
        result.padding = (_g = baseLayout.padding) !== null && _g !== void 0 ? _g : partialLayout.padding;
        result.scaleBy = (_h = baseLayout.scaleBy) !== null && _h !== void 0 ? _h : partialLayout.scaleBy;
        result.sortBy = (_j = baseLayout.sortBy) !== null && _j !== void 0 ? _j : partialLayout.sortBy;
        result.top = (_k = baseLayout.top) !== null && _k !== void 0 ? _k : partialLayout.top;
        result.width = (_l = baseLayout.width) !== null && _l !== void 0 ? _l : partialLayout.width;
        return result;
    }
    applyAspect(layout, aspect) {
        const aspects = Object.keys(layout.aspects);
        let result = layout;
        if (aspects.length != 0) {
            const aspectKey = this.getAspectKey(aspects, aspect);
            const aspectLayout = layout.aspects[aspectKey];
            result = this.overrideLayout(layout, aspectLayout);
        }
        if (result.layouts.length) {
            result.layouts = result.layouts.map(value => this.applyAspect(value, aspect));
        }
        return result;
    }
    getAspectKey(aspects, aspect) {
        let aspectKey = aspects[0];
        aspects.forEach(value => {
            const actualAspect = Math.abs(parseFloat(eval(aspectKey)) - aspect);
            const newAspect = Math.abs(parseFloat(eval(value)) - aspect);
            if (newAspect < actualAspect) {
                aspectKey = value;
            }
        });
        return aspectKey;
    }
}


/***/ }),

/***/ "./layoutManager/PixiLayoutPlugin.ts":
/*!*******************************************!*\
  !*** ./layoutManager/PixiLayoutPlugin.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PixiLayoutPlugin)
/* harmony export */ });
/* harmony import */ var _pixi_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pixi/display */ "../node_modules/@pixi/display/lib/index.mjs");
/* harmony import */ var app_helpers_ScaleHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/helpers/ScaleHelper */ "./helpers/ScaleHelper.ts");
/* harmony import */ var app_helpers_ObjectHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/helpers/ObjectHelper */ "./helpers/ObjectHelper.ts");



class PixiLayoutPlugin {
    constructor(stage) {
        this.stage = stage;
        this.layoutElements = new Map();
    }
    update(layout) {
        const displayObjects = this.layoutElements.get(layout.name);
        if (displayObjects) {
            displayObjects.forEach(displayObject => {
                switch (layout.scaleBy) {
                    case "width":
                        displayObject.width = layout.finalLayout.width;
                        displayObject.scale.y = displayObject.scale.x;
                        break;
                    case "height":
                        displayObject.height = layout.finalLayout.height;
                        displayObject.scale.x = displayObject.scale.y;
                        break;
                    case "fit.in":
                        app_helpers_ScaleHelper__WEBPACK_IMPORTED_MODULE_1__.ScaleHelper.scaleToSizeIn(displayObject, layout.finalLayout);
                        break;
                    case "fit.out":
                        app_helpers_ScaleHelper__WEBPACK_IMPORTED_MODULE_1__.ScaleHelper.scaleToSize(displayObject, layout.finalLayout);
                        break;
                    case "both":
                        displayObject.width = layout.finalLayout.width;
                        displayObject.height = layout.finalLayout.height;
                        break;
                }
                displayObject.position.x = layout.finalLayout.x;
                displayObject.position.y = layout.finalLayout.y;
                const { displayObjectHeight, displayObjectWidth } = this.getDisplayObjectBound(layout, displayObject);
                switch (layout.alignIn) {
                    case "r":
                    case "tr":
                    case "br":
                        displayObject.position.x = layout.finalLayout.x + layout.finalLayout.width - displayObjectWidth;
                        break;
                    case "l":
                    case "bl":
                    case "tl":
                        displayObject.position.x = layout.finalLayout.x;
                        break;
                    case "c":
                    case "b":
                    case "t":
                        displayObject.position.x = layout.finalLayout.x + (layout.finalLayout.width - displayObjectWidth) / 2;
                        break;
                }
                switch (layout.alignIn) {
                    case "t":
                    case "tr":
                    case "tl":
                        displayObject.position.y = layout.finalLayout.y;
                        break;
                    case "b":
                    case "br":
                    case "bl":
                        displayObject.position.y = layout.finalLayout.y + (layout.finalLayout.height - displayObjectHeight);
                        break;
                    case "c":
                    case "r":
                    case "l":
                        displayObject.position.y = layout.finalLayout.y + (layout.finalLayout.height - displayObjectHeight) / 2;
                        break;
                }
            });
        }
        layout.layouts.forEach(value => {
            this.update(value);
        });
    }
    getDisplayObjectBound(layout, displayObject) {
        const result = { displayObjectHeight: 0, displayObjectWidth: 0 };
        if (layout.avoidBounding == "no") {
            const scale = displayObject.scale;
            const boundsHeight = displayObject.boundsHeight ? displayObject.boundsHeight * scale.y : displayObject.height;
            const boundsWidth = displayObject.boundsWidth ? displayObject.boundsWidth * scale.x : displayObject.width;
            result.displayObjectHeight = boundsHeight;
            result.displayObjectWidth = boundsWidth;
        }
        return result;
    }
    beforeUpdate() {
        this.layoutElements.clear();
        this.findAndUpdate();
    }
    findAndUpdate(root = null) {
        root = root ? root : this.stage;
        root.children.forEach(value => {
            if (value.name) {
                if (!this.layoutElements.has(value.name)) {
                    this.layoutElements.set(value.name, []);
                }
                (0,app_helpers_ObjectHelper__WEBPACK_IMPORTED_MODULE_2__.ensure)(this.layoutElements.get(value.name)).push(value);
            }
            if (value instanceof _pixi_display__WEBPACK_IMPORTED_MODULE_0__.Container) {
                this.findAndUpdate(value);
            }
        });
    }
    afterUpdate() { }
    dispose() {
    }
}


/***/ }),

/***/ "./loader/CursorLoader.ts":
/*!********************************!*\
  !*** ./loader/CursorLoader.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CursorLoader)
/* harmony export */ });
/* harmony import */ var app_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/Main */ "./Main.ts");

class CursorLoader {
    static async setUp() {
        app_Main__WEBPACK_IMPORTED_MODULE_0__.Main.APP.renderer.events.cursorStyles["default"] = "url('assets/cursors/woodDefault.png'), auto";
        app_Main__WEBPACK_IMPORTED_MODULE_0__.Main.APP.renderer.events.cursorStyles.pointer = "url('assets/cursors/woodPointer.png'), auto";
    }
}


/***/ }),

/***/ "./loader/SpineLoader.ts":
/*!*******************************!*\
  !*** ./loader/SpineLoader.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SpineLoader)
/* harmony export */ });
/* harmony import */ var _pixi_spine_runtime_4_0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pixi-spine/runtime-4.0 */ "../node_modules/@pixi-spine/runtime-4.0/lib/index.mjs");
/* harmony import */ var _pixi_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pixi/core */ "../node_modules/@pixi/core/lib/index.mjs");
/* harmony import */ var app_pixi_StrictResourcesHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pixi/StrictResourcesHelper */ "./pixi/StrictResourcesHelper.ts");
/* harmony import */ var pixi_spine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pixi-spine */ "../node_modules/pixi-spine/lib/index.mjs");




class SpineLoader {
    static init(texture) {
        this.REPLACE_TEXTURE = texture;
    }
    static getSpine(name, textureName = name) {
        var _a;
        const spineData = SpineLoader.getSpineData(this.CACHE[name], (_a = this.TEXTURE_MAP[textureName]) !== null && _a !== void 0 ? _a : textureName);
        return new _pixi_spine_runtime_4_0__WEBPACK_IMPORTED_MODULE_0__.Spine(spineData);
    }
    static getSpineData(spineData, textureName) {
        const textures = this.getSpineTexturesMap(spineData, textureName);
        return this.buildSkeleton(textures, spineData);
    }
    static buildSkeleton(texturesCache, jsonData) {
        const spineAtlas = new pixi_spine__WEBPACK_IMPORTED_MODULE_3__.TextureAtlas();
        spineAtlas.addTextureHash(texturesCache, true);
        const spineAtlasLoader = new _pixi_spine_runtime_4_0__WEBPACK_IMPORTED_MODULE_0__.AtlasAttachmentLoader(spineAtlas);
        const spineJsonParser = new _pixi_spine_runtime_4_0__WEBPACK_IMPORTED_MODULE_0__.SkeletonJson(spineAtlasLoader);
        return spineJsonParser.readSkeletonData(jsonData);
    }
    static updateTextures(name) {
        const spineJson = this.CACHE[name];
        const textures = this.getSpineTexturesMap(spineJson, name);
        return this.buildSkeleton(textures, spineJson);
    }
    static getSpineTexturesMap(spineJson, textureName) {
        const res = {};
        const imageNames = this.getImageNames(spineJson);
        for (const name of imageNames) {
            res[name] = this.getSpineTextures(name, textureName);
        }
        return res;
    }
    static getSpineTextures(name, textureName) {
        var _a;
        if (name.includes("mask")) {
            return SpineLoader.REPLACE_TEXTURE;
        }
        let result;
        const strictResourcesHelper = app_pixi_StrictResourcesHelper__WEBPACK_IMPORTED_MODULE_2__["default"];
        const resourceName = (_a = this.SLOTS_RESOURCES_MAP[name]) !== null && _a !== void 0 ? _a : name;
        result = strictResourcesHelper.getAnTexture(resourceName); // Assets.get(name);
        if (!result && strictResourcesHelper.getAnTexture(`${resourceName}.png`)) {
            result = strictResourcesHelper.getAnTexture(`${resourceName}.png`);
        }
        else if (resourceName.indexOf("atlases") >= 0) {
            result = strictResourcesHelper.getAnTexture(resourceName.replace("atlases/", ""));
            if (!result) {
                result = strictResourcesHelper.getAnTexture(resourceName.replace(/.*\//, "") + ".png");
            }
        }
        if (!result) {
            result = strictResourcesHelper.getAnTexture(resourceName.replace(textureName + "/", "") + ".png");
        }
        if (!result) {
            result = SpineLoader.REPLACE_TEXTURE;
            console.warn("Resource not found, make sure this is lazy loaded", `[${name}]`);
        }
        return result;
    }
    static getImageNames(json) {
        const images = [];
        if (json.skins) {
            const skins = json.skins;
            for (let i = 0; i < skins.length; i++) {
                const skin = skins[i];
                if (!skin.attachments)
                    continue;
                for (const attachmentName of Object.keys(skin.attachments)) {
                    const attachment = skin.attachments[attachmentName];
                    for (const attachmentPartName of Object.keys(attachment)) {
                        const attachmentPart = attachment[attachmentPartName];
                        if (attachmentPart && attachmentPart.type == "boundingbox") {
                            continue;
                        }
                        let imageName;
                        if (attachmentPart && attachmentPart.name) {
                            imageName = attachmentPart.name;
                        }
                        else if (attachmentPart && attachmentPart.path) {
                            imageName = attachmentPart.path;
                        }
                        else {
                            imageName = attachmentPartName;
                        }
                        if (images.indexOf(imageName) == -1) {
                            images.push(imageName);
                        }
                    }
                }
            }
        }
        return images;
    }
    static async preLoad() {
        return __webpack_require__.e(/*! import() | preloadSpineData */ "preloadSpineData").then(__webpack_require__.bind(__webpack_require__, /*! ./PreloadSpineDataStorage */ "./loader/PreloadSpineDataStorage.ts")).then(value => {
            Object.assign(this.CACHE, value.default.CACHE);
        });
    }
    static async load() {
        return __webpack_require__.e(/*! import() | allSpineData */ "allSpineData").then(__webpack_require__.bind(__webpack_require__, /*! ./SpineDataStorage */ "./loader/SpineDataStorage.ts")).then(value => {
            Object.assign(this.CACHE, value.default.CACHE);
        });
    }
}
SpineLoader.REPLACE_TEXTURE = _pixi_core__WEBPACK_IMPORTED_MODULE_1__.RenderTexture.create({ width: 100, height: 100 });
SpineLoader.CACHE = {};
SpineLoader.SLOTS_RESOURCES_MAP = {
    "atlases/background/bg_main": "bg.png",
};
SpineLoader.TEXTURE_MAP = {
    intro_symbols: "symbols",
    paytable_page: "symbols",
    paylines: "winline",
};


/***/ }),

/***/ "./localization/Localization.ts":
/*!**************************************!*\
  !*** ./localization/Localization.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Localization)
/* harmony export */ });
/* harmony import */ var app_helpers_ObjectHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/helpers/ObjectHelper */ "./helpers/ObjectHelper.ts");

class Localization {
    constructor(defaultLanguage) {
        this.lang = "en";
        this.translations = new Map();
        this.lang = defaultLanguage;
    }
    addTranslation(lang, translations) {
        this.translations.set(lang, translations);
    }
    text(key) {
        var _a;
        return (0,app_helpers_ObjectHelper__WEBPACK_IMPORTED_MODULE_0__.ensure)(((_a = this.translations.get(this.lang)) !== null && _a !== void 0 ? _a : {})[key], `No text for lang: [${this.lang}] and text key: [${key}]`);
    }
    setLang(key) {
        this.lang = key;
    }
}


/***/ }),

/***/ "./model/BetModel.ts":
/*!***************************!*\
  !*** ./model/BetModel.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BetModel)
/* harmony export */ });
/* harmony import */ var app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/helpers/signals/signal/Signal */ "./helpers/signals/signal/Signal.ts");
/* harmony import */ var app_game_BigWinCalculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/game/BigWinCalculator */ "./game/BigWinCalculator.ts");
/* harmony import */ var app_helpers_ObjectHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/helpers/ObjectHelper */ "./helpers/ObjectHelper.ts");



class BetModel {
    constructor(bets, gameData) {
        this.bets = bets;
        this.gameData = gameData;
        this.chosenBet = 1;
        this.chosenBetUpdated = new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    getChosenBet() {
        return this.getBet(this.chosenBet);
    }
    getBet(chosenBet) {
        return (0,app_helpers_ObjectHelper__WEBPACK_IMPORTED_MODULE_2__.ensure)(this.bets.find(value => value.id == chosenBet));
    }
    setBet(betId) {
        this.chosenBet = betId;
        this.chosenBetUpdated.emit(betId);
    }
    get bigWinCalculator() {
        return new app_game_BigWinCalculator__WEBPACK_IMPORTED_MODULE_1__["default"](this.getTotalBet());
    }
    getTotalBet() {
        return this.getBet(this.chosenBet).value;
    }
}


/***/ }),

/***/ "./model/CurrencyFormatterHelper.ts":
/*!******************************************!*\
  !*** ./model/CurrencyFormatterHelper.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CurrencyFormatterHelper)
/* harmony export */ });
class CurrencyFormatterHelper {
    static format(value, options = this.options) {
        const newOptions = {
            ...this.options,
            ...options,
        };
        return new Intl.NumberFormat(this.locales, newOptions).format(value);
    }
}
CurrencyFormatterHelper.locales = "en-US";
CurrencyFormatterHelper.options = {
    style: "currency",
    currency: "USD",
    currencyDisplay: "symbol",
    useGrouping: true,
    minimumIntegerDigits: 1,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
};


/***/ }),

/***/ "./model/FreeSpinModel.ts":
/*!********************************!*\
  !*** ./model/FreeSpinModel.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FreeSpinModel)
/* harmony export */ });
/* harmony import */ var app_helpers_ObjectHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/helpers/ObjectHelper */ "./helpers/ObjectHelper.ts");
/* harmony import */ var app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/helpers/signals/signal/Signal */ "./helpers/signals/signal/Signal.ts");


class FreeSpinModel {
    constructor() {
        this.spinIndex = -1;
        this.freeSpins = [];
        this.spinRemains = 0;
        this.totalWin = 0;
        this.freeSpinsAmountChanged = new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    setup(freeSpins, initialTotalWin) {
        this.freeSpins = freeSpins;
        this.spinRemains = freeSpins.length;
        this.totalWin += initialTotalWin;
        this.freeSpinsAmountChanged.emit({ spinRemains: this.spinRemains });
    }
    reset() {
        this.freeSpins = [];
        this.spinIndex = -1;
        this.spinRemains = 0;
        this.totalWin = 0;
    }
    hasSpin() {
        return this.freeSpins[this.spinIndex] != null;
    }
    hasNextSpin() {
        return this.freeSpins[this.spinIndex + 1] != null;
    }
    nextSpin() {
        this.spinIndex++;
        this.totalWin += this.getCurrentSpinResult().totalWin;
        this.spinRemains = this.freeSpins.length - this.spinIndex - 1;
        this.freeSpinsAmountChanged.emit({ spinRemains: this.spinRemains });
        return this.freeSpins[this.spinIndex];
    }
    isLastSpin() {
        return this.freeSpins.length - 2 == this.spinIndex;
    }
    getCurrentSpinResult() {
        return (0,app_helpers_ObjectHelper__WEBPACK_IMPORTED_MODULE_0__.ensure)(this.freeSpins[Math.max(0, this.spinIndex)]);
    }
    addReSpins() {
        const spinResult = this.getCurrentSpinResult();
        this.addSpins(spinResult);
    }
    addSpins(freeSpinFeature, toTheEnd = false) {
        const spinResult = this.getCurrentSpinResult();
        const freeSpins = freeSpinFeature.freeSpins;
        if (toTheEnd) {
            this.freeSpins.push(...freeSpins.spins);
        }
        else {
            this.freeSpins.splice(this.spinIndex + 1, 0, ...freeSpins.spins);
            spinResult.totalWin -= freeSpins.totalWin;
            this.totalWin -= freeSpins.totalWin;
        }
        this.spinRemains = this.freeSpins.length - this.spinIndex - 1;
        this.freeSpinsAmountChanged.emit({ spinRemains: this.spinRemains });
    }
}


/***/ }),

/***/ "./model/GameModel.ts":
/*!****************************!*\
  !*** ./model/GameModel.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameModel": () => (/* binding */ GameModel),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/signals/signal/Signal */ "./helpers/signals/signal/Signal.ts");
/* harmony import */ var res_sounds_SOUND_FILE_soundmap_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! res/sounds/SOUND_FILE.soundmap.json */ "../resources/assets/sounds/SOUND_FILE.soundmap.json");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! howler */ "../node_modules/howler/dist/howler.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_server_fruit_ServerCommunicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/server/fruit/ServerCommunicator */ "./server/fruit/ServerCommunicator.ts");
/* harmony import */ var app_model_GameSignals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/model/GameSignals */ "./model/GameSignals.ts");
/* harmony import */ var app_helpers_promise_ResolvablePromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/helpers/promise/ResolvablePromise */ "./helpers/promise/ResolvablePromise.ts");
/* harmony import */ var app_model_BetModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/model/BetModel */ "./model/BetModel.ts");
/* harmony import */ var app_model_UserModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/model/UserModel */ "./model/UserModel.ts");
/* harmony import */ var app_model_FreeSpinModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/model/FreeSpinModel */ "./model/FreeSpinModel.ts");
/* harmony import */ var app_model_MainGameModel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/model/MainGameModel */ "./model/MainGameModel.ts");
/* harmony import */ var app_helpers_GameLocalStorage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/helpers/GameLocalStorage */ "./helpers/GameLocalStorage.ts");
/* harmony import */ var res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! res/configs/gameConfig.json */ "../resources/assets/configs/gameConfig.json");
/* harmony import */ var app_helpers_HrefParamReader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/helpers/HrefParamReader */ "./helpers/HrefParamReader.ts");














class GameModel {
    constructor() {
        this.isForce = app_helpers_GameLocalStorage__WEBPACK_IMPORTED_MODULE_11__["default"].getItem("isForce") === "true";
        this.isSoundMuted = app_helpers_GameLocalStorage__WEBPACK_IMPORTED_MODULE_11__["default"].getItem("isSoundMuted") === "true";
        this.startSpinning = new _helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.updateLayout = new _helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.pauseGame = new _helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.hrefParamReader = new GameParamReader();
        this.game = {
            fruit: {
                serverCommunicator: app_server_fruit_ServerCommunicator__WEBPACK_IMPORTED_MODULE_4__["default"].builder.build("legacy"),
            },
            signals: new app_model_GameSignals__WEBPACK_IMPORTED_MODULE_5__["default"](),
            linesId: 21,
        };
        this.autoplay = {
            spins: 0,
        };
        this.gameSize = {
            width: 0, height: 0, scale: 1, centerPosition: { x: 0, y: 0 }, isPortrait: false,
        };
        this.firstUserInteractionPromise = app_helpers_promise_ResolvablePromise__WEBPACK_IMPORTED_MODULE_6__["default"].getResolvablePromise();
        this.howlerReadyPromise = app_helpers_promise_ResolvablePromise__WEBPACK_IMPORTED_MODULE_6__["default"].getResolvablePromise();
        this.updateLayout.add((gameSize, resolve) => {
            Object.assign(this.gameSize, gameSize);
            resolve && resolve();
        }, this, 1);
        this.isMobile = this.getHrefParamReader().get("channel", "desktop") == "mobile";
        // eslint-disable-next-line no-async-promise-executor
        this.ready = new Promise(async (resolve) => {
            const userName = this.proceedUserName();
            const response = await this.game.fruit.serverCommunicator.login(userName);
            this.mainGameInfo = Object.assign(response, {
                reels: { amount: 5, height: 3, reelGap: 33, reelFrameGap: 18 },
                symbol: { width: 200, height: 209, gap: 162.5, scale: 1.000 },
            }, {
                timings: {
                    minSpinDuration: res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_12__.reels.minSpinDuration,
                },
            }, { hook: [] });
            resolve();
        });
        this.ready.then(this.setup.bind(this));
    }
    proceedUserName() {
        const uniqTag = Math.round(Date.now() / 1000 - 1702618185);
        const userName = this.getHrefParamReader().getUserName(`lo${uniqTag}`);
        if (true) {
            if (userName == "Lo" && !this.getHrefParamReader().hasUserName() && "legacy" == "legacy") {
                const promptUserName = prompt("Please enter your prefer name");
                const href = window.location.href;
                window.location.href = href + `${href.includes("?") ? "&" : "?"}login=${promptUserName}`;
            }
        }
        return userName;
    }
    updateSpeedFactor(speedFactor) {
        this.game.signals.speedFactorUpdate.emit(speedFactor);
    }
    updateMinSpinDuration(speedFactor) {
        this.mainGameInfo.timings.minSpinDuration = res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_12__.reels.minSpinDuration / speedFactor;
    }
    setup() {
        const betModel = new app_model_BetModel__WEBPACK_IMPORTED_MODULE_7__["default"](this.mainGameInfo.bets, this.game);
        const userModel = new app_model_UserModel__WEBPACK_IMPORTED_MODULE_8__["default"](this.mainGameInfo.user, this.mainGameInfo.userStats);
        app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__["default"].register(app_model_BetModel__WEBPACK_IMPORTED_MODULE_7__["default"], betModel);
        app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__["default"].register(app_model_UserModel__WEBPACK_IMPORTED_MODULE_8__["default"], userModel);
        app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__["default"].register(app_model_FreeSpinModel__WEBPACK_IMPORTED_MODULE_9__["default"], new app_model_FreeSpinModel__WEBPACK_IMPORTED_MODULE_9__["default"]());
        app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__["default"].register(app_model_MainGameModel__WEBPACK_IMPORTED_MODULE_10__["default"], new app_model_MainGameModel__WEBPACK_IMPORTED_MODULE_10__["default"]().compose());
        if (true) {
            console.warn("hook present", this.getHrefParamReader().has("hook"));
            if (this.getHrefParamReader().has("hook")) {
                const hook = this.getHrefParamReader().get("hook");
                const updateHook = () => {
                    try {
                        console.warn("hook updated", hook);
                        gameModel.mainGameInfo.hook = JSON.parse(hook);
                    }
                    catch (e) {
                        console.warn(e);
                    }
                };
                gameModel.game.signals.spinComplete.remove(updateHook);
                gameModel.game.signals.spinComplete.add(updateHook, this);
                updateHook();
            }
        }
    }
    getHowler() {
        return this.howler;
    }
    register(key, instance) {
        app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__["default"].register(key, instance);
        return this;
    }
    has(key) {
        return app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__["default"].has(key);
    }
    resolve(key, init, ctx) {
        return app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__["default"].resolve(key, init, ctx);
    }
    initHowler() {
        const soundConfig = res_sounds_SOUND_FILE_soundmap_json__WEBPACK_IMPORTED_MODULE_1__;
        this.howler = new howler__WEBPACK_IMPORTED_MODULE_2__.Howl({
            src: soundConfig.src,
            sprite: soundConfig.sprite,
            autoplay: false,
            mute: this.isSoundMuted,
            onend: () => {
            },
            onloaderror: soundId => {
                console.error("onloaderror: " + soundId, res_sounds_SOUND_FILE_soundmap_json__WEBPACK_IMPORTED_MODULE_1__);
            },
            onload: () => {
                this.howlerReadyPromise.resolve(this.howler);
            },
        });
        return this.howlerReadyPromise;
    }
    getHrefParamReader() {
        return this.hrefParamReader;
    }
    unload($this) {
        this.updateLayout.unload($this);
    }
    setForceMode(isForce) {
        if (isForce) {
            this.updateSpeedFactor(res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_12__.forceSpeedFactor);
            this.updateMinSpinDuration(res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_12__.forceSpeedFactor);
        }
        else {
            this.updateSpeedFactor(res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_12__.defaultSpeedFactor);
            this.updateMinSpinDuration(res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_12__.defaultSpeedFactor);
        }
        app_helpers_GameLocalStorage__WEBPACK_IMPORTED_MODULE_11__["default"].setItem("isForce", JSON.stringify(isForce));
        this.isForce = isForce;
    }
}
class GameParamReader extends app_helpers_HrefParamReader__WEBPACK_IMPORTED_MODULE_13__.HrefParamReader {
    constructor() {
        super(window.location.href);
    }
    getTitle(defaultValue = "GAME%20TEMPLATE") {
        const search = window.location.href;
        const regexp = /([?&])title=([^&#]*)/;
        const match = search.match(regexp);
        let title;
        if (match && match.length > 2) {
            title = match[2];
        }
        else {
            title = defaultValue;
            console.warn(`title cannot be read, by default was set: [${title}]`);
        }
        return decodeURI(title);
    }
    getHueDegree() {
        const search = window.location.href;
        const regexp = /(([?&])hue=(\d+))/;
        const match = search.match(regexp);
        let hue;
        if (match && match.length > 0) {
            hue = match[3];
        }
        else {
            hue = "0";
            console.warn(`hue cannot be read, by default was set: [${hue}]`);
        }
        return parseInt(hue);
    }
    hasUserName() {
        return this.has("login");
    }
    getUserName(defaultValue = "Lo") {
        const search = window.location.href;
        const regexp = new RegExp(/([?&])login=((\w|\d|[:.\\/-])+)/);
        const match = search.match(regexp);
        let login;
        if (match && match.length > 0) {
            login = match[2];
        }
        else {
            login = defaultValue;
            console.warn(`login cannot be read, by default was set: [${login}]`);
        }
        return login;
    }
}
const gameModel = new GameModel();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameModel);


/***/ }),

/***/ "./model/GameSignals.ts":
/*!******************************!*\
  !*** ./model/GameSignals.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisibilitySignals": () => (/* binding */ VisibilitySignals),
/* harmony export */   "default": () => (/* binding */ GameSignals)
/* harmony export */ });
/* harmony import */ var app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/helpers/signals/signal/Signal */ "./helpers/signals/signal/Signal.ts");

class VisibilitySignals {
    constructor() {
        this.show = new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.hide = new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.shown = new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.hidden = new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
}
class GameSignals {
    constructor() {
        this.reels = {
            updateSkin: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            updateAnimation: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            spin: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            stop: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            forceMoveOn: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            shake: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            updateReelOffset: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            dimAllSymbols: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            dimSpecificSymbols: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            undimSpecificSymbols: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            stopAllAnimations: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            showScatterWins: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            showLineWins: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            showLine: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            stopped: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            play: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            anticipateReels: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            scatterReels: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            anticipationShown: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            hideLines: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            clearSymbols: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            stopStarted: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            showWildBonus2Presentation: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            showWildBonus1Presentation: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            addWinLable: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            removeWinLable: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
        };
        this.autoplay = {
            show: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            hide: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            changed: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            decrease: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            stop: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
        };
        this.spinComplete = new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.spinStarted = new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.data = {
            login: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            spin: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            users: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            stopReel: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            buyAmount: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
        };
        this.loader = {
            progressUpdate: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            complete: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
        };
        this.ui = {
            options: {
                info: {
                    show: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
                    hide: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
                },
                toggleSound: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            },
            spinButton: {
                clicked: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
                enable: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
                disable: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
                updateCounter: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            },
            autoplayButton: {
                enable: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            },
            balance: {
                showCashReplenishment: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
                startBalanceAnimation: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
                balanceChangesDisplayed: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            },
            showWin: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            disableControls: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            enableControls: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
        };
        this.background = new VisibilitySignals();
        this.popup = {
            fsIntro: new VisibilitySignals(),
            fsOutro: new VisibilitySignals(),
            winCounter: new VisibilitySignals(),
        };
        this.infobar = {
            start: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            stop: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            hide: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
            show: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"](),
        };
        this.speedFactorUpdate = new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.paytableShow = new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.paytableHide = new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
}


/***/ }),

/***/ "./model/MainGameModel.ts":
/*!********************************!*\
  !*** ./model/MainGameModel.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainGameModel)
/* harmony export */ });
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");

class MainGameModel {
    compose() {
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].game.signals.data.spin.add(value => this.tSpinResponse = value);
        return this;
    }
    get spinResponse() {
        return this.tSpinResponse;
    }
    getMainGameWin() {
        const lineWin = this.spinResponse.winLines.totalWin;
        const scatterWin = this.spinResponse.scatters.totalWin;
        return lineWin + scatterWin;
    }
    getInitialWinForFreeSpinsGame() {
        return this.spinResponse.scatters.wins.reduce((previousValue, currentValue) => previousValue + currentValue.win, 0);
    }
    getWinSymbolsPositions(wins) {
        const result = [];
        const cache = {};
        const lines = app_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].mainGameInfo.lines;
        wins.forEach(win => {
            lines[win.lineId].forEach((lineOffset, index) => {
                if (index < win.symbolsAmount) {
                    if (cache[`${index}_${lineOffset}`]) {
                        return;
                    }
                    cache[`${index}_${lineOffset}`] = true;
                    result.push({
                        x: index, y: lineOffset,
                    });
                }
            });
        });
        return result;
    }
}


/***/ }),

/***/ "./model/TextStyles.ts":
/*!*****************************!*\
  !*** ./model/TextStyles.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TextStyles)
/* harmony export */ });
var _a;
class TextStyles {
}
_a = TextStyles;
TextStyles.SYMBOL_DEV_INFO = {
    fontFamily: "RobotoB",
    fill: "white",
    fontSize: 60,
    fontWeight: "bold",
    letterSpacing: -1,
    lineJoin: "round",
    strokeThickness: 6,
};
TextStyles.TITLE = {
    fontFamily: "RobotoB",
    fill: "white",
    fontSize: 60,
    fontWeight: "bold",
    letterSpacing: -1,
    lineJoin: "round",
    strokeThickness: 6,
};
TextStyles.GAME_LABEL = {
    fontFamily: "RobotoB",
    fill: "white",
    fontSize: 120,
    fontWeight: "bold",
    letterSpacing: -1,
    lineJoin: "round",
    strokeThickness: 6,
};
TextStyles.MESSAGE_BAR_TEXT_STYLE = {
    fontFamily: "RobotoB",
    fontSize: 26,
    fontWeight: "bolder",
    lineJoin: "round",
    fill: ["#fdfdfd", "#d68310"],
    fillGradientStops: [0.4],
    stroke: "#4a1a06",
    strokeThickness: 2,
};
TextStyles.INTRO_GAME_FOOTER_TITLE = {
    fontFamily: "SuperMarioGalaxy",
    fontSize: 90,
    align: "center",
    fill: ["#fdfdfd", "#d68310"],
    fillGradientStops: [0.55],
    stroke: "#4a1a06",
    dropShadowAlpha: 0.5,
    strokeThickness: 4,
    dropShadow: true,
    dropShadowAngle: 10,
    dropShadowBlur: 2,
    dropShadowColor: "#260606",
    dropShadowDistance: 3,
};
TextStyles.INTRO_FEATURE_CONTROL_TEXT = {
    ..._a.INTRO_GAME_FOOTER_TITLE,
    fontSize: 45,
};
TextStyles.LABEL_TITLE_STYLE = {
    fontFamily: "RobotoB",
    fontSize: 18,
    fontWeight: "bold",
    lineJoin: "round",
    fill: ["#fdfdfd", "#d68310"],
    fillGradientStops: [0.55],
    stroke: "#4a1a06",
    strokeThickness: 2,
};
TextStyles.LABEL_TEXT_STYLE = {
    fontFamily: "RobotoB",
    fill: "white",
    fontSize: 30,
    fontWeight: "bold",
    lineJoin: "round",
    letterSpacing: -0.5,
};
TextStyles.POPUP_LABEL_STYLE = {
    ..._a.LABEL_TEXT_STYLE,
    fontFamily: "SuperMarioGalaxy",
    fontSize: 100,
    fill: "#f6c399",
    letterSpacing: -1,
    strokeThickness: 6,
};
TextStyles.SPIN_BTN_TEXT_STYLE = {
    ..._a.LABEL_TEXT_STYLE,
    fill: ["#fdfdfd", "#d68310"],
    fillGradientStops: [0.55],
    stroke: "#4a1a06",
    strokeThickness: 5,
    fontFamily: "SuperMarioGalaxy",
    fontSize: 110,
};
TextStyles.TOOLTIP_LABEL_TITLE_STYLE = {
    ..._a.LABEL_TITLE_STYLE,
    fontSize: 32,
};
TextStyles.PAYTABLE_STYLE = {
    ..._a.INTRO_GAME_FOOTER_TITLE,
    fontSize: 95,
    wordWrap: true,
    wordWrapWidth: 1920 - 150,
    leading: 20,
    align: "center",
};
TextStyles.PAYTABLE_SCATTER_STYLE = {
    ..._a.PAYTABLE_STYLE,
    fontSize: 50,
    leading: -10,
};
TextStyles.PAYTABLE_TITLE_STYLE = {
    ..._a.INTRO_GAME_FOOTER_TITLE,
    fontSize: 120,
};
TextStyles.PAYTABLE_WHITE_TITLE_STYLE = {
    ..._a.PAYTABLE_TITLE_STYLE,
    fontFamily: "RobotoB",
    fill: "#ffffff",
    strokeThickness: 0,
    align: "center",
};
TextStyles.TOOLTIP_LABEL_TEXT_STYLE = {
    ..._a.LABEL_TEXT_STYLE,
    fill: "white",
    fontSize: 60,
};
TextStyles.AUTOPLAY_BUTTON = {
    ..._a.LABEL_TITLE_STYLE,
    fontFamily: "SuperMarioGalaxy",
    fill: "#fdfdfd",
    fontSize: 90,
    stroke: "#000",
    strokeThickness: 3,
};
TextStyles.AUTOPLAY_BUTTON_CONTROL = {
    ..._a.LABEL_TITLE_STYLE,
    fontSize: 45,
    fill: "#d68310",
    strokeThickness: 4,
};
TextStyles.BET_SELECTOR_BUTTON_CONTROL = {
    ..._a.AUTOPLAY_BUTTON,
    strokeThickness: 0,
    fontSize: 50,
};


/***/ }),

/***/ "./model/UserModel.ts":
/*!****************************!*\
  !*** ./model/UserModel.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserModel)
/* harmony export */ });
/* harmony import */ var app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/helpers/signals/signal/Signal */ "./helpers/signals/signal/Signal.ts");

class UserModel {
    constructor(user, userStats) {
        this.balanceChanged = new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.betChanged = new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.user = {
            userId: user.userId,
            freeGames: 0,
            lang: user.lang,
            currency: user.currency,
            denominator: user.denominator,
            login: user.login,
            balance: userStats.balance,
            reelStops: userStats.reelStops,
            betId: userStats.betId,
            lineId: userStats.lineId,
        };
    }
    takeBet(value) {
        this.user.balance -= value;
        this.balanceChanged.emit(this.user.balance);
    }
    setBet(betId) {
        if (this.user.betId !== betId) {
            this.user.betId = betId;
            this.betChanged.emit(betId);
        }
    }
    updateUserStats(userStats, forceUpdate = false) {
        this.user.balance = userStats.balance;
        this.user.reelStops = userStats.reelStops;
        this.balanceChanged.emit(this.user.balance);
        if (this.user.betId !== userStats.betId || forceUpdate) {
            this.betChanged.emit(userStats.betId);
        }
        this.user.betId = userStats.betId;
        this.user.lineId = userStats.lineId;
    }
    getCurrentBalance() {
        return this.user.balance;
    }
    compose() {
    }
    dispose() {
    }
}


/***/ }),

/***/ "./model/injection/InjectDecorator.ts":
/*!********************************************!*\
  !*** ./model/injection/InjectDecorator.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "DependencyManager": () => (/* binding */ DependencyManager),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "inject": () => (/* binding */ inject)
/* harmony export */ });
/* eslint-disable */
// noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols
function $(instanceToken) {
    return dependencyManager.resolve(instanceToken);
}
function inject(instanceToken, init, ctx) {
    const log = false;
    log && console.log("inject init to: ", instanceToken);
    return function (target, propertyKey, descriptor) {
        log && console.log("inject called for ");
        log && console.log(" * target", target);
        log && console.log(" * propertyKey", propertyKey);
        log && console.log(" * descriptor", descriptor);
        const compose = target.compose;
        const initF = target.init;
        target.compose = async function () {
            this[propertyKey] = dependencyManager.resolve(instanceToken, init);
            await compose.apply(this);
        };
        target.init = async function (...args) {
            this[propertyKey] = dependencyManager.resolve(instanceToken, init);
            await initF.apply(this, args);
        };
        const dispose = target.dispose;
        target.dispose = async function () {
            await dispose.apply(this);
            delete this[propertyKey];
        };
    };
}
class DependencyManager {
    constructor() {
        // todo: should be not a map - instance;
        this.controls = new Map();
    }
    unload() {
        this.controls.clear();
        return this;
    }
    registerMe(key, instance) {
        this.register(key, instance);
        return this.resolve(key);
    }
    register(key, instance) {
        this.controls.set(key, instance);
        return this;
    }
    has(key) {
        return this.controls.has(key);
    }
    resolve(key, init, ctx) {
        let instance = this.controls.get(key);
        if (!instance) {
            if (init) {
                instance = ctx ? init.apply(ctx) : init();
                this.register(key, instance);
            }
            else {
                throw new Error(`key: ${key} is not defined.`);
            }
        }
        return instance;
    }
}
const dependencyManager = new DependencyManager();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dependencyManager);


/***/ }),

/***/ "./pixi/StrictResourcesHelper.ts":
/*!***************************************!*\
  !*** ./pixi/StrictResourcesHelper.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StrictResourcesHelper)
/* harmony export */ });
/* harmony import */ var _pixi_assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pixi/assets */ "../node_modules/@pixi/assets/lib/index.mjs");

class StrictResourcesHelper {
    static getAnTexture(textureId) {
        return _pixi_assets__WEBPACK_IMPORTED_MODULE_0__.Assets.cache.has(textureId) ? _pixi_assets__WEBPACK_IMPORTED_MODULE_0__.Assets.cache.get(textureId) : null;
    }
    static getSomeTexture(textureId) {
        return _pixi_assets__WEBPACK_IMPORTED_MODULE_0__.Assets.get(textureId);
    }
    static load(alias, textureId) {
        return new Promise((resolve, reject) => {
            _pixi_assets__WEBPACK_IMPORTED_MODULE_0__.Assets.load(alias)
                .then(() => resolve(StrictResourcesHelper.getSomeTexture(textureId)))
                .catch(error => reject(error));
        });
    }
    static getTexture(spriteSheetId, textureId) {
        return _pixi_assets__WEBPACK_IMPORTED_MODULE_0__.Assets.get(spriteSheetId).texture[textureId];
    }
    static getSingleTexture(textureId) {
        return _pixi_assets__WEBPACK_IMPORTED_MODULE_0__.Assets.get(textureId);
    }
    static async getAnimation(spritesheetId, animationId) {
        return (await _pixi_assets__WEBPACK_IMPORTED_MODULE_0__.Assets.load(spritesheetId)).animation[animationId];
    }
}


/***/ }),

/***/ "./pixi/effects/AlphaFadeInEffect.ts":
/*!*******************************************!*\
  !*** ./pixi/effects/AlphaFadeInEffect.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AlphaFadeInEffect)
/* harmony export */ });
class AlphaFadeInEffect {
    constructor(container, ticker) {
        container.alpha = 0;
        const effectRender = () => {
            container.alpha += (1 - container.alpha) * .125;
            if (container.alpha > 1) {
                container.alpha = 1;
                ticker.remove(effectRender);
            }
        };
        ticker.add(effectRender);
    }
}


/***/ }),

/***/ "./pixi/effects/WinCounter.ts":
/*!************************************!*\
  !*** ./pixi/effects/WinCounter.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WinCounter)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "../node_modules/gsap/index.js");
/* harmony import */ var app_helpers_promise_ResolvablePromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/helpers/promise/ResolvablePromise */ "./helpers/promise/ResolvablePromise.ts");
/* harmony import */ var app_game_CurrencyFormatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/game/CurrencyFormatter */ "./game/CurrencyFormatter.ts");
/* eslint-disable @typescript-eslint/no-explicit-any */



// noinspection JSUnusedGlobalSymbols
class WinCounter {
    constructor(winCounterLabel, useCurrency, useDecimals) {
        this.totalWinnings = 0;
        this.winnings = 0;
        this.currencyFormatter = new app_game_CurrencyFormatter__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.winCounterLabel = winCounterLabel;
        this.useCurrency = useCurrency;
        this.useDecimals = useDecimals;
    }
    animate(winnings, time, breakPromise) {
        this.totalWinnings = Math.round(winnings);
        const resolvablePromise = app_helpers_promise_ResolvablePromise__WEBPACK_IMPORTED_MODULE_0__["default"].getResolvablePromise();
        this.tween = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(this, time, {
            winnings,
            onUpdate: this.update,
            onComplete: () => {
                this.clear();
                resolvablePromise.resolve();
            },
            callbackScope: this,
        });
        if (breakPromise) {
            breakPromise.then(() => {
                this.clear();
                resolvablePromise.resolve();
                this.winnings = winnings;
                this.update();
            });
        }
        return resolvablePromise;
    }
    setValue(winnings) {
        this.winnings = this.totalWinnings = winnings;
        this.update();
    }
    update() {
        if (this.useDecimals) {
            this.updateAmount(this.winnings, true);
        }
        else {
            const amount = this.useCurrency ? Math.round(this.winnings / 100) * 100 : Math.round(this.winnings);
            this.updateAmount(amount, false);
        }
        this.onUpdateCallbackF && this.onUpdateCallbackF();
    }
    updateAmount(value, useDecimals) {
        this.winCounterLabel.text = this.useCurrency ? this.calculateValue(value, useDecimals) : value.toString();
    }
    calculateValue(value, useDecimals) {
        return this.currencyFormatter.formatAmount(value, useDecimals, true);
    }
    clear() {
        if (this.tween) {
            this.tween.kill();
        }
    }
    onUpdate(callbackF) {
        this.onUpdateCallbackF = callbackF;
    }
}


/***/ }),

/***/ "./scenes/BaseScene.ts":
/*!*****************************!*\
  !*** ./scenes/BaseScene.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseScene)
/* harmony export */ });
/* harmony import */ var _model_GameModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var _pixi_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pixi/display */ "../node_modules/@pixi/display/lib/index.mjs");
/* eslint-disable @typescript-eslint/no-unused-vars */
// noinspection JSUnusedLocalSymbols,JSUnusedGlobalSymbols


class BaseScene {
    constructor(sceneManager, app) {
        this.sceneManager = sceneManager;
        this.app = app;
        this.scene = new _pixi_display__WEBPACK_IMPORTED_MODULE_1__.Container();
        this.toDisposeList = [];
        this.toDeactivateList = [];
    }
    activate() {
        _model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].updateLayout.add((value, resolve) => {
            this.onResize(value);
            resolve === null || resolve === void 0 ? void 0 : resolve();
        }, this);
        this.app.ticker.add(this.onUpdate, this);
    }
    deactivate() {
        this.app.ticker.remove(this.onUpdate, this);
        _model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].unload(this);
        this.toDeactivateList.forEach(value => value());
        this.toDeactivateList.length = 0;
    }
    dispose() {
        this.toDeactivateList.forEach(value => value());
        this.toDisposeList.forEach(value => value());
        this.toDisposeList.length = 0;
        this.toDeactivateList.length = 0;
        this.scene.removeChild(...this.scene.children);
    }
    addToDispose(func) {
        this.toDisposeList.push(func);
    }
    addToDeactivateList(func) {
        this.toDeactivateList.push(func);
    }
    removeControl(control) {
        this.scene.removeChild(control.container);
    }
    addControl(control) {
        this.scene.addChild(control.container);
        this.addToDeactivateList(() => {
            control.container.parent && this.scene.removeChild(control.container);
        });
    }
    onResize(gameSize) { }
    onUpdate(delta) { }
}


/***/ }),

/***/ "./scenes/EmptyScene.ts":
/*!******************************!*\
  !*** ./scenes/EmptyScene.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmptyScene)
/* harmony export */ });
/* harmony import */ var app_scenes_BaseScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/scenes/BaseScene */ "./scenes/BaseScene.ts");

class EmptyScene extends app_scenes_BaseScene__WEBPACK_IMPORTED_MODULE_0__["default"] {
    compose() {
    }
}


/***/ }),

/***/ "./scenes/IntroGameScene.layout.ts":
/*!*****************************************!*\
  !*** ./scenes/IntroGameScene.layout.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "introBackground": () => (/* binding */ introBackground)
/* harmony export */ });
const scatterLayout = {
    name: "scatter_container",
    width: "100%",
    height: "100%",
    top: 0, left: 0,
    layouts: [{
            name: "intro_content_scatter",
            width: "80%", height: "80%",
            top: "10%", left: "15%",
            avoidBounding: "yes",
            scaleBy: "fit.in",
            alignIn: "c",
            aspects: {
                "1920/4157": {
                    left: "10%",
                },
                "1920/3408": {
                    left: "10%",
                },
                "1920/2561": {
                    left: "10%",
                },
                "1920/1440": {
                    left: "15%",
                },
                "1920/1082": {
                    left: "15%",
                },
                "1920/887": {
                    left: "15%",
                },
            },
        }],
};
const wildLayout = {
    name: "wild_container",
    width: "100%", height: "100%",
    top: 0, left: 0,
    layouts: [{
            name: "intro_content_wild",
            width: "80%", height: "80%",
            top: "10%", left: "5%",
            avoidBounding: "yes",
            scaleBy: "fit.in",
            alignIn: "c",
            aspects: {
                "1920/4157": {
                    left: "10%",
                },
                "1920/3408": {
                    left: "10%",
                },
                "1920/2561": {
                    left: "10%",
                },
                "1920/1440": {
                    left: "5%",
                },
                "1920/1082": {
                    left: "5%",
                },
                "1920/887": {
                    left: "5%",
                },
            },
        }],
};
const introBackground = {
    name: "shadow",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    scaleBy: "fit.out",
};
const introLayout = {
    name: "intro_container",
    width: "100%",
    height: "100%",
    top: "0%",
    left: "0%",
    scaleBy: "fit.in",
    alignIn: "c",
    sortBy: "vertical",
    display: "relative",
    layouts: [
        {
            name: "header",
            width: "100%", height: "20%",
            top: "0%", left: "0%",
            layouts: [{
                    width: "80%", height: "100%",
                    top: "0%", left: "0%",
                    name: "intro_header",
                    align: "t",
                    alignIn: "c",
                    scaleBy: "fit.in",
                    aspects: {
                        "1920/4157": {
                            width: "80%",
                        },
                        "1920/3408": {
                            width: "80%",
                        },
                        "1920/2561": {
                            width: "80%",
                        },
                        "1920/1440": {
                            width: "50%",
                        },
                        "1920/1082": {
                            width: "50%",
                        },
                        "1920/887": {
                            width: "50%",
                        },
                    },
                }],
        },
        {
            name: "intro_content",
            width: "100%",
            height: "70%",
            top: "0%",
            left: "0%",
            display: "table",
            alignIn: "c",
            layouts: [
                scatterLayout,
                wildLayout,
            ],
            aspects: {
                "1920/4157": {
                    sortBy: "vertical",
                },
                "1920/3408": {
                    sortBy: "vertical",
                },
                "1920/2561": {
                    sortBy: "vertical",
                },
                "1920/1440": {
                    sortBy: "horizontal",
                },
                "1920/1082": {
                    sortBy: "horizontal",
                },
                "1920/887": {
                    sortBy: "horizontal",
                },
            },
        },
        {
            name: "intro_footer",
            width: "80%",
            height: "10%",
            left: "10%",
            top: "0%",
            avoidBounding: "yes",
            scaleBy: "fit.in",
            alignIn: "c",
        },
    ],
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (introLayout);


/***/ }),

/***/ "./scenes/IntroGameScene.ts":
/*!**********************************!*\
  !*** ./scenes/IntroGameScene.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IntroGameScene)
/* harmony export */ });
/* harmony import */ var app_scenes_BaseScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/scenes/BaseScene */ "./scenes/BaseScene.ts");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/helpers/TimeHelper */ "./helpers/TimeHelper.ts");
/* harmony import */ var app_controls_GameTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/controls/GameTitle */ "./controls/GameTitle.ts");
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var app_layoutManager_LayoutManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/layoutManager/LayoutManager */ "./layoutManager/LayoutManager.ts");
/* harmony import */ var app_scenes_IntroGameScene_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/scenes/IntroGameScene.layout */ "./scenes/IntroGameScene.layout.ts");
/* harmony import */ var app_model_TextStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/model/TextStyles */ "./model/TextStyles.ts");
/* harmony import */ var app_controls_SpineControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/controls/SpineControl */ "./controls/SpineControl.ts");
/* harmony import */ var app_controls_extensions_CentralizingExtension__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/controls/extensions/CentralizingExtension */ "./controls/extensions/CentralizingExtension.ts");
/* harmony import */ var _pixi_text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @pixi/text */ "../node_modules/@pixi/text/lib/index.mjs");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











class IntroGameScene extends app_scenes_BaseScene__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.footerTitle = new app_controls_GameTitle__WEBPACK_IMPORTED_MODULE_3__["default"]("", app_model_TextStyles__WEBPACK_IMPORTED_MODULE_7__["default"].INTRO_GAME_FOOTER_TITLE);
        this.spineControl = new app_controls_SpineControl__WEBPACK_IMPORTED_MODULE_8__["default"]("splash");
        this.intervalId = -1;
        this.onTapAnyWhere = () => {
            window.document.body.removeEventListener("click", this.onTapAnyWhere);
            window.document.body.removeEventListener("pointerup", this.onTapAnyWhere);
            window.document.body.removeEventListener("keyup", this.onKeyUp);
            app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].firstUserInteractionPromise.resolve();
        };
    }
    compose() {
        this.footerTitle.name("intro_footer");
        this.addControl(this.footerTitle);
        this.addControl(this.spineControl);
        this.spineControl.addExtension(new app_controls_extensions_CentralizingExtension__WEBPACK_IMPORTED_MODULE_9__["default"]());
    }
    async activate() {
        await super.activate();
        this.layoutManager.addLayout(app_scenes_IntroGameScene_layout__WEBPACK_IMPORTED_MODULE_6__["default"], app_scenes_IntroGameScene_layout__WEBPACK_IMPORTED_MODULE_6__.introBackground);
        this.layoutManager.update(app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].gameSize);
        this.spineControl.play("idle", { loop: true });
        this.spineControl.play("aspect", { frameAt: 0, trackIndex: 1 });
        const text = new _pixi_text__WEBPACK_IMPORTED_MODULE_10__.Text("COLLECT WILDS DURING MAIN \nAND FREE SPINS GAMES \nTO GET EXTRA WILDS ON REELS!", app_model_TextStyles__WEBPACK_IMPORTED_MODULE_7__["default"].INTRO_FEATURE_CONTROL_TEXT);
        const text2 = new _pixi_text__WEBPACK_IMPORTED_MODULE_10__.Text("MATCH SYMBOLS ON THE REELS \nAND ON THE MAIN WHEEL \nTO GET THE BIG AND THE SUPER BIG WHEELS", app_model_TextStyles__WEBPACK_IMPORTED_MODULE_7__["default"].INTRO_FEATURE_CONTROL_TEXT);
        text.anchor.set(0.5);
        text2.anchor.set(0.5);
        this.spineControl.replace("wild_description", text);
        this.spineControl.replace("wheels_description", text2);
        this.startSwipeInterval();
        this.onResize(app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].gameSize);
        const delay =  true ? 0 : 0;
        await (0,app_helpers_TimeHelper__WEBPACK_IMPORTED_MODULE_2__.promiseDelay)(delay);
        this.footerTitle.gameTitle.text = "TAP ANYWHERE TO START THE GAME";
        this.footerTitle.animate();
        window.document.body.addEventListener("click", this.onTapAnyWhere);
        window.document.body.addEventListener("pointerup", this.onTapAnyWhere);
        window.document.body.addEventListener("keyup", this.onKeyUp.bind(this));
    }
    onResize(gameSize) {
        super.onResize(gameSize);
        const aspect = gameSize.width / gameSize.height;
        const aspectTo = 1920 / 1080;
        const aspectAt = 1080 / 1920;
        const frameAt = (Math.max(Math.min(aspectTo, aspect), aspectAt) - aspectAt) / (aspectTo - aspectAt);
        this.spineControl.play("aspect", { frameAt: 1 - frameAt, trackIndex: 1 });
    }
    async deactivate() {
        this.footerTitle.gameTitle.text = "";
        this.layoutManager.removeLayout(app_scenes_IntroGameScene_layout__WEBPACK_IMPORTED_MODULE_6__["default"]);
        this.footerTitle.stopAnimate();
        clearInterval(this.intervalId);
        await super.deactivate();
    }
    onKeyUp(event) {
        if (event.keyCode == 32) {
            event.stopImmediatePropagation();
        }
        this.onTapAnyWhere();
    }
    startSwipeInterval() {
        let counter = 0;
        this.intervalId = setInterval(() => {
            this.spineControl.play(`swipe${(counter++ % 2) + 1}`, { trackIndex: 2, timeScale: 2.5 });
        }, 5000);
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_1__.inject)(app_layoutManager_LayoutManager__WEBPACK_IMPORTED_MODULE_5__["default"])
], IntroGameScene.prototype, "layoutManager", void 0);


/***/ }),

/***/ "./scenes/LoaderScene.layout.ts":
/*!**************************************!*\
  !*** ./scenes/LoaderScene.layout.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loaderLayout = {
    name: "loader_container",
    width: "80%",
    height: "40%",
    left: "10%",
    top: "20%",
    scaleBy: "fit.in",
    alignIn: "c",
    sortBy: "vertical",
    layouts: [
        {
            name: "logo",
            width: "60%",
            left: "20%",
            height: "90%",
            scaleBy: "fit.in",
            alignIn: "b",
        },
        {
            name: "bar",
            width: "100%",
            height: "75%",
            scaleBy: "fit.in",
            avoidBounding: "yes",
            top: "25%",
            alignIn: "t",
        },
    ],
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loaderLayout);


/***/ }),

/***/ "./scenes/LoaderScene.ts":
/*!*******************************!*\
  !*** ./scenes/LoaderScene.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoaderScene)
/* harmony export */ });
/* harmony import */ var _BaseScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseScene */ "./scenes/BaseScene.ts");
/* harmony import */ var _model_GameModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var _SceneManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SceneManager */ "./scenes/SceneManager.ts");
/* harmony import */ var _pixi_effects_AlphaFadeInEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pixi/effects/AlphaFadeInEffect */ "./pixi/effects/AlphaFadeInEffect.ts");
/* harmony import */ var _controls_LoaderControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controls/LoaderControl */ "./controls/LoaderControl.ts");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_layoutManager_LayoutManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/layoutManager/LayoutManager */ "./layoutManager/LayoutManager.ts");
/* harmony import */ var app_scenes_LoaderScene_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/scenes/LoaderScene.layout */ "./scenes/LoaderScene.layout.ts");
/* harmony import */ var app_scenes_subscenes_BackgroundScene__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/scenes/subscenes/BackgroundScene */ "./scenes/subscenes/BackgroundScene.ts");
/* harmony import */ var app_scenes_IntroGameScene_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/scenes/IntroGameScene.layout */ "./scenes/IntroGameScene.layout.ts");
/* harmony import */ var app_controls_SpriteControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/controls/SpriteControl */ "./controls/SpriteControl.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











class LoaderScene extends _BaseScene__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(sceneManager, app) {
        super(sceneManager, app);
        this.logo = new app_controls_SpriteControl__WEBPACK_IMPORTED_MODULE_10__.SpriteControl("logo.png");
        this.loaderControl = new _controls_LoaderControl__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.loaderSignals = _model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.loader;
        this.backgroundSceneManager = new _SceneManager__WEBPACK_IMPORTED_MODULE_2__["default"](this.app, false);
        this.loaderContainer = this.loaderControl.container;
    }
    compose() {
        void this.backgroundSceneManager.navigate(app_scenes_subscenes_BackgroundScene__WEBPACK_IMPORTED_MODULE_8__["default"]);
        this.loaderSignals.progressUpdate.add(this.onLoaderUpdate, this);
        this.loaderSignals.complete.add(this.onLoadComplete, this);
        this.addControl(this.logo.name("logo"));
        this.addControl(this.loaderControl.name("bar"));
        new _pixi_effects_AlphaFadeInEffect__WEBPACK_IMPORTED_MODULE_3__["default"](this.loaderContainer, this.app.ticker);
        this.loaderControl.update(0.01);
    }
    activate() {
        super.activate();
        _model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.background.show.emit("intro");
        this.layoutManager.addLayout(app_scenes_LoaderScene_layout__WEBPACK_IMPORTED_MODULE_7__["default"], app_scenes_IntroGameScene_layout__WEBPACK_IMPORTED_MODULE_9__.introBackground);
    }
    deactivate() {
        this.layoutManager.removeLayout(app_scenes_LoaderScene_layout__WEBPACK_IMPORTED_MODULE_7__["default"], app_scenes_IntroGameScene_layout__WEBPACK_IMPORTED_MODULE_9__.introBackground);
        super.deactivate();
    }
    dispose() {
        this.loaderSignals.progressUpdate.remove(this.onLoaderUpdate);
        this.loaderSignals.complete.remove(this.onLoadComplete);
        super.dispose();
    }
    onLoadComplete() {
        this.loaderControl.update(1);
    }
    onLoaderUpdate(progress) {
        this.loaderControl.update(progress);
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_5__.inject)(app_layoutManager_LayoutManager__WEBPACK_IMPORTED_MODULE_6__["default"])
], LoaderScene.prototype, "layoutManager", void 0);


/***/ }),

/***/ "./scenes/MainGameScene.layout.ts":
/*!****************************************!*\
  !*** ./scenes/MainGameScene.layout.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "grassLayout": () => (/* binding */ grassLayout)
/* harmony export */ });
/* harmony import */ var app_scenes_subscenes_BetPanelScene_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/scenes/subscenes/BetPanelScene.layout */ "./scenes/subscenes/BetPanelScene.layout.ts");
var _a;

const commonLayouts = [{
        name: "box",
        uid: "box",
        scaleBy: "fit.in",
        height: "100%",
        width: "100%",
        top: "0%",
        left: "0%",
        display: "table",
    }];
const header = {
    name: "header",
    extend: "box",
    width: "100%",
    display: "fixed",
    sortBy: "horizontal",
    layouts: [
        {
            name: "logo",
            scaleBy: "fit.in",
            alignIn: "c",
            avoidBounding: "yes",
            aspects: {
                "1920/4157": {
                    height: "100%",
                    width: "75%",
                    align: "c",
                },
                "1920/3408": {
                    height: "100%",
                    width: "80%",
                    align: "c",
                },
                "1920/2561": {
                    height: "100%",
                    width: "50%",
                    align: "c",
                },
                "1920/1440": {
                    height: "100%",
                    width: "50%",
                    align: "c",
                },
                "1920 / 1335": {
                    height: "100%",
                    width: "50%",
                    align: "c",
                },
                "1920 / 1334": {
                    height: "100%",
                    width: "45%",
                    align: "c",
                },
                "1920/1082": {
                    height: "100%",
                    width: "35%",
                    align: "c",
                },
                "1920/887": {
                    height: "100%",
                    width: "28%",
                    align: "c",
                },
            },
        },
    ],
    aspects: {
        "1920/4157": {
            height: "12.5%",
        },
        "1920/3408": {
            height: "12.5%",
        },
        "1920/2561": {
            height: "12.5%",
        },
        "1920/1440": {
            height: "12.5%",
        },
        "1920/1082": {
            height: "14.5%",
        },
        "1920/887": {
            height: "12.5%",
        },
    },
};
const footer = {
    name: "footer",
    extend: "box",
    width: "100%",
    display: "relative",
    layouts: [
        {
            name: "character_box",
            extend: "box",
            alignIn: "t",
            align: "l",
            width: "2%",
            height: "100%",
            avoidBounding: "yes",
            display: "fixed",
            layouts: [
                {
                    name: "character",
                    scaleBy: "fit.in",
                    width: "1%",
                    left: 375,
                    height: "100%",
                    aspects: {
                        "1920/4157": {
                            left: 300,
                            width: "1.7%",
                        },
                        "1920/3408": {
                            width: "1.5%",
                        },
                        "1920/2561": {
                            width: "1.3%",
                            left: 300,
                        },
                        "1920/1440": {
                            width: "1%",
                            left: 375,
                        },
                        "1920/1082": {
                            width: "0.9%",
                        },
                        "1920/887": {
                            left: 500,
                            width: "0.7%",
                        },
                    },
                },
            ],
        },
        {
            name: "footer_content",
            extend: "box",
            scaleBy: "fit.in",
            alignIn: "c",
            top: "0%",
            width: "55%",
            layouts: [
                ...(_a = app_scenes_subscenes_BetPanelScene_layout__WEBPACK_IMPORTED_MODULE_0__.betPanelLayout.layouts) !== null && _a !== void 0 ? _a : [],
                // todo: support child nodes extending [#39]
                /* {
                name: "footerLayout",
                extend: "bet_panel"
            }*/
            ],
            aspects: {
                "1920/4157": {
                    width: "85%",
                    height: "90%",
                    align: "b",
                },
                "1920/3408": {
                    width: "85%",
                    height: "90%",
                    align: "b",
                },
                "1920/2561": {
                    width: "77%",
                    height: "90%",
                    align: "b",
                },
                "1920/1440": {
                    width: "60%",
                    height: "100%",
                    align: "c",
                },
                "1920/1082": {
                    width: "60%",
                    height: "90%",
                    align: "b",
                },
                "1920/887": {
                    width: "55%",
                    height: "100%",
                    align: "c",
                },
            },
        },
    ],
    aspects: {
        "1920/4157": {
            height: "7.5%",
        },
        "1920/3408": {
            height: "7.5%",
        },
        "1920/2561": {
            height: "9.5%",
        },
        "1920/1440": {
            height: "11%",
        },
        "1920/1082": {
            height: "10.5%",
        },
        "1920/887": {
            height: "12.5%",
        },
    },
};
const leftSideBox = {
    name: "\nleftSideBox",
    display: "relative",
    top: "0%",
    layouts: [
        {
            name: "options_btn",
            scaleBy: "fit.in",
            avoidBounding: "yes",
            alignIn: "c",
            align: "bl",
            height: "15%",
            layouts: [
                {
                    name: "options_selector",
                    align: "b",
                    scaleBy: "fit.in",
                    alignIn: "b",
                    aspects: {
                        "1920/4157": {
                            width: "150%",
                            height: "500%",
                            top: "-110%",
                        },
                        "1920/3408": {
                            width: "150%",
                            height: "500%",
                            top: "-110%",
                        },
                        "1920/2561": {
                            width: "150%",
                            height: "500%",
                            top: "-110%",
                        },
                        "1920/1440": {
                            width: "155%",
                            height: "515%",
                            top: "-92%",
                        },
                        "1920/1082": {
                            width: "175%",
                            height: "600%",
                            top: "-110%",
                        },
                        "1920/887": {
                            width: "150%",
                            height: "500%",
                            top: "-110%",
                        },
                    },
                },
            ],
            aspects: {
                "1920/4157": {
                    top: "-3%",
                    left: "20%",
                    width: "27%",
                },
                "1920/3408": {
                    top: "-3%",
                    left: "20%",
                    width: "27%",
                },
                "1920/2561": {
                    top: "-3%",
                    left: "20%",
                    width: "27%",
                },
                "1920/1440": {
                    top: "0%",
                    left: "33%",
                    width: "34%",
                },
                "1920/1082": {
                    top: "-1.5%",
                    left: "25%",
                    width: "27%",
                },
                "1920/887": {
                    top: "-3%",
                    left: "20%",
                    width: "27%",
                },
            },
        },
    ],
    aspects: {
        "1920/4157": {
            width: "0%",
            height: "0%",
        },
        "1920/3408": {
            width: "0%",
            height: "0%",
        },
        "1920/2561": {
            width: "0%",
            height: "0%",
        },
        "1920/1440": {
            width: "17.5%",
            height: "100%",
        },
        "1920/1082": {
            width: "20%",
            height: "100%",
        },
        "1920/887": {
            width: "20%",
            height: "100%",
        },
    },
};
const rightSideBox = {
    name: "\nrightSideBox",
    display: "relative",
    layouts: [
        {
            name: "btns_con",
            width: "100%",
            layouts: [
                {
                    name: "options_btn",
                    scaleBy: "fit.in",
                    avoidBounding: "yes",
                    alignIn: "c",
                    layouts: [
                        {
                            name: "options_selector",
                            align: "b",
                            scaleBy: "fit.in",
                            alignIn: "b",
                            aspects: {
                                "1920/4157": {
                                    width: "150%",
                                    height: "500%",
                                    top: "-110%",
                                },
                                "1920/3408": {
                                    width: "150%",
                                    height: "470%",
                                    top: "-110%",
                                },
                                "1920/2561": {
                                    width: "100%",
                                    height: "500%",
                                    top: "-110%",
                                },
                                "1920/1440": {
                                    width: "155%",
                                    height: "515%",
                                    top: "-110%",
                                },
                                "1920/1082": {
                                    width: "175%",
                                    height: "600%",
                                    top: "-110%",
                                },
                                "1920/887": {
                                    width: "150%",
                                    height: "500%",
                                    top: "-110%",
                                },
                            },
                        },
                    ],
                    aspects: {
                        "1920/4157": {
                            width: "20%",
                            height: "20%",
                            top: "-20%",
                            align: "c",
                            left: "-30%",
                        },
                        "1920/3408": {
                            width: "30%",
                            height: "30%",
                            top: "-20%",
                            align: "c",
                            left: "-27.5%",
                        },
                        "1920/2561": {
                            width: "45%",
                            height: "45%",
                            top: "-7.5%",
                            align: "c",
                            left: "-25%",
                        },
                        "1920/1440": {
                            width: "70%",
                            height: "70%",
                            align: "c",
                            left: "-450%",
                            top: "400%",
                        },
                        "1920/1082": {
                            width: "60%",
                            height: "60%",
                            align: "c",
                            left: "-400%",
                            top: "410%",
                        },
                        "1920/887": {
                            width: "60%",
                            height: "60%",
                            align: "c",
                            left: "-400%",
                            top: "410%",
                        },
                    },
                },
                {
                    name: "force_btn",
                    avoidBounding: "yes",
                    alignIn: "c",
                    scaleBy: "fit.in",
                    aspects: {
                        "1920/4157": {
                            width: "20%",
                            height: "20%",
                            align: "b",
                            top: "-10%",
                            left: "-18%",
                        },
                        "1920/3408": {
                            width: "30%",
                            height: "30%",
                            align: "b",
                            top: "-10%",
                            left: "-18%",
                        },
                        "1920/2561": {
                            width: "32.5%",
                            height: "32.5%",
                            align: "c",
                            top: "0%",
                            left: "-18%",
                        },
                        "1920/1440": {
                            width: "62%",
                            height: "62%",
                            align: "t",
                            top: "-97%",
                            left: "0%",
                        },
                        "1920/1082": {
                            width: "62%",
                            height: "62%",
                            align: "t",
                            top: "-97%",
                            left: "0%",
                        },
                        "1920/887": {
                            width: "62%",
                            height: "62%",
                            align: "t",
                            top: "-97%",
                            left: "0%",
                        },
                    },
                },
                {
                    name: "autoplay_btn",
                    avoidBounding: "yes",
                    alignIn: "c",
                    scaleBy: "fit.in",
                    aspects: {
                        "1920/4157": {
                            width: "20%",
                            height: "20%",
                            top: "-20%",
                            align: "c",
                            left: "30%",
                        },
                        "1920/3408": {
                            width: "30%",
                            height: "30%",
                            align: "c",
                            top: "-20%",
                            left: "27.5%",
                        },
                        "1920/2561": {
                            width: "45%",
                            height: "45%",
                            align: "c",
                            top: "-7.5%",
                            left: "25%",
                        },
                        "1920/1440": {
                            width: "62%",
                            height: "62%",
                            align: "t",
                            top: "-215%",
                            left: "0%",
                        },
                        "1920/1082": {
                            width: "62%",
                            height: "62%",
                            align: "t",
                            top: "-125%",
                            left: "0%",
                        },
                        "1920/887": {
                            width: "70%",
                            height: "70%",
                            align: "t",
                            top: "-120%",
                            left: "0%",
                        },
                    },
                },
                {
                    name: "spin_btn",
                    avoidBounding: "yes",
                    alignIn: "c",
                    scaleBy: "fit.in",
                    aspects: {
                        "1920/4157": {
                            width: "50%",
                            height: "50%",
                            align: "c",
                            top: "-20%",
                        },
                        "1920/3408": {
                            width: "55%",
                            height: "55%",
                            align: "c",
                            top: "-20%",
                        },
                        "1920/2561": {
                            width: "100%",
                            height: "100%",
                            align: "c",
                            top: "-7.5%",
                        },
                        "1920/1440": {
                            width: "100%",
                            height: "155%",
                            align: "t",
                            top: "-235%",
                        },
                        "1920/1082": {
                            width: "100%",
                            height: "155%",
                            align: "t",
                            top: "-140%",
                        },
                        "1920/887": {
                            width: "150%",
                            height: "150%",
                            align: "t",
                            top: "-125%",
                        },
                    },
                },
                {
                    name: "bet_chooser",
                    alignIn: "c",
                    avoidBounding: "yes",
                    scaleBy: "fit.in",
                    aspects: {
                        "1920/4157": {
                            width: "50%",
                            height: "30%",
                            align: "b",
                            top: "-7.5%",
                        },
                        "1920/3408": {
                            width: "40%",
                            height: "30%",
                            align: "b",
                            top: "-7.5%",
                        },
                        "1920/2561": {
                            width: "35%",
                            height: "45%",
                            align: "b",
                            top: "45%",
                        },
                        "1920/1440": {
                            width: "90%",
                            height: "60%",
                            align: "t",
                            top: "-160%",
                            left: "0%",
                        },
                        "1920/1082": {
                            width: "85%",
                            height: "60%",
                            align: "t",
                            top: "-65%",
                            left: "0%",
                        },
                        "1920/887": {
                            width: "90%",
                            height: "70%",
                            align: "t",
                            top: "-60%",
                            left: "0%",
                        },
                    },
                },
            ],
            aspects: {
                "1920/4157": {
                    sortBy: "horizontal",
                    display: "fixed",
                    height: "100%",
                    align: "c",
                },
                "1920/3408": {
                    sortBy: "horizontal",
                    display: "fixed",
                    height: "100%",
                    align: "c",
                },
                "1920/2561": {
                    sortBy: "horizontal",
                    display: "fixed",
                    height: "100%",
                    align: "c",
                },
                "1920/1440": {
                    sortBy: "vertical",
                    display: "table",
                    height: "76%",
                    align: "b",
                },
                "1920/1082": {
                    sortBy: "vertical",
                    display: "table",
                    height: "104%",
                    align: "b",
                },
                "1920/887": {
                    sortBy: "vertical",
                    display: "table",
                    height: "110%",
                    align: "b",
                },
            },
        },
    ],
    aspects: {
        "1920/4157": {
            sortBy: "horizontal",
            width: "100%",
            height: "35%",
        },
        "1920/3408": {
            sortBy: "horizontal",
            width: "100%",
            height: "30%",
        },
        "1920/2561": {
            sortBy: "horizontal",
            width: "100%",
            height: "20%",
        },
        "1920/1440": {
            sortBy: "vertical",
            width: "18%",
            height: "100%",
        },
        "1920/1082": {
            sortBy: "vertical",
            width: "20%",
            height: "100%",
        },
        "1920/887": {
            sortBy: "vertical",
            width: "20%",
            height: "100%",
        },
    },
};
const reelBoxContainer = {
    name: "reelBoxContainer",
    extend: "box",
    display: "fixed",
    alignIn: "c",
    align: "c",
    height: "100%",
    layouts: [
        {
            name: "reelBox",
            extend: "box",
            height: "100%",
            width: "100%",
            scaleBy: "fit.in",
            aspects: {
                "1920/4157": {
                    alignIn: "b",
                },
                "1920/3408": {
                    alignIn: "b",
                },
                "1920/2561": {
                    alignIn: "b",
                },
                "1920/1440": {
                    alignIn: "c",
                },
                "1920/1082": {
                    alignIn: "c",
                },
                "1920/887": {
                    alignIn: "c",
                },
            },
        },
        {
            name: "autoplay_selector",
            extend: "box",
            avoidBounding: "yes",
            alignIn: "c",
            width: "96%",
            aspects: {
                "1920/4157": {
                    height: "20%",
                    align: "b",
                    top: "-15%",
                    scaleBy: "fit.out",
                },
                "1920/3408": {
                    height: "20%",
                    align: "b",
                    top: "-20%",
                    scaleBy: "fit.out",
                },
                "1920/2561": {
                    height: "30%",
                    align: "b",
                    top: "-25%",
                    scaleBy: "fit.in",
                },
                "1920/1440": {
                    height: "20%",
                    align: "b",
                    top: "-35%",
                    scaleBy: "fit.out",
                },
                "1920/1082": {
                    height: "40%",
                    align: "c",
                    top: "0%",
                    scaleBy: "fit.in",
                },
                "1920/887": {
                    height: "40%",
                    align: "c",
                    top: "0%",
                    scaleBy: "fit.in",
                },
            },
        },
        {
            name: "bet_options_selector",
            alignIn: "c",
            align: "c",
            width: "80%",
            height: "80%",
            scaleBy: "fit.in",
            avoidBounding: "yes",
            aspects: {
                "1920/4157": {
                    top: "25%",
                },
                "1920/3408": {
                    top: "15%",
                },
                "1920/2561": {
                    top: "0%",
                },
                "1920/1440": {
                    top: "0%",
                },
                "1920/1082": {
                    top: "0%",
                },
                "1920/887": {
                    top: "0%",
                },
            },
        },
    ],
    aspects: {
        "1920/4157": {
            width: "92%",
        },
        "1920/3408": {
            width: "100%",
        },
        "1920/2561": {
            width: "100%",
        },
        "1920/1440": {
            width: "100%",
        },
        "1920/1082": {
            width: "100%",
        },
        "1920/887": {
            width: "100%",
        },
    },
};
const reelBoxAndWheelContrainer = {
    name: "reelBoxAndWheelContrainer",
    extend: "box",
    height: "90%",
    width: "100%",
    display: "fixed",
    alignIn: "c",
    layouts: [
        reelBoxContainer,
    ],
};
const centerGameBody = {
    name: "centerGameBody",
    extend: "box",
    sortBy: "vertical",
    display: "relative",
    layouts: [
        reelBoxAndWheelContrainer,
        {
            name: "messageBar",
            avoidBounding: "yes",
            scaleBy: "fit.in",
            alignIn: "c",
            left: "10%",
            top: "0%",
            width: "80%",
            height: "8%",
        },
    ],
    aspects: {
        "1920/4157": {
            width: "100%",
            height: "65%",
            left: "0%",
        },
        "1920/3408": {
            width: "100%",
            height: "70%",
            left: "0%",
        },
        "1920/2561": {
            width: "100%",
            height: "70%",
            left: "0%",
        },
        "1920/1440": {
            width: "64%",
            height: "100%",
            left: "-0.5%",
        },
        "1920/1082": {
            width: "60%",
            height: "100%",
            left: "0%",
        },
        "1920/887": {
            width: "60%",
            height: "100%",
            left: "0%",
        },
    },
};
const gameBody = {
    name: "gameBody",
    extend: "box",
    display: "relative",
    width: "100%",
    layouts: [
        leftSideBox,
        centerGameBody,
        rightSideBox,
    ],
    aspects: {
        "1920/4157": {
            sortBy: "vertical",
            height: "80%",
        },
        "1920/3408": {
            sortBy: "vertical",
            height: "80%",
        },
        "1920/2561": {
            sortBy: "vertical",
            height: "78%",
        },
        "1920/1440": {
            sortBy: "horizontal",
            height: "76.5%",
        },
        "1920/1082": {
            sortBy: "horizontal",
            height: "75%",
        },
        "1920/887": {
            sortBy: "horizontal",
            height: "75%",
        },
    },
};
const grassLayout = {
    name: "grass",
    align: "b",
    alignIn: "b",
    width: "100%",
    left: "8%",
    aspects: {
        "1920/4157": {
            height: "15%",
        },
        "1920/3408": {
            height: "17.5%",
        },
        "1920/2561": {
            height: "20%",
        },
        "1920/1440": {
            height: "30%",
        },
        "1920/1082": {
            height: "35%",
        },
        "1920/887": {
            height: "40%",
        },
    },
};
const layouts = {
    name: "body",
    display: "relative",
    extend: "box",
    height: "100%",
    width: "100%",
    sortBy: "vertical",
    layouts: [
        header,
        gameBody,
        footer,
    ],
};
const mainGameLayout = {
    commonLayouts, layouts,
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainGameLayout);


/***/ }),

/***/ "./scenes/MainGameScene.ts":
/*!*********************************!*\
  !*** ./scenes/MainGameScene.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainGameScene)
/* harmony export */ });
/* harmony import */ var app_scenes_BaseScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/scenes/BaseScene */ "./scenes/BaseScene.ts");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_scenes_SceneManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/scenes/SceneManager */ "./scenes/SceneManager.ts");
/* harmony import */ var app_scenes_subscenes_ReelScene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/scenes/subscenes/ReelScene */ "./scenes/subscenes/ReelScene.ts");
/* harmony import */ var app_scenes_subscenes_BetPanelScene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/scenes/subscenes/BetPanelScene */ "./scenes/subscenes/BetPanelScene.ts");
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var app_scenes_EmptyScene__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/scenes/EmptyScene */ "./scenes/EmptyScene.ts");
/* harmony import */ var app_layoutManager_LayoutManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/layoutManager/LayoutManager */ "./layoutManager/LayoutManager.ts");
/* harmony import */ var app_scenes_MainGameScene_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/scenes/MainGameScene.layout */ "./scenes/MainGameScene.layout.ts");
/* harmony import */ var app_scenes_subscenes_PopupScene__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/scenes/subscenes/PopupScene */ "./scenes/subscenes/PopupScene.ts");
/* harmony import */ var app_controls_motion_view_MotionLayerControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/controls/motion/view/MotionLayerControl */ "./controls/motion/view/MotionLayerControl.ts");
/* harmony import */ var app_controls_SpriteControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/controls/SpriteControl */ "./controls/SpriteControl.ts");
/* harmony import */ var app_controls_extensions_OnResizeExtension__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/controls/extensions/OnResizeExtension */ "./controls/extensions/OnResizeExtension.ts");
/* harmony import */ var app_controls_extensions_ShakeExtension__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/controls/extensions/ShakeExtension */ "./controls/extensions/ShakeExtension.ts");
/* harmony import */ var res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! res/configs/gameConfig.json */ "../resources/assets/configs/gameConfig.json");
/* harmony import */ var app_scenes_PaytableScene__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/scenes/PaytableScene */ "./scenes/PaytableScene.ts");
/* harmony import */ var app_controls_grass_GrassControl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/controls/grass/GrassControl */ "./controls/grass/GrassControl.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















class MainGameScene extends app_scenes_BaseScene__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.grassControl = new app_controls_grass_GrassControl__WEBPACK_IMPORTED_MODULE_16__["default"]();
        this.logoControl = new app_controls_SpriteControl__WEBPACK_IMPORTED_MODULE_11__.SpriteControl("logo.png", { x: 0.5, y: 0.5 });
        this.paytableSceneManager = new app_scenes_SceneManager__WEBPACK_IMPORTED_MODULE_2__["default"](this.app, false);
        this.reelSceneManager = new app_scenes_SceneManager__WEBPACK_IMPORTED_MODULE_2__["default"](this.app, false);
        this.betPanelSceneManager = new app_scenes_SceneManager__WEBPACK_IMPORTED_MODULE_2__["default"](this.app, false);
        this.popupSceneManager = new app_scenes_SceneManager__WEBPACK_IMPORTED_MODULE_2__["default"](this.app, false);
    }
    async compose() {
        this.addControl(this.logoControl.name("logo"));
        this.addControl(this.grassControl.name("grass"));
        this.logoControl.addExtension(new app_controls_extensions_ShakeExtension__WEBPACK_IMPORTED_MODULE_13__.ShakeExtension({
            speedFactorUpdate: app_model_GameModel__WEBPACK_IMPORTED_MODULE_5__["default"].game.signals.speedFactorUpdate,
            shakeSignal: app_model_GameModel__WEBPACK_IMPORTED_MODULE_5__["default"].game.signals.reels.shake,
        }, res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_14__.animations.logoShaking));
        await app_model_GameModel__WEBPACK_IMPORTED_MODULE_5__["default"].ready;
    }
    async activate() {
        super.activate();
        await this.paytableSceneManager.navigate(app_scenes_EmptyScene__WEBPACK_IMPORTED_MODULE_6__["default"]);
        await this.reelSceneManager.navigate(app_scenes_subscenes_ReelScene__WEBPACK_IMPORTED_MODULE_3__["default"]);
        // await this.betPanelSceneManager.navigate(gameModel.isMobile ? BetPanelScene : DesktopBetPanelScene);
        await this.betPanelSceneManager.navigate(app_scenes_subscenes_BetPanelScene__WEBPACK_IMPORTED_MODULE_4__["default"]);
        await this.popupSceneManager.navigate(app_scenes_subscenes_PopupScene__WEBPACK_IMPORTED_MODULE_9__["default"]);
        this.motionLayer.name("motionLayer");
        this.scene.parent.addChild(this.motionLayer.container);
        this.motionLayer.moveTop();
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_5__["default"].game.signals.background.show.emit("main");
        // gameModel.isMobile ?
        //     this.layoutManager.addLayout(...mainGameLayout.commonLayouts, mainGameLayout.layouts) :
        //     this.layoutManager.addLayout(desktopLayout);
        this.layoutManager.addLayout(...app_scenes_MainGameScene_layout__WEBPACK_IMPORTED_MODULE_8__["default"].commonLayouts, app_scenes_MainGameScene_layout__WEBPACK_IMPORTED_MODULE_8__["default"].layouts);
        this.layoutManager.addLayout(app_scenes_MainGameScene_layout__WEBPACK_IMPORTED_MODULE_8__.grassLayout);
        this.layoutManager.update(app_model_GameModel__WEBPACK_IMPORTED_MODULE_5__["default"].gameSize);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_5__["default"].game.signals.paytableShow.add(() => {
            this.paytableSceneManager.navigate(app_scenes_PaytableScene__WEBPACK_IMPORTED_MODULE_15__["default"]);
        }, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_5__["default"].game.signals.paytableHide.add(() => {
            this.paytableSceneManager.navigate(app_scenes_EmptyScene__WEBPACK_IMPORTED_MODULE_6__["default"]);
        }, this);
    }
    async deactivate() {
        await this.reelSceneManager.navigate(app_scenes_EmptyScene__WEBPACK_IMPORTED_MODULE_6__["default"]);
        await this.betPanelSceneManager.navigate(app_scenes_EmptyScene__WEBPACK_IMPORTED_MODULE_6__["default"]);
        await this.popupSceneManager.navigate(app_scenes_EmptyScene__WEBPACK_IMPORTED_MODULE_6__["default"]);
        await this.paytableSceneManager.navigate(app_scenes_EmptyScene__WEBPACK_IMPORTED_MODULE_6__["default"]);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_5__["default"].game.signals.paytableShow.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_5__["default"].game.signals.paytableHide.unload(this);
        this.layoutManager.removeLayout(...app_scenes_MainGameScene_layout__WEBPACK_IMPORTED_MODULE_8__["default"].commonLayouts, app_scenes_MainGameScene_layout__WEBPACK_IMPORTED_MODULE_8__["default"].layouts);
        await super.deactivate();
    }
    dispose() {
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_5__["default"].game.signals.infobar.show.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_5__["default"].game.signals.infobar.hide.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_5__["default"].game.signals.infobar.stop.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_5__["default"].game.signals.infobar.start.unload(this);
        this.reelSceneManager.dispose();
        this.betPanelSceneManager.dispose();
        this.popupSceneManager.dispose();
        super.dispose();
    }
    onResize(gameSize) {
        super.onResize(gameSize);
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_1__.inject)(app_layoutManager_LayoutManager__WEBPACK_IMPORTED_MODULE_7__["default"])
], MainGameScene.prototype, "layoutManager", void 0);
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_1__.inject)(app_controls_motion_view_MotionLayerControl__WEBPACK_IMPORTED_MODULE_10__["default"], () => {
        const motionLayerControl = new app_controls_motion_view_MotionLayerControl__WEBPACK_IMPORTED_MODULE_10__["default"]();
        motionLayerControl.addExtension(new app_controls_extensions_OnResizeExtension__WEBPACK_IMPORTED_MODULE_12__["default"]());
        return motionLayerControl;
    })
], MainGameScene.prototype, "motionLayer", void 0);


/***/ }),

/***/ "./scenes/PaytableScene.ts":
/*!*********************************!*\
  !*** ./scenes/PaytableScene.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PaytableScene)
/* harmony export */ });
/* harmony import */ var app_scenes_BaseScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/scenes/BaseScene */ "./scenes/BaseScene.ts");
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var app_controls_SpineControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/controls/SpineControl */ "./controls/SpineControl.ts");
/* harmony import */ var app_controls_extensions_CentralizingExtension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/controls/extensions/CentralizingExtension */ "./controls/extensions/CentralizingExtension.ts");
/* harmony import */ var app_controls_extensions_LocalizationExtension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/controls/extensions/LocalizationExtension */ "./controls/extensions/LocalizationExtension.ts");
/* harmony import */ var app_controls_game_extensions_PaytableExtension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/controls/game/extensions/PaytableExtension */ "./controls/game/extensions/PaytableExtension.ts");
/* harmony import */ var app_controls_extensions_SpineAspectExtension__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/controls/extensions/SpineAspectExtension */ "./controls/extensions/SpineAspectExtension.ts");
/* harmony import */ var app_controls_button_SpriteSheetButtonControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/controls/button/SpriteSheetButtonControl */ "./controls/button/SpriteSheetButtonControl.ts");








class PaytableScene extends app_scenes_BaseScene__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.backBtn = new app_controls_button_SpriteSheetButtonControl__WEBPACK_IMPORTED_MODULE_7__["default"]("back_btn.png");
        this.paytablePage = new app_controls_SpineControl__WEBPACK_IMPORTED_MODULE_2__["default"]("paytable_page");
        this.paytable = new app_controls_SpineControl__WEBPACK_IMPORTED_MODULE_2__["default"]("paytable");
        this.page = 0;
    }
    compose() {
        this.addControl(this.paytable);
        const spineAspectExtension = new app_controls_extensions_SpineAspectExtension__WEBPACK_IMPORTED_MODULE_6__["default"]({ aspectAt: 1080 / 1920, aspectTo: 1920 / 1080 });
        this.paytablePage.addExtension(new app_controls_game_extensions_PaytableExtension__WEBPACK_IMPORTED_MODULE_5__["default"]());
        this.paytablePage.addExtension(new app_controls_extensions_LocalizationExtension__WEBPACK_IMPORTED_MODULE_4__.LocalizationExtension());
        this.paytable.addExtension(new app_controls_extensions_CentralizingExtension__WEBPACK_IMPORTED_MODULE_3__["default"]());
        this.paytable.addExtension(spineAspectExtension);
        this.paytablePage.addExtension(spineAspectExtension);
        this.paytable.replace("page1", this.paytablePage.container);
        this.paytable.replace("back_btn", this.backBtn.container);
    }
    activate() {
        super.activate();
        this.backBtn.onClick.add(this.onBackBtnClick);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.background.show.emit("dark");
        this.paytablePage.play("show");
        this.showPage(1);
        this.app.stage.on("pointerdown", this.onNextPage, this);
        this.app.stage.cursor = "pointer";
        this.app.stage.eventMode = "static";
    }
    deactivate() {
        this.app.stage.off("pointerdown", this.onNextPage, this);
        this.app.stage.cursor = "default";
        this.app.stage.eventMode = "auto";
        this.backBtn.onClick.unload(this);
        super.deactivate();
    }
    onBackBtnClick() {
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.ui.options.info.hide.emit();
    }
    onNextPage(e) {
        if (e.target == this.backBtn.container) {
            return;
        }
        this.showPage(((this.page++) % 7) + 1);
    }
    showPage(page) {
        this.page = page;
        this.paytablePage.play(`show/page${page}`, { trackIndex: 2 });
    }
}


/***/ }),

/***/ "./scenes/SceneManager.ts":
/*!********************************!*\
  !*** ./scenes/SceneManager.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SceneManager)
/* harmony export */ });
/* harmony import */ var _model_GameModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/helpers/signals/signal/Signal */ "./helpers/signals/signal/Signal.ts");


class SceneManager {
    constructor(app, useSceneCache = true) {
        this.app = app;
        this.useSceneCache = useSceneCache;
        this.sceneCache = new Map();
        this.stage = app.stage;
    }
    async navigate(targetScreen) {
        if (this.activeSceneKey == targetScreen) {
            return;
        }
        if (this.activeScene != null) {
            await this.activeScene.deactivate();
            SceneManager.SIGNALS.SCENE.DIACTIVATED.emit(this.activeScene);
            this.stage.removeChild(this.activeScene.scene);
            if (!this.useSceneCache) {
                await this.activeScene.dispose();
            }
        }
        if (!this.sceneCache.has(targetScreen)) {
            // todo: TBD
            const TargetScreenClazz = targetScreen;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this.activeScene = new TargetScreenClazz(this, this.app);
            await this.activeScene.compose();
            if (this.useSceneCache) {
                this.sceneCache.set(targetScreen, this.activeScene);
            }
        }
        else {
            const activeScene = this.sceneCache.get(targetScreen);
            if (activeScene) {
                this.activeScene = activeScene;
            }
        }
        this.stage.addChild(this.activeScene.scene);
        this.activeScene.scene.name = targetScreen.name;
        await this.activeScene.activate();
        SceneManager.SIGNALS.SCENE.ACTIVATED.emit(this.activeScene);
        _model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].updateLayout.emit(_model_GameModel__WEBPACK_IMPORTED_MODULE_0__["default"].gameSize);
        this.activeSceneKey = targetScreen;
    }
    dispose() {
        if (this.activeScene != null) {
            this.activeScene.deactivate();
            this.stage.removeChild(this.activeScene.scene);
            if (!this.useSceneCache) {
                this.activeScene.dispose();
            }
        }
    }
}
SceneManager.SIGNALS = {
    SCENE: {
        ACTIVATED: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_1__["default"](),
        DIACTIVATED: new app_helpers_signals_signal_Signal__WEBPACK_IMPORTED_MODULE_1__["default"](),
    },
};


/***/ }),

/***/ "./scenes/subscenes/BackgroundScene.layout.ts":
/*!****************************************************!*\
  !*** ./scenes/subscenes/BackgroundScene.layout.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "backgroundLayout": () => (/* binding */ backgroundLayout),
/* harmony export */   "shadowLayout": () => (/* binding */ shadowLayout)
/* harmony export */ });
const leftShadowLayout = {
    name: "leftShadow",
    aspects: {
        "1920/4157": {
            width: "100%",
            height: "25%",
            align: "t",
        },
        "1920/3408": {
            width: "100%",
            height: "25%",
            align: "t",
        },
        "1920/2561": {
            width: "100%",
            height: "25%",
            align: "t",
        },
        "1920/1440": {
            width: "25%",
            height: "100%",
            align: "l",
        },
        "1920/1082": {
            width: "25%",
            height: "100%",
            align: "l",
        },
        "1920/887": {
            width: "25%",
            height: "100%",
            align: "l",
        },
    },
};
const rightShadowLayout = {
    name: "rightShadow",
    aspects: {
        "1920/4157": {
            width: "100%",
            height: "25%",
            align: "b",
        },
        "1920/3408": {
            width: "100%",
            height: "25%",
            align: "b",
        },
        "1920/2561": {
            width: "100%",
            height: "25%",
            align: "b",
        },
        "1920/1440": {
            width: "25%",
            height: "100%",
            align: "r",
        },
        "1920/1082": {
            width: "25%",
            height: "100%",
            align: "r",
        },
        "1920/887": {
            width: "25%",
            height: "100%",
            align: "r",
        },
    },
};
const shadowLayout = {
    name: "backgroundShadow",
    height: "100%",
    width: "100%",
    layouts: [
        leftShadowLayout,
        rightShadowLayout,
    ],
    aspects: {
        "1920/4157": {
            sortBy: "vertical",
        },
        "1920/3408": {
            sortBy: "vertical",
        },
        "1920/2561": {
            sortBy: "vertical",
        },
        "1920/1440": {
            sortBy: "horizontal",
        },
        "1920/1082": {
            sortBy: "horizontal",
        },
        "1920/887": {
            sortBy: "horizontal",
        },
    },
};
const backgroundLayout = {
    name: "background_container",
    height: "100%",
    width: "100%",
    layouts: [{
            name: "background",
            top: 0, left: 0,
            alignIn: "c",
            width: "100%", height: "100%",
            scaleBy: "fit.out",
        }],
};


/***/ }),

/***/ "./scenes/subscenes/BackgroundScene.ts":
/*!*********************************************!*\
  !*** ./scenes/subscenes/BackgroundScene.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BackgroundScene)
/* harmony export */ });
/* harmony import */ var app_scenes_BaseScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/scenes/BaseScene */ "./scenes/BaseScene.ts");
/* harmony import */ var app_controls_BackgroundControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/controls/BackgroundControl */ "./controls/BackgroundControl.ts");
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_layoutManager_LayoutManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layoutManager/LayoutManager */ "./layoutManager/LayoutManager.ts");
/* harmony import */ var app_helpers_promise_gsap_PromisableGsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/helpers/promise/gsap/PromisableGsap */ "./helpers/promise/gsap/PromisableGsap.ts");
/* harmony import */ var app_scenes_subscenes_BackgroundScene_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/scenes/subscenes/BackgroundScene.layout */ "./scenes/subscenes/BackgroundScene.layout.ts");
/* harmony import */ var app_controls_extensions_OnResizeExtension__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/controls/extensions/OnResizeExtension */ "./controls/extensions/OnResizeExtension.ts");
/* harmony import */ var app_controls_extensions_SpineLazyAssetsUpdateExtension__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/controls/extensions/SpineLazyAssetsUpdateExtension */ "./controls/extensions/SpineLazyAssetsUpdateExtension.ts");
/* harmony import */ var app_controls_extensions_ShakeExtension__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/controls/extensions/ShakeExtension */ "./controls/extensions/ShakeExtension.ts");
/* harmony import */ var res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! res/configs/gameConfig.json */ "../resources/assets/configs/gameConfig.json");
/* harmony import */ var app_controls_particles_BackgroundParticleControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/controls/particles/BackgroundParticleControl */ "./controls/particles/BackgroundParticleControl.ts");
/* harmony import */ var app_pixi_StrictResourcesHelper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/pixi/StrictResourcesHelper */ "./pixi/StrictResourcesHelper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













class BackgroundScene extends app_scenes_BaseScene__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.backgroundControl = new app_controls_BackgroundControl__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.shadowControl = new app_controls_BackgroundControl__WEBPACK_IMPORTED_MODULE_1__.BackgroundShadowControl();
        this.backgroundParticleControl = new app_controls_particles_BackgroundParticleControl__WEBPACK_IMPORTED_MODULE_11__["default"]();
    }
    compose() {
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_2__["default"].game.signals.background.show.add(this.onShowBackground, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_2__["default"].game.signals.background.hide.add(this.onHideBackground, this);
        this.addControl(this.backgroundControl.name("background"));
        this.addControl(this.shadowControl);
        this.addControl(this.backgroundParticleControl);
        this.backgroundControl.addExtension(new app_controls_extensions_SpineLazyAssetsUpdateExtension__WEBPACK_IMPORTED_MODULE_8__["default"]("background", "vfx"));
        this.backgroundControl.addExtension(new app_controls_extensions_SpineLazyAssetsUpdateExtension__WEBPACK_IMPORTED_MODULE_8__["default"]("background", "background"));
        this.backgroundControl.addExtension(new app_controls_extensions_ShakeExtension__WEBPACK_IMPORTED_MODULE_9__.ShakeExtension({
            speedFactorUpdate: app_model_GameModel__WEBPACK_IMPORTED_MODULE_2__["default"].game.signals.speedFactorUpdate,
            shakeSignal: app_model_GameModel__WEBPACK_IMPORTED_MODULE_2__["default"].game.signals.reels.shake,
        }, res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_10__.animations.backShaking));
        this.shadowControl.addExtension(new app_controls_extensions_OnResizeExtension__WEBPACK_IMPORTED_MODULE_7__["default"]());
    }
    activate() {
        var _a;
        super.activate();
        app_pixi_StrictResourcesHelper__WEBPACK_IMPORTED_MODULE_12__["default"].load("background", "particle_firefly.png").then(texture => {
            this.backgroundParticleControl.initParticleSystem(texture);
            this.backgroundParticleControl.startEmitting();
        });
        this.layoutManager.addLayout(app_scenes_subscenes_BackgroundScene_layout__WEBPACK_IMPORTED_MODULE_6__.backgroundLayout);
        this.layoutManager.addLayout(app_scenes_subscenes_BackgroundScene_layout__WEBPACK_IMPORTED_MODULE_6__.shadowLayout);
        this.shadowControl.moveBottom();
        this.backgroundControl.moveBottom();
        (_a = this.scene.parent) === null || _a === void 0 ? void 0 : _a.addChildAt(this.scene, 0);
    }
    deactivate() {
        this.backgroundParticleControl.stopEmitting();
        this.layoutManager.removeLayout(app_scenes_subscenes_BackgroundScene_layout__WEBPACK_IMPORTED_MODULE_6__.backgroundLayout);
        this.layoutManager.removeLayout(app_scenes_subscenes_BackgroundScene_layout__WEBPACK_IMPORTED_MODULE_6__.shadowLayout);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_2__["default"].game.signals.background.show.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_2__["default"].game.signals.background.hide.unload(this);
        super.deactivate();
    }
    async changeBackground(type) {
        switch (type) {
            case "intro":
                await this.backgroundControl.setBackground("main");
                break;
            case "main":
                await this.backgroundControl.setBackground("main");
                break;
            case "fs":
                await this.backgroundControl.setBackground("freespin");
                break;
            case "dark":
                await this.backgroundControl.setBackground("main");
                break;
        }
    }
    async onShowBackground(type, resolve) {
        this.changeBackground(type);
        await app_helpers_promise_gsap_PromisableGsap__WEBPACK_IMPORTED_MODULE_5__["default"].to(this.backgroundControl.container, { alpha: 1 });
        resolve === null || resolve === void 0 ? void 0 : resolve();
    }
    async onHideBackground(_, resolve) {
        await app_helpers_promise_gsap_PromisableGsap__WEBPACK_IMPORTED_MODULE_5__["default"].to(this.backgroundControl.container, { alpha: 0 });
        resolve === null || resolve === void 0 ? void 0 : resolve();
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__.inject)(app_layoutManager_LayoutManager__WEBPACK_IMPORTED_MODULE_4__["default"])
], BackgroundScene.prototype, "layoutManager", void 0);


/***/ }),

/***/ "./scenes/subscenes/BetPanelScene.layout.ts":
/*!**************************************************!*\
  !*** ./scenes/subscenes/BetPanelScene.layout.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "betPanelLayout": () => (/* binding */ betPanelLayout)
/* harmony export */ });
const betPanelLayout = {
    name: "body",
    width: "100%",
    height: "100%",
    sortBy: "horizontal",
    layouts: [
        {
            name: "balance_label",
            avoidBounding: "yes",
            alignIn: "c",
            align: "l",
            scaleBy: "fit.in",
            width: "80%",
            height: "70%",
        },
        {
            name: "win_label",
            avoidBounding: "yes",
            alignIn: "c",
            align: "c",
            scaleBy: "fit.in",
            width: "80%",
            height: "70%",
        },
        {
            name: "total_bet",
            avoidBounding: "yes",
            alignIn: "c",
            align: "r",
            scaleBy: "fit.in",
            width: "80%",
            height: "70%",
        },
    ],
};


/***/ }),

/***/ "./scenes/subscenes/BetPanelScene.ts":
/*!*******************************************!*\
  !*** ./scenes/subscenes/BetPanelScene.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BetPanelScene)
/* harmony export */ });
/* harmony import */ var app_scenes_BaseScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/scenes/BaseScene */ "./scenes/BaseScene.ts");
/* harmony import */ var app_controls_button_SpinBtnControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/controls/button/SpinBtnControl */ "./controls/button/SpinBtnControl.ts");
/* harmony import */ var app_layoutManager_LayoutManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layoutManager/LayoutManager */ "./layoutManager/LayoutManager.ts");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var app_controls_ui_BalanceControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/controls/ui/BalanceControl */ "./controls/ui/BalanceControl.ts");
/* harmony import */ var app_controls_ui_TotalBetControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/controls/ui/TotalBetControl */ "./controls/ui/TotalBetControl.ts");
/* harmony import */ var app_controls_ui_WinControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/controls/ui/WinControl */ "./controls/ui/WinControl.ts");
/* harmony import */ var app_controls_button_OptionsBtnControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/controls/button/OptionsBtnControl */ "./controls/button/OptionsBtnControl.ts");
/* harmony import */ var app_controls_AutoplayControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/controls/AutoplayControl */ "./controls/AutoplayControl.ts");
/* harmony import */ var app_controls_OptionsControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/controls/OptionsControl */ "./controls/OptionsControl.ts");
/* harmony import */ var app_model_BetModel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/model/BetModel */ "./model/BetModel.ts");
/* harmony import */ var app_model_UserModel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/model/UserModel */ "./model/UserModel.ts");
/* harmony import */ var app_controls_button_AutoplayButtonControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/controls/button/AutoplayButtonControl */ "./controls/button/AutoplayButtonControl.ts");
/* harmony import */ var app_controls_SpriteControl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/controls/SpriteControl */ "./controls/SpriteControl.ts");
/* harmony import */ var app_model_FreeSpinModel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/model/FreeSpinModel */ "./model/FreeSpinModel.ts");
/* harmony import */ var app_controls_extensions_ControlShowerExtension__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/controls/extensions/ControlShowerExtension */ "./controls/extensions/ControlShowerExtension.ts");
/* harmony import */ var app_controls_MessageBarControl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/controls/MessageBarControl */ "./controls/MessageBarControl.ts");
/* harmony import */ var res_configs_infoMessageBarConfig_json__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! res/configs/infoMessageBarConfig.json */ "../resources/assets/configs/infoMessageBarConfig.json");
/* harmony import */ var app_controls_extensions_GlowFilterExtension__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/controls/extensions/GlowFilterExtension */ "./controls/extensions/GlowFilterExtension.ts");
/* harmony import */ var app_controls_BetControl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/controls/BetControl */ "./controls/BetControl.ts");
/* harmony import */ var app_controls_button_BetSelectorBtnsControl__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/controls/button/BetSelectorBtnsControl */ "./controls/button/BetSelectorBtnsControl.ts");
/* harmony import */ var app_controls_character_CharacterControl__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! app/controls/character/CharacterControl */ "./controls/character/CharacterControl.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























class BetPanelScene extends app_scenes_BaseScene__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.optionsBtnControl = new app_controls_button_OptionsBtnControl__WEBPACK_IMPORTED_MODULE_8__["default"]();
        this.autoplayControl = new app_controls_AutoplayControl__WEBPACK_IMPORTED_MODULE_9__["default"](app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].mainGameInfo.autoPlays);
        this.spinBtnControl = new app_controls_button_SpinBtnControl__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.balanceLabelControl = new app_controls_ui_BalanceControl__WEBPACK_IMPORTED_MODULE_5__["default"]("BALANCE");
        this.totalBetControl = new app_controls_ui_TotalBetControl__WEBPACK_IMPORTED_MODULE_6__["default"]("BET");
        this.winControl = new app_controls_ui_WinControl__WEBPACK_IMPORTED_MODULE_7__["default"]("WIN");
        this.optionsControl = new app_controls_OptionsControl__WEBPACK_IMPORTED_MODULE_10__["default"]();
        this.betControl = new app_controls_BetControl__WEBPACK_IMPORTED_MODULE_20__["default"](app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].mainGameInfo.bets);
        this.betSelector = new app_controls_button_BetSelectorBtnsControl__WEBPACK_IMPORTED_MODULE_21__["default"](app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].mainGameInfo.bets, this.betControl);
        this.autoplayButton = new app_controls_button_AutoplayButtonControl__WEBPACK_IMPORTED_MODULE_13__.AutoplayButtonControl();
        this.plank = new app_controls_SpriteControl__WEBPACK_IMPORTED_MODULE_14__.SpriteControl("balance_field.png");
        this.messageBarControl = new app_controls_MessageBarControl__WEBPACK_IMPORTED_MODULE_17__.MessageBarControl(res_configs_infoMessageBarConfig_json__WEBPACK_IMPORTED_MODULE_18__.gameInfo, res_configs_infoMessageBarConfig_json__WEBPACK_IMPORTED_MODULE_18__.updateFrequency);
        this.characterControl = new app_controls_character_CharacterControl__WEBPACK_IMPORTED_MODULE_22__["default"]();
    }
    async compose() {
        const autoplayButton = this.autoplayButton;
        const betSelector = this.betSelector;
        const optionsControl = this.optionsControl;
        const betControl = this.betControl;
        const autoplaySelector = this.autoplayControl;
        const spinBtnControl = this.spinBtnControl;
        const balanceLabelControl = this.balanceLabelControl;
        const totalBetControl = this.totalBetControl;
        const winControl = this.winControl;
        const optionsBtnControl = this.optionsBtnControl;
        this.addControl(this.plank.name("footer"));
        this.addControl(autoplayButton.name("autoplay_btn"));
        this.addControl(betSelector.name("bet_chooser"));
        this.addControl(autoplaySelector.name("autoplay_selector"));
        this.addControl(spinBtnControl.name("spin_btn"));
        this.addControl(balanceLabelControl.name("balance_label"));
        this.addControl(totalBetControl.name("total_bet"));
        this.addControl(winControl.name("win_label"));
        this.addControl(optionsBtnControl.name("options_btn"));
        this.addControl(this.messageBarControl.name("messageBar"));
        this.addControl(optionsControl.name("options_selector"));
        this.addControl(betControl.name("bet_options_selector"));
        this.addControl(this.characterControl.name("character"));
        this.characterControl.setBounds(1, 1);
        spinBtnControl.disable();
        await app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].ready;
        const userStats = app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].mainGameInfo.userStats;
        this.betControl.betChanged.add(this.onBetChanged, this);
        balanceLabelControl.setValue(userStats.balance);
        winControl.setValue(0);
        betSelector.updateBetIndex(app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].mainGameInfo.userStats.betId);
        spinBtnControl.onClick.add(this.onSpinBtnClick, this);
        betSelector.betChanged.add(this.onBetChanged, this);
        optionsBtnControl.addExtension(new app_controls_extensions_ControlShowerExtension__WEBPACK_IMPORTED_MODULE_16__["default"](optionsControl));
        autoplayButton.start.addExtension(new app_controls_extensions_ControlShowerExtension__WEBPACK_IMPORTED_MODULE_16__["default"](autoplaySelector));
        this.messageBarControl.addExtension(new app_controls_extensions_GlowFilterExtension__WEBPACK_IMPORTED_MODULE_19__["default"]());
        autoplayButton.stop.onClick.add(this.onAutoplayStop, this);
        optionsControl.sound.onClick.add(this.onSoundClick, this);
        optionsControl.force.onClick.add(this.onForceBtnClick, this);
        autoplaySelector.changeAutoplay.add(this.onAutoplayChanged, this);
        this.userModel.balanceChanged.add(this.onBalanceChanged, this);
        this.userModel.betChanged.add(this.onBetChanged, this);
        this.freeSpinsModel.freeSpinsAmountChanged.add(this.onSpinRemainsChanged, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.spinStarted.add(this.onSpinStarted, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].startSpinning.add(this.onSpinBtnClick, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.spinComplete.add(this.onSpinComplete, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.ui.spinButton.enable.add(this.onEnableSpinButton, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.ui.spinButton.disable.add(this.onDisableSpinButton, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.ui.spinButton.updateCounter.add(this.onUpdateSpinBtnCounter, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.ui.showWin.add(this.onShowWin, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.ui.disableControls.add(this.onDisableControls, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.ui.enableControls.add(this.onEnableControls, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.autoplay.decrease.add(this.onAutoplayDecrease, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.autoplay.stop.add(this.onAutoplayStop, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.ui.autoplayButton.enable.add(() => this.autoplayButton.enable(), this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.infobar.stop.add(this.onStopUpdatingMessageBar, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.infobar.start.add(this.onStartUpdatingMessageBar, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.infobar.hide.add(this.onHideMessageBar, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.infobar.show.add(this.onShowMessageBar, this);
        this.userModel.updateUserStats(app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].mainGameInfo.userStats, true);
        window.document.body.addEventListener("keypress", this.onKeyPress.bind(this));
    }
    dispose() {
        this.betControl.betChanged.unload(this);
        this.userModel.betChanged.unload(this);
        this.optionsControl.sound.onClick.unload(this);
        this.freeSpinsModel.freeSpinsAmountChanged.unload(this);
        this.autoplayButton.stop.onClick.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.spinStarted.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].startSpinning.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.spinComplete.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.ui.spinButton.enable.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.ui.spinButton.disable.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.ui.spinButton.updateCounter.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.ui.autoplayButton.enable.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.ui.showWin.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.autoplay.decrease.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.autoplay.stop.unload(this);
        document.removeEventListener("keypress", this.onKeyPress);
        super.dispose();
    }
    activate() {
        super.activate();
        // todo: support chile nodes extending [#39]
        // this.layoutManager.addLayout(betPanelLayout);
    }
    deactivate() {
        // todo: support chile nodes extending [#39]
        // this.layoutManager.removeLayout(betPanelLayout);
        super.deactivate();
    }
    onKeyPress(e) {
        if (e.keyCode == 32) {
            this.onSpinBtnClick();
        }
        if (e.keyCode == 109 || e.keyCode == 1100) {
            app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.ui.options.toggleSound.emit();
        }
    }
    onSpinBtnClick() {
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.ui.spinButton.clicked.emit();
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].getHowler().play("spin-button");
    }
    onSpinStarted() { }
    onSpinComplete() { }
    onBalanceChanged(balance) {
        this.balanceLabelControl.setValue(balance);
    }
    onBetChanged(betId) {
        this.betModel.setBet(betId);
        this.userModel.setBet(betId);
        this.betSelector.updateBetIndex(betId);
        this.totalBetControl.setValue(this.betModel.getTotalBet());
        this.betControl.hide();
    }
    onShowWin(winInfo) {
        const title = winInfo.isTotalWin ? "TOTAL WIN" : "WIN";
        this.winControl.setTitle(title);
        this.winControl.setValue(winInfo.win);
    }
    onEnableSpinButton() {
        this.spinBtnControl.enable();
    }
    onDisableSpinButton() {
        this.spinBtnControl.disable();
    }
    onDisableControls() {
        this.autoplayButton.disable();
        this.spinBtnControl.disable();
        this.betSelector.disable();
        this.betControl.disable();
    }
    onEnableControls() {
        this.spinBtnControl.enable();
        this.autoplayButton.enable();
        this.betSelector.enable();
        this.betControl.enable();
    }
    async onAutoplayChanged(autoplayId) {
        if (app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].autoplay.spins === 0) {
            app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.autoplay.changed.emit(autoplayId);
            app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].autoplay.spins = app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].mainGameInfo.autoPlays[autoplayId];
        }
        await [
            this.autoplayButton.showStop(),
            this.autoplayControl.hide(),
        ].promise().all();
    }
    onAutoplayDecrease() {
        this.autoplayButton.setSpinsNumber(app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].autoplay.spins);
        if (app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].autoplay.spins === 0) {
            app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.autoplay.stop.emit();
        }
    }
    onAutoplayStop() {
        this.autoplayButton.showPlay();
        this.autoplayButton.disable();
        this.autoplayButton.setSpinsNumber(0);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].autoplay.spins = 0;
    }
    onSpinRemainsChanged(data) {
        this.onUpdateSpinBtnCounter(data.spinRemains);
    }
    onUpdateSpinBtnCounter(spinsRemains) {
        this.spinBtnControl.setSpinsNumber(spinsRemains);
    }
    onForceBtnClick() {
        this.optionsControl.force.switchToggleState();
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].setForceMode(!app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].isForce);
    }
    onSoundClick() {
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.ui.options.toggleSound.emit();
    }
    onResize(gameSize) {
        super.onResize(gameSize);
    }
    onStopUpdatingMessageBar() {
        this.messageBarControl.stopUpdating();
    }
    onStartUpdatingMessageBar() {
        this.messageBarControl.startUpdating();
    }
    onHideMessageBar() {
        this.messageBarControl.hide();
    }
    onShowMessageBar() {
        this.messageBarControl.show();
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__.inject)(app_layoutManager_LayoutManager__WEBPACK_IMPORTED_MODULE_2__["default"])
], BetPanelScene.prototype, "layoutManager", void 0);
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__.inject)(app_model_BetModel__WEBPACK_IMPORTED_MODULE_11__["default"])
], BetPanelScene.prototype, "betModel", void 0);
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__.inject)(app_model_UserModel__WEBPACK_IMPORTED_MODULE_12__["default"])
], BetPanelScene.prototype, "userModel", void 0);
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_3__.inject)(app_model_FreeSpinModel__WEBPACK_IMPORTED_MODULE_15__["default"])
], BetPanelScene.prototype, "freeSpinsModel", void 0);


/***/ }),

/***/ "./scenes/subscenes/PopupScene.ts":
/*!****************************************!*\
  !*** ./scenes/subscenes/PopupScene.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupScene)
/* harmony export */ });
/* harmony import */ var app_scenes_BaseScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/scenes/BaseScene */ "./scenes/BaseScene.ts");
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var app_controls_popups_PopupControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/controls/popups/PopupControl */ "./controls/popups/PopupControl.ts");
/* harmony import */ var app_controls_popups_ShadowControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/controls/popups/ShadowControl */ "./controls/popups/ShadowControl.ts");
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_layoutManager_LayoutManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/layoutManager/LayoutManager */ "./layoutManager/LayoutManager.ts");
/* harmony import */ var app_model_BetModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/model/BetModel */ "./model/BetModel.ts");
/* harmony import */ var app_controls_extensions_CentralizingExtension__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/controls/extensions/CentralizingExtension */ "./controls/extensions/CentralizingExtension.ts");
/* harmony import */ var app_controls_extensions_SpeedFactorExtension__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/controls/extensions/SpeedFactorExtension */ "./controls/extensions/SpeedFactorExtension.ts");
/* harmony import */ var res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! res/configs/gameConfig.json */ "../resources/assets/configs/gameConfig.json");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










class PopupScene extends app_scenes_BaseScene__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.shadow = new app_controls_popups_ShadowControl__WEBPACK_IMPORTED_MODULE_3__["default"]();
    }
    compose() {
    }
    activate() {
        super.activate();
        this.addControl(this.shadow);
        this.layoutManager.addLayout(app_controls_popups_ShadowControl__WEBPACK_IMPORTED_MODULE_3__.shadowLayout);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.popup.fsIntro.show.add(this.onShowFsPopup, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.popup.fsIntro.hide.add(this.onHideShadow, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.popup.fsOutro.show.add(this.onShowFsOutroPopup, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.popup.fsOutro.hide.add(this.onHideShadow, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.popup.winCounter.show.add(this.onShowWinCounterPopup, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.popup.winCounter.hide.add(this.onHideShadow, this);
        // todo: added spine popup as example[#17]
        // this.onShowFsPopup();
    }
    deactivate() {
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.popup.fsIntro.show.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.popup.fsIntro.hide.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.popup.fsOutro.show.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.popup.fsOutro.hide.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.popup.winCounter.show.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.popup.winCounter.hide.unload(this);
        this.layoutManager.removeLayout(app_controls_popups_ShadowControl__WEBPACK_IMPORTED_MODULE_3__.shadowLayout);
        super.deactivate();
    }
    async onShowFsPopup(spinsAmount, resolve) {
        await this.showPopup("intro", spinsAmount);
        resolve === null || resolve === void 0 ? void 0 : resolve();
    }
    async onShowFsOutroPopup(freeSpinsWin, resolve) {
        await this.showPopup("outro", freeSpinsWin);
        resolve === null || resolve === void 0 ? void 0 : resolve();
    }
    async onShowWinCounterPopup(totalWin, resolve) {
        const isBigWin = this.betModel.bigWinCalculator.isBigWin(totalWin);
        const skin = isBigWin ? "win_counter" : "low_win_counter";
        const time = this.getWinCounterTime(totalWin);
        await this.showPopup(skin, totalWin, time);
        resolve === null || resolve === void 0 ? void 0 : resolve();
    }
    async showPopup(skin, win, time) {
        const popupSignals = app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.popup;
        const fsPopupSignals = skin == "intro" ? popupSignals.fsIntro : popupSignals.fsOutro;
        const isLowWin = skin == "low_win_counter";
        const winCounterSkins = ["win_counter", "low_win_counter"];
        const popupSignal = winCounterSkins.contains(skin) ? popupSignals.winCounter : fsPopupSignals;
        const popup = app_controls_popups_PopupControl__WEBPACK_IMPORTED_MODULE_2__.PopupControlFactory.getPopup({ time, skin, counterValue: win, popupSignal });
        this.addControl(popup);
        popup.addExtension(new app_controls_extensions_SpeedFactorExtension__WEBPACK_IMPORTED_MODULE_8__["default"]());
        popup.addExtension(new app_controls_extensions_CentralizingExtension__WEBPACK_IMPORTED_MODULE_7__["default"]());
        if (!isLowWin) {
            await this.shadow.show();
        }
        await popup.show();
        await popupSignal.hidden.addOnce(() => {
            this.removeControl(popup);
        }, this);
        popupSignal.shown.emit();
    }
    async onHideShadow(_, resolve) {
        await this.shadow.hide();
        resolve === null || resolve === void 0 ? void 0 : resolve();
    }
    getWinCounterTime(totalWin) {
        const winType = this.betModel.bigWinCalculator.getWinType(totalWin);
        switch (winType) {
            case "LOW":
                return res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_9__.win.duration.low;
            case "MEDIUM":
                return res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_9__.win.duration.medium;
            case "BIG":
                return res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_9__.win.duration.big;
            case "SUPER":
                return res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_9__.win.duration["super"];
        }
        return res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_9__.win.duration.epic;
    }
}
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_4__.inject)(app_layoutManager_LayoutManager__WEBPACK_IMPORTED_MODULE_5__["default"])
], PopupScene.prototype, "layoutManager", void 0);
__decorate([
    (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_4__.inject)(app_model_BetModel__WEBPACK_IMPORTED_MODULE_6__["default"])
], PopupScene.prototype, "betModel", void 0);


/***/ }),

/***/ "./scenes/subscenes/ReelScene.ts":
/*!***************************************!*\
  !*** ./scenes/subscenes/ReelScene.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReelScene)
/* harmony export */ });
/* harmony import */ var app_scenes_BaseScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/scenes/BaseScene */ "./scenes/BaseScene.ts");
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var app_controls_GameControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/controls/GameControl */ "./controls/GameControl.ts");
/* harmony import */ var app_controls_extensions_ShakeExtension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/controls/extensions/ShakeExtension */ "./controls/extensions/ShakeExtension.ts");
/* harmony import */ var res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! res/configs/gameConfig.json */ "../resources/assets/configs/gameConfig.json");





class ReelScene extends app_scenes_BaseScene__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.gameControl = new app_controls_GameControl__WEBPACK_IMPORTED_MODULE_2__["default"](app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].mainGameInfo).name("reelBox");
        this.reelsControl = this.gameControl.reelsControl;
        this.linesControl = this.gameControl.linesControl;
    }
    async compose() {
        this.addControl(this.gameControl);
        this.gameControl.addExtension(new app_controls_extensions_ShakeExtension__WEBPACK_IMPORTED_MODULE_3__.ShakeExtension({
            speedFactorUpdate: app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.speedFactorUpdate,
            shakeSignal: app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.shake,
        }, res_configs_gameConfig_json__WEBPACK_IMPORTED_MODULE_4__.animations.reelsShaking));
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.anticipateReels.add(this.onSetAnticipateReels, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.updateSkin.add(this.onUpdateSkins, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.updateAnimation.add(this.onUpdateAnimations, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.spin.add(this.onSpin, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.stop.add(this.onStop, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.forceMoveOn.add(this.onForceMoveOn, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.dimAllSymbols.add(this.onAllDimSymbols, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.dimSpecificSymbols.add(this.onDimSpecifiSymbols, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.undimSpecificSymbols.add(this.onUndimSpecifiSymbols, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.stopAllAnimations.add(this.onStopAllSymbols, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.showScatterWins.add(this.onShowScatterWins, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.showLineWins.add(this.onShowLineWins, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.clearSymbols.add(this.onClearSymbols, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.showLine.add(this.onShowLine, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.hideLines.add(this.onHideLines, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.play.add(this.onPlaySymbolAnimation, this);
        this.reelsControl.signals.reelStopped.add(this.onReelStopped, this);
        this.reelsControl.signals.reelStopStarted.add(this.onReelStopStarted, this);
        this.reelsControl.anticipationShown.add(this.onAnticipationShown, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.updateReelOffset.add(this.updateReelOffset, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.addWinLable.add(this.onAddWinLable, this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.removeWinLable.add(this.onRemoveWinLable, this);
    }
    dispose() {
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.stopAllAnimations.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.anticipateReels.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.updateSkin.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.updateAnimation.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.spin.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.stop.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.forceMoveOn.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.dimAllSymbols.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.dimSpecificSymbols.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.undimSpecificSymbols.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.showScatterWins.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.showLineWins.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.clearSymbols.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.showLine.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.hideLines.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.play.unload(this);
        this.reelsControl.signals.reelStopped.unload(this);
        this.reelsControl.signals.reelStopStarted.unload(this);
        this.reelsControl.signals.reelSpinStarted.unload(this);
        this.reelsControl.anticipationShown.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.updateReelOffset.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.addWinLable.unload(this);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.removeWinLable.unload(this);
        super.dispose();
    }
    async onPlaySymbolAnimation(payload, resolve) {
        await this.reelsControl.playSymbolAnimation(payload);
        resolve && resolve();
    }
    onUpdateSkins(skin) {
        this.reelsControl.updateSkins(skin);
    }
    onUpdateAnimations(animation) {
        this.reelsControl.updateAnimation(animation);
    }
    onStopAllSymbols() {
        this.reelsControl.stopAllSymbols();
    }
    async onSpin() {
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.spinStarted.emit();
        await this.startReelSpinning();
    }
    async onForceMoveOn(reelStops) {
        await this.reelsControl.forceStop(reelStops);
    }
    async onStop(reelStops) {
        await this.stopReelSpinning(reelStops);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.spinComplete.emit();
    }
    async startReelSpinning(reelSpeed) {
        await this.reelsControl.spin(reelSpeed);
    }
    async stopReelSpinning(reelStops) {
        await this.reelsControl.stop(reelStops);
    }
    async onHideLines(_, resolve) {
        await this.linesControl.hideAllLines();
        resolve === null || resolve === void 0 ? void 0 : resolve();
    }
    async onShowLine(lineNumber, resolve) {
        await this.linesControl.showLine(lineNumber);
        resolve === null || resolve === void 0 ? void 0 : resolve();
    }
    async onShowLineWins(wins, resolve) {
        await Promise.all([
            this.reelsControl.showLineWins(wins),
            this.linesControl.showLines(wins),
        ]);
        await this.linesControl.hideLines(wins);
        resolve && resolve();
    }
    async onAllDimSymbols(status, resolve) {
        if (status.dim) {
            await this.reelsControl.dimAllSymbols(status.except);
        }
        else {
            await this.reelsControl.undimAllSymbols();
        }
        resolve && resolve();
    }
    async onDimSpecifiSymbols(symbols, resolve) {
        await this.reelsControl.dimSpecificSymbols(symbols);
        resolve && resolve();
    }
    async onUndimSpecifiSymbols(symbols, resolve) {
        await this.reelsControl.undimSpecificSymbols(symbols);
        resolve && resolve();
    }
    async onShowScatterWins(wins, resolve) {
        await this.reelsControl.showScatterWins(wins);
        resolve && resolve();
    }
    async onAddWinLable(winElem, resolve) {
        await this.reelsControl.setWinValue(winElem);
        resolve && resolve();
    }
    async onRemoveWinLable(symbol, resolve) {
        await this.reelsControl.removeWinValue(symbol);
        resolve && resolve();
    }
    showDebugInfo() {
        this.reelsControl.showDebugInfo();
    }
    hideDebugInfo() {
        this.reelsControl.hideDebugInfo();
    }
    async onReelStopStarted(reelIndex) {
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.stopStarted.emit(reelIndex);
    }
    onReelStopped(reelIndex) {
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.stopped.emit(reelIndex);
    }
    onAnticipationShown(reelIndex) {
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].game.signals.reels.anticipationShown.emit(reelIndex);
    }
    onSetAnticipateReels(reels) {
        this.reelsControl.setAnticipationReels(reels);
    }
    onClearSymbols() {
        this.reelsControl.clearSymbols();
    }
    updateReelOffset(reelOffset) {
        this.reelsControl.reels.forEach(reel => reel.updateReelOffset(reelOffset));
    }
}


/***/ }),

/***/ "./server/fruit/ServerCommunicator.ts":
/*!********************************************!*\
  !*** ./server/fruit/ServerCommunicator.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerCommunicatorBuilder": () => (/* binding */ ServerCommunicatorBuilder),
/* harmony export */   "default": () => (/* binding */ ServerCommunicator)
/* harmony export */ });
/* harmony import */ var app_server_service_ScgsRequestService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/server/service/ScgsRequestService */ "./server/service/ScgsRequestService.ts");
/* harmony import */ var app_server_service_LegacyRequestService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/server/service/LegacyRequestService */ "./server/service/LegacyRequestService.ts");
/* harmony import */ var app_common_factory_Factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/common/factory/Factory */ "./common/factory/Factory.ts");
/* harmony import */ var app_helpers_HrefParamReader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/helpers/HrefParamReader */ "./helpers/HrefParamReader.ts");
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");
/* harmony import */ var app_server_service_TokenProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/server/service/TokenProvider */ "./server/service/TokenProvider.ts");






const hrefParamReader = new app_helpers_HrefParamReader__WEBPACK_IMPORTED_MODULE_3__.HrefParamReader();
const serverUrl =  true && "http://pngexercise.sigma.software:3001/" !== void 0 ? "http://pngexercise.sigma.software:3001/" : hrefParamReader.get("server_url", origin);
class ServerCommunicatorBuilder {
    constructor() {
        this.requestServiceFactory = new app_common_factory_Factory__WEBPACK_IMPORTED_MODULE_2__.Factory()
            .add("scgs", new class {
            build() {
                const gameid = hrefParamReader.get("gameid");
                const operatorid = hrefParamReader.get("operatorid");
                const channel = hrefParamReader.get("channel", "desktop");
                const operatorPayload = hrefParamReader.get("operatorpayload", "operator-payload");
                const tokenProvider = hrefParamReader.has("token") ?
                    new app_server_service_TokenProvider__WEBPACK_IMPORTED_MODULE_5__.ScgsFromHrefTokenProvider() :
                    new app_server_service_TokenProvider__WEBPACK_IMPORTED_MODULE_5__.ScgsFromUserServiceTokenProvider("http://127.0.0.1:9970", hrefParamReader.get("userid"));
                return new app_server_service_ScgsRequestService__WEBPACK_IMPORTED_MODULE_0__["default"](serverUrl, gameid, operatorid, channel, operatorPayload, tokenProvider);
            }
        })
            .add("legacy", new class {
            build() {
                return new app_server_service_LegacyRequestService__WEBPACK_IMPORTED_MODULE_1__["default"](serverUrl);
            }
        });
    }
    build(payload) {
        return new ServerCommunicator(this.requestServiceFactory.build(payload));
    }
}
class ServerCommunicator {
    constructor(request) {
        this.userName = "Lo";
        this.request = request;
    }
    async login(userName) {
        const response = await this.request.login(userName);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.data.login.emit(response);
        this.userName = response.user.login;
        return response;
    }
    async spin(request) {
        const response = await this.request.spin({ ...request, login: this.userName });
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.data.spin.emit(response);
        return response;
    }
    async getAllUsers() {
        const response = await this.request.getAllUsers();
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.data.users.emit(response);
        return response;
    }
    async forceReelStop(reels) {
        const response = await this.request.forceReelStop({
            reel_stops: JSON.stringify(reels), login: this.userName,
        });
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.data.stopReel.emit(response);
        return response;
    }
    async buyCredits(bet) {
        const response = await this.request.buyCredits(bet);
        app_model_GameModel__WEBPACK_IMPORTED_MODULE_4__["default"].game.signals.data.buyAmount.emit(response);
        return response;
    }
}
ServerCommunicator.builder = new ServerCommunicatorBuilder();


/***/ }),

/***/ "./server/service/LegacyRequestService.ts":
/*!************************************************!*\
  !*** ./server/service/LegacyRequestService.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LegacyRequestService)
/* harmony export */ });
class LegacyRequestService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    async login(username) {
        const url = `${this.baseUrl}user/login/?login=${username}&gameKey=internship`;
         true && console.log(`fetch(${url})`);
        const result = await fetch(url);
        const response = JSON.parse(await result.text());
         true && console.log(response);
        return response;
    }
    async spin(request) {
        const url = `${this.baseUrl}game/spin/?${new URLSearchParams(request)}`;
         true && console.log(`fetch(${url})`);
        const result = await fetch(url);
        const response = JSON.parse(await result.text());
         true && console.log(response);
        return response;
    }
    async getAllUsers() {
        const url = `${this.baseUrl}user/all/`;
         true && console.log(`fetch(${url})`);
        const result = await fetch(url);
        const response = JSON.parse(await result.text());
         true && console.log(response);
        return response;
    }
    async forceReelStop(payload) {
        const url = `${this.baseUrl}game/spin/force/?${new URLSearchParams(payload)}&gameKey=internship`;
         true && console.log(`fetch(${url})`);
        const result = await fetch(url);
        const response = JSON.parse(await result.text());
         true && console.log(response);
        return response;
    }
    async buyCredits(bet) {
        const url = `${this.baseUrl}user/buy/?buy_amount=${bet}`;
         true && console.log(`fetch(${url})`);
        const result = await fetch(url);
        const response = JSON.parse(await result.text());
         true && console.log(response);
        return response;
    }
}


/***/ }),

/***/ "./server/service/ScgsRequestService.ts":
/*!**********************************************!*\
  !*** ./server/service/ScgsRequestService.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScgsRequestService)
/* harmony export */ });
/* harmony import */ var app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/model/injection/InjectDecorator */ "./model/injection/InjectDecorator.ts");
/* harmony import */ var app_model_BetModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/model/BetModel */ "./model/BetModel.ts");


class ScgsRequestService {
    constructor(baseUrl, gameid, operatorid, channel, operatorPayload, tokenProvider) {
        this.userId = "-1";
        this.gamesessionid = "illegal game session id";
        this.baseUrl = baseUrl;
        this.gameid = gameid;
        this.operatorid = operatorid;
        this.channel = channel;
        this.tokenProvider = tokenProvider;
        this.operatorPayload = operatorPayload;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async login(userName) {
        const token = (await this.tokenProvider.getToken()).token;
        const params = {
            gameid: this.gameid,
            operatorid: this.operatorid,
            channel: this.channel,
            token: token,
        };
        const response = await this.fetch("/game/init", params);
        const initResponse = {
            ...response.gamepayload,
            user: {
                userId: response.account.userid,
                login: userName,
                currency: response.account.currency,
                lang: "en",
                denominator: 1,
            },
            userStats: {
                ...response.gamepayload.userStats,
                balance: parseFloat(response.account.balance),
            },
        };
        this.userId = initResponse.user.userId;
        this.gamesessionid = response.gamesessionid;
         true && console.log(response);
         true && console.log(initResponse);
        return initResponse;
    }
    async spin(request) {
        const bet = (0,app_model_injection_InjectDecorator__WEBPACK_IMPORTED_MODULE_0__.$)(app_model_BetModel__WEBPACK_IMPORTED_MODULE_1__["default"]).getBet(parseInt(request.bet_id)).value;
        const params = {
            action: "spin",
            bet: bet,
            operatorpayload: this.operatorPayload,
            gamepayload: {
                bet: bet,
                lines: parseInt(request.lines_amount),
            },
            gameid: this.gameid,
            operatorid: this.operatorid,
            channel: this.channel,
            gamesessionid: this.gamesessionid,
        };
        const response = await this.fetch("/game/action", params);
        return {
            ...response.gamepayload,
            user: {
                login: request.login,
                userId: this.userId,
                lang: "en",
                denominator: 1,
                currency: "COIN",
            },
            userStats: {
                balance: parseInt(response.balance.final),
                betId: parseInt(request.bet_id),
                lineId: parseInt(request.lines_amount),
                reelStops: response.gamepayload.reelStops,
                freeGames: 1,
            },
        };
    }
    async getAllUsers() {
        throw new Error("[getAllUsers] not implemented");
    }
    async forceReelStop(payload) {
        throw new Error("[spin] not implemented for: " + JSON.stringify(payload));
    }
    async buyCredits(creditsAmount) {
        throw new Error("[buyCredits] not implemented for: " + JSON.stringify(creditsAmount));
    }
    async fetch(method, params) {
        const url = `${this.baseUrl}${method}`;
         true && console.log(`fetch(${url})`);
        const result = (await (await fetch(url, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "x-api-version": "1",
            },
            body: JSON.stringify(params),
        })).json());
         true && console.log(result);
        return result;
    }
}


/***/ }),

/***/ "./server/service/TokenProvider.ts":
/*!*****************************************!*\
  !*** ./server/service/TokenProvider.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScgsFromHrefTokenProvider": () => (/* binding */ ScgsFromHrefTokenProvider),
/* harmony export */   "ScgsFromUserServiceTokenProvider": () => (/* binding */ ScgsFromUserServiceTokenProvider)
/* harmony export */ });
/* harmony import */ var app_helpers_HrefParamReader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/helpers/HrefParamReader */ "./helpers/HrefParamReader.ts");

class ScgsFromHrefTokenProvider {
    getToken() {
        const token = new app_helpers_HrefParamReader__WEBPACK_IMPORTED_MODULE_0__.HrefParamReader(location.href).get("token");
        return Promise.resolve({ sessionId: "sessionId", token: token });
    }
}
class ScgsFromUserServiceTokenProvider {
    constructor(userServiceUrl, userId) {
        this.userId = userId;
        this.userServiceUrl = userServiceUrl;
    }
    async getToken() {
        const params = {
            userId: this.userId,
        };
        const url = `${this.userServiceUrl}/user/login`;
         true && console.log(`fetch(${url})`);
        const result = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-version": "1",
            },
            body: JSON.stringify(params),
        });
        const response = (await result.json());
         true && console.log(response);
        return response;
    }
}


/***/ }),

/***/ "./server/service/typing.ts":
/*!**********************************!*\
  !*** ./server/service/typing.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TSymbolId": () => (/* binding */ TSymbolId)
/* harmony export */ });
var TSymbolId;
(function (TSymbolId) {
    TSymbolId[TSymbolId["SCATTER"] = 1] = "SCATTER";
    TSymbolId[TSymbolId["BONUS"] = 2] = "BONUS";
    TSymbolId[TSymbolId["WILD"] = 3] = "WILD";
    TSymbolId[TSymbolId["LOW1"] = 4] = "LOW1";
    TSymbolId[TSymbolId["LOW2"] = 5] = "LOW2";
    TSymbolId[TSymbolId["LOW3"] = 6] = "LOW3";
    TSymbolId[TSymbolId["LOW4"] = 7] = "LOW4";
    TSymbolId[TSymbolId["LOW5"] = 8] = "LOW5";
    TSymbolId[TSymbolId["HIGH1"] = 9] = "HIGH1";
    TSymbolId[TSymbolId["HIGH2"] = 10] = "HIGH2";
    TSymbolId[TSymbolId["HIGH3"] = 11] = "HIGH3";
    TSymbolId[TSymbolId["HIGH4"] = 12] = "HIGH4";
    TSymbolId[TSymbolId["BLANK"] = 13] = "BLANK";
    TSymbolId[TSymbolId["WILD_BONUS1"] = 14] = "WILD_BONUS1";
    TSymbolId[TSymbolId["WILD_BONUS2"] = 15] = "WILD_BONUS2";
})(TSymbolId || (TSymbolId = {}));


/***/ }),

/***/ "./stateMachine/State.ts":
/*!*******************************!*\
  !*** ./stateMachine/State.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "State": () => (/* binding */ State)
/* harmony export */ });
class State {
    constructor() {
        this.active = false;
        this.composed = false;
    }
    init(stateMachine) {
        this.stateMachine = stateMachine;
    }
    enable() {
        return true;
    }
    isActive() {
        return this.active;
    }
    isComposed() {
        return this.composed;
    }
    async activate() {
        this.active = true;
    }
    async compose() {
        this.composed = true;
    }
    async deactivate() {
        this.active = false;
    }
    async dispose() {
        this.composed = false;
    }
    goto(state) {
        return this.stateMachine.goto(state);
    }
    replaceState(key, state) {
        return this.stateMachine.replace(key, state);
    }
    addState(key, state) {
        return this.stateMachine.add(key, state);
    }
}


/***/ }),

/***/ "./stateMachine/StateMachine.ts":
/*!**************************************!*\
  !*** ./stateMachine/StateMachine.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StateMachine)
/* harmony export */ });
class StateMachine {
    constructor(devLogs = false) {
        this.devLogs = devLogs;
        this.states = new Map();
    }
    async goto(key) {
        var _a, _b;
        const state = this.states.get(key);
        if (!state) {
            throw new Error(`state ${key} not existent`);
        }
        if (state == this.activeState) {
            return Promise.resolve(state);
        }
        if (!state.isActive()) {
            await state.activate();
        }
        if (!state.enable()) {
            await state.deactivate();
            return Promise.resolve((_a = this.activeState) !== null && _a !== void 0 ? _a : state);
        }
        if ((_b = this.activeState) === null || _b === void 0 ? void 0 : _b.isActive()) {
            await this.activeState.deactivate();
        }
        this.activeState = state;
        this.devLogs && console.log(`%cSM: %c${key}`, "color: red", "color: green");
        return await state.run();
    }
    async add(key, state) {
        if (!state.isComposed()) {
            await state.compose();
        }
        this.states.set(key, state);
        state.init(this);
    }
    async remove(key) {
        const oldState = this.states.get(key);
        if (oldState) {
            await oldState.dispose();
        }
        this.states.delete(key);
    }
    async replace(key, state) {
        await this.remove(key);
        await this.add(key, state);
    }
    dispose() {
        this.states.forEach(async (value) => {
            if (value.isActive()) {
                await value.deactivate();
            }
            await value.dispose();
        });
        this.states.clear();
    }
}


/***/ }),

/***/ "./typing/mutability/types.ts":
/*!************************************!*\
  !*** ./typing/mutability/types.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initTypes": () => (/* binding */ initTypes)
/* harmony export */ });
/* harmony import */ var app_helpers_promise_PromiseList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/helpers/promise/PromiseList */ "./helpers/promise/PromiseList.ts");
/* eslint-disable */

Object.defineProperty(Array.prototype, "promise", {
    value: function () {
        const promises = this.map((o) => {
            if (o instanceof Promise) {
                return o;
            }
            return Promise.resolve(o);
        });
        return new app_helpers_promise_PromiseList__WEBPACK_IMPORTED_MODULE_0__["default"](promises);
    },
});
Object.defineProperty(Array.prototype, "remove", {
    value: function (o) {
        while (this.contains(o)) {
            const indexOf = this.indexOf(o);
            this.splice(indexOf, 1);
        }
        return this;
    },
});
Object.defineProperty(Array.prototype, "amount", {
    value: function (value) {
        return this.filter((o) => o == value).length;
    },
});
Object.defineProperty(Array.prototype, "getRandomIndexOf", {
    value: function (value) {
        const indexes = [];
        for (let i = 0; i < this.length; i++) {
            if (this[i] === value) {
                indexes.push(i);
            }
        }
        return indexes.getRandomValue();
    },
});
Object.defineProperty(Array.prototype, "getRandomValue", {
    value: function (defaultValue) {
        if (this.length == 0) {
            if (defaultValue) {
                return defaultValue;
            }
            throw new Error("Can't get random value from empty list");
        }
        const index = Math.floor(Math.random() * Math.floor(this.length));
        return this[index];
    },
});
Object.defineProperty(Array.prototype, "isLastElement", {
    value: function (o) {
        return this.indexOf(o) == this.length - 1;
    },
});
Object.defineProperty(Array.prototype, "contains", {
    value: function (o) {
        return this.indexOf(o) >= 0;
    },
});
function initTypes() {
    console.info("types initialized");
}


/***/ }),

/***/ "./utils/DevToolUtils.ts":
/*!*******************************!*\
  !*** ./utils/DevToolUtils.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DevToolUtils)
/* harmony export */ });
class DevToolUtils {
    static setupObj(obj, folderName, rootFolder, ignore, onAnyUpdate) {
        const ignoreList = ignore !== null && ignore !== void 0 ? ignore : [];
        const folder = folderName ? rootFolder.addFolder(folderName) : rootFolder;
        Object.getOwnPropertyNames(obj)
            .filter(methodName => ignoreList.indexOf(methodName) == -1)
            .filter(methodName => methodName[0] != "_")
            .forEach(methodName => {
            if (!obj[`_${methodName}Items`] && typeof obj[methodName] == "object") {
                this.setupObj(obj[methodName], methodName, folder, ignore, onAnyUpdate);
                return;
            }
            const min = obj[`_${methodName}Min`];
            const max = obj[`_${methodName}Max`];
            const step = obj[`_${methodName}Step`];
            const items = obj[`_${methodName}Items`];
            const status = obj[`_${methodName}Status`];
            const update = obj[`_${methodName}Update`];
            let controller;
            if (min != undefined && max != undefined && step != undefined) {
                controller = folder.add(obj, methodName, min, max, step);
            }
            else if (items) {
                controller = folder.add(obj, methodName, items);
            }
            else if (status != undefined) {
                controller = folder.add(obj, methodName, status);
            }
            else {
                controller = folder.add(obj, methodName);
            }
            if (update) {
                controller.onChange(update);
            }
            if (onAnyUpdate) {
                controller.onChange(onAnyUpdate);
            }
        });
        return folder;
    }
}


/***/ }),

/***/ "./view/IntroShadow.ts":
/*!*****************************!*\
  !*** ./view/IntroShadow.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IntroShadow)
/* harmony export */ });
/* harmony import */ var app_view_SpriteContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/view/SpriteContainer */ "./view/SpriteContainer.ts");
/* harmony import */ var _pixi_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pixi/display */ "../node_modules/@pixi/display/lib/index.mjs");


class IntroShadow extends _pixi_display__WEBPACK_IMPORTED_MODULE_1__.Container {
    constructor() {
        super();
        this.leftShadow = new app_view_SpriteContainer__WEBPACK_IMPORTED_MODULE_0__["default"]("bg_shadow.png");
        this.rightShadow = new app_view_SpriteContainer__WEBPACK_IMPORTED_MODULE_0__["default"]("bg_shadow.png");
        this.topShadow = new app_view_SpriteContainer__WEBPACK_IMPORTED_MODULE_0__["default"]("bg_shadow.png");
        this.bottomShadow = new app_view_SpriteContainer__WEBPACK_IMPORTED_MODULE_0__["default"]("bg_shadow.png");
        this.container1 = new _pixi_display__WEBPACK_IMPORTED_MODULE_1__.Container();
        this.container2 = new _pixi_display__WEBPACK_IMPORTED_MODULE_1__.Container();
        this.leftShadow.anchor.x = 1;
        this.leftShadow.scale.x = -1;
        this.bottomShadow.angle = 90;
        this.bottomShadow.anchor.y = 1;
        this.topShadow.anchor.set(1);
        this.topShadow.angle = 90;
        this.topShadow.scale.x = -1;
        this.container1.name = "rightShadow";
        this.container2.name = "leftShadow";
        this.addChild(this.container1, this.container2);
    }
    resize(gameSize) {
        this.container1.removeChildren();
        this.container2.removeChildren();
        if (gameSize.isPortrait) {
            this.container1.addChild(this.bottomShadow);
            this.container2.addChild(this.topShadow);
        }
        else {
            this.container1.addChild(this.rightShadow);
            this.container2.addChild(this.leftShadow);
        }
    }
}


/***/ }),

/***/ "./view/SpriteContainer.ts":
/*!*********************************!*\
  !*** ./view/SpriteContainer.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SpriteContainer)
/* harmony export */ });
/* harmony import */ var _pixi_sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pixi/sprite */ "../node_modules/@pixi/sprite/lib/index.mjs");
/* harmony import */ var app_pixi_StrictResourcesHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pixi/StrictResourcesHelper */ "./pixi/StrictResourcesHelper.ts");


class SpriteContainer extends _pixi_sprite__WEBPACK_IMPORTED_MODULE_0__.Sprite {
    constructor(spriteSheetId, textureId) {
        const texture = textureId ?
            app_pixi_StrictResourcesHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getTexture(spriteSheetId, textureId) :
            app_pixi_StrictResourcesHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSomeTexture(spriteSheetId);
        super(texture);
    }
}


/***/ }),

/***/ "./view/lines/LineDrawer.ts":
/*!**********************************!*\
  !*** ./view/lines/LineDrawer.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LineDrawer)
/* harmony export */ });
/* harmony import */ var _pixi_graphics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pixi/graphics */ "../node_modules/@pixi/graphics/lib/index.mjs");
/* harmony import */ var app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/model/GameModel */ "./model/GameModel.ts");


class LineDrawer {
    static draw(data) {
        const { linePath, color, fillColor } = data;
        const width = 4;
        const mainGameInfo = app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].mainGameInfo;
        const symbol = mainGameInfo.symbol;
        const graphics = new _pixi_graphics__WEBPACK_IMPORTED_MODULE_0__.Graphics();
        const lineYOffset = linePath[0];
        graphics.lineStyle(width * 2.5 + 5, 0x000);
        this.drawLine(graphics, symbol, linePath, lineYOffset, 0);
        graphics.lineStyle(width * 2.5, color);
        this.drawLine(graphics, symbol, linePath, lineYOffset, 0);
        graphics.lineStyle(width, fillColor);
        this.drawLine(graphics, symbol, linePath, lineYOffset, -2);
        return graphics;
    }
    static drawLine(graphics, symbol, linePath, lineYOffset, lineYOffset2) {
        const mainGameInfo = app_model_GameModel__WEBPACK_IMPORTED_MODULE_1__["default"].mainGameInfo;
        const reels = mainGameInfo.reels;
        const symbolWidth = symbol.width;
        const reelFrameGap = reels.reelFrameGap;
        const reelGap = reels.reelGap;
        const someGapToReelFrame = 5;
        graphics.moveTo(reelFrameGap, lineYOffset2);
        graphics.lineTo(symbolWidth * .5 + reelFrameGap, lineYOffset2);
        linePath.forEach((yOffset, x) => {
            graphics.lineTo(x * (symbolWidth + reelGap) + symbolWidth * .5 + reelFrameGap * 2, (yOffset - lineYOffset) * symbol.height + lineYOffset2);
        });
        graphics.lineTo(linePath.length * (symbolWidth + reelGap) + someGapToReelFrame + reelFrameGap, (linePath[linePath.length - 1] - lineYOffset) * symbol.height + lineYOffset2);
    }
}


/***/ }),

/***/ "../resources/assets/fonts/RobotoB.ttf":
/*!*********************************************!*\
  !*** ../resources/assets/fonts/RobotoB.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d0ee443bc997ecca886f.ttf";

/***/ }),

/***/ "?d91c":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "../resources/assets/configs/gameConfig.json":
/*!***************************************************!*\
  !*** ../resources/assets/configs/gameConfig.json ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"defaultSpeedFactor":1,"forceSpeedFactor":2,"win":{"duration":{"low":0.5,"medium":0.75,"big":1,"super":1.25,"epic":2.5}},"reels":{"speed":60,"spinDelay":0.1,"stopDelay":0.3,"minSpinDuration":1,"anticipationDelay":1.15},"reel":{"spinDuration":0.7,"stopDuration":0.4,"firstStopDelay":0.3,"secondStopDelay":0.2},"animations":{"reelsShaking":{"duration":{"down":0.1,"up":0.05},"yOffset":20},"logoShaking":{"duration":{"down":0.1,"up":0.05},"yOffset":5},"backShaking":{"duration":{"down":0.2,"up":0.1},"yOffset":2.5}},"popup":{"generalTimeout":0.5}}');

/***/ }),

/***/ "../resources/assets/configs/infoMessageBarConfig.json":
/*!*************************************************************!*\
  !*** ../resources/assets/configs/infoMessageBarConfig.json ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"gameInfo":["3 OR MORE SCATTER SYMBOLS ACTIVATE FREE SPIN FEATURE","WILD SYMBOL SUBSTITUTES ALL SYMBOLS EXCEPT SCATTER","FEEL THE ATMOSPHERE OF A MYSTICAL FOREST","GOOD LUCK!","PRESS THE SPIN BUTTON WHEN YOU ARE READY"],"updateFrequency":5}');

/***/ }),

/***/ "../resources/assets/configs/localization/en.json":
/*!********************************************************!*\
  !*** ../resources/assets/configs/localization/en.json ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"p1_title_head":"FREE SPINS","p1_scatters_in_freespins":"Land SCATTERS to trigger:","p2_title_head":"BONUS SYMBOL","p2_scatter_description":"Get extra cash for Bonus symbol!","p3_title_head":"WILDS","p3_wild_description":"Substitute all symbols except SCATTERS","p4_title_head":"PAYTABLE","p5_title_head":"PAYTABLE","p6_title_head":"LINES","p7_title_head":"LINES","autoplay_ctrl_title":"AUTO PLAYS","bet_ctrl_title":"SELECT YOUR BET","scatter_description":"3 or more Scatter symbols\\ntrigger Free Spins","bonus_description":"Get extra cash for Bonus symbol!"}');

/***/ }),

/***/ "../resources/assets/hooks/hooks.json":
/*!********************************************!*\
  !*** ../resources/assets/hooks/hooks.json ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"free spins":[[41,17,4,92,5],[35,84,4,63,5],[4,83,2,79,94],[1,38,2,51,85],[2,93,102,90,104]],"wilds":[[6,58,96,93,22],[22,39,19,28,23]],"bonuses":[[63,73,63,83,66],[102,3,102,83,65],[60,75,61,67,64]],"big win":[[77,94,56,75,57],[32,61,28,74,10],[19,41,18,59,5],[6,58,79,46,98],[12,17,91,26,67]],"epic win":[[98,21,98,35,79],[54,50,33,50,24],[74,94,43,79,24],[58,70,40,57,23],[72,45,46,41,24]],"scatters":[[2,78,73,55,73],[39,69,11,54,7],[24,49,1,32,1],[37,53,16,37,21],[7,46,86,65,105]],"super win":[[50,82,36,93,18],[20,41,80,85,24],[12,28,90,79,26],[0,57,75,13,23],[55,69,89,75,22]],"medium win":[[83,92,76,84,78],[33,8,32,1,19],[7,46,86,65,105],[21,30,94,42,7],[29,3,105,40,18]],"HIGH1":[[77,94,56,75,57],[12,28,90,79,26],[94,57,76,44,17],[77,4,56,26,79],[76,25,75,40,86]],"HIGH2":[[48,6,21,5,3],[47,4,40,37,18],[46,98,21,93,70],[26,57,26,54,9],[22,11,55,21,24]],"HIGH3":[[54,50,33,50,24],[53,80,33,56,56],[99,62,57,88,34],[58,62,97,52,94],[98,49,17,59,35]],"HIGH4":[[60,16,58,72,21],[21,70,69,70,80],[54,72,58,54,89],[59,98,71,67,39],[58,15,54,12,34]],"line0":[[48,58,48,7,11],[99,15,35,85,31],[99,27,51,40,31],[99,20,71,7,97],[31,15,48,7,78]],"line1":[[90,12,32,5,90],[11,24,69,62,79],[72,39,90,19,14],[90,28,36,8,98],[69,71,11,54,23]],"line10":[[21,89,65,29,23],[10,28,31,77,12],[91,82,80,94,82],[94,79,31,22,23],[55,4,97,55,24]],"line11":[[64,23,31,61,10],[101,30,23,93,18],[100,70,46,18,12],[64,95,46,27,71],[101,30,79,10,69]],"line12":[[99,14,0,54,103],[35,62,7,23,90],[7,14,40,54,80],[99,97,40,26,37],[71,17,66,93,2]],"line13":[[54,50,33,50,24],[52,4,32,77,14],[26,2,22,12,17],[22,63,96,12,69],[72,31,105,94,81]],"line14":[[46,98,21,93,70],[73,64,12,38,86],[50,4,13,85,34],[93,34,85,89,56],[78,78,17,26,98]],"line15":[[48,31,32,77,31],[76,6,51,93,39],[33,58,11,93,83],[73,51,74,32,44],[94,31,69,22,57]],"line16":[[17,94,73,67,24],[71,67,9,78,76],[10,95,9,62,57],[51,95,66,85,70],[72,1,71,87,79]],"line17":[[52,39,85,64,32],[90,39,13,23,10],[69,24,81,40,12],[6,30,35,94,51],[97,24,70,62,96]],"line18":[[67,9,69,17,30],[81,43,83,61,10],[47,3,52,93,49],[64,91,96,66,16],[88,69,11,26,68]],"line19":[[90,92,9,77,98],[11,72,85,24,24],[92,3,86,13,22],[100,9,41,93,98],[66,91,27,11,15]],"line2":[[46,21,74,92,18],[69,98,24,92,95],[21,55,86,92,12],[6,70,100,94,81],[70,35,13,63,83]],"line20":[[34,5,52,95,22],[55,1,86,94,59],[87,15,23,26,24],[87,91,90,87,22],[93,45,12,94,34]],"line3":[[64,36,50,40,36],[36,58,66,78,103],[32,23,70,63,84],[36,44,81,63,98],[11,44,70,98,77]],"line4":[[34,23,52,89,68],[81,58,105,33,22],[17,92,66,10,67],[66,23,52,7,30],[78,0,96,84,15]],"line5":[[89,69,98,17,57],[89,47,47,76,23],[94,9,50,92,99],[73,41,55,31,44],[46,30,95,77,78]],"line6":[[48,16,49,28,69],[75,90,58,56,22],[48,94,36,95,83],[94,37,90,86,31],[99,35,11,86,70]],"line7":[[11,41,46,92,80],[75,97,90,37,86],[92,71,46,93,11],[77,98,8,99,15],[36,77,35,76,60]],"line8":[[93,94,82,5,103],[88,66,99,23,98],[50,9,48,62,12],[24,19,89,48,24],[98,19,94,65,70]],"line9":[[27,83,9,94,32],[68,66,46,41,97],[89,26,71,86,69],[31,3,87,62,12],[71,57,87,95,12]],"LOW1":[[22,79,7,16,26],[76,0,66,54,78],[64,85,35,98,22],[105,78,76,67,71],[99,92,76,89,74]],"LOW2":[[31,72,95,44,24],[68,31,56,65,33],[73,45,86,40,21],[55,33,33,93,59],[69,50,34,30,75]],"LOW3":[[83,92,76,84,78],[6,58,79,46,98],[35,89,9,11,97],[59,81,10,25,60],[74,58,59,19,100]],"LOW4":[[33,8,32,1,19],[13,49,10,17,45],[26,9,58,19,91],[10,52,33,84,70],[59,2,59,86,102]],"LOW5":[[67,39,31,19,35],[31,96,100,80,101],[71,44,70,37,56],[93,45,97,53,73],[95,69,89,77,94]],"no win":[[34,28,99,8,102],[98,90,59,72,62],[2,78,73,55,73],[67,39,31,19,35],[31,96,100,80,101]]}');

/***/ }),

/***/ "../resources/assets/sounds/SOUND_FILE.soundmap.json":
/*!***********************************************************!*\
  !*** ../resources/assets/sounds/SOUND_FILE.soundmap.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"src":["./assets/sounds/SOUND_FILE.mp3","./assets/sounds/SOUND_FILE.ogg"],"sprite":{"fail":[0,2150.0226757369614],"success":[3500,4437.482993197279],"btn_click":[9000,221.47392290249357],"relax_loop":[10500,8273.764172335603,true],"grass_step":[20000,835.9183673469381],"regular_step":[21500,604.1496598639462],"water_step":[23000,770.6349206349223],"anticipation":[24500,6360.634920634922],"custom-button":[32000,100.00000000000142],"spin-button":[33500,176.80272108843553],"coin":[35000,1750.2040816326528],"reel-spin":[37500,2869.7959183673447,true],"fs-game-loop":[41000,18725.963718820865,true],"fs-trasition1":[60500,8000,true],"fs-trasition2":[69000,12000,true],"main-game-loop":[81500,10663.4693877551,true],"yeah":[93000,1490.2040816326548],"wow":[95500,2302.018140589567],"wheel_win":[99000,3300.0226757369546],"short_swing":[103500,510.8390022675735],"swing":[105000,911.4512471655303]}}');

/***/ }),

/***/ "../resources/assets/sounds/sound_list.json":
/*!**************************************************!*\
  !*** ../resources/assets/sounds/sound_list.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"fail.mp3":"","success.mp3":"","btn_click.wav":"","relax_loop.wav":"loop","grass_step.wav":"","regular_step.wav":"","water_step.wav":"","anticipation.wav":"","custom-button.mp3":"","spin-button.mp3":"","coin.mp3":"","reel-spin.mp3":"loop","fs-game-loop.wav":"loop","fs-trasition1.aiff":"loop","fs-trasition2.wav":"loop","main-game-loop.wav":"loop","yeah.wav":"","wow.wav":"","wheel_win.mp3":"","short_swing.wav":"","swing.wav":""}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + {"dev_DevController_ts":"df207d10beefbbae35c4","preloadSpineData":"365f2e731653df3b4142","allSpineData":"b6183d20d147330e5fa5"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "game-client:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			};
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"dev": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgame_client"] = self["webpackChunkgame_client"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./DevMain.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=dev.c152d68c80c6496ded28.js.map