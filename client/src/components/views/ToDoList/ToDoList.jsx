import React, { useState, useEffect } from 'react'
import ToDo from './ToDo';
import listStyle from '../ToDoList/todoList.module.css';
import { FaPlus } from 'react-icons/fa';
import Axios from 'axios';

function ToDoList() {
    const userName = 'yuri';

    const [jobVal, setJobVal] = useState('');
    const [todayVal, setTodayVal] = useState('');
    const [todoAll, setTodoAll] = useState([]);

    useEffect(() => {
        let body = {
            userName: userName
        }
        Axios.get('/api/todos/getTodoList', body)
            .then(response => {
                if(response.data.success) {
                    setTodoAll(response.data.todoList);
                } else {
                    console.log("todolist 가져오기 실패");
                }
            })
    }, [todoAll]);

    const onChangeJobVal = (e) => {
        setJobVal(e.target.value);
    };

    const onChangeTodayVal = e => {
        setTodayVal(e.target.value);
    }

    const onClickJob = e => {
        e.preventDefault();

        let body = {
            userName: userName,
            context: jobVal,
            todoType: 'JOB',
            checkFlag: false
        }

        Axios.post('/api/todos/insert', body)
            .then(response => {
                if(!response.data.success) {
                    alert("업로드에 실패했습니다.");
                }
            });

        setJobVal("");
    }

    const onclickToday = e => {
        e.preventDefault();

        let body = {
            userName: userName,
            context: todayVal,
            todoType: 'TODAY',
            checkFlag: false
        }

        Axios.post('/api/todos/insert', body)
            .then(response => {
                if(!response.data.success) {
                    alert("업로드에 실패했습니다.");
                }
            });

        setTodayVal("");
    }

    const onToggle = ( id, checkFlag ) => {
        let body = {
            _id: id,
            checkFlag: checkFlag
        }

        Axios.post('/api/todos/update', body)
            .then(response => {
                if(!response.data.success) {
                    console.log(response.data.err);
                }
            });
    }

    const onRemove = id => {
        let body = {
            _id: id
        }

        Axios.post('/api/todos/delete', body)
            .then(response => {
                if(!response.data.success) {
                    console.log(response.data.err);
                }
            });
    }

    const jobList = todoAll.filter(todo => todo.todoType === "JOB").map( index =>
        <ToDo todo={ index } key={ index._id } onToggle={ onToggle } onRemove={ onRemove }/>
    );

    const todayList = todoAll.filter(todo => todo.todoType === "TODAY").map( index =>
        <ToDo todo={ index } key={ index._id } onToggle={ onToggle } onRemove={ onRemove }/>
    );

    return (
        <div className={ listStyle.todoContainer }>
            {/* To Do Job */}
            <div className={ listStyle.todoBox }>
                <div className={ listStyle.header }>
                    <input className={ listStyle.newTodo } 
                           placeholder="To-Do for Job"
                           value={ jobVal } 
                           onChange={ onChangeJobVal }
                    />
                    <button className={ listStyle.addBtn } type="button" onClick={ onClickJob }><FaPlus /></button>
                </div>
                <div className={ listStyle.listBox }>
                    <ul className={ listStyle.list }>
                        { jobList }
                    </ul>
                </div>
            </div>

            {/* To Do Today */}
            <div className={ listStyle.todoBox }>
                <div className={ listStyle.header }>
                    <input className={ listStyle.newTodo } 
                           placeholder="To-Do for Today"
                           value={ todayVal}
                           onChange={ onChangeTodayVal }
                    />
                    <button className={ listStyle.addBtn } type="button" onClick={ onclickToday }><FaPlus /></button>
                </div>
                <div className={ listStyle.listBox }>
                <ul className={ listStyle.list }>
                        { todayList }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ToDoList