import * as React from 'react';
import { Panel } from './Panel';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
	title: 'ui/Панель - контейнер для элементов',
	components: Panel,
	decorators: [withKnobs]
}

export const DefaultPanel = () =>
	<Panel>{ text('Текст', 'Это красивая панель в которую можно вставить контент. Это красивая панель в которую можно вставить контент') }</Panel>;
