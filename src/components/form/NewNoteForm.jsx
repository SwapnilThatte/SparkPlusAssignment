import React from 'react'
import { useState } from 'react'
import './newNoteForm.css'
import { Link, useLocation } from 'react-router-dom'
export const NewNoteForm = ({ addVaccency }) => {
    
    const [company, setCompany] = useState("")
    const [job, setJob] = useState("")
    const [salary, setSalary] = useState("")
    const [datetime, setDateTime] = useState("")
    const [desc, setDesc] = useState("")

    
    const handleSubmit = (e) => {
        e.preventDefault()
        addVaccency({
            company : company,
            job : job,
            salary : salary,
            datetime : datetime,
            desc : desc,
            id : Date.now()
        })
        
        
    } 

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
                          <label htmlFor="jobTitle" className="input-title">
                              Job Title
                          </label>
                          <input
                              type="text"
                              name="jobTitle"
                              id="jobTitle"
                              value = {job}
                              onInput={(e) => setJob(e.target.value)}
                          />
                      </div>
                      <div className="form-group">
                          <label htmlFor="company" className="input-title">
                              Company Name
                          </label>
                          <input
                              type="text"
                              name="company"
                              id="company"
                              value = {company}
                              onInput={(e) => setCompany(e.target.value)}
                          />
                      </div>
                      <div className="form-grp-flex">
                          <div>
                              <label htmlFor="salary" className="input-title">
                                  Salary
                              </label>
                              <input
                                  type="text"
                                  name="salary"
                                  id="salary"
                                  value={salary}
                                  onInput={(e) => setSalary(e.target.value)}
                              />
                          </div>
                          <div>
                              <label htmlFor="datetime" className="input-title">
                                  Date - Time
                              </label>
                              <input
                                  type="text"
                                  name="datetime"
                                  id="datetime"
                                  value={datetime}
                                  onInput={(e) => setDateTime(e.target.value)}
                              />
                          </div>
                      </div>

                      <div className="form-group">
                          <label htmlFor="desc" className="input-title">
                              Description
                          </label>
                          <textarea
                              name="desc"
                              id="desc"
                              cols="30"
                              rows="10"
                              value={desc}
                              onInput={(e) => setDesc(e.target.value)}
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
}
