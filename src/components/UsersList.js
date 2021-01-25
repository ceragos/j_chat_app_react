import React from 'react';
import Gravatar from './Gravatar';

class UsersListItem extends React.Component {
    render() {
        return (
            <li className="person" data-chat="person1">
                <div className="user">
                    <Gravatar email={this.props.user.email}/>
                    <span className="status busy" />
                </div>
                <p className="name-time">
                    <span className="name">{this.props.user.name}</span>
                    <span className="time">{this.props.user.time}</span>
                </p>
            </li>
        );
    }
}

function UsersList(props) {
    const users = props.users;

    return (
        <div>
            <div className="users-container">
                <ul className="users">
                    {users.map(user => {
                        return (
                            <UsersListItem user={user} />
                        );
                    })}
                </ul>
            </div>
        </div>

    );
}

export default UsersList;
