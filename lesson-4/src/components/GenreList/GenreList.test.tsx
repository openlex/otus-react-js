import React from "react";
import { GenreList } from "./GenreList";
import { shallow } from "enzyme";

describe("GenreList", () => {

	it('has one element (and NO comma at end)', () => {
		const genreList = shallow(<GenreList genres={['1']}/>);
		expect(genreList.text()).toEqual('1');
	});

	it('has several element with ", " between', () => {
		const genreList = shallow(<GenreList genres={['1', '2', '3']}/>);

		expect(genreList.text()).toEqual('1, 2, 3');
	});

})
