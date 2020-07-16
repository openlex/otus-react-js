import * as React from 'react';
import { gamesMock as games } from '@mocks'
import { withKnobs, number, text, array } from '@storybook/addon-knobs';
import { GameForm } from '@components';

export default {
	title: 'Список игр',
	component: GameForm,
	decorators: [withKnobs]
}

export const DefaultGameForm = () => <GameForm/>;
