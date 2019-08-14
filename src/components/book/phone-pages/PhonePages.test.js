import React from 'react';
import { Link } from "react-router-dom";
import { shallow } from 'enzyme';
import Search from '../search/Search';
import PhonePages from './PhonePages';
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

    it('should call API with params', () => {
        const getFirstPageDataSpy = jest.spyOn(api, 'getFirstPageData');
        const getSecondPageDataSpy = jest.spyOn(api, 'getSecondPageData');

        expect(getFirstPageDataSpy).toHaveBeenCalledTimes(1);
        expect(getSecondPageDataSpy).toHaveBeenCalledTimes(1);

        expect(getFirstPageDataSpy).toHaveBeenCalledWith(fakeRouteProps.match.params);
        expect(getSecondPageDataSpy).toHaveBeenCalledWith(fakeRouteProps.match.params);
    });

    it('should render component with search component', () => {
        expect(phonePagesMock.find(Search)).toHaveLength(1);
    });

    it('should render component with "next page" link only', () => {
        expect(phonePagesMock.state().isNextLinkVisible).toEqual(false);
        phonePagesMock.setState({ isNextLinkVisible: true });
        expect(phonePagesMock.find(Link)).toHaveLength(1);
    });

    it('should render component with "prev page" link only', () => {
        phonePagesMock.unmount();
        fakeRouteProps.match.params.number = 2;
        phonePagesMock = shallow(<PhonePages {...fakeRouteProps} />);

        expect(phonePagesMock.find(Link)).toHaveLength(1);
    });

    it('should call checker for "next page" link', () => {
        expect(phonePagesMock.state().isNextLinkVisible).toEqual(false);
        phonePagesMock.instance().checkNextLinkVisibility(new Array(api.paginationLimit));
        expect(phonePagesMock.state().isNextLinkVisible).toEqual(true);
    });
});
