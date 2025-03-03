"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TooltipControl = exports.default = void 0;
const react_1 = __importStar(require("react"));
const use_window_size_1 = __importDefault(require("../../hooks/use-window-size"));
const tooltip_styled_1 = require("./tooltip-styled");
/**
 * @component
 * @private
 * @memberof Tooltip
 */
const TooltipControl = (props) => {
    var _a, _b;
    const { title, childRef, direction = 'bottom', ContentElement, size } = props;
    const tooltipRef = react_1.useRef(null);
    const [dimension, setDimension] = react_1.useState(null);
    const [position, setPosition] = react_1.useState(null);
    const [elementPosition, setElementPosition] = react_1.useState(null);
    const windowSize = use_window_size_1.default();
    react_1.useEffect(() => {
        if (childRef.current) {
            const { width: clientWidth, top: offsetTop, left: offsetLeft, height: clientHeight, } = childRef.current.getBoundingClientRect();
            setElementPosition({
                width: clientWidth,
                top: offsetTop,
                left: offsetLeft,
                height: clientHeight,
            });
        }
    }, [
        childRef,
        windowSize === null || windowSize === void 0 ? void 0 : windowSize.width,
        windowSize === null || windowSize === void 0 ? void 0 : windowSize.height,
    ]);
    react_1.useEffect(() => {
        if (tooltipRef.current) {
            const { clientWidth, clientHeight } = tooltipRef.current;
            setDimension({
                width: clientWidth,
                height: clientHeight,
            });
        }
    }, [
        (_a = tooltipRef === null || tooltipRef === void 0 ? void 0 : tooltipRef.current) === null || _a === void 0 ? void 0 : _a.clientWidth,
        (_b = tooltipRef === null || tooltipRef === void 0 ? void 0 : tooltipRef.current) === null || _b === void 0 ? void 0 : _b.clientHeight,
        title,
    ]);
    react_1.useEffect(() => {
        if (!elementPosition || !dimension) {
            return;
        }
        // eslint-disable-next-line default-case
        switch (direction) {
            case 'bottom': {
                setPosition({
                    top: elementPosition.top + elementPosition.height,
                    left: elementPosition.left + elementPosition.width / 2 - dimension.width / 2,
                });
                break;
            }
            case 'top': {
                setPosition({
                    top: elementPosition.top - dimension.height,
                    left: elementPosition.left + elementPosition.width / 2 - dimension.width / 2,
                });
                break;
            }
            case 'left': {
                setPosition({
                    top: elementPosition.top + elementPosition.height / 2 - dimension.height / 2,
                    left: elementPosition.left - dimension.width,
                });
                break;
            }
            case 'right': {
                setPosition({
                    top: elementPosition.top + elementPosition.height / 2 - dimension.height / 2,
                    left: elementPosition.left + elementPosition.width,
                });
                break;
            }
        }
    }, [elementPosition, dimension, direction]);
    const isVisible = !!(dimension && position);
    return (react_1.default.createElement(tooltip_styled_1.StyledTooltip, { ref: tooltipRef, left: (position === null || position === void 0 ? void 0 : position.left) || '-1110px', top: (position === null || position === void 0 ? void 0 : position.top) || '-1110px', size: size, direction: direction, isVisible: isVisible }, ContentElement || title));
};
exports.default = TooltipControl;
exports.TooltipControl = TooltipControl;
