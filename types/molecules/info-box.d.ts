import React from 'react';
/**
 * @memberof InfoBox
 * @alias InfoBoxProps
 */
export declare type InfoBoxProps = {
    /** Title of an InfoBox */
    title: string;
    /** Inner content - usually couple of {@link Text} nodes */
    children: React.ReactNode;
    /** Optional testId */
    testId?: string;
};
/**
 * @classdesc
 *
 * <img src="components/info-box.png" />
 *
 * Used for all type of information like:
 *
 * > you don't have x - please add first one"
 *
 * in the system.
 *
 * ### Usage
 *
 * ```javascript
 * import { InfoBox, InfoBoxProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-infobox--default Storybook}
 * @see InfoBoxProps
 * @example
 * return (
 * <InfoBox title="There are no cars in the system">
 *   <Text>Currently there are no cars in the system</Text>
 *   <Text>To create first click</Text>
 *   <Button mt="lg"><Icon icon="Add" />Create</Button>
 * </InfoBox>
 * )
 * @section design-system
 */
declare const InfoBox: React.FC<InfoBoxProps>;
export { InfoBox };
export default InfoBox;
