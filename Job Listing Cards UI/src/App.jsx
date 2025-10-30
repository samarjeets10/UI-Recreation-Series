import React from 'react'
import './App.css'
import Card from './components/Card.jsx'

function App() {

    const jobListings = [
  {
    companyName: "Google",
    companyLogo: "https://logo.clearbit.com/google.com",
    time: "2 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$150/hr",
    location: "Bangalore, India",
  },
  {
    companyName: "Apple",
    companyLogo: "https://logo.clearbit.com/apple.com",
    time: "5 days ago",
    post: "Frontend Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$120/hr",
    location: "Hyderabad, India",
  },
  {
    companyName: "Microsoft",
    companyLogo: "https://logo.clearbit.com/microsoft.com",
    time: "1 week ago",
    post: "Product Designer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$135/hr",
    location: "Mumbai, India",
  },
  {
    companyName: "Amazon",
    companyLogo: "https://cdn-icons-png.flaticon.com/128/10096/10096351.png",
    time: "3 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "$95/hr",
    location: "Pune, India",
  },
  {
    companyName: "Netflix",
    companyLogo: "https://logo.clearbit.com/netflix.com",
    time: "4 hours ago",
    post: "Visual Designer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$130/hr",
    location: "Los Angeles, USA",
  },
  {
    companyName: "Meta",
    companyLogo: "https://logo.clearbit.com/meta.com",
    time: "6 days ago",
    post: "UX Researcher",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$140/hr",
    location: "San Francisco, USA",
  },
  {
    companyName: "Tesla",
    companyLogo: "https://logo.clearbit.com/tesla.com",
    time: "8 hours ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$125/hr",
    location: "Austin, USA",
  },
  {
    companyName: "OpenAI",
    companyLogo: "https://cdn-icons-png.flaticon.com/128/11865/11865326.png",
    time: "1 day ago",
    post: "Product Designer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$160/hr",
    location: "San Francisco, USA",
  },
  {
  companyName: "IBM",
  companyLogo: "https://cdn-icons-png.flaticon.com/128/882/882727.png",
  time: "2 days ago",
  post: "Jr. Frontend Developer",
  tag1: "Internship",
  tag2: "Entry Level",
  pay: "$70/hr",
  location: "Pune, India",
},
{
  companyName: "Adobe",
  companyLogo: "https://cdn-icons-png.flaticon.com/128/888/888835.png",
  time: "9 hours ago",
  post: "UI/UX Engineer",
  tag1: "Hybrid",
  tag2: "Mid Level",
  pay: "$115/hr",
  location: "Bangalore, India",
},
{
  companyName: "NVIDIA",
  companyLogo: "https://cdn-icons-png.flaticon.com/128/732/732230.png",
  time: "3 days ago",
  post: "Frontend Specialist",
  tag1: "Full Time",
  tag2: "Senior Level",
  pay: "$155/hr",
  location: "San Jose, USA",
},
{
  companyName: "Spotify",
  companyLogo: "https://logo.clearbit.com/spotify.com",
  time: "5 hours ago",
  post: "Product UI Designer",
  tag1: "Remote",
  tag2: "Mid Level",
  pay: "$125/hr",
  location: "Stockholm, Sweden",
}
];


  return (
    <>

      <div className="container">
          {jobListings.map(function(job, idx) {
            return <div key={idx}>
              <Card companylogo={job.companyLogo} companyName={job.companyName} time={job.time} post={job.post} tag1={job.tag1} tag2={job.tag2} pay={job.pay} location={job.location} />
            </div>
          })}
      </div>

    </>
  )
}

export default App
