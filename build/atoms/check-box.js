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
exports.CheckBox = exports.CheckboxRadioContainer = void 0;
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const label_1 = require("./label");
const focus_shadow_style_1 = __importDefault(require("../utils/focus-shadow.style"));
const Icon = styled_components_1.default.svg `
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
exports.CheckboxRadioContainer = styled_components_1.default.span `
  position: relative;
  display: inline-block;
  vertical-align: middle;
  & + ${label_1.Label} {
    margin-left: ${({ theme }) => theme.space.default};
    vertical-align: middle;
    margin-bottom: ${({ theme }) => theme.space.sm};
  }
`;
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled_components_1.default.input.attrs({ type: 'checkbox' }) `
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
const checkboxBackground = (theme, checked, disabled) => {
    if (checked) {
        return disabled ? theme.colors.grey40 : theme.colors.primary100;
    }
    return theme.colors.white;
};
const StyledCheckbox = styled_components_1.default.a `
  display: inline-block;
  width: 16px;
  /* when it is placed within a container setting different font size */
  font-size: 12px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.grey40};
  height: 16px;
  background: ${({ checked, theme, disabled }) => checkboxBackground(theme, checked, disabled)};
  transition: all 150ms;
  position: relative;

  ${HiddenCheckbox}:focus + & {
    ${({ theme }) => `box-shadow: ${focus_shadow_style_1.default(theme)};`};
  }
  ${HiddenCheckbox}:hover + & {
    border-color: ${({ theme }) => theme.colors.grey60};
  }
  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }

  &:after {
    content: '';
    position: absolute;
    left: -5px;
    top: -5px;
    width: 24px;
    height: 24px;
    opacity: 0;
    background: ${({ theme }) => theme.colors.primary100};
  }
  &:after:before {
    opacity: 0.1;
  }
`;
/**
 * @typedef {object} CheckBoxProps
 * @alias CheckBoxProps
 * @memberof module:@adminjs/design-system.CheckBox
 * @property {string} [...] All props default to _checkbox_ html input like `onChange`,
 *                          `checked` etc.
 */
/**
 * @classdesc
 *
 * <img src="components/checkbox.png" />
 *
 * HTML CheckBox
 *
 * ### Usage
 *
 * ```javascript
 * import { CheckBox, CheckBoxProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-checkbox--default StoryBook}
 * @hideconstructor
 * @subcategory Atoms
 * @example
 * return (
 *   <Box p="xl">
 *      <CheckBox id="checkbox1"/>
 *      <Label inline htmlFor="checkbox1" ml="default">Some example label</Label>
 *   </Box>
 * )
 * @section design-system
 */
const CheckBox = (props) => {
    const { className, checked, onChange, disabled } = props, restProps = __rest(props, ["className", "checked", "onChange", "disabled"]);
    const [isChecked, setChecked] = react_1.useState(checked !== null && checked !== void 0 ? checked : false);
    const handleChange = (event) => {
        if (onChange) {
            onChange(event);
        }
        else {
            setChecked(!event.target.checked);
        }
    };
    react_1.useEffect(() => {
        setChecked(checked !== null && checked !== void 0 ? checked : false);
    }, [checked]);
    return (react_1.default.createElement(exports.CheckboxRadioContainer, { className: [className !== null && className !== void 0 ? className : '', 'adminjs_Checkbox'].join(' ') },
        react_1.default.createElement(HiddenCheckbox, Object.assign({ checked: isChecked, onChange: handleChange }, restProps, { disabled: disabled })),
        react_1.default.createElement(StyledCheckbox, { checked: isChecked, disabled: disabled, onClick: (event) => handleChange && handleChange(event) },
            react_1.default.createElement(Icon, { viewBox: "0 0 24 24" },
                react_1.default.createElement("polyline", { points: "20 6 9 17 4 12" })))));
};
exports.CheckBox = CheckBox;
exports.default = CheckBox;
