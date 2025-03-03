"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextArea = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
const input_1 = require("./input");
const css_class_1 = require("../utils/css-class");
/**
 * @classdesc
 *
 * <img src="components/textarea.png" />
 *
 * Wrapped `textarea` html element.
 *
 * ### Usage
 *
 * ```javascript
 * import { TextArea, TextAreaProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-textarea--default Storybook}
 * @see TextAreaProps
 * @hideconstructor
 * @example
 * return (
 *   <Box p="xl">
 *      <Label htmlFor="textarea1">Some example label</Label>
 *      <TextArea id="textarea1" width={1/2} />
 *   </Box>
 * )
 * @section design-system
 */
const TextArea = styled_components_1.default.textarea `
  ${input_1.InputCSS}
  ${styled_system_1.space};
  ${styled_system_1.layout};
  ${styled_system_1.typography};
`;
exports.TextArea = TextArea;
TextArea.defaultProps = {
    px: 'default',
    py: 'default',
    fontSize: 'lg',
    className: css_class_1.cssClass('TextArea'),
};
exports.default = TextArea;
