import React from 'react';
import cn from 'classnames';
import * as s from './FieldInput.scss';

export interface IFieldInputProps {
	name: string;
	className?: string;
	label?: string;
	value?: string;
	onChange?(result: IFieldInputData): void;
	type?: string;
	isTextArea?: boolean;
}

export interface IFieldInputData {
	value: string,
	name: string
}

export const FieldInput: React.FC<IFieldInputProps> = (
	{
		className,
		name,
		label,
		value,
		onChange,
		type,
		isTextArea,
	}: IFieldInputProps) => {
	const onChangeInput = ((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const target = event?.target;

		if (onChange && target?.value) {
			onChange({ value: target?.value, name: target?.name })
		}
	});

	return (
		<label className={cn(s.block, className)}>
			{ label && <span data-test-id="fieldInputLabel">{label}</span> }
			<div className={s.fieldWrapper}>
				{ isTextArea
					? <textarea
						name={name}
						data-test-id="fieldInput"
						className={cn(s.textarea, s.input)}
						onChange={onChangeInput}
						value={value}
					/>
					: <input
						name={name}
						data-test-id="fieldInput"
						className={s.input}
						type={type}
						value={value}
						onChange={onChangeInput}
					/>
				}
			</div>
		</label>
	)
}

FieldInput.defaultProps = {
	type: 'text',
	className: '',
	label: '',
	value: '',
}
