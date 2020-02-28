import React from 'react';
import HomeIcon from '../../assets/images/home_nav_icon.svg';
import LocationIcon from '../../assets/images/location_nav_icon.svg';
import ProjectIcon from '../../assets/images/project_nav_icon.svg';
import PremisesIcon from '../../assets/images/premises_Icon.svg';
import SeatmapIcon from '../../assets/images/seatmap_icon.svg';
import ReportIcon from '../../assets/images/report_icon.svg';

const sidebarView = (props) =>{

    const sidebar = 
        <div className="sidebar">
            <a className="active" href="#home"><img src={HomeIcon} className="sidebar__icon" /> Dashboard</a>
            <a href="#news"><img src={LocationIcon} className="sidebar__icon" />Location</a>
            <a href="#contact"><img src={ProjectIcon} className="sidebar__icon" />Project Name</a>
            <a href="#about"><img src={PremisesIcon} className="sidebar__icon" />Premises</a>
            <a href="#about"><img src={SeatmapIcon} className="sidebar__icon" />Seat Map</a>
            <a href="#about"><img src={ReportIcon} className="sidebar__icon" />Reports</a>
        </div>

    return sidebar;
}

export default sidebarView;