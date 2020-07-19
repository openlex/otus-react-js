import React from 'react';
import { FieldInput, IFieldInputData, IFieldInputProps } from '@components';
import { shallow } from "enzyme";

describe("FieldInput item", () => {
	const defaultProps = {
		name: 'Name',
		label: 'Label',
		value: 'Value'
	};
	const testChangeEvent = (props: IFieldInputProps) => {
		const fieldInput = shallow(<FieldInput {...props}/>);
		const node = fieldInput.find('[data-test-id="fieldInput"]');
		const newValue = 'Any text';

		expect(node.prop('value')).toEqual(props.value);
		node.simulate('change', { target: { value: 'Any text'} });
		expect(props.value).toEqual(newValue);
	};
	const defaultFieldInput = shallow(<FieldInput {...defaultProps}/>);

	it('check input Name', () => {
		expect(defaultFieldInput.find('[data-test-id="fieldInput"]').props().name).toEqual(defaultProps.name)
	})

	it('check textarea Name', () => {
		const props = {
			...defaultProps,
			isTextArea: true,
		}

		expect(defaultFieldInput.find('[data-test-id="fieldInput"]').props().name).toEqual(props.name)
	})

	it('Label exist if it set in props', () => {
		expect(defaultFieldInput.find('[data-test-id="fieldInputLabel"]').length).toBe(1)
	})

	it('NO Label if it is not set in props', () => {
		defaultFieldInput.setProps({
			label: undefined
		})
		expect(defaultFieldInput.find('[data-test-id="fieldInputLabel"]').length).toBe(0)
	})

	it('input has value if it is set in props', () => {
		expect(defaultFieldInput.find('[data-test-id="fieldInput"]').props().value).toEqual(defaultProps.value)
	})

	it('check type', () => {
		const props = {
			...defaultProps,
			type: 'number',
		};
		const fieldInput = shallow(<FieldInput {...props}/>);

		expect(fieldInput.find('[data-test-id="fieldInput"]').props().type).toEqual(props.type)
	})

	it('check default type', () => {
		const props = {
			...defaultProps,
		};
		const defaultType = 'text';
		const fieldInput = shallow(<FieldInput {...props}/>);

		expect(fieldInput.find('[data-test-id="fieldInput"]').props().type).toEqual(defaultType)
	})

	it('change input text', () => {
		const props = {
			...defaultProps,
			onChange: ( { value }: IFieldInputData) =>  {
				props.value = value
			}
		};

		testChangeEvent(props);
	})

	it('change textarea text', () => {
		const props = {
			...defaultProps,
			isTextArea: true,
			onChange: ( { value }: IFieldInputData) =>  {
				props.value = value
			}
		};

		testChangeEvent(props);
	})

	it("match Snapshot", () => {
		expect(defaultFieldInput).toMatchSnapshot();
	});

})
