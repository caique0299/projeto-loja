/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/Context/Context.tsx":
/*!*********************************!*\
  !*** ./src/Context/Context.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   useMyContext: () => (/* binding */ useMyContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ContextTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextTypes */ \"./src/Context/ContextTypes.tsx\");\n\n\nconst Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(_ContextTypes__WEBPACK_IMPORTED_MODULE_1__.ContextDefultValues);\nconst useMyContext = ()=>{\n    const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);\n    if (!contextValue) {\n        throw new Error(\"useMyContext deve ser usado dentro de um MyContextProvider\");\n    }\n    return contextValue;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Context);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29udGV4dC9Db250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5RDtBQUNTO0FBRWxFLE1BQU1JLHdCQUFVSCxvREFBYUEsQ0FBY0UsOERBQW1CQTtBQUV2RCxNQUFNRSxlQUFlO0lBQzFCLE1BQU1DLGVBQWVKLGlEQUFVQSxDQUFDRTtJQUVoQyxJQUFJLENBQUNFLGNBQWM7UUFDakIsTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBRUEsT0FBT0Q7QUFDVCxFQUFFO0FBRUYsaUVBQWVGLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItc3RvcmUvLi9zcmMvQ29udGV4dC9Db250ZXh0LnRzeD81MTE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250ZXh0VHlwZSwgQ29udGV4dERlZnVsdFZhbHVlcyB9IGZyb20gXCIuL0NvbnRleHRUeXBlc1wiO1xuXG5jb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxDb250ZXh0VHlwZT4oQ29udGV4dERlZnVsdFZhbHVlcyk7XG5cbmV4cG9ydCBjb25zdCB1c2VNeUNvbnRleHQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRleHRWYWx1ZSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG5cbiAgaWYgKCFjb250ZXh0VmFsdWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZU15Q29udGV4dCBkZXZlIHNlciB1c2FkbyBkZW50cm8gZGUgdW0gTXlDb250ZXh0UHJvdmlkZXInKTtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0VmFsdWU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZXh0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJDb250ZXh0RGVmdWx0VmFsdWVzIiwiQ29udGV4dCIsInVzZU15Q29udGV4dCIsImNvbnRleHRWYWx1ZSIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Context/Context.tsx\n");

/***/ }),

