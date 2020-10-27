/**
 * Stack system
 *
 * @author Dominique Rau [domi.github@gmail.com](mailto:domi.github@gmail.com)
 * @version 0.0.1
 */

import * as React from 'react';

/**
 * Spacer
 */
export type SpacerProps = { spacing?: number; variant: 'row' | 'column' };
export function spacerFactory(element: any, unit: string): React.FunctionComponent<SpacerProps> {
	return props =>
		React.createElement(element, {
			style: {
				height: props.variant === 'column' ? `${props.spacing}${unit}` : '100%',
				width: props.variant === 'column' ? '100%' : `${props.spacing}$${unit}`,
				flexShrink: 0,
				flexGrow: 0,
			},
		});
}

/**
 * Stacks
 */
type FlexAlignType = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
type FlexJustifyType =
	| 'flex-start'
	| 'flex-end'
	| 'center'
	| 'space-between'
	| 'space-around'
	| 'space-evenly';

export type CommonStackProps = {
	spacing?: number;
	padding?: number;
	margin?: number;
	flex?: boolean;
	alignItems?: FlexAlignType;
	justifyContent?: FlexJustifyType;
	variant: 'row' | 'column';
	debug?: boolean;
};
export function stackFactory(element: any, unit: string): React.FC<CommonStackProps> {
	const Spacer = spacerFactory(element, unit);

	return props => {
		const {
			children,
			spacing = 0,
			padding,
			margin,
			style,
			variant,
			alignItems,
			justifyContent,
			flex = false,
			debug = false,
			...restProps
		} = props as any;
		const oldChildren = React.Children.toArray(children);
		const newChildren: React.ReactNode[] = [];
		for (let i = 0; i < oldChildren.length; i++) {
			newChildren.push(oldChildren[i]);
			if (i < oldChildren.length - 1 && spacing !== 0) {
				newChildren.push(
					React.createElement(Spacer, {
						variant: variant,
						key: `${variant}_stack_${i}`,
						spacing: spacing,
					})
				);
			}
		}
		return React.createElement(element, {
			style: {
				flex: flex ? 1 : undefined,
				padding,
				margin,
				display: 'flex',
				flexDirection: variant,
				alignItems,
				justifyContent,
				backgroundColor: debug ? 'green' : undefined,
				...style,
			},
			...restProps,
			children: newChildren,
		});
	};
}
