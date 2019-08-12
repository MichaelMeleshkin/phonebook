import React from 'react';
import './Phones.scss'
import PhoneItem from '../phone-item/PhoneItem'

class Phones extends React.Component {
    componentDidMount() {
        this.props.data.then((responce) => {
            this.setState({ users: responce });
            if (this.props.onPromiceResolve) {
                this.props.onPromiceResolve(responce);
            }
        });
    }

    render() {
        if (this.state && this.state.users && this.state.users.length) {
            const items = this.state.users.map((user) => <PhoneItem key={user.id} name={user.name} phone={user.phone}/>);
            return (<ul className="phones">{items}</ul>);
        } else {
            return <div className="notification">There are no records</div>;
        }
    }
}

export default Phones;