import React from 'react';
import { Link } from "react-router-dom";
import './Search.scss'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: this.props.search || '',
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({search: e.target.value});
    }

    render() {
        return (
            <div className="search">
                <input className="search-input"
                       type="text"
                       defaultValue={this.state.search}
                       onChange={this.onChangeHandler} />
                <Link to={`/page/1/${this.state.search}`}>
                    Search
                </Link>
            </div>
        )
    }
}

export default Search;