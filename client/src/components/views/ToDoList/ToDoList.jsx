import React, { useState, useCallback } from 'react'
import ToDo from './ToDo';
import listStyle from '../ToDoList/todoList.module.css';
import { FaPlus, FaRegTimesCircle } from 'react-icons/fa';

function ToDoList() {
    const presetValues = [{
        id: 1,
        title : "Wake up at 5am",
        completed : true
      }, {
        id: 2,
        title : "Learn how to use React.js",
        completed : false
      }, {
        id: 3,
        title : "Drink coffee",
        completed : false
    }];

    const [value, setValue] = useState('');
    const [todoJob, settodoJob] = useState([]);
    const [todoToday, settodoToday] = useState([]);

    const onChange = (e) => {
        setValue(e.currentTarget.value);
    };

    const list = presetValues.map( index =>
        <ToDo todo={ index } key={ index.id } />
    );

    return (
        <div className={ listStyle.todoContainer }>
            {/* To Do Job */}
            <div className={ listStyle.todoBox }>
                <div className={ listStyle.header }>
                    <input className={ listStyle.newTodo } 
                           placeholder="To-Do for Job"
                           value={ value } 
                           onChange={ onChange }
                    />
                    <button className={ listStyle.addBtn } type="submit"><FaPlus /></button>
                </div>
                <div className={ listStyle.listBox }>
                    <ul className={ listStyle.list }>
                        { list }
                    </ul>
                </div>
            </div>

            {/* To Do Today */}
            <div className={ listStyle.todoBox }>
                <div className={ listStyle.header }>
                    <input className={ listStyle.newTodo } 
                           placeholder="To-Do for Today"/>
                    <button className={ listStyle.addBtn }><FaPlus /></button>
                </div>
                <div className={ listStyle.listBox }>
                    
                </div>
            </div>
        </div>
    )
}

export default ToDoList
