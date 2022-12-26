import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './job_desc.css'
export const JobDesc = () => {
    const location = useLocation();
    const url = location.pathname;
    const id = url.split("/")[2];
    let DATA = localStorage.getItem(id);
    DATA = JSON.parse(DATA)
    return (
        <>
            <Link to="/" className="back">
                <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <div className="job_desc">
                <div className="title">
                    <div className="job-title-heading">Job Title</div>
                    <div className="job-title">{DATA.job}</div>
                </div>
                <div className="company">
                    <div className="company-name-heading">Company Name</div>
                    <div className="company-title">{DATA.company}</div>
                </div>
                <div className="desc">
                    <div className="desc-heading">Description</div>
                    <div className="desc-title">
                        {DATA.desc}
                    </div>
                </div>
                <div className="job-data">
                    <div className="job-salary"> Salary : {DATA.salary}</div>
                    <div className="job-joining-date">
                        Date & Time : {DATA.datetime}
                    </div>
                </div>
            </div>
        </>
    );
}
