import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../types/types";
import TodoItem from "../components/TodoItem";
import List from "../components/List";
import axios from "axios";

const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(()=> {
        fetchTodos()
    }, [])

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <List
            renderItem={(todos: ITodo) => <TodoItem todo={todos} key={todos.id}/>}
            items={todos}
        />
    );
};

export default TodosPage;