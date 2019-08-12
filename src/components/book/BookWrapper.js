import React from 'react';

import './BookWrapper.scss'
import { save as saveSessionItem, get as getSessionItem } from '../../services/sessionStorageService'

export default function withBookWrapper(Component) {
    // const { Phones: FirstElement, data: fData } = firstPageData;
    // const { Phones: SecondElement, data: sData } = secondPageData;

    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isToggleOn: getSessionItem('isToggleOn'),
                // search: this.props.match.params.search || '',
            };
            this.openBook = this.openBook.bind(this);
            // this.onChangeHandler = this.onChangeHandler.bind(this);

            // Promise.all([fData, sData]).then(([firstData, secondData]) => {
            //     this.setState(state => ({
            //         isNextLinkVisible: secondData && secondData.length && secondData.length === paginationLimit
            //     }));
            // })
        }

        openBook() {
            saveSessionItem('isToggleOn', true);
            this.setState(state => ({
                isToggleOn: true
            }));
        };

        // onChangeHandler(e) {
        //     this.setState({search: e.target.value});
        // }

        render() {
            return (
                <div className={this.state.isToggleOn ? 'open book' : 'book'}>
                    <div className="back-page"></div>
                    <div className="under-last-page"></div>
                    <Component {...this.props} />
                    <div className="under-first-page"></div>
                    <div className="front-page">
                        Phone Book
                        <button className="note" onClick={this.openBook}>Click here to Open</button>
                    </div>
                </div>
            );
        }
    };
}
