module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_app__ = __webpack_require__("next/app");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_redux_wrapper__ = __webpack_require__("next-redux-wrapper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_connected_next_router__ = __webpack_require__("connected-next-router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_connected_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_connected_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_store_configure_store__ = __webpack_require__("./src/store/configure-store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_actions__ = __webpack_require__("./src/actions/index.js");


var _jsxFileName = "/home/ubuntu/workspace/MyBitDapp-FrontEnd/pages/_app.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








class HomePage extends __WEBPACK_IMPORTED_MODULE_1_next_app___default.a {
  render() {
    const _props = this.props,
          Component = _props.Component,
          pageProps = _props.pageProps,
          store = _props.store;
    store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__src_actions__["fetchAssets"])());
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_app__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"], {
      store: store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_connected_next_router__["ConnectedRouter"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_3_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_5__src_store_configure_store__["a" /* configureStore */])(HomePage));

/***/ }),

/***/ "./src/actions/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_web3__ = __webpack_require__("./src/util/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_contracts_API__ = __webpack_require__("./src/constants/contracts/API.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_contracts_AssetCreation__ = __webpack_require__("./src/constants/contracts/AssetCreation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_contracts_MyBitToken__ = __webpack_require__("./src/constants/contracts/MyBitToken.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__("./src/constants/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_helpers__ = __webpack_require__("./src/util/helpers.js");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-underscore-dangle */
// TODO: The previously suppressed error can actually be avoided with better syntax






const web3 = Object(__WEBPACK_IMPORTED_MODULE_0__util_web3__["a" /* default */])();

const fetch = __webpack_require__("isomorphic-fetch"); // Action constants


const CLEAR_ERRORS = 'CLEAR_ERRORS';
/* harmony export (immutable) */ __webpack_exports__["CLEAR_ERRORS"] = CLEAR_ERRORS;

const FETCH_ASSETS_SUCCESS = 'FETCH_ASSETS_SUCCESS';
/* harmony export (immutable) */ __webpack_exports__["FETCH_ASSETS_SUCCESS"] = FETCH_ASSETS_SUCCESS;

const FETCH_ASSETS_FAILURE = 'FETCH_ASSETS_FAILURE';
/* harmony export (immutable) */ __webpack_exports__["FETCH_ASSETS_FAILURE"] = FETCH_ASSETS_FAILURE;

const FETCH_ASSETS = 'FETCH_ASSETS';
/* harmony export (immutable) */ __webpack_exports__["FETCH_ASSETS"] = FETCH_ASSETS;

const CHANGE_TRANSACTION_HISTORY_FILTERS = 'CHANGE_TRANSACTION_HISTORY_FILTERS';
/* harmony export (immutable) */ __webpack_exports__["CHANGE_TRANSACTION_HISTORY_FILTERS"] = CHANGE_TRANSACTION_HISTORY_FILTERS;

const FETCH_MYBIT_PRICE_USD = 'FETCH_MYBIT_PRICE_USD';
/* harmony export (immutable) */ __webpack_exports__["FETCH_MYBIT_PRICE_USD"] = FETCH_MYBIT_PRICE_USD;

const FETCH_MYBIT_PRICE_USD_SUCCESS = 'FETCH_MYBIT_PRICE_USD_SUCCESS';
/* harmony export (immutable) */ __webpack_exports__["FETCH_MYBIT_PRICE_USD_SUCCESS"] = FETCH_MYBIT_PRICE_USD_SUCCESS;

const FETCH_MYBIT_PRICE_USD_FAILURE = 'FETCH_MYBIT_PRICE_USD_FAILURE';
/* harmony export (immutable) */ __webpack_exports__["FETCH_MYBIT_PRICE_USD_FAILURE"] = FETCH_MYBIT_PRICE_USD_FAILURE;

const FETCH_ETHEREUM_PRICE_USD = 'FETCH_ETHEREUM_PRICE_USD';
/* harmony export (immutable) */ __webpack_exports__["FETCH_ETHEREUM_PRICE_USD"] = FETCH_ETHEREUM_PRICE_USD;

const FETCH_ETHEREUM_PRICE_USD_SUCCESS = 'FETCH_ETHEREUM_PRICE_USD_SUCCESS';
/* harmony export (immutable) */ __webpack_exports__["FETCH_ETHEREUM_PRICE_USD_SUCCESS"] = FETCH_ETHEREUM_PRICE_USD_SUCCESS;

const FETCH_ETHEREUM_PRICE_USD_FAILURE = 'FETCH_ETHEREUM_PRICE_USD_FAILURE';
/* harmony export (immutable) */ __webpack_exports__["FETCH_ETHEREUM_PRICE_USD_FAILURE"] = FETCH_ETHEREUM_PRICE_USD_FAILURE;

const LOAD_METAMASK_USER_DETAILS = 'LOAD_METAMASK_USER_DETAILS';
/* harmony export (immutable) */ __webpack_exports__["LOAD_METAMASK_USER_DETAILS"] = LOAD_METAMASK_USER_DETAILS;

const LOAD_METAMASK_USER_DETAILS_SUCCESS = 'LOAD_METAMASK_USER_DETAILS_SUCCESS';
/* harmony export (immutable) */ __webpack_exports__["LOAD_METAMASK_USER_DETAILS_SUCCESS"] = LOAD_METAMASK_USER_DETAILS_SUCCESS;

const LOAD_METAMASK_USER_DETAILS_FAILURE = 'LOAD_METAMASK_USER_DETAILS_FAILURE';
/* harmony export (immutable) */ __webpack_exports__["LOAD_METAMASK_USER_DETAILS_FAILURE"] = LOAD_METAMASK_USER_DETAILS_FAILURE;

const FETCH_TRANSACTION_HISTORY = 'FETCH_TRANSACTION_HISTORY';
/* harmony export (immutable) */ __webpack_exports__["FETCH_TRANSACTION_HISTORY"] = FETCH_TRANSACTION_HISTORY;

const FETCH_TRANSACTION_HISTORY_SUCCESS = 'FETCH_TRANSACTION_HISTORY_SUCCESS';
/* harmony export (immutable) */ __webpack_exports__["FETCH_TRANSACTION_HISTORY_SUCCESS"] = FETCH_TRANSACTION_HISTORY_SUCCESS;

const FETCH_TRANSACTION_HISTORY_FAILURE = 'FETCH_TRANSACTION_HISTORY_FAILURE';
/* harmony export (immutable) */ __webpack_exports__["FETCH_TRANSACTION_HISTORY_FAILURE"] = FETCH_TRANSACTION_HISTORY_FAILURE;
 // Synchronous action creators

const fetchAssetsSuccess = assets => ({
  type: FETCH_ASSETS_SUCCESS,
  payload: {
    assets
  }
});
/* harmony export (immutable) */ __webpack_exports__["fetchAssetsSuccess"] = fetchAssetsSuccess;

const fetchAssetsFailure = error => ({
  type: FETCH_ASSETS_FAILURE,
  payload: {
    error
  }
});
/* harmony export (immutable) */ __webpack_exports__["fetchAssetsFailure"] = fetchAssetsFailure;

const fetchMyBitPriceUSDSuccess = price => ({
  type: FETCH_MYBIT_PRICE_USD_SUCCESS,
  payload: {
    price
  }
});
/* harmony export (immutable) */ __webpack_exports__["fetchMyBitPriceUSDSuccess"] = fetchMyBitPriceUSDSuccess;

const fetchMyBitPriceUSDFailure = error => ({
  type: FETCH_MYBIT_PRICE_USD_FAILURE,
  payload: {
    error
  }
});
/* harmony export (immutable) */ __webpack_exports__["fetchMyBitPriceUSDFailure"] = fetchMyBitPriceUSDFailure;

const fetchEthereumPriceUSDSuccess = price => ({
  type: FETCH_ETHEREUM_PRICE_USD_SUCCESS,
  payload: {
    price
  }
});
/* harmony export (immutable) */ __webpack_exports__["fetchEthereumPriceUSDSuccess"] = fetchEthereumPriceUSDSuccess;

const fetchEthereumPriceUSDFailure = error => ({
  type: FETCH_ETHEREUM_PRICE_USD_FAILURE,
  payload: {
    error
  }
});
/* harmony export (immutable) */ __webpack_exports__["fetchEthereumPriceUSDFailure"] = fetchEthereumPriceUSDFailure;

const clearErrors = () => ({
  type: CLEAR_ERRORS
});
/* harmony export (immutable) */ __webpack_exports__["clearErrors"] = clearErrors;

const setTransactionHistoryFilters = (itemsPerPage, currentPage, sortBy, sortDir) => ({
  type: CHANGE_TRANSACTION_HISTORY_FILTERS,
  payload: {
    itemsPerPage,
    currentPage,
    sortBy,
    sortDir
  }
});
/* harmony export (immutable) */ __webpack_exports__["setTransactionHistoryFilters"] = setTransactionHistoryFilters;

const loadMetamaskUserDetailsSuccess = details => ({
  type: LOAD_METAMASK_USER_DETAILS_SUCCESS,
  payload: {
    details
  }
});
/* harmony export (immutable) */ __webpack_exports__["loadMetamaskUserDetailsSuccess"] = loadMetamaskUserDetailsSuccess;

const loadMetamaskUserDetailsFailure = error => ({
  type: LOAD_METAMASK_USER_DETAILS_FAILURE,
  payload: {
    error
  }
});
/* harmony export (immutable) */ __webpack_exports__["loadMetamaskUserDetailsFailure"] = loadMetamaskUserDetailsFailure;

const fetchTransactionHistorySuccess = transactionHistory => ({
  type: FETCH_TRANSACTION_HISTORY_SUCCESS,
  payload: {
    transactionHistory
  }
});
/* harmony export (immutable) */ __webpack_exports__["fetchTransactionHistorySuccess"] = fetchTransactionHistorySuccess;

const fetchTransactionHistoryFailure = error => ({
  type: FETCH_TRANSACTION_HISTORY_FAILURE,
  payload: {
    error
  }
});
/* harmony export (immutable) */ __webpack_exports__["fetchTransactionHistoryFailure"] = fetchTransactionHistoryFailure;
 // Asynchronous action creators

const fetchTransactionHistory = () => async (dispatch, getState) => {
  dispatch({
    type: FETCH_TRANSACTION_HISTORY
  });

  try {
    const userAddress = getState().user.userName;
    /*
    *  results from etherscan come in lower case
    *  its cheaper to create a var to hold the address in lower case,
    *  than it is to keep converting it for every iteration
    */

    const userAddressLowerCase = userAddress.toLowerCase();
    const endpoint = Object(__WEBPACK_IMPORTED_MODULE_4__constants__["c" /* ETHERSCAN_TX_BY_ADDR_ENDPOINT */])(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* ETHERSCAN_API_KEY */], userAddress);
    const result = await fetch(endpoint);
    const jsonResult = await result.json();

    if (jsonResult.status === '0') {
      throw new Error(jsonResult.result);
    }

    const ethTransactionHistory = jsonResult.result.filter(txResult => txResult.to === userAddressLowerCase || txResult.from === userAddressLowerCase).map(txResult => {
      const multiplier = txResult.from === userAddressLowerCase ? -1 : 1;
      let status = 'Complete';

      if (txResult.isError === "1") {
        status = 'Fail';
      } else if (txResult.confirmations === 0) {
        status = 'Pending';
      }

      return {
        date: txResult.timeStamp * 1000,
        amount: web3.utils.fromWei(txResult.value, 'ether') * multiplier,
        status: status,
        type: 'ETH',
        txId: txResult.hash
      };
    }); // Pull MYB transactions from event log

    const myBitTokenContract = new web3.eth.Contract(__WEBPACK_IMPORTED_MODULE_3__constants_contracts_MyBitToken__["a" /* ABI */], __WEBPACK_IMPORTED_MODULE_3__constants_contracts_MyBitToken__["b" /* ADDRESS */]);
    const logTransactions = await myBitTokenContract.getPastEvents('Transfer', {
      fromBlock: 0,
      toBlock: 'latest'
    });
    const mybTransactionHistory = await Promise.all(logTransactions.filter(txResult => txResult.returnValues.to === userAddress || txResult.returnValues.from === userAddress).map(async txResult => {
      const blockInfo = await web3.eth.getBlock(txResult.blockNumber);
      const multiplier = txResult.returnValues.from === userAddress ? -1 : 1;
      return {
        amount: txResult.returnValues.value / 100000000 * multiplier,
        type: 'MYB',
        txId: txResult.transactionHash,
        status: 'Complete',
        date: blockInfo.timestamp * 1000
      };
    }));
    dispatch(fetchTransactionHistorySuccess(ethTransactionHistory.concat(mybTransactionHistory)));
  } catch (error) {
    dispatch(fetchTransactionHistoryFailure(error));
  }
};
/* harmony export (immutable) */ __webpack_exports__["fetchTransactionHistory"] = fetchTransactionHistory;

const loadMetamaskUserDetails = cb => async dispatch => {
  dispatch({
    type: LOAD_METAMASK_USER_DETAILS
  });

  try {
    const accounts = await web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(accounts[0]);
    const myBitTokenContract = new web3.eth.Contract(__WEBPACK_IMPORTED_MODULE_3__constants_contracts_MyBitToken__["a" /* ABI */], __WEBPACK_IMPORTED_MODULE_3__constants_contracts_MyBitToken__["b" /* ADDRESS */]);
    const myBitBalance = (await myBitTokenContract.methods.balanceOf(accounts[0]).call()) / 100000000;
    const details = {
      userName: accounts[0],
      ethBalance: web3.utils.fromWei(balance, 'ether'),
      myBitBalance
    };
    cb(true);
    dispatch(loadMetamaskUserDetailsSuccess(details));
  } catch (error) {
    cb(false);
    dispatch(loadMetamaskUserDetailsFailure(error));
  }
};
/* harmony export (immutable) */ __webpack_exports__["loadMetamaskUserDetails"] = loadMetamaskUserDetails;

const fetchPriceFromCoinmarketcap = ticker => async dispatch => {
  switch (ticker) {
    case __WEBPACK_IMPORTED_MODULE_4__constants__["g" /* MYBIT_TICKER_COINMARKETCAP */]:
      dispatch({
        type: FETCH_MYBIT_PRICE_USD
      });
      break;

    case __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* ETHEREUM_TICKER_COINMARKETCAP */]:
      dispatch({
        type: FETCH_ETHEREUM_PRICE_USD
      });
      break;

    default:
      throw new Error('Invalid ticker provided to fetchPriceFromCoinmarketcap');
  }

  try {
    const response = await fetch(`https://api.coinmarketcap.com/v2/ticker/${ticker}/`);
    const jsonResponse = await response.json();
    const price = jsonResponse.data.quotes.USD.price;

    switch (ticker) {
      case __WEBPACK_IMPORTED_MODULE_4__constants__["g" /* MYBIT_TICKER_COINMARKETCAP */]:
        dispatch({
          type: FETCH_MYBIT_PRICE_USD_SUCCESS,
          payload: {
            price: Math.round(price * 100) / 100
          }
        });
        break;

      case __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* ETHEREUM_TICKER_COINMARKETCAP */]:
        dispatch({
          type: FETCH_ETHEREUM_PRICE_USD_SUCCESS,
          payload: {
            price: Math.round(price * 100) / 100
          }
        });
        break;

      default:
        throw new Error('Invalid ticker provided to fetchPriceFromCoinmarketcap');
    }
  } catch (error) {
    switch (ticker) {
      case __WEBPACK_IMPORTED_MODULE_4__constants__["g" /* MYBIT_TICKER_COINMARKETCAP */]:
        dispatch({
          type: FETCH_MYBIT_PRICE_USD_FAILURE,
          payload: {
            error
          }
        });
        break;

      case __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* ETHEREUM_TICKER_COINMARKETCAP */]:
        dispatch({
          type: FETCH_ETHEREUM_PRICE_USD_FAILURE,
          payload: {
            error
          }
        });
        break;

      default:
        throw new Error('Invalid ticker provided to fetchPriceFromCoinmarketcap');
    }
  }
};
/* harmony export (immutable) */ __webpack_exports__["fetchPriceFromCoinmarketcap"] = fetchPriceFromCoinmarketcap;

