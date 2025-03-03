import { TypographyProps, SpaceProps, LayoutProps } from 'styled-system';
import { ColorProps } from '../utils/color-props';
/**
 * Prop Types of a Text component.
 * Apart from variant it extends all {@link ColorProps}, {@link SpaceProps} and
 * {@link TypographyProps}
 *
 * @memberof Text
 * @alias TextProps
 * @property {string} [...] Other props from {@link ColorProps}, {@link SpaceProps}
 *                          and {@link TypographyProps}
 */
export declare type TextProps = TypographyProps & SpaceProps & ColorProps & LayoutProps & {
    /** Optional variant of a <Text /> component */
    variant?: 'xs' | 'sm' | 'lg';
    /** Define this if you want to render element as something other than div */
    as?: string;
};
/**
 * @classdesc
 *
 * <img src="components/text.png" />
 *
 * Use the Text component to control font size, weight, alignment, and color.
 * By default it is rendered as a `div` but you can change this to other (like `span`)
 * by using `as` prop,
 *
 * ### Usage
 *
 * ```javascript
 * import { Text, TextProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see TextProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-text--default Storybook}
 * @hideconstructor
 * @example <caption>Lorem ipsum</caption>
 * return (
 * <Box>
 *   <Text>
 *    In publishing and graphic design,
 *    Lorem ipsum is a <b>placeholder</b> text commonly used to demonstrate the
 *    visual form of a document or a typeface without relying on meaningful
 *    content.
 *   </Text>
 *   <Text mt="default" variant="sm">This text was from Wikipedia</Text>
 * </Box>
 * )
 * @section design-system
 */
declare const Text: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, TextProps, never>;
export { Text };
export default Text;
