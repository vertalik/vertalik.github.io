/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./assets/js/index.js","vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/PickHelper.js":
/*!*********************************!*\
  !*** ./assets/js/PickHelper.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PickHelper; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"../node_modules/three/build/three.module.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar PickHelper = /*#__PURE__*/function () {\n  function PickHelper() {\n    _classCallCheck(this, PickHelper);\n\n    this.raycaster = new three__WEBPACK_IMPORTED_MODULE_0__[\"Raycaster\"]();\n    this.pickedObject = null;\n    this.pickedObjectSavedColor = 0;\n  }\n\n  _createClass(PickHelper, [{\n    key: \"pick\",\n    value: function pick(normalizedPosition, modelsArr, camera) {\n      if (this.pickedObject) {\n        this.pickedObject.material.emissive.setHex(this.pickedObjectSavedColor);\n        this.pickedObject = undefined;\n      }\n\n      this.raycaster.setFromCamera(normalizedPosition, camera);\n      var intersectedObjects = this.raycaster.intersectObjects(modelsArr);\n\n      if (intersectedObjects.length) {\n        this.pickedObject = intersectedObjects[0].object;\n\n        if (this.pickedObject) {\n          this.pickedObjectSavedColor = this.pickedObject.material.emissive.getHex();\n          this.pickedObject.material.emissive.setHex(0xff0000);\n        }\n      }\n    }\n  }]);\n\n  return PickHelper;\n}();\n\n\n\n//# sourceURL=webpack:///./assets/js/PickHelper.js?");

/***/ }),

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three_build_three_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/build/three.module */ \"../node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_loaders_FBXLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/FBXLoader */ \"../node_modules/three/examples/jsm/loaders/FBXLoader.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"../node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _PickHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PickHelper */ \"./assets/js/PickHelper.js\");\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style/style.css */ \"./assets/style/style.css\");\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_style_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _model_house_fbx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/house.fbx */ \"./assets/model/house.fbx\");\n/* harmony import */ var _model_textures_Farm_house_D_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/textures/Farm_house_D.jpg */ \"./assets/model/textures/Farm_house_D.jpg\");\n/* harmony import */ var _model_textures_House_Side_D_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/textures/House_Side_D.jpg */ \"./assets/model/textures/House_Side_D.jpg\");\n/* harmony import */ var _model_textures_Roof_D_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/textures/Roof_D.jpg */ \"./assets/model/textures/Roof_D.jpg\");\n/* harmony import */ var _model_textures_grasslight_big_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../model/textures/grasslight-big.jpg */ \"./assets/model/textures/grasslight-big.jpg\");\n\n\n\n\n\n\n\n\n\n\n\nfunction init() {\n  //CANVAS\n  var canvas = document.querySelector('#c');\n  var renderer = new three_build_three_module__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]({\n    canvas: canvas\n  });\n  renderer.setPixelRatio(window.devicePixelRatio);\n  renderer.setSize(window.innerWidth, window.innerHeight); //CANVAS\n  //CAMERA\n\n  var fov = 45;\n  var aspect = 2;\n  var near = 0.1;\n  var far = 100;\n  var camera = new three_build_three_module__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"](fov, aspect, near, far);\n  camera.position.set(-20, 10, 10); //CAMERA\n  //CONTROLS\n\n  var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__[\"OrbitControls\"](camera, canvas);\n  controls.maxPolarAngle = Math.PI * 0.4;\n  controls.minDistance = 10;\n  controls.maxDistance = 60; //CONTROLS\n\n  var scene = new three_build_three_module__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n  scene.background = new three_build_three_module__WEBPACK_IMPORTED_MODULE_0__[\"Color\"]('black'); //GROUND\n\n  {\n    var planeSize = 20;\n\n    var _loader = new three_build_three_module__WEBPACK_IMPORTED_MODULE_0__[\"TextureLoader\"]();\n\n    var texture = _loader.load('grasslight-big.jpg');\n\n    texture.wrapS = three_build_three_module__WEBPACK_IMPORTED_MODULE_0__[\"RepeatWrapping\"];\n    texture.wrapT = three_build_three_module__WEBPACK_IMPORTED_MODULE_0__[\"RepeatWrapping\"];\n    texture.magFilter = three_build_three_module__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"];\n    var repeats = planeSize / 2;\n    texture.repeat.set(repeats, repeats);\n    var planeGeo = new three_build_three_module__WEBPACK_IMPORTED_MODULE_0__[\"PlaneBufferGeometry\"](planeSize, planeSize);\n    var planeMat = new three_build_three_module__WEBPACK_IMPORTED_MODULE_0__[\"MeshPhongMaterial\"]({\n      map: texture,\n      side: three_build_three_module__WEBPACK_IMPORTED_MODULE_0__[\"DoubleSide\"]\n    });\n    var mesh = new three_build_three_module__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](planeGeo, planeMat);\n    mesh.rotation.x = Math.PI * -0.5;\n    scene.add(mesh);\n  } //GROUND\n  //LIGHT\n\n  {\n    var color = 0xffffff;\n    var intensity = 1;\n    var light = new three_build_three_module__WEBPACK_IMPORTED_MODULE_0__[\"AmbientLight\"](color, intensity);\n    scene.add(light);\n  } //LIGHT\n  //GEOMETRY MODELS\n\n  var modelsArr = [];\n  {\n    var boxWidth = 0.2;\n    var boxHeight = 2.2;\n    var boxDepth = 1.2;\n    var geometry = new three_build_three_module__WEBPACK_IMPORTED_MODULE_0__[\"BoxGeometry\"](boxWidth, boxHeight, boxDepth);\n    var material = new three_build_three_module__WEBPACK_IMPORTED_MODULE_0__[\"MeshPhongMaterial\"]({\n      color: 0x44aa88,\n      opacity: 0.5,\n      transparent: true\n    });\n    var cube = new three_build_three_module__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](geometry, material);\n    modelsArr.push(cube);\n    cube.position.set(-3.3, 2.2, 1.5);\n    scene.add(cube);\n  }\n  {\n    var _boxWidth = 1.4;\n    var _boxHeight = 1.5;\n    var _boxDepth = 0.2;\n\n    var _geometry = new three_build_three_module__WEBPACK_IMPORTED_MODULE_0__[\"BoxGeometry\"](_boxWidth, _boxHeight, _boxDepth);\n\n    var _material = new three_build_three_module__WEBPACK_IMPORTED_MODULE_0__[\"MeshPhongMaterial\"]({\n      color: 0x0000ff,\n      opacity: 0.5,\n      transparent: true\n    });\n\n    var _cube = new three_build_three_module__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](_geometry, _material);\n\n    modelsArr.push(_cube);\n\n    _cube.position.set(0.1, 2.5, -3.1);\n\n    scene.add(_cube);\n  } //GEOMETRY MODELS\n  //LOADER FBX\n\n  var loader = new three_examples_jsm_loaders_FBXLoader__WEBPACK_IMPORTED_MODULE_1__[\"FBXLoader\"](); //HOUSE MODEL\n\n  {\n    loader.load('house.fbx', function (model) {\n      model.scale.x = model.scale.y = model.scale.z = 0.1;\n      model.position.set(0, 5, 0);\n      scene.add(model);\n    });\n  } //LOADER FBX\n  //PICK ELEMENTS\n\n  var pickPosition = {\n    x: 0,\n    y: 0\n  };\n  var pickHelper = new _PickHelper__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n  clearPickPosition();\n\n  function clearPickPosition() {\n    pickPosition.x = -100000;\n    pickPosition.y = -100000;\n  }\n\n  function getCanvasRelativePosition(event) {\n    var rect = canvas.getBoundingClientRect();\n    return {\n      x: (event.clientX - rect.left) * canvas.width / rect.width,\n      y: (event.clientY - rect.top) * canvas.height / rect.height\n    };\n  }\n\n  function setPickPosition(event) {\n    var pos = getCanvasRelativePosition(event);\n    pickPosition.x = pos.x / canvas.width * 2 - 1;\n    pickPosition.y = pos.y / canvas.height * -2 + 1;\n  }\n\n  function animate() {\n    requestAnimationFrame(animate);\n    controls.update();\n    render();\n  }\n\n  function render() {\n    pickHelper.pick(pickPosition, modelsArr, camera);\n    renderer.render(scene, camera);\n  }\n\n  window.addEventListener('mousemove', setPickPosition, false);\n  animate();\n}\n\ninit();\n\n//# sourceURL=webpack:///./assets/js/index.js?");

