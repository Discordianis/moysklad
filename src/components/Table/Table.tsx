import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { autorun, toJS } from 'mobx';
import tableStore from '../../store/tableStore.tsx';
import { IUsers, IUsersInfo } from '../../interfaces/IUsers.tsx';
import { ITodos } from '../../interfaces/ITodos.tsx';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Avatar, Typography, Paper } from '@mui/material';
import './Table.css'

const UserTodoTable: React.FC = observer(() => {
    const [users, setUsers] = useState<IUsers | null>(null);
    const [todos, setTodos] = useState<ITodos | null>(null);

    useEffect(() => {
        const disposer = autorun(() => {
            setUsers(toJS(tableStore.users));
            setTodos(toJS(tableStore.todos));
        });
        return () => disposer();
    }, []);

    const getTodoCount = (userId: number): number => {
        if (!todos) return 0;
        return Object.values(todos).filter(todo => todo.userId === userId).length;
    };

    return (
        <div className={'table_root'}>
            <Typography variant="h4" gutterBottom>User To-Do Table</Typography>
            <Typography variant="subtitle1" color={'#FFFFFF4D'} sx={{marginBottom: '16px'}} gutterBottom>User task table for effective planning.</Typography>

            <TableContainer sx={{border: 'gray 1px solid', borderRadius: '8px'}} component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow sx={{whiteSpace: 'nowrap', background: '#3f464c'}}>
                            <TableCell sx={{padding: '10px 16px', color: '#FFFFFF4D'}} className={'table_user_index'}>#</TableCell>
                            <TableCell sx={{padding: '10px 16px', color: '#FFFFFF4D'}}>Username</TableCell>
                            <TableCell sx={{padding: '10px 16px', color: '#FFFFFF4D'}}>To-Do Count</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{background: '#373e45'}}>
                        {users && Object.values(users).map((user: IUsersInfo, index) => (
                            <TableRow key={user.id} className={'table_content_row'}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell className={'table_user_root'} sx={{padding: '10px'}}>
                                    <div>
                                        <Avatar>{user.name[0]}</Avatar>
                                        <div className={'table_user_names'}>
                                            <Typography variant="body1" fontWeight={500}>{user.name}</Typography>
                                            <Typography variant="body2" color="#FFFFFF66">{user.email}</Typography>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className={'table_todo_count'}>{getTodoCount(user.id)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
});

export default UserTodoTable;
