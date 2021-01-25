import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UsersList from "../components/UsersList";

export default class Chat extends Component {
    state = {
        users: [
            {
                username: 'jesus',
                time: '10:21',
                email: 'jesus@gmail.com'
            }
        ],
        chats: [
            {
                user: {
                    username: 'jesus',
                    time: '10:21',
                    email: 'jesus@gmail.com'
                },
                created: '10:21',
                content: 'Hola',
                owner: true
            }
        ]
    };

    render() {
        return (
            <div className="container">

                <!-- Page header start -->
                <div className="page-title">
                    <div className="row gutters">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <h5 className="title text-center">J Chat App</h5>
                        </div>
                    </div>
                </div>
                <!-- Page header end -->

                <!-- Content wrapper start -->
                <div className="content-wrapper">

                    <!-- Row start -->
                    <div className="row gutters">

                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                            <div className="card m-0">
                                <!-- Row start -->
                                <div className="row no-gutters">
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
                                        <UsersList users={this.state.users} />
                                    </div>
                                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
                                        <ChatsList  chats={this.state.chats} />
                                    </div>
                                </div>
                                <!-- Row end -->
                            </div>
                        </div>
                    </div>
                    <!-- Row end -->
                </div>
                <!-- Content wrapper end -->
            </div>
        );
    }
}
