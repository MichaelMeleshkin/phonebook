import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.scss';
import withBookWrapper from './book/BookWrapper';
import PhonePages from './book/phone-pages/PhonePages';

function App() {
    return (
        <Router>
            <div>
                <Route exact path="/" render={() =>
                    <Redirect to="/page/1"/>
                }/>

                <Route path="/page/:number/:searchQuery?" render={(routeProps) => {
                    const Book = withBookWrapper(PhonePages);
                    return <Book {...routeProps}/>;
                }} />
            </div>
        </Router>
    );
}

export default App;
