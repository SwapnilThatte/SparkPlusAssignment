import React from 'react'
import { Job } from '../job/Job'
import { Link } from 'react-router-dom'
import './jobs.css'
import { NewNoteForm } from '../form/NewNoteForm'
export const Jobs = () => {


  const getJOBS = () => {
    let arr = []
    
    if (localStorage.length === 0) {
      return arr
    }
    else {
      const jobs = Object.keys(localStorage)
     
      for(let key of jobs) {
        
        let job = localStorage.getItem(key)
        const jsonJob = JSON.parse(job)
        arr.push(jsonJob)
      }
    }
    return arr 
  }

  let all_jobs = getJOBS()

  return (


    <div className='all-jobs'>
        <div className="jobs-top">
            <Link to="/newjob" exact componet={<NewNoteForm/>} className="jobs-btn">Add Job</Link>
        </div>
        <div className="job-container">
            {
              all_jobs.map(job => (
                <Job key={job.id} job={job}/>
              ))
            }
        </div>
    </div>
  )
}
