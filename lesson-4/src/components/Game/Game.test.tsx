import React from "react";
import { Game } from "./Game";
import { shallow } from "enzyme";

describe("Game item", () => {
	it("shallow", () => {
		const props = {
			id: '1',
			title: 'Title',
		}
		shallow(<Game {...props}/>)
	});
})
