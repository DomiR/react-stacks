/**
 * Stack system
 *
 * @author Dominique Rau [domi.github@gmail.com](mailto:domi.github@gmail.com)
 * @version 0.0.1
 */

import * as React from 'react';
import { CommonStackProps, spacerFactory, SpacerProps, stackFactory } from './stacks';

/**
 * Spacer
 */
export { SpacerProps } from './stacks';
export const Spacer: React.FunctionComponent<SpacerProps> = spacerFactory('div', 'px');

export type StackProps = CommonStackProps & React.HTMLAttributes<HTMLDivElement>;
export const Stack: React.FC<StackProps> = stackFactory('div', 'px');

type StackVariantProps = Omit<StackProps, 'variant'>;
export const VStack: React.FunctionComponent<StackVariantProps> = props => (
	<Stack variant="column" {...props} />
);
export const HStack: React.FunctionComponent<StackVariantProps> = props => (
	<Stack variant="row" {...props} />
);
