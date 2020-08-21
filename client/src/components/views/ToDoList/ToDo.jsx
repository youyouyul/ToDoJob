import React from 'react'
import listStyle from '../ToDoList/todoList.module.css';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';

const ToDo = ({ todo, onToggle, userName }) => {
    const { _id, context, checkFlag } = todo;

    const lineStyle = {
        textDecoration: 'line-through'
    }

    return (
        <li>   
            <div className={ listStyle.checkbox } onClick={ () => onToggle(_id) }>
                { checkFlag ? <MdCheckBox /> : <MdCheckBoxOutlineBlank /> }
                <div className={ listStyle.label } style={ checkFlag ? lineStyle : null}>{ context }</div>
            </div>
            <div className={ listStyle.remove }>
                <MdRemoveCircleOutline />
            </div>
        </li>
    )
};

export default ToDo
