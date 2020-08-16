/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/js/src/collapse.js":
/*!***************************************************!*\
  !*** ./node_modules/bootstrap/js/src/collapse.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/bootstrap/js/src/util.js");
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.5.2): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'collapse';
const VERSION = '4.5.2';
const DATA_KEY = 'bs.collapse';
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = '.data-api';
const JQUERY_NO_CONFLICT = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME];
const Default = {
  toggle: true,
  parent: ''
};
const DefaultType = {
  toggle: 'boolean',
  parent: '(string|element)'
};
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
const CLASS_NAME_SHOW = 'show';
const CLASS_NAME_COLLAPSE = 'collapse';
const CLASS_NAME_COLLAPSING = 'collapsing';
const CLASS_NAME_COLLAPSED = 'collapsed';
const DIMENSION_WIDTH = 'width';
const DIMENSION_HEIGHT = 'height';
const SELECTOR_ACTIVES = '.show, .collapsing';
const SELECTOR_DATA_TOGGLE = '[data-toggle="collapse"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Collapse {
  constructor(element, config) {
    this._isTransitioning = false;
    this._element = element;
    this._config = this._getConfig(config);
    this._triggerArray = [].slice.call(document.querySelectorAll(`[data-toggle="collapse"][href="#${element.id}"],` + `[data-toggle="collapse"][data-target="#${element.id}"]`));
    const toggleList = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE));

    for (let i = 0, len = toggleList.length; i < len; i++) {
      const elem = toggleList[i];
      const selector = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getSelectorFromElement(elem);
      const filterElement = [].slice.call(document.querySelectorAll(selector)).filter(foundElem => foundElem === element);

      if (selector !== null && filterElement.length > 0) {
        this._selector = selector;

        this._triggerArray.push(elem);
      }
    }

    this._parent = this._config.parent ? this._getParent() : null;

    if (!this._config.parent) {
      this._addAriaAndCollapsedClass(this._element, this._triggerArray);
    }

    if (this._config.toggle) {
      this.toggle();
    }
  } // Getters


  static get VERSION() {
    return VERSION;
  }

  static get Default() {
    return Default;
  } // Public


  toggle() {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(CLASS_NAME_SHOW)) {
      this.hide();
    } else {
      this.show();
    }
  }

  show() {
    if (this._isTransitioning || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(CLASS_NAME_SHOW)) {
      return;
    }

    let actives;
    let activesData;

    if (this._parent) {
      actives = [].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter(elem => {
        if (typeof this._config.parent === 'string') {
          return elem.getAttribute('data-parent') === this._config.parent;
        }

        return elem.classList.contains(CLASS_NAME_COLLAPSE);
      });

      if (actives.length === 0) {
        actives = null;
      }
    }

    if (actives) {
      activesData = jquery__WEBPACK_IMPORTED_MODULE_0___default()(actives).not(this._selector).data(DATA_KEY);

      if (activesData && activesData._isTransitioning) {
        return;
      }
    }

    const startEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(EVENT_SHOW);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).trigger(startEvent);

    if (startEvent.isDefaultPrevented()) {
      return;
    }

    if (actives) {
      Collapse._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(actives).not(this._selector), 'hide');

      if (!activesData) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(actives).data(DATA_KEY, null);
      }
    }

    const dimension = this._getDimension();

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).removeClass(CLASS_NAME_COLLAPSE).addClass(CLASS_NAME_COLLAPSING);
    this._element.style[dimension] = 0;

    if (this._triggerArray.length) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._triggerArray).removeClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', true);
    }

    this.setTransitioning(true);

    const complete = () => {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).removeClass(CLASS_NAME_COLLAPSING).addClass(`${CLASS_NAME_COLLAPSE} ${CLASS_NAME_SHOW}`);
      this._element.style[dimension] = '';
      this.setTransitioning(false);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).trigger(EVENT_SHOWN);
    };

    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
    const scrollSize = `scroll${capitalizedDimension}`;
    const transitionDuration = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getTransitionDurationFromElement(this._element);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).one(_util__WEBPACK_IMPORTED_MODULE_1__["default"].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    this._element.style[dimension] = `${this._element[scrollSize]}px`;
  }

  hide() {
    if (this._isTransitioning || !jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(CLASS_NAME_SHOW)) {
      return;
    }

    const startEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(EVENT_HIDE);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).trigger(startEvent);

    if (startEvent.isDefaultPrevented()) {
      return;
    }

    const dimension = this._getDimension();

    this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
    _util__WEBPACK_IMPORTED_MODULE_1__["default"].reflow(this._element);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).addClass(CLASS_NAME_COLLAPSING).removeClass(`${CLASS_NAME_COLLAPSE} ${CLASS_NAME_SHOW}`);
    const triggerArrayLength = this._triggerArray.length;

    if (triggerArrayLength > 0) {
      for (let i = 0; i < triggerArrayLength; i++) {
        const trigger = this._triggerArray[i];
        const selector = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getSelectorFromElement(trigger);

        if (selector !== null) {
          const $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()([].slice.call(document.querySelectorAll(selector)));

          if (!$elem.hasClass(CLASS_NAME_SHOW)) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(trigger).addClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', false);
          }
        }
      }
    }

    this.setTransitioning(true);

    const complete = () => {
      this.setTransitioning(false);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE).trigger(EVENT_HIDDEN);
    };

    this._element.style[dimension] = '';
    const transitionDuration = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getTransitionDurationFromElement(this._element);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).one(_util__WEBPACK_IMPORTED_MODULE_1__["default"].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
  }

  setTransitioning(isTransitioning) {
    this._isTransitioning = isTransitioning;
  }

  dispose() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.removeData(this._element, DATA_KEY);
    this._config = null;
    this._parent = null;
    this._element = null;
    this._triggerArray = null;
    this._isTransitioning = null;
  } // Private


  _getConfig(config) {
    config = { ...Default,
      ...config
    };
    config.toggle = Boolean(config.toggle); // Coerce string values

    _util__WEBPACK_IMPORTED_MODULE_1__["default"].typeCheckConfig(NAME, config, DefaultType);
    return config;
  }

  _getDimension() {
    const hasWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(DIMENSION_WIDTH);
    return hasWidth ? DIMENSION_WIDTH : DIMENSION_HEIGHT;
  }

  _getParent() {
    let parent;

    if (_util__WEBPACK_IMPORTED_MODULE_1__["default"].isElement(this._config.parent)) {
      parent = this._config.parent; // It's a jQuery object

      if (typeof this._config.parent.jquery !== 'undefined') {
        parent = this._config.parent[0];
      }
    } else {
      parent = document.querySelector(this._config.parent);
    }

    const selector = `[data-toggle="collapse"][data-parent="${this._config.parent}"]`;
    const children = [].slice.call(parent.querySelectorAll(selector));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(children).each((i, element) => {
      this._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
    });
    return parent;
  }

  _addAriaAndCollapsedClass(element, triggerArray) {
    const isOpen = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).hasClass(CLASS_NAME_SHOW);

    if (triggerArray.length) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(triggerArray).toggleClass(CLASS_NAME_COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
    }
  } // Static


  static _getTargetFromElement(element) {
    const selector = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getSelectorFromElement(element);
    return selector ? document.querySelector(selector) : null;
  }

  static _jQueryInterface(config) {
    return this.each(function () {
      const $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      let data = $this.data(DATA_KEY);
      const _config = { ...Default,
        ...$this.data(),
        ...(typeof config === 'object' && config ? config : {})
      };

      if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
        _config.toggle = false;
      }

      if (!data) {
        data = new Collapse(this, _config);
        $this.data(DATA_KEY, data);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      }
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on(EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
  // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
  if (event.currentTarget.tagName === 'A') {
    event.preventDefault();
  }

  const $trigger = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
  const selector = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getSelectorFromElement(this);
  const selectors = [].slice.call(document.querySelectorAll(selector));
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(selectors).each(function () {
    const $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    const data = $target.data(DATA_KEY);
    const config = data ? 'toggle' : $trigger.data();

    Collapse._jQueryInterface.call($target, config);
  });
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = Collapse._jQueryInterface;
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].Constructor = Collapse;

jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].noConflict = () => {
  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = JQUERY_NO_CONFLICT;
  return Collapse._jQueryInterface;
};

/* harmony default export */ __webpack_exports__["default"] = (Collapse);

/***/ }),

/***/ "./node_modules/bootstrap/js/src/dropdown.js":
/*!***************************************************!*\
  !*** ./node_modules/bootstrap/js/src/dropdown.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./node_modules/bootstrap/js/src/util.js");
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.5.2): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */



/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'dropdown';
const VERSION = '4.5.2';
const DATA_KEY = 'bs.dropdown';
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = '.data-api';
const JQUERY_NO_CONFLICT = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME];
const ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

const SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

const TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

const ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

const ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

const RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

const REGEXP_KEYDOWN = new RegExp(`${ARROW_UP_KEYCODE}|${ARROW_DOWN_KEYCODE}|${ESCAPE_KEYCODE}`);
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const EVENT_CLICK = `click${EVENT_KEY}`;
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY}${DATA_API_KEY}`;
const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY}${DATA_API_KEY}`;
const CLASS_NAME_DISABLED = 'disabled';
const CLASS_NAME_SHOW = 'show';
const CLASS_NAME_DROPUP = 'dropup';
const CLASS_NAME_DROPRIGHT = 'dropright';
const CLASS_NAME_DROPLEFT = 'dropleft';
const CLASS_NAME_MENURIGHT = 'dropdown-menu-right';
const CLASS_NAME_POSITION_STATIC = 'position-static';
const SELECTOR_DATA_TOGGLE = '[data-toggle="dropdown"]';
const SELECTOR_FORM_CHILD = '.dropdown form';
const SELECTOR_MENU = '.dropdown-menu';
const SELECTOR_NAVBAR_NAV = '.navbar-nav';
const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
const PLACEMENT_TOP = 'top-start';
const PLACEMENT_TOPEND = 'top-end';
const PLACEMENT_BOTTOM = 'bottom-start';
const PLACEMENT_BOTTOMEND = 'bottom-end';
const PLACEMENT_RIGHT = 'right-start';
const PLACEMENT_LEFT = 'left-start';
const Default = {
  offset: 0,
  flip: true,
  boundary: 'scrollParent',
  reference: 'toggle',
  display: 'dynamic',
  popperConfig: null
};
const DefaultType = {
  offset: '(number|string|function)',
  flip: 'boolean',
  boundary: '(string|element)',
  reference: '(string|element)',
  display: 'string',
  popperConfig: '(null|object)'
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Dropdown {
  constructor(element, config) {
    this._element = element;
    this._popper = null;
    this._config = this._getConfig(config);
    this._menu = this._getMenuElement();
    this._inNavbar = this._detectNavbar();

    this._addEventListeners();
  } // Getters


  static get VERSION() {
    return VERSION;
  }

  static get Default() {
    return Default;
  }

  static get DefaultType() {
    return DefaultType;
  } // Public


  toggle() {
    if (this._element.disabled || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(CLASS_NAME_DISABLED)) {
      return;
    }

    const isActive = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._menu).hasClass(CLASS_NAME_SHOW);

    Dropdown._clearMenus();

    if (isActive) {
      return;
    }

    this.show(true);
  }

  show(usePopper = false) {
    if (this._element.disabled || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(CLASS_NAME_DISABLED) || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._menu).hasClass(CLASS_NAME_SHOW)) {
      return;
    }

    const relatedTarget = {
      relatedTarget: this._element
    };
    const showEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(EVENT_SHOW, relatedTarget);

    const parent = Dropdown._getParentFromElement(this._element);

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).trigger(showEvent);

    if (showEvent.isDefaultPrevented()) {
      return;
    } // Disable totally Popper.js for Dropdown in Navbar


    if (!this._inNavbar && usePopper) {
      /**
       * Check for Popper dependency
       * Popper - https://popper.js.org
       */
      if (typeof popper_js__WEBPACK_IMPORTED_MODULE_1__["default"] === 'undefined') {
        throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
      }

      let referenceElement = this._element;

      if (this._config.reference === 'parent') {
        referenceElement = parent;
      } else if (_util__WEBPACK_IMPORTED_MODULE_2__["default"].isElement(this._config.reference)) {
        referenceElement = this._config.reference; // Check if it's jQuery element

        if (typeof this._config.reference.jquery !== 'undefined') {
          referenceElement = this._config.reference[0];
        }
      } // If boundary is not `scrollParent`, then set position to `static`
      // to allow the menu to "escape" the scroll parent's boundaries
      // https://github.com/twbs/bootstrap/issues/24251


      if (this._config.boundary !== 'scrollParent') {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).addClass(CLASS_NAME_POSITION_STATIC);
      }

      this._popper = new popper_js__WEBPACK_IMPORTED_MODULE_1__["default"](referenceElement, this._menu, this._getPopperConfig());
    } // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


    if ('ontouchstart' in document.documentElement && jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).closest(SELECTOR_NAVBAR_NAV).length === 0) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).children().on('mouseover', null, jquery__WEBPACK_IMPORTED_MODULE_0___default.a.noop);
    }

    this._element.focus();

    this._element.setAttribute('aria-expanded', true);

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._menu).toggleClass(CLASS_NAME_SHOW);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).toggleClass(CLASS_NAME_SHOW).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(EVENT_SHOWN, relatedTarget));
  }

  hide() {
    if (this._element.disabled || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(CLASS_NAME_DISABLED) || !jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._menu).hasClass(CLASS_NAME_SHOW)) {
      return;
    }

    const relatedTarget = {
      relatedTarget: this._element
    };
    const hideEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(EVENT_HIDE, relatedTarget);

    const parent = Dropdown._getParentFromElement(this._element);

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).trigger(hideEvent);

    if (hideEvent.isDefaultPrevented()) {
      return;
    }

    if (this._popper) {
      this._popper.destroy();
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._menu).toggleClass(CLASS_NAME_SHOW);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).toggleClass(CLASS_NAME_SHOW).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(EVENT_HIDDEN, relatedTarget));
  }

  dispose() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.removeData(this._element, DATA_KEY);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).off(EVENT_KEY);
    this._element = null;
    this._menu = null;

    if (this._popper !== null) {
      this._popper.destroy();

      this._popper = null;
    }
  }

  update() {
    this._inNavbar = this._detectNavbar();

    if (this._popper !== null) {
      this._popper.scheduleUpdate();
    }
  } // Private


  _addEventListeners() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).on(EVENT_CLICK, event => {
      event.preventDefault();
      event.stopPropagation();
      this.toggle();
    });
  }

  _getConfig(config) {
    config = { ...this.constructor.Default,
      ...jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).data(),
      ...config
    };
    _util__WEBPACK_IMPORTED_MODULE_2__["default"].typeCheckConfig(NAME, config, this.constructor.DefaultType);
    return config;
  }

  _getMenuElement() {
    if (!this._menu) {
      const parent = Dropdown._getParentFromElement(this._element);

      if (parent) {
        this._menu = parent.querySelector(SELECTOR_MENU);
      }
    }

    return this._menu;
  }

  _getPlacement() {
    const $parentDropdown = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element.parentNode);
    let placement = PLACEMENT_BOTTOM; // Handle dropup

    if ($parentDropdown.hasClass(CLASS_NAME_DROPUP)) {
      placement = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._menu).hasClass(CLASS_NAME_MENURIGHT) ? PLACEMENT_TOPEND : PLACEMENT_TOP;
    } else if ($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT)) {
      placement = PLACEMENT_RIGHT;
    } else if ($parentDropdown.hasClass(CLASS_NAME_DROPLEFT)) {
      placement = PLACEMENT_LEFT;
    } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._menu).hasClass(CLASS_NAME_MENURIGHT)) {
      placement = PLACEMENT_BOTTOMEND;
    }

    return placement;
  }

  _detectNavbar() {
    return jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).closest('.navbar').length > 0;
  }

  _getOffset() {
    const offset = {};

    if (typeof this._config.offset === 'function') {
      offset.fn = data => {
        data.offsets = { ...data.offsets,
          ...(this._config.offset(data.offsets, this._element) || {})
        };
        return data;
      };
    } else {
      offset.offset = this._config.offset;
    }

    return offset;
  }

  _getPopperConfig() {
    const popperConfig = {
      placement: this._getPlacement(),
      modifiers: {
        offset: this._getOffset(),
        flip: {
          enabled: this._config.flip
        },
        preventOverflow: {
          boundariesElement: this._config.boundary
        }
      }
    }; // Disable Popper.js if we have a static display

    if (this._config.display === 'static') {
      popperConfig.modifiers.applyStyle = {
        enabled: false
      };
    }

    return { ...popperConfig,
      ...this._config.popperConfig
    };
  } // Static


  static _jQueryInterface(config) {
    return this.each(function () {
      let data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY);

      const _config = typeof config === 'object' ? config : null;

      if (!data) {
        data = new Dropdown(this, _config);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY, data);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      }
    });
  }

  static _clearMenus(event) {
    if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
      return;
    }

    const toggles = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE));

    for (let i = 0, len = toggles.length; i < len; i++) {
      const parent = Dropdown._getParentFromElement(toggles[i]);

      const context = jquery__WEBPACK_IMPORTED_MODULE_0___default()(toggles[i]).data(DATA_KEY);
      const relatedTarget = {
        relatedTarget: toggles[i]
      };

      if (event && event.type === 'click') {
        relatedTarget.clickEvent = event;
      }

      if (!context) {
        continue;
      }

      const dropdownMenu = context._menu;

      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).hasClass(CLASS_NAME_SHOW)) {
        continue;
      }

      if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(parent, event.target)) {
        continue;
      }

      const hideEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(EVENT_HIDE, relatedTarget);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        continue;
      } // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support


      if ('ontouchstart' in document.documentElement) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).children().off('mouseover', null, jquery__WEBPACK_IMPORTED_MODULE_0___default.a.noop);
      }

      toggles[i].setAttribute('aria-expanded', 'false');

      if (context._popper) {
        context._popper.destroy();
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(dropdownMenu).removeClass(CLASS_NAME_SHOW);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).removeClass(CLASS_NAME_SHOW).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(EVENT_HIDDEN, relatedTarget));
    }
  }

  static _getParentFromElement(element) {
    let parent;
    const selector = _util__WEBPACK_IMPORTED_MODULE_2__["default"].getSelectorFromElement(element);

    if (selector) {
      parent = document.querySelector(selector);
    }

    return parent || element.parentNode;
  } // eslint-disable-next-line complexity


  static _dataApiKeydownHandler(event) {
    // If not input/textarea:
    //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
    // If input/textarea:
    //  - If space key => not a dropdown command
    //  - If key is other than escape
    //    - If key is not up or down => not a dropdown command
    //    - If trigger inside the menu => not a dropdown command
    if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).closest(SELECTOR_MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
      return;
    }

    if (this.disabled || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass(CLASS_NAME_DISABLED)) {
      return;
    }

    const parent = Dropdown._getParentFromElement(this);

    const isActive = jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).hasClass(CLASS_NAME_SHOW);

    if (!isActive && event.which === ESCAPE_KEYCODE) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
      if (event.which === ESCAPE_KEYCODE) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent.querySelector(SELECTOR_DATA_TOGGLE)).trigger('focus');
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('click');
      return;
    }

    const items = [].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS)).filter(item => jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).is(':visible'));

    if (items.length === 0) {
      return;
    }

    let index = items.indexOf(event.target);

    if (event.which === ARROW_UP_KEYCODE && index > 0) {
      // Up
      index--;
    }

    if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
      // Down
      index++;
    }

    if (index < 0) {
      index = 0;
    }

    items[index].focus();
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown._dataApiKeydownHandler).on(`${EVENT_CLICK_DATA_API} ${EVENT_KEYUP_DATA_API}`, Dropdown._clearMenus).on(EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
  event.preventDefault();
  event.stopPropagation();

  Dropdown._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'toggle');
}).on(EVENT_CLICK_DATA_API, SELECTOR_FORM_CHILD, e => {
  e.stopPropagation();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = Dropdown._jQueryInterface;
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].Constructor = Dropdown;

jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].noConflict = () => {
  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = JQUERY_NO_CONFLICT;
  return Dropdown._jQueryInterface;
};

/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ }),

/***/ "./node_modules/bootstrap/js/src/util.js":
/*!***********************************************!*\
  !*** ./node_modules/bootstrap/js/src/util.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.5.2): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Private TransitionEnd Helpers
 * ------------------------------------------------------------------------
 */

const TRANSITION_END = 'transitionend';
const MAX_UID = 1000000;
const MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

function toType(obj) {
  if (obj === null || typeof obj === 'undefined') {
    return `${obj}`;
  }

  return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
}

function getSpecialTransitionEndEvent() {
  return {
    bindType: TRANSITION_END,
    delegateType: TRANSITION_END,

    handle(event) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).is(this)) {
        return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
      }

      return undefined;
    }

  };
}

function transitionEndEmulator(duration) {
  let called = false;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).one(Util.TRANSITION_END, () => {
    called = true;
  });
  setTimeout(() => {
    if (!called) {
      Util.triggerTransitionEnd(this);
    }
  }, duration);
  return this;
}

function setTransitionEndSupport() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.emulateTransitionEnd = transitionEndEmulator;
  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
}
/**
 * --------------------------------------------------------------------------
 * Public Util Api
 * --------------------------------------------------------------------------
 */


const Util = {
  TRANSITION_END: 'bsTransitionEnd',

  getUID(prefix) {
    do {
      // eslint-disable-next-line no-bitwise
      prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
    } while (document.getElementById(prefix));

    return prefix;
  },

  getSelectorFromElement(element) {
    let selector = element.getAttribute('data-target');

    if (!selector || selector === '#') {
      const hrefAttr = element.getAttribute('href');
      selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
    }

    try {
      return document.querySelector(selector) ? selector : null;
    } catch (err) {
      return null;
    }
  },

  getTransitionDurationFromElement(element) {
    if (!element) {
      return 0;
    } // Get transition-duration of the element


    let transitionDuration = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).css('transition-duration');
    let transitionDelay = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).css('transition-delay');
    const floatTransitionDuration = parseFloat(transitionDuration);
    const floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    } // If multiple durations are defined, take the first


    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  },

  reflow(element) {
    return element.offsetHeight;
  },

  triggerTransitionEnd(element) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).trigger(TRANSITION_END);
  },

  // TODO: Remove in v5
  supportsTransitionEnd() {
    return Boolean(TRANSITION_END);
  },

  isElement(obj) {
    return (obj[0] || obj).nodeType;
  },

  typeCheckConfig(componentName, config, configTypes) {
    for (const property in configTypes) {
      if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
        const expectedTypes = configTypes[property];
        const value = config[property];
        const valueType = value && Util.isElement(value) ? 'element' : toType(value);

        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new Error(`${componentName.toUpperCase()}: ` + `Option "${property}" provided type "${valueType}" ` + `but expected type "${expectedTypes}".`);
        }
      }
    }
  },

  findShadowRoot(element) {
    if (!document.documentElement.attachShadow) {
      return null;
    } // Can find the shadow root otherwise it'll return the document


    if (typeof element.getRootNode === 'function') {
      const root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }

    if (element instanceof ShadowRoot) {
      return element;
    } // when we don't find a shadow root


    if (!element.parentNode) {
      return null;
    }

    return Util.findShadowRoot(element.parentNode);
  },

  jQueryDetection() {
    if (typeof jquery__WEBPACK_IMPORTED_MODULE_0___default.a === 'undefined') {
      throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
    }

    const version = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.jquery.split(' ')[0].split('.');
    const minMajor = 1;
    const ltMajor = 2;
    const minMinor = 9;
    const minPatch = 1;
    const maxMajor = 4;

    if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
      throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
    }
  }

};
Util.jQueryDetection();
setTransitionEndSupport();
/* harmony default export */ __webpack_exports__["default"] = (Util);

/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];

  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }

  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }

    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;
/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/

var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */

function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}
/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */


function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  } // NOTE: 1 DOM access here


  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}
/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */


function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }

  return element.parentNode || element.host;
}
/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */


function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;

    case '#document':
      return element.body;
  } // Firefox want us to check `-x` and `-y` variations as well


  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}
/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */


function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */

function isIE(version) {
  if (version === 11) {
    return isIE11;
  }

  if (version === 10) {
    return isIE10;
  }

  return isIE11 || isIE10;
}
/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */


function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

  var offsetParent = element.offsetParent || null; // Skip hidden elements which don't have an offsetParent

  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  } // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...


  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }

  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}
/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */


function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}
/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */


function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  } // Here we make sure to give as "start" the element that comes first in the DOM


  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1; // Get common ancestor container

  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  } // one of the nodes is inside shadowDOM, find which one


  var element1root = getRoot(element1);

  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}
/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */


function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}
/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */


function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}
/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */


function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);
  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */


function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}
/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */


function getBoundingClientRect(element) {
  var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11

  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  }; // subtract scrollbar size from sizes

  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;
  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons

  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);
  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.

  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);
    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);
  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };
  return getClientRect(offset);
}
/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */


function isFixed(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }

  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }

  var parentNode = getParentNode(element);

  if (!parentNode) {
    return false;
  }

  return isFixed(parentNode);
}
/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */


function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }

  var el = element.parentElement;

  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }

  return el || document.documentElement;
}
/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */


function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false; // NOTE: 1 DOM access here

  var boundaries = {
    top: 0,
    left: 0
  };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference)); // Handle viewport case

  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;

    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));

      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  } // Add paddings


  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;
  return width * height;
}
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };
  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });
  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });
  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
  var variation = placement.split('-')[1];
  return computedPlacement + (variation ? '-' + variation : '');
}
/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */


function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */


function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}
/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */


function getOppositePlacement(placement) {
  var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */


function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0]; // Get popper node sizes

  var popperRect = getOuterSizes(popper); // Add position, width and height to our offsets object

  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  }; // depending by the popper placement we have to compute its offsets slightly differently

  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';
  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;

  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}
/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  } // use `filter` to obtain the same behavior of `find`


  return arr.filter(check)[0];
}
/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  } // use `find` + `indexOf` if `findIndex` isn't supported


  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}
/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */


function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }

    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation

    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);
      data = fn(data, modifier);
    }
  });
  return data;
}
/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */


function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  }; // compute reference element offsets

  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding); // store the computed placement inside `originalPlacement`

  data.originalPlacement = data.placement;
  data.positionFixed = this.options.positionFixed; // compute the popper offsets

  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'; // run the modifiers

  data = runModifiers(this.modifiers, data); // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback

  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}
/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */


function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}
/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */


function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;

    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }

  return null;
}
/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */


function destroy() {
  this.state.isDestroyed = true; // touch DOM only if `applyStyle` modifier is enabled

  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners(); // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it

  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }

  return this;
}
/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */


function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, {
    passive: true
  });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }

  scrollParents.push(target);
}
/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, {
    passive: true
  }); // Scroll event listener on scroll parents

  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;
  return state;
}
/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */


function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}
/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound); // Remove scroll event listener on scroll parents

  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  }); // Reset state

  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}
/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */


function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}
/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */


function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = ''; // add unit if the value is numeric and is one of the following

    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }

    element.style[prop] = styles[prop] + unit;
  });
}
/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];

    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */


function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles); // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element

  setAttributes(data.instance.popper, data.attributes); // if arrowElement is defined and arrowStyles has some properties

  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}
/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */


function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
  popper.setAttribute('x-placement', placement); // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations

  setStyles(popper, {
    position: options.positionFixed ? 'fixed' : 'absolute'
  });
  return options;
}
/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */


function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);
  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;
  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper; // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;

  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }

  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent); // Styles

  var styles = {
    position: popper.position
  };
  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right'; // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed

  var prefixedProperty = getSupportedPropertyName('transform'); // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.

  var left = void 0,
      top = void 0;

  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }

  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }

  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  } // Attributes


  var attributes = {
    'x-placement': data.placement
  }; // Update `data` attributes, styles and arrowStyles

  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
  return data;
}
/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */


function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });
  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';

    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }

  return isRequired;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function arrow(data, options) {
  var _data$offsets$arrow; // arrow depends on keepTogether in order to work


  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element; // if arrowElement is a string, suppose it's a CSS selector

  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement); // if arrowElement is not found, don't run the modifier

    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isVertical = ['left', 'right'].indexOf(placement) !== -1;
  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len]; //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //
  // top/left side

  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  } // bottom/right side


  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  data.offsets.popper = getClientRect(data.offsets.popper); // compute center of the popper

  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2; // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available

  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide; // prevent arrowElement from being placed not contiguously to its popper

  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
  return data;
}
/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */


function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }

  return variation;
}
/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */


var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']; // Get rid of `auto` `auto-start` and `auto-end`

var validPlacements = placements.slice(3);
/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */

function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';
  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;

    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;

    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;

    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);
    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference; // using floor because the reference offsets may contain decimals we are not going to consider here

    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1; // flips variation if reference element overflows boundaries

    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom); // flips variation if popper content overflows boundaries

    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);
    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : ''); // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future

      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }

  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}
/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */


function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2]; // If it's not a number it's an operator, I guess

  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;

    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;

      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;

    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }

    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}
/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */


function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0]; // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one

  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1; // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)

  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  }); // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space

  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  } // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.


  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments]; // Convert the values with units to absolute pixels to allow our computations

  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, []) // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  }); // Loop trough the offsets arrays and execute the operations

  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */


function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var basePlacement = placement.split('-')[0];
  var offsets = void 0;

  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper); // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken

  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  } // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself


  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification

  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];
  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed); // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed

  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;
  options.boundaries = boundaries;
  var order = options.priority;
  var popper = data.offsets.popper;
  var check = {
    primary: function primary(placement) {
      var value = popper[placement];

      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }

      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];

      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }

      return defineProperty({}, mainSide, value);
    }
  };
  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });
  data.offsets.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1]; // if shift shiftvariation is specified, run the modifier

  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;
    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';
    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };
    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);
  return data;
}
/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */


var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: offset,

    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: preventOverflow,

    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],

    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: arrow,

    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: flip,

    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',

    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',

    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,

    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,

    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,

    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: computeStyle,

    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,

    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',

    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: applyStyle,

    /** @prop {Function} */
    onLoad: applyStyleOnLoad,

    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};
/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */

var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};
/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */
// Utils
// Methods

var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    }; // make update() debounced, so that it only runs at most once-per-tick


    this.update = debounce(this.update.bind(this)); // with {} we create a new object with the options inside it

    this.options = _extends({}, Popper.Defaults, options); // init state

    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    }; // get reference and popper elements (allow jQuery wrappers)

    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper; // Deep merge modifiers options

    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    }); // Refactoring modifiers' list (Object => Array)

    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    }) // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    }); // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!

    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    }); // fire the first update to position the popper in the right place

    this.update();
    var eventsEnabled = this.options.eventsEnabled;

    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  } // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }
    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();
/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
/* harmony default export */ __webpack_exports__["default"] = (Popper);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_js_src_collapse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/js/src/collapse */ "./node_modules/bootstrap/js/src/collapse.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/components/dropdown.js");



/***/ }),

/***/ "./src/js/components/dropdown.js":
/*!***************************************!*\
  !*** ./src/js/components/dropdown.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_js_src_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/js/src/dropdown */ "./node_modules/bootstrap/js/src/dropdown.js");


