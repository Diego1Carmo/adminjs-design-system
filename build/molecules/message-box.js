"use strict";
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
exports.MessageBox = void 0;
/* eslint-disable max-len */
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
const box_1 = require("../atoms/box/box");
const icon_1 = require("../atoms/icon");
const button_1 = require("../atoms/button");
const css_class_1 = require("../utils/css-class");
const sizeVariants = styled_system_1.variant({
    prop: 'size',
    variants: {
        sm: {
            boxShadow: 'none',
            '& > section, & + section': {
                px: 'lg',
                py: 'default',
            },
            [`& > ${button_1.Button}`]: {
                margin: '0px',
            },
        },
    },
});
const variants = (theme) => styled_system_1.variant({
    variants: {
        success: {},
        danger: {
            bg: 'errorLight',
            'box-shadow': `0 2px 0 0 ${theme.colors.error};`,
            '& + section': {
                borderColor: 'errorLight',
            },
        },
        info: {
            bg: 'primary20',
            'box-shadow': `0 2px 0 0 ${theme.colors.primary100};`,
            '& + section': {
                borderColor: 'primary20',
            },
        },
    },
});
const StyledMessageBox = styled_components_1.default.div `
  line-height: ${({ theme }) => theme.lineHeights.default};
  box-shadow: 0 2px 0 0 ${({ theme }) => theme.colors.success};
  background: ${({ theme }) => theme.colors.successLight};
  color: ${({ theme }) => theme.colors.grey80};
  & > ${button_1.Button} {
    float: right;
    margin: 8px;
    & svg {
      fill: ${({ theme }) => theme.colors.grey80};
    }
  }
  ${({ theme }) => variants(theme)};
  ${sizeVariants};
`;
const StyledCaption = styled_components_1.default(box_1.Box) ``;
StyledCaption.defaultProps = {
    px: 'xl',
    py: 'lg',
};
const StyledChildren = styled_components_1.default(box_1.Box) `
  padding: ${({ theme }) => theme.space.lg} ${({ theme }) => theme.space.xl};
  background: ${({ theme }) => theme.colors.white};
  border-style: solid;
  border-width: 0 1px 1px 1px;
  border-color: ${({ theme }) => theme.colors.successLight};
`;
/**
 * @classdesc
 *
 * <img src="components/message-box.png" />
 *
 * Component responsible for rendering standard danger/info/success
 * messages.
 *
 * It has 2 size versions: default and small. Also it can either contain or
 * don't contain children, which causes different look.
 *
 * ### Usage
 *
 * ```javascript
 * import { MessageBox, MessageBoxProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see MessageBoxProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-messagebox--default Storybook}
 * @example <caption>Different variants</caption>
 * return (
 *  <Box py="lg">
 *   <MessageBox message="Some default message" onCloseClick={() => alert('close clicked')} />
 *   <MessageBox message="Error message" mt="default" variant="danger" onCloseClick={() => alert('close clicked')} />
 *   <MessageBox message="Info message" mt="default" variant="info" onCloseClick={() => alert('close clicked')} />
 *  </Box>
 * )
 * @example <caption>Different variants with children</caption>
 * return (
 *  <Box py="lg">
 *   <MessageBox message="Some default message" onCloseClick={() => alert('close clicked')}>
 *     With inside text
 *   </MessageBox>
 *   <MessageBox message="Error message" mt="default" variant="danger" onCloseClick={() => alert('close clicked')}>
 *     With inside text
 *   </MessageBox>
 *   <MessageBox message="Info message" mt="default" variant="info" onCloseClick={() => alert('close clicked')}>
 *     With inside text
 *   </MessageBox>
 *  </Box>
 * )
 * @example <caption>Small with an icon and inside text</caption>
 * return (
 *  <Box py="lg">
 *   <MessageBox
 *     size="sm"
 *     message="Info message"
 *     mt="default"
 *     variant="info"
 *     icon="AddComment"
 *     onCloseClick={() => alert('close clicked')}
 *   >
 *     With inside text
 *   </MessageBox>
 *  </Box>
 * )
 * @section design-system
 */
const MessageBox = (props) => {
    const { onCloseClick, message, icon, children, variant, size } = props, other = __rest(props, ["onCloseClick", "message", "icon", "children", "variant", "size"]);
    return (react_1.default.createElement(box_1.Box, Object.assign({ className: css_class_1.cssClass('MessageBox') }, other),
        react_1.default.createElement(StyledMessageBox, { variant: variant, size: size },
            onCloseClick ? (react_1.default.createElement(button_1.Button, { variant: "text", size: "icon", onClick: onCloseClick },
                react_1.default.createElement(icon_1.Icon, { icon: "Close" }))) : '',
            react_1.default.createElement(StyledCaption, null,
                icon ? (react_1.default.createElement(icon_1.Icon, { icon: icon, mr: "default" })) : '',
                message)),
        children ? (react_1.default.createElement(StyledChildren, null, children)) : ''));
};
exports.MessageBox = MessageBox;
exports.default = MessageBox;
