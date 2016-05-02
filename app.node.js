module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(29);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(5);

  var _coreLocation = __webpack_require__(4);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  var _componentsLayout = __webpack_require__(7);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(10);
    }, '/500': function _() {
      return __webpack_require__(11);
    }, '/about': function about() {
      return __webpack_require__(12);
    }, '/': function _() {
      return __webpack_require__(13);
    }, '/work/freelance': function workFreelance() {
      return __webpack_require__(14);
    }, '/work': function work() {
      return __webpack_require__(15);
    }, '/work/loyola': function workLoyola() {
      return __webpack_require__(16);
    }, '/work/skuba': function workSkuba() {
      return __webpack_require__(17);
    }, '/writing': function writing() {
      return __webpack_require__(18);
    }, '/writing/test-article-one': function writingTestArticleOne() {
      return __webpack_require__(19);
    }, '/writing/test-article-two': function writingTestArticleTwo() {
      return __webpack_require__(20);
    } }; // Auto-generated on build. See tools/lib/routes-loader.js

  var route = function route(path, callback) {
    var handler, component;
    return regeneratorRuntime.async(function route$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          handler = routes[path] || routes['/404'];
          context$1$0.next = 3;
          return regeneratorRuntime.awrap(handler());

        case 3:
          component = context$1$0.sent;
          context$1$0.next = 6;
          return regeneratorRuntime.awrap(callback(_react2['default'].createElement(
            _componentsLayout2['default'],
            null,
            _react2['default'].createElement(component)
          )));

        case 6:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this);
  };

  function run() {
    var _this2 = this;

    var container = document.getElementById('app');
    _coreLocation2['default'].listen(function (location) {
      route(location.pathname, function callee$2$0(component) {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              return context$3$0.abrupt('return', _reactDom2['default'].render(component, container, function () {
                // Track the page view event via Google Analytics
                window.ga('send', 'pageview');
              }));

            case 1:
            case 'end':
              return context$3$0.stop();
          }
        }, null, _this2);
      });
    });
  }

  if (_fbjsLibExecutionEnvironment.canUseDOM) {
    // Run the application when both DOM is ready and page content is loaded
    if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
      run();
    } else {
      document.addEventListener('DOMContentLoaded', run, false);
    }
  }

  exports['default'] = { route: route, routes: routes };
  module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];

  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};

  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(23);

  var _coreLocation = __webpack_require__(4);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  function isLeftClickEvent(event) {
    return event.button === 0;
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }

  var Link = (function (_Component) {
    _inherits(Link, _Component);

    function Link() {
      _classCallCheck(this, Link);

      _get(Object.getPrototypeOf(Link.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var children = _props.children;

        var props = _objectWithoutProperties(_props, ['to', 'children']);

        return _react2['default'].createElement(
          'a',
          _extends({}, props, { onClick: Link.handleClick.bind(this) }),
          children
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        to: _react.PropTypes.string.isRequired,
        children: _react.PropTypes.element.isRequired,
        state: _react.PropTypes.object,
        onClick: _react.PropTypes.func
      },
      enumerable: true
    }, {
      key: 'handleClick',
      value: function value(event) {
        var allowTransition = true;
        var clickResult = undefined;

        if (_this.props && _this.props.onClick) {
          clickResult = _this.props.onClick(event);
        }

        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }

        if (clickResult === false || event.defaultPrevented === true) {
          allowTransition = false;
        }

        event.preventDefault();

        if (allowTransition) {
          var link = event.currentTarget;
          _coreLocation2['default'].pushState(_this.props && _this.props.state || null, _this.props && _this.props.to || link.pathname + link.search);
        }
      },
      enumerable: true
    }]);

    return Link;
  })(_react.Component);

  exports['default'] = Link;
  module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibExecutionEnvironment = __webpack_require__(5);

  var _historyLibCreateBrowserHistory = __webpack_require__(26);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibCreateMemoryHistory = __webpack_require__(27);

  var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

  var _historyLibUseQueries = __webpack_require__(28);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = (0, _historyLibUseQueries2['default'])(_fbjsLibExecutionEnvironment.canUseDOM ? _historyLibCreateBrowserHistory2['default'] : _historyLibCreateMemoryHistory2['default'])();

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(21);

  function Footer() {
    return _react2['default'].createElement(
      'footer',
      { className: 'footer center' },
      _react2['default'].createElement(
        'span',
        { className: 'job__position' },
        '© 2016 Zachary Meredith'
      )
    );
  }

  exports['default'] = Footer;
  module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(22);

  var _Navigation = __webpack_require__(9);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  var _Footer = __webpack_require__(6);

  var _Footer2 = _interopRequireDefault(_Footer);

  function Layout(_ref) {
    var children = _ref.children;

    return _react2['default'].createElement(
      'div',
      { className: 'Layout container' },
      _react2['default'].createElement(_Navigation2['default'], null),
      _react2['default'].createElement(
        'div',
        { className: 'content-wrapper' },
        children
      ),
      _react2['default'].createElement(_Footer2['default'], null)
    );
  }

  Layout.propTypes = {
    children: _react.PropTypes.element.isRequired
  };

  exports['default'] = Layout;
  module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  /*
    Video
    <Video />
  */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _autobindDecorator = __webpack_require__(25);

  var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

  var Video = (function (_React$Component) {
    _inherits(Video, _React$Component);

    function Video() {
      _classCallCheck(this, _Video);

      _get(Object.getPrototypeOf(_Video.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Video, [{
      key: 'playVideo',
      value: function playVideo() {
        this.play();
      }
    }, {
      key: 'pauseVideo',
      value: function pauseVideo() {
        this.pause();
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'video',
          { onMouseOver: this.playVideo, onMouseOut: this.pauseVideo, className: 'hover-video', width: '400', height: '600' },
          _react2['default'].createElement('source', { src: this.props.vid, type: 'video/mp4' })
        );
      }
    }]);

    var _Video = Video;
    Video = (0, _autobindDecorator2['default'])(Video) || Video;
    return Video;
  })(_react2['default'].Component);

  ;

  exports['default'] = Video;
  module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(24);

  var _Link = __webpack_require__(3);

  var _Link2 = _interopRequireDefault(_Link);

  function Navigation() {
    return _react2['default'].createElement(
      'div',
      { className: 'Navigation__wrapper' },
      _react2['default'].createElement(
        'a',
        { href: '/', onClick: _Link2['default'].handleClick },
        _react2['default'].createElement(
          'div',
          { className: 'logo' },
          _react2['default'].createElement('span', { className: 'logo__inner' })
        )
      ),
      _react2['default'].createElement(
        'ul',
        { className: 'Navigation', role: 'menu' },
        _react2['default'].createElement(
          'li',
          { className: 'Navigation-item' },
          _react2['default'].createElement(
            'a',
            { className: 'Navigation-link', href: '/about', onClick: _Link2['default'].handleClick },
            'About'
          )
        ),
        _react2['default'].createElement(
          'li',
          { className: 'Navigation-item' },
          _react2['default'].createElement(
            'a',
            { className: 'Navigation-link', href: '/writing', onClick: _Link2['default'].handleClick },
            'Writing'
          )
        )
      )
    );
  }

  exports['default'] = Navigation;
  module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Not Found'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'The page you\'re looking for was not found.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Error'
          ),
          _react2['default'].createElement(
            'pre',
            null,
            this.props.error ? this.props.error.message + '\n\n' + this.props.error.stack : 'A critical error occurred.'
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        error: _react.PropTypes.instanceOf(Error)
      },
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: "render",
      value: function render() {
        return _react2["default"].createElement(
          "div",
          null,
          _react2["default"].createElement(
            "section",
            { className: "intro" },
            _react2["default"].createElement(
              "h1",
              { className: "heading--name" },
              "About"
            )
          ),
          _react2["default"].createElement("div", { className: "wip" }),
          _react2["default"].createElement(
            "div",
            { className: "grid fadeIn" },
            _react2["default"].createElement(
              "div",
              { className: "grid__row" },
              _react2["default"].createElement(
                "div",
                { className: "grid__item grid__item--half " },
                _react2["default"].createElement(
                  "h3",
                  null,
                  "Hey"
                ),
                _react2["default"].createElement(
                  "p",
                  null,
                  "I'm Zack."
                ),
                _react2["default"].createElement(
                  "p",
                  null,
                  "I'm a designer & front-end developer trying to make useful things in New Orleans, La. When I'm not at my computer I'm usually ",
                  _react2["default"].createElement(
                    "a",
                    { href: "http://tarenottear.bandcamp.com/releases", target: "_blank", className: "txt-link" },
                    "playing guitar"
                  ),
                  " or riding my bike."
                )
              ),
              _react2["default"].createElement(
                "div",
                { className: "grid__item grid__item--half" },
                _react2["default"].createElement("div", { className: "grid__item__image bg-self" })
              )
            ),
            _react2["default"].createElement(
              "div",
              { className: "grid__row" },
              _react2["default"].createElement(
                "div",
                { className: "grid__item grid__item--one-third sm-right" },
                _react2["default"].createElement("div", { className: "wip sm-show" }),
                _react2["default"].createElement(
                  "p",
                  null,
                  "I'm obsessed with the intersection of functionality & beauty. I try to use this passion to contiously better myself so that I might craft things which have a positive effect on the lives of others."
                )
              ),
              _react2["default"].createElement(
                "div",
                { className: "grid__item grid__item--two-thirds sm-left" },
                _react2["default"].createElement("div", { className: "grid__item__image bg-comp" })
              )
            ),
            _react2["default"].createElement(
              "div",
              { className: "grid__row" },
              _react2["default"].createElement(
                "div",
                { className: "grid__item grid__item--half " },
                _react2["default"].createElement("div", { className: "wip sm-show" }),
                _react2["default"].createElement(
                  "p",
                  null,
                  "My passion for music has allowed me to tour half the U.S. with my best friends & meet countless inpiring people."
                ),
                _react2["default"].createElement(
                  "p",
                  null,
                  "These experiences not only exposed me to amazing creatives, but also to the importance of community building & cultivating relationships."
                ),
                _react2["default"].createElement(
                  "p",
                  null,
                  "My band Tare has a demo from our new album towards the end of our friends at Community Records' latest sampler. Give it a listen ",
                  _react2["default"].createElement(
                    "a",
                    { className: "txt-link", href: "http://communityrecords.bandcamp.com/album/community-records-compilation-vol-5", target: "_blank" },
                    "here"
                  ),
                  "."
                )
              ),
              _react2["default"].createElement(
                "div",
                { className: "grid__item grid__item--half" },
                _react2["default"].createElement("div", { className: "grid__item__image bg-guit" })
              )
            ),
            _react2["default"].createElement(
              "div",
              { className: "grid__row" },
              _react2["default"].createElement(
                "div",
                { className: "grid__item grid__item--full" },
                _react2["default"].createElement("div", { className: "grid__item__image bg-nl" })
              )
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports["default"] = _default;
  module.exports = exports["default"];
  /*<div className="grid__row">
   <div className="grid__item grid__item--half ">
     <h3>Contact</h3>
    <p>I'm a designer and front-end developer trying to make useful things in New Orleans, La. When I'm not at my computer I'm usually <a href="" className="txt-link">playing guitar</a> or riding my bike.</p>
   </div>
    <div className="grid__item grid__item--half">
     </div>
    </div>*/

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsLink = __webpack_require__(3);

  var _componentsLink2 = _interopRequireDefault(_componentsLink);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'section',
            { className: 'intro fadeIn' },
            _react2['default'].createElement(
              'h1',
              { className: 'heading' },
              _react2['default'].createElement(
                'span',
                { className: 'heading--name' },
                'Zack Meredith'
              ),
              ', lifelong musician turned designer & front-end web developer.'
            ),
            _react2['default'].createElement(
              'ul',
              { className: 'social-list' },
              _react2['default'].createElement(
                'li',
                { className: 'social-list__item' },
                _react2['default'].createElement(
                  'a',
                  { href: 'https://twitter.com/zackmeredith', target: '_blank' },
                  _react2['default'].createElement('i', { className: 'fa fa-twitter' })
                )
              ),
              _react2['default'].createElement(
                'li',
                { className: 'social-list__item' },
                _react2['default'].createElement(
                  'a',
                  { href: 'https://dribbble.com/zackmeredith/', target: '_blank' },
                  _react2['default'].createElement('i', { className: 'fa fa-dribbble' })
                )
              ),
              _react2['default'].createElement(
                'li',
                { className: 'social-list__item' },
                _react2['default'].createElement(
                  'a',
                  { href: 'https://github.com/zackmeredith/', target: '_blank' },
                  _react2['default'].createElement('i', { className: 'fa fa-github' })
                )
              ),
              _react2['default'].createElement(
                'li',
                { className: 'social-list__item' },
                _react2['default'].createElement(
                  'a',
                  { href: 'https://instagram.com/zackmeredith/', target: '_blank' },
                  _react2['default'].createElement('i', { className: 'fa fa-instagram' })
                )
              ),
              _react2['default'].createElement(
                'li',
                { className: 'social-list__item' },
                _react2['default'].createElement(
                  'a',
                  { href: 'https://codepen.io/zackmeredith/', target: '_blank' },
                  _react2['default'].createElement('i', { className: 'fa fa-codepen' })
                )
              )
            )
          ),
          _react2['default'].createElement('div', { className: 'wip' }),
          _react2['default'].createElement(
            'section',
            { className: 'work fadeInSlideUp' },
            _react2['default'].createElement(
              'h3',
              { className: 'section__title' },
              _react2['default'].createElement(
                'span',
                { className: 'section__title__border-wrap' },
                'Work'
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'job__wrapper' },
              _react2['default'].createElement(
                'div',
                { className: 'job' },
                _react2['default'].createElement(
                  'h4',
                  { className: 'job__company' },
                  'LOYNO: Dept. of Film & Music Industry Studies'
                ),
                _react2['default'].createElement(
                  'span',
                  { className: 'job__position' },
                  'Designer & Front-end developer '
                ),
                _react2['default'].createElement(
                  'span',
                  { className: 'job__duration' },
                  '(Fall 2015 - Present)'
                ),
                _react2['default'].createElement(
                  'p',
                  { className: 'job__summary' },
                  'I\'m helping to redesign and develop the Loyola University New Orleans: Dept. of Film & Music Industry Studies site to both reflect their expansion and prepare for further growth.'
                ),
                _react2['default'].createElement(
                  'a',
                  { className: 'btn', href: '/work/loyola', onClick: _componentsLink2['default'].handleClick },
                  'Read More'
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'job' },
                _react2['default'].createElement(
                  'h4',
                  { className: 'job__company' },
                  'Skuba Design Studio'
                ),
                _react2['default'].createElement(
                  'span',
                  { className: 'job__position' },
                  'Design & Front-end development Intern '
                ),
                _react2['default'].createElement(
                  'span',
                  { className: 'job__duration' },
                  '(Summer 2015)'
                ),
                _react2['default'].createElement(
                  'p',
                  { className: 'job__summary' },
                  'Developed static client websites, created web assets for the angency, and dove into a database or two.'
                ),
                _react2['default'].createElement(
                  'a',
                  { className: 'btn', href: '/work/skuba', onClick: _componentsLink2['default'].handleClick },
                  'Read More'
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'job' },
                _react2['default'].createElement(
                  'h4',
                  { className: 'job__company' },
                  'Freelance'
                ),
                _react2['default'].createElement(
                  'span',
                  { className: 'job__position' },
                  'Designer, Web Developer'
                ),
                _react2['default'].createElement(
                  'p',
                  { className: 'job__summary' },
                  'Worked with clients to translate their personal brands or businesses to the Web through design and development.'
                )
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'half-section__wrapper fadeInSlideUp' },
            _react2['default'].createElement(
              'section',
              { className: 'contact half-section' },
              _react2['default'].createElement(
                'h3',
                { className: 'section__title' },
                'Contact'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'I’m always interested in working on new projects and would love to hear about yours. ',
                _react2['default'].createElement(
                  'a',
                  { className: 'txt-link', href: 'mailto:zacharybmeredith@gmail.com?subject=YOUR%20SUBJECT%20' },
                  'Email me'
                ),
                ' if you would like to work together.'
              )
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];
  /*<a className="btn" href="/work/freelance" onClick={Link.handleClick}>Read More</a>*/

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: "render",
      value: function render() {
        return _react2["default"].createElement(
          "div",
          null,
          _react2["default"].createElement(
            "section",
            { className: "intro" },
            _react2["default"].createElement(
              "h1",
              { className: "heading--name" },
              "Freelance"
            ),
            _react2["default"].createElement(
              "p",
              null,
              "Coming soon."
            )
          ),
          _react2["default"].createElement("div", { className: "wip" })
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports["default"] = _default;
  module.exports = exports["default"];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: "render",
      value: function render() {
        return _react2["default"].createElement(
          "div",
          null,
          _react2["default"].createElement(
            "section",
            { className: "intro" },
            _react2["default"].createElement(
              "h1",
              { className: "heading--name" },
              "Work"
            )
          ),
          _react2["default"].createElement("div", { className: "wip" }),
          _react2["default"].createElement(
            "div",
            { className: "grid fadeIn" },
            _react2["default"].createElement(
              "div",
              { className: "grid__row" },
              _react2["default"].createElement(
                "div",
                { className: "grid__item grid__item--half-even sm-even-pad-right" },
                _react2["default"].createElement("div", { className: "grid__item__image bg-work1" })
              ),
              _react2["default"].createElement(
                "div",
                { className: "grid__item grid__item--half-even sm-even-pad-left" },
                _react2["default"].createElement("div", { className: "grid__item__image bg-work2" })
              )
            ),
            _react2["default"].createElement(
              "div",
              { className: "grid__row" },
              _react2["default"].createElement(
                "div",
                { className: "grid__item grid__item--half-even sm-even-pad-right" },
                _react2["default"].createElement("div", { className: "grid__item__image bg-work3" })
              ),
              _react2["default"].createElement(
                "div",
                { className: "grid__item grid__item--half-even even-pad sm-even-pad-left" },
                _react2["default"].createElement("div", { className: "grid__item__image bg-work4" })
              )
            ),
            _react2["default"].createElement(
              "div",
              { className: "grid__row" },
              _react2["default"].createElement(
                "div",
                { className: "grid__item grid__item--half-even sm-even-pad-right" },
                _react2["default"].createElement("div", { className: "grid__item__image bg-work5" })
              ),
              _react2["default"].createElement(
                "div",
                { className: "grid__item grid__item--half-even sm-even-pad-left" },
                _react2["default"].createElement("div", { className: "grid__item__image bg-work6" })
              )
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports["default"] = _default;
  module.exports = exports["default"];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsModulesVideo = __webpack_require__(8);

  var _componentsModulesVideo2 = _interopRequireDefault(_componentsModulesVideo);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'fadeIn' },
          _react2['default'].createElement(
            'div',
            { className: 'banner-height py4' },
            _react2['default'].createElement('div', { className: 'grid__item__image bg-famis-banner bg-cover' })
          ),
          _react2['default'].createElement(
            'div',
            { className: 'grid__row flex-center py4' },
            _react2['default'].createElement(
              'div',
              { className: 'grid__item grid__item--p' },
              _react2['default'].createElement(
                'span',
                { className: 'section-titleWrapper mb3' },
                _react2['default'].createElement(
                  'h2',
                  { className: 'heading--name mt0 mb1' },
                  'Loyola University New Orleans'
                ),
                _react2['default'].createElement(
                  'h4',
                  { className: 'color-softGrey caps f-w-md mt0 mb0' },
                  'Department of Film & Music Industry Studies'
                )
              ),
              _react2['default'].createElement(
                'p',
                { className: 'p-lrg' },
                'Designing for a set amount of predetermined content is usually relatively straightforward. But designing for the unknown introduces so many new issues to solve. The site for Loyola University New Orlean’s Department of Film & Music Industry Studies is constantly evolving. They needed a system that would not only account for what they offered now, but one that was flexible & allowed them to build out new parts of the site quickly without touching code.'
              ),
              _react2['default'].createElement(
                'span',
                { className: 'section-titleWrapper mt3 mb3' },
                _react2['default'].createElement(
                  'h3',
                  { className: 'heading--name mt0 mb0' },
                  'The Problems'
                )
              ),
              _react2['default'].createElement(
                'p',
                { className: 'p-lrg' },
                'There were a few core problems that I set out to solve with creating this new design & system. I wanted to create a system that would allow the department to create new pages & featured content easily, but with a great amount of flexibility. I also wanted to reduce the information density of the pages & allow visitors to quickly scan for what they were looking for.'
              ),
              _react2['default'].createElement(
                'span',
                { className: 'section-titleWrapper mt3 mb3' },
                _react2['default'].createElement(
                  'h3',
                  { className: 'heading--name mt0 mb0' },
                  'Information Overload'
                )
              ),
              _react2['default'].createElement(
                'p',
                { className: 'p-lrg' },
                'One of the main issues with the old site was that visitors were immediately presented with a large amount of information & much of this information was not pertinent to that specific person’s interests. But at the same time, the department had several kinds of content it wanted to feature regularly to people visiting the site.'
              ),
              _react2['default'].createElement(
                'p',
                { className: 'p-lrg' },
                'To address that, I designed & implemented this tile system below. With this visitors could quickly scan the tiles on the homepage & get an idea of what was on the site without sifting through large amounts of information. For the regular tiles, a person would be able to either jump directly to a piece of featured content or explore more like it by tapping its category or content type label above the title of the tile. A custom tile can also be created on the backend to allow for more flexibility.'
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'grid__row flex-center' },
            _react2['default'].createElement(
              'div',
              { className: 'grid__item grid__item--full h-img-lrg mb3' },
              _react2['default'].createElement('div', { className: 'grid__item__image bg-famis-home bg-cover' })
            ),
            _react2['default'].createElement(
              'div',
              { className: 'grid__item grid__item--p' },
              _react2['default'].createElement(
                'p',
                { className: 'p-lrg' },
                'In addition to the tiles, I tried to replace the complicated homepage with easy to find navigation & search along with a hero section that immediately gave the visitor an idea of what the site offered.'
              ),
              _react2['default'].createElement(
                'p',
                { className: 'p-lrg' },
                'This section immediately shows the visitor copy which explains the mission of the department along with links to the most important actions on the site & an overview video. This video shows what differentiates the department & offers personal stories from students & professors.'
              ),
              _react2['default'].createElement(
                'p',
                { className: 'p-lrg' },
                'The accent maroon color & gradient were used to lead the visitor’s eyes to the most important parts of the homepage. With the large amount of content that the department is now creating, it was important for the visitor to quickly be able to notice the search functionality. Coupled with that on large screens was the most important CTA for prospective students visiting the site & the menu button on smaller devices.'
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'grid__item grid__item--full h-img-lrg mt3 mb3' },
              _react2['default'].createElement('div', { className: 'grid__item__image bg-famis-mobile-home bg-contain' })
            ),
            _react2['default'].createElement(
              'div',
              { className: 'grid__item grid__item--p mb3' },
              _react2['default'].createElement(
                'span',
                { className: 'section-titleWrapper mt3 mb3' },
                _react2['default'].createElement(
                  'h3',
                  { className: 'heading--name mt0 mb0' },
                  'Full Module System'
                )
              ),
              _react2['default'].createElement(
                'p',
                { className: 'p-lrg' },
                'After developing the tile system I realized that it would be possible to create a similar system for creating full page layouts. This led to designing & developing a set of modules for text, videos, images, links, & lists all contained within blocks which could be endlessly composable.'
              ),
              _react2['default'].createElement(
                'p',
                { className: 'p-lrg' },
                'In the backend, these blocks can be created & managed without touching any of the code. This was incredibly important as most of the people managing content in the future will be office & student workers. Content managers can choose the size & type of module they need & add it in wherever they need it.'
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'grid__item--two-thirds h-img-lrg mb3' },
              _react2['default'].createElement('div', { className: 'grid__item__image bg-famis-tiles bg-contain shadow-lrg' })
            ),
            _react2['default'].createElement(
              'div',
              { className: 'grid__item--two-thirds h-img-lrg mb3 flex-end' },
              _react2['default'].createElement('div', { className: 'grid__item__image bg-famis-tiles2 bg-contain shadow-lrg' })
            ),
            _react2['default'].createElement(
              'div',
              { className: 'grid__item grid__item--p' },
              _react2['default'].createElement(
                'span',
                { className: 'section-titleWrapper mt3 mb3' },
                _react2['default'].createElement(
                  'h3',
                  { className: 'heading--name mt0 mb0' },
                  'Still Evolving'
                )
              ),
              _react2['default'].createElement(
                'p',
                { className: 'p-lrg' },
                'This project is still evolving & I\'ll be refining the design/code over time. If you\'re interested, you can follow along with the project on ',
                _react2['default'].createElement(
                  'a',
                  { href: 'https://dribbble.com/zackmeredith/projects/367084-FAMIS', target: '_blank', className: 'txt-link' },
                  'Dribbble'
                ),
                '.'
              )
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];
  /*<div className="wip"></div>*/

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: "render",
      value: function render() {
        return _react2["default"].createElement(
          "div",
          { className: "fadeIn" },
          _react2["default"].createElement(
            "div",
            { className: "banner-height py4" },
            _react2["default"].createElement("div", { className: "grid__item__image bg-skuba-banner bg-cover" })
          ),
          _react2["default"].createElement(
            "div",
            { className: "grid__row flex-center py4" },
            _react2["default"].createElement(
              "div",
              { className: "grid__item grid__item--p" },
              _react2["default"].createElement(
                "span",
                { className: "section-titleWrapper mb3" },
                _react2["default"].createElement(
                  "h2",
                  { className: "heading--name mt0 mb1" },
                  "Skuba Design Studio"
                ),
                _react2["default"].createElement(
                  "h4",
                  { className: "color-softGrey caps f-w-md mt0 mb0" },
                  "A look into the agency world"
                )
              ),
              _react2["default"].createElement(
                "p",
                { className: "p-lrg" },
                "Throughout my summer at Skuba Design Studio I learned countless valuable lessons, the joys of working on a team, & the importance of being adaptable in a small agency environment."
              ),
              _react2["default"].createElement(
                "p",
                { className: "p-lrg" },
                "From the importance of contracts to editing a database, I learned so much at Skuba. Although I was brought on for design & front-end tasks, the small agency environment meant that everyone had to jump into areas where they might not necessarily have expertise. This aspect was incredibly beneficial to someone who was new to the industry. I was able to experiment with things I was interested in to solve real problems. Some days involved developing static sites, designing, researching a client’s industry & competition, or building internal tools."
              ),
              _react2["default"].createElement(
                "p",
                { className: "p-lrg" },
                "While I enjoyed most of the work, I recognized that my passion was greater in the realm of design & front-end work. But I also developed an interest in the process as a whole. The way that each piece of the project came together was fascinating to me."
              ),
              _react2["default"].createElement(
                "p",
                { className: "p-lrg" },
                "The most valuable aspect of the experience to me was the opportunity to work with a team of intelligent & talented individuals. I learned so much so quickly during my time at Skuba. Far more than I was able to accomplish on my own in a similar amount of time. This led me to realize that although I am a quick, self learner I was able to accomplish a lot more with the help of a team with diverse expertise & backgrounds. I also realized the importance of surrounding yourself with people far smarter than yourself. I would rather be in a room where I feel like I knew nothing but be learning everyday than be in one where I was the smartest but wasn’t learning anything."
              )
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports["default"] = _default;
  module.exports = exports["default"];
  /*<div className="wip"></div>*/ /*<p className="p-lrg"></p>*/

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: "render",
      value: function render() {
        return _react2["default"].createElement(
          "div",
          null,
          _react2["default"].createElement(
            "section",
            { className: "intro" },
            _react2["default"].createElement(
              "h1",
              { className: "heading--name" },
              "Writing"
            ),
            _react2["default"].createElement(
              "p",
              null,
              "Coming soon."
            )
          ),
          _react2["default"].createElement("div", { className: "wip" })
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports["default"] = _default;
  module.exports = exports["default"];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Test Article 1'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Test Article 2'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.heading {\n  font-weight: 300;\n}\n\n.heading--name {\n  font-weight: 600;\n}\n\n\n.color-darkGrey {\n  color: #333;\n}\n\n.color-lightGrey {\n  color: #ACACAC;\n}\n\n.color-mdGrey {\n  color: #5F5F5F;\n}\n\n.color-softGrey {\n  color: #798693;\n}\n\n.color-brandColor {\n  color: #AACFD0;\n}\n\n.caps {\n  text-transform: uppercase;\n  letter-spacing: 0.075em;\n}\n\n\n.f-w-md {\n  font-weight: 400;\n}\n\n\n.mt0 {\n  margin-top: 0;\n}\n\n.mt2 {\n  margin-top: 1rem;\n}\n\n.mt3 {\n  margin-top: 1.5rem;\n}\n\n.mb0 {\n  margin-bottom: 0;\n}\n.mb1 {\n  margin-bottom: 0.5rem;\n}\n\n.mb2 {\n  margin-bottom: 1rem;\n}\n\n.mb3 {\n  margin-bottom: 1.5rem;\n}\n\n.footer {\n  // align-self: flex-end;\n}\n", ""]);

  // exports


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.heading {\n  font-weight: 300;\n}\n\n.heading--name {\n  font-weight: 600;\n}\n\n\n.color-darkGrey {\n  color: #333;\n}\n\n.color-lightGrey {\n  color: #ACACAC;\n}\n\n.color-mdGrey {\n  color: #5F5F5F;\n}\n\n.color-softGrey {\n  color: #798693;\n}\n\n.color-brandColor {\n  color: #AACFD0;\n}\n\n.caps {\n  text-transform: uppercase;\n  letter-spacing: 0.075em;\n}\n\n\n.f-w-md {\n  font-weight: 400;\n}\n\n\n.mt0 {\n  margin-top: 0;\n}\n\n.mt2 {\n  margin-top: 1rem;\n}\n\n.mt3 {\n  margin-top: 1.5rem;\n}\n\n.mb0 {\n  margin-bottom: 0;\n}\n.mb1 {\n  margin-bottom: 0.5rem;\n}\n\n.mb2 {\n  margin-bottom: 1rem;\n}\n\n.mb3 {\n  margin-bottom: 1.5rem;\n}\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  background-color: #efefef;\n  color: #333;\n  font-family: 'proxima-nova',-apple-system,\".SFNSUI-Regular\",HelveticaNeue,sans-serif;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-size: 16px;\n  height: 100%;\n}\n\n#app {\n  min-height: 100%;\n\n}\n\n.Layout {\n  // height: 100%;\n  min-height: 100%;\n\n}\n\n.container  {\n  margin: 0 auto;\n  max-width: 1060px;\n  padding: 1.25rem;\n  background-color: white;\n  min-height: 100%\n}\n\n@media screen and (min-width: 50em) {\n\n  .container {\n    padding: 2rem 4rem 1rem;\n    //: 2rem;\n  }\n  }\n\n.section {\n\n\n}\n\n.section__title {\n  text-transform: uppercase;\n  font-size: 0.875rem;\n  letter-spacing: 0.075em;\n  //: 1.5rem;\n  color: #ACACAC;\n  font-weight: 600;\n}\n\n.section-titleWrapper {\n  padding: 1rem 0 1rem 1.5rem;\n  border-left: 2px solid #AACFD0;\n  display: block;\n}\n\n.hr {\n}\n\n.hr--sm-bold {\n  height: 2px;\n  border: none;\n  outline: none;\n  width: 3rem;\n  margin-left: 0;\n  background-color: #333;\n}\n\n.job__wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n\n.job {\n  margin-bottom: 2rem\n}\n\n@media screen and (min-width: 50em) {\n\n  .job {\n    -webkit-flex-basis: calc(50% - 1rem);\n        -ms-flex-preferred-size: calc(50% - 1rem);\n            flex-basis: calc(50% - 1rem);\n    margin-bottom: 2rem;\n  }\n\n  .job:nth-child(odd) {\n    padding-right: 1rem;\n  }\n\n  .job:nth-child(even) {\n    padding-left: 1rem;\n  }\n    }\n\n.job__company {\n  font-weight: 600;\n  margin-bottom: 0.25em;\n  font-size: 1rem;\n  color: #393633;\n}\n\n.job__position {\n  //: #798693;\n  color: #5F5F5F;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n}\n\n.job__duration {\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  color: #ACACAC;\n}\n\n.job__summary {\n  margin-bottom: 2rem;\n}\n\n.heading {\n  line-height: 1.5;\n  display: block;\n  max-width: 560px;\n  font-weight: 300;\n}\n\n.social-list {\n\n  list-style: none;\n  padding-left: 0;\n  padding: 0.5rem 0 0\n}\n\n.social-list__item {\n  display: inline-block;\n}\n\n.social-list__item i {\n  font-size: 1.25rem;\n  color: #333;\n  -webkit-transition: 0.2s ease-in-out;\n  -o-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n}\n\n.social-list__item i:hover {\n  color: #ACACAC;\n}\n\n.social-list__item:not(last-child) {\n  padding-right: 1.5rem;\n}\n\n\n.work {\n  padding: 2rem 0;\n}\n\n\n.btn {\n  border: 1px solid #AACFD0;\n  padding: 0.5rem 1.5rem;\n  text-decoration: none;\n  color: #AACFD0;\n  font-size: 0.875rem;\n  text-align: center;\n  border-radius: 2rem\n}\n\n\n.btn:hover {\n  background-color: #AACFD0;\n  color: white;\n}\n\n.center {\n  text-align: center;\n}\n\np {\n  line-height: 1.5;\n  color: #5F5F5F;\n}\n\n\n.intro {\n  padding: 3rem 0 0.5rem;\n}\n\n.wip {\n  height: 0.5rem;\n  background: #AACFD0;\n\n}\n\n\n.half-section__wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n\n.half-section {\n}\n\n@media screen and (min-width: 50em) {\n\n  .half-section {\n    -webkit-flex-basis: calc(50% - 1rem);\n        -ms-flex-preferred-size: calc(50% - 1rem);\n            flex-basis: calc(50% - 1rem);\n    max-width: calc(50% - 1rem);\n  }\n\n  .half-section:nth-child(odd) {\n    padding-right: 1rem;\n  }\n\n  .half-section:nth-child(even) {\n    padding-left: 1rem;\n  }\n  }\n\n.txt-link {\n  // display: inline-block;\n  color: #ACACAC;\n  text-decoration: none;\n  padding-bottom: 0.25rem;\n  border-bottom: 1px solid;\n  -webkit-transition: 0.2s ease-in-out;\n  -o-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out\n}\n\n.txt-link:hover {\n  color: #333;\n}\n\n.content-wrapper {\n  margin-bottom: 3rem\n}\n\n@media screen and (min-width: 50em) {\n\n  .content-wrapper {\n    margin-bottom: 5rem;\n  }\n    }\n\n\n.fadeInSlideUp {\n  -webkit-animation: slideUp 1.5s, fadeIn 1.75s;\n       -o-animation: slideUp 1.5s, fadeIn 1.75s;\n          animation: slideUp 1.5s, fadeIn 1.75s;\n  will-change: transform, opacity;\n}\n\n.fadeIn {\n  -webkit-animation: fadeIn 2s;\n       -o-animation: fadeIn 2s;\n          animation: fadeIn 2s;\n  will-change: opacity;\n}\n\n.wip {\n  -webkit-animation: fadeIn 1.5s;\n       -o-animation: fadeIn 1.5s;\n          animation: fadeIn 1.5s;\n  will-change: opacity;\n}\n\n@-webkit-keyframes slideUp {\n  0% {\n    -webkit-transform: translateY(15%);\n            transform: translateY(15%);\n  }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n\n@-o-keyframes slideUp {\n  0% {\n    -o-transform: translateY(15%);\n       transform: translateY(15%);\n  }\n  100% {\n    -o-transform: translateY(0);\n       transform: translateY(0);\n  }\n}\n\n@keyframes slideUp {\n  0% {\n    -webkit-transform: translateY(15%);\n         -o-transform: translateY(15%);\n            transform: translateY(15%);\n  }\n  100% {\n    -webkit-transform: translateY(0);\n         -o-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n\n@-webkit-keyframes slideRight {\n  0% {\n    -webkit-transform: translateX(5%);\n            transform: translateX(5%);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n}\n\n@-o-keyframes slideRight {\n  0% {\n    -o-transform: translateX(5%);\n       transform: translateX(5%);\n  }\n  100% {\n    -o-transform: translateX(0);\n       transform: translateX(0);\n  }\n}\n\n@keyframes slideRight {\n  0% {\n    -webkit-transform: translateX(5%);\n         -o-transform: translateX(5%);\n            transform: translateX(5%);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n         -o-transform: translateX(0);\n            transform: translateX(0);\n  }\n}\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@-o-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.grid {\n  padding: 0.5rem 0\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.grid__row {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.grid__item {\n  width: 100%;\n  padding: 0.5rem 0;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.grid__item__image {\n  -webkit-background-size: cover;\n          background-size: cover;\n  background-position: center center;\n  min-height: 200px;\n  height: 100%;\n  width: 100%;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@media screen and (min-width: 50em) {\n\n  .grid__item {\n\n\n}\n\n  .grid__item:nth-child(even) {\n    padding: 0.5rem 0 0.5rem 1rem;\n  }\n\n  .grid__item:nth-child(odd) {\n    padding: 0.5rem 1rem 0.5rem 0;\n  }\n\n  .grid__item--one-third {\n    //: calc(33%);\n    width: calc(33% - 1rem);\n    height: 360px;\n  }\n\n  .grid__item--two-thirds {\n    width: calc(67% - 1rem);\n    height: 360px;\n  }\n\n  .grid__item--half {\n    width: calc(50% - 1rem);\n    height: 360px;\n  }\n\n  .grid__item--half-even {\n    width: calc(50% - 0.5rem);\n    height: 360px;\n  }\n\n  .grid__item--half-image {\n    width: calc(50% - 0.5rem);\n    height: 360px;\n  }\n\n  .grid__item--full {\n    width: 100%;\n    height: 360px;\n    padding: 0.5rem 0 !important;\n  }\n\n  .grid__item--p {\n    width: calc(60% - 1rem);\n  }\n}\n\n.bg-self {\n  background-image: url(/img/face.jpg);\n  background-position: center top;\n}\n\n.bg-guit {\n  background-image: url(/img/guit.jpg);\n}\n\n.bg-guit2 {\n  background-image: url(/img/guit2.jpg);\n}\n\n.bg-comp {\n  background-image: url(/img/comput.jpg);\n}\n\n.bg-nl {\n  background-image: url(/img/newlands.jpg);\n}\n\n.bg-work1 {\n  background-image: url(/img/work1.jpg);\n}\n\n.bg-work2 {\n  background-image: url(/img/work2.jpg);\n}\n\n.bg-work3 {\n  background-image: url(/img/work3.jpg);\n}\n\n.bg-work4 {\n  background-image: url(/img/work4.jpg);\n}\n\n.bg-work5 {\n  background-image: url(/img/work5.jpg);\n}\n\n.bg-work6 {\n  background-image: url(/img/work6.jpg);\n}\n\n.bg-cover {\n  -webkit-background-size: cover;\n          background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.bg-contain {\n  -webkit-background-size: contain;\n          background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.bg-famis-banner {\n  background-image: url('/img/famis-banner.jpg');\n}\n\n.bg-skuba-banner {\n  background-image: url('/img/skuba.jpg');\n}\n\n.bg-famis-tiles {\n  background-image: url('/img/famis-tiles.jpg');\n}\n\n.bg-famis-tiles2 {\n  background-image: url('/img/famis-tiles2.jpg');\n}\n\n.bg-famis-home-tiles {\n  background-image: url('/img/home-tiles.jpg');\n}\n\n.bg-famis-news-tiles {\n  background-image: url('/img/news-tiles.jpg');\n}\n\n.bg-famis-home {\n  background-image: url('/img/famhome.jpg');\n}\n\n.bg-famis-mobile-home {\n  background-image: url('/img/mobile-home.jpg');\n}\n\n.bg-famis-2 {\n  background-image: url('/img/famismobile.png');\n  -webkit-background-size: contain;\n          background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n\n}\n\n.bg-red-grad {\nbackground: -webkit-gradient(linear,right top, left top,color-stop(0, #AD2427), color-stop(75%, lighten(#AD2427, 7%)));\nbackground: -webkit-linear-gradient(right,#AD2427 0, lighten(#AD2427, 7%) 75%);\nbackground: -o-linear-gradient(right,#AD2427 0, lighten(#AD2427, 7%) 75%);\nbackground: linear-gradient(-90deg,#AD2427 0, lighten(#AD2427, 7%) 75%);\n\n}\n\n\n.sm-show {\n  display: none;\n}\n\n\n\n@media screen and (min-width: 50em) {\n\n  .sm-right {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2;\n    padding: 0.5rem 0 0.5rem 1rem !important;\n\n  }\n\n  .sm-left {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1;\n    padding: 0.5rem 1rem 0.5rem 0 !important;\n\n  }\n\n  .sm-show {\n    display: block;\n  }\n\n  .sm-even-pad-left {\n    padding: .5rem 0 .5rem .5rem !important;\n  }\n\n  .sm-even-pad-right {\n    padding: .5rem .5rem .5rem 0 !important;\n  }\n\n}\n\n.flex-center {\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.py4 {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n\n.p-lrg {\n  font-size: 18px;\n  line-height: 2;\n}\n\n\n.banner-height {\n\n  height: 220px\n}\n\n\n@media screen and (min-width: 50em) {\n\n  .banner-height {\n    height: 360px;\n  }\n  }\n\n\n.h-img-lrg {\n  height: 240px\n}\n\n\n@media screen and (min-width: 40em) {\n\n  .h-img-lrg {\n    height: 430px;\n  }\n  }\n\n\n@media screen and (min-width: 60em) {\n\n  .h-img-lrg {\n    //: 620px;\n  }\n  }\n\n\n.shadow-lrg {\n  -webkit-box-shadow: 0 1px 16px 6px rgba(64,64,64,.15);\n          box-shadow: 0 1px 16px 6px rgba(64,64,64,.15)\n}\n\n\n.flex-end {\n  -webkit-align-self: flex-end;\n      -ms-flex-item-align: end;\n          align-self: flex-end;\n}\n", ""]);

  // exports


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n.Link {\n\n}\n", ""]);

  // exports


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.heading {\n  font-weight: 300;\n}\n\n.heading--name {\n  font-weight: 600;\n}\n\n\n.color-darkGrey {\n  color: #333;\n}\n\n.color-lightGrey {\n  color: #ACACAC;\n}\n\n.color-mdGrey {\n  color: #5F5F5F;\n}\n\n.color-softGrey {\n  color: #798693;\n}\n\n.color-brandColor {\n  color: #AACFD0;\n}\n\n.caps {\n  text-transform: uppercase;\n  letter-spacing: 0.075em;\n}\n\n\n.f-w-md {\n  font-weight: 400;\n}\n\n\n.mt0 {\n  margin-top: 0;\n}\n\n.mt2 {\n  margin-top: 1rem;\n}\n\n.mt3 {\n  margin-top: 1.5rem;\n}\n\n.mb0 {\n  margin-bottom: 0;\n}\n.mb1 {\n  margin-bottom: 0.5rem;\n}\n\n.mb2 {\n  margin-bottom: 1rem;\n}\n\n.mb3 {\n  margin-bottom: 1.5rem;\n}\n\n.Navigation__wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  // background: white;\n}\n.Navigation {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  list-style: none;\n  padding: 0;\n\n}\n\n.Navigation-item {\n  padding: 0 1rem;\n  font-size: 0.875rem\n}\n\n.Navigation-item:last-child {\n  padding-right: 0;\n}\n\n@media screen and (min-width: 50em) {\n\n  .Navigation-item {\n    padding: 0.5em 1rem;\n  }\n\n  }\n\n.Navigation-link {\n  color: #999DA1;\n  text-decoration: none;\n  // text-transform: uppercase;\n  cursor: pointer;\n  font-size: 0.875rem;\n  padding: 0.5em 0\n}\n\n.Navigation-link:hover {\n  border-bottom: 2px solid #AACFD0;\n  color: #333;\n}\n\n\n.logo {\n  // background: #ACACAC;\n  // border: 1px solid #ACACAC;\n  // height: 48px;\n  // width: 48px;\n  height: 1.5rem;\n  width: 1.5rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-transition: 0.2s ease-in-out;\n  -o-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out\n}\n\n\n.logo__inner {\n  height: 1.5rem;\n  width: 1.5rem;\n  background: #AACFD0;\n  background-image: -webkit-gradient(\n     linear,\n     left bottom, left top,\n     from(#79A8A9), to(#AACFD0)\n   );\n  background-image: -webkit-linear-gradient(\n     bottom,\n     #79A8A9, #AACFD0\n   );\n  background-image: -o-linear-gradient(\n     bottom,\n     #79A8A9, #AACFD0\n   );\n  background-image: linear-gradient(\n     to top,\n     #79A8A9, #AACFD0\n   );\n  border-radius: 50%;\n}\n\n\n.logo:hover {\n  -webkit-transform: scale(1.2);\n      -ms-transform: scale(1.2);\n       -o-transform: scale(1.2);\n          transform: scale(1.2);\n}\n", ""]);

  // exports


/***/ },
/* 25 */
/***/ function(module, exports) {

  module.exports = require("autobind-decorator");

/***/ },
/* 26 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 27 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 28 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 29 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ }
/******/ ]);