import React from 'react';
import './PhoneItem.scss'

class PhoneItem extends React.Component {
    render() {
        return (
            <li className="phone-item">
                <span className="row-info">{this.props.name}</span>
                <span className="row-info">{this.props.phone}</span>
            </li>
        )
    }
}

export default PhoneItem;