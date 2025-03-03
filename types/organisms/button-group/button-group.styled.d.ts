import { ButtonGroupProps } from './button-group.types';
export declare const BUTTON_IN_GROUP_CLASS_NAME: string;
export declare const buttonMargin: (props: Pick<ButtonGroupProps, 'size'>) => import("styled-components").FlattenSimpleInterpolation;
export declare const hasHandler: (props: any) => "" | import("styled-components").FlattenSimpleInterpolation;
export declare const hasLabel: (props: any) => "" | import("styled-components").FlattenSimpleInterpolation;
export declare const StyledSingleButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {
    className: string;
} & Pick<import("styled-system").ColorProps<Required<import("styled-system").Theme<string | number>>, string | number | symbol>, "opacity" | "bg" | "backgroundColor"> & {
    color?: string | undefined;
} & import("styled-system").SpaceProps<Required<import("styled-system").Theme<string | number>>, string | number | symbol> & import("styled-system").TypographyProps<Required<import("styled-system").Theme<string | number>>> & {
    variant?: "text" | "default" | "primary" | "danger" | "success" | "info" | "secondary" | "light" | undefined;
    size?: "default" | "sm" | "lg" | "icon" | "md" | undefined;
    rounded?: boolean | undefined;
    label?: string | undefined;
} & {
    hasLabel: boolean;
}, "className">;
export declare const StyledDropDownItemAction: import("styled-components").StyledComponent<any, import("styled-components").DefaultTheme, object, string | number | symbol>;
export declare const StyledButtonGroup: import("styled-components").StyledComponent<"section", import("styled-components").DefaultTheme, import("styled-system").SpaceProps<Required<import("styled-system").Theme<string | number>>, string | number | symbol> & Pick<import("styled-system").ColorProps<Required<import("styled-system").Theme<string | number>>, string | number | symbol>, "opacity" | "bg" | "backgroundColor"> & {
    color?: string | undefined;
} & import("styled-system").LayoutProps<Required<import("styled-system").Theme<string | number>>> & Pick<import("styled-system").FlexboxProps<Required<import("styled-system").Theme<string | number>>>, "order" | "alignItems" | "alignContent" | "justifyItems" | "justifyContent" | "flexWrap" | "flexDirection" | "flexGrow" | "flexShrink" | "flexBasis" | "justifySelf" | "alignSelf"> & import("styled-system").BorderProps<Required<import("styled-system").Theme<string | number>>, string | number> & import("styled-system").PositionProps<Required<import("styled-system").Theme<string | number>>> & import("styled-system").ShadowProps<Required<import("styled-system").Theme<string | number>>> & {
    flex?: string | number | boolean | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    variant?: "grey" | "white" | "card" | undefined;
    animate?: boolean | undefined;
    className?: string | undefined;
} & Pick<ButtonGroupProps, "size">, never>;