const fetchAssets = () => async (dispatch, getState) => {
  dispatch(clearErrors());
  dispatch({
    type: FETCH_ASSETS
  });
  dispatch(fetchPriceFromCoinmarketcap(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* ETHEREUM_TICKER_COINMARKETCAP */]));

  try {
    const apiContract = new web3.eth.Contract(__WEBPACK_IMPORTED_MODULE_1__constants_contracts_API__["a" /* ABI */], __WEBPACK_IMPORTED_MODULE_1__constants_contracts_API__["b" /* ADDRESS */]);
    const assetCreationContract = new web3.eth.Contract(__WEBPACK_IMPORTED_MODULE_2__constants_contracts_AssetCreation__["a" /* ABI */], __WEBPACK_IMPORTED_MODULE_2__constants_contracts_AssetCreation__["b" /* ADDRESS */]);
    const logAssetInfoEvents = await assetCreationContract.getPastEvents('LogAssetInfo', {
      fromBlock: 0,
      toBlock: 'latest'
    });
    const logAssetFundingStartedEvents = await assetCreationContract.getPastEvents('LogAssetFundingStarted', {
      fromBlock: 0,
      toBlock: 'latest'
    });
    const logAssetInfo = logAssetInfoEvents.map(({
      returnValues
    }) => returnValues).map(object => ({
      assetID: object._assetID,
      installerID: object._installerID,
      amountToBeRaised: object._amountToBeRaised
    }));
    const logAssetFundingStarted = logAssetFundingStartedEvents.map(({
      returnValues
    }) => returnValues).map(object => ({
      assetID: object._assetID,
      assetType: object._assetType,
      creator: object._creator
    }));
    const combinedLogs = logAssetInfo // .concat(logAssetFundingSuccess)
    .concat(logAssetFundingStarted).sort((a, b) => {
      if (a.assetID < b.assetID) {
        return -1;
      }

      if (a.assetID > b.assetID) {
        return 1;
      }

      return 0;
    });
    const assets = Object(__WEBPACK_IMPORTED_MODULE_5__util_helpers__["d" /* mergeAllLogsByAssetId */])(combinedLogs);
    const amountsRaised = await Promise.all(assets.map(async asset => apiContract.methods.amountRaised(asset.assetID).call()));
    const fundingDeadlines = await Promise.all(assets.map(async asset => apiContract.methods.fundingDeadline(asset.assetID).call()));
    const realAddress = web3.utils.toChecksumAddress(getState().user.userName);
    const ownershipUnits = await Promise.all(assets.map(async asset => apiContract.methods.ownershipUnits(realAddress, asset.assetID).call()));
    const assetIncomes = await Promise.all(assets.map(async asset => apiContract.methods.totalReceived(asset.assetID).call()));
    const assetsPlusMoreDetails = assets.map((asset, index) => _objectSpread({}, asset, {
      amountRaisedInUSD: String(Number(web3.utils.fromWei(amountsRaised[index], 'ether')) * getState().misc.currentEthInUsd),
      fundingDeadline: fundingDeadlines[index],
      ownershipUnits: ownershipUnits[index],
      assetIncome: assetIncomes[index]
    }));
    const assetsWithCategories = assetsPlusMoreDetails.map(asset => {
      if (asset.assetType) {
        return _objectSpread({}, asset, {
          category: Object(__WEBPACK_IMPORTED_MODULE_5__util_helpers__["a" /* getCategoryFromAssetTypeHash */])(web3, asset.assetType)
        });
      }

      return _objectSpread({}, asset);
    });
    dispatch(fetchAssetsSuccess(assetsWithCategories));
  } catch (error) {
    dispatch(fetchAssetsFailure(error));
  }
};
/* harmony export (immutable) */ __webpack_exports__["fetchAssets"] = fetchAssets;


