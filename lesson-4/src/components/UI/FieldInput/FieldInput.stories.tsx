import * as React from 'react';
import { text, number, withKnobs } from '@storybook/addon-knobs';
import { FieldInput } from '@components';
import { action } from '@storybook/addon-actions';

export default {
	title: 'ui/Поле ввода',
	components: FieldInput,
	decorators: [withKnobs],
}

export const DefaultField = () =>
	<FieldInput
		name="DefaultField"
		label={text('Заголовок', 'Заголовок поля')}
		value={text('Содержимое', 'Текст')}
		onChange={action('changeAction')}
	/>;

export const NumberField = () =>
	<FieldInput
		name="NumberField"
		label={text('Заголовок', 'Поле цифровое')}
		value={number('Содержимое', 2).toString()}
		type="number"
		onChange={action('changeAction')}
	/>;

export const EmptyField = () =>
	<FieldInput
		name="EmptyField"
		label={text('Заголовок', 'Заголовок поля')}
		value={''}
	/>;

EmptyField.story = {
	name: 'Пустое поле',
};

export const LabellessField = () =>
	<FieldInput
		name="LabellessField"
		value={text('Содержимое', '')}
	/>;

LabellessField.story = {
	name: 'Поле без заголовка',
};

export const TextArea = () =>
	<FieldInput
		name="TextArea"
		label={text('Заголовок', 'Заголовок поля')}
		value={text('Содержимое', '')}
		isTextArea={true}
	/>;

TextArea.story = {
	name: 'TextArera',
};
