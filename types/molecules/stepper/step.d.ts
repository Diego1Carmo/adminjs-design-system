import React from 'react';
/**
 * Handler which is invoked when user clicks given step
 *
 * @alias OnStepClickHandler
 * @memberof Step
 */
export declare type OnStepClickHandler = (
/**
 * The same number what was passed to a {@link Step}
 */
number?: number | string) => boolean | void;
/**
 * @alias StepProps
 * @memberof Step
 */
export declare type StepProps = {
    /** number presented in a circle */
    number?: number | string;
    /** indicates if given step is done */
    completed?: boolean;
    /** indicates if given step is active */
    active?: boolean;
    /** turn off any  */
    disabled?: boolean;
    /** handler which passes a number of the step in an argument */
    onClick?: OnStepClickHandler;
    /** Optional className */
    className?: string;
};
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
declare const Step: React.FC<StepProps>;
export { Step };
export default Step;