/***/ }),

/***/ "./src/constants/contracts/API.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


const ADDRESS = '0x7c3833e4f308978984D40f7539A36494520D3531';
/* harmony export (immutable) */ __webpack_exports__["b"] = ADDRESS;

const ABI = [{
  constant: true,
  inputs: [{
    name: '_owner',
    type: 'address'
  }, {
    name: '_assetID',
    type: 'bytes32'
  }],
  name: 'ownershipUnits',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_assetID',
    type: 'bytes32'
  }],
  name: 'amountRaised',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_funder',
    type: 'address'
  }, {
    name: '_assetID',
    type: 'bytes32'
  }],
  name: 'totalPaidToFunder',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_name',
    type: 'string'
  }],
  name: 'contractAddress',
  outputs: [{
    name: '',
    type: 'address'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_operator',
    type: 'address'
  }],
  name: 'operatorAmountEscrowed',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_functionAuthorizationHash',
    type: 'bytes32'
  }],
  name: 'isFunctionAuthorized',
  outputs: [{
    name: '',
    type: 'bool'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_assetID',
    type: 'bytes32'
  }],
  name: 'operatorPercentage',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'mybUSDPrice',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_user',
    type: 'address'
  }],
  name: 'isOwner',
  outputs: [{
    name: '',
    type: 'bool'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_assetID',
    type: 'bytes32'
  }],
  name: 'assetOperator',
  outputs: [{
    name: '',
    type: 'address'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'ethUSDSecondsRemaining',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_assetID',
    type: 'bytes32'
  }],
  name: 'lockedForAsset',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_contractAddress',
    type: 'address'
  }],
  name: 'isPaused',
  outputs: [{
    name: '',
    type: 'bool'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_assetID',
    type: 'bytes32'
  }],
  name: 'totalPaidToFunders',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_operator',
    type: 'address'
  }],
  name: 'operatorAmountDeposited',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_contractAddress',
    type: 'address'
  }, {
    name: '_signer',
    type: 'address'
  }, {
    name: '_functionName',
    type: 'string'
  }, {
    name: '_agreedParameter',
    type: 'bytes32'
  }],
  name: 'getFunctionAuthorized',
  outputs: [{
    name: '',
    type: 'bytes32'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'ethUSDPrice',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'database',
  outputs: [{
    name: '',
    type: 'address'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'mybUSDSecondsRemaining',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'MyBitFoundation',
  outputs: [{
    name: '',
    type: 'address'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_assetID',
    type: 'bytes32'
  }],
  name: 'fundingDeadline',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_user',
    type: 'address'
  }],
  name: 'userAccess',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_assetID',
    type: 'bytes32'
  }],
  name: 'totalReceived',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'installerPercentage',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'InstallerEscrow',
  outputs: [{
    name: '',
    type: 'address'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'ethUSDPriceExpiration',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_assetID',
    type: 'bytes32'
  }],
  name: 'fundingStage',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'deployFinished',
  outputs: [{
    name: '',
    type: 'bool'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'myBitFoundationPercentage',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'mybUSDPriceExpiration',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_assetID',
    type: 'bytes32'
  }],
  name: 'amountToBeRaised',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    name: '_database',
    type: 'address'
  }],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'constructor'
}, {
  payable: false,
  stateMutability: 'nonpayable',
  type: 'fallback'
}];
/* harmony export (immutable) */ __webpack_exports__["a"] = ABI;


