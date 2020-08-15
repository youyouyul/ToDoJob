import React from 'react'
import listStyle from '../ToDoList/todoList.module.css';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';

const ToDo = ({ todo }) => {
    const { title, completed } = todo;

    const lineStyle = {
        textDecoration: 'line-through'
    }

    return (
        <li>   
            <div className={ listStyle.checkbox } >
                { completed ? <MdCheckBox /> : <MdCheckBoxOutlineBlank /> }
                <div className={ listStyle.label } style={ completed ? lineStyle : null}>{ title }</div>
            </div>
            <div className={ listStyle.remove }>
                <MdRemoveCircleOutline />
            </div>
        </li>
    )
};

export default ToDo