/***/ "./src/Context/ContextTypes.tsx":
/*!**************************************!*\
  !*** ./src/Context/ContextTypes.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ContextDefultValues: () => (/* binding */ ContextDefultValues)\n/* harmony export */ });\nconst ContextDefultValues = {\n    ordersHistory: [],\n    setOrdersHistory: ()=>{},\n    products: [],\n    setProducts: ()=>{},\n    total: 0,\n    setTotal: ()=>{},\n    cart: [],\n    setCart: ()=>{},\n    item: {\n        id: \"\",\n        name: \"\",\n        value: 0,\n        quantity: 0,\n        subTotal: 0\n    },\n    setItem: ()=>{},\n    isLogged: {\n        id: 0,\n        name: \"\",\n        email: \"\",\n        address: \"\",\n        city: \"\",\n        state: \"\",\n        zipcode: \"\",\n        neighborhood: \"\",\n        phone: \"\",\n        isLogged: false\n    },\n    setIsLogged: ()=>{}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29udGV4dC9Db250ZXh0VHlwZXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7QUE0Q08sTUFBTUEsc0JBQW1DO0lBQzlDQyxlQUFlLEVBQUU7SUFDakJDLGtCQUFrQixLQUFPO0lBQ3pCQyxVQUFVLEVBQUU7SUFDWkMsYUFBYSxLQUFPO0lBQ3BCQyxPQUFPO0lBQ1BDLFVBQVUsS0FBTztJQUNqQkMsTUFBTSxFQUFFO0lBQ1JDLFNBQVMsS0FBTztJQUNoQkMsTUFBTTtRQUFDQyxJQUFJO1FBQUlDLE1BQU07UUFBSUMsT0FBTztRQUFHQyxVQUFVO1FBQUdDLFVBQVU7SUFBQztJQUMzREMsU0FBUyxLQUFPO0lBQ2hCQyxVQUFVO1FBQUNOLElBQUk7UUFBR0MsTUFBTTtRQUFJTSxPQUFPO1FBQUlDLFNBQVM7UUFBSUMsTUFBTTtRQUFJQyxPQUFPO1FBQUlDLFNBQVM7UUFBSUMsY0FBYztRQUFJQyxPQUFPO1FBQUlQLFVBQVU7SUFBSztJQUNsSVEsYUFBYSxLQUFPO0FBR3RCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItc3RvcmUvLi9zcmMvQ29udGV4dC9Db250ZXh0VHlwZXMudHN4P2ExNTIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgVFByb2R1Y3Q9IHsgXG4gIGlkOiBzdHJpbmcsXG4gIG5hbWU6IHN0cmluZyxcbiAgc3JjOiBzdHJpbmcsXG4gIHZhbHVlOiBudW1iZXJcbiAgZGVzY3JpcHRpb246IHN0cmluZyxcbn1cblxuZXhwb3J0IHR5cGUgVEl0ZW0gPSBPbWl0PFRQcm9kdWN0LCAnc3JjJyB8ICdkZXNjcmlwdGlvbic+ICYge1xuICBzcmM/OiBzdHJpbmcsXG4gIHF1YW50aXR5OiBudW1iZXIsXG4gIHN1YlRvdGFsOiBudW1iZXJcbn07XG5cbmV4cG9ydCB0eXBlIFRJc0xvZ2dlZCA9IHtcbiAgaXNMb2dnZWQ6IGJvb2xlYW4sXG4gIGlkOiBudW1iZXIsXG4gIG5hbWU6IHN0cmluZyxcbiAgZW1haWw6IHN0cmluZyxcbiAgYWRkcmVzczogc3RyaW5nLFxuICBjaXR5OiBzdHJpbmcsXG4gIHN0YXRlOiBzdHJpbmcsXG4gIHppcGNvZGU6IHN0cmluZyxcbiAgbmVpZ2hib3Job29kOiBzdHJpbmcsXG4gIHBob25lOiBzdHJpbmcsXG59XG5cbmV4cG9ydCB0eXBlIENvbnRleHRUeXBlID0ge1xuICBvcmRlcnNIaXN0b3J5OiBUSXRlbVtdLFxuICBzZXRPcmRlcnNIaXN0b3J5OiAob3JkZXJzSGlzdG9yeTogVEl0ZW1bXSkgPT4gdm9pZCxcbiAgcHJvZHVjdHM6IFRQcm9kdWN0W10sXG4gIHNldFByb2R1Y3RzOiAocHJvZHVjdHM6IFRQcm9kdWN0W10pID0+IHZvaWQsXG4gIHRvdGFsOiBudW1iZXIsXG4gIHNldFRvdGFsOiAodG90YWw6IG51bWJlcikgPT4gdm9pZCxcbiAgY2FydDogVEl0ZW1bXSxcbiAgc2V0Q2FydDogKGNhcnQ6IFRJdGVtW10pID0+IHZvaWQsXG4gIGl0ZW06IFRJdGVtLFxuICBzZXRJdGVtOiAoaXRlbTogVEl0ZW0pID0+IHZvaWQsXG4gIGlzTG9nZ2VkOiBUSXNMb2dnZWQsXG4gIHNldElzTG9nZ2VkOiAoaXNMb2dnZWQ6IFRJc0xvZ2dlZCkgPT4gdm9pZCxcbiAgLy91bml0eTogbnVtYmVyLFxuICAvL3NldFVuaXR5OiAodW5pdHk6IG51bWJlcikgPT4gdm9pZCxcbn07XG5cbmV4cG9ydCBjb25zdCBDb250ZXh0RGVmdWx0VmFsdWVzOiBDb250ZXh0VHlwZSA9IHtcbiAgb3JkZXJzSGlzdG9yeTogW10sXG4gIHNldE9yZGVyc0hpc3Rvcnk6ICgpID0+IHt9LFxuICBwcm9kdWN0czogW10sXG4gIHNldFByb2R1Y3RzOiAoKSA9PiB7fSxcbiAgdG90YWw6IDAsXG4gIHNldFRvdGFsOiAoKSA9PiB7fSxcbiAgY2FydDogW10sXG4gIHNldENhcnQ6ICgpID0+IHt9LFxuICBpdGVtOiB7aWQ6ICcnLCBuYW1lOiAnJywgdmFsdWU6IDAsIHF1YW50aXR5OiAwLCBzdWJUb3RhbDogMH0sXG4gIHNldEl0ZW06ICgpID0+IHt9LFxuICBpc0xvZ2dlZDoge2lkOiAwLCBuYW1lOiAnJywgZW1haWw6ICcnLCBhZGRyZXNzOiAnJywgY2l0eTogJycsIHN0YXRlOiAnJywgemlwY29kZTogJycsIG5laWdoYm9yaG9vZDogJycsIHBob25lOiAnJywgaXNMb2dnZWQ6IGZhbHNlfSxcbiAgc2V0SXNMb2dnZWQ6ICgpID0+IHt9LFxuICAvL3VuaXR5OiAwLFxuICAvL3NldFVuaXR5OiAoKSA9PiB7fSxcbn0iXSwibmFtZXMiOlsiQ29udGV4dERlZnVsdFZhbHVlcyIsIm9yZGVyc0hpc3RvcnkiLCJzZXRPcmRlcnNIaXN0b3J5IiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsInRvdGFsIiwic2V0VG90YWwiLCJjYXJ0Iiwic2V0Q2FydCIsIml0ZW0iLCJpZCIsIm5hbWUiLCJ2YWx1ZSIsInF1YW50aXR5Iiwic3ViVG90YWwiLCJzZXRJdGVtIiwiaXNMb2dnZWQiLCJlbWFpbCIsImFkZHJlc3MiLCJjaXR5Iiwic3RhdGUiLCJ6aXBjb2RlIiwibmVpZ2hib3Job29kIiwicGhvbmUiLCJzZXRJc0xvZ2dlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Context/ContextTypes.tsx\n");

/***/ }),