/***/ }),

/***/ "./src/constants/contracts/AssetCreation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


const ADDRESS = '0x5E8E4b6EBeC4aF9CbB69Befab8Aa483C234D6f7d';
/* harmony export (immutable) */ __webpack_exports__["b"] = ADDRESS;

const ABI = [{
  constant: false,
  inputs: [{
    name: '_myBitFoundationPercentage',
    type: 'uint256'
  }, {
    name: '_installerPercentage',
    type: 'uint256'
  }, {
    name: '_functionSigner',
    type: 'address'
  }],
  name: 'changeFundingPercentages',
  outputs: [{
    name: '',
    type: 'bool'
  }],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: '_functionInitiator',
    type: 'address'
  }, {
    name: '_holdingAddress',
    type: 'address'
  }],
  name: 'destroy',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'database',
  outputs: [{
    name: '',
    type: 'address'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: '_assetID',
    type: 'bytes32'
  }, {
    name: '_amountToBeRaised',
    type: 'uint256'
  }, {
    name: '_operatorPercentage',
    type: 'uint256'
  }, {
    name: '_amountToEscrow',
    type: 'uint256'
  }, {
    name: '_installerID',
    type: 'bytes32'
  }, {
    name: '_assetType',
    type: 'bytes32'
  }],
  name: 'newAsset',
  outputs: [{
    name: '',
    type: 'bool'
  }],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: '_newTimeGivenForFunding',
    type: 'uint256'
  }],
  name: 'changeFundingTime',
  outputs: [{
    name: '',
    type: 'bool'
  }],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'fundingTime',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: '_assetID',
    type: 'bytes32'
  }, {
    name: '_functionSigner',
    type: 'address'
  }],
  name: 'removeAsset',
  outputs: [{
    name: '',
    type: 'bool'
  }],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    name: '_database',
    type: 'address'
  }],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'constructor'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: '_creator',
    type: 'address'
  }, {
    indexed: true,
    name: '_assetID',
    type: 'bytes32'
  }, {
    indexed: true,
    name: '_assetType',
    type: 'bytes32'
  }],
  name: 'LogAssetFundingStarted',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: '_assetID',
    type: 'bytes32'
  }, {
    indexed: true,
    name: '_installerID',
    type: 'bytes32'
  }, {
    indexed: true,
    name: '_amountToBeRaised',
    type: 'uint256'
  }],
  name: 'LogAssetInfo',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: '_from',
    type: 'address'
  }, {
    indexed: true,
    name: '_assetID',
    type: 'bytes32'
  }, {
    indexed: true,
    name: '_amountOf',
    type: 'uint256'
  }],
  name: 'LogLockAssetEscrow',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: '_remover',
    type: 'address'
  }, {
    indexed: true,
    name: '_assetID',
    type: 'bytes32'
  }, {
    indexed: true,
    name: '_timestamp',
    type: 'uint256'
  }],
  name: 'LogAssetRemoved',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    name: '_sender',
    type: 'address'
  }, {
    indexed: false,
    name: '_newTimeForFunding',
    type: 'uint256'
  }, {
    indexed: false,
    name: '_blockTimestamp',
    type: 'uint256'
  }],
  name: 'LogFundingTimeChanged',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    name: '_myBitFoundationPercentage',
    type: 'uint256'
  }, {
    indexed: false,
    name: '_installerPercentage',
    type: 'uint256'
  }],
  name: 'LogFundingPercentageChanged',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: '_locationSent',
    type: 'address'
  }, {
    indexed: true,
    name: '_amountSent',
    type: 'uint256'
  }, {
    indexed: true,
    name: '_caller',
    type: 'address'
  }],
  name: 'LogDestruction',
  type: 'event'
}];
/* harmony export (immutable) */ __webpack_exports__["a"] = ABI;


