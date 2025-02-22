import {makeAutoObservable} from "mobx";
import fetchTodo from "../api/fetchTodo.tsx";
import fetchUsers from "../api/fetchUsers.tsx";
import {ITodos} from "../interfaces/ITodos.tsx";
import {IUsers} from "../interfaces/IUsers.tsx";

class TableStore {
    todos: ITodos | null = null
    users: IUsers | null = null
    constructor() {
        makeAutoObservable(this)
    }
    getData() {
        fetchTodo().then()
        fetchUsers().then()
    }
    updateTodosStore(todos: ITodos) {
        this.todos = todos
    }
    updateUsersStore(users: IUsers) {
        this.users = users
    }
}

const tableStore = new TableStore()
export default tableStore