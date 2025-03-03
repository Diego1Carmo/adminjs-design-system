import { ButtonProps } from '../../atoms/button';
import { VariantType } from '../../theme';
/**
 * Props of buttons in {@link ButtonGroup}
 *
 * @memberof ButtonGroup
 */
export declare type ButtonInGroupProps = ButtonProps & {
    /** Icon of a button */
    icon?: string;
    /** Label, when set to null, with icon given, button will adjust it's margin */
    label?: string | null;
    /** Variant compatible with Button variant */
    variant?: VariantType;
    /** Variant href */
    href?: string;
    /**
     * Button source - if set, this will be passed to onClick handler. It can be useful if when
     * you have one handler function for all the buttons.
     */
    source?: any;
    /**
     * On click handler invoked when button has been clicked.
     */
    onClick?: (event: any, source: any) => any | Promise<any>;
    /**
     * Array of nested buttons.
     */
    buttons?: Array<ButtonInGroupProps>;
} & {
    className?: string;
};
declare type ButtonPropsSize = ButtonProps['size'];
declare type ButtonPropsRounded = ButtonProps['rounded'];
/**
 * Props passed to ButtonGroup element.
 *
 * @memberof ButtonGroup
 */
export declare type ButtonGroupProps = {
    /**
     * Default size for all buttons. The same as {@link ButtonProps}.size
     */
    size?: ButtonPropsSize;
    /**
     * Default rounded property for all buttons. The same as {@link ButtonProps}.rounded
     */
    rounded?: ButtonPropsRounded;
    /**
     * Array of top level buttons.
     */
    buttons: Array<ButtonInGroupProps>;
};
export {};
