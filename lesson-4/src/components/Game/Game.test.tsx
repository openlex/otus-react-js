import React from "react";
import { Game } from "./Game";
import { render, shallow } from "enzyme";

describe("Game item markup", () => {
	const props = {
		id: '1',
		title: 'Title',
	}
	const defaultGame = shallow(<Game {...props}/>);

	it("check title content is the same as in props", () => {
		expect(defaultGame.find('[data-test-id="title"]').text()).toEqual(props.title)
	});

	it("has rating, if is set", () => {
		defaultGame.setProps({
			rating: 5,
		})

		expect(defaultGame.find('[data-test-id="rating"]').length).toBe(1);
	});

	it("has no rating, if it is not set", () => {
		defaultGame.setProps({
			rating: undefined,
		})

		expect(defaultGame.find('[data-test-id="rating"]').length).toBe(0);
	});

	it("has no rating, if it is set 0", () => {
		defaultGame.setProps({
			rating: 0,
		})

		expect(defaultGame.find('[data-test-id="rating"]').length).toBe(0);
	});

	it("rating is the same as in props", () => {
		const rating = 5;
		const game = render(<Game {...props} rating={rating}/>);

		expect(game.find('[data-test-id="rating"]').text()).toEqual(rating.toString())
	});

	it("has description, if is set", () => {
		const game = render(<Game {...props} description="Desc"/>);

		expect(game.find('[data-test-id="description"]').length).toBe(1);
	});

	it("Has no description, if it is not set", () => {
		expect(defaultGame.find('[data-test-id="description"]').length).toBe(0);
	});

	it("has genres if it exist", () => {
		const game = shallow(<Game {...props} genres={['1','2','3']}/>);

		expect(game.find('[data-test-id="genres-wrapper"]').length).toBe(1);
	});

	it("Match Snapshot", () => {
		const game = shallow(<Game {...props} rating={4} description="Desc" genres={['1','2','3']}/>);

		expect(game).toMatchSnapshot();
	});

})