/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/demo/wp-content/themes/alpha-elemenda/src/js/app.js */"./src/js/app.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvY29sbGFwc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2lzQnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2RlYm91bmNlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldFBhcmVudE5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRTY3JvbGxQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRSZWZlcmVuY2VOb2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvaXNJRS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldE9mZnNldFBhcmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2lzT2Zmc2V0Q29udGFpbmVyLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0Um9vdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2ZpbmRDb21tb25PZmZzZXRQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9pbmNsdWRlU2Nyb2xsLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0Qm9yZGVyc1NpemUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRXaW5kb3dTaXplcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldENsaWVudFJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9pc0ZpeGVkLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldEJvdW5kYXJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldFJlZmVyZW5jZU9mZnNldHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRPdXRlclNpemVzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRQb3BwZXJPZmZzZXRzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZmluZC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2ZpbmRJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL3J1bk1vZGlmaWVycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21ldGhvZHMvdXBkYXRlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvaXNNb2RpZmllckVuYWJsZWQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tZXRob2RzL2Rlc3Ryb3kuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9zZXR1cEV2ZW50TGlzdGVuZXJzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbWV0aG9kcy9lbmFibGVFdmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL3JlbW92ZUV2ZW50TGlzdGVuZXJzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbWV0aG9kcy9kaXNhYmxlRXZlbnRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9pc051bWVyaWMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9zZXRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9zZXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbW9kaWZpZXJzL2FwcGx5U3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRSb3VuZGVkT2Zmc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21vZGlmaWVycy9jb21wdXRlU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9pc01vZGlmaWVyUmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tb2RpZmllcnMvYXJyb3cuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21ldGhvZHMvcGxhY2VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2Nsb2Nrd2lzZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21vZGlmaWVycy9mbGlwLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbW9kaWZpZXJzL2tlZXBUb2dldGhlci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21vZGlmaWVycy9vZmZzZXQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tb2RpZmllcnMvcHJldmVudE92ZXJmbG93LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbW9kaWZpZXJzL3NoaWZ0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbW9kaWZpZXJzL2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tb2RpZmllcnMvaW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tb2RpZmllcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tZXRob2RzL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2Ryb3Bkb3duLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbIk5BTUUiLCJWRVJTSU9OIiwiREFUQV9LRVkiLCJFVkVOVF9LRVkiLCJEQVRBX0FQSV9LRVkiLCJKUVVFUllfTk9fQ09ORkxJQ1QiLCIkIiwiZm4iLCJEZWZhdWx0IiwidG9nZ2xlIiwicGFyZW50IiwiRGVmYXVsdFR5cGUiLCJFVkVOVF9TSE9XIiwiRVZFTlRfU0hPV04iLCJFVkVOVF9ISURFIiwiRVZFTlRfSElEREVOIiwiRVZFTlRfQ0xJQ0tfREFUQV9BUEkiLCJDTEFTU19OQU1FX1NIT1ciLCJDTEFTU19OQU1FX0NPTExBUFNFIiwiQ0xBU1NfTkFNRV9DT0xMQVBTSU5HIiwiQ0xBU1NfTkFNRV9DT0xMQVBTRUQiLCJESU1FTlNJT05fV0lEVEgiLCJESU1FTlNJT05fSEVJR0hUIiwiU0VMRUNUT1JfQUNUSVZFUyIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFIiwiQ29sbGFwc2UiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJjb25maWciLCJfaXNUcmFuc2l0aW9uaW5nIiwiX2VsZW1lbnQiLCJfY29uZmlnIiwiX2dldENvbmZpZyIsIl90cmlnZ2VyQXJyYXkiLCJzbGljZSIsImNhbGwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpZCIsInRvZ2dsZUxpc3QiLCJpIiwibGVuIiwibGVuZ3RoIiwiZWxlbSIsInNlbGVjdG9yIiwiVXRpbCIsImdldFNlbGVjdG9yRnJvbUVsZW1lbnQiLCJmaWx0ZXJFbGVtZW50IiwiZmlsdGVyIiwiZm91bmRFbGVtIiwiX3NlbGVjdG9yIiwicHVzaCIsIl9wYXJlbnQiLCJfZ2V0UGFyZW50IiwiX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyIsImhhc0NsYXNzIiwiaGlkZSIsInNob3ciLCJhY3RpdmVzIiwiYWN0aXZlc0RhdGEiLCJnZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIm5vdCIsImRhdGEiLCJzdGFydEV2ZW50IiwiRXZlbnQiLCJ0cmlnZ2VyIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiX2pRdWVyeUludGVyZmFjZSIsImRpbWVuc2lvbiIsIl9nZXREaW1lbnNpb24iLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwic3R5bGUiLCJhdHRyIiwic2V0VHJhbnNpdGlvbmluZyIsImNvbXBsZXRlIiwiY2FwaXRhbGl6ZWREaW1lbnNpb24iLCJ0b1VwcGVyQ2FzZSIsInNjcm9sbFNpemUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCIsIm9uZSIsIlRSQU5TSVRJT05fRU5EIiwiZW11bGF0ZVRyYW5zaXRpb25FbmQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyZWZsb3ciLCJ0cmlnZ2VyQXJyYXlMZW5ndGgiLCIkZWxlbSIsImlzVHJhbnNpdGlvbmluZyIsImRpc3Bvc2UiLCJyZW1vdmVEYXRhIiwiQm9vbGVhbiIsInR5cGVDaGVja0NvbmZpZyIsImhhc1dpZHRoIiwiaXNFbGVtZW50IiwianF1ZXJ5IiwicXVlcnlTZWxlY3RvciIsImNoaWxkcmVuIiwiZWFjaCIsIl9nZXRUYXJnZXRGcm9tRWxlbWVudCIsInRyaWdnZXJBcnJheSIsImlzT3BlbiIsInRvZ2dsZUNsYXNzIiwiJHRoaXMiLCJ0ZXN0IiwiVHlwZUVycm9yIiwib24iLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJ0YWdOYW1lIiwicHJldmVudERlZmF1bHQiLCIkdHJpZ2dlciIsInNlbGVjdG9ycyIsIiR0YXJnZXQiLCJDb25zdHJ1Y3RvciIsIm5vQ29uZmxpY3QiLCJFU0NBUEVfS0VZQ09ERSIsIlNQQUNFX0tFWUNPREUiLCJUQUJfS0VZQ09ERSIsIkFSUk9XX1VQX0tFWUNPREUiLCJBUlJPV19ET1dOX0tFWUNPREUiLCJSSUdIVF9NT1VTRV9CVVRUT05fV0hJQ0giLCJSRUdFWFBfS0VZRE9XTiIsIlJlZ0V4cCIsIkVWRU5UX0NMSUNLIiwiRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSIsIkVWRU5UX0tFWVVQX0RBVEFfQVBJIiwiQ0xBU1NfTkFNRV9ESVNBQkxFRCIsIkNMQVNTX05BTUVfRFJPUFVQIiwiQ0xBU1NfTkFNRV9EUk9QUklHSFQiLCJDTEFTU19OQU1FX0RST1BMRUZUIiwiQ0xBU1NfTkFNRV9NRU5VUklHSFQiLCJDTEFTU19OQU1FX1BPU0lUSU9OX1NUQVRJQyIsIlNFTEVDVE9SX0ZPUk1fQ0hJTEQiLCJTRUxFQ1RPUl9NRU5VIiwiU0VMRUNUT1JfTkFWQkFSX05BViIsIlNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMiLCJQTEFDRU1FTlRfVE9QIiwiUExBQ0VNRU5UX1RPUEVORCIsIlBMQUNFTUVOVF9CT1RUT00iLCJQTEFDRU1FTlRfQk9UVE9NRU5EIiwiUExBQ0VNRU5UX1JJR0hUIiwiUExBQ0VNRU5UX0xFRlQiLCJvZmZzZXQiLCJmbGlwIiwiYm91bmRhcnkiLCJyZWZlcmVuY2UiLCJkaXNwbGF5IiwicG9wcGVyQ29uZmlnIiwiRHJvcGRvd24iLCJfcG9wcGVyIiwiX21lbnUiLCJfZ2V0TWVudUVsZW1lbnQiLCJfaW5OYXZiYXIiLCJfZGV0ZWN0TmF2YmFyIiwiX2FkZEV2ZW50TGlzdGVuZXJzIiwiZGlzYWJsZWQiLCJpc0FjdGl2ZSIsIl9jbGVhck1lbnVzIiwidXNlUG9wcGVyIiwicmVsYXRlZFRhcmdldCIsInNob3dFdmVudCIsIl9nZXRQYXJlbnRGcm9tRWxlbWVudCIsIlBvcHBlciIsInJlZmVyZW5jZUVsZW1lbnQiLCJfZ2V0UG9wcGVyQ29uZmlnIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xvc2VzdCIsImJvZHkiLCJub29wIiwiZm9jdXMiLCJzZXRBdHRyaWJ1dGUiLCJoaWRlRXZlbnQiLCJkZXN0cm95Iiwib2ZmIiwidXBkYXRlIiwic2NoZWR1bGVVcGRhdGUiLCJzdG9wUHJvcGFnYXRpb24iLCJfZ2V0UGxhY2VtZW50IiwiJHBhcmVudERyb3Bkb3duIiwicGFyZW50Tm9kZSIsInBsYWNlbWVudCIsIl9nZXRPZmZzZXQiLCJvZmZzZXRzIiwibW9kaWZpZXJzIiwiZW5hYmxlZCIsInByZXZlbnRPdmVyZmxvdyIsImJvdW5kYXJpZXNFbGVtZW50IiwiYXBwbHlTdHlsZSIsIndoaWNoIiwidHlwZSIsInRvZ2dsZXMiLCJjb250ZXh0IiwiY2xpY2tFdmVudCIsImRyb3Bkb3duTWVudSIsInRhcmdldCIsIl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIiLCJpdGVtcyIsIml0ZW0iLCJpcyIsImluZGV4IiwiaW5kZXhPZiIsImUiLCJNQVhfVUlEIiwiTUlMTElTRUNPTkRTX01VTFRJUExJRVIiLCJ0b1R5cGUiLCJvYmoiLCJ0b1N0cmluZyIsIm1hdGNoIiwidG9Mb3dlckNhc2UiLCJnZXRTcGVjaWFsVHJhbnNpdGlvbkVuZEV2ZW50IiwiYmluZFR5cGUiLCJkZWxlZ2F0ZVR5cGUiLCJoYW5kbGUiLCJoYW5kbGVPYmoiLCJoYW5kbGVyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJ0cmFuc2l0aW9uRW5kRW11bGF0b3IiLCJkdXJhdGlvbiIsImNhbGxlZCIsInNldFRpbWVvdXQiLCJ0cmlnZ2VyVHJhbnNpdGlvbkVuZCIsInNldFRyYW5zaXRpb25FbmRTdXBwb3J0Iiwic3BlY2lhbCIsImdldFVJRCIsInByZWZpeCIsIk1hdGgiLCJyYW5kb20iLCJnZXRFbGVtZW50QnlJZCIsImhyZWZBdHRyIiwidHJpbSIsImVyciIsImNzcyIsInRyYW5zaXRpb25EZWxheSIsImZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uIiwicGFyc2VGbG9hdCIsImZsb2F0VHJhbnNpdGlvbkRlbGF5Iiwic3BsaXQiLCJvZmZzZXRIZWlnaHQiLCJzdXBwb3J0c1RyYW5zaXRpb25FbmQiLCJub2RlVHlwZSIsImNvbXBvbmVudE5hbWUiLCJjb25maWdUeXBlcyIsInByb3BlcnR5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJleHBlY3RlZFR5cGVzIiwidmFsdWUiLCJ2YWx1ZVR5cGUiLCJFcnJvciIsImZpbmRTaGFkb3dSb290IiwiYXR0YWNoU2hhZG93IiwiZ2V0Um9vdE5vZGUiLCJyb290IiwiU2hhZG93Um9vdCIsImpRdWVyeURldGVjdGlvbiIsInZlcnNpb24iLCJtaW5NYWpvciIsImx0TWFqb3IiLCJtaW5NaW5vciIsIm1pblBhdGNoIiwibWF4TWFqb3IiLCJ0aW1lb3V0RHVyYXRpb24iLCJsb25nZXJUaW1lb3V0QnJvd3NlcnMiLCJpc0Jyb3dzZXIiLCJuYXZpZ2F0b3IiLCJzY2hlZHVsZWQiLCJzdXBwb3J0c01pY3JvVGFza3MiLCJ3aW5kb3ciLCJnZXRUeXBlIiwiZnVuY3Rpb25Ub0NoZWNrIiwiZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5Iiwib3ZlcmZsb3ciLCJvdmVyZmxvd1giLCJvdmVyZmxvd1kiLCJnZXRTY3JvbGxQYXJlbnQiLCJnZXRQYXJlbnROb2RlIiwiaXNJRTExIiwiaXNJRTEwIiwibm9PZmZzZXRQYXJlbnQiLCJpc0lFIiwib2Zmc2V0UGFyZW50Iiwibm9kZU5hbWUiLCJnZXRPZmZzZXRQYXJlbnQiLCJub2RlIiwiZ2V0Um9vdCIsImVsZW1lbnQxIiwiZWxlbWVudDIiLCJvcmRlciIsIk5vZGUiLCJzdGFydCIsImVuZCIsInJhbmdlIiwiY29tbW9uQW5jZXN0b3JDb250YWluZXIiLCJpc09mZnNldENvbnRhaW5lciIsImVsZW1lbnQxcm9vdCIsImZpbmRDb21tb25PZmZzZXRQYXJlbnQiLCJzaWRlIiwidXBwZXJTaWRlIiwiaHRtbCIsInNjcm9sbGluZ0VsZW1lbnQiLCJzdWJ0cmFjdCIsInNjcm9sbFRvcCIsImdldFNjcm9sbCIsInNjcm9sbExlZnQiLCJtb2RpZmllciIsInNpZGVBIiwiYXhpcyIsInNpZGVCIiwic3R5bGVzIiwicGFyc2VJbnQiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFNpemUiLCJoZWlnaHQiLCJyZWN0IiwicmVzdWx0IiwidG9wIiwic2l6ZXMiLCJnZXRXaW5kb3dTaXplcyIsIndpZHRoIiwiaG9yaXpTY3JvbGxiYXIiLCJ2ZXJ0U2Nyb2xsYmFyIiwiZ2V0Qm9yZGVyc1NpemUiLCJnZXRDbGllbnRSZWN0IiwiZml4ZWRQb3NpdGlvbiIsInJ1bklzSUUiLCJpc0hUTUwiLCJjaGlsZHJlblJlY3QiLCJwYXJlbnRSZWN0Iiwic2Nyb2xsUGFyZW50IiwiYm9yZGVyVG9wV2lkdGgiLCJib3JkZXJMZWZ0V2lkdGgiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwiaW5jbHVkZVNjcm9sbCIsImV4Y2x1ZGVTY3JvbGwiLCJyZWxhdGl2ZU9mZnNldCIsImdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSIsImlzRml4ZWQiLCJlbCIsImJvdW5kYXJpZXMiLCJsZWZ0IiwiZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudCIsImdldFJlZmVyZW5jZU5vZGUiLCJnZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUiLCJib3VuZGFyaWVzTm9kZSIsInBvcHBlciIsInBhZGRpbmciLCJpc1BhZGRpbmdOdW1iZXIiLCJnZXRCb3VuZGFyaWVzIiwicmVjdHMiLCJyZWZSZWN0IiwiYm90dG9tIiwic29ydGVkQXJlYXMiLCJnZXRBcmVhIiwiYiIsImEiLCJmaWx0ZXJlZEFyZWFzIiwiY29tcHV0ZWRQbGFjZW1lbnQiLCJ2YXJpYXRpb24iLCJjb21tb25PZmZzZXRQYXJlbnQiLCJ4IiwieSIsImhhc2giLCJyaWdodCIsInBvcHBlclJlY3QiLCJnZXRPdXRlclNpemVzIiwicG9wcGVyT2Zmc2V0cyIsImlzSG9yaXoiLCJtYWluU2lkZSIsInNlY29uZGFyeVNpZGUiLCJtZWFzdXJlbWVudCIsInNlY29uZGFyeU1lYXN1cmVtZW50IiwicmVmZXJlbmNlT2Zmc2V0cyIsImdldE9wcG9zaXRlUGxhY2VtZW50IiwiQXJyYXkiLCJhcnIiLCJjdXIiLCJtb2RpZmllcnNUb1J1biIsImVuZHMiLCJmaW5kSW5kZXgiLCJpc0Z1bmN0aW9uIiwiZ2V0UmVmZXJlbmNlT2Zmc2V0cyIsImNvbXB1dGVBdXRvUGxhY2VtZW50IiwiZ2V0UG9wcGVyT2Zmc2V0cyIsInJ1bk1vZGlmaWVycyIsIm5hbWUiLCJwcmVmaXhlcyIsInVwcGVyUHJvcCIsInRvQ2hlY2siLCJpc01vZGlmaWVyRW5hYmxlZCIsImdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSIsIm93bmVyRG9jdW1lbnQiLCJpc0JvZHkiLCJwYXNzaXZlIiwic3RhdGUiLCJzY3JvbGxFbGVtZW50Iiwic2V0dXBFdmVudExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwibiIsImlzTmFOIiwiaXNGaW5pdGUiLCJ1bml0IiwiaXNOdW1lcmljIiwiYXR0cmlidXRlcyIsIm9wdGlvbnMiLCJwb3NpdGlvbiIsInJvdW5kIiwiZmxvb3IiLCJub1JvdW5kIiwicmVmZXJlbmNlV2lkdGgiLCJwb3BwZXJXaWR0aCIsImlzVmVydGljYWwiLCJpc1ZhcmlhdGlvbiIsInNhbWVXaWR0aFBhcml0eSIsImJvdGhPZGRXaWR0aCIsImhvcml6b250YWxUb0ludGVnZXIiLCJ2ZXJ0aWNhbFRvSW50ZWdlciIsImlzRmlyZWZveCIsImxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiIsImdwdUFjY2VsZXJhdGlvbiIsIm9mZnNldFBhcmVudFJlY3QiLCJnZXRSb3VuZGVkT2Zmc2V0cyIsInByZWZpeGVkUHJvcGVydHkiLCJpbnZlcnRUb3AiLCJpbnZlcnRMZWZ0IiwicmVxdWVzdGluZyIsImlzUmVxdWlyZWQiLCJyZXF1ZXN0ZWQiLCJpc01vZGlmaWVyUmVxdWlyZWQiLCJhcnJvd0VsZW1lbnQiLCJzaWRlQ2FwaXRhbGl6ZWQiLCJhbHRTaWRlIiwib3BTaWRlIiwiYXJyb3dFbGVtZW50U2l6ZSIsImNlbnRlciIsInBvcHBlck1hcmdpblNpZGUiLCJwb3BwZXJCb3JkZXJTaWRlIiwic2lkZVZhbHVlIiwidmFsaWRQbGFjZW1lbnRzIiwicGxhY2VtZW50cyIsImNvdW50ZXIiLCJCRUhBVklPUlMiLCJwbGFjZW1lbnRPcHBvc2l0ZSIsImZsaXBPcmRlciIsImNsb2Nrd2lzZSIsInJlZk9mZnNldHMiLCJvdmVybGFwc1JlZiIsIm92ZXJmbG93c0xlZnQiLCJvdmVyZmxvd3NSaWdodCIsIm92ZXJmbG93c1RvcCIsIm92ZXJmbG93c0JvdHRvbSIsIm92ZXJmbG93c0JvdW5kYXJpZXMiLCJmbGlwcGVkVmFyaWF0aW9uQnlSZWYiLCJmbGlwcGVkVmFyaWF0aW9uQnlDb250ZW50IiwiZmxpcHBlZFZhcmlhdGlvbiIsImdldE9wcG9zaXRlVmFyaWF0aW9uIiwic3RyIiwic2l6ZSIsInVzZUhlaWdodCIsImZyYWdtZW50cyIsImZyYWciLCJkaXZpZGVyIiwic3BsaXRSZWdleCIsIm9wcyIsIm1lcmdlV2l0aFByZXZpb3VzIiwidG9WYWx1ZSIsIm9wIiwiaW5kZXgyIiwiYmFzZVBsYWNlbWVudCIsInBhcnNlT2Zmc2V0IiwidHJhbnNmb3JtUHJvcCIsInBvcHBlclN0eWxlcyIsInRyYW5zZm9ybSIsImNoZWNrIiwic2hpZnR2YXJpYXRpb24iLCJzaGlmdE9mZnNldHMiLCJib3VuZCIsInN1YnRyYWN0TGVuZ3RoIiwic2hpZnQiLCJrZWVwVG9nZXRoZXIiLCJpbm5lciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRlYm91bmNlIiwibW9kaWZpZXJPcHRpb25zIiwiZXZlbnRzRW5hYmxlZCIsImVuYWJsZUV2ZW50TGlzdGVuZXJzIiwiZGlzYWJsZUV2ZW50TGlzdGVuZXJzIiwiVXRpbHMiLCJQb3BwZXJVdGlscyIsIkRlZmF1bHRzIiwiZyIsIkZ1bmN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7QUFPQTtBQUNBO0FBRUE7Ozs7OztBQU1BLE1BQU1BLElBQUksR0FBa0IsVUFBNUI7QUFDQSxNQUFNQyxPQUFPLEdBQWUsT0FBNUI7QUFDQSxNQUFNQyxRQUFRLEdBQWMsYUFBNUI7QUFDQSxNQUFNQyxTQUFTLEdBQWMsSUFBR0QsUUFBUyxFQUF6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YUFDZDZULDBCQUFQLElBQU9BLEM7Ozs7K0NBRWU7YUFDZkMsMkJBQVAsSUFBT0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBMUZVeFUsRUFQckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcUJBLE9Bb0haeVUsS0FwSFl6VSxHQW9ISixDQUFDLHlDQUFELFFBQWtEMFUsV0FwSDlDMVU7QUFBQUEsT0FzSFp5UixVQXRIWXpSLEdBc0hDeVIsVUF0SER6UjtBQUFBQSxPQXdIWjJVLFFBeEhZM1UsR0F3SEQyVSxRQXhIQzNVOzs7Ozs7Ozs7Ozs7O0FDWnJCLElBQUk0VSxDQUFKLEMsQ0FFQTs7QUFDQUEsQ0FBQyxHQUFJLFlBQVc7QUFDZixTQUFPLElBQVA7QUFDQSxDQUZHLEVBQUo7O0FBSUEsSUFBSTtBQUNIO0FBQ0FBLEdBQUMsR0FBR0EsQ0FBQyxJQUFJLElBQUlDLFFBQUosQ0FBYSxhQUFiLEdBQVQ7QUFDQSxDQUhELENBR0UsT0FBT3RTLENBQVAsRUFBVTtBQUNYO0FBQ0EsTUFBSSxPQUFPcUUsTUFBUCxLQUFrQixRQUF0QixFQUFnQ2dPLENBQUMsR0FBR2hPLE1BQUo7QUFDaEMsQyxDQUVEO0FBQ0E7QUFDQTs7O0FBRUFrTyxNQUFNLENBQUNDLE9BQVAsR0FBaUJILENBQWpCLEM7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLHdCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNS4yKTogY29sbGFwc2UuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICAgPSAnY29sbGFwc2UnXG5jb25zdCBWRVJTSU9OICAgICAgICAgICAgID0gJzQuNS4yJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgICA9ICdicy5jb2xsYXBzZSdcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZICAgICAgICA9ICcuZGF0YS1hcGknXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgID0gJC5mbltOQU1FXVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICB0b2dnbGUgOiB0cnVlLFxuICBwYXJlbnQgOiAnJ1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgdG9nZ2xlIDogJ2Jvb2xlYW4nLFxuICBwYXJlbnQgOiAnKHN0cmluZ3xlbGVtZW50KSdcbn1cblxuY29uc3QgRVZFTlRfU0hPVyAgICAgICAgICAgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOICAgICAgICAgID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSAgICAgICAgICAgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiAgICAgICAgID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgICAgICAgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0UgICA9ICdjb2xsYXBzZSdcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0lORyA9ICdjb2xsYXBzaW5nJ1xuY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTRUQgID0gJ2NvbGxhcHNlZCdcblxuY29uc3QgRElNRU5TSU9OX1dJRFRIICA9ICd3aWR0aCdcbmNvbnN0IERJTUVOU0lPTl9IRUlHSFQgPSAnaGVpZ2h0J1xuXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkVTICAgICA9ICcuc2hvdywgLmNvbGxhcHNpbmcnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIENvbGxhcHNlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgPSBlbGVtZW50XG4gICAgdGhpcy5fY29uZmlnICAgICAgICAgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl90cmlnZ2VyQXJyYXkgICAgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBgW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1baHJlZj1cIiMke2VsZW1lbnQuaWR9XCJdLGAgK1xuICAgICAgYFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2RhdGEtdGFyZ2V0PVwiIyR7ZWxlbWVudC5pZH1cIl1gXG4gICAgKSlcblxuICAgIGNvbnN0IHRvZ2dsZUxpc3QgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfREFUQV9UT0dHTEUpKVxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0b2dnbGVMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtID0gdG9nZ2xlTGlzdFtpXVxuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbSlcbiAgICAgIGNvbnN0IGZpbHRlckVsZW1lbnQgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKVxuICAgICAgICAuZmlsdGVyKChmb3VuZEVsZW0pID0+IGZvdW5kRWxlbSA9PT0gZWxlbWVudClcblxuICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsICYmIGZpbHRlckVsZW1lbnQubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLl9zZWxlY3RvciA9IHNlbGVjdG9yXG4gICAgICAgIHRoaXMuX3RyaWdnZXJBcnJheS5wdXNoKGVsZW0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fcGFyZW50ID0gdGhpcy5fY29uZmlnLnBhcmVudCA/IHRoaXMuX2dldFBhcmVudCgpIDogbnVsbFxuXG4gICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModGhpcy5fZWxlbWVudCwgdGhpcy5fdHJpZ2dlckFycmF5KVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG9nZ2xlKSB7XG4gICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKCQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KClcbiAgICB9XG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHxcbiAgICAgICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGFjdGl2ZXNcbiAgICBsZXQgYWN0aXZlc0RhdGFcblxuICAgIGlmICh0aGlzLl9wYXJlbnQpIHtcbiAgICAgIGFjdGl2ZXMgPSBbXS5zbGljZS5jYWxsKHRoaXMuX3BhcmVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX0FDVElWRVMpKVxuICAgICAgICAuZmlsdGVyKChlbGVtKSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucGFyZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXBhcmVudCcpID09PSB0aGlzLl9jb25maWcucGFyZW50XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQ09MTEFQU0UpXG4gICAgICAgIH0pXG5cbiAgICAgIGlmIChhY3RpdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBhY3RpdmVzID0gbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhY3RpdmVzKSB7XG4gICAgICBhY3RpdmVzRGF0YSA9ICQoYWN0aXZlcykubm90KHRoaXMuX3NlbGVjdG9yKS5kYXRhKERBVEFfS0VZKVxuICAgICAgaWYgKGFjdGl2ZXNEYXRhICYmIGFjdGl2ZXNEYXRhLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRFdmVudCA9ICQuRXZlbnQoRVZFTlRfU0hPVylcbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc3RhcnRFdmVudClcbiAgICBpZiAoc3RhcnRFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZXMpIHtcbiAgICAgIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKGFjdGl2ZXMpLm5vdCh0aGlzLl9zZWxlY3RvciksICdoaWRlJylcbiAgICAgIGlmICghYWN0aXZlc0RhdGEpIHtcbiAgICAgICAgJChhY3RpdmVzKS5kYXRhKERBVEFfS0VZLCBudWxsKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRSlcbiAgICAgIC5hZGRDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNJTkcpXG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAwXG5cbiAgICBpZiAodGhpcy5fdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgJCh0aGlzLl90cmlnZ2VyQXJyYXkpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNFRClcbiAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuICAgIH1cblxuICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyh0cnVlKVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgICAgIC5hZGRDbGFzcyhgJHtDTEFTU19OQU1FX0NPTExBUFNFfSAke0NMQVNTX05BTUVfU0hPV31gKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuXG4gICAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcoZmFsc2UpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihFVkVOVF9TSE9XTilcbiAgICB9XG5cbiAgICBjb25zdCBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpXG4gICAgY29uc3Qgc2Nyb2xsU2l6ZSA9IGBzY3JvbGwke2NhcGl0YWxpemVkRGltZW5zaW9ufWBcbiAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnRbc2Nyb2xsU2l6ZV19cHhgXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHxcbiAgICAgICEkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSAkLkV2ZW50KEVWRU5UX0hJREUpXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHN0YXJ0RXZlbnQpXG4gICAgaWYgKHN0YXJ0RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBgJHt0aGlzLl9lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2RpbWVuc2lvbl19cHhgXG5cbiAgICBVdGlsLnJlZmxvdyh0aGlzLl9lbGVtZW50KVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgLmFkZENsYXNzKENMQVNTX05BTUVfQ09MTEFQU0lORylcbiAgICAgIC5yZW1vdmVDbGFzcyhgJHtDTEFTU19OQU1FX0NPTExBUFNFfSAke0NMQVNTX05BTUVfU0hPV31gKVxuXG4gICAgY29uc3QgdHJpZ2dlckFycmF5TGVuZ3RoID0gdGhpcy5fdHJpZ2dlckFycmF5Lmxlbmd0aFxuICAgIGlmICh0cmlnZ2VyQXJyYXlMZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyaWdnZXJBcnJheUxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRyaWdnZXIgPSB0aGlzLl90cmlnZ2VyQXJyYXlbaV1cbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodHJpZ2dlcilcblxuICAgICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCAkZWxlbSA9ICQoW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkpXG4gICAgICAgICAgaWYgKCEkZWxlbS5oYXNDbGFzcyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICAgICAgICAkKHRyaWdnZXIpLmFkZENsYXNzKENMQVNTX05BTUVfQ09MTEFQU0VEKVxuICAgICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyh0cnVlKVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcoZmFsc2UpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgICAgIC5hZGRDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNFKVxuICAgICAgICAudHJpZ2dlcihFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcbiAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgfVxuXG4gIHNldFRyYW5zaXRpb25pbmcoaXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gaXNUcmFuc2l0aW9uaW5nXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcblxuICAgIHRoaXMuX2NvbmZpZyAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9wYXJlbnQgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fZWxlbWVudCAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX3RyaWdnZXJBcnJheSAgICA9IG51bGxcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuICAgIGNvbmZpZy50b2dnbGUgPSBCb29sZWFuKGNvbmZpZy50b2dnbGUpIC8vIENvZXJjZSBzdHJpbmcgdmFsdWVzXG4gICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGltZW5zaW9uKCkge1xuICAgIGNvbnN0IGhhc1dpZHRoID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhESU1FTlNJT05fV0lEVEgpXG4gICAgcmV0dXJuIGhhc1dpZHRoID8gRElNRU5TSU9OX1dJRFRIIDogRElNRU5TSU9OX0hFSUdIVFxuICB9XG5cbiAgX2dldFBhcmVudCgpIHtcbiAgICBsZXQgcGFyZW50XG5cbiAgICBpZiAoVXRpbC5pc0VsZW1lbnQodGhpcy5fY29uZmlnLnBhcmVudCkpIHtcbiAgICAgIHBhcmVudCA9IHRoaXMuX2NvbmZpZy5wYXJlbnRcblxuICAgICAgLy8gSXQncyBhIGpRdWVyeSBvYmplY3RcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnBhcmVudC5qcXVlcnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHBhcmVudCA9IHRoaXMuX2NvbmZpZy5wYXJlbnRbMF1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9jb25maWcucGFyZW50KVxuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdG9yID0gYFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2RhdGEtcGFyZW50PVwiJHt0aGlzLl9jb25maWcucGFyZW50fVwiXWBcbiAgICBjb25zdCBjaGlsZHJlbiA9IFtdLnNsaWNlLmNhbGwocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKVxuXG4gICAgJChjaGlsZHJlbikuZWFjaCgoaSwgZWxlbWVudCkgPT4ge1xuICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFxuICAgICAgICBDb2xsYXBzZS5fZ2V0VGFyZ2V0RnJvbUVsZW1lbnQoZWxlbWVudCksXG4gICAgICAgIFtlbGVtZW50XVxuICAgICAgKVxuICAgIH0pXG5cbiAgICByZXR1cm4gcGFyZW50XG4gIH1cblxuICBfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKGVsZW1lbnQsIHRyaWdnZXJBcnJheSkge1xuICAgIGNvbnN0IGlzT3BlbiA9ICQoZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgaWYgKHRyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgICQodHJpZ2dlckFycmF5KVxuICAgICAgICAudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRUQsICFpc09wZW4pXG4gICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfZ2V0VGFyZ2V0RnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpXG4gICAgcmV0dXJuIHNlbGVjdG9yID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOiBudWxsXG4gIH1cblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0ICR0aGlzICAgPSAkKHRoaXMpXG4gICAgICBsZXQgZGF0YSAgICAgID0gJHRoaXMuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB7XG4gICAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAgIC4uLiR0aGlzLmRhdGEoKSxcbiAgICAgICAgLi4udHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge31cbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhICYmIF9jb25maWcudG9nZ2xlICYmIHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnICYmIC9zaG93fGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgICBfY29uZmlnLnRvZ2dsZSA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IENvbGxhcHNlKHRoaXMsIF9jb25maWcpXG4gICAgICAgICR0aGlzLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJChkb2N1bWVudCkub24oRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy8gcHJldmVudERlZmF1bHQgb25seSBmb3IgPGE+IGVsZW1lbnRzICh3aGljaCBjaGFuZ2UgdGhlIFVSTCkgbm90IGluc2lkZSB0aGUgY29sbGFwc2libGUgZWxlbWVudFxuICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC50YWdOYW1lID09PSAnQScpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBjb25zdCAkdHJpZ2dlciA9ICQodGhpcylcbiAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcylcbiAgY29uc3Qgc2VsZWN0b3JzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSlcblxuICAkKHNlbGVjdG9ycykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgJHRhcmdldCA9ICQodGhpcylcbiAgICBjb25zdCBkYXRhICAgID0gJHRhcmdldC5kYXRhKERBVEFfS0VZKVxuICAgIGNvbnN0IGNvbmZpZyAgPSBkYXRhID8gJ3RvZ2dsZScgOiAkdHJpZ2dlci5kYXRhKClcbiAgICBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJHRhcmdldCwgY29uZmlnKVxuICB9KVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBDb2xsYXBzZVxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNlXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjUuMik6IGRyb3Bkb3duLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFBvcHBlciBmcm9tICdwb3BwZXIuanMnXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICAgICAgICA9ICdkcm9wZG93bidcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICAgICAgICA9ICc0LjUuMidcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICAgICAgICA9ICdicy5kcm9wZG93bidcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgICAgICAgICAgICAgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICAgICAgID0gJC5mbltOQU1FXVxuY29uc3QgRVNDQVBFX0tFWUNPREUgICAgICAgICAgID0gMjcgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgRXNjYXBlIChFc2MpIGtleVxuY29uc3QgU1BBQ0VfS0VZQ09ERSAgICAgICAgICAgID0gMzIgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3Igc3BhY2Uga2V5XG5jb25zdCBUQUJfS0VZQ09ERSAgICAgICAgICAgICAgPSA5IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIHRhYiBrZXlcbmNvbnN0IEFSUk9XX1VQX0tFWUNPREUgICAgICAgICA9IDM4IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIHVwIGFycm93IGtleVxuY29uc3QgQVJST1dfRE9XTl9LRVlDT0RFICAgICAgID0gNDAgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgZG93biBhcnJvdyBrZXlcbmNvbnN0IFJJR0hUX01PVVNFX0JVVFRPTl9XSElDSCA9IDMgLy8gTW91c2VFdmVudC53aGljaCB2YWx1ZSBmb3IgdGhlIHJpZ2h0IGJ1dHRvbiAoYXNzdW1pbmcgYSByaWdodC1oYW5kZWQgbW91c2UpXG5jb25zdCBSRUdFWFBfS0VZRE9XTiAgICAgICAgICAgPSBuZXcgUmVnRXhwKGAke0FSUk9XX1VQX0tFWUNPREV9fCR7QVJST1dfRE9XTl9LRVlDT0RFfXwke0VTQ0FQRV9LRVlDT0RFfWApXG5cbmNvbnN0IEVWRU5UX0hJREUgICAgICAgICAgICAgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiAgICAgICAgICAgPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPVyAgICAgICAgICAgICA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gICAgICAgICAgICA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLICAgICAgICAgICAgPSBgY2xpY2ske0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSAgID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSA9IGBrZXlkb3duJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfS0VZVVBfREFUQV9BUEkgICA9IGBrZXl1cCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9ESVNBQkxFRCAgICAgICAgPSAnZGlzYWJsZWQnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgICAgICAgICAgICA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QVVAgICAgICAgICAgPSAnZHJvcHVwJ1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QUklHSFQgICAgICAgPSAnZHJvcHJpZ2h0J1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QTEVGVCAgICAgICAgPSAnZHJvcGxlZnQnXG5jb25zdCBDTEFTU19OQU1FX01FTlVSSUdIVCAgICAgICA9ICdkcm9wZG93bi1tZW51LXJpZ2h0J1xuY29uc3QgQ0xBU1NfTkFNRV9QT1NJVElPTl9TVEFUSUMgPSAncG9zaXRpb24tc3RhdGljJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSAgID0gJ1tkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJdJ1xuY29uc3QgU0VMRUNUT1JfRk9STV9DSElMRCAgICA9ICcuZHJvcGRvd24gZm9ybSdcbmNvbnN0IFNFTEVDVE9SX01FTlUgICAgICAgICAgPSAnLmRyb3Bkb3duLW1lbnUnXG5jb25zdCBTRUxFQ1RPUl9OQVZCQVJfTkFWICAgID0gJy5uYXZiYXItbmF2J1xuY29uc3QgU0VMRUNUT1JfVklTSUJMRV9JVEVNUyA9ICcuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSdcblxuY29uc3QgUExBQ0VNRU5UX1RPUCAgICAgICA9ICd0b3Atc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfVE9QRU5EICAgID0gJ3RvcC1lbmQnXG5jb25zdCBQTEFDRU1FTlRfQk9UVE9NICAgID0gJ2JvdHRvbS1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9CT1RUT01FTkQgPSAnYm90dG9tLWVuZCdcbmNvbnN0IFBMQUNFTUVOVF9SSUdIVCAgICAgPSAncmlnaHQtc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfTEVGVCAgICAgID0gJ2xlZnQtc3RhcnQnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIG9mZnNldCAgICAgICA6IDAsXG4gIGZsaXAgICAgICAgICA6IHRydWUsXG4gIGJvdW5kYXJ5ICAgICA6ICdzY3JvbGxQYXJlbnQnLFxuICByZWZlcmVuY2UgICAgOiAndG9nZ2xlJyxcbiAgZGlzcGxheSAgICAgIDogJ2R5bmFtaWMnLFxuICBwb3BwZXJDb25maWcgOiBudWxsXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBvZmZzZXQgICAgICAgOiAnKG51bWJlcnxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgZmxpcCAgICAgICAgIDogJ2Jvb2xlYW4nLFxuICBib3VuZGFyeSAgICAgOiAnKHN0cmluZ3xlbGVtZW50KScsXG4gIHJlZmVyZW5jZSAgICA6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgZGlzcGxheSAgICAgIDogJ3N0cmluZycsXG4gIHBvcHBlckNvbmZpZyA6ICcobnVsbHxvYmplY3QpJ1xufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgRHJvcGRvd24ge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICB0aGlzLl9lbGVtZW50ICA9IGVsZW1lbnRcbiAgICB0aGlzLl9wb3BwZXIgICA9IG51bGxcbiAgICB0aGlzLl9jb25maWcgICA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fbWVudSAgICAgPSB0aGlzLl9nZXRNZW51RWxlbWVudCgpXG4gICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKVxuXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LmRpc2FibGVkIHx8ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9ESVNBQkxFRCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzQWN0aXZlID0gJCh0aGlzLl9tZW51KS5oYXNDbGFzcyhDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBEcm9wZG93bi5fY2xlYXJNZW51cygpXG5cbiAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuc2hvdyh0cnVlKVxuICB9XG5cbiAgc2hvdyh1c2VQb3BwZXIgPSBmYWxzZSkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LmRpc2FibGVkIHx8ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9ESVNBQkxFRCkgfHwgJCh0aGlzLl9tZW51KS5oYXNDbGFzcyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH1cbiAgICBjb25zdCBzaG93RXZlbnQgPSAkLkV2ZW50KEVWRU5UX1NIT1csIHJlbGF0ZWRUYXJnZXQpXG4gICAgY29uc3QgcGFyZW50ID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAkKHBhcmVudCkudHJpZ2dlcihzaG93RXZlbnQpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlIHRvdGFsbHkgUG9wcGVyLmpzIGZvciBEcm9wZG93biBpbiBOYXZiYXJcbiAgICBpZiAoIXRoaXMuX2luTmF2YmFyICYmIHVzZVBvcHBlcikge1xuICAgICAgLyoqXG4gICAgICAgKiBDaGVjayBmb3IgUG9wcGVyIGRlcGVuZGVuY3lcbiAgICAgICAqIFBvcHBlciAtIGh0dHBzOi8vcG9wcGVyLmpzLm9yZ1xuICAgICAgICovXG4gICAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyBkcm9wZG93bnMgcmVxdWlyZSBQb3BwZXIuanMgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZy8pJylcbiAgICAgIH1cblxuICAgICAgbGV0IHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAncGFyZW50Jykge1xuICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gcGFyZW50XG4gICAgICB9IGVsc2UgaWYgKFV0aWwuaXNFbGVtZW50KHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpKSB7XG4gICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9jb25maWcucmVmZXJlbmNlXG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBqUXVlcnkgZWxlbWVudFxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UuanF1ZXJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9jb25maWcucmVmZXJlbmNlWzBdXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgYm91bmRhcnkgaXMgbm90IGBzY3JvbGxQYXJlbnRgLCB0aGVuIHNldCBwb3NpdGlvbiB0byBgc3RhdGljYFxuICAgICAgLy8gdG8gYWxsb3cgdGhlIG1lbnUgdG8gXCJlc2NhcGVcIiB0aGUgc2Nyb2xsIHBhcmVudCdzIGJvdW5kYXJpZXNcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMjQyNTFcbiAgICAgIGlmICh0aGlzLl9jb25maWcuYm91bmRhcnkgIT09ICdzY3JvbGxQYXJlbnQnKSB7XG4gICAgICAgICQocGFyZW50KS5hZGRDbGFzcyhDTEFTU19OQU1FX1BPU0lUSU9OX1NUQVRJQylcbiAgICAgIH1cbiAgICAgIHRoaXMuX3BvcHBlciA9IG5ldyBQb3BwZXIocmVmZXJlbmNlRWxlbWVudCwgdGhpcy5fbWVudSwgdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKCkpXG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG4gICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmXG4gICAgICAgICQocGFyZW50KS5jbG9zZXN0KFNFTEVDVE9SX05BVkJBUl9OQVYpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgJChkb2N1bWVudC5ib2R5KS5jaGlsZHJlbigpLm9uKCdtb3VzZW92ZXInLCBudWxsLCAkLm5vb3ApXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuXG4gICAgJCh0aGlzLl9tZW51KS50b2dnbGVDbGFzcyhDTEFTU19OQU1FX1NIT1cpXG4gICAgJChwYXJlbnQpXG4gICAgICAudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgLnRyaWdnZXIoJC5FdmVudChFVkVOVF9TSE9XTiwgcmVsYXRlZFRhcmdldCkpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LmRpc2FibGVkIHx8ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9ESVNBQkxFRCkgfHwgISQodGhpcy5fbWVudSkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9XG4gICAgY29uc3QgaGlkZUV2ZW50ID0gJC5FdmVudChFVkVOVF9ISURFLCByZWxhdGVkVGFyZ2V0KVxuICAgIGNvbnN0IHBhcmVudCA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgJChwYXJlbnQpLnRyaWdnZXIoaGlkZUV2ZW50KVxuXG4gICAgaWYgKGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgIH1cblxuICAgICQodGhpcy5fbWVudSkudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICQocGFyZW50KVxuICAgICAgLnRvZ2dsZUNsYXNzKENMQVNTX05BTUVfU0hPVylcbiAgICAgIC50cmlnZ2VyKCQuRXZlbnQoRVZFTlRfSElEREVOLCByZWxhdGVkVGFyZ2V0KSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEVWRU5UX0tFWSlcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX21lbnUgPSBudWxsXG4gICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG4gICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fcG9wcGVyLnNjaGVkdWxlVXBkYXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICQodGhpcy5fZWxlbWVudCkub24oRVZFTlRfQ0xJQ0ssIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIHRoaXMudG9nZ2xlKClcbiAgICB9KVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsXG4gICAgICAuLi4kKHRoaXMuX2VsZW1lbnQpLmRhdGEoKSxcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH1cblxuICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKFxuICAgICAgTkFNRSxcbiAgICAgIGNvbmZpZyxcbiAgICAgIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGVcbiAgICApXG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0TWVudUVsZW1lbnQoKSB7XG4gICAgaWYgKCF0aGlzLl9tZW51KSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICB0aGlzLl9tZW51ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JfTUVOVSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX21lbnVcbiAgfVxuXG4gIF9nZXRQbGFjZW1lbnQoKSB7XG4gICAgY29uc3QgJHBhcmVudERyb3Bkb3duID0gJCh0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUpXG4gICAgbGV0IHBsYWNlbWVudCA9IFBMQUNFTUVOVF9CT1RUT01cblxuICAgIC8vIEhhbmRsZSBkcm9wdXBcbiAgICBpZiAoJHBhcmVudERyb3Bkb3duLmhhc0NsYXNzKENMQVNTX05BTUVfRFJPUFVQKSkge1xuICAgICAgcGxhY2VtZW50ID0gJCh0aGlzLl9tZW51KS5oYXNDbGFzcyhDTEFTU19OQU1FX01FTlVSSUdIVClcbiAgICAgICAgPyBQTEFDRU1FTlRfVE9QRU5EXG4gICAgICAgIDogUExBQ0VNRU5UX1RPUFxuICAgIH0gZWxzZSBpZiAoJHBhcmVudERyb3Bkb3duLmhhc0NsYXNzKENMQVNTX05BTUVfRFJPUFJJR0hUKSkge1xuICAgICAgcGxhY2VtZW50ID0gUExBQ0VNRU5UX1JJR0hUXG4gICAgfSBlbHNlIGlmICgkcGFyZW50RHJvcGRvd24uaGFzQ2xhc3MoQ0xBU1NfTkFNRV9EUk9QTEVGVCkpIHtcbiAgICAgIHBsYWNlbWVudCA9IFBMQUNFTUVOVF9MRUZUXG4gICAgfSBlbHNlIGlmICgkKHRoaXMuX21lbnUpLmhhc0NsYXNzKENMQVNTX05BTUVfTUVOVVJJR0hUKSkge1xuICAgICAgcGxhY2VtZW50ID0gUExBQ0VNRU5UX0JPVFRPTUVORFxuICAgIH1cbiAgICByZXR1cm4gcGxhY2VtZW50XG4gIH1cblxuICBfZGV0ZWN0TmF2YmFyKCkge1xuICAgIHJldHVybiAkKHRoaXMuX2VsZW1lbnQpLmNsb3Nlc3QoJy5uYXZiYXInKS5sZW5ndGggPiAwXG4gIH1cblxuICBfZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IG9mZnNldCA9IHt9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5vZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9mZnNldC5mbiA9IChkYXRhKSA9PiB7XG4gICAgICAgIGRhdGEub2Zmc2V0cyA9IHtcbiAgICAgICAgICAuLi5kYXRhLm9mZnNldHMsXG4gICAgICAgICAgLi4udGhpcy5fY29uZmlnLm9mZnNldChkYXRhLm9mZnNldHMsIHRoaXMuX2VsZW1lbnQpIHx8IHt9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvZmZzZXQub2Zmc2V0ID0gdGhpcy5fY29uZmlnLm9mZnNldFxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRcbiAgfVxuXG4gIF9nZXRQb3BwZXJDb25maWcoKSB7XG4gICAgY29uc3QgcG9wcGVyQ29uZmlnID0ge1xuICAgICAgcGxhY2VtZW50OiB0aGlzLl9nZXRQbGFjZW1lbnQoKSxcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpLFxuICAgICAgICBmbGlwOiB7XG4gICAgICAgICAgZW5hYmxlZDogdGhpcy5fY29uZmlnLmZsaXBcbiAgICAgICAgfSxcbiAgICAgICAgcHJldmVudE92ZXJmbG93OiB7XG4gICAgICAgICAgYm91bmRhcmllc0VsZW1lbnQ6IHRoaXMuX2NvbmZpZy5ib3VuZGFyeVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSBQb3BwZXIuanMgaWYgd2UgaGF2ZSBhIHN0YXRpYyBkaXNwbGF5XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5kaXNwbGF5ID09PSAnc3RhdGljJykge1xuICAgICAgcG9wcGVyQ29uZmlnLm1vZGlmaWVycy5hcHBseVN0eWxlID0ge1xuICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5wb3BwZXJDb25maWcsXG4gICAgICAuLi50aGlzLl9jb25maWcucG9wcGVyQ29uZmlnXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IG51bGxcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgRHJvcGRvd24odGhpcywgX2NvbmZpZylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBfY2xlYXJNZW51cyhldmVudCkge1xuICAgIGlmIChldmVudCAmJiAoZXZlbnQud2hpY2ggPT09IFJJR0hUX01PVVNFX0JVVFRPTl9XSElDSCB8fFxuICAgICAgZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC53aGljaCAhPT0gVEFCX0tFWUNPREUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGVzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX0RBVEFfVE9HR0xFKSlcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0b2dnbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodG9nZ2xlc1tpXSlcbiAgICAgIGNvbnN0IGNvbnRleHQgPSAkKHRvZ2dsZXNbaV0pLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiB0b2dnbGVzW2ldXG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudCAmJiBldmVudC50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQuY2xpY2tFdmVudCA9IGV2ZW50XG4gICAgICB9XG5cbiAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkcm9wZG93bk1lbnUgPSBjb250ZXh0Ll9tZW51XG4gICAgICBpZiAoISQocGFyZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJyAmJlxuICAgICAgICAgIC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpIHx8IGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQud2hpY2ggPT09IFRBQl9LRVlDT0RFKSAmJlxuICAgICAgICAgICQuY29udGFpbnMocGFyZW50LCBldmVudC50YXJnZXQpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhpZGVFdmVudCA9ICQuRXZlbnQoRVZFTlRfSElERSwgcmVsYXRlZFRhcmdldClcbiAgICAgICQocGFyZW50KS50cmlnZ2VyKGhpZGVFdmVudClcbiAgICAgIGlmIChoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkuY2hpbGRyZW4oKS5vZmYoJ21vdXNlb3ZlcicsIG51bGwsICQubm9vcClcbiAgICAgIH1cblxuICAgICAgdG9nZ2xlc1tpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxuXG4gICAgICBpZiAoY29udGV4dC5fcG9wcGVyKSB7XG4gICAgICAgIGNvbnRleHQuX3BvcHBlci5kZXN0cm95KClcbiAgICAgIH1cblxuICAgICAgJChkcm9wZG93bk1lbnUpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfU0hPVylcbiAgICAgICQocGFyZW50KVxuICAgICAgICAucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgICAudHJpZ2dlcigkLkV2ZW50KEVWRU5UX0hJRERFTiwgcmVsYXRlZFRhcmdldCkpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIF9nZXRQYXJlbnRGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgbGV0IHBhcmVudFxuICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpXG5cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudCB8fCBlbGVtZW50LnBhcmVudE5vZGVcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG4gIHN0YXRpYyBfZGF0YUFwaUtleWRvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgLy8gSWYgbm90IGlucHV0L3RleHRhcmVhOlxuICAgIC8vICAtIEFuZCBub3QgYSBrZXkgaW4gUkVHRVhQX0tFWURPV04gPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIC8vIElmIGlucHV0L3RleHRhcmVhOlxuICAgIC8vICAtIElmIHNwYWNlIGtleSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gIC0gSWYga2V5IGlzIG90aGVyIHRoYW4gZXNjYXBlXG4gICAgLy8gICAgLSBJZiBrZXkgaXMgbm90IHVwIG9yIGRvd24gPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIC8vICAgIC0gSWYgdHJpZ2dlciBpbnNpZGUgdGhlIG1lbnUgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIGlmICgvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKVxuICAgICAgPyBldmVudC53aGljaCA9PT0gU1BBQ0VfS0VZQ09ERSB8fCBldmVudC53aGljaCAhPT0gRVNDQVBFX0tFWUNPREUgJiZcbiAgICAgIChldmVudC53aGljaCAhPT0gQVJST1dfRE9XTl9LRVlDT0RFICYmIGV2ZW50LndoaWNoICE9PSBBUlJPV19VUF9LRVlDT0RFIHx8XG4gICAgICAgICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KFNFTEVDVE9SX01FTlUpLmxlbmd0aCkgOiAhUkVHRVhQX0tFWURPV04udGVzdChldmVudC53aGljaCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8ICQodGhpcykuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9ESVNBQkxFRCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudCAgID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRoaXMpXG4gICAgY29uc3QgaXNBY3RpdmUgPSAkKHBhcmVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgaWYgKCFpc0FjdGl2ZSAmJiBldmVudC53aGljaCA9PT0gRVNDQVBFX0tFWUNPREUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgaWYgKCFpc0FjdGl2ZSB8fCBpc0FjdGl2ZSAmJiAoZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFIHx8IGV2ZW50LndoaWNoID09PSBTUEFDRV9LRVlDT0RFKSkge1xuICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBFU0NBUEVfS0VZQ09ERSkge1xuICAgICAgICAkKHBhcmVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SX0RBVEFfVE9HR0xFKSkudHJpZ2dlcignZm9jdXMnKVxuICAgICAgfVxuXG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ2NsaWNrJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zID0gW10uc2xpY2UuY2FsbChwYXJlbnQucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUl9WSVNJQkxFX0lURU1TKSlcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+ICQoaXRlbSkuaXMoJzp2aXNpYmxlJykpXG5cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgaW5kZXggPSBpdGVtcy5pbmRleE9mKGV2ZW50LnRhcmdldClcblxuICAgIGlmIChldmVudC53aGljaCA9PT0gQVJST1dfVVBfS0VZQ09ERSAmJiBpbmRleCA+IDApIHsgLy8gVXBcbiAgICAgIGluZGV4LS1cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQud2hpY2ggPT09IEFSUk9XX0RPV05fS0VZQ09ERSAmJiBpbmRleCA8IGl0ZW1zLmxlbmd0aCAtIDEpIHsgLy8gRG93blxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgIGluZGV4ID0gMFxuICAgIH1cblxuICAgIGl0ZW1zW2luZGV4XS5mb2N1cygpXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kKGRvY3VtZW50KVxuICAub24oRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIERyb3Bkb3duLl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG4gIC5vbihFVkVOVF9LRVlET1dOX0RBVEFfQVBJLCBTRUxFQ1RPUl9NRU5VLCBEcm9wZG93bi5fZGF0YUFwaUtleWRvd25IYW5kbGVyKVxuICAub24oYCR7RVZFTlRfQ0xJQ0tfREFUQV9BUEl9ICR7RVZFTlRfS0VZVVBfREFUQV9BUEl9YCwgRHJvcGRvd24uX2NsZWFyTWVudXMpXG4gIC5vbihFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAndG9nZ2xlJylcbiAgfSlcbiAgLm9uKEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9GT1JNX0NISUxELCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgfSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBEcm9wZG93blxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjUuMik6IHV0aWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQcml2YXRlIFRyYW5zaXRpb25FbmQgSGVscGVyc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgVFJBTlNJVElPTl9FTkQgPSAndHJhbnNpdGlvbmVuZCdcbmNvbnN0IE1BWF9VSUQgPSAxMDAwMDAwXG5jb25zdCBNSUxMSVNFQ09ORFNfTVVMVElQTElFUiA9IDEwMDBcblxuLy8gU2hvdXRvdXQgQW5ndXNDcm9sbCAoaHR0cHM6Ly9nb28uZ2wvcHh3UUdwKVxuZnVuY3Rpb24gdG9UeXBlKG9iaikge1xuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGAke29ian1gXG4gIH1cblxuICByZXR1cm4ge30udG9TdHJpbmcuY2FsbChvYmopLm1hdGNoKC9cXHMoW2Etel0rKS9pKVsxXS50b0xvd2VyQ2FzZSgpXG59XG5cbmZ1bmN0aW9uIGdldFNwZWNpYWxUcmFuc2l0aW9uRW5kRXZlbnQoKSB7XG4gIHJldHVybiB7XG4gICAgYmluZFR5cGU6IFRSQU5TSVRJT05fRU5ELFxuICAgIGRlbGVnYXRlVHlwZTogVFJBTlNJVElPTl9FTkQsXG4gICAgaGFuZGxlKGV2ZW50KSB7XG4gICAgICBpZiAoJChldmVudC50YXJnZXQpLmlzKHRoaXMpKSB7XG4gICAgICAgIHJldHVybiBldmVudC5oYW5kbGVPYmouaGFuZGxlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgICB9XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb25FbmRFbXVsYXRvcihkdXJhdGlvbikge1xuICBsZXQgY2FsbGVkID0gZmFsc2VcblxuICAkKHRoaXMpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCAoKSA9PiB7XG4gICAgY2FsbGVkID0gdHJ1ZVxuICB9KVxuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmICghY2FsbGVkKSB7XG4gICAgICBVdGlsLnRyaWdnZXJUcmFuc2l0aW9uRW5kKHRoaXMpXG4gICAgfVxuICB9LCBkdXJhdGlvbilcblxuICByZXR1cm4gdGhpc1xufVxuXG5mdW5jdGlvbiBzZXRUcmFuc2l0aW9uRW5kU3VwcG9ydCgpIHtcbiAgJC5mbi5lbXVsYXRlVHJhbnNpdGlvbkVuZCA9IHRyYW5zaXRpb25FbmRFbXVsYXRvclxuICAkLmV2ZW50LnNwZWNpYWxbVXRpbC5UUkFOU0lUSU9OX0VORF0gPSBnZXRTcGVjaWFsVHJhbnNpdGlvbkVuZEV2ZW50KClcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUHVibGljIFV0aWwgQXBpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IFV0aWwgPSB7XG4gIFRSQU5TSVRJT05fRU5EOiAnYnNUcmFuc2l0aW9uRW5kJyxcblxuICBnZXRVSUQocHJlZml4KSB7XG4gICAgZG8ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICAgIHByZWZpeCArPSB+fihNYXRoLnJhbmRvbSgpICogTUFYX1VJRCkgLy8gXCJ+flwiIGFjdHMgbGlrZSBhIGZhc3RlciBNYXRoLmZsb29yKCkgaGVyZVxuICAgIH0gd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCkpXG4gICAgcmV0dXJuIHByZWZpeFxuICB9LFxuXG4gIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGxldCBzZWxlY3RvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpXG5cbiAgICBpZiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSAnIycpIHtcbiAgICAgIGNvbnN0IGhyZWZBdHRyID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgc2VsZWN0b3IgPSBocmVmQXR0ciAmJiBocmVmQXR0ciAhPT0gJyMnID8gaHJlZkF0dHIudHJpbSgpIDogJydcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBudWxsXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfSxcblxuICBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cblxuICAgIC8vIEdldCB0cmFuc2l0aW9uLWR1cmF0aW9uIG9mIHRoZSBlbGVtZW50XG4gICAgbGV0IHRyYW5zaXRpb25EdXJhdGlvbiA9ICQoZWxlbWVudCkuY3NzKCd0cmFuc2l0aW9uLWR1cmF0aW9uJylcbiAgICBsZXQgdHJhbnNpdGlvbkRlbGF5ID0gJChlbGVtZW50KS5jc3MoJ3RyYW5zaXRpb24tZGVsYXknKVxuXG4gICAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gPSBwYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICBjb25zdCBmbG9hdFRyYW5zaXRpb25EZWxheSA9IHBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KVxuXG4gICAgLy8gUmV0dXJuIDAgaWYgZWxlbWVudCBvciB0cmFuc2l0aW9uIGR1cmF0aW9uIGlzIG5vdCBmb3VuZFxuICAgIGlmICghZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gJiYgIWZsb2F0VHJhbnNpdGlvbkRlbGF5KSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cblxuICAgIC8vIElmIG11bHRpcGxlIGR1cmF0aW9ucyBhcmUgZGVmaW5lZCwgdGFrZSB0aGUgZmlyc3RcbiAgICB0cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb24uc3BsaXQoJywnKVswXVxuICAgIHRyYW5zaXRpb25EZWxheSA9IHRyYW5zaXRpb25EZWxheS5zcGxpdCgnLCcpWzBdXG5cbiAgICByZXR1cm4gKHBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKSArIHBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KSkgKiBNSUxMSVNFQ09ORFNfTVVMVElQTElFUlxuICB9LFxuXG4gIHJlZmxvdyhlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gIH0sXG5cbiAgdHJpZ2dlclRyYW5zaXRpb25FbmQoZWxlbWVudCkge1xuICAgICQoZWxlbWVudCkudHJpZ2dlcihUUkFOU0lUSU9OX0VORClcbiAgfSxcblxuICAvLyBUT0RPOiBSZW1vdmUgaW4gdjVcbiAgc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkge1xuICAgIHJldHVybiBCb29sZWFuKFRSQU5TSVRJT05fRU5EKVxuICB9LFxuXG4gIGlzRWxlbWVudChvYmopIHtcbiAgICByZXR1cm4gKG9ialswXSB8fCBvYmopLm5vZGVUeXBlXG4gIH0sXG5cbiAgdHlwZUNoZWNrQ29uZmlnKGNvbXBvbmVudE5hbWUsIGNvbmZpZywgY29uZmlnVHlwZXMpIHtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIGNvbmZpZ1R5cGVzKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZ1R5cGVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRUeXBlcyA9IGNvbmZpZ1R5cGVzW3Byb3BlcnR5XVxuICAgICAgICBjb25zdCB2YWx1ZSAgICAgICAgID0gY29uZmlnW3Byb3BlcnR5XVxuICAgICAgICBjb25zdCB2YWx1ZVR5cGUgICAgID0gdmFsdWUgJiYgVXRpbC5pc0VsZW1lbnQodmFsdWUpXG4gICAgICAgICAgPyAnZWxlbWVudCcgOiB0b1R5cGUodmFsdWUpXG5cbiAgICAgICAgaWYgKCFuZXcgUmVnRXhwKGV4cGVjdGVkVHlwZXMpLnRlc3QodmFsdWVUeXBlKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGAke2NvbXBvbmVudE5hbWUudG9VcHBlckNhc2UoKX06IGAgK1xuICAgICAgICAgICAgYE9wdGlvbiBcIiR7cHJvcGVydHl9XCIgcHJvdmlkZWQgdHlwZSBcIiR7dmFsdWVUeXBlfVwiIGAgK1xuICAgICAgICAgICAgYGJ1dCBleHBlY3RlZCB0eXBlIFwiJHtleHBlY3RlZFR5cGVzfVwiLmApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgZmluZFNoYWRvd1Jvb3QoZWxlbWVudCkge1xuICAgIGlmICghZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmF0dGFjaFNoYWRvdykge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyBDYW4gZmluZCB0aGUgc2hhZG93IHJvb3Qgb3RoZXJ3aXNlIGl0J2xsIHJldHVybiB0aGUgZG9jdW1lbnRcbiAgICBpZiAodHlwZW9mIGVsZW1lbnQuZ2V0Um9vdE5vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IHJvb3QgPSBlbGVtZW50LmdldFJvb3ROb2RlKClcbiAgICAgIHJldHVybiByb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IHJvb3QgOiBudWxsXG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG4gICAgICByZXR1cm4gZWxlbWVudFxuICAgIH1cblxuICAgIC8vIHdoZW4gd2UgZG9uJ3QgZmluZCBhIHNoYWRvdyByb290XG4gICAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIFV0aWwuZmluZFNoYWRvd1Jvb3QoZWxlbWVudC5wYXJlbnROb2RlKVxuICB9LFxuXG4gIGpRdWVyeURldGVjdGlvbigpIHtcbiAgICBpZiAodHlwZW9mICQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIEphdmFTY3JpcHQgcmVxdWlyZXMgalF1ZXJ5LiBqUXVlcnkgbXVzdCBiZSBpbmNsdWRlZCBiZWZvcmUgQm9vdHN0cmFwXFwncyBKYXZhU2NyaXB0LicpXG4gICAgfVxuXG4gICAgY29uc3QgdmVyc2lvbiA9ICQuZm4uanF1ZXJ5LnNwbGl0KCcgJylbMF0uc3BsaXQoJy4nKVxuICAgIGNvbnN0IG1pbk1ham9yID0gMVxuICAgIGNvbnN0IGx0TWFqb3IgPSAyXG4gICAgY29uc3QgbWluTWlub3IgPSA5XG4gICAgY29uc3QgbWluUGF0Y2ggPSAxXG4gICAgY29uc3QgbWF4TWFqb3IgPSA0XG5cbiAgICBpZiAodmVyc2lvblswXSA8IGx0TWFqb3IgJiYgdmVyc2lvblsxXSA8IG1pbk1pbm9yIHx8IHZlcnNpb25bMF0gPT09IG1pbk1ham9yICYmIHZlcnNpb25bMV0gPT09IG1pbk1pbm9yICYmIHZlcnNpb25bMl0gPCBtaW5QYXRjaCB8fCB2ZXJzaW9uWzBdID49IG1heE1ham9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgSmF2YVNjcmlwdCByZXF1aXJlcyBhdCBsZWFzdCBqUXVlcnkgdjEuOS4xIGJ1dCBsZXNzIHRoYW4gdjQuMC4wJylcbiAgICB9XG4gIH1cbn1cblxuVXRpbC5qUXVlcnlEZXRlY3Rpb24oKVxuc2V0VHJhbnNpdGlvbkVuZFN1cHBvcnQoKVxuXG5leHBvcnQgZGVmYXVsdCBVdGlsXG4iLCJleHBvcnQgZGVmYXVsdCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnO1xuIiwiaW1wb3J0IGlzQnJvd3NlciBmcm9tICcuL2lzQnJvd3Nlcic7XG5cbmNvbnN0IHRpbWVvdXREdXJhdGlvbiA9IChmdW5jdGlvbigpe1xuICBjb25zdCBsb25nZXJUaW1lb3V0QnJvd3NlcnMgPSBbJ0VkZ2UnLCAnVHJpZGVudCcsICdGaXJlZm94J107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbG9uZ2VyVGltZW91dEJyb3dzZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGlzQnJvd3NlciAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YobG9uZ2VyVGltZW91dEJyb3dzZXJzW2ldKSA+PSAwKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIDA7XG59KCkpO1xuXG5leHBvcnQgZnVuY3Rpb24gbWljcm90YXNrRGVib3VuY2UoZm4pIHtcbiAgbGV0IGNhbGxlZCA9IGZhbHNlXG4gIHJldHVybiAoKSA9PiB7XG4gICAgaWYgKGNhbGxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNhbGxlZCA9IHRydWVcbiAgICB3aW5kb3cuUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICBjYWxsZWQgPSBmYWxzZVxuICAgICAgZm4oKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhc2tEZWJvdW5jZShmbikge1xuICBsZXQgc2NoZWR1bGVkID0gZmFsc2U7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgaWYgKCFzY2hlZHVsZWQpIHtcbiAgICAgIHNjaGVkdWxlZCA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgIGZuKCk7XG4gICAgICB9LCB0aW1lb3V0RHVyYXRpb24pO1xuICAgIH1cbiAgfTtcbn1cblxuY29uc3Qgc3VwcG9ydHNNaWNyb1Rhc2tzID0gaXNCcm93c2VyICYmIHdpbmRvdy5Qcm9taXNlXG5cblxuLyoqXG4qIENyZWF0ZSBhIGRlYm91bmNlZCB2ZXJzaW9uIG9mIGEgbWV0aG9kLCB0aGF0J3MgYXN5bmNocm9ub3VzbHkgZGVmZXJyZWRcbiogYnV0IGNhbGxlZCBpbiB0aGUgbWluaW11bSB0aW1lIHBvc3NpYmxlLlxuKlxuKiBAbWV0aG9kXG4qIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiogQGFyZ3VtZW50IHtGdW5jdGlvbn0gZm5cbiogQHJldHVybnMge0Z1bmN0aW9ufVxuKi9cbmV4cG9ydCBkZWZhdWx0IChzdXBwb3J0c01pY3JvVGFza3NcbiAgPyBtaWNyb3Rhc2tEZWJvdW5jZVxuICA6IHRhc2tEZWJvdW5jZSk7XG4iLCIvKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhIGZ1bmN0aW9uXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0FueX0gZnVuY3Rpb25Ub0NoZWNrIC0gdmFyaWFibGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSBhbnN3ZXIgdG86IGlzIGEgZnVuY3Rpb24/XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuY3Rpb25Ub0NoZWNrKSB7XG4gIGNvbnN0IGdldFR5cGUgPSB7fTtcbiAgcmV0dXJuIChcbiAgICBmdW5jdGlvblRvQ2hlY2sgJiZcbiAgICBnZXRUeXBlLnRvU3RyaW5nLmNhbGwoZnVuY3Rpb25Ub0NoZWNrKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJ1xuICApO1xufVxuIiwiLyoqXG4gKiBHZXQgQ1NTIGNvbXB1dGVkIHByb3BlcnR5IG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VlbWVudH0gZWxlbWVudFxuICogQGFyZ3VtZW50IHtTdHJpbmd9IHByb3BlcnR5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50LCBwcm9wZXJ0eSkge1xuICBpZiAoZWxlbWVudC5ub2RlVHlwZSAhPT0gMSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICAvLyBOT1RFOiAxIERPTSBhY2Nlc3MgaGVyZVxuICBjb25zdCB3aW5kb3cgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gIGNvbnN0IGNzcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpO1xuICByZXR1cm4gcHJvcGVydHkgPyBjc3NbcHJvcGVydHldIDogY3NzO1xufVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSBwYXJlbnROb2RlIG9yIHRoZSBob3N0IG9mIHRoZSBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBwYXJlbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuICByZXR1cm4gZWxlbWVudC5wYXJlbnROb2RlIHx8IGVsZW1lbnQuaG9zdDtcbn1cbiIsImltcG9ydCBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgZnJvbSAnLi9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSAnLi9nZXRQYXJlbnROb2RlJztcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzY3JvbGxpbmcgcGFyZW50IG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBzY3JvbGwgcGFyZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudChlbGVtZW50KSB7XG4gIC8vIFJldHVybiBib2R5LCBgZ2V0U2Nyb2xsYCB3aWxsIHRha2UgY2FyZSB0byBnZXQgdGhlIGNvcnJlY3QgYHNjcm9sbFRvcGAgZnJvbSBpdFxuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keVxuICB9XG5cbiAgc3dpdGNoIChlbGVtZW50Lm5vZGVOYW1lKSB7XG4gICAgY2FzZSAnSFRNTCc6XG4gICAgY2FzZSAnQk9EWSc6XG4gICAgICByZXR1cm4gZWxlbWVudC5vd25lckRvY3VtZW50LmJvZHlcbiAgICBjYXNlICcjZG9jdW1lbnQnOlxuICAgICAgcmV0dXJuIGVsZW1lbnQuYm9keVxuICB9XG5cbiAgLy8gRmlyZWZveCB3YW50IHVzIHRvIGNoZWNrIGAteGAgYW5kIGAteWAgdmFyaWF0aW9ucyBhcyB3ZWxsXG4gIGNvbnN0IHsgb3ZlcmZsb3csIG92ZXJmbG93WCwgb3ZlcmZsb3dZIH0gPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCk7XG4gIGlmICgvKGF1dG98c2Nyb2xsfG92ZXJsYXkpLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKSkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKGVsZW1lbnQpKTtcbn1cbiIsIi8qKlxuICogUmV0dXJucyB0aGUgcmVmZXJlbmNlIG5vZGUgb2YgdGhlIHJlZmVyZW5jZSBvYmplY3QsIG9yIHRoZSByZWZlcmVuY2Ugb2JqZWN0IGl0c2VsZi5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7RWxlbWVudHxPYmplY3R9IHJlZmVyZW5jZSAtIHRoZSByZWZlcmVuY2UgZWxlbWVudCAodGhlIHBvcHBlciB3aWxsIGJlIHJlbGF0aXZlIHRvIHRoaXMpXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gcGFyZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlKSB7XG4gIHJldHVybiByZWZlcmVuY2UgJiYgcmVmZXJlbmNlLnJlZmVyZW5jZU5vZGUgPyByZWZlcmVuY2UucmVmZXJlbmNlTm9kZSA6IHJlZmVyZW5jZTtcbn1cbiIsImltcG9ydCBpc0Jyb3dzZXIgZnJvbSAnLi9pc0Jyb3dzZXInO1xuXG5jb25zdCBpc0lFMTEgPSBpc0Jyb3dzZXIgJiYgISEod2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmIGRvY3VtZW50LmRvY3VtZW50TW9kZSk7XG5jb25zdCBpc0lFMTAgPSBpc0Jyb3dzZXIgJiYgL01TSUUgMTAvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgYnJvd3NlciBpcyBJbnRlcm5ldCBFeHBsb3JlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtOdW1iZXJ9IHZlcnNpb24gdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSBpc0lFXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzSUUodmVyc2lvbikge1xuICBpZiAodmVyc2lvbiA9PT0gMTEpIHtcbiAgICByZXR1cm4gaXNJRTExO1xuICB9XG4gIGlmICh2ZXJzaW9uID09PSAxMCkge1xuICAgIHJldHVybiBpc0lFMTA7XG4gIH1cbiAgcmV0dXJuIGlzSUUxMSB8fCBpc0lFMTA7XG59XG4iLCJpbXBvcnQgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IGZyb20gJy4vZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5JztcbmltcG9ydCBpc0lFIGZyb20gJy4vaXNJRSc7XG4vKipcbiAqIFJldHVybnMgdGhlIG9mZnNldCBwYXJlbnQgb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IG9mZnNldCBwYXJlbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxuXG4gIGNvbnN0IG5vT2Zmc2V0UGFyZW50ID0gaXNJRSgxMCkgPyBkb2N1bWVudC5ib2R5IDogbnVsbDtcblxuICAvLyBOT1RFOiAxIERPTSBhY2Nlc3MgaGVyZVxuICBsZXQgb2Zmc2V0UGFyZW50ID0gZWxlbWVudC5vZmZzZXRQYXJlbnQgfHwgbnVsbDtcbiAgLy8gU2tpcCBoaWRkZW4gZWxlbWVudHMgd2hpY2ggZG9uJ3QgaGF2ZSBhbiBvZmZzZXRQYXJlbnRcbiAgd2hpbGUgKG9mZnNldFBhcmVudCA9PT0gbm9PZmZzZXRQYXJlbnQgJiYgZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICBvZmZzZXRQYXJlbnQgPSAoZWxlbWVudCA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKS5vZmZzZXRQYXJlbnQ7XG4gIH1cblxuICBjb25zdCBub2RlTmFtZSA9IG9mZnNldFBhcmVudCAmJiBvZmZzZXRQYXJlbnQubm9kZU5hbWU7XG5cbiAgaWYgKCFub2RlTmFtZSB8fCBub2RlTmFtZSA9PT0gJ0JPRFknIHx8IG5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICByZXR1cm4gZWxlbWVudCA/IGVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cblxuICAvLyAub2Zmc2V0UGFyZW50IHdpbGwgcmV0dXJuIHRoZSBjbG9zZXN0IFRILCBURCBvciBUQUJMRSBpbiBjYXNlXG4gIC8vIG5vIG9mZnNldFBhcmVudCBpcyBwcmVzZW50LCBJIGhhdGUgdGhpcyBqb2IuLi5cbiAgaWYgKFxuICAgIFsnVEgnLCAnVEQnLCAnVEFCTEUnXS5pbmRleE9mKG9mZnNldFBhcmVudC5ub2RlTmFtZSkgIT09IC0xICYmXG4gICAgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KG9mZnNldFBhcmVudCwgJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnXG4gICkge1xuICAgIHJldHVybiBnZXRPZmZzZXRQYXJlbnQob2Zmc2V0UGFyZW50KTtcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRQYXJlbnQ7XG59XG4iLCJpbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gJy4vZ2V0T2Zmc2V0UGFyZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNPZmZzZXRDb250YWluZXIoZWxlbWVudCkge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlbGVtZW50O1xuICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIG5vZGVOYW1lID09PSAnSFRNTCcgfHwgZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpID09PSBlbGVtZW50XG4gICk7XG59XG4iLCIvKipcbiAqIEZpbmRzIHRoZSByb290IG5vZGUgKGRvY3VtZW50LCBzaGFkb3dET00gcm9vdCkgb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gbm9kZVxuICogQHJldHVybnMge0VsZW1lbnR9IHJvb3Qgbm9kZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRSb290KG5vZGUpIHtcbiAgaWYgKG5vZGUucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHJldHVybiBnZXRSb290KG5vZGUucGFyZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn1cbiIsImltcG9ydCBpc09mZnNldENvbnRhaW5lciBmcm9tICcuL2lzT2Zmc2V0Q29udGFpbmVyJztcbmltcG9ydCBnZXRSb290IGZyb20gJy4vZ2V0Um9vdCc7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gJy4vZ2V0T2Zmc2V0UGFyZW50JztcblxuLyoqXG4gKiBGaW5kcyB0aGUgb2Zmc2V0IHBhcmVudCBjb21tb24gdG8gdGhlIHR3byBwcm92aWRlZCBub2Rlc1xuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50MVxuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50MlxuICogQHJldHVybnMge0VsZW1lbnR9IGNvbW1vbiBvZmZzZXQgcGFyZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmRDb21tb25PZmZzZXRQYXJlbnQoZWxlbWVudDEsIGVsZW1lbnQyKSB7XG4gIC8vIFRoaXMgY2hlY2sgaXMgbmVlZGVkIHRvIGF2b2lkIGVycm9ycyBpbiBjYXNlIG9uZSBvZiB0aGUgZWxlbWVudHMgaXNuJ3QgZGVmaW5lZCBmb3IgYW55IHJlYXNvblxuICBpZiAoIWVsZW1lbnQxIHx8ICFlbGVtZW50MS5ub2RlVHlwZSB8fCAhZWxlbWVudDIgfHwgIWVsZW1lbnQyLm5vZGVUeXBlKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxuXG4gIC8vIEhlcmUgd2UgbWFrZSBzdXJlIHRvIGdpdmUgYXMgXCJzdGFydFwiIHRoZSBlbGVtZW50IHRoYXQgY29tZXMgZmlyc3QgaW4gdGhlIERPTVxuICBjb25zdCBvcmRlciA9XG4gICAgZWxlbWVudDEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZWxlbWVudDIpICZcbiAgICBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0ZPTExPV0lORztcbiAgY29uc3Qgc3RhcnQgPSBvcmRlciA/IGVsZW1lbnQxIDogZWxlbWVudDI7XG4gIGNvbnN0IGVuZCA9IG9yZGVyID8gZWxlbWVudDIgOiBlbGVtZW50MTtcblxuICAvLyBHZXQgY29tbW9uIGFuY2VzdG9yIGNvbnRhaW5lclxuICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gIHJhbmdlLnNldFN0YXJ0KHN0YXJ0LCAwKTtcbiAgcmFuZ2Uuc2V0RW5kKGVuZCwgMCk7XG4gIGNvbnN0IHsgY29tbW9uQW5jZXN0b3JDb250YWluZXIgfSA9IHJhbmdlO1xuXG4gIC8vIEJvdGggbm9kZXMgYXJlIGluc2lkZSAjZG9jdW1lbnRcbiAgaWYgKFxuICAgIChlbGVtZW50MSAhPT0gY29tbW9uQW5jZXN0b3JDb250YWluZXIgJiZcbiAgICAgIGVsZW1lbnQyICE9PSBjb21tb25BbmNlc3RvckNvbnRhaW5lcikgfHxcbiAgICBzdGFydC5jb250YWlucyhlbmQpXG4gICkge1xuICAgIGlmIChpc09mZnNldENvbnRhaW5lcihjb21tb25BbmNlc3RvckNvbnRhaW5lcikpIHtcbiAgICAgIHJldHVybiBjb21tb25BbmNlc3RvckNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0T2Zmc2V0UGFyZW50KGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKTtcbiAgfVxuXG4gIC8vIG9uZSBvZiB0aGUgbm9kZXMgaXMgaW5zaWRlIHNoYWRvd0RPTSwgZmluZCB3aGljaCBvbmVcbiAgY29uc3QgZWxlbWVudDFyb290ID0gZ2V0Um9vdChlbGVtZW50MSk7XG4gIGlmIChlbGVtZW50MXJvb3QuaG9zdCkge1xuICAgIHJldHVybiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQxcm9vdC5ob3N0LCBlbGVtZW50Mik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZpbmRDb21tb25PZmZzZXRQYXJlbnQoZWxlbWVudDEsIGdldFJvb3QoZWxlbWVudDIpLmhvc3QpO1xuICB9XG59XG4iLCIvKipcbiAqIEdldHMgdGhlIHNjcm9sbCB2YWx1ZSBvZiB0aGUgZ2l2ZW4gZWxlbWVudCBpbiB0aGUgZ2l2ZW4gc2lkZSAodG9wIGFuZCBsZWZ0KVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAYXJndW1lbnQge1N0cmluZ30gc2lkZSBgdG9wYCBvciBgbGVmdGBcbiAqIEByZXR1cm5zIHtudW1iZXJ9IGFtb3VudCBvZiBzY3JvbGxlZCBwaXhlbHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U2Nyb2xsKGVsZW1lbnQsIHNpZGUgPSAndG9wJykge1xuICBjb25zdCB1cHBlclNpZGUgPSBzaWRlID09PSAndG9wJyA/ICdzY3JvbGxUb3AnIDogJ3Njcm9sbExlZnQnO1xuICBjb25zdCBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWU7XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQk9EWScgfHwgbm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgIGNvbnN0IGh0bWwgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIGNvbnN0IHNjcm9sbGluZ0VsZW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB8fCBodG1sO1xuICAgIHJldHVybiBzY3JvbGxpbmdFbGVtZW50W3VwcGVyU2lkZV07XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFt1cHBlclNpZGVdO1xufVxuIiwiaW1wb3J0IGdldFNjcm9sbCBmcm9tICcuL2dldFNjcm9sbCc7XG5cbi8qXG4gKiBTdW0gb3Igc3VidHJhY3QgdGhlIGVsZW1lbnQgc2Nyb2xsIHZhbHVlcyAobGVmdCBhbmQgdG9wKSBmcm9tIGEgZ2l2ZW4gcmVjdCBvYmplY3RcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWN0IC0gUmVjdCBvYmplY3QgeW91IHdhbnQgdG8gY2hhbmdlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgZnJvbSB0aGUgZnVuY3Rpb24gcmVhZHMgdGhlIHNjcm9sbCB2YWx1ZXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc3VidHJhY3QgLSBzZXQgdG8gdHJ1ZSBpZiB5b3Ugd2FudCB0byBzdWJ0cmFjdCB0aGUgc2Nyb2xsIHZhbHVlc1xuICogQHJldHVybiB7T2JqZWN0fSByZWN0IC0gVGhlIG1vZGlmaWVyIHJlY3Qgb2JqZWN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluY2x1ZGVTY3JvbGwocmVjdCwgZWxlbWVudCwgc3VidHJhY3QgPSBmYWxzZSkge1xuICBjb25zdCBzY3JvbGxUb3AgPSBnZXRTY3JvbGwoZWxlbWVudCwgJ3RvcCcpO1xuICBjb25zdCBzY3JvbGxMZWZ0ID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICdsZWZ0Jyk7XG4gIGNvbnN0IG1vZGlmaWVyID0gc3VidHJhY3QgPyAtMSA6IDE7XG4gIHJlY3QudG9wICs9IHNjcm9sbFRvcCAqIG1vZGlmaWVyO1xuICByZWN0LmJvdHRvbSArPSBzY3JvbGxUb3AgKiBtb2RpZmllcjtcbiAgcmVjdC5sZWZ0ICs9IHNjcm9sbExlZnQgKiBtb2RpZmllcjtcbiAgcmVjdC5yaWdodCArPSBzY3JvbGxMZWZ0ICogbW9kaWZpZXI7XG4gIHJldHVybiByZWN0O1xufVxuIiwiLypcbiAqIEhlbHBlciB0byBkZXRlY3QgYm9yZGVycyBvZiBhIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7Q1NTU3R5bGVEZWNsYXJhdGlvbn0gc3R5bGVzXG4gKiBSZXN1bHQgb2YgYGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eWAgb24gdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBheGlzIC0gYHhgIG9yIGB5YFxuICogQHJldHVybiB7bnVtYmVyfSBib3JkZXJzIC0gVGhlIGJvcmRlcnMgc2l6ZSBvZiB0aGUgZ2l2ZW4gYXhpc1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJvcmRlcnNTaXplKHN0eWxlcywgYXhpcykge1xuICBjb25zdCBzaWRlQSA9IGF4aXMgPT09ICd4JyA/ICdMZWZ0JyA6ICdUb3AnO1xuICBjb25zdCBzaWRlQiA9IHNpZGVBID09PSAnTGVmdCcgPyAnUmlnaHQnIDogJ0JvdHRvbSc7XG5cbiAgcmV0dXJuIChcbiAgICBwYXJzZUZsb2F0KHN0eWxlc1tgYm9yZGVyJHtzaWRlQX1XaWR0aGBdKSArXG4gICAgcGFyc2VGbG9hdChzdHlsZXNbYGJvcmRlciR7c2lkZUJ9V2lkdGhgXSlcbiAgKTtcbn1cbiIsImltcG9ydCBpc0lFIGZyb20gJy4vaXNJRSc7XG5cbmZ1bmN0aW9uIGdldFNpemUoYXhpcywgYm9keSwgaHRtbCwgY29tcHV0ZWRTdHlsZSkge1xuICByZXR1cm4gTWF0aC5tYXgoXG4gICAgYm9keVtgb2Zmc2V0JHtheGlzfWBdLFxuICAgIGJvZHlbYHNjcm9sbCR7YXhpc31gXSxcbiAgICBodG1sW2BjbGllbnQke2F4aXN9YF0sXG4gICAgaHRtbFtgb2Zmc2V0JHtheGlzfWBdLFxuICAgIGh0bWxbYHNjcm9sbCR7YXhpc31gXSxcbiAgICBpc0lFKDEwKVxuICAgICAgPyAocGFyc2VJbnQoaHRtbFtgb2Zmc2V0JHtheGlzfWBdKSArIFxuICAgICAgcGFyc2VJbnQoY29tcHV0ZWRTdHlsZVtgbWFyZ2luJHtheGlzID09PSAnSGVpZ2h0JyA/ICdUb3AnIDogJ0xlZnQnfWBdKSArIFxuICAgICAgcGFyc2VJbnQoY29tcHV0ZWRTdHlsZVtgbWFyZ2luJHtheGlzID09PSAnSGVpZ2h0JyA/ICdCb3R0b20nIDogJ1JpZ2h0J31gXSkpXG4gICAgOiAwIFxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3dTaXplcyhkb2N1bWVudCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGlzSUUoMTApICYmIGdldENvbXB1dGVkU3R5bGUoaHRtbCk7XG5cbiAgcmV0dXJuIHtcbiAgICBoZWlnaHQ6IGdldFNpemUoJ0hlaWdodCcsIGJvZHksIGh0bWwsIGNvbXB1dGVkU3R5bGUpLFxuICAgIHdpZHRoOiBnZXRTaXplKCdXaWR0aCcsIGJvZHksIGh0bWwsIGNvbXB1dGVkU3R5bGUpLFxuICB9O1xufVxuIiwiLyoqXG4gKiBHaXZlbiBlbGVtZW50IG9mZnNldHMsIGdlbmVyYXRlIGFuIG91dHB1dCBzaW1pbGFyIHRvIGdldEJvdW5kaW5nQ2xpZW50UmVjdFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IG9mZnNldHNcbiAqIEByZXR1cm5zIHtPYmplY3R9IENsaWVudFJlY3QgbGlrZSBvdXRwdXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdChvZmZzZXRzKSB7XG4gIHJldHVybiB7XG4gICAgLi4ub2Zmc2V0cyxcbiAgICByaWdodDogb2Zmc2V0cy5sZWZ0ICsgb2Zmc2V0cy53aWR0aCxcbiAgICBib3R0b206IG9mZnNldHMudG9wICsgb2Zmc2V0cy5oZWlnaHQsXG4gIH07XG59XG4iLCJpbXBvcnQgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IGZyb20gJy4vZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5JztcbmltcG9ydCBnZXRCb3JkZXJzU2l6ZSBmcm9tICcuL2dldEJvcmRlcnNTaXplJztcbmltcG9ydCBnZXRXaW5kb3dTaXplcyBmcm9tICcuL2dldFdpbmRvd1NpemVzJztcbmltcG9ydCBnZXRTY3JvbGwgZnJvbSAnLi9nZXRTY3JvbGwnO1xuaW1wb3J0IGdldENsaWVudFJlY3QgZnJvbSAnLi9nZXRDbGllbnRSZWN0JztcbmltcG9ydCBpc0lFIGZyb20gJy4vaXNJRSc7XG5cbi8qKlxuICogR2V0IGJvdW5kaW5nIGNsaWVudCByZWN0IG9mIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm4ge09iamVjdH0gY2xpZW50IHJlY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpIHtcbiAgbGV0IHJlY3QgPSB7fTtcblxuICAvLyBJRTEwIDEwIEZJWDogUGxlYXNlLCBkb24ndCBhc2ssIHRoZSBlbGVtZW50IGlzbid0XG4gIC8vIGNvbnNpZGVyZWQgaW4gRE9NIGluIHNvbWUgY2lyY3Vtc3RhbmNlcy4uLlxuICAvLyBUaGlzIGlzbid0IHJlcHJvZHVjaWJsZSBpbiBJRTEwIGNvbXBhdGliaWxpdHkgbW9kZSBvZiBJRTExXG4gIHRyeSB7XG4gICAgaWYgKGlzSUUoMTApKSB7XG4gICAgICByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGdldFNjcm9sbChlbGVtZW50LCAndG9wJyk7XG4gICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICdsZWZ0Jyk7XG4gICAgICByZWN0LnRvcCArPSBzY3JvbGxUb3A7XG4gICAgICByZWN0LmxlZnQgKz0gc2Nyb2xsTGVmdDtcbiAgICAgIHJlY3QuYm90dG9tICs9IHNjcm9sbFRvcDtcbiAgICAgIHJlY3QucmlnaHQgKz0gc2Nyb2xsTGVmdDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB9XG4gIH1cbiAgY2F0Y2goZSl7fVxuXG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgdG9wOiByZWN0LnRvcCxcbiAgICB3aWR0aDogcmVjdC5yaWdodCAtIHJlY3QubGVmdCxcbiAgICBoZWlnaHQ6IHJlY3QuYm90dG9tIC0gcmVjdC50b3AsXG4gIH07XG5cbiAgLy8gc3VidHJhY3Qgc2Nyb2xsYmFyIHNpemUgZnJvbSBzaXplc1xuICBjb25zdCBzaXplcyA9IGVsZW1lbnQubm9kZU5hbWUgPT09ICdIVE1MJyA/IGdldFdpbmRvd1NpemVzKGVsZW1lbnQub3duZXJEb2N1bWVudCkgOiB7fTtcbiAgY29uc3Qgd2lkdGggPVxuICAgIHNpemVzLndpZHRoIHx8IGVsZW1lbnQuY2xpZW50V2lkdGggfHwgcmVzdWx0LndpZHRoO1xuICBjb25zdCBoZWlnaHQgPVxuICAgIHNpemVzLmhlaWdodCB8fCBlbGVtZW50LmNsaWVudEhlaWdodCB8fCByZXN1bHQuaGVpZ2h0O1xuXG4gIGxldCBob3JpelNjcm9sbGJhciA9IGVsZW1lbnQub2Zmc2V0V2lkdGggLSB3aWR0aDtcbiAgbGV0IHZlcnRTY3JvbGxiYXIgPSBlbGVtZW50Lm9mZnNldEhlaWdodCAtIGhlaWdodDtcblxuICAvLyBpZiBhbiBoeXBvdGhldGljYWwgc2Nyb2xsYmFyIGlzIGRldGVjdGVkLCB3ZSBtdXN0IGJlIHN1cmUgaXQncyBub3QgYSBgYm9yZGVyYFxuICAvLyB3ZSBtYWtlIHRoaXMgY2hlY2sgY29uZGl0aW9uYWwgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcbiAgaWYgKGhvcml6U2Nyb2xsYmFyIHx8IHZlcnRTY3JvbGxiYXIpIHtcbiAgICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCk7XG4gICAgaG9yaXpTY3JvbGxiYXIgLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAneCcpO1xuICAgIHZlcnRTY3JvbGxiYXIgLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAneScpO1xuXG4gICAgcmVzdWx0LndpZHRoIC09IGhvcml6U2Nyb2xsYmFyO1xuICAgIHJlc3VsdC5oZWlnaHQgLT0gdmVydFNjcm9sbGJhcjtcbiAgfVxuXG4gIHJldHVybiBnZXRDbGllbnRSZWN0KHJlc3VsdCk7XG59XG4iLCJpbXBvcnQgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IGZyb20gJy4vZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5JztcbmltcG9ydCBpbmNsdWRlU2Nyb2xsIGZyb20gJy4vaW5jbHVkZVNjcm9sbCc7XG5pbXBvcnQgZ2V0U2Nyb2xsUGFyZW50IGZyb20gJy4vZ2V0U2Nyb2xsUGFyZW50JztcbmltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSAnLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QnO1xuaW1wb3J0IHJ1bklzSUUgZnJvbSAnLi9pc0lFJztcbmltcG9ydCBnZXRDbGllbnRSZWN0IGZyb20gJy4vZ2V0Q2xpZW50UmVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShjaGlsZHJlbiwgcGFyZW50LCBmaXhlZFBvc2l0aW9uID0gZmFsc2UpIHtcbiAgY29uc3QgaXNJRTEwID0gcnVuSXNJRSgxMCk7XG4gIGNvbnN0IGlzSFRNTCA9IHBhcmVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnO1xuICBjb25zdCBjaGlsZHJlblJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoY2hpbGRyZW4pO1xuICBjb25zdCBwYXJlbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHBhcmVudCk7XG4gIGNvbnN0IHNjcm9sbFBhcmVudCA9IGdldFNjcm9sbFBhcmVudChjaGlsZHJlbik7XG5cbiAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KHBhcmVudCk7XG4gIGNvbnN0IGJvcmRlclRvcFdpZHRoID0gcGFyc2VGbG9hdChzdHlsZXMuYm9yZGVyVG9wV2lkdGgpO1xuICBjb25zdCBib3JkZXJMZWZ0V2lkdGggPSBwYXJzZUZsb2F0KHN0eWxlcy5ib3JkZXJMZWZ0V2lkdGgpO1xuXG4gIC8vIEluIGNhc2VzIHdoZXJlIHRoZSBwYXJlbnQgaXMgZml4ZWQsIHdlIG11c3QgaWdub3JlIG5lZ2F0aXZlIHNjcm9sbCBpbiBvZmZzZXQgY2FsY1xuICBpZihmaXhlZFBvc2l0aW9uICYmIGlzSFRNTCkge1xuICAgIHBhcmVudFJlY3QudG9wID0gTWF0aC5tYXgocGFyZW50UmVjdC50b3AsIDApO1xuICAgIHBhcmVudFJlY3QubGVmdCA9IE1hdGgubWF4KHBhcmVudFJlY3QubGVmdCwgMCk7XG4gIH1cbiAgbGV0IG9mZnNldHMgPSBnZXRDbGllbnRSZWN0KHtcbiAgICB0b3A6IGNoaWxkcmVuUmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcCAtIGJvcmRlclRvcFdpZHRoLFxuICAgIGxlZnQ6IGNoaWxkcmVuUmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0IC0gYm9yZGVyTGVmdFdpZHRoLFxuICAgIHdpZHRoOiBjaGlsZHJlblJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiBjaGlsZHJlblJlY3QuaGVpZ2h0LFxuICB9KTtcbiAgb2Zmc2V0cy5tYXJnaW5Ub3AgPSAwO1xuICBvZmZzZXRzLm1hcmdpbkxlZnQgPSAwO1xuXG4gIC8vIFN1YnRyYWN0IG1hcmdpbnMgb2YgZG9jdW1lbnRFbGVtZW50IGluIGNhc2UgaXQncyBiZWluZyB1c2VkIGFzIHBhcmVudFxuICAvLyB3ZSBkbyB0aGlzIG9ubHkgb24gSFRNTCBiZWNhdXNlIGl0J3MgdGhlIG9ubHkgZWxlbWVudCB0aGF0IGJlaGF2ZXNcbiAgLy8gZGlmZmVyZW50bHkgd2hlbiBtYXJnaW5zIGFyZSBhcHBsaWVkIHRvIGl0LiBUaGUgbWFyZ2lucyBhcmUgaW5jbHVkZWQgaW5cbiAgLy8gdGhlIGJveCBvZiB0aGUgZG9jdW1lbnRFbGVtZW50LCBpbiB0aGUgb3RoZXIgY2FzZXMgbm90LlxuICBpZiAoIWlzSUUxMCAmJiBpc0hUTUwpIHtcbiAgICBjb25zdCBtYXJnaW5Ub3AgPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5Ub3ApO1xuICAgIGNvbnN0IG1hcmdpbkxlZnQgPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5MZWZ0KTtcblxuICAgIG9mZnNldHMudG9wIC09IGJvcmRlclRvcFdpZHRoIC0gbWFyZ2luVG9wO1xuICAgIG9mZnNldHMuYm90dG9tIC09IGJvcmRlclRvcFdpZHRoIC0gbWFyZ2luVG9wO1xuICAgIG9mZnNldHMubGVmdCAtPSBib3JkZXJMZWZ0V2lkdGggLSBtYXJnaW5MZWZ0O1xuICAgIG9mZnNldHMucmlnaHQgLT0gYm9yZGVyTGVmdFdpZHRoIC0gbWFyZ2luTGVmdDtcblxuICAgIC8vIEF0dGFjaCBtYXJnaW5Ub3AgYW5kIG1hcmdpbkxlZnQgYmVjYXVzZSBpbiBzb21lIGNpcmN1bXN0YW5jZXMgd2UgbWF5IG5lZWQgdGhlbVxuICAgIG9mZnNldHMubWFyZ2luVG9wID0gbWFyZ2luVG9wO1xuICAgIG9mZnNldHMubWFyZ2luTGVmdCA9IG1hcmdpbkxlZnQ7XG4gIH1cblxuICBpZiAoXG4gICAgaXNJRTEwICYmICFmaXhlZFBvc2l0aW9uXG4gICAgICA/IHBhcmVudC5jb250YWlucyhzY3JvbGxQYXJlbnQpXG4gICAgICA6IHBhcmVudCA9PT0gc2Nyb2xsUGFyZW50ICYmIHNjcm9sbFBhcmVudC5ub2RlTmFtZSAhPT0gJ0JPRFknXG4gICkge1xuICAgIG9mZnNldHMgPSBpbmNsdWRlU2Nyb2xsKG9mZnNldHMsIHBhcmVudCk7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0cztcbn1cbiIsImltcG9ydCBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUgZnJvbSAnLi9nZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUnO1xuaW1wb3J0IGdldFNjcm9sbCBmcm9tICcuL2dldFNjcm9sbCc7XG5pbXBvcnQgZ2V0Q2xpZW50UmVjdCBmcm9tICcuL2dldENsaWVudFJlY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUoZWxlbWVudCwgZXhjbHVkZVNjcm9sbCA9IGZhbHNlKSB7XG4gIGNvbnN0IGh0bWwgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBjb25zdCByZWxhdGl2ZU9mZnNldCA9IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShlbGVtZW50LCBodG1sKTtcbiAgY29uc3Qgd2lkdGggPSBNYXRoLm1heChodG1sLmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKTtcbiAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoaHRtbC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKTtcblxuICBjb25zdCBzY3JvbGxUb3AgPSAhZXhjbHVkZVNjcm9sbCA/IGdldFNjcm9sbChodG1sKSA6IDA7XG4gIGNvbnN0IHNjcm9sbExlZnQgPSAhZXhjbHVkZVNjcm9sbCA/IGdldFNjcm9sbChodG1sLCAnbGVmdCcpIDogMDtcblxuICBjb25zdCBvZmZzZXQgPSB7XG4gICAgdG9wOiBzY3JvbGxUb3AgLSByZWxhdGl2ZU9mZnNldC50b3AgKyByZWxhdGl2ZU9mZnNldC5tYXJnaW5Ub3AsXG4gICAgbGVmdDogc2Nyb2xsTGVmdCAtIHJlbGF0aXZlT2Zmc2V0LmxlZnQgKyByZWxhdGl2ZU9mZnNldC5tYXJnaW5MZWZ0LFxuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgfTtcblxuICByZXR1cm4gZ2V0Q2xpZW50UmVjdChvZmZzZXQpO1xufVxuIiwiaW1wb3J0IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSBmcm9tICcuL2dldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSc7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tICcuL2dldFBhcmVudE5vZGUnO1xuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiBlbGVtZW50IGlzIGZpeGVkIG9yIGlzIGluc2lkZSBhIGZpeGVkIHBhcmVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGN1c3RvbUNvbnRhaW5lclxuICogQHJldHVybnMge0Jvb2xlYW59IGFuc3dlciB0byBcImlzRml4ZWQ/XCJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNGaXhlZChlbGVtZW50KSB7XG4gIGNvbnN0IG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZTtcbiAgaWYgKG5vZGVOYW1lID09PSAnQk9EWScgfHwgbm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQsICdwb3NpdGlvbicpID09PSAnZml4ZWQnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY29uc3QgcGFyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG4gIGlmICghcGFyZW50Tm9kZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gaXNGaXhlZChwYXJlbnROb2RlKTtcbn1cbiIsImltcG9ydCBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgZnJvbSAnLi9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xuaW1wb3J0IGlzSUUgZnJvbSAnLi9pc0lFJztcbi8qKlxuICogRmluZHMgdGhlIGZpcnN0IHBhcmVudCBvZiBhbiBlbGVtZW50IHRoYXQgaGFzIGEgdHJhbnNmb3JtZWQgcHJvcGVydHkgZGVmaW5lZFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gZmlyc3QgdHJhbnNmb3JtZWQgcGFyZW50IG9yIGRvY3VtZW50RWxlbWVudFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICAvLyBUaGlzIGNoZWNrIGlzIG5lZWRlZCB0byBhdm9pZCBlcnJvcnMgaW4gY2FzZSBvbmUgb2YgdGhlIGVsZW1lbnRzIGlzbid0IGRlZmluZWQgZm9yIGFueSByZWFzb25cbiAgIGlmICghZWxlbWVudCB8fCAhZWxlbWVudC5wYXJlbnRFbGVtZW50IHx8IGlzSUUoKSkge1xuICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cbiAgbGV0IGVsID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICB3aGlsZSAoZWwgJiYgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsLCAndHJhbnNmb3JtJykgPT09ICdub25lJykge1xuICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgfVxuICByZXR1cm4gZWwgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG59XG4iLCJpbXBvcnQgZ2V0U2Nyb2xsUGFyZW50IGZyb20gJy4vZ2V0U2Nyb2xsUGFyZW50JztcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gJy4vZ2V0UGFyZW50Tm9kZSc7XG5pbXBvcnQgZ2V0UmVmZXJlbmNlTm9kZSBmcm9tICcuL2dldFJlZmVyZW5jZU5vZGUnO1xuaW1wb3J0IGZpbmRDb21tb25PZmZzZXRQYXJlbnQgZnJvbSAnLi9maW5kQ29tbW9uT2Zmc2V0UGFyZW50JztcbmltcG9ydCBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUgZnJvbSAnLi9nZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUnO1xuaW1wb3J0IGdldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZSBmcm9tICcuL2dldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZSc7XG5pbXBvcnQgZ2V0V2luZG93U2l6ZXMgZnJvbSAnLi9nZXRXaW5kb3dTaXplcyc7XG5pbXBvcnQgaXNGaXhlZCBmcm9tICcuL2lzRml4ZWQnO1xuaW1wb3J0IGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQgZnJvbSAnLi9nZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50JztcblxuLyoqXG4gKiBDb21wdXRlZCB0aGUgYm91bmRhcmllcyBsaW1pdHMgYW5kIHJldHVybiB0aGVtXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3BwZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJlZmVyZW5jZVxuICogQHBhcmFtIHtudW1iZXJ9IHBhZGRpbmdcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJvdW5kYXJpZXNFbGVtZW50IC0gRWxlbWVudCB1c2VkIHRvIGRlZmluZSB0aGUgYm91bmRhcmllc1xuICogQHBhcmFtIHtCb29sZWFufSBmaXhlZFBvc2l0aW9uIC0gSXMgaW4gZml4ZWQgcG9zaXRpb24gbW9kZVxuICogQHJldHVybnMge09iamVjdH0gQ29vcmRpbmF0ZXMgb2YgdGhlIGJvdW5kYXJpZXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Qm91bmRhcmllcyhcbiAgcG9wcGVyLFxuICByZWZlcmVuY2UsXG4gIHBhZGRpbmcsXG4gIGJvdW5kYXJpZXNFbGVtZW50LFxuICBmaXhlZFBvc2l0aW9uID0gZmFsc2Vcbikge1xuICAvLyBOT1RFOiAxIERPTSBhY2Nlc3MgaGVyZVxuXG4gIGxldCBib3VuZGFyaWVzID0geyB0b3A6IDAsIGxlZnQ6IDAgfTtcbiAgY29uc3Qgb2Zmc2V0UGFyZW50ID0gZml4ZWRQb3NpdGlvbiA/IGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQocG9wcGVyKSA6IGZpbmRDb21tb25PZmZzZXRQYXJlbnQocG9wcGVyLCBnZXRSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZSkpO1xuXG4gIC8vIEhhbmRsZSB2aWV3cG9ydCBjYXNlXG4gIGlmIChib3VuZGFyaWVzRWxlbWVudCA9PT0gJ3ZpZXdwb3J0JyApIHtcbiAgICBib3VuZGFyaWVzID0gZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlKG9mZnNldFBhcmVudCwgZml4ZWRQb3NpdGlvbik7XG4gIH1cblxuICBlbHNlIHtcbiAgICAvLyBIYW5kbGUgb3RoZXIgY2FzZXMgYmFzZWQgb24gRE9NIGVsZW1lbnQgdXNlZCBhcyBib3VuZGFyaWVzXG4gICAgbGV0IGJvdW5kYXJpZXNOb2RlO1xuICAgIGlmIChib3VuZGFyaWVzRWxlbWVudCA9PT0gJ3Njcm9sbFBhcmVudCcpIHtcbiAgICAgIGJvdW5kYXJpZXNOb2RlID0gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUocmVmZXJlbmNlKSk7XG4gICAgICBpZiAoYm91bmRhcmllc05vZGUubm9kZU5hbWUgPT09ICdCT0RZJykge1xuICAgICAgICBib3VuZGFyaWVzTm9kZSA9IHBvcHBlci5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGJvdW5kYXJpZXNFbGVtZW50ID09PSAnd2luZG93Jykge1xuICAgICAgYm91bmRhcmllc05vZGUgPSBwb3BwZXIub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvdW5kYXJpZXNOb2RlID0gYm91bmRhcmllc0VsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3Qgb2Zmc2V0cyA9IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShcbiAgICAgIGJvdW5kYXJpZXNOb2RlLFxuICAgICAgb2Zmc2V0UGFyZW50LFxuICAgICAgZml4ZWRQb3NpdGlvblxuICAgICk7XG5cbiAgICAvLyBJbiBjYXNlIG9mIEhUTUwsIHdlIG5lZWQgYSBkaWZmZXJlbnQgY29tcHV0YXRpb25cbiAgICBpZiAoYm91bmRhcmllc05vZGUubm9kZU5hbWUgPT09ICdIVE1MJyAmJiAhaXNGaXhlZChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICBjb25zdCB7IGhlaWdodCwgd2lkdGggfSA9IGdldFdpbmRvd1NpemVzKHBvcHBlci5vd25lckRvY3VtZW50KTtcbiAgICAgIGJvdW5kYXJpZXMudG9wICs9IG9mZnNldHMudG9wIC0gb2Zmc2V0cy5tYXJnaW5Ub3A7XG4gICAgICBib3VuZGFyaWVzLmJvdHRvbSA9IGhlaWdodCArIG9mZnNldHMudG9wO1xuICAgICAgYm91bmRhcmllcy5sZWZ0ICs9IG9mZnNldHMubGVmdCAtIG9mZnNldHMubWFyZ2luTGVmdDtcbiAgICAgIGJvdW5kYXJpZXMucmlnaHQgPSB3aWR0aCArIG9mZnNldHMubGVmdDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZm9yIGFsbCB0aGUgb3RoZXIgRE9NIGVsZW1lbnRzLCB0aGlzIG9uZSBpcyBnb29kXG4gICAgICBib3VuZGFyaWVzID0gb2Zmc2V0cztcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgcGFkZGluZ3NcbiAgcGFkZGluZyA9IHBhZGRpbmcgfHwgMDtcbiAgY29uc3QgaXNQYWRkaW5nTnVtYmVyID0gdHlwZW9mIHBhZGRpbmcgPT09ICdudW1iZXInO1xuICBib3VuZGFyaWVzLmxlZnQgKz0gaXNQYWRkaW5nTnVtYmVyID8gcGFkZGluZyA6IHBhZGRpbmcubGVmdCB8fCAwOyBcbiAgYm91bmRhcmllcy50b3AgKz0gaXNQYWRkaW5nTnVtYmVyID8gcGFkZGluZyA6IHBhZGRpbmcudG9wIHx8IDA7IFxuICBib3VuZGFyaWVzLnJpZ2h0IC09IGlzUGFkZGluZ051bWJlciA/IHBhZGRpbmcgOiBwYWRkaW5nLnJpZ2h0IHx8IDA7IFxuICBib3VuZGFyaWVzLmJvdHRvbSAtPSBpc1BhZGRpbmdOdW1iZXIgPyBwYWRkaW5nIDogcGFkZGluZy5ib3R0b20gfHwgMDsgXG5cbiAgcmV0dXJuIGJvdW5kYXJpZXM7XG59XG4iLCJpbXBvcnQgZ2V0Qm91bmRhcmllcyBmcm9tICcuLi91dGlscy9nZXRCb3VuZGFyaWVzJztcblxuZnVuY3Rpb24gZ2V0QXJlYSh7IHdpZHRoLCBoZWlnaHQgfSkge1xuICByZXR1cm4gd2lkdGggKiBoZWlnaHQ7XG59XG5cbi8qKlxuICogVXRpbGl0eSB1c2VkIHRvIHRyYW5zZm9ybSB0aGUgYGF1dG9gIHBsYWNlbWVudCB0byB0aGUgcGxhY2VtZW50IHdpdGggbW9yZVxuICogYXZhaWxhYmxlIHNwYWNlLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZUF1dG9QbGFjZW1lbnQoXG4gIHBsYWNlbWVudCxcbiAgcmVmUmVjdCxcbiAgcG9wcGVyLFxuICByZWZlcmVuY2UsXG4gIGJvdW5kYXJpZXNFbGVtZW50LFxuICBwYWRkaW5nID0gMFxuKSB7XG4gIGlmIChwbGFjZW1lbnQuaW5kZXhPZignYXV0bycpID09PSAtMSkge1xuICAgIHJldHVybiBwbGFjZW1lbnQ7XG4gIH1cblxuICBjb25zdCBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyhcbiAgICBwb3BwZXIsXG4gICAgcmVmZXJlbmNlLFxuICAgIHBhZGRpbmcsXG4gICAgYm91bmRhcmllc0VsZW1lbnRcbiAgKTtcblxuICBjb25zdCByZWN0cyA9IHtcbiAgICB0b3A6IHtcbiAgICAgIHdpZHRoOiBib3VuZGFyaWVzLndpZHRoLFxuICAgICAgaGVpZ2h0OiByZWZSZWN0LnRvcCAtIGJvdW5kYXJpZXMudG9wLFxuICAgIH0sXG4gICAgcmlnaHQ6IHtcbiAgICAgIHdpZHRoOiBib3VuZGFyaWVzLnJpZ2h0IC0gcmVmUmVjdC5yaWdodCxcbiAgICAgIGhlaWdodDogYm91bmRhcmllcy5oZWlnaHQsXG4gICAgfSxcbiAgICBib3R0b206IHtcbiAgICAgIHdpZHRoOiBib3VuZGFyaWVzLndpZHRoLFxuICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmJvdHRvbSAtIHJlZlJlY3QuYm90dG9tLFxuICAgIH0sXG4gICAgbGVmdDoge1xuICAgICAgd2lkdGg6IHJlZlJlY3QubGVmdCAtIGJvdW5kYXJpZXMubGVmdCxcbiAgICAgIGhlaWdodDogYm91bmRhcmllcy5oZWlnaHQsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBzb3J0ZWRBcmVhcyA9IE9iamVjdC5rZXlzKHJlY3RzKVxuICAgIC5tYXAoa2V5ID0+ICh7XG4gICAgICBrZXksXG4gICAgICAuLi5yZWN0c1trZXldLFxuICAgICAgYXJlYTogZ2V0QXJlYShyZWN0c1trZXldKSxcbiAgICB9KSlcbiAgICAuc29ydCgoYSwgYikgPT4gYi5hcmVhIC0gYS5hcmVhKTtcblxuICBjb25zdCBmaWx0ZXJlZEFyZWFzID0gc29ydGVkQXJlYXMuZmlsdGVyKFxuICAgICh7IHdpZHRoLCBoZWlnaHQgfSkgPT5cbiAgICAgIHdpZHRoID49IHBvcHBlci5jbGllbnRXaWR0aCAmJiBoZWlnaHQgPj0gcG9wcGVyLmNsaWVudEhlaWdodFxuICApO1xuXG4gIGNvbnN0IGNvbXB1dGVkUGxhY2VtZW50ID0gZmlsdGVyZWRBcmVhcy5sZW5ndGggPiAwXG4gICAgPyBmaWx0ZXJlZEFyZWFzWzBdLmtleVxuICAgIDogc29ydGVkQXJlYXNbMF0ua2V5O1xuXG4gIGNvbnN0IHZhcmlhdGlvbiA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xuXG4gIHJldHVybiBjb21wdXRlZFBsYWNlbWVudCArICh2YXJpYXRpb24gPyBgLSR7dmFyaWF0aW9ufWAgOiAnJyk7XG59XG4iLCJpbXBvcnQgZmluZENvbW1vbk9mZnNldFBhcmVudCBmcm9tICcuL2ZpbmRDb21tb25PZmZzZXRQYXJlbnQnO1xuaW1wb3J0IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSBmcm9tICcuL2dldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSc7XG5pbXBvcnQgZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudCBmcm9tICcuL2dldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQnO1xuaW1wb3J0IGdldFJlZmVyZW5jZU5vZGUgZnJvbSAnLi9nZXRSZWZlcmVuY2VOb2RlJztcblxuLyoqXG4gKiBHZXQgb2Zmc2V0cyB0byB0aGUgcmVmZXJlbmNlIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtFbGVtZW50fSBwb3BwZXIgLSB0aGUgcG9wcGVyIGVsZW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudH0gcmVmZXJlbmNlIC0gdGhlIHJlZmVyZW5jZSBlbGVtZW50ICh0aGUgcG9wcGVyIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhpcylcbiAqIEBwYXJhbSB7RWxlbWVudH0gZml4ZWRQb3NpdGlvbiAtIGlzIGluIGZpeGVkIHBvc2l0aW9uIG1vZGVcbiAqIEByZXR1cm5zIHtPYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBvZmZzZXRzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFJlZmVyZW5jZU9mZnNldHMoc3RhdGUsIHBvcHBlciwgcmVmZXJlbmNlLCBmaXhlZFBvc2l0aW9uID0gbnVsbCkge1xuICBjb25zdCBjb21tb25PZmZzZXRQYXJlbnQgPSBmaXhlZFBvc2l0aW9uID8gZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudChwb3BwZXIpIDogZmluZENvbW1vbk9mZnNldFBhcmVudChwb3BwZXIsIGdldFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlKSk7XG4gIHJldHVybiBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUocmVmZXJlbmNlLCBjb21tb25PZmZzZXRQYXJlbnQsIGZpeGVkUG9zaXRpb24pO1xufVxuIiwiLyoqXG4gKiBHZXQgdGhlIG91dGVyIHNpemVzIG9mIHRoZSBnaXZlbiBlbGVtZW50IChvZmZzZXQgc2l6ZSArIG1hcmdpbnMpXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtPYmplY3R9IG9iamVjdCBjb250YWluaW5nIHdpZHRoIGFuZCBoZWlnaHQgcHJvcGVydGllc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPdXRlclNpemVzKGVsZW1lbnQpIHtcbiAgY29uc3Qgd2luZG93ID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICBjb25zdCBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgY29uc3QgeCA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblRvcCB8fCAwKSArIHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpbkJvdHRvbSB8fCAwKTtcbiAgY29uc3QgeSA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpbkxlZnQgfHwgMCkgKyBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5SaWdodCB8fCAwKTtcbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoICsgeSxcbiAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgeCxcbiAgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsIi8qKlxuICogR2V0IHRoZSBvcHBvc2l0ZSBwbGFjZW1lbnQgb2YgdGhlIGdpdmVuIG9uZVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IHBsYWNlbWVudFxuICogQHJldHVybnMge1N0cmluZ30gZmxpcHBlZCBwbGFjZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIGNvbnN0IGhhc2ggPSB7IGxlZnQ6ICdyaWdodCcsIHJpZ2h0OiAnbGVmdCcsIGJvdHRvbTogJ3RvcCcsIHRvcDogJ2JvdHRvbScgfTtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywgbWF0Y2hlZCA9PiBoYXNoW21hdGNoZWRdKTtcbn1cbiIsImltcG9ydCBnZXRPdXRlclNpemVzIGZyb20gJy4vZ2V0T3V0ZXJTaXplcyc7XG5pbXBvcnQgZ2V0T3Bwb3NpdGVQbGFjZW1lbnQgZnJvbSAnLi9nZXRPcHBvc2l0ZVBsYWNlbWVudCc7XG5cbi8qKlxuICogR2V0IG9mZnNldHMgdG8gdGhlIHBvcHBlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtPYmplY3R9IHBvc2l0aW9uIC0gQ1NTIHBvc2l0aW9uIHRoZSBQb3BwZXIgd2lsbCBnZXQgYXBwbGllZFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wcGVyIC0gdGhlIHBvcHBlciBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gcmVmZXJlbmNlT2Zmc2V0cyAtIHRoZSByZWZlcmVuY2Ugb2Zmc2V0cyAodGhlIHBvcHBlciB3aWxsIGJlIHJlbGF0aXZlIHRvIHRoaXMpXG4gKiBAcGFyYW0ge1N0cmluZ30gcGxhY2VtZW50IC0gb25lIG9mIHRoZSB2YWxpZCBwbGFjZW1lbnQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gcG9wcGVyT2Zmc2V0cyAtIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBvZmZzZXRzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFBvcHBlck9mZnNldHMocG9wcGVyLCByZWZlcmVuY2VPZmZzZXRzLCBwbGFjZW1lbnQpIHtcbiAgcGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG5cbiAgLy8gR2V0IHBvcHBlciBub2RlIHNpemVzXG4gIGNvbnN0IHBvcHBlclJlY3QgPSBnZXRPdXRlclNpemVzKHBvcHBlcik7XG5cbiAgLy8gQWRkIHBvc2l0aW9uLCB3aWR0aCBhbmQgaGVpZ2h0IHRvIG91ciBvZmZzZXRzIG9iamVjdFxuICBjb25zdCBwb3BwZXJPZmZzZXRzID0ge1xuICAgIHdpZHRoOiBwb3BwZXJSZWN0LndpZHRoLFxuICAgIGhlaWdodDogcG9wcGVyUmVjdC5oZWlnaHQsXG4gIH07XG5cbiAgLy8gZGVwZW5kaW5nIGJ5IHRoZSBwb3BwZXIgcGxhY2VtZW50IHdlIGhhdmUgdG8gY29tcHV0ZSBpdHMgb2Zmc2V0cyBzbGlnaHRseSBkaWZmZXJlbnRseVxuICBjb25zdCBpc0hvcml6ID0gWydyaWdodCcsICdsZWZ0J10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcbiAgY29uc3QgbWFpblNpZGUgPSBpc0hvcml6ID8gJ3RvcCcgOiAnbGVmdCc7XG4gIGNvbnN0IHNlY29uZGFyeVNpZGUgPSBpc0hvcml6ID8gJ2xlZnQnIDogJ3RvcCc7XG4gIGNvbnN0IG1lYXN1cmVtZW50ID0gaXNIb3JpeiA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgY29uc3Qgc2Vjb25kYXJ5TWVhc3VyZW1lbnQgPSAhaXNIb3JpeiA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICBwb3BwZXJPZmZzZXRzW21haW5TaWRlXSA9XG4gICAgcmVmZXJlbmNlT2Zmc2V0c1ttYWluU2lkZV0gK1xuICAgIHJlZmVyZW5jZU9mZnNldHNbbWVhc3VyZW1lbnRdIC8gMiAtXG4gICAgcG9wcGVyUmVjdFttZWFzdXJlbWVudF0gLyAyO1xuICBpZiAocGxhY2VtZW50ID09PSBzZWNvbmRhcnlTaWRlKSB7XG4gICAgcG9wcGVyT2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSA9XG4gICAgICByZWZlcmVuY2VPZmZzZXRzW3NlY29uZGFyeVNpZGVdIC0gcG9wcGVyUmVjdFtzZWNvbmRhcnlNZWFzdXJlbWVudF07XG4gIH0gZWxzZSB7XG4gICAgcG9wcGVyT2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSA9XG4gICAgICByZWZlcmVuY2VPZmZzZXRzW2dldE9wcG9zaXRlUGxhY2VtZW50KHNlY29uZGFyeVNpZGUpXTtcbiAgfVxuXG4gIHJldHVybiBwb3BwZXJPZmZzZXRzO1xufVxuIiwiLyoqXG4gKiBNaW1pY3MgdGhlIGBmaW5kYCBtZXRob2Qgb2YgQXJyYXlcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7QXJyYXl9IGFyclxuICogQGFyZ3VtZW50IHByb3BcbiAqIEBhcmd1bWVudCB2YWx1ZVxuICogQHJldHVybnMgaW5kZXggb3IgLTFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluZChhcnIsIGNoZWNrKSB7XG4gIC8vIHVzZSBuYXRpdmUgZmluZCBpZiBzdXBwb3J0ZWRcbiAgaWYgKEFycmF5LnByb3RvdHlwZS5maW5kKSB7XG4gICAgcmV0dXJuIGFyci5maW5kKGNoZWNrKTtcbiAgfVxuXG4gIC8vIHVzZSBgZmlsdGVyYCB0byBvYnRhaW4gdGhlIHNhbWUgYmVoYXZpb3Igb2YgYGZpbmRgXG4gIHJldHVybiBhcnIuZmlsdGVyKGNoZWNrKVswXTtcbn1cbiIsImltcG9ydCBmaW5kIGZyb20gJy4vZmluZCc7XG5cbi8qKlxuICogUmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hpbmcgb2JqZWN0XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0FycmF5fSBhcnJcbiAqIEBhcmd1bWVudCBwcm9wXG4gKiBAYXJndW1lbnQgdmFsdWVcbiAqIEByZXR1cm5zIGluZGV4IG9yIC0xXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmRJbmRleChhcnIsIHByb3AsIHZhbHVlKSB7XG4gIC8vIHVzZSBuYXRpdmUgZmluZEluZGV4IGlmIHN1cHBvcnRlZFxuICBpZiAoQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleCkge1xuICAgIHJldHVybiBhcnIuZmluZEluZGV4KGN1ciA9PiBjdXJbcHJvcF0gPT09IHZhbHVlKTtcbiAgfVxuXG4gIC8vIHVzZSBgZmluZGAgKyBgaW5kZXhPZmAgaWYgYGZpbmRJbmRleGAgaXNuJ3Qgc3VwcG9ydGVkXG4gIGNvbnN0IG1hdGNoID0gZmluZChhcnIsIG9iaiA9PiBvYmpbcHJvcF0gPT09IHZhbHVlKTtcbiAgcmV0dXJuIGFyci5pbmRleE9mKG1hdGNoKTtcbn1cbiIsImltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vaXNGdW5jdGlvbic7XG5pbXBvcnQgZmluZEluZGV4IGZyb20gJy4vZmluZEluZGV4JztcbmltcG9ydCBnZXRDbGllbnRSZWN0IGZyb20gJy4uL3V0aWxzL2dldENsaWVudFJlY3QnO1xuXG4vKipcbiAqIExvb3AgdHJvdWdoIHRoZSBsaXN0IG9mIG1vZGlmaWVycyBhbmQgcnVuIHRoZW0gaW4gb3JkZXIsXG4gKiBlYWNoIG9mIHRoZW0gd2lsbCB0aGVuIGVkaXQgdGhlIGRhdGEgb2JqZWN0LlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtkYXRhT2JqZWN0fSBkYXRhXG4gKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBlbmRzIC0gT3B0aW9uYWwgbW9kaWZpZXIgbmFtZSB1c2VkIGFzIHN0b3BwZXJcbiAqIEByZXR1cm5zIHtkYXRhT2JqZWN0fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBydW5Nb2RpZmllcnMobW9kaWZpZXJzLCBkYXRhLCBlbmRzKSB7XG4gIGNvbnN0IG1vZGlmaWVyc1RvUnVuID0gZW5kcyA9PT0gdW5kZWZpbmVkXG4gICAgPyBtb2RpZmllcnNcbiAgICA6IG1vZGlmaWVycy5zbGljZSgwLCBmaW5kSW5kZXgobW9kaWZpZXJzLCAnbmFtZScsIGVuZHMpKTtcblxuICBtb2RpZmllcnNUb1J1bi5mb3JFYWNoKG1vZGlmaWVyID0+IHtcbiAgICBpZiAobW9kaWZpZXJbJ2Z1bmN0aW9uJ10pIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICAgIGNvbnNvbGUud2FybignYG1vZGlmaWVyLmZ1bmN0aW9uYCBpcyBkZXByZWNhdGVkLCB1c2UgYG1vZGlmaWVyLmZuYCEnKTtcbiAgICB9XG4gICAgY29uc3QgZm4gPSBtb2RpZmllclsnZnVuY3Rpb24nXSB8fCBtb2RpZmllci5mbjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICBpZiAobW9kaWZpZXIuZW5hYmxlZCAmJiBpc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgLy8gQWRkIHByb3BlcnRpZXMgdG8gb2Zmc2V0cyB0byBtYWtlIHRoZW0gYSBjb21wbGV0ZSBjbGllbnRSZWN0IG9iamVjdFxuICAgICAgLy8gd2UgZG8gdGhpcyBiZWZvcmUgZWFjaCBtb2RpZmllciB0byBtYWtlIHN1cmUgdGhlIHByZXZpb3VzIG9uZSBkb2Vzbid0XG4gICAgICAvLyBtZXNzIHdpdGggdGhlc2UgdmFsdWVzXG4gICAgICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0Q2xpZW50UmVjdChkYXRhLm9mZnNldHMucG9wcGVyKTtcbiAgICAgIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UgPSBnZXRDbGllbnRSZWN0KGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UpO1xuXG4gICAgICBkYXRhID0gZm4oZGF0YSwgbW9kaWZpZXIpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJpbXBvcnQgY29tcHV0ZUF1dG9QbGFjZW1lbnQgZnJvbSAnLi4vdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQnO1xuaW1wb3J0IGdldFJlZmVyZW5jZU9mZnNldHMgZnJvbSAnLi4vdXRpbHMvZ2V0UmVmZXJlbmNlT2Zmc2V0cyc7XG5pbXBvcnQgZ2V0UG9wcGVyT2Zmc2V0cyBmcm9tICcuLi91dGlscy9nZXRQb3BwZXJPZmZzZXRzJztcbmltcG9ydCBydW5Nb2RpZmllcnMgZnJvbSAnLi4vdXRpbHMvcnVuTW9kaWZpZXJzJztcblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgcG9wcGVyLCBjb21wdXRpbmcgdGhlIG5ldyBvZmZzZXRzIGFuZCBhcHBseWluZ1xuICogdGhlIG5ldyBzdHlsZS48YnIgLz5cbiAqIFByZWZlciBgc2NoZWR1bGVVcGRhdGVgIG92ZXIgYHVwZGF0ZWAgYmVjYXVzZSBvZiBwZXJmb3JtYW5jZSByZWFzb25zLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gIC8vIGlmIHBvcHBlciBpcyBkZXN0cm95ZWQsIGRvbid0IHBlcmZvcm0gYW55IGZ1cnRoZXIgdXBkYXRlXG4gIGlmICh0aGlzLnN0YXRlLmlzRGVzdHJveWVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGRhdGEgPSB7XG4gICAgaW5zdGFuY2U6IHRoaXMsXG4gICAgc3R5bGVzOiB7fSxcbiAgICBhcnJvd1N0eWxlczoge30sXG4gICAgYXR0cmlidXRlczoge30sXG4gICAgZmxpcHBlZDogZmFsc2UsXG4gICAgb2Zmc2V0czoge30sXG4gIH07XG5cbiAgLy8gY29tcHV0ZSByZWZlcmVuY2UgZWxlbWVudCBvZmZzZXRzXG4gIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UgPSBnZXRSZWZlcmVuY2VPZmZzZXRzKFxuICAgIHRoaXMuc3RhdGUsXG4gICAgdGhpcy5wb3BwZXIsXG4gICAgdGhpcy5yZWZlcmVuY2UsXG4gICAgdGhpcy5vcHRpb25zLnBvc2l0aW9uRml4ZWRcbiAgKTtcblxuICAvLyBjb21wdXRlIGF1dG8gcGxhY2VtZW50LCBzdG9yZSBwbGFjZW1lbnQgaW5zaWRlIHRoZSBkYXRhIG9iamVjdCxcbiAgLy8gbW9kaWZpZXJzIHdpbGwgYmUgYWJsZSB0byBlZGl0IGBwbGFjZW1lbnRgIGlmIG5lZWRlZFxuICAvLyBhbmQgcmVmZXIgdG8gb3JpZ2luYWxQbGFjZW1lbnQgdG8ga25vdyB0aGUgb3JpZ2luYWwgdmFsdWVcbiAgZGF0YS5wbGFjZW1lbnQgPSBjb21wdXRlQXV0b1BsYWNlbWVudChcbiAgICB0aGlzLm9wdGlvbnMucGxhY2VtZW50LFxuICAgIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UsXG4gICAgdGhpcy5wb3BwZXIsXG4gICAgdGhpcy5yZWZlcmVuY2UsXG4gICAgdGhpcy5vcHRpb25zLm1vZGlmaWVycy5mbGlwLmJvdW5kYXJpZXNFbGVtZW50LFxuICAgIHRoaXMub3B0aW9ucy5tb2RpZmllcnMuZmxpcC5wYWRkaW5nXG4gICk7XG5cbiAgLy8gc3RvcmUgdGhlIGNvbXB1dGVkIHBsYWNlbWVudCBpbnNpZGUgYG9yaWdpbmFsUGxhY2VtZW50YFxuICBkYXRhLm9yaWdpbmFsUGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQ7XG5cbiAgZGF0YS5wb3NpdGlvbkZpeGVkID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uRml4ZWQ7XG5cbiAgLy8gY29tcHV0ZSB0aGUgcG9wcGVyIG9mZnNldHNcbiAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IGdldFBvcHBlck9mZnNldHMoXG4gICAgdGhpcy5wb3BwZXIsXG4gICAgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSxcbiAgICBkYXRhLnBsYWNlbWVudFxuICApO1xuXG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIucG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb25GaXhlZFxuICAgID8gJ2ZpeGVkJ1xuICAgIDogJ2Fic29sdXRlJztcblxuICAvLyBydW4gdGhlIG1vZGlmaWVyc1xuICBkYXRhID0gcnVuTW9kaWZpZXJzKHRoaXMubW9kaWZpZXJzLCBkYXRhKTtcblxuICAvLyB0aGUgZmlyc3QgYHVwZGF0ZWAgd2lsbCBjYWxsIGBvbkNyZWF0ZWAgY2FsbGJhY2tcbiAgLy8gdGhlIG90aGVyIG9uZXMgd2lsbCBjYWxsIGBvblVwZGF0ZWAgY2FsbGJhY2tcbiAgaWYgKCF0aGlzLnN0YXRlLmlzQ3JlYXRlZCkge1xuICAgIHRoaXMuc3RhdGUuaXNDcmVhdGVkID0gdHJ1ZTtcbiAgICB0aGlzLm9wdGlvbnMub25DcmVhdGUoZGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5vcHRpb25zLm9uVXBkYXRlKGRhdGEpO1xuICB9XG59XG4iLCIvKipcbiAqIEhlbHBlciB1c2VkIHRvIGtub3cgaWYgdGhlIGdpdmVuIG1vZGlmaWVyIGlzIGVuYWJsZWQuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNNb2RpZmllckVuYWJsZWQobW9kaWZpZXJzLCBtb2RpZmllck5hbWUpIHtcbiAgcmV0dXJuIG1vZGlmaWVycy5zb21lKFxuICAgICh7IG5hbWUsIGVuYWJsZWQgfSkgPT4gZW5hYmxlZCAmJiBuYW1lID09PSBtb2RpZmllck5hbWVcbiAgKTtcbn1cbiIsIi8qKlxuICogR2V0IHRoZSBwcmVmaXhlZCBzdXBwb3J0ZWQgcHJvcGVydHkgbmFtZVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IHByb3BlcnR5IChjYW1lbENhc2UpXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBwcmVmaXhlZCBwcm9wZXJ0eSAoY2FtZWxDYXNlIG9yIFBhc2NhbENhc2UsIGRlcGVuZGluZyBvbiB0aGUgdmVuZG9yIHByZWZpeClcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKHByb3BlcnR5KSB7XG4gIGNvbnN0IHByZWZpeGVzID0gW2ZhbHNlLCAnbXMnLCAnV2Via2l0JywgJ01veicsICdPJ107XG4gIGNvbnN0IHVwcGVyUHJvcCA9IHByb3BlcnR5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcGVydHkuc2xpY2UoMSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHByZWZpeCA9IHByZWZpeGVzW2ldO1xuICAgIGNvbnN0IHRvQ2hlY2sgPSBwcmVmaXggPyBgJHtwcmVmaXh9JHt1cHBlclByb3B9YCA6IHByb3BlcnR5O1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQuYm9keS5zdHlsZVt0b0NoZWNrXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0b0NoZWNrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbiIsImltcG9ydCBpc01vZGlmaWVyRW5hYmxlZCBmcm9tICcuLi91dGlscy9pc01vZGlmaWVyRW5hYmxlZCc7XG5pbXBvcnQgZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lIGZyb20gJy4uL3V0aWxzL2dldFN1cHBvcnRlZFByb3BlcnR5TmFtZSc7XG5cbi8qKlxuICogRGVzdHJveXMgdGhlIHBvcHBlci5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgdGhpcy5zdGF0ZS5pc0Rlc3Ryb3llZCA9IHRydWU7XG5cbiAgLy8gdG91Y2ggRE9NIG9ubHkgaWYgYGFwcGx5U3R5bGVgIG1vZGlmaWVyIGlzIGVuYWJsZWRcbiAgaWYgKGlzTW9kaWZpZXJFbmFibGVkKHRoaXMubW9kaWZpZXJzLCAnYXBwbHlTdHlsZScpKSB7XG4gICAgdGhpcy5wb3BwZXIucmVtb3ZlQXR0cmlidXRlKCd4LXBsYWNlbWVudCcpO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLnBvc2l0aW9uID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUudG9wID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUubGVmdCA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLnJpZ2h0ID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUuYm90dG9tID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUud2lsbENoYW5nZSA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlW2dldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJyldID0gJyc7XG4gIH1cblxuICB0aGlzLmRpc2FibGVFdmVudExpc3RlbmVycygpO1xuXG4gIC8vIHJlbW92ZSB0aGUgcG9wcGVyIGlmIHVzZXIgZXhwbGljaXRseSBhc2tlZCBmb3IgdGhlIGRlbGV0aW9uIG9uIGRlc3Ryb3lcbiAgLy8gZG8gbm90IHVzZSBgcmVtb3ZlYCBiZWNhdXNlIElFMTEgZG9lc24ndCBzdXBwb3J0IGl0XG4gIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZlT25EZXN0cm95KSB7XG4gICAgdGhpcy5wb3BwZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnBvcHBlcik7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG4iLCIvKipcbiAqIEdldCB0aGUgd2luZG93IGFzc29jaWF0ZWQgd2l0aCB0aGUgZWxlbWVudFxuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7V2luZG93fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3coZWxlbWVudCkge1xuICBjb25zdCBvd25lckRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50O1xuICByZXR1cm4gb3duZXJEb2N1bWVudCA/IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgOiB3aW5kb3c7XG59XG4iLCJpbXBvcnQgZ2V0U2Nyb2xsUGFyZW50IGZyb20gJy4vZ2V0U2Nyb2xsUGFyZW50JztcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSAnLi9nZXRXaW5kb3cnO1xuXG5mdW5jdGlvbiBhdHRhY2hUb1Njcm9sbFBhcmVudHMoc2Nyb2xsUGFyZW50LCBldmVudCwgY2FsbGJhY2ssIHNjcm9sbFBhcmVudHMpIHtcbiAgY29uc3QgaXNCb2R5ID0gc2Nyb2xsUGFyZW50Lm5vZGVOYW1lID09PSAnQk9EWSc7XG4gIGNvbnN0IHRhcmdldCA9IGlzQm9keSA/IHNjcm9sbFBhcmVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IDogc2Nyb2xsUGFyZW50O1xuICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2ssIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICBpZiAoIWlzQm9keSkge1xuICAgIGF0dGFjaFRvU2Nyb2xsUGFyZW50cyhcbiAgICAgIGdldFNjcm9sbFBhcmVudCh0YXJnZXQucGFyZW50Tm9kZSksXG4gICAgICBldmVudCxcbiAgICAgIGNhbGxiYWNrLFxuICAgICAgc2Nyb2xsUGFyZW50c1xuICAgICk7XG4gIH1cbiAgc2Nyb2xsUGFyZW50cy5wdXNoKHRhcmdldCk7XG59XG5cbi8qKlxuICogU2V0dXAgbmVlZGVkIGV2ZW50IGxpc3RlbmVycyB1c2VkIHRvIHVwZGF0ZSB0aGUgcG9wcGVyIHBvc2l0aW9uXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR1cEV2ZW50TGlzdGVuZXJzKFxuICByZWZlcmVuY2UsXG4gIG9wdGlvbnMsXG4gIHN0YXRlLFxuICB1cGRhdGVCb3VuZFxuKSB7XG4gIC8vIFJlc2l6ZSBldmVudCBsaXN0ZW5lciBvbiB3aW5kb3dcbiAgc3RhdGUudXBkYXRlQm91bmQgPSB1cGRhdGVCb3VuZDtcbiAgZ2V0V2luZG93KHJlZmVyZW5jZSkuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc3RhdGUudXBkYXRlQm91bmQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICAvLyBTY3JvbGwgZXZlbnQgbGlzdGVuZXIgb24gc2Nyb2xsIHBhcmVudHNcbiAgY29uc3Qgc2Nyb2xsRWxlbWVudCA9IGdldFNjcm9sbFBhcmVudChyZWZlcmVuY2UpO1xuICBhdHRhY2hUb1Njcm9sbFBhcmVudHMoXG4gICAgc2Nyb2xsRWxlbWVudCxcbiAgICAnc2Nyb2xsJyxcbiAgICBzdGF0ZS51cGRhdGVCb3VuZCxcbiAgICBzdGF0ZS5zY3JvbGxQYXJlbnRzXG4gICk7XG4gIHN0YXRlLnNjcm9sbEVsZW1lbnQgPSBzY3JvbGxFbGVtZW50O1xuICBzdGF0ZS5ldmVudHNFbmFibGVkID0gdHJ1ZTtcblxuICByZXR1cm4gc3RhdGU7XG59XG4iLCJpbXBvcnQgc2V0dXBFdmVudExpc3RlbmVycyBmcm9tICcuLi91dGlscy9zZXR1cEV2ZW50TGlzdGVuZXJzJztcblxuLyoqXG4gKiBJdCB3aWxsIGFkZCByZXNpemUvc2Nyb2xsIGV2ZW50cyBhbmQgc3RhcnQgcmVjYWxjdWxhdGluZ1xuICogcG9zaXRpb24gb2YgdGhlIHBvcHBlciBlbGVtZW50IHdoZW4gdGhleSBhcmUgdHJpZ2dlcmVkLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmFibGVFdmVudExpc3RlbmVycygpIHtcbiAgaWYgKCF0aGlzLnN0YXRlLmV2ZW50c0VuYWJsZWQpIHtcbiAgICB0aGlzLnN0YXRlID0gc2V0dXBFdmVudExpc3RlbmVycyhcbiAgICAgIHRoaXMucmVmZXJlbmNlLFxuICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgdGhpcy5zdGF0ZSxcbiAgICAgIHRoaXMuc2NoZWR1bGVVcGRhdGVcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gJy4vZ2V0V2luZG93JztcblxuLyoqXG4gKiBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzIHVzZWQgdG8gdXBkYXRlIHRoZSBwb3BwZXIgcG9zaXRpb25cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKHJlZmVyZW5jZSwgc3RhdGUpIHtcbiAgLy8gUmVtb3ZlIHJlc2l6ZSBldmVudCBsaXN0ZW5lciBvbiB3aW5kb3dcbiAgZ2V0V2luZG93KHJlZmVyZW5jZSkucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc3RhdGUudXBkYXRlQm91bmQpO1xuXG4gIC8vIFJlbW92ZSBzY3JvbGwgZXZlbnQgbGlzdGVuZXIgb24gc2Nyb2xsIHBhcmVudHNcbiAgc3RhdGUuc2Nyb2xsUGFyZW50cy5mb3JFYWNoKHRhcmdldCA9PiB7XG4gICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHN0YXRlLnVwZGF0ZUJvdW5kKTtcbiAgfSk7XG5cbiAgLy8gUmVzZXQgc3RhdGVcbiAgc3RhdGUudXBkYXRlQm91bmQgPSBudWxsO1xuICBzdGF0ZS5zY3JvbGxQYXJlbnRzID0gW107XG4gIHN0YXRlLnNjcm9sbEVsZW1lbnQgPSBudWxsO1xuICBzdGF0ZS5ldmVudHNFbmFibGVkID0gZmFsc2U7XG4gIHJldHVybiBzdGF0ZTtcbn1cbiIsImltcG9ydCByZW1vdmVFdmVudExpc3RlbmVycyBmcm9tICcuLi91dGlscy9yZW1vdmVFdmVudExpc3RlbmVycyc7XG5cbi8qKlxuICogSXQgd2lsbCByZW1vdmUgcmVzaXplL3Njcm9sbCBldmVudHMgYW5kIHdvbid0IHJlY2FsY3VsYXRlIHBvcHBlciBwb3NpdGlvblxuICogd2hlbiB0aGV5IGFyZSB0cmlnZ2VyZWQuIEl0IGFsc28gd29uJ3QgdHJpZ2dlciBgb25VcGRhdGVgIGNhbGxiYWNrIGFueW1vcmUsXG4gKiB1bmxlc3MgeW91IGNhbGwgYHVwZGF0ZWAgbWV0aG9kIG1hbnVhbGx5LlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGlmICh0aGlzLnN0YXRlLmV2ZW50c0VuYWJsZWQpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnNjaGVkdWxlVXBkYXRlKTtcbiAgICB0aGlzLnN0YXRlID0gcmVtb3ZlRXZlbnRMaXN0ZW5lcnModGhpcy5yZWZlcmVuY2UsIHRoaXMuc3RhdGUpO1xuICB9XG59XG4iLCIvKipcbiAqIFRlbGxzIGlmIGEgZ2l2ZW4gaW5wdXQgaXMgYSBudW1iZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7Kn0gaW5wdXQgdG8gY2hlY2tcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTnVtZXJpYyhuKSB7XG4gIHJldHVybiBuICE9PSAnJyAmJiAhaXNOYU4ocGFyc2VGbG9hdChuKSkgJiYgaXNGaW5pdGUobik7XG59XG4iLCJpbXBvcnQgaXNOdW1lcmljIGZyb20gJy4vaXNOdW1lcmljJztcblxuLyoqXG4gKiBTZXQgdGhlIHN0eWxlIHRvIHRoZSBnaXZlbiBwb3BwZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudCAtIEVsZW1lbnQgdG8gYXBwbHkgdGhlIHN0eWxlIHRvXG4gKiBAYXJndW1lbnQge09iamVjdH0gc3R5bGVzXG4gKiBPYmplY3Qgd2l0aCBhIGxpc3Qgb2YgcHJvcGVydGllcyBhbmQgdmFsdWVzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgZWxlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTdHlsZXMoZWxlbWVudCwgc3R5bGVzKSB7XG4gIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChwcm9wID0+IHtcbiAgICBsZXQgdW5pdCA9ICcnO1xuICAgIC8vIGFkZCB1bml0IGlmIHRoZSB2YWx1ZSBpcyBudW1lcmljIGFuZCBpcyBvbmUgb2YgdGhlIGZvbGxvd2luZ1xuICAgIGlmIChcbiAgICAgIFsnd2lkdGgnLCAnaGVpZ2h0JywgJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLmluZGV4T2YocHJvcCkgIT09XG4gICAgICAgIC0xICYmXG4gICAgICBpc051bWVyaWMoc3R5bGVzW3Byb3BdKVxuICAgICkge1xuICAgICAgdW5pdCA9ICdweCc7XG4gICAgfVxuICAgIGVsZW1lbnQuc3R5bGVbcHJvcF0gPSBzdHlsZXNbcHJvcF0gKyB1bml0O1xuICB9KTtcbn1cbiIsIi8qKlxuICogU2V0IHRoZSBhdHRyaWJ1dGVzIHRvIHRoZSBnaXZlbiBwb3BwZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudCAtIEVsZW1lbnQgdG8gYXBwbHkgdGhlIGF0dHJpYnV0ZXMgdG9cbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBzdHlsZXNcbiAqIE9iamVjdCB3aXRoIGEgbGlzdCBvZiBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXMgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBlbGVtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uKHByb3ApIHtcbiAgICBjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZXNbcHJvcF07XG4gICAgaWYgKHZhbHVlICE9PSBmYWxzZSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcCwgYXR0cmlidXRlc1twcm9wXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHByb3ApO1xuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgc2V0U3R5bGVzIGZyb20gJy4uL3V0aWxzL3NldFN0eWxlcyc7XG5pbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tICcuLi91dGlscy9zZXRBdHRyaWJ1dGVzJztcbmltcG9ydCBnZXRSZWZlcmVuY2VPZmZzZXRzIGZyb20gJy4uL3V0aWxzL2dldFJlZmVyZW5jZU9mZnNldHMnO1xuaW1wb3J0IGNvbXB1dGVBdXRvUGxhY2VtZW50IGZyb20gJy4uL3V0aWxzL2NvbXB1dGVBdXRvUGxhY2VtZW50JztcblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhLnN0eWxlcyAtIExpc3Qgb2Ygc3R5bGUgcHJvcGVydGllcyAtIHZhbHVlcyB0byBhcHBseSB0byBwb3BwZXIgZWxlbWVudFxuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEuYXR0cmlidXRlcyAtIExpc3Qgb2YgYXR0cmlidXRlIHByb3BlcnRpZXMgLSB2YWx1ZXMgdG8gYXBwbHkgdG8gcG9wcGVyIGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBzYW1lIGRhdGEgb2JqZWN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGx5U3R5bGUoZGF0YSkge1xuICAvLyBhbnkgcHJvcGVydHkgcHJlc2VudCBpbiBgZGF0YS5zdHlsZXNgIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyLFxuICAvLyBpbiB0aGlzIHdheSB3ZSBjYW4gbWFrZSB0aGUgM3JkIHBhcnR5IG1vZGlmaWVycyBhZGQgY3VzdG9tIHN0eWxlcyB0byBpdFxuICAvLyBCZSBhd2FyZSwgbW9kaWZpZXJzIGNvdWxkIG92ZXJyaWRlIHRoZSBwcm9wZXJ0aWVzIGRlZmluZWQgaW4gdGhlIHByZXZpb3VzXG4gIC8vIGxpbmVzIG9mIHRoaXMgbW9kaWZpZXIhXG4gIHNldFN0eWxlcyhkYXRhLmluc3RhbmNlLnBvcHBlciwgZGF0YS5zdHlsZXMpO1xuXG4gIC8vIGFueSBwcm9wZXJ0eSBwcmVzZW50IGluIGBkYXRhLmF0dHJpYnV0ZXNgIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyLFxuICAvLyB0aGV5IHdpbGwgYmUgc2V0IGFzIEhUTUwgYXR0cmlidXRlcyBvZiB0aGUgZWxlbWVudFxuICBzZXRBdHRyaWJ1dGVzKGRhdGEuaW5zdGFuY2UucG9wcGVyLCBkYXRhLmF0dHJpYnV0ZXMpO1xuXG4gIC8vIGlmIGFycm93RWxlbWVudCBpcyBkZWZpbmVkIGFuZCBhcnJvd1N0eWxlcyBoYXMgc29tZSBwcm9wZXJ0aWVzXG4gIGlmIChkYXRhLmFycm93RWxlbWVudCAmJiBPYmplY3Qua2V5cyhkYXRhLmFycm93U3R5bGVzKS5sZW5ndGgpIHtcbiAgICBzZXRTdHlsZXMoZGF0YS5hcnJvd0VsZW1lbnQsIGRhdGEuYXJyb3dTdHlsZXMpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogU2V0IHRoZSB4LXBsYWNlbWVudCBhdHRyaWJ1dGUgYmVmb3JlIGV2ZXJ5dGhpbmcgZWxzZSBiZWNhdXNlIGl0IGNvdWxkIGJlIHVzZWRcbiAqIHRvIGFkZCBtYXJnaW5zIHRvIHRoZSBwb3BwZXIgbWFyZ2lucyBuZWVkcyB0byBiZSBjYWxjdWxhdGVkIHRvIGdldCB0aGVcbiAqIGNvcnJlY3QgcG9wcGVyIG9mZnNldHMuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLm1vZGlmaWVyc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcmVmZXJlbmNlIC0gVGhlIHJlZmVyZW5jZSBlbGVtZW50IHVzZWQgdG8gcG9zaXRpb24gdGhlIHBvcHBlclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wcGVyIC0gVGhlIEhUTUwgZWxlbWVudCB1c2VkIGFzIHBvcHBlclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBQb3BwZXIuanMgb3B0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlTdHlsZU9uTG9hZChcbiAgcmVmZXJlbmNlLFxuICBwb3BwZXIsXG4gIG9wdGlvbnMsXG4gIG1vZGlmaWVyT3B0aW9ucyxcbiAgc3RhdGVcbikge1xuICAvLyBjb21wdXRlIHJlZmVyZW5jZSBlbGVtZW50IG9mZnNldHNcbiAgY29uc3QgcmVmZXJlbmNlT2Zmc2V0cyA9IGdldFJlZmVyZW5jZU9mZnNldHMoc3RhdGUsIHBvcHBlciwgcmVmZXJlbmNlLCBvcHRpb25zLnBvc2l0aW9uRml4ZWQpO1xuXG4gIC8vIGNvbXB1dGUgYXV0byBwbGFjZW1lbnQsIHN0b3JlIHBsYWNlbWVudCBpbnNpZGUgdGhlIGRhdGEgb2JqZWN0LFxuICAvLyBtb2RpZmllcnMgd2lsbCBiZSBhYmxlIHRvIGVkaXQgYHBsYWNlbWVudGAgaWYgbmVlZGVkXG4gIC8vIGFuZCByZWZlciB0byBvcmlnaW5hbFBsYWNlbWVudCB0byBrbm93IHRoZSBvcmlnaW5hbCB2YWx1ZVxuICBjb25zdCBwbGFjZW1lbnQgPSBjb21wdXRlQXV0b1BsYWNlbWVudChcbiAgICBvcHRpb25zLnBsYWNlbWVudCxcbiAgICByZWZlcmVuY2VPZmZzZXRzLFxuICAgIHBvcHBlcixcbiAgICByZWZlcmVuY2UsXG4gICAgb3B0aW9ucy5tb2RpZmllcnMuZmxpcC5ib3VuZGFyaWVzRWxlbWVudCxcbiAgICBvcHRpb25zLm1vZGlmaWVycy5mbGlwLnBhZGRpbmdcbiAgKTtcblxuICBwb3BwZXIuc2V0QXR0cmlidXRlKCd4LXBsYWNlbWVudCcsIHBsYWNlbWVudCk7XG5cbiAgLy8gQXBwbHkgYHBvc2l0aW9uYCB0byBwb3BwZXIgYmVmb3JlIGFueXRoaW5nIGVsc2UgYmVjYXVzZVxuICAvLyB3aXRob3V0IHRoZSBwb3NpdGlvbiBhcHBsaWVkIHdlIGNhbid0IGd1YXJhbnRlZSBjb3JyZWN0IGNvbXB1dGF0aW9uc1xuICBzZXRTdHlsZXMocG9wcGVyLCB7IHBvc2l0aW9uOiBvcHRpb25zLnBvc2l0aW9uRml4ZWQgPyAnZml4ZWQnIDogJ2Fic29sdXRlJyB9KTtcblxuICByZXR1cm4gb3B0aW9ucztcbn1cbiIsIi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge0Jvb2xlYW59IHNob3VsZFJvdW5kIC0gSWYgdGhlIG9mZnNldHMgc2hvdWxkIGJlIHJvdW5kZWQgYXQgYWxsXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcG9wcGVyJ3MgcG9zaXRpb24gb2Zmc2V0cyByb3VuZGVkXG4gKlxuICogVGhlIHRhbGUgb2YgcGl4ZWwtcGVyZmVjdCBwb3NpdGlvbmluZy4gSXQncyBzdGlsbCBub3QgMTAwJSBwZXJmZWN0LCBidXQgYXNcbiAqIGdvb2QgYXMgaXQgY2FuIGJlIHdpdGhpbiByZWFzb24uXG4gKiBEaXNjdXNzaW9uIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9GZXpWcmFzdGEvcG9wcGVyLmpzL3B1bGwvNzE1XG4gKlxuICogTG93IERQSSBzY3JlZW5zIGNhdXNlIGEgcG9wcGVyIHRvIGJlIGJsdXJyeSBpZiBub3QgdXNpbmcgZnVsbCBwaXhlbHMgKFNhZmFyaVxuICogYXMgd2VsbCBvbiBIaWdoIERQSSBzY3JlZW5zKS5cbiAqXG4gKiBGaXJlZm94IHByZWZlcnMgbm8gcm91bmRpbmcgZm9yIHBvc2l0aW9uaW5nIGFuZCBkb2VzIG5vdCBoYXZlIGJsdXJyaW5lc3Mgb25cbiAqIGhpZ2ggRFBJIHNjcmVlbnMuXG4gKlxuICogT25seSBob3Jpem9udGFsIHBsYWNlbWVudCBhbmQgbGVmdC9yaWdodCB2YWx1ZXMgbmVlZCB0byBiZSBjb25zaWRlcmVkLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRSb3VuZGVkT2Zmc2V0cyhkYXRhLCBzaG91bGRSb3VuZCkge1xuICBjb25zdCB7IHBvcHBlciwgcmVmZXJlbmNlIH0gPSBkYXRhLm9mZnNldHM7XG4gIGNvbnN0IHsgcm91bmQsIGZsb29yIH0gPSBNYXRoO1xuICBjb25zdCBub1JvdW5kID0gdiA9PiB2O1xuICBcbiAgY29uc3QgcmVmZXJlbmNlV2lkdGggPSByb3VuZChyZWZlcmVuY2Uud2lkdGgpO1xuICBjb25zdCBwb3BwZXJXaWR0aCA9IHJvdW5kKHBvcHBlci53aWR0aCk7XG4gIFxuICBjb25zdCBpc1ZlcnRpY2FsID0gWydsZWZ0JywgJ3JpZ2h0J10uaW5kZXhPZihkYXRhLnBsYWNlbWVudCkgIT09IC0xO1xuICBjb25zdCBpc1ZhcmlhdGlvbiA9IGRhdGEucGxhY2VtZW50LmluZGV4T2YoJy0nKSAhPT0gLTE7XG4gIGNvbnN0IHNhbWVXaWR0aFBhcml0eSA9IHJlZmVyZW5jZVdpZHRoICUgMiA9PT0gcG9wcGVyV2lkdGggJSAyO1xuICBjb25zdCBib3RoT2RkV2lkdGggPSByZWZlcmVuY2VXaWR0aCAlIDIgPT09IDEgJiYgcG9wcGVyV2lkdGggJSAyID09PSAxO1xuXG4gIGNvbnN0IGhvcml6b250YWxUb0ludGVnZXIgPSAhc2hvdWxkUm91bmRcbiAgICA/IG5vUm91bmRcbiAgICA6IGlzVmVydGljYWwgfHwgaXNWYXJpYXRpb24gfHwgc2FtZVdpZHRoUGFyaXR5XG4gICAgPyByb3VuZFxuICAgIDogZmxvb3I7XG4gIGNvbnN0IHZlcnRpY2FsVG9JbnRlZ2VyID0gIXNob3VsZFJvdW5kID8gbm9Sb3VuZCA6IHJvdW5kO1xuXG4gIHJldHVybiB7XG4gICAgbGVmdDogaG9yaXpvbnRhbFRvSW50ZWdlcihcbiAgICAgIGJvdGhPZGRXaWR0aCAmJiAhaXNWYXJpYXRpb24gJiYgc2hvdWxkUm91bmRcbiAgICAgICAgPyBwb3BwZXIubGVmdCAtIDFcbiAgICAgICAgOiBwb3BwZXIubGVmdFxuICAgICksXG4gICAgdG9wOiB2ZXJ0aWNhbFRvSW50ZWdlcihwb3BwZXIudG9wKSxcbiAgICBib3R0b206IHZlcnRpY2FsVG9JbnRlZ2VyKHBvcHBlci5ib3R0b20pLFxuICAgIHJpZ2h0OiBob3Jpem9udGFsVG9JbnRlZ2VyKHBvcHBlci5yaWdodCksXG4gIH07XG59XG4iLCJpbXBvcnQgZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lIGZyb20gJy4uL3V0aWxzL2dldFN1cHBvcnRlZFByb3BlcnR5TmFtZSc7XG5pbXBvcnQgZmluZCBmcm9tICcuLi91dGlscy9maW5kJztcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSAnLi4vdXRpbHMvZ2V0T2Zmc2V0UGFyZW50JztcbmltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSAnLi4vdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0JztcbmltcG9ydCBnZXRSb3VuZGVkT2Zmc2V0cyBmcm9tICcuLi91dGlscy9nZXRSb3VuZGVkT2Zmc2V0cyc7XG5pbXBvcnQgaXNCcm93c2VyIGZyb20gJy4uL3V0aWxzL2lzQnJvd3Nlcic7XG5cbmNvbnN0IGlzRmlyZWZveCA9IGlzQnJvd3NlciAmJiAvRmlyZWZveC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVTdHlsZShkYXRhLCBvcHRpb25zKSB7XG4gIGNvbnN0IHsgeCwgeSB9ID0gb3B0aW9ucztcbiAgY29uc3QgeyBwb3BwZXIgfSA9IGRhdGEub2Zmc2V0cztcblxuICAvLyBSZW1vdmUgdGhpcyBsZWdhY3kgc3VwcG9ydCBpbiBQb3BwZXIuanMgdjJcbiAgY29uc3QgbGVnYWN5R3B1QWNjZWxlcmF0aW9uT3B0aW9uID0gZmluZChcbiAgICBkYXRhLmluc3RhbmNlLm1vZGlmaWVycyxcbiAgICBtb2RpZmllciA9PiBtb2RpZmllci5uYW1lID09PSAnYXBwbHlTdHlsZSdcbiAgKS5ncHVBY2NlbGVyYXRpb247XG4gIGlmIChsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgICdXQVJOSU5HOiBgZ3B1QWNjZWxlcmF0aW9uYCBvcHRpb24gbW92ZWQgdG8gYGNvbXB1dGVTdHlsZWAgbW9kaWZpZXIgYW5kIHdpbGwgbm90IGJlIHN1cHBvcnRlZCBpbiBmdXR1cmUgdmVyc2lvbnMgb2YgUG9wcGVyLmpzISdcbiAgICApO1xuICB9XG4gIGNvbnN0IGdwdUFjY2VsZXJhdGlvbiA9XG4gICAgbGVnYWN5R3B1QWNjZWxlcmF0aW9uT3B0aW9uICE9PSB1bmRlZmluZWRcbiAgICAgID8gbGVnYWN5R3B1QWNjZWxlcmF0aW9uT3B0aW9uXG4gICAgICA6IG9wdGlvbnMuZ3B1QWNjZWxlcmF0aW9uO1xuXG4gIGNvbnN0IG9mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChkYXRhLmluc3RhbmNlLnBvcHBlcik7XG4gIGNvbnN0IG9mZnNldFBhcmVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qob2Zmc2V0UGFyZW50KTtcblxuICAvLyBTdHlsZXNcbiAgY29uc3Qgc3R5bGVzID0ge1xuICAgIHBvc2l0aW9uOiBwb3BwZXIucG9zaXRpb24sXG4gIH07XG5cbiAgY29uc3Qgb2Zmc2V0cyA9IGdldFJvdW5kZWRPZmZzZXRzKFxuICAgIGRhdGEsXG4gICAgd2luZG93LmRldmljZVBpeGVsUmF0aW8gPCAyIHx8ICFpc0ZpcmVmb3hcbiAgKTtcblxuICBjb25zdCBzaWRlQSA9IHggPT09ICdib3R0b20nID8gJ3RvcCcgOiAnYm90dG9tJztcbiAgY29uc3Qgc2lkZUIgPSB5ID09PSAncmlnaHQnID8gJ2xlZnQnIDogJ3JpZ2h0JztcblxuICAvLyBpZiBncHVBY2NlbGVyYXRpb24gaXMgc2V0IHRvIGB0cnVlYCBhbmQgdHJhbnNmb3JtIGlzIHN1cHBvcnRlZCxcbiAgLy8gIHdlIHVzZSBgdHJhbnNsYXRlM2RgIHRvIGFwcGx5IHRoZSBwb3NpdGlvbiB0byB0aGUgcG9wcGVyIHdlXG4gIC8vIGF1dG9tYXRpY2FsbHkgdXNlIHRoZSBzdXBwb3J0ZWQgcHJlZml4ZWQgdmVyc2lvbiBpZiBuZWVkZWRcbiAgY29uc3QgcHJlZml4ZWRQcm9wZXJ0eSA9IGdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJyk7XG5cbiAgLy8gbm93LCBsZXQncyBtYWtlIGEgc3RlcCBiYWNrIGFuZCBsb29rIGF0IHRoaXMgY29kZSBjbG9zZWx5ICh3dGY/KVxuICAvLyBJZiB0aGUgY29udGVudCBvZiB0aGUgcG9wcGVyIGdyb3dzIG9uY2UgaXQncyBiZWVuIHBvc2l0aW9uZWQsIGl0XG4gIC8vIG1heSBoYXBwZW4gdGhhdCB0aGUgcG9wcGVyIGdldHMgbWlzcGxhY2VkIGJlY2F1c2Ugb2YgdGhlIG5ldyBjb250ZW50XG4gIC8vIG92ZXJmbG93aW5nIGl0cyByZWZlcmVuY2UgZWxlbWVudFxuICAvLyBUbyBhdm9pZCB0aGlzIHByb2JsZW0sIHdlIHByb3ZpZGUgdHdvIG9wdGlvbnMgKHggYW5kIHkpLCB3aGljaCBhbGxvd1xuICAvLyB0aGUgY29uc3VtZXIgdG8gZGVmaW5lIHRoZSBvZmZzZXQgb3JpZ2luLlxuICAvLyBJZiB3ZSBwb3NpdGlvbiBhIHBvcHBlciBvbiB0b3Agb2YgYSByZWZlcmVuY2UgZWxlbWVudCwgd2UgY2FuIHNldFxuICAvLyBgeGAgdG8gYHRvcGAgdG8gbWFrZSB0aGUgcG9wcGVyIGdyb3cgdG93YXJkcyBpdHMgdG9wIGluc3RlYWQgb2ZcbiAgLy8gaXRzIGJvdHRvbS5cbiAgbGV0IGxlZnQsIHRvcDtcbiAgaWYgKHNpZGVBID09PSAnYm90dG9tJykge1xuICAgIC8vIHdoZW4gb2Zmc2V0UGFyZW50IGlzIDxodG1sPiB0aGUgcG9zaXRpb25pbmcgaXMgcmVsYXRpdmUgdG8gdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuIChleGNsdWRpbmcgdGhlIHNjcm9sbGJhcilcbiAgICAvLyBhbmQgbm90IHRoZSBib3R0b20gb2YgdGhlIGh0bWwgZWxlbWVudFxuICAgIGlmIChvZmZzZXRQYXJlbnQubm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgICAgdG9wID0gLW9mZnNldFBhcmVudC5jbGllbnRIZWlnaHQgKyBvZmZzZXRzLmJvdHRvbTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9wID0gLW9mZnNldFBhcmVudFJlY3QuaGVpZ2h0ICsgb2Zmc2V0cy5ib3R0b207XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRvcCA9IG9mZnNldHMudG9wO1xuICB9XG4gIGlmIChzaWRlQiA9PT0gJ3JpZ2h0Jykge1xuICAgIGlmIChvZmZzZXRQYXJlbnQubm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgICAgbGVmdCA9IC1vZmZzZXRQYXJlbnQuY2xpZW50V2lkdGggKyBvZmZzZXRzLnJpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBsZWZ0ID0gLW9mZnNldFBhcmVudFJlY3Qud2lkdGggKyBvZmZzZXRzLnJpZ2h0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZWZ0ID0gb2Zmc2V0cy5sZWZ0O1xuICB9XG4gIGlmIChncHVBY2NlbGVyYXRpb24gJiYgcHJlZml4ZWRQcm9wZXJ0eSkge1xuICAgIHN0eWxlc1twcmVmaXhlZFByb3BlcnR5XSA9IGB0cmFuc2xhdGUzZCgke2xlZnR9cHgsICR7dG9wfXB4LCAwKWA7XG4gICAgc3R5bGVzW3NpZGVBXSA9IDA7XG4gICAgc3R5bGVzW3NpZGVCXSA9IDA7XG4gICAgc3R5bGVzLndpbGxDaGFuZ2UgPSAndHJhbnNmb3JtJztcbiAgfSBlbHNlIHtcbiAgICAvLyBvdGh3ZXJpc2UsIHdlIHVzZSB0aGUgc3RhbmRhcmQgYHRvcGAsIGBsZWZ0YCwgYGJvdHRvbWAgYW5kIGByaWdodGAgcHJvcGVydGllc1xuICAgIGNvbnN0IGludmVydFRvcCA9IHNpZGVBID09PSAnYm90dG9tJyA/IC0xIDogMTtcbiAgICBjb25zdCBpbnZlcnRMZWZ0ID0gc2lkZUIgPT09ICdyaWdodCcgPyAtMSA6IDE7XG4gICAgc3R5bGVzW3NpZGVBXSA9IHRvcCAqIGludmVydFRvcDtcbiAgICBzdHlsZXNbc2lkZUJdID0gbGVmdCAqIGludmVydExlZnQ7XG4gICAgc3R5bGVzLndpbGxDaGFuZ2UgPSBgJHtzaWRlQX0sICR7c2lkZUJ9YDtcbiAgfVxuXG4gIC8vIEF0dHJpYnV0ZXNcbiAgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgICAneC1wbGFjZW1lbnQnOiBkYXRhLnBsYWNlbWVudCxcbiAgfTtcblxuICAvLyBVcGRhdGUgYGRhdGFgIGF0dHJpYnV0ZXMsIHN0eWxlcyBhbmQgYXJyb3dTdHlsZXNcbiAgZGF0YS5hdHRyaWJ1dGVzID0geyAuLi5hdHRyaWJ1dGVzLCAuLi5kYXRhLmF0dHJpYnV0ZXMgfTtcbiAgZGF0YS5zdHlsZXMgPSB7IC4uLnN0eWxlcywgLi4uZGF0YS5zdHlsZXMgfTtcbiAgZGF0YS5hcnJvd1N0eWxlcyA9IHsgLi4uZGF0YS5vZmZzZXRzLmFycm93LCAuLi5kYXRhLmFycm93U3R5bGVzIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJpbXBvcnQgZmluZCBmcm9tICcuL2ZpbmQnO1xuXG4vKipcbiAqIEhlbHBlciB1c2VkIHRvIGtub3cgaWYgdGhlIGdpdmVuIG1vZGlmaWVyIGRlcGVuZHMgZnJvbSBhbm90aGVyIG9uZS48YnIgLz5cbiAqIEl0IGNoZWNrcyBpZiB0aGUgbmVlZGVkIG1vZGlmaWVyIGlzIGxpc3RlZCBhbmQgZW5hYmxlZC5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVycyAtIGxpc3Qgb2YgbW9kaWZpZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdGluZ05hbWUgLSBuYW1lIG9mIHJlcXVlc3RpbmcgbW9kaWZpZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0ZWROYW1lIC0gbmFtZSBvZiByZXF1ZXN0ZWQgbW9kaWZpZXJcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc01vZGlmaWVyUmVxdWlyZWQoXG4gIG1vZGlmaWVycyxcbiAgcmVxdWVzdGluZ05hbWUsXG4gIHJlcXVlc3RlZE5hbWVcbikge1xuICBjb25zdCByZXF1ZXN0aW5nID0gZmluZChtb2RpZmllcnMsICh7IG5hbWUgfSkgPT4gbmFtZSA9PT0gcmVxdWVzdGluZ05hbWUpO1xuXG4gIGNvbnN0IGlzUmVxdWlyZWQgPVxuICAgICEhcmVxdWVzdGluZyAmJlxuICAgIG1vZGlmaWVycy5zb21lKG1vZGlmaWVyID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIG1vZGlmaWVyLm5hbWUgPT09IHJlcXVlc3RlZE5hbWUgJiZcbiAgICAgICAgbW9kaWZpZXIuZW5hYmxlZCAmJlxuICAgICAgICBtb2RpZmllci5vcmRlciA8IHJlcXVlc3Rpbmcub3JkZXJcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgaWYgKCFpc1JlcXVpcmVkKSB7XG4gICAgY29uc3QgcmVxdWVzdGluZyA9IGBcXGAke3JlcXVlc3RpbmdOYW1lfVxcYGA7XG4gICAgY29uc3QgcmVxdWVzdGVkID0gYFxcYCR7cmVxdWVzdGVkTmFtZX1cXGBgO1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGAke3JlcXVlc3RlZH0gbW9kaWZpZXIgaXMgcmVxdWlyZWQgYnkgJHtyZXF1ZXN0aW5nfSBtb2RpZmllciBpbiBvcmRlciB0byB3b3JrLCBiZSBzdXJlIHRvIGluY2x1ZGUgaXQgYmVmb3JlICR7cmVxdWVzdGluZ30hYFxuICAgICk7XG4gIH1cbiAgcmV0dXJuIGlzUmVxdWlyZWQ7XG59XG4iLCJpbXBvcnQgZ2V0Q2xpZW50UmVjdCBmcm9tICcuLi91dGlscy9nZXRDbGllbnRSZWN0JztcbmltcG9ydCBnZXRPdXRlclNpemVzIGZyb20gJy4uL3V0aWxzL2dldE91dGVyU2l6ZXMnO1xuaW1wb3J0IGlzTW9kaWZpZXJSZXF1aXJlZCBmcm9tICcuLi91dGlscy9pc01vZGlmaWVyUmVxdWlyZWQnO1xuaW1wb3J0IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSBmcm9tICcuLi91dGlscy9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXJyb3coZGF0YSwgb3B0aW9ucykge1xuICAvLyBhcnJvdyBkZXBlbmRzIG9uIGtlZXBUb2dldGhlciBpbiBvcmRlciB0byB3b3JrXG4gIGlmICghaXNNb2RpZmllclJlcXVpcmVkKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCAnYXJyb3cnLCAna2VlcFRvZ2V0aGVyJykpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGxldCBhcnJvd0VsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQ7XG5cbiAgLy8gaWYgYXJyb3dFbGVtZW50IGlzIGEgc3RyaW5nLCBzdXBwb3NlIGl0J3MgYSBDU1Mgc2VsZWN0b3JcbiAgaWYgKHR5cGVvZiBhcnJvd0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgYXJyb3dFbGVtZW50ID0gZGF0YS5pbnN0YW5jZS5wb3BwZXIucXVlcnlTZWxlY3RvcihhcnJvd0VsZW1lbnQpO1xuXG4gICAgLy8gaWYgYXJyb3dFbGVtZW50IGlzIG5vdCBmb3VuZCwgZG9uJ3QgcnVuIHRoZSBtb2RpZmllclxuICAgIGlmICghYXJyb3dFbGVtZW50KSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgdGhlIGFycm93RWxlbWVudCBpc24ndCBhIHF1ZXJ5IHNlbGVjdG9yIHdlIG11c3QgY2hlY2sgdGhhdCB0aGVcbiAgICAvLyBwcm92aWRlZCBET00gbm9kZSBpcyBjaGlsZCBvZiBpdHMgcG9wcGVyIG5vZGVcbiAgICBpZiAoIWRhdGEuaW5zdGFuY2UucG9wcGVyLmNvbnRhaW5zKGFycm93RWxlbWVudCkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1dBUk5JTkc6IGBhcnJvdy5lbGVtZW50YCBtdXN0IGJlIGNoaWxkIG9mIGl0cyBwb3BwZXIgZWxlbWVudCEnXG4gICAgICApO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgY29uc3QgeyBwb3BwZXIsIHJlZmVyZW5jZSB9ID0gZGF0YS5vZmZzZXRzO1xuICBjb25zdCBpc1ZlcnRpY2FsID0gWydsZWZ0JywgJ3JpZ2h0J10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcblxuICBjb25zdCBsZW4gPSBpc1ZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICBjb25zdCBzaWRlQ2FwaXRhbGl6ZWQgPSBpc1ZlcnRpY2FsID8gJ1RvcCcgOiAnTGVmdCc7XG4gIGNvbnN0IHNpZGUgPSBzaWRlQ2FwaXRhbGl6ZWQudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgYWx0U2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcbiAgY29uc3Qgb3BTaWRlID0gaXNWZXJ0aWNhbCA/ICdib3R0b20nIDogJ3JpZ2h0JztcbiAgY29uc3QgYXJyb3dFbGVtZW50U2l6ZSA9IGdldE91dGVyU2l6ZXMoYXJyb3dFbGVtZW50KVtsZW5dO1xuXG4gIC8vXG4gIC8vIGV4dGVuZHMga2VlcFRvZ2V0aGVyIGJlaGF2aW9yIG1ha2luZyBzdXJlIHRoZSBwb3BwZXIgYW5kIGl0c1xuICAvLyByZWZlcmVuY2UgaGF2ZSBlbm91Z2ggcGl4ZWxzIGluIGNvbmp1bmN0aW9uXG4gIC8vXG5cbiAgLy8gdG9wL2xlZnQgc2lkZVxuICBpZiAocmVmZXJlbmNlW29wU2lkZV0gLSBhcnJvd0VsZW1lbnRTaXplIDwgcG9wcGVyW3NpZGVdKSB7XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlcltzaWRlXSAtPVxuICAgICAgcG9wcGVyW3NpZGVdIC0gKHJlZmVyZW5jZVtvcFNpZGVdIC0gYXJyb3dFbGVtZW50U2l6ZSk7XG4gIH1cbiAgLy8gYm90dG9tL3JpZ2h0IHNpZGVcbiAgaWYgKHJlZmVyZW5jZVtzaWRlXSArIGFycm93RWxlbWVudFNpemUgPiBwb3BwZXJbb3BTaWRlXSkge1xuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXJbc2lkZV0gKz1cbiAgICAgIHJlZmVyZW5jZVtzaWRlXSArIGFycm93RWxlbWVudFNpemUgLSBwb3BwZXJbb3BTaWRlXTtcbiAgfVxuICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0Q2xpZW50UmVjdChkYXRhLm9mZnNldHMucG9wcGVyKTtcblxuICAvLyBjb21wdXRlIGNlbnRlciBvZiB0aGUgcG9wcGVyXG4gIGNvbnN0IGNlbnRlciA9IHJlZmVyZW5jZVtzaWRlXSArIHJlZmVyZW5jZVtsZW5dIC8gMiAtIGFycm93RWxlbWVudFNpemUgLyAyO1xuXG4gIC8vIENvbXB1dGUgdGhlIHNpZGVWYWx1ZSB1c2luZyB0aGUgdXBkYXRlZCBwb3BwZXIgb2Zmc2V0c1xuICAvLyB0YWtlIHBvcHBlciBtYXJnaW4gaW4gYWNjb3VudCBiZWNhdXNlIHdlIGRvbid0IGhhdmUgdGhpcyBpbmZvIGF2YWlsYWJsZVxuICBjb25zdCBjc3MgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZGF0YS5pbnN0YW5jZS5wb3BwZXIpO1xuICBjb25zdCBwb3BwZXJNYXJnaW5TaWRlID0gcGFyc2VGbG9hdChjc3NbYG1hcmdpbiR7c2lkZUNhcGl0YWxpemVkfWBdKTtcbiAgY29uc3QgcG9wcGVyQm9yZGVyU2lkZSA9IHBhcnNlRmxvYXQoY3NzW2Bib3JkZXIke3NpZGVDYXBpdGFsaXplZH1XaWR0aGBdKTtcbiAgbGV0IHNpZGVWYWx1ZSA9XG4gICAgY2VudGVyIC0gZGF0YS5vZmZzZXRzLnBvcHBlcltzaWRlXSAtIHBvcHBlck1hcmdpblNpZGUgLSBwb3BwZXJCb3JkZXJTaWRlO1xuXG4gIC8vIHByZXZlbnQgYXJyb3dFbGVtZW50IGZyb20gYmVpbmcgcGxhY2VkIG5vdCBjb250aWd1b3VzbHkgdG8gaXRzIHBvcHBlclxuICBzaWRlVmFsdWUgPSBNYXRoLm1heChNYXRoLm1pbihwb3BwZXJbbGVuXSAtIGFycm93RWxlbWVudFNpemUsIHNpZGVWYWx1ZSksIDApO1xuXG4gIGRhdGEuYXJyb3dFbGVtZW50ID0gYXJyb3dFbGVtZW50O1xuICBkYXRhLm9mZnNldHMuYXJyb3cgPSB7XG4gICAgW3NpZGVdOiBNYXRoLnJvdW5kKHNpZGVWYWx1ZSksXG4gICAgW2FsdFNpZGVdOiAnJywgLy8gbWFrZSBzdXJlIHRvIHVuc2V0IGFueSBldmVudHVhbCBhbHRTaWRlIHZhbHVlIGZyb20gdGhlIERPTSBub2RlXG4gIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iLCIvKipcbiAqIEdldCB0aGUgb3Bwb3NpdGUgcGxhY2VtZW50IHZhcmlhdGlvbiBvZiB0aGUgZ2l2ZW4gb25lXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcGxhY2VtZW50IHZhcmlhdGlvblxuICogQHJldHVybnMge1N0cmluZ30gZmxpcHBlZCBwbGFjZW1lbnQgdmFyaWF0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uKHZhcmlhdGlvbikge1xuICBpZiAodmFyaWF0aW9uID09PSAnZW5kJykge1xuICAgIHJldHVybiAnc3RhcnQnO1xuICB9IGVsc2UgaWYgKHZhcmlhdGlvbiA9PT0gJ3N0YXJ0Jykge1xuICAgIHJldHVybiAnZW5kJztcbiAgfVxuICByZXR1cm4gdmFyaWF0aW9uO1xufVxuIiwiLyoqXG4gKiBMaXN0IG9mIGFjY2VwdGVkIHBsYWNlbWVudHMgdG8gdXNlIGFzIHZhbHVlcyBvZiB0aGUgYHBsYWNlbWVudGAgb3B0aW9uLjxiciAvPlxuICogVmFsaWQgcGxhY2VtZW50cyBhcmU6XG4gKiAtIGBhdXRvYFxuICogLSBgdG9wYFxuICogLSBgcmlnaHRgXG4gKiAtIGBib3R0b21gXG4gKiAtIGBsZWZ0YFxuICpcbiAqIEVhY2ggcGxhY2VtZW50IGNhbiBoYXZlIGEgdmFyaWF0aW9uIGZyb20gdGhpcyBsaXN0OlxuICogLSBgLXN0YXJ0YFxuICogLSBgLWVuZGBcbiAqXG4gKiBWYXJpYXRpb25zIGFyZSBpbnRlcnByZXRlZCBlYXNpbHkgaWYgeW91IHRoaW5rIG9mIHRoZW0gYXMgdGhlIGxlZnQgdG8gcmlnaHRcbiAqIHdyaXR0ZW4gbGFuZ3VhZ2VzLiBIb3Jpem9udGFsbHkgKGB0b3BgIGFuZCBgYm90dG9tYCksIGBzdGFydGAgaXMgbGVmdCBhbmQgYGVuZGBcbiAqIGlzIHJpZ2h0LjxiciAvPlxuICogVmVydGljYWxseSAoYGxlZnRgIGFuZCBgcmlnaHRgKSwgYHN0YXJ0YCBpcyB0b3AgYW5kIGBlbmRgIGlzIGJvdHRvbS5cbiAqXG4gKiBTb21lIHZhbGlkIGV4YW1wbGVzIGFyZTpcbiAqIC0gYHRvcC1lbmRgIChvbiB0b3Agb2YgcmVmZXJlbmNlLCByaWdodCBhbGlnbmVkKVxuICogLSBgcmlnaHQtc3RhcnRgIChvbiByaWdodCBvZiByZWZlcmVuY2UsIHRvcCBhbGlnbmVkKVxuICogLSBgYm90dG9tYCAob24gYm90dG9tLCBjZW50ZXJlZClcbiAqIC0gYGF1dG8tZW5kYCAob24gdGhlIHNpZGUgd2l0aCBtb3JlIHNwYWNlIGF2YWlsYWJsZSwgYWxpZ25tZW50IGRlcGVuZHMgYnkgcGxhY2VtZW50KVxuICpcbiAqIEBzdGF0aWNcbiAqIEB0eXBlIHtBcnJheX1cbiAqIEBlbnVtIHtTdHJpbmd9XG4gKiBAcmVhZG9ubHlcbiAqIEBtZXRob2QgcGxhY2VtZW50c1xuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5leHBvcnQgZGVmYXVsdCBbXG4gICdhdXRvLXN0YXJ0JyxcbiAgJ2F1dG8nLFxuICAnYXV0by1lbmQnLFxuICAndG9wLXN0YXJ0JyxcbiAgJ3RvcCcsXG4gICd0b3AtZW5kJyxcbiAgJ3JpZ2h0LXN0YXJ0JyxcbiAgJ3JpZ2h0JyxcbiAgJ3JpZ2h0LWVuZCcsXG4gICdib3R0b20tZW5kJyxcbiAgJ2JvdHRvbScsXG4gICdib3R0b20tc3RhcnQnLFxuICAnbGVmdC1lbmQnLFxuICAnbGVmdCcsXG4gICdsZWZ0LXN0YXJ0Jyxcbl07XG4iLCJpbXBvcnQgcGxhY2VtZW50cyBmcm9tICcuLi9tZXRob2RzL3BsYWNlbWVudHMnO1xuXG4vLyBHZXQgcmlkIG9mIGBhdXRvYCBgYXV0by1zdGFydGAgYW5kIGBhdXRvLWVuZGBcbmNvbnN0IHZhbGlkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMuc2xpY2UoMyk7XG5cbi8qKlxuICogR2l2ZW4gYW4gaW5pdGlhbCBwbGFjZW1lbnQsIHJldHVybnMgYWxsIHRoZSBzdWJzZXF1ZW50IHBsYWNlbWVudHNcbiAqIGNsb2Nrd2lzZSAob3IgY291bnRlci1jbG9ja3dpc2UpLlxuICpcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBwbGFjZW1lbnQgLSBBIHZhbGlkIHBsYWNlbWVudCAoaXQgYWNjZXB0cyB2YXJpYXRpb25zKVxuICogQGFyZ3VtZW50IHtCb29sZWFufSBjb3VudGVyIC0gU2V0IHRvIHRydWUgdG8gd2FsayB0aGUgcGxhY2VtZW50cyBjb3VudGVyY2xvY2t3aXNlXG4gKiBAcmV0dXJucyB7QXJyYXl9IHBsYWNlbWVudHMgaW5jbHVkaW5nIHRoZWlyIHZhcmlhdGlvbnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xvY2t3aXNlKHBsYWNlbWVudCwgY291bnRlciA9IGZhbHNlKSB7XG4gIGNvbnN0IGluZGV4ID0gdmFsaWRQbGFjZW1lbnRzLmluZGV4T2YocGxhY2VtZW50KTtcbiAgY29uc3QgYXJyID0gdmFsaWRQbGFjZW1lbnRzXG4gICAgLnNsaWNlKGluZGV4ICsgMSlcbiAgICAuY29uY2F0KHZhbGlkUGxhY2VtZW50cy5zbGljZSgwLCBpbmRleCkpO1xuICByZXR1cm4gY291bnRlciA/IGFyci5yZXZlcnNlKCkgOiBhcnI7XG59XG4iLCJpbXBvcnQgZ2V0T3Bwb3NpdGVQbGFjZW1lbnQgZnJvbSAnLi4vdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQnO1xuaW1wb3J0IGdldE9wcG9zaXRlVmFyaWF0aW9uIGZyb20gJy4uL3V0aWxzL2dldE9wcG9zaXRlVmFyaWF0aW9uJztcbmltcG9ydCBnZXRQb3BwZXJPZmZzZXRzIGZyb20gJy4uL3V0aWxzL2dldFBvcHBlck9mZnNldHMnO1xuaW1wb3J0IHJ1bk1vZGlmaWVycyBmcm9tICcuLi91dGlscy9ydW5Nb2RpZmllcnMnO1xuaW1wb3J0IGdldEJvdW5kYXJpZXMgZnJvbSAnLi4vdXRpbHMvZ2V0Qm91bmRhcmllcyc7XG5pbXBvcnQgaXNNb2RpZmllckVuYWJsZWQgZnJvbSAnLi4vdXRpbHMvaXNNb2RpZmllckVuYWJsZWQnO1xuaW1wb3J0IGNsb2Nrd2lzZSBmcm9tICcuLi91dGlscy9jbG9ja3dpc2UnO1xuXG5jb25zdCBCRUhBVklPUlMgPSB7XG4gIEZMSVA6ICdmbGlwJyxcbiAgQ0xPQ0tXSVNFOiAnY2xvY2t3aXNlJyxcbiAgQ09VTlRFUkNMT0NLV0lTRTogJ2NvdW50ZXJjbG9ja3dpc2UnLFxufTtcblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZsaXAoZGF0YSwgb3B0aW9ucykge1xuICAvLyBpZiBgaW5uZXJgIG1vZGlmaWVyIGlzIGVuYWJsZWQsIHdlIGNhbid0IHVzZSB0aGUgYGZsaXBgIG1vZGlmaWVyXG4gIGlmIChpc01vZGlmaWVyRW5hYmxlZChkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgJ2lubmVyJykpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGlmIChkYXRhLmZsaXBwZWQgJiYgZGF0YS5wbGFjZW1lbnQgPT09IGRhdGEub3JpZ2luYWxQbGFjZW1lbnQpIHtcbiAgICAvLyBzZWVtcyBsaWtlIGZsaXAgaXMgdHJ5aW5nIHRvIGxvb3AsIHByb2JhYmx5IHRoZXJlJ3Mgbm90IGVub3VnaCBzcGFjZSBvbiBhbnkgb2YgdGhlIGZsaXBwYWJsZSBzaWRlc1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgY29uc3QgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXMoXG4gICAgZGF0YS5pbnN0YW5jZS5wb3BwZXIsXG4gICAgZGF0YS5pbnN0YW5jZS5yZWZlcmVuY2UsXG4gICAgb3B0aW9ucy5wYWRkaW5nLFxuICAgIG9wdGlvbnMuYm91bmRhcmllc0VsZW1lbnQsXG4gICAgZGF0YS5wb3NpdGlvbkZpeGVkXG4gICk7XG5cbiAgbGV0IHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIGxldCBwbGFjZW1lbnRPcHBvc2l0ZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIGxldCB2YXJpYXRpb24gPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzFdIHx8ICcnO1xuXG4gIGxldCBmbGlwT3JkZXIgPSBbXTtcblxuICBzd2l0Y2ggKG9wdGlvbnMuYmVoYXZpb3IpIHtcbiAgICBjYXNlIEJFSEFWSU9SUy5GTElQOlxuICAgICAgZmxpcE9yZGVyID0gW3BsYWNlbWVudCwgcGxhY2VtZW50T3Bwb3NpdGVdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBCRUhBVklPUlMuQ0xPQ0tXSVNFOlxuICAgICAgZmxpcE9yZGVyID0gY2xvY2t3aXNlKHBsYWNlbWVudCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEJFSEFWSU9SUy5DT1VOVEVSQ0xPQ0tXSVNFOlxuICAgICAgZmxpcE9yZGVyID0gY2xvY2t3aXNlKHBsYWNlbWVudCwgdHJ1ZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgZmxpcE9yZGVyID0gb3B0aW9ucy5iZWhhdmlvcjtcbiAgfVxuXG4gIGZsaXBPcmRlci5mb3JFYWNoKChzdGVwLCBpbmRleCkgPT4ge1xuICAgIGlmIChwbGFjZW1lbnQgIT09IHN0ZXAgfHwgZmxpcE9yZGVyLmxlbmd0aCA9PT0gaW5kZXggKyAxKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICAgIHBsYWNlbWVudE9wcG9zaXRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcblxuICAgIGNvbnN0IHBvcHBlck9mZnNldHMgPSBkYXRhLm9mZnNldHMucG9wcGVyO1xuICAgIGNvbnN0IHJlZk9mZnNldHMgPSBkYXRhLm9mZnNldHMucmVmZXJlbmNlO1xuXG4gICAgLy8gdXNpbmcgZmxvb3IgYmVjYXVzZSB0aGUgcmVmZXJlbmNlIG9mZnNldHMgbWF5IGNvbnRhaW4gZGVjaW1hbHMgd2UgYXJlIG5vdCBnb2luZyB0byBjb25zaWRlciBoZXJlXG4gICAgY29uc3QgZmxvb3IgPSBNYXRoLmZsb29yO1xuICAgIGNvbnN0IG92ZXJsYXBzUmVmID1cbiAgICAgIChwbGFjZW1lbnQgPT09ICdsZWZ0JyAmJlxuICAgICAgICBmbG9vcihwb3BwZXJPZmZzZXRzLnJpZ2h0KSA+IGZsb29yKHJlZk9mZnNldHMubGVmdCkpIHx8XG4gICAgICAocGxhY2VtZW50ID09PSAncmlnaHQnICYmXG4gICAgICAgIGZsb29yKHBvcHBlck9mZnNldHMubGVmdCkgPCBmbG9vcihyZWZPZmZzZXRzLnJpZ2h0KSkgfHxcbiAgICAgIChwbGFjZW1lbnQgPT09ICd0b3AnICYmXG4gICAgICAgIGZsb29yKHBvcHBlck9mZnNldHMuYm90dG9tKSA+IGZsb29yKHJlZk9mZnNldHMudG9wKSkgfHxcbiAgICAgIChwbGFjZW1lbnQgPT09ICdib3R0b20nICYmXG4gICAgICAgIGZsb29yKHBvcHBlck9mZnNldHMudG9wKSA8IGZsb29yKHJlZk9mZnNldHMuYm90dG9tKSk7XG5cbiAgICBjb25zdCBvdmVyZmxvd3NMZWZ0ID0gZmxvb3IocG9wcGVyT2Zmc2V0cy5sZWZ0KSA8IGZsb29yKGJvdW5kYXJpZXMubGVmdCk7XG4gICAgY29uc3Qgb3ZlcmZsb3dzUmlnaHQgPSBmbG9vcihwb3BwZXJPZmZzZXRzLnJpZ2h0KSA+IGZsb29yKGJvdW5kYXJpZXMucmlnaHQpO1xuICAgIGNvbnN0IG92ZXJmbG93c1RvcCA9IGZsb29yKHBvcHBlck9mZnNldHMudG9wKSA8IGZsb29yKGJvdW5kYXJpZXMudG9wKTtcbiAgICBjb25zdCBvdmVyZmxvd3NCb3R0b20gPVxuICAgICAgZmxvb3IocG9wcGVyT2Zmc2V0cy5ib3R0b20pID4gZmxvb3IoYm91bmRhcmllcy5ib3R0b20pO1xuXG4gICAgY29uc3Qgb3ZlcmZsb3dzQm91bmRhcmllcyA9XG4gICAgICAocGxhY2VtZW50ID09PSAnbGVmdCcgJiYgb3ZlcmZsb3dzTGVmdCkgfHxcbiAgICAgIChwbGFjZW1lbnQgPT09ICdyaWdodCcgJiYgb3ZlcmZsb3dzUmlnaHQpIHx8XG4gICAgICAocGxhY2VtZW50ID09PSAndG9wJyAmJiBvdmVyZmxvd3NUb3ApIHx8XG4gICAgICAocGxhY2VtZW50ID09PSAnYm90dG9tJyAmJiBvdmVyZmxvd3NCb3R0b20pO1xuXG4gICAgLy8gZmxpcCB0aGUgdmFyaWF0aW9uIGlmIHJlcXVpcmVkXG4gICAgY29uc3QgaXNWZXJ0aWNhbCA9IFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgICAvLyBmbGlwcyB2YXJpYXRpb24gaWYgcmVmZXJlbmNlIGVsZW1lbnQgb3ZlcmZsb3dzIGJvdW5kYXJpZXNcbiAgICBjb25zdCBmbGlwcGVkVmFyaWF0aW9uQnlSZWYgPVxuICAgICAgISFvcHRpb25zLmZsaXBWYXJpYXRpb25zICYmXG4gICAgICAoKGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnc3RhcnQnICYmIG92ZXJmbG93c0xlZnQpIHx8XG4gICAgICAgIChpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ2VuZCcgJiYgb3ZlcmZsb3dzUmlnaHQpIHx8XG4gICAgICAgICghaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdzdGFydCcgJiYgb3ZlcmZsb3dzVG9wKSB8fFxuICAgICAgICAoIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnZW5kJyAmJiBvdmVyZmxvd3NCb3R0b20pKTtcblxuICAgIC8vIGZsaXBzIHZhcmlhdGlvbiBpZiBwb3BwZXIgY29udGVudCBvdmVyZmxvd3MgYm91bmRhcmllc1xuICAgIGNvbnN0IGZsaXBwZWRWYXJpYXRpb25CeUNvbnRlbnQgPVxuICAgICAgISFvcHRpb25zLmZsaXBWYXJpYXRpb25zQnlDb250ZW50ICYmXG4gICAgICAoKGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnc3RhcnQnICYmIG92ZXJmbG93c1JpZ2h0KSB8fFxuICAgICAgICAoaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdlbmQnICYmIG92ZXJmbG93c0xlZnQpIHx8XG4gICAgICAgICghaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdzdGFydCcgJiYgb3ZlcmZsb3dzQm90dG9tKSB8fFxuICAgICAgICAoIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnZW5kJyAmJiBvdmVyZmxvd3NUb3ApKTtcblxuICAgIGNvbnN0IGZsaXBwZWRWYXJpYXRpb24gPSBmbGlwcGVkVmFyaWF0aW9uQnlSZWYgfHwgZmxpcHBlZFZhcmlhdGlvbkJ5Q29udGVudDtcblxuICAgIGlmIChvdmVybGFwc1JlZiB8fCBvdmVyZmxvd3NCb3VuZGFyaWVzIHx8IGZsaXBwZWRWYXJpYXRpb24pIHtcbiAgICAgIC8vIHRoaXMgYm9vbGVhbiB0byBkZXRlY3QgYW55IGZsaXAgbG9vcFxuICAgICAgZGF0YS5mbGlwcGVkID0gdHJ1ZTtcblxuICAgICAgaWYgKG92ZXJsYXBzUmVmIHx8IG92ZXJmbG93c0JvdW5kYXJpZXMpIHtcbiAgICAgICAgcGxhY2VtZW50ID0gZmxpcE9yZGVyW2luZGV4ICsgMV07XG4gICAgICB9XG5cbiAgICAgIGlmIChmbGlwcGVkVmFyaWF0aW9uKSB7XG4gICAgICAgIHZhcmlhdGlvbiA9IGdldE9wcG9zaXRlVmFyaWF0aW9uKHZhcmlhdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGRhdGEucGxhY2VtZW50ID0gcGxhY2VtZW50ICsgKHZhcmlhdGlvbiA/ICctJyArIHZhcmlhdGlvbiA6ICcnKTtcblxuICAgICAgLy8gdGhpcyBvYmplY3QgY29udGFpbnMgYHBvc2l0aW9uYCwgd2Ugd2FudCB0byBwcmVzZXJ2ZSBpdCBhbG9uZyB3aXRoXG4gICAgICAvLyBhbnkgYWRkaXRpb25hbCBwcm9wZXJ0eSB3ZSBtYXkgYWRkIGluIHRoZSBmdXR1cmVcbiAgICAgIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSB7XG4gICAgICAgIC4uLmRhdGEub2Zmc2V0cy5wb3BwZXIsXG4gICAgICAgIC4uLmdldFBvcHBlck9mZnNldHMoXG4gICAgICAgICAgZGF0YS5pbnN0YW5jZS5wb3BwZXIsXG4gICAgICAgICAgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSxcbiAgICAgICAgICBkYXRhLnBsYWNlbWVudFxuICAgICAgICApLFxuICAgICAgfTtcblxuICAgICAgZGF0YSA9IHJ1bk1vZGlmaWVycyhkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgZGF0YSwgJ2ZsaXAnKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZGF0YTtcbn1cbiIsIi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBrZWVwVG9nZXRoZXIoZGF0YSkge1xuICBjb25zdCB7IHBvcHBlciwgcmVmZXJlbmNlIH0gPSBkYXRhLm9mZnNldHM7XG4gIGNvbnN0IHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIGNvbnN0IGZsb29yID0gTWF0aC5mbG9vcjtcbiAgY29uc3QgaXNWZXJ0aWNhbCA9IFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XG4gIGNvbnN0IHNpZGUgPSBpc1ZlcnRpY2FsID8gJ3JpZ2h0JyA6ICdib3R0b20nO1xuICBjb25zdCBvcFNpZGUgPSBpc1ZlcnRpY2FsID8gJ2xlZnQnIDogJ3RvcCc7XG4gIGNvbnN0IG1lYXN1cmVtZW50ID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcblxuICBpZiAocG9wcGVyW3NpZGVdIDwgZmxvb3IocmVmZXJlbmNlW29wU2lkZV0pKSB7XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlcltvcFNpZGVdID1cbiAgICAgIGZsb29yKHJlZmVyZW5jZVtvcFNpZGVdKSAtIHBvcHBlclttZWFzdXJlbWVudF07XG4gIH1cbiAgaWYgKHBvcHBlcltvcFNpZGVdID4gZmxvb3IocmVmZXJlbmNlW3NpZGVdKSkge1xuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXJbb3BTaWRlXSA9IGZsb29yKHJlZmVyZW5jZVtzaWRlXSk7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cbiIsImltcG9ydCBpc051bWVyaWMgZnJvbSAnLi4vdXRpbHMvaXNOdW1lcmljJztcbmltcG9ydCBnZXRDbGllbnRSZWN0IGZyb20gJy4uL3V0aWxzL2dldENsaWVudFJlY3QnO1xuaW1wb3J0IGZpbmQgZnJvbSAnLi4vdXRpbHMvZmluZCc7XG5cbi8qKlxuICogQ29udmVydHMgYSBzdHJpbmcgY29udGFpbmluZyB2YWx1ZSArIHVuaXQgaW50byBhIHB4IHZhbHVlIG51bWJlclxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2Yge21vZGlmaWVyc35vZmZzZXR9XG4gKiBAcHJpdmF0ZVxuICogQGFyZ3VtZW50IHtTdHJpbmd9IHN0ciAtIFZhbHVlICsgdW5pdCBzdHJpbmdcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBtZWFzdXJlbWVudCAtIGBoZWlnaHRgIG9yIGB3aWR0aGBcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBwb3BwZXJPZmZzZXRzXG4gKiBAYXJndW1lbnQge09iamVjdH0gcmVmZXJlbmNlT2Zmc2V0c1xuICogQHJldHVybnMge051bWJlcnxTdHJpbmd9XG4gKiBWYWx1ZSBpbiBwaXhlbHMsIG9yIG9yaWdpbmFsIHN0cmluZyBpZiBubyB2YWx1ZXMgd2VyZSBleHRyYWN0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvVmFsdWUoc3RyLCBtZWFzdXJlbWVudCwgcG9wcGVyT2Zmc2V0cywgcmVmZXJlbmNlT2Zmc2V0cykge1xuICAvLyBzZXBhcmF0ZSB2YWx1ZSBmcm9tIHVuaXRcbiAgY29uc3Qgc3BsaXQgPSBzdHIubWF0Y2goLygoPzpcXC18XFwrKT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuICBjb25zdCB2YWx1ZSA9ICtzcGxpdFsxXTtcbiAgY29uc3QgdW5pdCA9IHNwbGl0WzJdO1xuXG4gIC8vIElmIGl0J3Mgbm90IGEgbnVtYmVyIGl0J3MgYW4gb3BlcmF0b3IsIEkgZ3Vlc3NcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICBpZiAodW5pdC5pbmRleE9mKCclJykgPT09IDApIHtcbiAgICBsZXQgZWxlbWVudDtcbiAgICBzd2l0Y2ggKHVuaXQpIHtcbiAgICAgIGNhc2UgJyVwJzpcbiAgICAgICAgZWxlbWVudCA9IHBvcHBlck9mZnNldHM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnJSc6XG4gICAgICBjYXNlICclcic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBlbGVtZW50ID0gcmVmZXJlbmNlT2Zmc2V0cztcbiAgICB9XG5cbiAgICBjb25zdCByZWN0ID0gZ2V0Q2xpZW50UmVjdChlbGVtZW50KTtcbiAgICByZXR1cm4gcmVjdFttZWFzdXJlbWVudF0gLyAxMDAgKiB2YWx1ZTtcbiAgfSBlbHNlIGlmICh1bml0ID09PSAndmgnIHx8IHVuaXQgPT09ICd2dycpIHtcbiAgICAvLyBpZiBpcyBhIHZoIG9yIHZ3LCB3ZSBjYWxjdWxhdGUgdGhlIHNpemUgYmFzZWQgb24gdGhlIHZpZXdwb3J0XG4gICAgbGV0IHNpemU7XG4gICAgaWYgKHVuaXQgPT09ICd2aCcpIHtcbiAgICAgIHNpemUgPSBNYXRoLm1heChcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgICAgd2luZG93LmlubmVySGVpZ2h0IHx8IDBcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNpemUgPSBNYXRoLm1heChcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gc2l6ZSAvIDEwMCAqIHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIC8vIGlmIGlzIGFuIGV4cGxpY2l0IHBpeGVsIHVuaXQsIHdlIGdldCByaWQgb2YgdGhlIHVuaXQgYW5kIGtlZXAgdGhlIHZhbHVlXG4gICAgLy8gaWYgaXMgYW4gaW1wbGljaXQgdW5pdCwgaXQncyBweCwgYW5kIHdlIHJldHVybiBqdXN0IHRoZSB2YWx1ZVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIFBhcnNlIGFuIGBvZmZzZXRgIHN0cmluZyB0byBleHRyYXBvbGF0ZSBgeGAgYW5kIGB5YCBudW1lcmljIG9mZnNldHMuXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiB7bW9kaWZpZXJzfm9mZnNldH1cbiAqIEBwcml2YXRlXG4gKiBAYXJndW1lbnQge1N0cmluZ30gb2Zmc2V0XG4gKiBAYXJndW1lbnQge09iamVjdH0gcG9wcGVyT2Zmc2V0c1xuICogQGFyZ3VtZW50IHtPYmplY3R9IHJlZmVyZW5jZU9mZnNldHNcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBiYXNlUGxhY2VtZW50XG4gKiBAcmV0dXJucyB7QXJyYXl9IGEgdHdvIGNlbGxzIGFycmF5IHdpdGggeCBhbmQgeSBvZmZzZXRzIGluIG51bWJlcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlT2Zmc2V0KFxuICBvZmZzZXQsXG4gIHBvcHBlck9mZnNldHMsXG4gIHJlZmVyZW5jZU9mZnNldHMsXG4gIGJhc2VQbGFjZW1lbnRcbikge1xuICBjb25zdCBvZmZzZXRzID0gWzAsIDBdO1xuXG4gIC8vIFVzZSBoZWlnaHQgaWYgcGxhY2VtZW50IGlzIGxlZnQgb3IgcmlnaHQgYW5kIGluZGV4IGlzIDAgb3RoZXJ3aXNlIHVzZSB3aWR0aFxuICAvLyBpbiB0aGlzIHdheSB0aGUgZmlyc3Qgb2Zmc2V0IHdpbGwgdXNlIGFuIGF4aXMgYW5kIHRoZSBzZWNvbmQgb25lXG4gIC8vIHdpbGwgdXNlIHRoZSBvdGhlciBvbmVcbiAgY29uc3QgdXNlSGVpZ2h0ID0gWydyaWdodCcsICdsZWZ0J10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgLy8gU3BsaXQgdGhlIG9mZnNldCBzdHJpbmcgdG8gb2J0YWluIGEgbGlzdCBvZiB2YWx1ZXMgYW5kIG9wZXJhbmRzXG4gIC8vIFRoZSByZWdleCBhZGRyZXNzZXMgdmFsdWVzIHdpdGggdGhlIHBsdXMgb3IgbWludXMgc2lnbiBpbiBmcm9udCAoKzEwLCAtMjAsIGV0YylcbiAgY29uc3QgZnJhZ21lbnRzID0gb2Zmc2V0LnNwbGl0KC8oXFwrfFxcLSkvKS5tYXAoZnJhZyA9PiBmcmFnLnRyaW0oKSk7XG5cbiAgLy8gRGV0ZWN0IGlmIHRoZSBvZmZzZXQgc3RyaW5nIGNvbnRhaW5zIGEgcGFpciBvZiB2YWx1ZXMgb3IgYSBzaW5nbGUgb25lXG4gIC8vIHRoZXkgY291bGQgYmUgc2VwYXJhdGVkIGJ5IGNvbW1hIG9yIHNwYWNlXG4gIGNvbnN0IGRpdmlkZXIgPSBmcmFnbWVudHMuaW5kZXhPZihcbiAgICBmaW5kKGZyYWdtZW50cywgZnJhZyA9PiBmcmFnLnNlYXJjaCgvLHxcXHMvKSAhPT0gLTEpXG4gICk7XG5cbiAgaWYgKGZyYWdtZW50c1tkaXZpZGVyXSAmJiBmcmFnbWVudHNbZGl2aWRlcl0uaW5kZXhPZignLCcpID09PSAtMSkge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgICdPZmZzZXRzIHNlcGFyYXRlZCBieSB3aGl0ZSBzcGFjZShzKSBhcmUgZGVwcmVjYXRlZCwgdXNlIGEgY29tbWEgKCwpIGluc3RlYWQuJ1xuICAgICk7XG4gIH1cblxuICAvLyBJZiBkaXZpZGVyIGlzIGZvdW5kLCB3ZSBkaXZpZGUgdGhlIGxpc3Qgb2YgdmFsdWVzIGFuZCBvcGVyYW5kcyB0byBkaXZpZGVcbiAgLy8gdGhlbSBieSBvZnNldCBYIGFuZCBZLlxuICBjb25zdCBzcGxpdFJlZ2V4ID0gL1xccyosXFxzKnxcXHMrLztcbiAgbGV0IG9wcyA9IGRpdmlkZXIgIT09IC0xXG4gICAgPyBbXG4gICAgICAgIGZyYWdtZW50c1xuICAgICAgICAgIC5zbGljZSgwLCBkaXZpZGVyKVxuICAgICAgICAgIC5jb25jYXQoW2ZyYWdtZW50c1tkaXZpZGVyXS5zcGxpdChzcGxpdFJlZ2V4KVswXV0pLFxuICAgICAgICBbZnJhZ21lbnRzW2RpdmlkZXJdLnNwbGl0KHNwbGl0UmVnZXgpWzFdXS5jb25jYXQoXG4gICAgICAgICAgZnJhZ21lbnRzLnNsaWNlKGRpdmlkZXIgKyAxKVxuICAgICAgICApLFxuICAgICAgXVxuICAgIDogW2ZyYWdtZW50c107XG5cbiAgLy8gQ29udmVydCB0aGUgdmFsdWVzIHdpdGggdW5pdHMgdG8gYWJzb2x1dGUgcGl4ZWxzIHRvIGFsbG93IG91ciBjb21wdXRhdGlvbnNcbiAgb3BzID0gb3BzLm1hcCgob3AsIGluZGV4KSA9PiB7XG4gICAgLy8gTW9zdCBvZiB0aGUgdW5pdHMgcmVseSBvbiB0aGUgb3JpZW50YXRpb24gb2YgdGhlIHBvcHBlclxuICAgIGNvbnN0IG1lYXN1cmVtZW50ID0gKGluZGV4ID09PSAxID8gIXVzZUhlaWdodCA6IHVzZUhlaWdodClcbiAgICAgID8gJ2hlaWdodCdcbiAgICAgIDogJ3dpZHRoJztcbiAgICBsZXQgbWVyZ2VXaXRoUHJldmlvdXMgPSBmYWxzZTtcbiAgICByZXR1cm4gKFxuICAgICAgb3BcbiAgICAgICAgLy8gVGhpcyBhZ2dyZWdhdGVzIGFueSBgK2Agb3IgYC1gIHNpZ24gdGhhdCBhcmVuJ3QgY29uc2lkZXJlZCBvcGVyYXRvcnNcbiAgICAgICAgLy8gZS5nLjogMTAgKyArNSA9PiBbMTAsICssICs1XVxuICAgICAgICAucmVkdWNlKChhLCBiKSA9PiB7XG4gICAgICAgICAgaWYgKGFbYS5sZW5ndGggLSAxXSA9PT0gJycgJiYgWycrJywgJy0nXS5pbmRleE9mKGIpICE9PSAtMSkge1xuICAgICAgICAgICAgYVthLmxlbmd0aCAtIDFdID0gYjtcbiAgICAgICAgICAgIG1lcmdlV2l0aFByZXZpb3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICAgIH0gZWxzZSBpZiAobWVyZ2VXaXRoUHJldmlvdXMpIHtcbiAgICAgICAgICAgIGFbYS5sZW5ndGggLSAxXSArPSBiO1xuICAgICAgICAgICAgbWVyZ2VXaXRoUHJldmlvdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYS5jb25jYXQoYik7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBbXSlcbiAgICAgICAgLy8gSGVyZSB3ZSBjb252ZXJ0IHRoZSBzdHJpbmcgdmFsdWVzIGludG8gbnVtYmVyIHZhbHVlcyAoaW4gcHgpXG4gICAgICAgIC5tYXAoc3RyID0+IHRvVmFsdWUoc3RyLCBtZWFzdXJlbWVudCwgcG9wcGVyT2Zmc2V0cywgcmVmZXJlbmNlT2Zmc2V0cykpXG4gICAgKTtcbiAgfSk7XG5cbiAgLy8gTG9vcCB0cm91Z2ggdGhlIG9mZnNldHMgYXJyYXlzIGFuZCBleGVjdXRlIHRoZSBvcGVyYXRpb25zXG4gIG9wcy5mb3JFYWNoKChvcCwgaW5kZXgpID0+IHtcbiAgICBvcC5mb3JFYWNoKChmcmFnLCBpbmRleDIpID0+IHtcbiAgICAgIGlmIChpc051bWVyaWMoZnJhZykpIHtcbiAgICAgICAgb2Zmc2V0c1tpbmRleF0gKz0gZnJhZyAqIChvcFtpbmRleDIgLSAxXSA9PT0gJy0nID8gLTEgOiAxKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBvZmZzZXRzO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEBhcmd1bWVudCB7TnVtYmVyfFN0cmluZ30gb3B0aW9ucy5vZmZzZXQ9MFxuICogVGhlIG9mZnNldCB2YWx1ZSBhcyBkZXNjcmliZWQgaW4gdGhlIG1vZGlmaWVyIGRlc2NyaXB0aW9uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9mZnNldChkYXRhLCB7IG9mZnNldCB9KSB7XG4gIGNvbnN0IHsgcGxhY2VtZW50LCBvZmZzZXRzOiB7IHBvcHBlciwgcmVmZXJlbmNlIH0gfSA9IGRhdGE7XG4gIGNvbnN0IGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcblxuICBsZXQgb2Zmc2V0cztcbiAgaWYgKGlzTnVtZXJpYygrb2Zmc2V0KSkge1xuICAgIG9mZnNldHMgPSBbK29mZnNldCwgMF07XG4gIH0gZWxzZSB7XG4gICAgb2Zmc2V0cyA9IHBhcnNlT2Zmc2V0KG9mZnNldCwgcG9wcGVyLCByZWZlcmVuY2UsIGJhc2VQbGFjZW1lbnQpO1xuICB9XG5cbiAgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICdsZWZ0Jykge1xuICAgIHBvcHBlci50b3AgKz0gb2Zmc2V0c1swXTtcbiAgICBwb3BwZXIubGVmdCAtPSBvZmZzZXRzWzFdO1xuICB9IGVsc2UgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICdyaWdodCcpIHtcbiAgICBwb3BwZXIudG9wICs9IG9mZnNldHNbMF07XG4gICAgcG9wcGVyLmxlZnQgKz0gb2Zmc2V0c1sxXTtcbiAgfSBlbHNlIGlmIChiYXNlUGxhY2VtZW50ID09PSAndG9wJykge1xuICAgIHBvcHBlci5sZWZ0ICs9IG9mZnNldHNbMF07XG4gICAgcG9wcGVyLnRvcCAtPSBvZmZzZXRzWzFdO1xuICB9IGVsc2UgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICdib3R0b20nKSB7XG4gICAgcG9wcGVyLmxlZnQgKz0gb2Zmc2V0c1swXTtcbiAgICBwb3BwZXIudG9wICs9IG9mZnNldHNbMV07XG4gIH1cblxuICBkYXRhLnBvcHBlciA9IHBvcHBlcjtcbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJpbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gJy4uL3V0aWxzL2dldE9mZnNldFBhcmVudCc7XG5pbXBvcnQgZ2V0Qm91bmRhcmllcyBmcm9tICcuLi91dGlscy9nZXRCb3VuZGFyaWVzJztcbmltcG9ydCBnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUgZnJvbSAnLi4vdXRpbHMvZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lJztcblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJldmVudE92ZXJmbG93KGRhdGEsIG9wdGlvbnMpIHtcbiAgbGV0IGJvdW5kYXJpZXNFbGVtZW50ID1cbiAgICBvcHRpb25zLmJvdW5kYXJpZXNFbGVtZW50IHx8IGdldE9mZnNldFBhcmVudChkYXRhLmluc3RhbmNlLnBvcHBlcik7XG5cbiAgLy8gSWYgb2Zmc2V0UGFyZW50IGlzIHRoZSByZWZlcmVuY2UgZWxlbWVudCwgd2UgcmVhbGx5IHdhbnQgdG9cbiAgLy8gZ28gb25lIHN0ZXAgdXAgYW5kIHVzZSB0aGUgbmV4dCBvZmZzZXRQYXJlbnQgYXMgcmVmZXJlbmNlIHRvXG4gIC8vIGF2b2lkIHRvIG1ha2UgdGhpcyBtb2RpZmllciBjb21wbGV0ZWx5IHVzZWxlc3MgYW5kIGxvb2sgbGlrZSBicm9rZW5cbiAgaWYgKGRhdGEuaW5zdGFuY2UucmVmZXJlbmNlID09PSBib3VuZGFyaWVzRWxlbWVudCkge1xuICAgIGJvdW5kYXJpZXNFbGVtZW50ID0gZ2V0T2Zmc2V0UGFyZW50KGJvdW5kYXJpZXNFbGVtZW50KTtcbiAgfVxuXG4gIC8vIE5PVEU6IERPTSBhY2Nlc3MgaGVyZVxuICAvLyByZXNldHMgdGhlIHBvcHBlcidzIHBvc2l0aW9uIHNvIHRoYXQgdGhlIGRvY3VtZW50IHNpemUgY2FuIGJlIGNhbGN1bGF0ZWQgZXhjbHVkaW5nXG4gIC8vIHRoZSBzaXplIG9mIHRoZSBwb3BwZXIgZWxlbWVudCBpdHNlbGZcbiAgY29uc3QgdHJhbnNmb3JtUHJvcCA9IGdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJyk7XG4gIGNvbnN0IHBvcHBlclN0eWxlcyA9IGRhdGEuaW5zdGFuY2UucG9wcGVyLnN0eWxlOyAvLyBhc3NpZ25tZW50IHRvIGhlbHAgbWluaWZpY2F0aW9uXG4gIGNvbnN0IHsgdG9wLCBsZWZ0LCBbdHJhbnNmb3JtUHJvcF06IHRyYW5zZm9ybSB9ID0gcG9wcGVyU3R5bGVzO1xuICBwb3BwZXJTdHlsZXMudG9wID0gJyc7XG4gIHBvcHBlclN0eWxlcy5sZWZ0ID0gJyc7XG4gIHBvcHBlclN0eWxlc1t0cmFuc2Zvcm1Qcm9wXSA9ICcnO1xuXG4gIGNvbnN0IGJvdW5kYXJpZXMgPSBnZXRCb3VuZGFyaWVzKFxuICAgIGRhdGEuaW5zdGFuY2UucG9wcGVyLFxuICAgIGRhdGEuaW5zdGFuY2UucmVmZXJlbmNlLFxuICAgIG9wdGlvbnMucGFkZGluZyxcbiAgICBib3VuZGFyaWVzRWxlbWVudCxcbiAgICBkYXRhLnBvc2l0aW9uRml4ZWRcbiAgKTtcblxuICAvLyBOT1RFOiBET00gYWNjZXNzIGhlcmVcbiAgLy8gcmVzdG9yZXMgdGhlIG9yaWdpbmFsIHN0eWxlIHByb3BlcnRpZXMgYWZ0ZXIgdGhlIG9mZnNldHMgaGF2ZSBiZWVuIGNvbXB1dGVkXG4gIHBvcHBlclN0eWxlcy50b3AgPSB0b3A7XG4gIHBvcHBlclN0eWxlcy5sZWZ0ID0gbGVmdDtcbiAgcG9wcGVyU3R5bGVzW3RyYW5zZm9ybVByb3BdID0gdHJhbnNmb3JtO1xuXG4gIG9wdGlvbnMuYm91bmRhcmllcyA9IGJvdW5kYXJpZXM7XG5cbiAgY29uc3Qgb3JkZXIgPSBvcHRpb25zLnByaW9yaXR5O1xuICBsZXQgcG9wcGVyID0gZGF0YS5vZmZzZXRzLnBvcHBlcjtcblxuICBjb25zdCBjaGVjayA9IHtcbiAgICBwcmltYXJ5KHBsYWNlbWVudCkge1xuICAgICAgbGV0IHZhbHVlID0gcG9wcGVyW3BsYWNlbWVudF07XG4gICAgICBpZiAoXG4gICAgICAgIHBvcHBlcltwbGFjZW1lbnRdIDwgYm91bmRhcmllc1twbGFjZW1lbnRdICYmXG4gICAgICAgICFvcHRpb25zLmVzY2FwZVdpdGhSZWZlcmVuY2VcbiAgICAgICkge1xuICAgICAgICB2YWx1ZSA9IE1hdGgubWF4KHBvcHBlcltwbGFjZW1lbnRdLCBib3VuZGFyaWVzW3BsYWNlbWVudF0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgW3BsYWNlbWVudF06IHZhbHVlIH07XG4gICAgfSxcbiAgICBzZWNvbmRhcnkocGxhY2VtZW50KSB7XG4gICAgICBjb25zdCBtYWluU2lkZSA9IHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyA/ICdsZWZ0JyA6ICd0b3AnO1xuICAgICAgbGV0IHZhbHVlID0gcG9wcGVyW21haW5TaWRlXTtcbiAgICAgIGlmIChcbiAgICAgICAgcG9wcGVyW3BsYWNlbWVudF0gPiBib3VuZGFyaWVzW3BsYWNlbWVudF0gJiZcbiAgICAgICAgIW9wdGlvbnMuZXNjYXBlV2l0aFJlZmVyZW5jZVxuICAgICAgKSB7XG4gICAgICAgIHZhbHVlID0gTWF0aC5taW4oXG4gICAgICAgICAgcG9wcGVyW21haW5TaWRlXSxcbiAgICAgICAgICBib3VuZGFyaWVzW3BsYWNlbWVudF0gLVxuICAgICAgICAgICAgKHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyA/IHBvcHBlci53aWR0aCA6IHBvcHBlci5oZWlnaHQpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4geyBbbWFpblNpZGVdOiB2YWx1ZSB9O1xuICAgIH0sXG4gIH07XG5cbiAgb3JkZXIuZm9yRWFjaChwbGFjZW1lbnQgPT4ge1xuICAgIGNvbnN0IHNpZGUgPVxuICAgICAgWydsZWZ0JywgJ3RvcCddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTEgPyAncHJpbWFyeScgOiAnc2Vjb25kYXJ5JztcbiAgICBwb3BwZXIgPSB7IC4uLnBvcHBlciwgLi4uY2hlY2tbc2lkZV0ocGxhY2VtZW50KSB9O1xuICB9KTtcblxuICBkYXRhLm9mZnNldHMucG9wcGVyID0gcG9wcGVyO1xuXG4gIHJldHVybiBkYXRhO1xufVxuIiwiLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hpZnQoZGF0YSkge1xuICBjb25zdCBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudDtcbiAgY29uc3QgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICBjb25zdCBzaGlmdHZhcmlhdGlvbiA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xuXG4gIC8vIGlmIHNoaWZ0IHNoaWZ0dmFyaWF0aW9uIGlzIHNwZWNpZmllZCwgcnVuIHRoZSBtb2RpZmllclxuICBpZiAoc2hpZnR2YXJpYXRpb24pIHtcbiAgICBjb25zdCB7IHJlZmVyZW5jZSwgcG9wcGVyIH0gPSBkYXRhLm9mZnNldHM7XG4gICAgY29uc3QgaXNWZXJ0aWNhbCA9IFsnYm90dG9tJywgJ3RvcCddLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xuICAgIGNvbnN0IHNpZGUgPSBpc1ZlcnRpY2FsID8gJ2xlZnQnIDogJ3RvcCc7XG4gICAgY29uc3QgbWVhc3VyZW1lbnQgPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuXG4gICAgY29uc3Qgc2hpZnRPZmZzZXRzID0ge1xuICAgICAgc3RhcnQ6IHsgW3NpZGVdOiByZWZlcmVuY2Vbc2lkZV0gfSxcbiAgICAgIGVuZDoge1xuICAgICAgICBbc2lkZV06IHJlZmVyZW5jZVtzaWRlXSArIHJlZmVyZW5jZVttZWFzdXJlbWVudF0gLSBwb3BwZXJbbWVhc3VyZW1lbnRdLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IHsgLi4ucG9wcGVyLCAuLi5zaGlmdE9mZnNldHNbc2hpZnR2YXJpYXRpb25dIH07XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cbiIsImltcG9ydCBpc01vZGlmaWVyUmVxdWlyZWQgZnJvbSAnLi4vdXRpbHMvaXNNb2RpZmllclJlcXVpcmVkJztcbmltcG9ydCBmaW5kIGZyb20gJy4uL3V0aWxzL2ZpbmQnO1xuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGlkZShkYXRhKSB7XG4gIGlmICghaXNNb2RpZmllclJlcXVpcmVkKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCAnaGlkZScsICdwcmV2ZW50T3ZlcmZsb3cnKSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgY29uc3QgcmVmUmVjdCA9IGRhdGEub2Zmc2V0cy5yZWZlcmVuY2U7XG4gIGNvbnN0IGJvdW5kID0gZmluZChcbiAgICBkYXRhLmluc3RhbmNlLm1vZGlmaWVycyxcbiAgICBtb2RpZmllciA9PiBtb2RpZmllci5uYW1lID09PSAncHJldmVudE92ZXJmbG93J1xuICApLmJvdW5kYXJpZXM7XG5cbiAgaWYgKFxuICAgIHJlZlJlY3QuYm90dG9tIDwgYm91bmQudG9wIHx8XG4gICAgcmVmUmVjdC5sZWZ0ID4gYm91bmQucmlnaHQgfHxcbiAgICByZWZSZWN0LnRvcCA+IGJvdW5kLmJvdHRvbSB8fFxuICAgIHJlZlJlY3QucmlnaHQgPCBib3VuZC5sZWZ0XG4gICkge1xuICAgIC8vIEF2b2lkIHVubmVjZXNzYXJ5IERPTSBhY2Nlc3MgaWYgdmlzaWJpbGl0eSBoYXNuJ3QgY2hhbmdlZFxuICAgIGlmIChkYXRhLmhpZGUgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGRhdGEuaGlkZSA9IHRydWU7XG4gICAgZGF0YS5hdHRyaWJ1dGVzWyd4LW91dC1vZi1ib3VuZGFyaWVzJ10gPSAnJztcbiAgfSBlbHNlIHtcbiAgICAvLyBBdm9pZCB1bm5lY2Vzc2FyeSBET00gYWNjZXNzIGlmIHZpc2liaWxpdHkgaGFzbid0IGNoYW5nZWRcbiAgICBpZiAoZGF0YS5oaWRlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZGF0YS5oaWRlID0gZmFsc2U7XG4gICAgZGF0YS5hdHRyaWJ1dGVzWyd4LW91dC1vZi1ib3VuZGFyaWVzJ10gPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuIiwiaW1wb3J0IGdldENsaWVudFJlY3QgZnJvbSAnLi4vdXRpbHMvZ2V0Q2xpZW50UmVjdCc7XG5pbXBvcnQgZ2V0T3Bwb3NpdGVQbGFjZW1lbnQgZnJvbSAnLi4vdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQnO1xuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbm5lcihkYXRhKSB7XG4gIGNvbnN0IHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50O1xuICBjb25zdCBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIGNvbnN0IHsgcG9wcGVyLCByZWZlcmVuY2UgfSA9IGRhdGEub2Zmc2V0cztcbiAgY29uc3QgaXNIb3JpeiA9IFsnbGVmdCcsICdyaWdodCddLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xuXG4gIGNvbnN0IHN1YnRyYWN0TGVuZ3RoID0gWyd0b3AnLCAnbGVmdCddLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPT09IC0xO1xuXG4gIHBvcHBlcltpc0hvcml6ID8gJ2xlZnQnIDogJ3RvcCddID1cbiAgICByZWZlcmVuY2VbYmFzZVBsYWNlbWVudF0gLVxuICAgIChzdWJ0cmFjdExlbmd0aCA/IHBvcHBlcltpc0hvcml6ID8gJ3dpZHRoJyA6ICdoZWlnaHQnXSA6IDApO1xuXG4gIGRhdGEucGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IGdldENsaWVudFJlY3QocG9wcGVyKTtcblxuICByZXR1cm4gZGF0YTtcbn1cbiIsImltcG9ydCBhcHBseVN0eWxlLCB7IGFwcGx5U3R5bGVPbkxvYWQgfSBmcm9tICcuL2FwcGx5U3R5bGUnO1xuaW1wb3J0IGNvbXB1dGVTdHlsZSBmcm9tICcuL2NvbXB1dGVTdHlsZSc7XG5pbXBvcnQgYXJyb3cgZnJvbSAnLi9hcnJvdyc7XG5pbXBvcnQgZmxpcCBmcm9tICcuL2ZsaXAnO1xuaW1wb3J0IGtlZXBUb2dldGhlciBmcm9tICcuL2tlZXBUb2dldGhlcic7XG5pbXBvcnQgb2Zmc2V0IGZyb20gJy4vb2Zmc2V0JztcbmltcG9ydCBwcmV2ZW50T3ZlcmZsb3cgZnJvbSAnLi9wcmV2ZW50T3ZlcmZsb3cnO1xuaW1wb3J0IHNoaWZ0IGZyb20gJy4vc2hpZnQnO1xuaW1wb3J0IGhpZGUgZnJvbSAnLi9oaWRlJztcbmltcG9ydCBpbm5lciBmcm9tICcuL2lubmVyJztcblxuLyoqXG4gKiBNb2RpZmllciBmdW5jdGlvbiwgZWFjaCBtb2RpZmllciBjYW4gaGF2ZSBhIGZ1bmN0aW9uIG9mIHRoaXMgdHlwZSBhc3NpZ25lZFxuICogdG8gaXRzIGBmbmAgcHJvcGVydHkuPGJyIC8+XG4gKiBUaGVzZSBmdW5jdGlvbnMgd2lsbCBiZSBjYWxsZWQgb24gZWFjaCB1cGRhdGUsIHRoaXMgbWVhbnMgdGhhdCB5b3UgbXVzdFxuICogbWFrZSBzdXJlIHRoZXkgYXJlIHBlcmZvcm1hbnQgZW5vdWdoIHRvIGF2b2lkIHBlcmZvcm1hbmNlIGJvdHRsZW5lY2tzLlxuICpcbiAqIEBmdW5jdGlvbiBNb2RpZmllckZuXG4gKiBAYXJndW1lbnQge2RhdGFPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge2RhdGFPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuXG4vKipcbiAqIE1vZGlmaWVycyBhcmUgcGx1Z2lucyB1c2VkIHRvIGFsdGVyIHRoZSBiZWhhdmlvciBvZiB5b3VyIHBvcHBlcnMuPGJyIC8+XG4gKiBQb3BwZXIuanMgdXNlcyBhIHNldCBvZiA5IG1vZGlmaWVycyB0byBwcm92aWRlIGFsbCB0aGUgYmFzaWMgZnVuY3Rpb25hbGl0aWVzXG4gKiBuZWVkZWQgYnkgdGhlIGxpYnJhcnkuXG4gKlxuICogVXN1YWxseSB5b3UgZG9uJ3Qgd2FudCB0byBvdmVycmlkZSB0aGUgYG9yZGVyYCwgYGZuYCBhbmQgYG9uTG9hZGAgcHJvcHMuXG4gKiBBbGwgdGhlIG90aGVyIHByb3BlcnRpZXMgYXJlIGNvbmZpZ3VyYXRpb25zIHRoYXQgY291bGQgYmUgdHdlYWtlZC5cbiAqIEBuYW1lc3BhY2UgbW9kaWZpZXJzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gc2hpZnQgdGhlIHBvcHBlciBvbiB0aGUgc3RhcnQgb3IgZW5kIG9mIGl0cyByZWZlcmVuY2VcbiAgICogZWxlbWVudC48YnIgLz5cbiAgICogSXQgd2lsbCByZWFkIHRoZSB2YXJpYXRpb24gb2YgdGhlIGBwbGFjZW1lbnRgIHByb3BlcnR5LjxiciAvPlxuICAgKiBJdCBjYW4gYmUgb25lIGVpdGhlciBgLWVuZGAgb3IgYC1zdGFydGAuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBzaGlmdDoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj0xMDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDEwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IHNoaWZ0LFxuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgYG9mZnNldGAgbW9kaWZpZXIgY2FuIHNoaWZ0IHlvdXIgcG9wcGVyIG9uIGJvdGggaXRzIGF4aXMuXG4gICAqXG4gICAqIEl0IGFjY2VwdHMgdGhlIGZvbGxvd2luZyB1bml0czpcbiAgICogLSBgcHhgIG9yIHVuaXQtbGVzcywgaW50ZXJwcmV0ZWQgYXMgcGl4ZWxzXG4gICAqIC0gYCVgIG9yIGAlcmAsIHBlcmNlbnRhZ2UgcmVsYXRpdmUgdG8gdGhlIGxlbmd0aCBvZiB0aGUgcmVmZXJlbmNlIGVsZW1lbnRcbiAgICogLSBgJXBgLCBwZXJjZW50YWdlIHJlbGF0aXZlIHRvIHRoZSBsZW5ndGggb2YgdGhlIHBvcHBlciBlbGVtZW50XG4gICAqIC0gYHZ3YCwgQ1NTIHZpZXdwb3J0IHdpZHRoIHVuaXRcbiAgICogLSBgdmhgLCBDU1Mgdmlld3BvcnQgaGVpZ2h0IHVuaXRcbiAgICpcbiAgICogRm9yIGxlbmd0aCBpcyBpbnRlbmRlZCB0aGUgbWFpbiBheGlzIHJlbGF0aXZlIHRvIHRoZSBwbGFjZW1lbnQgb2YgdGhlIHBvcHBlci48YnIgLz5cbiAgICogVGhpcyBtZWFucyB0aGF0IGlmIHRoZSBwbGFjZW1lbnQgaXMgYHRvcGAgb3IgYGJvdHRvbWAsIHRoZSBsZW5ndGggd2lsbCBiZSB0aGVcbiAgICogYHdpZHRoYC4gSW4gY2FzZSBvZiBgbGVmdGAgb3IgYHJpZ2h0YCwgaXQgd2lsbCBiZSB0aGUgYGhlaWdodGAuXG4gICAqXG4gICAqIFlvdSBjYW4gcHJvdmlkZSBhIHNpbmdsZSB2YWx1ZSAoYXMgYE51bWJlcmAgb3IgYFN0cmluZ2ApLCBvciBhIHBhaXIgb2YgdmFsdWVzXG4gICAqIGFzIGBTdHJpbmdgIGRpdmlkZWQgYnkgYSBjb21tYSBvciBvbmUgKG9yIG1vcmUpIHdoaXRlIHNwYWNlcy48YnIgLz5cbiAgICogVGhlIGxhdHRlciBpcyBhIGRlcHJlY2F0ZWQgbWV0aG9kIGJlY2F1c2UgaXQgbGVhZHMgdG8gY29uZnVzaW9uIGFuZCB3aWxsIGJlXG4gICAqIHJlbW92ZWQgaW4gdjIuPGJyIC8+XG4gICAqIEFkZGl0aW9uYWxseSwgaXQgYWNjZXB0cyBhZGRpdGlvbnMgYW5kIHN1YnRyYWN0aW9ucyBiZXR3ZWVuIGRpZmZlcmVudCB1bml0cy5cbiAgICogTm90ZSB0aGF0IG11bHRpcGxpY2F0aW9ucyBhbmQgZGl2aXNpb25zIGFyZW4ndCBzdXBwb3J0ZWQuXG4gICAqXG4gICAqIFZhbGlkIGV4YW1wbGVzIGFyZTpcbiAgICogYGBgXG4gICAqIDEwXG4gICAqICcxMCUnXG4gICAqICcxMCwgMTAnXG4gICAqICcxMCUsIDEwJ1xuICAgKiAnMTAgKyAxMCUnXG4gICAqICcxMCAtIDV2aCArIDMlJ1xuICAgKiAnLTEwcHggKyA1dmgsIDVweCAtIDYlJ1xuICAgKiBgYGBcbiAgICogPiAqKk5CKio6IElmIHlvdSBkZXNpcmUgdG8gYXBwbHkgb2Zmc2V0cyB0byB5b3VyIHBvcHBlcnMgaW4gYSB3YXkgdGhhdCBtYXkgbWFrZSB0aGVtIG92ZXJsYXBcbiAgICogPiB3aXRoIHRoZWlyIHJlZmVyZW5jZSBlbGVtZW50LCB1bmZvcnR1bmF0ZWx5LCB5b3Ugd2lsbCBoYXZlIHRvIGRpc2FibGUgdGhlIGBmbGlwYCBtb2RpZmllci5cbiAgICogPiBZb3UgY2FuIHJlYWQgbW9yZSBvbiB0aGlzIGF0IHRoaXMgW2lzc3VlXShodHRwczovL2dpdGh1Yi5jb20vRmV6VnJhc3RhL3BvcHBlci5qcy9pc3N1ZXMvMzczKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIG9mZnNldDoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj0yMDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDIwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IG9mZnNldCxcbiAgICAvKiogQHByb3Age051bWJlcnxTdHJpbmd9IG9mZnNldD0wXG4gICAgICogVGhlIG9mZnNldCB2YWx1ZSBhcyBkZXNjcmliZWQgaW4gdGhlIG1vZGlmaWVyIGRlc2NyaXB0aW9uXG4gICAgICovXG4gICAgb2Zmc2V0OiAwLFxuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIHByZXZlbnQgdGhlIHBvcHBlciBmcm9tIGJlaW5nIHBvc2l0aW9uZWQgb3V0c2lkZSB0aGUgYm91bmRhcnkuXG4gICAqXG4gICAqIEEgc2NlbmFyaW8gZXhpc3RzIHdoZXJlIHRoZSByZWZlcmVuY2UgaXRzZWxmIGlzIG5vdCB3aXRoaW4gdGhlIGJvdW5kYXJpZXMuPGJyIC8+XG4gICAqIFdlIGNhbiBzYXkgaXQgaGFzIFwiZXNjYXBlZCB0aGUgYm91bmRhcmllc1wiIOKAlCBvciBqdXN0IFwiZXNjYXBlZFwiLjxiciAvPlxuICAgKiBJbiB0aGlzIGNhc2Ugd2UgbmVlZCB0byBkZWNpZGUgd2hldGhlciB0aGUgcG9wcGVyIHNob3VsZCBlaXRoZXI6XG4gICAqXG4gICAqIC0gZGV0YWNoIGZyb20gdGhlIHJlZmVyZW5jZSBhbmQgcmVtYWluIFwidHJhcHBlZFwiIGluIHRoZSBib3VuZGFyaWVzLCBvclxuICAgKiAtIGlmIGl0IHNob3VsZCBpZ25vcmUgdGhlIGJvdW5kYXJ5IGFuZCBcImVzY2FwZSB3aXRoIGl0cyByZWZlcmVuY2VcIlxuICAgKlxuICAgKiBXaGVuIGBlc2NhcGVXaXRoUmVmZXJlbmNlYCBpcyBzZXQgdG9gdHJ1ZWAgYW5kIHJlZmVyZW5jZSBpcyBjb21wbGV0ZWx5XG4gICAqIG91dHNpZGUgaXRzIGJvdW5kYXJpZXMsIHRoZSBwb3BwZXIgd2lsbCBvdmVyZmxvdyAob3IgY29tcGxldGVseSBsZWF2ZSlcbiAgICogdGhlIGJvdW5kYXJpZXMgaW4gb3JkZXIgdG8gcmVtYWluIGF0dGFjaGVkIHRvIHRoZSBlZGdlIG9mIHRoZSByZWZlcmVuY2UuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBwcmV2ZW50T3ZlcmZsb3c6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9MzAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiAzMDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBwcmV2ZW50T3ZlcmZsb3csXG4gICAgLyoqXG4gICAgICogQHByb3Age0FycmF5fSBbcHJpb3JpdHk9WydsZWZ0JywncmlnaHQnLCd0b3AnLCdib3R0b20nXV1cbiAgICAgKiBQb3BwZXIgd2lsbCB0cnkgdG8gcHJldmVudCBvdmVyZmxvdyBmb2xsb3dpbmcgdGhlc2UgcHJpb3JpdGllcyBieSBkZWZhdWx0LFxuICAgICAqIHRoZW4sIGl0IGNvdWxkIG92ZXJmbG93IG9uIHRoZSBsZWZ0IGFuZCBvbiB0b3Agb2YgdGhlIGBib3VuZGFyaWVzRWxlbWVudGBcbiAgICAgKi9cbiAgICBwcmlvcml0eTogWydsZWZ0JywgJ3JpZ2h0JywgJ3RvcCcsICdib3R0b20nXSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7bnVtYmVyfSBwYWRkaW5nPTVcbiAgICAgKiBBbW91bnQgb2YgcGl4ZWwgdXNlZCB0byBkZWZpbmUgYSBtaW5pbXVtIGRpc3RhbmNlIGJldHdlZW4gdGhlIGJvdW5kYXJpZXNcbiAgICAgKiBhbmQgdGhlIHBvcHBlci4gVGhpcyBtYWtlcyBzdXJlIHRoZSBwb3BwZXIgYWx3YXlzIGhhcyBhIGxpdHRsZSBwYWRkaW5nXG4gICAgICogYmV0d2VlbiB0aGUgZWRnZXMgb2YgaXRzIGNvbnRhaW5lclxuICAgICAqL1xuICAgIHBhZGRpbmc6IDUsXG4gICAgLyoqXG4gICAgICogQHByb3Age1N0cmluZ3xIVE1MRWxlbWVudH0gYm91bmRhcmllc0VsZW1lbnQ9J3Njcm9sbFBhcmVudCdcbiAgICAgKiBCb3VuZGFyaWVzIHVzZWQgYnkgdGhlIG1vZGlmaWVyLiBDYW4gYmUgYHNjcm9sbFBhcmVudGAsIGB3aW5kb3dgLFxuICAgICAqIGB2aWV3cG9ydGAgb3IgYW55IERPTSBlbGVtZW50LlxuICAgICAqL1xuICAgIGJvdW5kYXJpZXNFbGVtZW50OiAnc2Nyb2xsUGFyZW50JyxcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBtYWtlIHN1cmUgdGhlIHJlZmVyZW5jZSBhbmQgaXRzIHBvcHBlciBzdGF5IG5lYXIgZWFjaCBvdGhlclxuICAgKiB3aXRob3V0IGxlYXZpbmcgYW55IGdhcCBiZXR3ZWVuIHRoZSB0d28uIEVzcGVjaWFsbHkgdXNlZnVsIHdoZW4gdGhlIGFycm93IGlzXG4gICAqIGVuYWJsZWQgYW5kIHlvdSB3YW50IHRvIGVuc3VyZSB0aGF0IGl0IHBvaW50cyB0byBpdHMgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqIEl0IGNhcmVzIG9ubHkgYWJvdXQgdGhlIGZpcnN0IGF4aXMuIFlvdSBjYW4gc3RpbGwgaGF2ZSBwb3BwZXJzIHdpdGggbWFyZ2luXG4gICAqIGJldHdlZW4gdGhlIHBvcHBlciBhbmQgaXRzIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAga2VlcFRvZ2V0aGVyOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTQwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogNDAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjoga2VlcFRvZ2V0aGVyLFxuICB9LFxuXG4gIC8qKlxuICAgKiBUaGlzIG1vZGlmaWVyIGlzIHVzZWQgdG8gbW92ZSB0aGUgYGFycm93RWxlbWVudGAgb2YgdGhlIHBvcHBlciB0byBtYWtlXG4gICAqIHN1cmUgaXQgaXMgcG9zaXRpb25lZCBiZXR3ZWVuIHRoZSByZWZlcmVuY2UgZWxlbWVudCBhbmQgaXRzIHBvcHBlciBlbGVtZW50LlxuICAgKiBJdCB3aWxsIHJlYWQgdGhlIG91dGVyIHNpemUgb2YgdGhlIGBhcnJvd0VsZW1lbnRgIG5vZGUgdG8gZGV0ZWN0IGhvdyBtYW55XG4gICAqIHBpeGVscyBvZiBjb25qdW5jdGlvbiBhcmUgbmVlZGVkLlxuICAgKlxuICAgKiBJdCBoYXMgbm8gZWZmZWN0IGlmIG5vIGBhcnJvd0VsZW1lbnRgIGlzIHByb3ZpZGVkLlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgYXJyb3c6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9NTAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA1MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBhcnJvdyxcbiAgICAvKiogQHByb3Age1N0cmluZ3xIVE1MRWxlbWVudH0gZWxlbWVudD0nW3gtYXJyb3ddJyAtIFNlbGVjdG9yIG9yIG5vZGUgdXNlZCBhcyBhcnJvdyAqL1xuICAgIGVsZW1lbnQ6ICdbeC1hcnJvd10nLFxuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIGZsaXAgdGhlIHBvcHBlcidzIHBsYWNlbWVudCB3aGVuIGl0IHN0YXJ0cyB0byBvdmVybGFwIGl0c1xuICAgKiByZWZlcmVuY2UgZWxlbWVudC5cbiAgICpcbiAgICogUmVxdWlyZXMgdGhlIGBwcmV2ZW50T3ZlcmZsb3dgIG1vZGlmaWVyIGJlZm9yZSBpdCBpbiBvcmRlciB0byB3b3JrLlxuICAgKlxuICAgKiAqKk5PVEU6KiogdGhpcyBtb2RpZmllciB3aWxsIGludGVycnVwdCB0aGUgY3VycmVudCB1cGRhdGUgY3ljbGUgYW5kIHdpbGxcbiAgICogcmVzdGFydCBpdCBpZiBpdCBkZXRlY3RzIHRoZSBuZWVkIHRvIGZsaXAgdGhlIHBsYWNlbWVudC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGZsaXA6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9NjAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA2MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBmbGlwLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtTdHJpbmd8QXJyYXl9IGJlaGF2aW9yPSdmbGlwJ1xuICAgICAqIFRoZSBiZWhhdmlvciB1c2VkIHRvIGNoYW5nZSB0aGUgcG9wcGVyJ3MgcGxhY2VtZW50LiBJdCBjYW4gYmUgb25lIG9mXG4gICAgICogYGZsaXBgLCBgY2xvY2t3aXNlYCwgYGNvdW50ZXJjbG9ja3dpc2VgIG9yIGFuIGFycmF5IHdpdGggYSBsaXN0IG9mIHZhbGlkXG4gICAgICogcGxhY2VtZW50cyAod2l0aCBvcHRpb25hbCB2YXJpYXRpb25zKVxuICAgICAqL1xuICAgIGJlaGF2aW9yOiAnZmxpcCcsXG4gICAgLyoqXG4gICAgICogQHByb3Age251bWJlcn0gcGFkZGluZz01XG4gICAgICogVGhlIHBvcHBlciB3aWxsIGZsaXAgaWYgaXQgaGl0cyB0aGUgZWRnZXMgb2YgdGhlIGBib3VuZGFyaWVzRWxlbWVudGBcbiAgICAgKi9cbiAgICBwYWRkaW5nOiA1LFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtTdHJpbmd8SFRNTEVsZW1lbnR9IGJvdW5kYXJpZXNFbGVtZW50PSd2aWV3cG9ydCdcbiAgICAgKiBUaGUgZWxlbWVudCB3aGljaCB3aWxsIGRlZmluZSB0aGUgYm91bmRhcmllcyBvZiB0aGUgcG9wcGVyIHBvc2l0aW9uLlxuICAgICAqIFRoZSBwb3BwZXIgd2lsbCBuZXZlciBiZSBwbGFjZWQgb3V0c2lkZSBvZiB0aGUgZGVmaW5lZCBib3VuZGFyaWVzXG4gICAgICogKGV4Y2VwdCBpZiBga2VlcFRvZ2V0aGVyYCBpcyBlbmFibGVkKVxuICAgICAqL1xuICAgIGJvdW5kYXJpZXNFbGVtZW50OiAndmlld3BvcnQnLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtCb29sZWFufSBmbGlwVmFyaWF0aW9ucz1mYWxzZVxuICAgICAqIFRoZSBwb3BwZXIgd2lsbCBzd2l0Y2ggcGxhY2VtZW50IHZhcmlhdGlvbiBiZXR3ZWVuIGAtc3RhcnRgIGFuZCBgLWVuZGAgd2hlblxuICAgICAqIHRoZSByZWZlcmVuY2UgZWxlbWVudCBvdmVybGFwcyBpdHMgYm91bmRhcmllcy5cbiAgICAgKlxuICAgICAqIFRoZSBvcmlnaW5hbCBwbGFjZW1lbnQgc2hvdWxkIGhhdmUgYSBzZXQgdmFyaWF0aW9uLlxuICAgICAqL1xuICAgIGZsaXBWYXJpYXRpb25zOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gZmxpcFZhcmlhdGlvbnNCeUNvbnRlbnQ9ZmFsc2VcbiAgICAgKiBUaGUgcG9wcGVyIHdpbGwgc3dpdGNoIHBsYWNlbWVudCB2YXJpYXRpb24gYmV0d2VlbiBgLXN0YXJ0YCBhbmQgYC1lbmRgIHdoZW5cbiAgICAgKiB0aGUgcG9wcGVyIGVsZW1lbnQgb3ZlcmxhcHMgaXRzIHJlZmVyZW5jZSBib3VuZGFyaWVzLlxuICAgICAqXG4gICAgICogVGhlIG9yaWdpbmFsIHBsYWNlbWVudCBzaG91bGQgaGF2ZSBhIHNldCB2YXJpYXRpb24uXG4gICAgICovXG4gICAgZmxpcFZhcmlhdGlvbnNCeUNvbnRlbnQ6IGZhbHNlLFxuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIG1ha2UgdGhlIHBvcHBlciBmbG93IHRvd2FyZCB0aGUgaW5uZXIgb2YgdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKiBCeSBkZWZhdWx0LCB3aGVuIHRoaXMgbW9kaWZpZXIgaXMgZGlzYWJsZWQsIHRoZSBwb3BwZXIgd2lsbCBiZSBwbGFjZWQgb3V0c2lkZVxuICAgKiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBpbm5lcjoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj03MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDcwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9ZmFsc2UgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogaW5uZXIsXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gaGlkZSB0aGUgcG9wcGVyIHdoZW4gaXRzIHJlZmVyZW5jZSBlbGVtZW50IGlzIG91dHNpZGUgb2YgdGhlXG4gICAqIHBvcHBlciBib3VuZGFyaWVzLiBJdCB3aWxsIHNldCBhIGB4LW91dC1vZi1ib3VuZGFyaWVzYCBhdHRyaWJ1dGUgd2hpY2ggY2FuXG4gICAqIGJlIHVzZWQgdG8gaGlkZSB3aXRoIGEgQ1NTIHNlbGVjdG9yIHRoZSBwb3BwZXIgd2hlbiBpdHMgcmVmZXJlbmNlIGlzXG4gICAqIG91dCBvZiBib3VuZGFyaWVzLlxuICAgKlxuICAgKiBSZXF1aXJlcyB0aGUgYHByZXZlbnRPdmVyZmxvd2AgbW9kaWZpZXIgYmVmb3JlIGl0IGluIG9yZGVyIHRvIHdvcmsuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBoaWRlOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTgwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogODAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogaGlkZSxcbiAgfSxcblxuICAvKipcbiAgICogQ29tcHV0ZXMgdGhlIHN0eWxlIHRoYXQgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIgZWxlbWVudCB0byBnZXRzXG4gICAqIHByb3Blcmx5IHBvc2l0aW9uZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCB0aGlzIG1vZGlmaWVyIHdpbGwgbm90IHRvdWNoIHRoZSBET00sIGl0IGp1c3QgcHJlcGFyZXMgdGhlIHN0eWxlc1xuICAgKiBzbyB0aGF0IGBhcHBseVN0eWxlYCBtb2RpZmllciBjYW4gYXBwbHkgaXQuIFRoaXMgc2VwYXJhdGlvbiBpcyB1c2VmdWxcbiAgICogaW4gY2FzZSB5b3UgbmVlZCB0byByZXBsYWNlIGBhcHBseVN0eWxlYCB3aXRoIGEgY3VzdG9tIGltcGxlbWVudGF0aW9uLlxuICAgKlxuICAgKiBUaGlzIG1vZGlmaWVyIGhhcyBgODUwYCBhcyBgb3JkZXJgIHZhbHVlIHRvIG1haW50YWluIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICogd2l0aCBwcmV2aW91cyB2ZXJzaW9ucyBvZiBQb3BwZXIuanMuIEV4cGVjdCB0aGUgbW9kaWZpZXJzIG9yZGVyaW5nIG1ldGhvZFxuICAgKiB0byBjaGFuZ2UgaW4gZnV0dXJlIG1ham9yIHZlcnNpb25zIG9mIHRoZSBsaWJyYXJ5LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgY29tcHV0ZVN0eWxlOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTg1MCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogODUwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogY29tcHV0ZVN0eWxlLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtCb29sZWFufSBncHVBY2NlbGVyYXRpb249dHJ1ZVxuICAgICAqIElmIHRydWUsIGl0IHVzZXMgdGhlIENTUyAzRCB0cmFuc2Zvcm1hdGlvbiB0byBwb3NpdGlvbiB0aGUgcG9wcGVyLlxuICAgICAqIE90aGVyd2lzZSwgaXQgd2lsbCB1c2UgdGhlIGB0b3BgIGFuZCBgbGVmdGAgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGdwdUFjY2VsZXJhdGlvbjogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7c3RyaW5nfSBbeD0nYm90dG9tJ11cbiAgICAgKiBXaGVyZSB0byBhbmNob3IgdGhlIFggYXhpcyAoYGJvdHRvbWAgb3IgYHRvcGApLiBBS0EgWCBvZmZzZXQgb3JpZ2luLlxuICAgICAqIENoYW5nZSB0aGlzIGlmIHlvdXIgcG9wcGVyIHNob3VsZCBncm93IGluIGEgZGlyZWN0aW9uIGRpZmZlcmVudCBmcm9tIGBib3R0b21gXG4gICAgICovXG4gICAgeDogJ2JvdHRvbScsXG4gICAgLyoqXG4gICAgICogQHByb3Age3N0cmluZ30gW3g9J2xlZnQnXVxuICAgICAqIFdoZXJlIHRvIGFuY2hvciB0aGUgWSBheGlzIChgbGVmdGAgb3IgYHJpZ2h0YCkuIEFLQSBZIG9mZnNldCBvcmlnaW4uXG4gICAgICogQ2hhbmdlIHRoaXMgaWYgeW91ciBwb3BwZXIgc2hvdWxkIGdyb3cgaW4gYSBkaXJlY3Rpb24gZGlmZmVyZW50IGZyb20gYHJpZ2h0YFxuICAgICAqL1xuICAgIHk6ICdyaWdodCcsXG4gIH0sXG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgdGhlIGNvbXB1dGVkIHN0eWxlcyB0byB0aGUgcG9wcGVyIGVsZW1lbnQuXG4gICAqXG4gICAqIEFsbCB0aGUgRE9NIG1hbmlwdWxhdGlvbnMgYXJlIGxpbWl0ZWQgdG8gdGhpcyBtb2RpZmllci4gVGhpcyBpcyB1c2VmdWwgaW4gY2FzZVxuICAgKiB5b3Ugd2FudCB0byBpbnRlZ3JhdGUgUG9wcGVyLmpzIGluc2lkZSBhIGZyYW1ld29yayBvciB2aWV3IGxpYnJhcnkgYW5kIHlvdVxuICAgKiB3YW50IHRvIGRlbGVnYXRlIGFsbCB0aGUgRE9NIG1hbmlwdWxhdGlvbnMgdG8gaXQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCBpZiB5b3UgZGlzYWJsZSB0aGlzIG1vZGlmaWVyLCB5b3UgbXVzdCBtYWtlIHN1cmUgdGhlIHBvcHBlciBlbGVtZW50XG4gICAqIGhhcyBpdHMgcG9zaXRpb24gc2V0IHRvIGBhYnNvbHV0ZWAgYmVmb3JlIFBvcHBlci5qcyBjYW4gZG8gaXRzIHdvcmshXG4gICAqXG4gICAqIEp1c3QgZGlzYWJsZSB0aGlzIG1vZGlmaWVyIGFuZCBkZWZpbmUgeW91ciBvd24gdG8gYWNoaWV2ZSB0aGUgZGVzaXJlZCBlZmZlY3QuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBhcHBseVN0eWxlOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTkwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogOTAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogYXBwbHlTdHlsZSxcbiAgICAvKiogQHByb3Age0Z1bmN0aW9ufSAqL1xuICAgIG9uTG9hZDogYXBwbHlTdHlsZU9uTG9hZCxcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuMTAuMCwgdGhlIHByb3BlcnR5IG1vdmVkIHRvIGBjb21wdXRlU3R5bGVgIG1vZGlmaWVyXG4gICAgICogQHByb3Age0Jvb2xlYW59IGdwdUFjY2VsZXJhdGlvbj10cnVlXG4gICAgICogSWYgdHJ1ZSwgaXQgdXNlcyB0aGUgQ1NTIDNEIHRyYW5zZm9ybWF0aW9uIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXIuXG4gICAgICogT3RoZXJ3aXNlLCBpdCB3aWxsIHVzZSB0aGUgYHRvcGAgYW5kIGBsZWZ0YCBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgZ3B1QWNjZWxlcmF0aW9uOiB1bmRlZmluZWQsXG4gIH0sXG59O1xuXG4vKipcbiAqIFRoZSBgZGF0YU9iamVjdGAgaXMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSBpbmZvcm1hdGlvbiB1c2VkIGJ5IFBvcHBlci5qcy5cbiAqIFRoaXMgb2JqZWN0IGlzIHBhc3NlZCB0byBtb2RpZmllcnMgYW5kIHRvIHRoZSBgb25DcmVhdGVgIGFuZCBgb25VcGRhdGVgIGNhbGxiYWNrcy5cbiAqIEBuYW1lIGRhdGFPYmplY3RcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLmluc3RhbmNlIFRoZSBQb3BwZXIuanMgaW5zdGFuY2VcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBkYXRhLnBsYWNlbWVudCBQbGFjZW1lbnQgYXBwbGllZCB0byBwb3BwZXJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBkYXRhLm9yaWdpbmFsUGxhY2VtZW50IFBsYWNlbWVudCBvcmlnaW5hbGx5IGRlZmluZWQgb24gaW5pdFxuICogQHByb3BlcnR5IHtCb29sZWFufSBkYXRhLmZsaXBwZWQgVHJ1ZSBpZiBwb3BwZXIgaGFzIGJlZW4gZmxpcHBlZCBieSBmbGlwIG1vZGlmaWVyXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGRhdGEuaGlkZSBUcnVlIGlmIHRoZSByZWZlcmVuY2UgZWxlbWVudCBpcyBvdXQgb2YgYm91bmRhcmllcywgdXNlZnVsIHRvIGtub3cgd2hlbiB0byBoaWRlIHRoZSBwb3BwZXJcbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGRhdGEuYXJyb3dFbGVtZW50IE5vZGUgdXNlZCBhcyBhcnJvdyBieSBhcnJvdyBtb2RpZmllclxuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEuc3R5bGVzIEFueSBDU1MgcHJvcGVydHkgZGVmaW5lZCBoZXJlIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyLiBJdCBleHBlY3RzIHRoZSBKYXZhU2NyaXB0IG5vbWVuY2xhdHVyZSAoZWcuIGBtYXJnaW5Cb3R0b21gKVxuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEuYXJyb3dTdHlsZXMgQW55IENTUyBwcm9wZXJ0eSBkZWZpbmVkIGhlcmUgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIgYXJyb3cuIEl0IGV4cGVjdHMgdGhlIEphdmFTY3JpcHQgbm9tZW5jbGF0dXJlIChlZy4gYG1hcmdpbkJvdHRvbWApXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5ib3VuZGFyaWVzIE9mZnNldHMgb2YgdGhlIHBvcHBlciBib3VuZGFyaWVzXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5vZmZzZXRzIFRoZSBtZWFzdXJlbWVudHMgb2YgcG9wcGVyLCByZWZlcmVuY2UgYW5kIGFycm93IGVsZW1lbnRzXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5vZmZzZXRzLnBvcHBlciBgdG9wYCwgYGxlZnRgLCBgd2lkdGhgLCBgaGVpZ2h0YCB2YWx1ZXNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMucmVmZXJlbmNlIGB0b3BgLCBgbGVmdGAsIGB3aWR0aGAsIGBoZWlnaHRgIHZhbHVlc1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEub2Zmc2V0cy5hcnJvd10gYHRvcGAgYW5kIGBsZWZ0YCBvZmZzZXRzLCBvbmx5IG9uZSBvZiB0aGVtIHdpbGwgYmUgZGlmZmVyZW50IGZyb20gMFxuICovXG4iLCJpbXBvcnQgbW9kaWZpZXJzIGZyb20gJy4uL21vZGlmaWVycy9pbmRleCc7XG5cbi8qKlxuICogRGVmYXVsdCBvcHRpb25zIHByb3ZpZGVkIHRvIFBvcHBlci5qcyBjb25zdHJ1Y3Rvci48YnIgLz5cbiAqIFRoZXNlIGNhbiBiZSBvdmVycmlkZGVuIHVzaW5nIHRoZSBgb3B0aW9uc2AgYXJndW1lbnQgb2YgUG9wcGVyLmpzLjxiciAvPlxuICogVG8gb3ZlcnJpZGUgYW4gb3B0aW9uLCBzaW1wbHkgcGFzcyBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZVxuICogc3RydWN0dXJlIG9mIHRoZSBgb3B0aW9uc2Agb2JqZWN0LCBhcyB0aGUgM3JkIGFyZ3VtZW50LiBGb3IgZXhhbXBsZTpcbiAqIGBgYFxuICogbmV3IFBvcHBlcihyZWYsIHBvcCwge1xuICogICBtb2RpZmllcnM6IHtcbiAqICAgICBwcmV2ZW50T3ZlcmZsb3c6IHsgZW5hYmxlZDogZmFsc2UgfVxuICogICB9XG4gKiB9KVxuICogYGBgXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHN0YXRpY1xuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8qKlxuICAgKiBQb3BwZXIncyBwbGFjZW1lbnQuXG4gICAqIEBwcm9wIHtQb3BwZXIucGxhY2VtZW50c30gcGxhY2VtZW50PSdib3R0b20nXG4gICAqL1xuICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuXG4gIC8qKlxuICAgKiBTZXQgdGhpcyB0byB0cnVlIGlmIHlvdSB3YW50IHBvcHBlciB0byBwb3NpdGlvbiBpdCBzZWxmIGluICdmaXhlZCcgbW9kZVxuICAgKiBAcHJvcCB7Qm9vbGVhbn0gcG9zaXRpb25GaXhlZD1mYWxzZVxuICAgKi9cbiAgcG9zaXRpb25GaXhlZDogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgZXZlbnRzIChyZXNpemUsIHNjcm9sbCkgYXJlIGluaXRpYWxseSBlbmFibGVkLlxuICAgKiBAcHJvcCB7Qm9vbGVhbn0gZXZlbnRzRW5hYmxlZD10cnVlXG4gICAqL1xuICBldmVudHNFbmFibGVkOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBTZXQgdG8gdHJ1ZSBpZiB5b3Ugd2FudCB0byBhdXRvbWF0aWNhbGx5IHJlbW92ZSB0aGUgcG9wcGVyIHdoZW5cbiAgICogeW91IGNhbGwgdGhlIGBkZXN0cm95YCBtZXRob2QuXG4gICAqIEBwcm9wIHtCb29sZWFufSByZW1vdmVPbkRlc3Ryb3k9ZmFsc2VcbiAgICovXG4gIHJlbW92ZU9uRGVzdHJveTogZmFsc2UsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBwb3BwZXIgaXMgY3JlYXRlZC48YnIgLz5cbiAgICogQnkgZGVmYXVsdCwgaXQgaXMgc2V0IHRvIG5vLW9wLjxiciAvPlxuICAgKiBBY2Nlc3MgUG9wcGVyLmpzIGluc3RhbmNlIHdpdGggYGRhdGEuaW5zdGFuY2VgLlxuICAgKiBAcHJvcCB7b25DcmVhdGV9XG4gICAqL1xuICBvbkNyZWF0ZTogKCkgPT4ge30sXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBwb3BwZXIgaXMgdXBkYXRlZC4gVGhpcyBjYWxsYmFjayBpcyBub3QgY2FsbGVkXG4gICAqIG9uIHRoZSBpbml0aWFsaXphdGlvbi9jcmVhdGlvbiBvZiB0aGUgcG9wcGVyLCBidXQgb25seSBvbiBzdWJzZXF1ZW50XG4gICAqIHVwZGF0ZXMuPGJyIC8+XG4gICAqIEJ5IGRlZmF1bHQsIGl0IGlzIHNldCB0byBuby1vcC48YnIgLz5cbiAgICogQWNjZXNzIFBvcHBlci5qcyBpbnN0YW5jZSB3aXRoIGBkYXRhLmluc3RhbmNlYC5cbiAgICogQHByb3Age29uVXBkYXRlfVxuICAgKi9cbiAgb25VcGRhdGU6ICgpID0+IHt9LFxuXG4gIC8qKlxuICAgKiBMaXN0IG9mIG1vZGlmaWVycyB1c2VkIHRvIG1vZGlmeSB0aGUgb2Zmc2V0cyBiZWZvcmUgdGhleSBhcmUgYXBwbGllZCB0byB0aGUgcG9wcGVyLlxuICAgKiBUaGV5IHByb3ZpZGUgbW9zdCBvZiB0aGUgZnVuY3Rpb25hbGl0aWVzIG9mIFBvcHBlci5qcy5cbiAgICogQHByb3Age21vZGlmaWVyc31cbiAgICovXG4gIG1vZGlmaWVycyxcbn07XG5cbi8qKlxuICogQGNhbGxiYWNrIG9uQ3JlYXRlXG4gKiBAcGFyYW0ge2RhdGFPYmplY3R9IGRhdGFcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBvblVwZGF0ZVxuICogQHBhcmFtIHtkYXRhT2JqZWN0fSBkYXRhXG4gKi9cbiIsIi8vIFV0aWxzXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi91dGlscy9kZWJvdW5jZSc7XG5pbXBvcnQgaXNGdW5jdGlvbiBmcm9tICcuL3V0aWxzL2lzRnVuY3Rpb24nO1xuXG4vLyBNZXRob2RzXG5pbXBvcnQgdXBkYXRlIGZyb20gJy4vbWV0aG9kcy91cGRhdGUnO1xuaW1wb3J0IGRlc3Ryb3kgZnJvbSAnLi9tZXRob2RzL2Rlc3Ryb3knO1xuaW1wb3J0IGVuYWJsZUV2ZW50TGlzdGVuZXJzIGZyb20gJy4vbWV0aG9kcy9lbmFibGVFdmVudExpc3RlbmVycyc7XG5pbXBvcnQgZGlzYWJsZUV2ZW50TGlzdGVuZXJzIGZyb20gJy4vbWV0aG9kcy9kaXNhYmxlRXZlbnRMaXN0ZW5lcnMnO1xuaW1wb3J0IERlZmF1bHRzIGZyb20gJy4vbWV0aG9kcy9kZWZhdWx0cyc7XG5pbXBvcnQgcGxhY2VtZW50cyBmcm9tICcuL21ldGhvZHMvcGxhY2VtZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHBlciB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IFBvcHBlci5qcyBpbnN0YW5jZS5cbiAgICogQGNsYXNzIFBvcHBlclxuICAgKiBAcGFyYW0ge0VsZW1lbnR8cmVmZXJlbmNlT2JqZWN0fSByZWZlcmVuY2UgLSBUaGUgcmVmZXJlbmNlIGVsZW1lbnQgdXNlZCB0byBwb3NpdGlvbiB0aGUgcG9wcGVyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gcG9wcGVyIC0gVGhlIEhUTUwgLyBYTUwgZWxlbWVudCB1c2VkIGFzIHRoZSBwb3BwZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBZb3VyIGN1c3RvbSBvcHRpb25zIHRvIG92ZXJyaWRlIHRoZSBvbmVzIGRlZmluZWQgaW4gW0RlZmF1bHRzXSgjZGVmYXVsdHMpXG4gICAqIEByZXR1cm4ge09iamVjdH0gaW5zdGFuY2UgLSBUaGUgZ2VuZXJhdGVkIFBvcHBlci5qcyBpbnN0YW5jZVxuICAgKi9cbiAgY29uc3RydWN0b3IocmVmZXJlbmNlLCBwb3BwZXIsIG9wdGlvbnMgPSB7fSkge1xuICAgIC8vIG1ha2UgdXBkYXRlKCkgZGVib3VuY2VkLCBzbyB0aGF0IGl0IG9ubHkgcnVucyBhdCBtb3N0IG9uY2UtcGVyLXRpY2tcbiAgICB0aGlzLnVwZGF0ZSA9IGRlYm91bmNlKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXG4gICAgLy8gd2l0aCB7fSB3ZSBjcmVhdGUgYSBuZXcgb2JqZWN0IHdpdGggdGhlIG9wdGlvbnMgaW5zaWRlIGl0XG4gICAgdGhpcy5vcHRpb25zID0geyAuLi5Qb3BwZXIuRGVmYXVsdHMsIC4uLm9wdGlvbnMgfTtcblxuICAgIC8vIGluaXQgc3RhdGVcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNEZXN0cm95ZWQ6IGZhbHNlLFxuICAgICAgaXNDcmVhdGVkOiBmYWxzZSxcbiAgICAgIHNjcm9sbFBhcmVudHM6IFtdLFxuICAgIH07XG5cbiAgICAvLyBnZXQgcmVmZXJlbmNlIGFuZCBwb3BwZXIgZWxlbWVudHMgKGFsbG93IGpRdWVyeSB3cmFwcGVycylcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZSAmJiByZWZlcmVuY2UuanF1ZXJ5ID8gcmVmZXJlbmNlWzBdIDogcmVmZXJlbmNlO1xuICAgIHRoaXMucG9wcGVyID0gcG9wcGVyICYmIHBvcHBlci5qcXVlcnkgPyBwb3BwZXJbMF0gOiBwb3BwZXI7XG5cbiAgICAvLyBEZWVwIG1lcmdlIG1vZGlmaWVycyBvcHRpb25zXG4gICAgdGhpcy5vcHRpb25zLm1vZGlmaWVycyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHtcbiAgICAgIC4uLlBvcHBlci5EZWZhdWx0cy5tb2RpZmllcnMsXG4gICAgICAuLi5vcHRpb25zLm1vZGlmaWVycyxcbiAgICB9KS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgdGhpcy5vcHRpb25zLm1vZGlmaWVyc1tuYW1lXSA9IHtcbiAgICAgICAgLy8gSWYgaXQncyBhIGJ1aWx0LWluIG1vZGlmaWVyLCB1c2UgaXQgYXMgYmFzZVxuICAgICAgICAuLi4oUG9wcGVyLkRlZmF1bHRzLm1vZGlmaWVyc1tuYW1lXSB8fCB7fSksXG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBjdXN0b20gb3B0aW9ucywgb3ZlcnJpZGUgYW5kIG1lcmdlIHdpdGggZGVmYXVsdCBvbmVzXG4gICAgICAgIC4uLihvcHRpb25zLm1vZGlmaWVycyA/IG9wdGlvbnMubW9kaWZpZXJzW25hbWVdIDoge30pLFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIC8vIFJlZmFjdG9yaW5nIG1vZGlmaWVycycgbGlzdCAoT2JqZWN0ID0+IEFycmF5KVxuICAgIHRoaXMubW9kaWZpZXJzID0gT2JqZWN0LmtleXModGhpcy5vcHRpb25zLm1vZGlmaWVycylcbiAgICAgIC5tYXAobmFtZSA9PiAoe1xuICAgICAgICBuYW1lLFxuICAgICAgICAuLi50aGlzLm9wdGlvbnMubW9kaWZpZXJzW25hbWVdLFxuICAgICAgfSkpXG4gICAgICAvLyBzb3J0IHRoZSBtb2RpZmllcnMgYnkgb3JkZXJcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcik7XG5cbiAgICAvLyBtb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byBleGVjdXRlIGFyYml0cmFyeSBjb2RlIHdoZW4gUG9wcGVyLmpzIGdldCBpbml0ZWRcbiAgICAvLyBzdWNoIGNvZGUgaXMgZXhlY3V0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgb2YgaXRzIG1vZGlmaWVyXG4gICAgLy8gdGhleSBjb3VsZCBhZGQgbmV3IHByb3BlcnRpZXMgdG8gdGhlaXIgb3B0aW9ucyBjb25maWd1cmF0aW9uXG4gICAgLy8gQkUgQVdBUkU6IGRvbid0IGFkZCBvcHRpb25zIHRvIGBvcHRpb25zLm1vZGlmaWVycy5uYW1lYCBidXQgdG8gYG1vZGlmaWVyT3B0aW9uc2AhXG4gICAgdGhpcy5tb2RpZmllcnMuZm9yRWFjaChtb2RpZmllck9wdGlvbnMgPT4ge1xuICAgICAgaWYgKG1vZGlmaWVyT3B0aW9ucy5lbmFibGVkICYmIGlzRnVuY3Rpb24obW9kaWZpZXJPcHRpb25zLm9uTG9hZCkpIHtcbiAgICAgICAgbW9kaWZpZXJPcHRpb25zLm9uTG9hZChcbiAgICAgICAgICB0aGlzLnJlZmVyZW5jZSxcbiAgICAgICAgICB0aGlzLnBvcHBlcixcbiAgICAgICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgbW9kaWZpZXJPcHRpb25zLFxuICAgICAgICAgIHRoaXMuc3RhdGVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGZpcmUgdGhlIGZpcnN0IHVwZGF0ZSB0byBwb3NpdGlvbiB0aGUgcG9wcGVyIGluIHRoZSByaWdodCBwbGFjZVxuICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICBjb25zdCBldmVudHNFbmFibGVkID0gdGhpcy5vcHRpb25zLmV2ZW50c0VuYWJsZWQ7XG4gICAgaWYgKGV2ZW50c0VuYWJsZWQpIHtcbiAgICAgIC8vIHNldHVwIGV2ZW50IGxpc3RlbmVycywgdGhleSB3aWxsIHRha2UgY2FyZSBvZiB1cGRhdGUgdGhlIHBvc2l0aW9uIGluIHNwZWNpZmljIHNpdHVhdGlvbnNcbiAgICAgIHRoaXMuZW5hYmxlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlLmV2ZW50c0VuYWJsZWQgPSBldmVudHNFbmFibGVkO1xuICB9XG5cbiAgLy8gV2UgY2FuJ3QgdXNlIGNsYXNzIHByb3BlcnRpZXMgYmVjYXVzZSB0aGV5IGRvbid0IGdldCBsaXN0ZWQgaW4gdGhlXG4gIC8vIGNsYXNzIHByb3RvdHlwZSBhbmQgYnJlYWsgc3R1ZmYgbGlrZSBTaW5vbiBzdHVic1xuICB1cGRhdGUoKSB7XG4gICAgcmV0dXJuIHVwZGF0ZS5jYWxsKHRoaXMpO1xuICB9XG4gIGRlc3Ryb3koKSB7XG4gICAgcmV0dXJuIGRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgfVxuICBlbmFibGVFdmVudExpc3RlbmVycygpIHtcbiAgICByZXR1cm4gZW5hYmxlRXZlbnRMaXN0ZW5lcnMuY2FsbCh0aGlzKTtcbiAgfVxuICBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgcmV0dXJuIGRpc2FibGVFdmVudExpc3RlbmVycy5jYWxsKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNjaGVkdWxlcyBhbiB1cGRhdGUuIEl0IHdpbGwgcnVuIG9uIHRoZSBuZXh0IFVJIHVwZGF0ZSBhdmFpbGFibGUuXG4gICAqIEBtZXRob2Qgc2NoZWR1bGVVcGRhdGVcbiAgICogQG1lbWJlcm9mIFBvcHBlclxuICAgKi9cbiAgc2NoZWR1bGVVcGRhdGUgPSAoKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUpO1xuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIHV0aWxpdGllcyB1c2VmdWwgd2hlbiB3cml0aW5nIGN1c3RvbSBtb2RpZmllcnMuXG4gICAqIFN0YXJ0aW5nIGZyb20gdmVyc2lvbiAxLjcsIHRoaXMgbWV0aG9kIGlzIGF2YWlsYWJsZSBvbmx5IGlmIHlvdVxuICAgKiBpbmNsdWRlIGBwb3BwZXItdXRpbHMuanNgIGJlZm9yZSBgcG9wcGVyLmpzYC5cbiAgICpcbiAgICogKipERVBSRUNBVElPTioqOiBUaGlzIHdheSB0byBhY2Nlc3MgUG9wcGVyVXRpbHMgaXMgZGVwcmVjYXRlZFxuICAgKiBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHYyISBVc2UgdGhlIFBvcHBlclV0aWxzIG1vZHVsZSBkaXJlY3RseSBpbnN0ZWFkLlxuICAgKiBEdWUgdG8gdGhlIGhpZ2ggaW5zdGFiaWxpdHkgb2YgdGhlIG1ldGhvZHMgY29udGFpbmVkIGluIFV0aWxzLCB3ZSBjYW4ndFxuICAgKiBndWFyYW50ZWUgdGhlbSB0byBmb2xsb3cgc2VtdmVyLiBVc2UgdGhlbSBhdCB5b3VyIG93biByaXNrIVxuICAgKiBAc3RhdGljXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS44XG4gICAqIEBtZW1iZXIgVXRpbHNcbiAgICogQG1lbWJlcm9mIFBvcHBlclxuICAgKi9cbiAgc3RhdGljIFV0aWxzID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsKS5Qb3BwZXJVdGlscztcblxuICBzdGF0aWMgcGxhY2VtZW50cyA9IHBsYWNlbWVudHM7XG5cbiAgc3RhdGljIERlZmF1bHRzID0gRGVmYXVsdHM7XG59XG5cbi8qKlxuICogVGhlIGByZWZlcmVuY2VPYmplY3RgIGlzIGFuIG9iamVjdCB0aGF0IHByb3ZpZGVzIGFuIGludGVyZmFjZSBjb21wYXRpYmxlIHdpdGggUG9wcGVyLmpzXG4gKiBhbmQgbGV0cyB5b3UgdXNlIGl0IGFzIHJlcGxhY2VtZW50IG9mIGEgcmVhbCBET00gbm9kZS48YnIgLz5cbiAqIFlvdSBjYW4gdXNlIHRoaXMgbWV0aG9kIHRvIHBvc2l0aW9uIGEgcG9wcGVyIHJlbGF0aXZlbHkgdG8gYSBzZXQgb2YgY29vcmRpbmF0ZXNcbiAqIGluIGNhc2UgeW91IGRvbid0IGhhdmUgYSBET00gbm9kZSB0byB1c2UgYXMgcmVmZXJlbmNlLlxuICpcbiAqIGBgYFxuICogbmV3IFBvcHBlcihyZWZlcmVuY2VPYmplY3QsIHBvcHBlck5vZGUpO1xuICogYGBgXG4gKlxuICogTkI6IFRoaXMgZmVhdHVyZSBpc24ndCBzdXBwb3J0ZWQgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTAuXG4gKiBAbmFtZSByZWZlcmVuY2VPYmplY3RcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGRhdGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0XG4gKiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHNldCBvZiBjb29yZGluYXRlcyBjb21wYXRpYmxlIHdpdGggdGhlIG5hdGl2ZSBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0YCBtZXRob2QuXG4gKiBAcHJvcGVydHkge251bWJlcn0gZGF0YS5jbGllbnRXaWR0aFxuICogQW4gRVM2IGdldHRlciB0aGF0IHdpbGwgcmV0dXJuIHRoZSB3aWR0aCBvZiB0aGUgdmlydHVhbCByZWZlcmVuY2UgZWxlbWVudC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkYXRhLmNsaWVudEhlaWdodFxuICogQW4gRVM2IGdldHRlciB0aGF0IHdpbGwgcmV0dXJuIHRoZSBoZWlnaHQgb2YgdGhlIHZpcnR1YWwgcmVmZXJlbmNlIGVsZW1lbnQuXG4gKi9cbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCAgXCJib290c3RyYXAvanMvc3JjL2NvbGxhcHNlXCJcbmltcG9ydCAgXCIuL2NvbXBvbmVudHMvZHJvcGRvd25cIlxuIiwiaW1wb3J0IFwiYm9vdHN0cmFwL2pzL3NyYy9kcm9wZG93blwiXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9