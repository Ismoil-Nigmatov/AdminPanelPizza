import React, {useState} from 'react';
import "./Settings.scss"
import Header from "./Header";
import Sidebar from "./Sidebar";
const Settings = () => {
    const [activeIndex, setActiveIndex] = useState(2);

    const toggleActive = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const settings = [
        {
            icon: 'fa-regular fa-heart',
            title: 'Appereance',
            description: 'Dark and Light mode, Font size',
        },
        {
            icon: 'fa-solid fa-store',
            title: 'Your Restaurant',
            description: 'Dark and Light mode, Font size',
        },
        {
            icon: 'fa-solid fa-percent',
            title: 'Products Management',
            description: 'Manage your product, pricing, etc',
        },
        {
            icon: 'fa-regular fa-bell',
            title: 'Notification',
            description: 'Customize your notifications',
        },
        {
            icon: 'fa-solid fa-lock',
            title: 'Security',
            description: 'Configure Password, PIN, etc',
        },
        {
            icon: 'fa-solid fa-lock',
            title: 'Security',
            description: 'Configure Password, PIN, etc',
        },
        {
            icon: 'fa-solid fa-circle-info',
            title: 'About Us',
            description: 'Find out more about Posly',
        }
    ];

    return (
        <div>
            <Header/>
            <div className="app-content">
                <Sidebar/>
                <div className="setting">
                    {settings.map((setting, index) => (
                        <div
                            className={`setting-item ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => toggleActive(index)}
                            key={index}
                        >
                            <i className={setting.icon}></i>
                            <div className="setting-info">
                                <p>{setting.title}</p>
                                <p>{setting.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="setting-content"></div>
            </div>
        </div>
    );
};

export default Settings;