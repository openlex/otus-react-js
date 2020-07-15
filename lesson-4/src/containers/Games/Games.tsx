import React from 'react';
import { GamesList } from '@/components/GamesList/GamesList';
import { gamesMock as games } from './games.mock'
import { GameForm } from '@components';

export class Games extends React.Component{

	render() {
		const {} = this.props;

		console.log('gamesMock', games);

		return (
			<div>
				<h1>Список игр</h1>
				 <GamesList games={games}/>
				 <GameForm/>
				 {/*<Button onClick={}/>*/}
			</div>
		);
	}
}
