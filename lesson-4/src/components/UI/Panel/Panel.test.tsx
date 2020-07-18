import React from "react";
import { Panel } from "./Panel";
import { shallow } from "enzyme";

describe("Panel item markup", () => {
	it("match Snapshot", () => {
		const panel = shallow(<Panel>Panel content</Panel>);

		expect(panel).toMatchSnapshot();
	});

})
