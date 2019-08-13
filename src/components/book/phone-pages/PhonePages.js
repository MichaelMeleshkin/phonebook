import React from 'react';
import Page from '../Page';
import Phones from '../phones/Phones';
import Search from '../search/Search'
import { Link } from "react-router-dom";
import { getFirstPageData, getSecondPageData, paginationLimit } from './PhonePagesService';

class PhonePages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isNextLinkVisible: false,
        };

        const { number, searchQuery } = this.props.match.params;
        this.firstPageData = getFirstPageData({ number, searchQuery });
        this.secondPageData = getSecondPageData({ number, searchQuery });

        this.checkNextLinkVisibility = this.checkNextLinkVisibility.bind(this);
    }

    checkNextLinkVisibility(responce) {
        this.setState(state => ({
            isNextLinkVisible: responce && responce.length && responce.length === paginationLimit
        }));
    }

    render() {
        return (
            <div>
                <Page className="first-page">
                    <Search search={this.props.match.params.searchQuery} />
                    <Phones data={this.firstPageData} {...this.props} />
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