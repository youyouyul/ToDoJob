import React from 'react';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import ToDoList from '../../components/views/ToDoList/ToDoList';
import dashboartStyle from '../Dashboard/dashboard.module.css';

function Dashboard() {
    return (
        <div>
            <Header />
            <div className={ dashboartStyle.boxContainer } >
                {/* To Do */}
                <ToDoList />


                {/* 바로가기 */}

                {/* 서류 */}
                
                {/* 시험 */}
                
                {/* 1차 면접*/}
                
                {/* 2차 면접 */}
            </div>
            
            <Footer />
        </div>
    )
}

export default Dashboard
