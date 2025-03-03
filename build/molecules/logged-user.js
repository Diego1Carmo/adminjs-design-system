"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggedUser = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const box_1 = require("../atoms/box/box");
const index_1 = require("./drop-down/index");
const text_1 = require("../atoms/text");
const icon_1 = require("../atoms/icon");
const height = '46px';
const LoggedUserInfo = styled_components_1.default(box_1.Box) `
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  color: ${({ theme }) => theme.colors.grey60};
  height: ${height};

  & img {
    border-radius: 9999px;
    margin-right: 0 8px;
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 9999px;
  }
`;
/**
 * @classdesc
 *
 * <img src="components/logged-user.png" />
 *
 * Logged in user state in the header
 *
 *
 * ### Usage
 *
 * ```javascript
 * import { LoggedUser, LoggedUserProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-loggeduser--default Storybook}
 * @see LoggedUserProps
 * @section design-system
 * @deprecated In favour of {@link CurrentUserNav} component
 */
const LoggedUser = (props) => {
    const { email, title, avatarUrl, children } = props;
    return (react_1.default.createElement(index_1.DropDown, null,
        react_1.default.createElement(index_1.DropDownTrigger, null,
            react_1.default.createElement(LoggedUserInfo, { pr: "xl" },
                react_1.default.createElement(box_1.Box, { mr: "default" },
                    react_1.default.createElement(text_1.Text, { fontSize: "default", lineHeight: title ? 'lg' : 'xl', fontWeight: "normal" }, email),
                    react_1.default.createElement(text_1.Text, { fontSize: "sm", color: "grey40", lineHeight: "sm" }, title)),
                avatarUrl ? (react_1.default.createElement("img", { src: avatarUrl, alt: "avatar" })) : null,
                react_1.default.createElement(icon_1.Icon, { icon: "OverflowMenuVertical", size: 16, my: "default", color: "grey60" }))),
        react_1.default.createElement(index_1.DropDownMenu, { top: height }, children)));
};
exports.LoggedUser = LoggedUser;
exports.default = LoggedUser;