/***/ }),

/***/ "./src/constants/contracts/MyBitToken.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


const ADDRESS = '0x40FfF37c1E5F48CeE320BeD447329A93F6d015C0';
/* harmony export (immutable) */ __webpack_exports__["b"] = ADDRESS;

const ABI = [{
  constant: true,
  inputs: [],
  name: 'name',
  outputs: [{
    name: '',
    type: 'string'
  }],
  payable: false,
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: '_spender',
    type: 'address'
  }, {
    name: '_value',
    type: 'uint256'
  }],
  name: 'approve',
  outputs: [{
    name: 'success',
    type: 'bool'
  }],
  payable: false,
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'totalSupply',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: '_from',
    type: 'address'
  }, {
    name: '_to',
    type: 'address'
  }, {
    name: '_value',
    type: 'uint256'
  }],
  name: 'transferFrom',
  outputs: [{
    name: 'success',
    type: 'bool'
  }],
  payable: false,
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'decimals',
  outputs: [{
    name: '',
    type: 'uint8'
  }],
  payable: false,
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'standard',
  outputs: [{
    name: '',
    type: 'string'
  }],
  payable: false,
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '',
    type: 'address'
  }],
  name: 'balanceOf',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: 'target',
    type: 'address'
  }, {
    name: 'mintedAmount',
    type: 'uint256'
  }],
  name: 'mintToken',
  outputs: [],
  payable: false,
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'owner',
  outputs: [{
    name: '',
    type: 'address'
  }],
  payable: false,
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'symbol',
  outputs: [{
    name: '',
    type: 'string'
  }],
  payable: false,
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: 'newOwner',
    type: 'address'
  }],
  name: 'changeOwner',
  outputs: [],
  payable: false,
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: '_to',
    type: 'address'
  }, {
    name: '_value',
    type: 'uint256'
  }],
  name: 'transfer',
  outputs: [],
  payable: false,
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: '_spender',
    type: 'address'
  }, {
    name: '_value',
    type: 'uint256'
  }, {
    name: '_extraData',
    type: 'bytes'
  }],
  name: 'approveAndCall',
  outputs: [{
    name: 'success',
    type: 'bool'
  }],
  payable: false,
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '',
    type: 'address'
  }, {
    name: '',
    type: 'address'
  }],
  name: 'allowance',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  type: 'function'
}, {
  inputs: [{
    name: 'initialSupply',
    type: 'uint256'
  }, {
    name: 'tokenName',
    type: 'string'
  }, {
    name: 'decimalUnits',
    type: 'uint8'
  }, {
    name: 'tokenSymbol',
    type: 'string'
  }],
  type: 'constructor'
}, {
  payable: false,
  type: 'fallback'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: 'from',
    type: 'address'
  }, {
    indexed: true,
    name: 'to',
    type: 'address'
  }, {
    indexed: false,
    name: 'value',
    type: 'uint256'
  }],
  name: 'Transfer',
  type: 'event'
}];
/* harmony export (immutable) */ __webpack_exports__["a"] = ABI;


/***/ }),

