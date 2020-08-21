import React, { useState, useCallback, useEffect } from 'react'
import ToDo from './ToDo';
import listStyle from '../ToDoList/todoList.module.css';
import { FaPlus } from 'react-icons/fa';
import Axios from 'axios';

function ToDoList() {
    const userName = 'yuri';

    const [jobVal, setJobVal] = useState('');
    const [todayVal, setTodayVal] = useState('');
    const [todoAll, setTodoAll] = useState([]);
    const [todoJob, setTodoJob] = useState([]);
    const [todoToday, setTodoToday] = useState([]);

    useEffect(() => {
        Axios.get('/api/todos/getTodoList')
            .then(response => {
                if(response.data.success) {
                    let todoList = response.data.todoList;

                    setTodoAll(todoList);
                    setTodoJob(todoList.filter(index => index.todoType === "JOB"));
                    setTodoToday(todoList.filter(index => index.todoType === "TODAY"));
                } else {
                    console.log("todolist 가져오기 실패");
                }
            })
    }, []);

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
                if(response.data.success) {
                    console.log('upload');
                } else {
                    alert("업로드에 실패했습니다.");
                }
            });
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
                if(response.data.success) {
                    console.log('upload');
                } else {
                    alert("업로드에 실패했습니다.");
                }
            });
    }

    const onToggle = useCallback(
        id => {
          setTodoAll(todoAll.map(todo =>
            todo._id === id ? { ...todo, checkFlag: !todo.checkFlag } : todo ))  
        },
        [todoAll],
    );

    const jobList = todoJob.map( index =>
        <ToDo todo={ index } key={ index._id } onToggle={ onToggle } userName = { userName }/>
    );

    const todayList = todoToday.map( index =>
        <ToDo todo={ index } key={ index._id } onToggle={ onToggle }/>
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



/*
user 정보 받아와서 해당 user의 todolist 목록 가져온다
=> todayList, jobList

기능)
1. 체크
2. 등록
3. 제거

*/