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
exports.Illustration = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = require("styled-components");
const Illustrations = __importStar(require("./illustrations/index"));
const RawIllustration = (props) => {
    const { variant } = props, other = __rest(props, ["variant"]);
    const IllustrationComponent = Illustrations[variant];
    return (react_1.default.createElement(IllustrationComponent, Object.assign({}, other)));
};
/**
 * @classdesc
 *
 * <img src="components/illustration.png" />
 *
 * Awesome database with all the illustrations provided with AdminJS.
 *
 * The best thing about them is that they follow your {@link Theme} color palette.
 *
 * ### Usage
 *
 * ```javascript
 * import { Illustration, IllustrationProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see IllustrationProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-illustration--default Storybook}
 * @hideconstructor
 *
 * @example <caption>Folders</caption>
 * return (
 *   <Illustration variant="Folders" />
 * )
 * @example <caption>DocumentSearch</caption>
 * return (
 *   <Illustration variant="DocumentSearch" />
 * )
 * @example <caption>Rocket</caption>
 * return (
 *   <Box bg="grey100" p="xxl"><Illustration variant="Rocket" /></Box>
 * )
 * @section design-system
 */
const Illustration = styled_components_1.withTheme(RawIllustration);
exports.Illustration = Illustration;
exports.default = Illustration;