/***/ "./src/Context/Provider.tsx":
/*!**********************************!*\
  !*** ./src/Context/Provider.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Context */ \"./src/Context/Context.tsx\");\n\n\n\nfunction MyProvider({ children }) {\n    const [ordersHistory, setOrdersHistory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [item, setItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: \"\",\n        name: \"\",\n        src: \"\",\n        value: 0,\n        quantity: 0,\n        subTotal: 0\n    });\n    const [unity, setUnity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isLogged, setIsLogged] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: 0,\n        name: \"\",\n        email: \"\",\n        address: \"\",\n        city: \"\",\n        state: \"\",\n        zipcode: \"\",\n        neighborhood: \"\",\n        phone: \"\",\n        isLogged: false\n    });\n    const context = {\n        ordersHistory,\n        setOrdersHistory,\n        products,\n        setProducts,\n        total,\n        setTotal,\n        cart,\n        setCart,\n        item,\n        setItem,\n        isLogged,\n        setIsLogged\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Context__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider, {\n        value: context,\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/caique/Documentos/courses/web-store/frontEnd/src/Context/Provider.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29udGV4dC9Qcm92aWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFvRDtBQUNsQjtBQU1uQixTQUFTRyxXQUFXLEVBQUVDLFFBQVEsRUFBaUM7SUFDNUUsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR0wsK0NBQVFBLENBQVUsRUFBRTtJQUM5RCxNQUFNLENBQUNNLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQWEsRUFBRTtJQUN2RCxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQVM7SUFDM0MsTUFBTSxDQUFDVSxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFVLEVBQUU7SUFDNUMsTUFBTSxDQUFDWSxNQUFNQyxRQUFRLEdBQUdiLCtDQUFRQSxDQUFRO1FBQ3RDYyxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsVUFBVTtJQUNaO0lBQ0EsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNzQixVQUFVQyxZQUFZLEdBQUd2QiwrQ0FBUUEsQ0FBWTtRQUFDYyxJQUFJO1FBQUdDLE1BQU07UUFBSVMsT0FBTztRQUFJQyxTQUFTO1FBQUlDLE1BQU07UUFBSUMsT0FBTztRQUFJQyxTQUFTO1FBQUlDLGNBQWM7UUFBSUMsT0FBTztRQUFJUixVQUFVO0lBQUs7SUFFNUssTUFBTVMsVUFBVTtRQUNkM0I7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQVM7UUFDQUM7SUFHRjtJQUVBLHFCQUNFLDhEQUFDdEIseURBQWtCO1FBQUNnQixPQUFPYztrQkFDeEI1Qjs7Ozs7O0FBR1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItc3RvcmUvLi9zcmMvQ29udGV4dC9Qcm92aWRlci50c3g/Zjg2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNeUNvbnRleHQgZnJvbSBcIi4vQ29udGV4dFwiO1xuaW1wb3J0IHsgVFByb2R1Y3QsIFRJdGVtLCBUSXNMb2dnZWQgfSBmcm9tIFwiLi9Db250ZXh0VHlwZXNcIjtcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlQcm92aWRlcih7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gIGNvbnN0IFtvcmRlcnNIaXN0b3J5LCBzZXRPcmRlcnNIaXN0b3J5XSA9IHVzZVN0YXRlPFRJdGVtW10+KFtdKTtcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZTxUUHJvZHVjdFtdPihbXSk7XG4gIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGU8VEl0ZW1bXT4oW10pO1xuICBjb25zdCBbaXRlbSwgc2V0SXRlbV0gPSB1c2VTdGF0ZTxUSXRlbT4oe1xuICAgIGlkOiAnJyxcbiAgICBuYW1lOiAnJyxcbiAgICBzcmM6ICcnLFxuICAgIHZhbHVlOiAwLFxuICAgIHF1YW50aXR5OiAwLFxuICAgIHN1YlRvdGFsOiAwXG4gIH0pO1xuICBjb25zdCBbdW5pdHksIHNldFVuaXR5XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaXNMb2dnZWQsIHNldElzTG9nZ2VkXSA9IHVzZVN0YXRlPFRJc0xvZ2dlZD4oe2lkOiAwLCBuYW1lOiAnJywgZW1haWw6ICcnLCBhZGRyZXNzOiAnJywgY2l0eTogJycsIHN0YXRlOiAnJywgemlwY29kZTogJycsIG5laWdoYm9yaG9vZDogJycsIHBob25lOiAnJywgaXNMb2dnZWQ6IGZhbHNlfSk7XG5cbiAgY29uc3QgY29udGV4dCA9IHtcbiAgICBvcmRlcnNIaXN0b3J5LFxuICAgIHNldE9yZGVyc0hpc3RvcnksXG4gICAgcHJvZHVjdHMsXG4gICAgc2V0UHJvZHVjdHMsXG4gICAgdG90YWwsXG4gICAgc2V0VG90YWwsXG4gICAgY2FydCxcbiAgICBzZXRDYXJ0LFxuICAgIGl0ZW0sXG4gICAgc2V0SXRlbSxcbiAgICBpc0xvZ2dlZCxcbiAgICBzZXRJc0xvZ2dlZCxcbiAgICAvL3VuaXR5LFxuICAgIC8vc2V0VW5pdHksXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TXlDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L015Q29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk15Q29udGV4dCIsIk15UHJvdmlkZXIiLCJjaGlsZHJlbiIsIm9yZGVyc0hpc3RvcnkiLCJzZXRPcmRlcnNIaXN0b3J5IiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsInRvdGFsIiwic2V0VG90YWwiLCJjYXJ0Iiwic2V0Q2FydCIsIml0ZW0iLCJzZXRJdGVtIiwiaWQiLCJuYW1lIiwic3JjIiwidmFsdWUiLCJxdWFudGl0eSIsInN1YlRvdGFsIiwidW5pdHkiLCJzZXRVbml0eSIsImlzTG9nZ2VkIiwic2V0SXNMb2dnZWQiLCJlbWFpbCIsImFkZHJlc3MiLCJjaXR5Iiwic3RhdGUiLCJ6aXBjb2RlIiwibmVpZ2hib3Job29kIiwicGhvbmUiLCJjb250ZXh0IiwiUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Context/Provider.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Context_Provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Context/Provider */ \"./src/Context/Provider.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const localStorageInfo = localStorage.getItem(\"isLogged\") || \"{}\";\n        const userIsLogged = JSON.parse(localStorageInfo);\n        if (!userIsLogged?.isLogged && ![\n            \"/\",\n            \"/register\"\n        ].includes(router.pathname)) {\n            router.push(\"/\");\n        }\n        if (userIsLogged?.isLogged && [\n            \"/\",\n            \"/register\"\n        ].includes(router.pathname)) {\n            router.push(\"/home\");\n        }\n    }, [\n        router.pathname\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Context_Provider__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/caique/Documentos/courses/web-store/frontEnd/src/pages/_app.tsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/caique/Documentos/courses/web-store/frontEnd/src/pages/_app.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDZDtBQUVXO0FBQ047QUFFbkIsU0FBU0csSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUM1RCxNQUFNQyxTQUFTTCxzREFBU0E7SUFJeEJDLGdEQUFTQSxDQUFDO1FBRVIsTUFBTUssbUJBQW1CQyxhQUFhQyxPQUFPLENBQUMsZUFBZTtRQUM3RCxNQUFNQyxlQUFlQyxLQUFLQyxLQUFLLENBQUNMO1FBQ2hDLElBQUksQ0FBQ0csY0FBY0csWUFBWSxDQUFDO1lBQUM7WUFBSztTQUFZLENBQUNDLFFBQVEsQ0FBQ1IsT0FBT1MsUUFBUSxHQUFHO1lBQzVFVCxPQUFPVSxJQUFJLENBQUM7UUFDZDtRQUVBLElBQUlOLGNBQWNHLFlBQVk7WUFBQztZQUFLO1NBQVksQ0FBQ0MsUUFBUSxDQUFDUixPQUFPUyxRQUFRLEdBQUc7WUFDMUVULE9BQU9VLElBQUksQ0FBQztRQUNkO0lBQ0YsR0FBRztRQUFDVixPQUFPUyxRQUFRO0tBQUM7SUFFcEIscUJBQ0UsOERBQUNmLHlEQUFVQTtrQkFDVCw0RUFBQ0k7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1zdG9yZS8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNeVByb3ZpZGVyIGZyb20gJ0AvQ29udGV4dC9Qcm92aWRlcidcbmltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgY29uc3QgbG9jYWxTdG9yYWdlSW5mbyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpc0xvZ2dlZCcpIHx8ICd7fSc7XG4gICAgY29uc3QgdXNlcklzTG9nZ2VkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VJbmZvKVxuICAgIGlmICghdXNlcklzTG9nZ2VkPy5pc0xvZ2dlZCAmJiAhWycvJywgJy9yZWdpc3RlciddLmluY2x1ZGVzKHJvdXRlci5wYXRobmFtZSkpIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgfVxuXG4gICAgaWYgKHVzZXJJc0xvZ2dlZD8uaXNMb2dnZWQgJiYgWycvJywgJy9yZWdpc3RlciddLmluY2x1ZGVzKHJvdXRlci5wYXRobmFtZSkpIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvaG9tZScpO1xuICAgIH1cbiAgfSwgW3JvdXRlci5wYXRobmFtZV0pO1xuXG4gIHJldHVybihcbiAgICA8TXlQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L015UHJvdmlkZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJNeVByb3ZpZGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwibG9jYWxTdG9yYWdlSW5mbyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VySXNMb2dnZWQiLCJKU09OIiwicGFyc2UiLCJpc0xvZ2dlZCIsImluY2x1ZGVzIiwicGF0aG5hbWUiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();