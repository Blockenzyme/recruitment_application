import React, { useState } from 'react'
import styles from "./FindJobs.module.css"
import loc from "./svgs/location.svg"
import srch from "./svgs/search.svg"
import save from "./svgs/save.svg"
import dummyJobs from "./dummyJob"
import { Button } from 'reactstrap'

const FindJobs = () => {
  const dummyjobTags = [
    "Full Time",
    "Remote",
    "Product Designer",
    "Senior Level",
    "Researcher",
    "Product Manager",
    "Graphic Designer",
    "Designer",
    "Full Time",
    "Remote",
    "Product Designer",
    "Senior Level",
    "Researcher",
    "Product Manager",
    "Graphic Designer",
    "Designer"
  ];
  const filters = [
    {
      name: "Job Type",
      options: ["On site", "Work From Home", "Hybrid"],
    },
    {
      name: "Salary",
      options: [
        "Less than ₹20k",
        "₹20k - ₹60k",
        "₹60k - ₹100k",
        "Greater than ₹100k"
      ],
    },{
      name: "Duration",
      options: [
        "less than 3 months",
        "3 months - 6 months",
        "More than 6 months"
      ]
    }
  ];
  const FiltersSection = ()=>{
    return (
      <div className={styles.filtersSection}>
        <h2>Filters</h2>
        <div className={styles.filters}>
          {filters.map((filter) => {
            return (
              <div className={styles.filter}>
                <h4>{filter.name}</h4>
                {filter.options.map((option) => {
                  return (
                    <span>
                      <input type="checkbox" name={option} />
                      <label for={option}>{option}</label>
                      <br />
                    </span>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  const [visibilty, setVisibilty]=useState(true);
  const handleFilters= ()=> setVisibilty(!visibilty);
  return (
    <div className={styles.jobsPage}>
      <section className={styles.topSection}>
        <h2>Find Your Dream Job Here</h2>
        <div className={styles.searchSection}>
          <div>
            <img src={srch} alt="search icon" />
            <input placeholder="Job title or Keyword" />
          </div>
          <span className={styles.vline}></span>
          <div>
            <img src={loc} alt="location icon" />
            <input placeholder="Add Country or City" />
          </div>
          <Button className={styles.searchbtn}>Search</Button>
        </div>
      </section>
      <section className={styles.mainSection}>
        <div className={styles.filtersButton}>
          <p onClick={handleFilters}>Filters ⌄</p>
        </div>
        <div className={styles.jobtags}>
          {dummyjobTags.map((tag) => (
            <span>{tag}</span>
          ))}
        </div>
        <hr />
        <div className={styles.jobs}>
          {visibilty ? <FiltersSection />:null}
          <div className={styles.jobListing}>
            {dummyJobs.map((job) => {
              return (
                <div className={styles.job}>
                  <img
                    className={styles.jobLogo}
                    src={job.companylogo}
                    alt="logo"
                  />
                  <span>
                    <h4>{job.title}</h4>
                    <h6>{job.company}</h6>
                  </span>
                  <span className={styles.jobtag}>
                    <span>{job.tags[0]}</span>
                    <span>{job.tags[1]}</span>
                    <span>{job.tags[2]}</span>
                  </span>
                  <h4>{job.location}</h4>
                  <h4>{job.duration}</h4>
                  <img src={save} alt="save icon" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FindJobs

