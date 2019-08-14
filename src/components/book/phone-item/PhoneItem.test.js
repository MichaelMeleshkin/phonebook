import React from 'react';
import { shallow } from 'enzyme';
import PhoneItem from './PhoneItem';


describe('The Phone list item viewer', () => {
    it('should render components with name and phone component', () => {
        const props = {
            name: 'John Doe',
            phone: '098 7654 3210',
        };
        const phoneItemMock = shallow(<PhoneItem {...props} />);
        expect(phoneItemMock.containsAllMatchingElements([
            <span>John Doe</span>,
            <span>098 7654 3210</span>,
        ])).toEqual(true);
        expect(phoneItemMock.find('.phone-item')).toHaveLength(1);
        expect(phoneItemMock.find('.row-info')).toHaveLength(2);
    });
});
