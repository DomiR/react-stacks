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
export type SpacerProps = { spacing?: number | string; variant: 'row' | 'column' };
export const Spacer: React.FunctionComponent<SpacerProps> = props => {
	const width = typeof props.spacing === 'number' ? `${props.spacing}px` : props.spacing;
	return (
		<div
			style={{
				height: props.variant === 'column' ? width : '100%',
				width: props.variant === 'column' ? '100%' : width,
				flexShrink: 0,
				flexGrow: 0,
			}}
		/>
	);
};

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

export type StackProps = {
	spacing?: number | string;
	padding?: number | string;
	margin?: number | string;
	flex?: boolean | number;
	alignItems?: FlexAlignType;
	justifyContent?: FlexJustifyType;
	variant: 'row' | 'column';
	debug?: boolean;
} & React.HTMLProps<HTMLDivElement>;

export const Stack: React.FC<StackProps> = props => {
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
	} = props;
	const oldChildren = React.Children.toArray(children);
	const newChildren: React.ReactNode[] = [];
	for (let i = 0; i < oldChildren.length; i++) {
		newChildren.push(oldChildren[i]);
		if (i < oldChildren.length - 1 && spacing !== 0) {
			newChildren.push(
				<Spacer variant={variant} key={`${variant}_stack_${i}`} spacing={spacing} />
			);
		}
	}
	return (
		<div
			style={{
				...(debug ? { backgroundColor: 'green' } : {}),
				...(typeof flex === 'number' ? { flex } : flex ? { flex: 1 } : {}),
				padding,
				margin,
				display: 'flex',
				flexDirection: variant,
				alignItems,
				justifyContent,
				...style,
			}}
			{...restProps}
		>
			{newChildren}
		</div>
	);
};

type StackVariantProps = Omit<StackProps, 'variant'>;
export const VStack: React.FunctionComponent<StackVariantProps> = props => (
	<Stack variant="column" {...props} />
);
export const HStack: React.FunctionComponent<StackVariantProps> = props => (
	<Stack variant="row" {...props} />
);
