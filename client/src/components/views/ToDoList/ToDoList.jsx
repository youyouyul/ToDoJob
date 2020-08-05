import React, { useState } from 'react'
import listStyle from '../ToDoList/todoList.module.css';

function ToDoList() {
    const presetValues = [{
        "title":"Wake up at 5am",
        "completed":true
      }, {
        "title":"Learn how to use Vue.js",
        "completed":false
      }, {
        "title":"Drink coffee",
        "completed":false
    }];

    const [mode, setMode] = useState('view');

    const onClickModeHandle = (e) => {
        setMode(mode === 'view' ? 'mode': 'view');
    }

    const list = presetValues.map((index) =>
        <li className={ mode === 'edit' ? listStyle.editing : null }>
            { mode === 'view' ?
                <div className={ listStyle.view }>
                    <input type="checkbox" />
                    <label className={ listStyle.label} onClick={onClickModeHandle} >{ index.title }</label>
                    <button className={ listStyle.destroy } onClick ><i className="fa fa-times"></i></button>
                </div> 
            :
                <input className={ listStyle.edit } type="text" />
            }
        </li>
    );

    return (
        <div className={ listStyle.todoContainer }>
            {/* To Do Job */}
            <div className={ listStyle.todoBox }>
                <div className={ listStyle.header }>
                    <input className={ listStyle.newTodo } 
                           placeholder="To-Do for Job"/>
                </div>
                <button className={ listStyle.addBtn }><i className="fa fa-plus"></i></button>
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
                </div>
                <button className={ listStyle.addBtn }><i className="fa fa-plus"></i></button>
                <div className={ listStyle.listBox }>
                    
                </div>
            </div>
        </div>
    )
}

export default ToDoList
