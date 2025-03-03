"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
const css_class_1 = require("../../utils/css-class");
const variants = styled_system_1.variant({
    variants: {
        grey: {
            flexGrow: 1,
            bg: 'bg',
            py: 'xl',
            px: ['0', 'xl'],
            className: css_class_1.cssClass(['Box', 'Box_Grey']),
        },
        white: {
            px: ['default', 'xxl'],
            py: 'xxl',
            bg: 'white',
            className: css_class_1.cssClass(['Box', 'Box_White']),
        },
        card: {
            p: 'xxl',
            bg: 'white',
            className: css_class_1.cssClass(['Box', 'Box_Card']),
            boxShadow: 'card',
        },
    },
});
/**
 * @load ./box.doc.md
 * @hideconstructor
 * @component
 * @subcategory Atoms
 * @section design-system
 * @see BoxProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-box--simple-white-gray-wrapper StoryBook}
 */
const Box = styled_components_1.default.section `
  box-sizing: border-box;
  min-width: 0;
  ${({ flex }) => (flex && typeof flex === 'boolean' ? 'display: flex;' : '')}
  font-family: ${({ theme }) => theme.font};
  line-height: ${({ theme }) => theme.lineHeights.default};
  font-size: ${({ theme }) => theme.fontSizes.default};
  font-weight: normal;
  ${({ animate }) => (animate ? 'transition: all 500ms;' : '')};

  ${styled_system_1.space};
  ${styled_system_1.color};
  ${styled_system_1.layout};
  ${styled_system_1.flexbox};
  ${styled_system_1.border};
  ${styled_system_1.shadow};
  ${styled_system_1.position};
  ${variants};
`;
exports.Box = Box;
Box.defaultProps = {
    className: css_class_1.cssClass('Box'),
};
exports.default = Box;
