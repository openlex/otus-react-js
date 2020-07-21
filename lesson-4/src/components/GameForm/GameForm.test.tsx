import React from 'react';
import { shallow, mount } from "enzyme";
import { GameForm, IGameItem } from '@components';

describe("Gameform actions", () => {
	const onAddGameMock = jest.fn();
	const gameForm = shallow(<GameForm onAddGame={onAddGameMock}/>);
	gameForm.setState({
		title: 'Title',
		genres: 'a,b, c',
		rating: '5',
		description: 'Desc',
	});
	const addButton = gameForm.find('[data-test-id="addButton"]');
	const resetButton = gameForm.find('[data-test-id="resetButton"]');

	it('fields are filled with states', () => {
		expect(gameForm.find('[data-test-id="input-title"]').props().value).toEqual('Title');
		expect(gameForm.find('[data-test-id="input-rating"]').props().value).toEqual('5');
		expect(gameForm.find('[data-test-id="input-description"]').props().value).toEqual('Desc');
		expect(gameForm.find('[data-test-id="input-genres"]').props().value).toEqual('a,b, c');
	})

	const checkFormIsReset = function() {
		expect( gameForm.state()).toEqual({ title: '', genres: '', rating: '', description: '' })
		expect(gameForm.find('[data-test-id="input-title"]').props().value).toEqual('');
		expect(gameForm.find('[data-test-id="input-rating"]').props().value).toEqual('');
		expect(gameForm.find('[data-test-id="input-description"]').props().value).toEqual('');
		expect(gameForm.find('[data-test-id="input-genres"]').props().value).toEqual('');
	}

	it('click addButton calls reset of form', () => {
		addButton.simulate('click');
		gameForm.update();
		expect(onAddGameMock.mock.calls.length).toBe(1);
		checkFormIsReset();
	})

	it('click resetButton calls reset of form', () => {
		gameForm.setState({
			title: 'Title',
			genres: 'a,b, c',
			rating: '5',
			description: 'Desc',
		});
		resetButton.simulate('click');
		gameForm.update();
		checkFormIsReset();
	})

	it('onChange FieldInput change the state', () => {
		console.log('gameForm.state()', gameForm.state());
		Object.keys(gameForm.state()).forEach((fieldInput: string) => {
			const value = `new value ${fieldInput}`;
			const input = gameForm.find(`[data-test-id="input-${fieldInput}"]`);
			if (input.props().onChange) {
				// @ts-ignore
				input.props().onChange({ value, name: fieldInput });
			}
			gameForm.update();
			expect(gameForm.find(`[data-test-id="input-${fieldInput}"]`).props().value).toEqual(value);
			expect(gameForm.state(fieldInput)).toEqual(value)
		})
	})
});

describe("Gameform markup", () => {
	it('match snapshoot', () => {
		const onAddGameMock = jest.fn();
		const gameForm = shallow(<GameForm onAddGame={onAddGameMock}/>);

		expect(gameForm).toMatchSnapshot();
	});
});
