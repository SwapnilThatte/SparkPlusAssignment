import React from 'react'
import { Job } from '../job/Job'
import { Link } from 'react-router-dom'
import './jobs.css'
import { NewNoteForm } from '../form/NewNoteForm'
export const Jobs = () => {


  const getJOBS = () => {
    const jobs_arr = Object.keys(localStorage)
    console.log(jobs_arr);
    let arr = []
    for(let obj of jobs_arr) {
      console.log("OBJECT => ", obj);
      arr.push(JSON.parse(localStorage.getItem(obj)))
    } 
    console.log(arr);
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
