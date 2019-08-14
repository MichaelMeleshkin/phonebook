import React from 'react';
import { Link } from "react-router-dom";
import Page from '../Page';
import Phones from '../phones/Phones';
import Search from '../search/Search'
import * as phonePagesService from './PhonePagesService';
import './PhonePages.scss';

class PhonePages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isNextLinkVisible: false,
        };

        const { number, searchQuery } = this.props.match.params;
        this.firstPageData = phonePagesService.getFirstPageData({ number, searchQuery });
        this.secondPageData = phonePagesService.getSecondPageData({ number, searchQuery });
        this.firstPageNumber = phonePagesService.getFirstPageNumber(number);
        this.secondPageNumber = phonePagesService.getSecondPageNumber(number);

        this.checkNextLinkVisibility = this.checkNextLinkVisibility.bind(this);
    }

    checkNextLinkVisibility(responce) {
        this.setState(state => ({
            isNextLinkVisible: responce && responce.length && responce.length === phonePagesService.paginationLimit
        }));
    }

    render() {
        return (
            <div>
                <Page className="first-page">
                    <Search search={this.props.match.params.searchQuery} />
                    <Phones data={this.firstPageData} {...this.props} />
                    <div className="page-number">{this.firstPageNumber}</div>
                    {
                        this.props.match.params.number > 1 ?
                            <Link className="page-navigation"
                                  to={
                                      this.props.match.params.searchQuery ?
                                      `/page/${+this.props.match.params.number-1}/${this.props.match.params.searchQuery}` :
                                      `/page/${+this.props.match.params.number-1}`
                                  }>
                                Previous Page
                            </Link> : ''
                    }
                </Page>
                <Page className="last-page">
                    <Phones data={this.secondPageData} {...this.props}
                                onPromiceResolve={this.checkNextLinkVisibility}/>
                    <div className="page-number">{this.secondPageNumber}</div>
                    {
                        this.state.isNextLinkVisible ?
                            <Link className="page-navigation"
                                  to={
                                      this.props.match.params.searchQuery ?
                                      `/page/${+this.props.match.params.number+1}/${this.props.match.params.searchQuery}` :
                                      `/page/${+this.props.match.params.number+1}`
                                  }>
                                Next Page
                            </Link> : ''
                    }
                </Page>
            </div>
        )
    }
}

export default PhonePages;