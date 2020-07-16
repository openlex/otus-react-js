import * as React from 'react';
import { gamesMock as games } from '@mocks'
import { withKnobs, number, text, array } from '@storybook/addon-knobs';
import { GenreList } from '@components';

export default {
	title: 'Список жанров',
	component: GenreList,
	decorators: [withKnobs]
}

export const DefaultGame = () => {
	const { genres } = games[0];

	return (
		<GenreList
			genres={array('Список жанров (через запятую)', genres, ',')}
		/>
	);
}
