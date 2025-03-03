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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const check_box_1 = require("./check-box");
const focus_shadow_style_1 = __importDefault(require("../utils/focus-shadow.style"));
const Circle = styled_components_1.default.span `
  display: block;
  width: 8px;
  height: 8px;
  margin-left: -4px;
  margin-top: -4px;
  border-radius: 9999px;
  background: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 50%;
  left: 50%;
`;
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenRadio = styled_components_1.default.input.attrs({ type: 'radio' }) `
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
const radioBackground = (theme, checked, disabled) => {
    if (checked) {
        return disabled ? theme.colors.grey40 : theme.colors.primary100;
    }
    return theme.colors.white;
};
const StyledRadio = styled_components_1.default.span `
  display: inline-block;
  width: 16px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.grey40};
  border-radius: 1000px;
  height: 16px;
  transition: all 150ms;
  position: relative;

  ${HiddenRadio}:focus + & {
    ${({ theme }) => `box-shadow: ${focus_shadow_style_1.default(theme)}`};
  }
  ${HiddenRadio}:hover + & {
    border-color: ${({ theme }) => theme.colors.grey60};
  }
  ${Circle} {
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  }

  background: ${({ checked, theme, disabled }) => radioBackground(theme, checked, disabled)};
`;
/**
 * @typedef {object} RadioProps
 * @alias RadioProps
 * @memberof Radio
 * @property {string} [...] All props default to _radio_ html input like `onChange`,
 *                          `checked` etc.
 */
/**
 /**
 * @classdesc
 *
 * <img src="components/radio.png" />
 *
 * HTML Radio
 *
 * ### Usage
 *
 * ```javascript
 * import { Radio, RadioProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @see RadioProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-radio--default StoryBook}
 * @hideconstructor
 * @subcategory Atoms
 * @example
 * return (
 *   <Box p="xl">
 *      <Radio id="radio1"/>
 *      <Label inline htmlFor="radio1" ml="default">Some example label</Label>
 *   </Box>
 * )
 * @section design-system
 */
const Radio = (props) => {
    const { className, checked, onChange, disabled } = props, restProps = __rest(props, ["className", "checked", "onChange", "disabled"]);
    const [isChecked, setChecked] = react_1.useState(checked !== null && checked !== void 0 ? checked : false);
    const actuallyChecked = checked !== null && checked !== void 0 ? checked : isChecked;
    const handleChange = (event) => {
        setChecked(!event.target.checked);
        if (onChange) {
            onChange(event);
        }
    };
    return (react_1.default.createElement(check_box_1.CheckboxRadioContainer, { className: className },
        react_1.default.createElement(HiddenRadio, Object.assign({ checked: actuallyChecked, onChange: handleChange }, restProps, { disabled: disabled })),
        react_1.default.createElement(StyledRadio, { checked: actuallyChecked, onClick: (event) => handleChange && handleChange(event), disabled: disabled },
            react_1.default.createElement(Circle, null))));
};
exports.Radio = Radio;
exports.default = Radio;
