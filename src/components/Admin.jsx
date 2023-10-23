import React from 'react';
import "./Admin.scss"
import moment from "moment";
const Admin = () => {
    const currentDate = moment();
    const formattedDate = currentDate.format('MMMM, D');

    return (
        <div>
            <div className="app-container">
                <div className="app-header">
                    <div className="app-header-left">
                        <span className="app-icon"></span>
                        <p className="app-name">Admin</p>
                    </div>
                    <div className="app-header-right">
                        <button className="profile-btn">
                            <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" alt=""/>
                            <span>Aybüke C.</span>
                        </button>
                    </div>
                    <button className="messages-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                    </button>
                </div>
                <div className="app-content">
                    <div className="app-sidebar">
                        <a href="" className="app-sidebar-link active">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" /></svg>
                        </a>
                        <a href="" className="app-sidebar-link">
                            <svg className="link-icon feather feather-pie-chart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                <defs />
                                <path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z" />
                            </svg>
                        </a>
                        <a href="" className="app-sidebar-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" /></svg>
                        </a>
                        <a href="" className="app-sidebar-link">
                            <svg className="link-icon feather feather-settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                <defs />
                                <circle cx="12" cy="12" r="3" />
                                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                            </svg>
                        </a>
                    </div>
                    <div className="projects-section">
                        <div className="projects-section-header">
                            <p>Orders</p>
                            <p className="time">{formattedDate}</p>
                        </div>
                        <div className="projects-section-line">
                            <div className="projects-status">
                                <div className="item-status">
                                    <span className="status-number">45</span>
                                    <span className="status-type">In Progress</span>
                                </div>
                                <div className="item-status">
                                    <span className="status-number">24</span>
                                    <span className="status-type">Today's Orders</span>
                                </div>
                                <div className="item-status">
                                    <span className="status-number">62</span>
                                    <span className="status-type">Total Orders</span>
                                </div>
                            </div>
                        </div>
                        <div className="project-boxes jsGridView">
                            <div className="project-box-wrapper">
                                <div className="project-box" style={{backgroundColor:'#fee4cb'}}>
                                    <div className="project-box-header">
                                        <span>December 10, 2020</span>
                                        <div className="more-wrapper">
                                            <button className="project-btn-more">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
                                                    <circle cx="12" cy="12" r="1" />
                                                    <circle cx="12" cy="5" r="1" />
                                                    <circle cx="12" cy="19" r="1" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="project-box-content-header">
                                        <p className="box-content-header">Web Designing</p>
                                        <p className="box-content-subheader">Prototyping</p>
                                    </div>
                                    <div className="box-progress-wrapper">
                                        <p className="box-progress-header">Progress</p>
                                        <div className="box-progress-bar">
                                            <span className="box-progress" style={{width : '60%' , backgroundColor: '#ff942e'}}></span>
                                        </div>
                                        <p className="box-progress-percentage">60%</p>
                                    </div>
                                    <div className="project-box-footer">
                                        <div className="days-left" style={{color: '#ff942e'}}>
                                            2 Days Left
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-box-wrapper">
                                <div className="project-box" style={{backgroundColor: '#e9e7fd'}}>
                                    <div className="project-box-header">
                                        <span>December 10, 2020</span>
                                        <div className="more-wrapper">
                                            <button className="project-btn-more">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
                                                    <circle cx="12" cy="12" r="1" />
                                                    <circle cx="12" cy="5" r="1" />
                                                    <circle cx="12" cy="19" r="1" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="project-box-content-header">
                                        <p className="box-content-header">Testing</p>
                                        <p className="box-content-subheader">Prototyping</p>
                                    </div>
                                    <div className="box-progress-wrapper">
                                        <p className="box-progress-header">Progress</p>
                                        <div className="box-progress-bar">
                                            <span className="box-progress" style={{width: '50%', backgroundColor: "#4f3ff0"}}></span>
                                        </div>
                                        <p className="box-progress-percentage">50%</p>
                                    </div>
                                    <div className="project-box-footer">
                                        <div className="days-left" style={{color: "#4f3ff0"}}>
                                            2 Days Left
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-box-wrapper">
                                <div className="project-box">
                                    <div className="project-box-header">
                                        <span>December 10, 2020</span>
                                        <div className="more-wrapper">
                                            <button className="project-btn-more">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
                                                    <circle cx="12" cy="12" r="1" />
                                                    <circle cx="12" cy="5" r="1" />
                                                    <circle cx="12" cy="19" r="1" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="project-box-content-header">
                                        <p className="box-content-header">Svg Animations</p>
                                        <p className="box-content-subheader">Prototyping</p>
                                    </div>
                                    <div className="box-progress-wrapper">
                                        <p className="box-progress-header">Progress</p>
                                        <div className="box-progress-bar">
                                            <span className="box-progress" style={{width: '80%',  backgroundColor: '#096c86'}}></span>
                                        </div>
                                        <p className="box-progress-percentage">80%</p>
                                    </div>
                                    <div className="project-box-footer">
                                        <div className="days-left" style={{color: '#096c86'}}>
                                            2 Days Left
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-box-wrapper">
                                <div className="project-box" style={{backgroundColor: '#ffd3e2'}}>
                                    <div className="project-box-header">
                                        <span>December 10, 2020</span>
                                        <div className="more-wrapper">
                                            <button className="project-btn-more">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
                                                    <circle cx="12" cy="12" r="1" />
                                                    <circle cx="12" cy="5" r="1" />
                                                    <circle cx="12" cy="19" r="1" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="project-box-content-header">
                                        <p className="box-content-header">UI Development</p>
                                        <p className="box-content-subheader">Prototyping</p>
                                    </div>
                                    <div className="box-progress-wrapper">
                                        <p className="box-progress-header">Progress</p>
                                        <div className="box-progress-bar">
                                            <span className="box-progress" style={{width: '20%', backgroundColor: '#df3670'}}></span>
                                        </div>
                                        <p className="box-progress-percentage">20%</p>
                                    </div>
                                    <div className="project-box-footer">
                                        <div className="days-left" style={{color: '#df3670'}}>
                                            2 Days Left
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-box-wrapper">
                                <div className="project-box" style={{backgroundColor: '#c8f7dc'}}>
                                    <div className="project-box-header">
                                        <span>December 10, 2020</span>
                                        <div className="more-wrapper">
                                            <button className="project-btn-more">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
                                                    <circle cx="12" cy="12" r="1" />
                                                    <circle cx="12" cy="5" r="1" />
                                                    <circle cx="12" cy="19" r="1" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="project-box-content-header">
                                        <p className="box-content-header">Data Analysis</p>
                                        <p className="box-content-subheader">Prototyping</p>
                                    </div>
                                    <div className="box-progress-wrapper">
                                        <p className="box-progress-header">Progress</p>
                                        <div className="box-progress-bar">
                                            <span className="box-progress" style={{width: '60%', backgroundColor: '#34c471'}}></span>
                                        </div>
                                        <p className="box-progress-percentage">60%</p>
                                    </div>
                                    <div className="project-box-footer">
                                        <div className="days-left" style={{color: '#34c471'}}>
                                            2 Days Left
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-box-wrapper">
                                <div className="project-box" style={{backgroundColor: '#d5deff'}}>
                                    <div className="project-box-header">
                                        <span>December 10, 2020</span>
                                        <div className="more-wrapper">
                                            <button className="project-btn-more">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
                                                    <circle cx="12" cy="12" r="1" />
                                                    <circle cx="12" cy="5" r="1" />
                                                    <circle cx="12" cy="19" r="1" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="project-box-content-header">
                                        <p className="box-content-header">Web Designing</p>
                                        <p className="box-content-subheader">Prototyping</p>
                                    </div>
                                    <div className="box-progress-wrapper">
                                        <p className="box-progress-header">Progress</p>
                                        <div className="box-progress-bar">
                                            <span className="box-progress" style={{width: '40%', backgroundColor: '#4067f9'}}></span>
                                        </div>
                                        <p className="box-progress-percentage">40%</p>
                                    </div>
                                    <div className="project-box-footer">
                                        <div className="days-left" style={{color: '#4067f9'}}>
                                            2 Days Left
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="messages-section">
                        <button className="messages-close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="15" y1="9" x2="9" y2="15" />
                                <line x1="9" y1="9" x2="15" y2="15" /></svg>
                        </button>
                        <div className="projects-section-header">
                            <p>Client Messages</p>
                        </div>
                        <div className="messages">
                            <div className="message-box">
                                    <div className="message-content">
                                        <div className="message-header">
                                            <div className="name">Stephanie</div>
                                            <div className="star-checkbox">
                                                <input type="checkbox" id="star-1"/>
                                                    <label for="star-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                                    </label>
                                            </div>
                                        </div>
                                        <p className="message-line">
                                            I got your first assignment. It was quite good. 🥳 We can continue with the next assignment.
                                        </p>
                                        <p className="message-line time">
                                            Dec, 12
                                        </p>
                                    </div>
                            </div>
                            <div className="message-box">
                                    <div className="message-content">
                                        <div className="message-header">
                                            <div className="name">Mark</div>
                                            <div className="star-checkbox">
                                                <input type="checkbox" id="star-2"/>
                                                    <label for="star-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                                    </label>
                                            </div>
                                        </div>
                                        <p className="message-line">
                                            Hey, can tell me about progress of project? I'm waiting for your response.
                                        </p>
                                        <p className="message-line time">
                                            Dec, 12
                                        </p>
                                    </div>
                            </div>
                            <div className="message-box">
                                    <div className="message-content">
                                        <div className="message-header">
                                            <div className="name">David</div>
                                            <div className="star-checkbox">
                                                <input type="checkbox" id="star-3"/>
                                                    <label for="star-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                                    </label>
                                            </div>
                                        </div>
                                        <p className="message-line">
                                            Awesome! 🤩 I like it. We can schedule a meeting for the next one.
                                        </p>
                                        <p className="message-line time">
                                            Dec, 12
                                        </p>
                                    </div>
                            </div>
                            <div className="message-box">
                                    <div className="message-content">
                                        <div className="message-header">
                                            <div className="name">Jessica</div>
                                            <div className="star-checkbox">
                                                <input type="checkbox" id="star-4"/>
                                                    <label for="star-4">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                                    </label>
                                            </div>
                                        </div>
                                        <p className="message-line">
                                            I am really impressed! Can't wait to see the final result.
                                        </p>
                                        <p className="message-line time">
                                            Dec, 11
                                        </p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;