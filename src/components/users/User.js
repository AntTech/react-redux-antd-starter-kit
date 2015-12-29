import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import {Row, Col} from 'react-bootstrap';
import {Icon, Spin} from 'antd';

import './user.css';

export default React.createClass({
    PropTypes: {

    },

    render() {
        const {user, loading, followed, follow, unfollow} = this.props;

        return (
            <Col xs={12} sm={4} className="user">
                <Col xs={3} className="photo"><Icon type="smile" /></Col>
                <Col xs={9}>
                    <h2>{user.display_name || user.username}</h2>
                    <div>{user.email}</div>
                    <div>
                        {
                            loading ?
                            <Icon type="loading" />:
                            followed ?
                            <a href="#" onClick={() => unfollow(user)}>- Unfollow</a>:
                            <a href="#" onClick={() => follow(user)}>+ Follow</a>
                        }
                    </div>
                </Col>
            </Col>
        );
    }
});
