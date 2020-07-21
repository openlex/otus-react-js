import React from 'react';
import { shallow } from "enzyme";
import { Games } from '@containers';

describe("Games page markup", () => {
	it('match snapshoot', () => {
		const onAddGameMock = jest.fn();
		const gameForm = shallow(<Games/>);

		expect(gameForm).toMatchSnapshot();
	});
});
