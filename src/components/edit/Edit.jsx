import React, {useEffect, useState} from 'react'
import {Link,  useLocation } from 'react-router-dom';
import './edit.css'


export const Edit = () => {

   let location = useLocation();
   let url = location.pathname;
   const id = url.split("/")[2];
   let DATA = JSON.parse(localStorage.getItem(id));
    const original = DATA

    const [company, setCompany] = useState("");
    const [job, setJob] = useState("");
    const [salary, setSalary] = useState("");
    const [datetime, setDateTime] = useState("");
    const [desc, setDesc] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (company === "") {
    company = original.company;
}
if (job === "") {
    company = original.job;
}
if (salary === "") {
    company = original.salary;
}
if (datetime === "") {
    company = original.datetime;
}
if (desc === "") {
    company = original.desc;
}

localStorage.removeItem(id)
        localStorage.setItem(
            Date.now(),
            
            JSON.stringify({
                company: company,
                job: job,
                salary: salary,
                datetime: datetime,
                desc: desc,
                id: Date.now(),
            })
        );
       
        window.location = "/"
    };


    useEffect(() => {
        DATA.job = job;
        DATA.company = company;
        DATA.salary = salary;
        DATA.datetime = datetime;
        DATA.desc = desc;
        DATA.id = id;
    }, [job, company, salary, datetime, desc, id]);


    return (
        <>
            <Link to="/" className="back">
                <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <div className="new-note">
                <div className="new-note-card">
                    <div className="new-note-title">Add Job</div>
                    <form
                        className="new-note-form"
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <div className="form-group">
                            <label
                                htmlFor="editjobTitle"
                                className="input-title"
                            >
                                Job Title
                            </label>
                            <input
                                type="text"
                                name="editjobTitle"
                                id="editjobTitle"
                                defaultValue={DATA.job}
                                onChange={(e) => setJob(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="editcompany"
                                className="input-title"
                            >
                                Company Name
                            </label>
                            <input
                                type="text"
                                name="editcompany"
                                id="editcompany"
                                defaultValue={DATA.company}
                                onChange={(e) => setCompany(e.target.value)}
                            />
                        </div>
                        <div className="form-grp-flex">
                            <div>
                                <label
                                    htmlFor="editsalary"
                                    className="input-title"
                                >
                                    Salary
                                </label>
                                <input
                                    type="text"
                                    name="editsalary"
                                    id="editsalary"
                                    defaultValue={DATA.salary}
                                    onChange={(e) => setSalary(e.target.value)}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="editdatetime"
                                    className="input-title"
                                >
                                    Date - Time
                                </label>
                                <input
                                    type="text"
                                    name="editdatetime"
                                    id="editdatetime"
                                    defaultValue={DATA.datetime}
                                    onChange={(e) =>
                                        setDateTime(e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="editdesc" className="input-title">
                                Description
                            </label>
                            <textarea
                                name="editdesc"
                                id="desc"
                                cols="30"
                                rows="10"
                                defaultValue={DATA.desc}
                                onChange={(e) => setDesc(e.target.value)}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};
