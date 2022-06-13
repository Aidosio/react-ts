import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import UserItem from "../components/UserItem";
import List from "../components/List";
import {useNavigate} from "react-router-dom";

const UserPage:FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const navigate = useNavigate()

    useEffect(()=> {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }


    return (
        <List
            renderItem={(user: IUser) => <UserItem onClick={(user) => navigate('/users/' + user.id)} user={user} key={user.id}/>}
            items={users}
        />
    );
};

export default UserPage;