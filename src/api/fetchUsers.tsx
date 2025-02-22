import tableStore from "../store/tableStore.tsx";

const fetchTodo = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        if (Array.isArray(data)) {
            tableStore.updateUsersStore(data);
        } else {
            console.error('Ошибка: Ожидался массив данных', data);
        }
    } catch (error) {
        console.error('Ошибка при загрузке todos:', error);
    }
};
export default fetchTodo;
