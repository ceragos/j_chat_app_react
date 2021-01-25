import React, {Fragment} from 'react';
import Gravatar from './Gravatar';
import Chat from "../pages/Chat";
import UsersList from "./UsersList";

class ChatsListItem extends React.Component {
    render() {
        return (
            <div>
                <li className="chat-left">
                    <div className="chat-avatar">
                        <Gravatar email={this.props.chat.user.email}/>
                        <div className="chat-name">{this.props.chat.user.username}</div>
                    </div>
                    <div className="chat-text">
                        {this.props.chat.content}
                    </div>
                    <div className="chat-hour">
                        {this.props.chat.created} <span className="fa fa-check-circle" />
                    </div>
                </li>
                <li className="chat-right">
                    <div className="chat-hour">
                        {this.props.chat.created} <span className="fa fa-check-circle" />
                    </div>
                    <div className="chat-text">
                        {this.props.chat.content}
                    </div>
                    <div className="chat-avatar">
                        <Gravatar email={this.props.chat.user.email}/>
                        <div className="chat-name">{this.props.chat.user.username}</div>
                    </div>
                </li>
            </div>
        );
    }
}

function ChatsList(props) {
    const chats = props.chats;
    return (
        <div>
            <div className="chat-container">
                <ul className="chat-box chatContainerScroll">
                    {chats.map(chat => {
                        return (
                            <ChatsListItem chat={chat} />
                        );
                    })}
                </ul>
            </div>
        </div>

    );
};

export default ChatsList;
