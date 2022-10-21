import { Avatar, Button, List, Input } from 'antd';
import React, { useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import UsersData from './ListOfUser';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { deleteUser, updateUsername } from '../features/Users';

const User = () => {
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.users.value);
    const [newUsername, setNewUsername] = useState('');

    return (
        <div id="edit-user">
            <List
                className="edit-user-list"
                itemLayout="horizontal"
                dataSource={userList}
                renderItem={(item) => (
                    <List.Item
                        actions={[<Input
                            placeholder="Type new user name"
                            onChange={(e) => setNewUsername(e.target.value)}
                        />,

                        <Button key="list-loadmore-edit"
                            type="primary"
                            onClick={() => {
                                dispatch(updateUsername({ id: item.id, username: newUsername }));

                            }}
                            >
                            UPDATE
                        </Button>,
                        <Button style={{ color: "red" }} onClick={() => {
                            dispatch(deleteUser({ id: item.id }));
                        }}>
                            <DeleteOutlined />
                        </Button>
                        ]}
                    >


                        <List.Item.Meta
                            avatar={<Avatar src="https://lh3.googleusercontent.com/a/ALm5wu1ZjtdumhBqbi_lksKf3yzT3uITZvR6MtkJUgTF9iY=s192-c-rg-br100" />}
                            title={<a href="https://ant.design">{item.name}</a>}
                            description={item.username}
                        />

                    </List.Item>
                )}
            />

        </div>

    );
};
export default User;