/***/ "./src/constants/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* eslint-disable no-console */
const ARTIFICIAL_DELAY_IN_MS = 3000;
/* unused harmony export ARTIFICIAL_DELAY_IN_MS */

const USD_MYB_SYMBOL = 'USD/MYB';
/* harmony export (immutable) */ __webpack_exports__["h"] = USD_MYB_SYMBOL;

const noop = () => {};
/* unused harmony export noop */

const debug =  true ? console.log : noop;
/* harmony export (immutable) */ __webpack_exports__["i"] = debug;

const MYBIT_TICKER_COINMARKETCAP = 1902;
/* harmony export (immutable) */ __webpack_exports__["g"] = MYBIT_TICKER_COINMARKETCAP;

const ETHEREUM_TICKER_COINMARKETCAP = 1027;
/* harmony export (immutable) */ __webpack_exports__["a"] = ETHEREUM_TICKER_COINMARKETCAP;
 // TODO: Needs to be implemented server-side, API_KEY needs to be created

const ETHERSCAN_API_KEY = '';
/* harmony export (immutable) */ __webpack_exports__["b"] = ETHERSCAN_API_KEY;

const ETHERSCAN_TX_BY_ADDR_ENDPOINT = (apiKey, address) => `http://api-ropsten.etherscan.io/api?module=account&action=txlist&address=${address}&sort=asc&apikey=${apiKey}`;
/* harmony export (immutable) */ __webpack_exports__["c"] = ETHERSCAN_TX_BY_ADDR_ENDPOINT;

const METAMASK_FIREFOX = 'https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/';
/* harmony export (immutable) */ __webpack_exports__["e"] = METAMASK_FIREFOX;

const METAMASK_CHROME = 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn';
/* harmony export (immutable) */ __webpack_exports__["d"] = METAMASK_CHROME;

const METAMASK_OPERA = 'http://addons.opera.com/extensions/details/metamask/';
/* harmony export (immutable) */ __webpack_exports__["f"] = METAMASK_OPERA;


/***/ }),

/***/ "./src/reducers/assets.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("./src/actions/index.js");



const initialState = [];

const assets = (state = initialState, action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions__["FETCH_ASSETS_SUCCESS"]:
      return [...action.payload.assets];

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (assets);

/***/ }),

/***/ "./src/reducers/errors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("./src/actions/index.js");



const initialState = [];

const errors = (state = initialState, action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions__["FETCH_ASSETS_FAILURE"]:
      return [...state, action.payload.error];

    case __WEBPACK_IMPORTED_MODULE_0__actions__["CLEAR_ERRORS"]:
      return initialState;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (errors);

/***/ }),

/***/ "./src/reducers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_connected_next_router__ = __webpack_require__("connected-next-router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_connected_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_connected_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets__ = __webpack_require__("./src/reducers/assets.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__errors__ = __webpack_require__("./src/reducers/errors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loading__ = __webpack_require__("./src/reducers/loading.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__misc__ = __webpack_require__("./src/reducers/misc.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user__ = __webpack_require__("./src/reducers/user.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__transactions__ = __webpack_require__("./src/reducers/transactions.js");







 // TODO: Needs to be renamed prices



const rootReducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  assets: __WEBPACK_IMPORTED_MODULE_2__assets__["a" /* default */],
  errors: __WEBPACK_IMPORTED_MODULE_3__errors__["a" /* default */],
  loading: __WEBPACK_IMPORTED_MODULE_4__loading__["a" /* default */],
  misc: __WEBPACK_IMPORTED_MODULE_5__misc__["a" /* default */],
  router: __WEBPACK_IMPORTED_MODULE_1_connected_next_router__["routerReducer"],
  transactions: __WEBPACK_IMPORTED_MODULE_7__transactions__["a" /* default */],
  user: __WEBPACK_IMPORTED_MODULE_6__user__["a" /* default */]
});
/* harmony default export */ __webpack_exports__["a"] = (rootReducer);

/***/ }),

/***/ "./src/reducers/loading.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("./src/actions/index.js");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  assets: true,
  prices: true,
  transactionHistory: true,
  user: true
};