/***/ }),

/***/ "./assets/model/house.fbx":
/*!********************************!*\
  !*** ./assets/model/house.fbx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"house.fbx\");\n\n//# sourceURL=webpack:///./assets/model/house.fbx?");

/***/ }),

/***/ "./assets/model/textures/Farm_house_D.jpg":
/*!************************************************!*\
  !*** ./assets/model/textures/Farm_house_D.jpg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"Farm_house_D.jpg\");\n\n//# sourceURL=webpack:///./assets/model/textures/Farm_house_D.jpg?");

/***/ }),

/***/ "./assets/model/textures/House_Side_D.jpg":
/*!************************************************!*\
  !*** ./assets/model/textures/House_Side_D.jpg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"House_Side_D.jpg\");\n\n//# sourceURL=webpack:///./assets/model/textures/House_Side_D.jpg?");

/***/ }),

/***/ "./assets/model/textures/Roof_D.jpg":
/*!******************************************!*\
  !*** ./assets/model/textures/Roof_D.jpg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"Roof_D.jpg\");\n\n//# sourceURL=webpack:///./assets/model/textures/Roof_D.jpg?");

/***/ }),

/***/ "./assets/model/textures/grasslight-big.jpg":
/*!**************************************************!*\
  !*** ./assets/model/textures/grasslight-big.jpg ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"grasslight-big.jpg\");\n\n//# sourceURL=webpack:///./assets/model/textures/grasslight-big.jpg?");

/***/ }),

/***/ "./assets/style/style.css":
/*!********************************!*\
  !*** ./assets/style/style.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./assets/style/style.css?");

/***/ })

/******/ });