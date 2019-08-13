import React from 'react';
import { shallow } from 'enzyme';
import PhonePages from './PhonePages';
import Search from '../search/Search'
import { Link } from "react-router-dom";
import * as api from './PhonePagesService';

jest.mock('./PhonePagesService.js');
describe('The Phone Page viewer', () => {
    let phonePagesMock, fakeRouteProps = {
        match: {
            params: {
                number: 1,
                searchQuery: '',
            }
        }
    };

    beforeEach(() => {
        phonePagesMock = shallow(<PhonePages {...fakeRouteProps} />);
    });

    afterEach(() => {
        phonePagesMock.unmount();
    });

    it('calls API with params', () => {
        const getFirstPageDataSpy = jest.spyOn(api, 'getFirstPageData');
        const getSecondPageDataSpy = jest.spyOn(api, 'getSecondPageData');

        expect(getFirstPageDataSpy).toHaveBeenCalledTimes(1);
        expect(getSecondPageDataSpy).toHaveBeenCalledTimes(1);

        expect(getFirstPageDataSpy).toHaveBeenCalledWith(fakeRouteProps.match.params);
        expect(getSecondPageDataSpy).toHaveBeenCalledWith(fakeRouteProps.match.params);
    });

    it('renders with search component', () => {
        expect(phonePagesMock.find(Search)).toHaveLength(1);
    });

    it('renders with "next page" link only', () => {
        expect(phonePagesMock.state().isNextLinkVisible).toEqual(false);
        phonePagesMock.setState({ isNextLinkVisible: true });
        expect(phonePagesMock.find(Link)).toHaveLength(1);
    });

    it('renders with "prev page" link only', () => {
        phonePagesMock.unmount();
        fakeRouteProps.match.params.number = 2;
        phonePagesMock = shallow(<PhonePages {...fakeRouteProps} />);

        expect(phonePagesMock.find(Link)).toHaveLength(1);
    });

    it('calls checker for "next page" link', () => {
        expect(phonePagesMock.state().isNextLinkVisible).toEqual(false);
        phonePagesMock.instance().checkNextLinkVisibility(new Array(api.paginationLimit));
        expect(phonePagesMock.state().isNextLinkVisible).toEqual(true);
    });

});


