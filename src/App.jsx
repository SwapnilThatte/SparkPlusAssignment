import { useState } from 'react'
import './App.css'
import { Jobs } from './components/all_jobs/Jobs'
import { NewNoteForm } from './components/form/NewNoteForm'
import { JobDesc } from './components/job_desc/JobDesc'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Edit } from './components/edit/Edit'
function App() {

  const [jobs, setJobs] = useState([])
  const addVaccency = (vaccency) => {
    localStorage.setItem(vaccency.id.toString(), JSON.stringify(vaccency))
    let prevJobs = jobs
    prevJobs.push(vaccency)
    setJobs(prevJobs)
    location.replace('/')
  }


  return (
      <BrowserRouter>
          <div>
              <Routes path="/">
                  <Route index element={<Jobs />} />
                  <Route
                      path="newjob"
                      element={<NewNoteForm addVaccency={addVaccency} />}
                  />
                  <Route path="desc/:id" element={<JobDesc />} />
                  <Route
                      path="edit/:id"
                      element={<Edit props={jobs} />}
                  />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App
