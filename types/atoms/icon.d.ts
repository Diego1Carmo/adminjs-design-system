import React from 'react';
import { SpaceProps } from 'styled-system';
import { ColorProps } from '../utils/color-props';
/**
 * Prop Types of an Icon component.
 * Apart from props defined below it extends all {@link ColorProps} and {@link SpaceProps}
 *
 * @memberof Icon
 * @alias IconProps
 * @property {string} [...] Other props from {@link ColorProps} and {@link SpaceProps}
 */
export declare type IconProps = SpaceProps & ColorProps & {
    /**
     * CamelCased name of an icon from https://www.carbondesignsystem.com/guidelines/icons/library/
     */
    icon?: string;
    /**
     * Size variant. Default to 16
     */
    size?: 16 | 20 | 24 | 32;
    /**
     * Icon color
     */
    color?: string;
    /**
     * Icon background
     */
    bg?: string;
    /**
     * If background should be rounded
     */
    rounded?: boolean;
    /**
     * Indicates if given icons should spin
     */
    spin?: boolean;
};
/**
 * @classdesc
 *
 * <img src="components/icon.png" />
 *
 * Component wrapping [@carbon/icons-react](https://www.npmjs.com/package/@carbon/icons-react).
 * List of all icons can be found here: https://www.carbondesignsystem.com/guidelines/icons/library/
 * but keys are not always 1 to 1 in a relation to the `icons-react` library.
 * If you have problem verifying the key of given icon - you can always open the
 * Chrome Terminal (with AdminJS open) and write there:
 *
 * ```
 * Object.keys(CarbonIcons)
 * ```
 *
 * to see list of all possible icon keys.
 *
 * ### Usage
 *
 * ```javascript
 * import { Icon, IconProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see IconProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-icon--default Storybook}
 * @hideconstructor
 * @example <caption>Icons inside other elements</caption>
 * return (
 *   <Box variant="grey">
 *     <Label mb="default"><Icon icon="Accessibility" />Icon in Label</Label>
 *     <Button><Icon icon="Accessibility" />Icon in button</Button>
 *   </Box>
 * )
 * @example <caption>Different sizes</caption>
 * const sizes = [16, 20, 24, 32]
 * return (
 *   <Box variant="grey">
 *     {sizes.map(size => (
 *       <Label m="default"><Icon icon="Accessibility" size={size}/>Icon {size}</Label>
 *     ))}
 *   </Box>
 * )
 *
 * @example <caption>Big rounded icon with background</caption>
 * return (
 *   <Box variant="grey">
 *     <Icon icon="Add" color="white" bg="primary100" rounded size={32} p="default"/>
 *   </Box>
 * )
 * @section design-system
 */
declare const Icon: React.FC<IconProps>;
export { Icon };
export default Icon;
