import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { addParameters } from '@storybook/react';
import { Button } from './Button';
import { withKnobs, text } from '@storybook/addon-knobs';

addParameters({
	docs: {
		container: DocsContainer,
		page: DocsPage,
	},
});

export default {
	title: 'ui/Кнопка',
	description: 'Кнопка',
	component: Button,
	decorators: [withKnobs],
};

export const ButtonDefault = () => {
	return (
		<>
			<Button title={text('Текст кнопки', 'Нажать')} onClick={action('clicked')}/>
		</>
	);
};

ButtonDefault.story = {
	name: 'Дефолтная кнопка',
};


export const ButtonDisabled = () => {

	return (
		<>
			<Button isDisabled title={text('Текст кнопки', 'Нажать')} onClick={action('clicked')}/>
		</>
	);
};

ButtonDisabled.story = {
	name: 'Неактивная кнопка',
};
