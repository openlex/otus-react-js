import React from 'react';
import { shallow } from "enzyme";
import { GameForm, IGameItem } from '@components';

const onAddGameAction = (game: IGameItem) => {
	console.log(game);
}

describe("Gameform markup", () => {
	it('change input text', () => {
		const gameForm = shallow(<GameForm onAddGame={onAddGameAction}/>);
		gameForm.setState({
			title: 'Title',
			genres: 'a,b, c',
			rating: '5',
			description: 'Desc',
		})
		const addButton = gameForm.find('[data-test-id="addButton"]');
		const spy = jest.spyOn(gameForm.instance(), 'addGame');
		// const spy = jest.spyOn(GameForm.prototype, 'addGame');

		addButton.simulate('click');

		expect(spy).toHaveBeenCalled();
	})
});

describe("Gameform actions", () => {

});