const loading = (state = initialState, action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions__["FETCH_ETHEREUM_PRICE_USD"]:
    case __WEBPACK_IMPORTED_MODULE_0__actions__["FETCH_MYBIT_PRICE_USD"]:
      return _objectSpread({}, state, {
        prices: true
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions__["FETCH_ETHEREUM_PRICE_USD_SUCCESS"]:
    case __WEBPACK_IMPORTED_MODULE_0__actions__["FETCH_ETHEREUM_PRICE_USD_FAILURE"]:
    case __WEBPACK_IMPORTED_MODULE_0__actions__["FETCH_MYBIT_PRICE_USD_SUCCESS"]:
    case __WEBPACK_IMPORTED_MODULE_0__actions__["FETCH_MYBIT_PRICE_USD_FAILURE"]:
      return _objectSpread({}, state, {
        prices: false
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions__["FETCH_ASSETS"]:
      return _objectSpread({}, state, {
        assets: true
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions__["FETCH_ASSETS_SUCCESS"]:
    case __WEBPACK_IMPORTED_MODULE_0__actions__["FETCH_ASSETS_FAILURE"]:
      return _objectSpread({}, state, {
        assets: false
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions__["LOAD_METAMASK_USER_DETAILS"]:
      return _objectSpread({}, state, {
        user: true
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions__["LOAD_METAMASK_USER_DETAILS_SUCCESS"]:
    case __WEBPACK_IMPORTED_MODULE_0__actions__["LOAD_METAMASK_USER_DETAILS_FAILURE"]:
      return _objectSpread({}, state, {
        user: false
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions__["FETCH_TRANSACTION_HISTORY"]:
      return _objectSpread({}, state, {
        transactionHistory: true
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions__["FETCH_TRANSACTION_HISTORY_SUCCESS"]:
    case __WEBPACK_IMPORTED_MODULE_0__actions__["FETCH_TRANSACTION_HISTORY_FAILURE"]:
      return _objectSpread({}, state, {
        transactionHistory: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (loading);

/***/ }),

/***/ "./src/reducers/misc.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("./src/actions/index.js");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {};

const misc = (state = initialState, action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions__["FETCH_MYBIT_PRICE_USD_SUCCESS"]:
      return _objectSpread({}, state, {
        currentMybitInUsd: action.payload.price
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions__["FETCH_ETHEREUM_PRICE_USD_SUCCESS"]:
      return _objectSpread({}, state, {
        currentEthInUsd: action.payload.price
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (misc);

/***/ }),

/***/ "./src/reducers/transactions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("./src/actions/index.js");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable max-len */
// TODO: Remove above when txHistory shape comment removed below

const initialState = {
  history: [],
  currentPage: 0,
  itemsPerPage: 10,
  sortBy: 'date',
  sortDir: 'ASC'
};

const transactions = (state = initialState, action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions__["CHANGE_TRANSACTION_HISTORY_FILTERS"]:
      return _objectSpread({}, state, action.payload);

    case __WEBPACK_IMPORTED_MODULE_0__actions__["FETCH_TRANSACTION_HISTORY_SUCCESS"]:
      return _objectSpread({}, state, {
        history: [...action.payload.transactionHistory]
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (transactions);
/*
[{
  date: 'January 01, 2018, 19:51', amount: 1.5, status: 'Complete', type: 'ETH', txId: '0x5eed7527dee715e9c068cda49fee0c1e147845ebad84514ede2dd89919b114b2',
}, {
  date: 'March 02, 2018, 19:51', amount: 3, status: 'Complete', type: 'ETH', txId: '0x5eed7527dee715e9c068cda49fee0c1e147845ebad84514ede2dd89919b114b2',
}, {
  date: 'March 03, 2018, 19:51', amount: 47, status: 'Complete', type: 'ETH', txId: '0x5eed7527dee715e9c068cda49fee0c1e147845ebad84514ede2dd89919b114b2',
}, {
  date: 'March 05, 2018, 19:51', amount: 0.7, status: 'Complete', type: 'MYB', txId: '0x5eed7527dee715e9c068cda49fee0c1e147845ebad84514ede2dd89919b114b2',
}, {
  date: 'March 01, 2018, 19:51', amount: -37, status: 'Complete', type: 'MYB', txId: '0x5eed7527dee715e9c068cda49fee0c1e147845ebad84514ede2dd89919b114b2',
}, {
  date: 'March 05, 2018, 19:51', amount: 1.5, status: 'Complete', type: 'ETH', txId: '0x5eed7527dee715e9c068cda49fee0c1e147845ebad84514ede2dd89919b114b2',
}, {
  date: 'March 04, 2018, 19:51', amount: 1.5, status: 'Complete', type: 'ETH', txId: '0x5eed7527dee715e9c068cda49fee0c1e147845ebad84514ede2dd89919b114b2',
}, {
  date: 'March 05, 2018, 19:51', amount: -3, status: 'Complete', type: 'MYB', txId: '0x5eed7527dee715e9c068cda49fee0c1e147845ebad84514ede2dd89919b114b2',
}, {
  date: 'March 05, 2018, 19:51', amount: 1.8, status: 'Complete', type: 'ETH', txId: '0x5eed7527dee715e9c068cda49fee0c1e147845ebad84514ede2dd89919b114b2',
}, {
  date: 'April 05, 2018, 19:51', amount: 1.5, status: 'Complete', type: 'ETH', txId: '0x5eed7527dee715e9c068cda49fee0c1e147845ebad84514ede2dd89919b114b2',
}, {
  date: 'March 05, 2018, 19:51', amount: 1.5, status: 'Complete', type: 'MYB', txId: '0x5eed7527dee715e9c068cda49fee0c1e147845ebad84514ede2dd89919b114b2',
}, {
  date: 'January 01, 2018, 19:51', amount: -0.4, status: 'Complete', type: 'MYB', txId: '0x5eed7527dee715e9c068cda49fee0c1e147845ebad84514ede2dd89919b114b2',
}, {
  date: 'March 05, 2018, 19:51', amount: 22, status: 'Complete', type: 'ETH', txId: '0x5eed7527dee715e9c068cda49fee0c1e147845ebad84514ede2dd89919b114b2',
}, {
  date: 'March 05, 2018, 19:51', amount: 14, status: 'Complete', type: 'ETH', txId: '0x5eed7527dee715e9c068cda49fee0c1e147845ebad84514ede2dd89919b114b2',
}, {
  date: 'March 05, 2018, 19:51', amount: -15, status: 'Complete', type: 'MYB', txId: '0x5eed7527dee715e9c068cda49fee0c1e147845ebad84514ede2dd89919b114b2',
}, {
  date: 'March 05, 2018, 19:51', amount: 13.22, status: 'Complete', type: 'ETH', txId: '0x5eed7527dee715e9c068cda49fee0c1e147845ebad84514ede2dd89919b114b2',
}, {
  date: 'March 05, 2018, 19:51', amount: -17.87, status: 'Complete', type: 'ETH', txId: '0x5eed7527dee715e9c068cda49fee0c1e147845ebad84514ede2dd89919b114b2',
}];
*/

/***/ }),

/***/ "./src/reducers/user.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("./src/actions/index.js");



const initialState = {
  userName: '',
  ethBalance: '0',
  myBitBalance: '0'
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions__["LOAD_METAMASK_USER_DETAILS_SUCCESS"]:
      return {
        userName: action.payload.details.userName,
        ethBalance: action.payload.details.ethBalance,
        myBitBalance: action.payload.details.myBitBalance
      };

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (user);

/***/ }),

/***/ "./src/store/configure-store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_logger__ = __webpack_require__("redux-logger");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_connected_next_router__ = __webpack_require__("connected-next-router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_connected_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_connected_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers__ = __webpack_require__("./src/reducers/index.js");







const configureStore = (initialState = {}, {
  isServer,
  asPath
}) => {
  const routerMiddleware = Object(__WEBPACK_IMPORTED_MODULE_2_connected_next_router__["createRouterMiddleware"])();

  if (isServer) {
    initialState.router = Object(__WEBPACK_IMPORTED_MODULE_2_connected_next_router__["initialRouterState"])(asPath);
  } // Redux Configuration


  const middleware = [];
  const enhancers = [];
  middleware.push(__WEBPACK_IMPORTED_MODULE_3_redux_thunk___default.a);

  if (true) {
    // Logging Middleware
    const logger = Object(__WEBPACK_IMPORTED_MODULE_1_redux_logger__["createLogger"])({
      level: 'info',
      collapsed: true
    });
    middleware.push(logger);
  } // If Redux DevTools Extension is installed use it, otherwise use Redux compose

  /* eslint-disable no-underscore-dangle */


  const composeEnhancers = typeof window !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : __WEBPACK_IMPORTED_MODULE_0_redux__["compose"] : __WEBPACK_IMPORTED_MODULE_0_redux__["compose"]; // Apply Middleware & Compose Enhancers

  enhancers.push(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(routerMiddleware, ...middleware));
  const enhancer = composeEnhancers(...enhancers);
  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_4__reducers__["a" /* default */], initialState, enhancer);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;


/***/ }),

/***/ "./src/util/helpers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const cryptocurrencyAtmCategoryImage = "/public/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/images/category-cryptocurrency-atm.png";
const solarEnergyCategoryImage = "/public/home/ubuntu/workspace/MyBitDapp-FrontEnd/src/images/category-solar-energy.png";
const parseEtherFromBalance = (web3, balance) => web3.fromWei(parseInt(balance, 10), 'ether');
/* unused harmony export parseEtherFromBalance */

const mergeAllLogsByAssetId = logs => {
  const assets = [];
  logs.forEach((logEntry, index, array) => {
    if (index === 0) {
      assets.push(_objectSpread({}, logEntry));
      return;
    }

    if (logEntry.assetID === array[index - 1].assetID) {
      const duplicateIndex = assets.map(asset => asset.assetID).indexOf(logEntry.assetID);

      if (duplicateIndex > -1) {
        assets[duplicateIndex] = _objectSpread({}, logEntry, array[index - 1], assets[duplicateIndex]);
      } else {
        assets.push(_objectSpread({}, logEntry, array[index - 1]));
      }
    } else {
      assets.push(_objectSpread({}, logEntry));
    }
  });
  return assets;
};
/* harmony export (immutable) */ __webpack_exports__["d"] = mergeAllLogsByAssetId;

const mergeAndSumFundingEvents = fundingEvents => {
  const assets = [];
  const fundingEventsWithNumbers = fundingEvents.map(({
    assetID,
    currentEthPrice
  }) => ({
    assetID,
    currentEthPrice: Number(currentEthPrice)
  }));
  fundingEventsWithNumbers.forEach((logEntry, index, array) => {
    if (index === 0) {
      assets.push(_objectSpread({}, logEntry));
      return;
    }

    if (logEntry.assetID === array[index - 1].assetID) {
      const duplicateIndex = assets.map(asset => asset.assetID).indexOf(logEntry.assetID);

      if (duplicateIndex > -1) {
        assets[duplicateIndex] = _objectSpread({}, logEntry, array[index - 1], assets[duplicateIndex], {
          currentEthPrice: assets[duplicateIndex].currentEthPrice + logEntry.currentEthPrice
        });
      } else {
        assets.push(_objectSpread({}, logEntry, array[index - 1], {
          currentEthPrice: array[index - 1].currentEthPrice + logEntry.currentEthPrice
        }));
      }
    } else {
      assets.push(_objectSpread({}, logEntry));
    }
  });
  const totalAmountRaisedAssets = assets.map(({
    assetID,
    currentEthPrice
  }) => ({
    assetID,
    totalAmountRaised: String(currentEthPrice)
  }));
  return totalAmountRaisedAssets;
};
/* unused harmony export mergeAndSumFundingEvents */

const getCategoryFromAssetTypeHash = (web3, assetTypeHash) => {
  switch (assetTypeHash) {
    case web3.utils.sha3('coffeemachine'):
      return 'coffeemachine';

    case web3.utils.sha3('bitcoinatm'):
      return 'bitcoinatm';

    default:
      return 'uncategorized';
  }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = getCategoryFromAssetTypeHash;

const getAssetIDFromHash = (web3, assetIDHash) => {
  switch (assetIDHash) {
    case web3.utils.sha3('officecoffeemachine'):
      return 'officecoffeemachine';

    default:
      return '';
  }
};
/* unused harmony export getAssetIDFromHash */

const getPrettyCategoryName = category => {
  switch (category) {
    case 'coffeemachine':
      return 'Coffee Machines';

    case 'uncategorized':
      return 'Uncategorized';

    default:
      return 'Unknown';
  }
};
/* harmony export (immutable) */ __webpack_exports__["c"] = getPrettyCategoryName;

const getImageForCategory = category => {
  switch (category) {
    case 'coffeemachine':
      return cryptocurrencyAtmCategoryImage;

    case 'uncategorized':
      return solarEnergyCategoryImage;

    default:
      return cryptocurrencyAtmCategoryImage;
  }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = getImageForCategory;


/***/ }),

/***/ "./src/util/web3.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3__ = __webpack_require__("web3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("./src/constants/index.js");





const getWeb3Async = () => {
  if (typeof window === 'undefined') return {};

  if (window.web3) {
    // Injected Web3 detected. Use Mist/MetaMask's provider.
    window.web3 = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a(window.web3.currentProvider);
    Object(__WEBPACK_IMPORTED_MODULE_1__constants__["i" /* debug */])('Metamask Loaded');
  } else {
    // No web3 instance injected, using Local web3.
    const provider = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a.providers.HttpProvider('http://localhost:8545');
    window.web3 = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a(provider);
  }

  return window.web3;
};

/* harmony default export */ __webpack_exports__["a"] = (getWeb3Async);

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_app.js");


/***/ }),

/***/ "connected-next-router":
/***/ (function(module, exports) {

module.exports = require("connected-next-router");

/***/ }),

/***/ "isomorphic-fetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next-redux-wrapper":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/app":
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-logger":
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "web3":
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map