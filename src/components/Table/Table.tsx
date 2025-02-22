import React, {useEffect, useState} from 'react';
import './Table.css'
import tableStore from "../../store/tableStore.tsx";
import {autorun, toJS} from "mobx";
import {observer} from "mobx-react";
import {IUsers} from "../../interfaces/IUsers.tsx";
import {ITodos} from "../../interfaces/ITodos.tsx";

const Table: React.FC = observer(() => {

    const [users, setUsers] = useState<IUsers | null>(null)
    const [todos, setTodos] = useState<ITodos | null>(null)

    useEffect(() => {
        const disposer = autorun(() => {
            const u = toJS(tableStore.users)
            const t = toJS(tableStore.todos)
            setUsers(u);
            setTodos(t);
        });
        return () => disposer();
    }, []);

    return (
        <div className={'table_root'}>
            <div className={'table_header_title'}>
                <h2>User To-Do Table</h2>
                <span>User task table for effective planning.</span>
            </div>
            <div className={'table'}>
                <div className={'table_header'}>

                </div>
                <div className={'table_content'}>
                    <div className={'table_content_index'}>

                    </div>
                    <div className={'table_content_user'}>
                        <div className={'table_content_user_avatar'}></div>
                        <div className={'table_content_user_names'}>
                            <div className={'table_content_user_name'}></div>
                            <div className={'table_content_user_email'}></div>
                        </div>
                    </div>
                    <div className={'table_content_count'}>

                    </div>
                </div>
            </div>
        </div>
    );
})

export default Table;