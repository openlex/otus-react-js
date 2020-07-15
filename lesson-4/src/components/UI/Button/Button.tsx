import React from 'react';
import * as s from './Button.scss';
import cn from 'classnames';

interface IButtonProps {
	className?: string;
	title: string;
	isDisabled?: boolean;
	onClick(): void;
}

export const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
	const {
		className,
		title,
		onClick,
		isDisabled,
	} = props;

	return (
		<button
			className={cn(className, s.block)}
			onClick={onClick}
			disabled={isDisabled}
		>
			{title}
		</button>
	)
}
