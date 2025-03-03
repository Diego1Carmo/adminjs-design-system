"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Step = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
const icon_1 = __importDefault(require("../../atoms/icon"));
const text_1 = __importDefault(require("../../atoms/text"));
const box_1 = __importDefault(require("../../atoms/box/box"));
const css_class_1 = require("../../utils/css-class");
const Circle = styled_components_1.default(box_1.default) `
  border-width: 1px;
  border-style: solid;
  border-radius: 9999px;
  text-align: center;
`;
Circle.defaultProps = {
    py: 'default',
    px: 'default',
    minWidth: '34px',
    height: '34px',
};
const StyledStep = styled_components_1.default.div `
  flex: 1 1 0px;
  display: flex;
  flex-direction: row;

  & > ${box_1.default} {
    ${({ disabled }) => (!disabled ? 'cursor: pointer' : '')};
    border-bottom: 2px solid ${({ active, theme }) => (active ? theme.colors.primary100 : 'transparent')};
  }
  
  ${styled_system_1.space};
`;
/**
 * @classdesc
 *
 * <img src="components/step.png" />
 *
 * Step represents one of the tab in placed inside {@link Stepper} component.
 * You can use it alone or with before-mentioned {@link Stepper}.
 *
 * ### Usage
 *
 * ```javascript
 * import { Step, StepProps } from '@adminjs/design-system'
 * ```
 *
 *
 * @hideconstructor
 * @see Stepper
 * @see StepProps
 * @see OnStepClickHandler
 * @subcategory Molecules
 * @component
 * @example <caption>Regular step</caption>
 * return (
 *   <Box p="default">
 *     <Step number="1">Normal Step</Step>
 *  </Box>
 * )
 *
 * @example <caption>Active steps</caption>
 * return (
 *   <Box p="default">
 *     <Step number="1" active>I am active</Step>
 *  </Box>
 * )
 *
 * @example <caption>Active steps</caption>
 * return (
 *   <Box p="default">
 *     <Step number="1" completed>This was done !!!</Step>
 *  </Box>
 * )
 *
 * @example <caption>Clickable step</caption>
 * const onClick = () => alert('Why did you click me?')
 *
 * return (
 *   <Box p="default">
 *     <Step number="1" onClick={onClick}>Click me if you dare</Step>
 *  </Box>
 * )
 * @section design-system
 */
const Step = (props) => {
    const { number, completed, children, active, disabled, onClick, className } = props;
    return (react_1.default.createElement(StyledStep, { active: active, disabled: disabled || !onClick, className: css_class_1.cssClass('Step', className) },
        react_1.default.createElement(box_1.default, { flexShrink: 1, flexGrow: 0, flex: true, flexDirection: "row", pt: "lg", pb: "default", onClick: () => !disabled && onClick && onClick(number) },
            react_1.default.createElement(Circle, { bg: completed ? 'grey40' : 'transparent', borderColor: active ? 'primary100' : 'grey40', color: active ? 'primary100' : 'grey40' }, completed ? (react_1.default.createElement(icon_1.default, { icon: "Checkmark", color: "white" })) : number),
            react_1.default.createElement(text_1.default, { my: "sm", pl: "default", py: "sm", color: active || completed ? 'grey100' : 'grey40' }, children))));
};
exports.Step = Step;
exports.default = Step;
