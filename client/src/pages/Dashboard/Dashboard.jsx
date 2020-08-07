import React from 'react';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import ToDoList from '../../components/views/ToDoList/ToDoList';
import dashboartStyle from '../Dashboard/dashboard.module.css';
import RecruitsSite from '../../components/views/RecruitsSite/RecruitsSite';
import Application from '../../components/views/Application/Application';

function Dashboard() {
    return (
        <div>
            <Header />
            <div className={ dashboartStyle.boxContainer } >
                {/* To Do */}
                <ToDoList />
                <div className={ dashboartStyle.gap }></div>
                {/* 바로가기 */}
                <RecruitsSite />
                <div className={ dashboartStyle.gap }></div>
                {/* 서류 */}
                <Application />
                <div className={ dashboartStyle.gap }></div>
                {/* 시험 */}
                
                {/* 1차 면접*/}
                
                {/* 2차 면접 */}
            </div>
            
            <Footer />
        </div>
    )
}

export default Dashboard
