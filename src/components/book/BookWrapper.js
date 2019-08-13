import React from 'react';

import './BookWrapper.scss'
import { save as saveSessionItem, get as getSessionItem } from '../../services/sessionStorageService'

export default function withBookWrapper(Component) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isToggleOn: getSessionItem('isToggleOn'),
            };
            this.openBook = this.openBook.bind(this);
        }

        openBook() {
            saveSessionItem('isToggleOn', true);
            this.setState(state => ({
                isToggleOn: true
            }));
        };

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
