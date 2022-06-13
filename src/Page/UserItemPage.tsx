import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

interface UserItemPageParams {
    id: string
}

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null)
    // @ts-ignore
    const params = useParams<UserItemPageParams>()
    const navigate = useNavigate();

    useEffect(()=> {
        fetchUser()
    }, [])

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
            setUser(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <button onClick={() => navigate('/users')}>Back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.street}
            </div>
        </div>
    );
};

export default UserItemPage;