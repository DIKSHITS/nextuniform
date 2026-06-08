import React, { useState } from "react";
import "../styles/CareerPage.css";

import {
  Briefcase,
  GraduationCap,
  Lightbulb,
  Users,
  HeartHandshake,
  Laptop,
  Trophy,
  Clock,
  CheckCircle,
  MapPin,
  IndianRupee,
  X
} from "lucide-react";

const teamImg =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80";

const team1 =
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80";

const team2 =
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80";

const team3 =
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80";

const teamBottom =
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80";

const jobs = [
  {
    title: "MERN Stack Developer",
    location: "Kolkata",
    experience: "1 - 3 Years",
    salary: "₹4 - ₹8 LPA",
    description:
      "Build scalable web applications using React.js, Node.js, Express.js and MongoDB.",
    skills: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "REST APIs",
      "Git"
    ]
  },
  {
    title: "Sales Executive",
    location: "Remote",
    experience: "0 - 2 Years",
    salary: "₹3 - ₹5 LPA",
    description:
      "Generate leads, manage clients and drive revenue growth.",
    skills: [
      "Communication",
      "Sales",
      "CRM",
      "Lead Generation",
      "Negotiation"
    ]
  },
  {
    title: "Graphic Designer",
    location: "Hybrid",
    experience: "1 - 3 Years",
    salary: "₹3 - ₹6 LPA",
    description:
      "Create engaging social media creatives, branding assets and marketing designs.",
    skills: [
      "Photoshop",
      "Illustrator",
      "Figma",
      "Canva",
      "Branding"
    ]
  }
];

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted Successfully!");
    setSelectedJob(null);
  };

  return (
    <div className="career-page">
      {/* HERO */}

   <section
  className="career-hero"
  style={{
    backgroundImage: `url(${teamImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="hero-content">
    <h1>
      Build Your Career
      <br />
      <span>With NextUniform</span>
    </h1>

    <p>
      Join a passionate team where innovation,
      creativity and growth drive success every day.
    </p>
  </div>
</section>

      {/* STATS */}

      <section className="section">
        <div className="grid-4">
          <div className="card">
            <h3>500+</h3>
            <p>Employees</p>
          </div>

          <div className="card">
            <h3>20+</h3>
            <p>Countries Served</p>
          </div>

          <div className="card">
            <h3>95%</h3>
            <p>Employee Satisfaction</p>
          </div>

          <div className="card">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </section>

      {/* WHY JOIN US */}

      <section className="section">
        <h2>Why Join Us</h2>

        <div className="grid-4">
          <div className="card">
            <Briefcase size={45} />
            <h3>Growth</h3>
            <p>Endless career opportunities.</p>
          </div>

          <div className="card">
            <GraduationCap size={45} />
            <h3>Learning</h3>
            <p>Continuous upskilling programs.</p>
          </div>

          <div className="card">
            <Lightbulb size={45} />
            <h3>Innovation</h3>
            <p>Work on exciting projects.</p>
          </div>

          <div className="card">
            <Users size={45} />
            <h3>Teamwork</h3>
            <p>Collaborate with talented people.</p>
          </div>
        </div>
      </section>

      {/* LIFE */}

      <section className="section">
        <h2>Life At NextUniform</h2>

        <div className="gallery">
          <div className="gallery-card">
            <img src={team1} alt="" />
            <p>Team Collaboration</p>
          </div>

          <div className="gallery-card">
            <img src={team2} alt="" />
            <p>Modern Workspace</p>
          </div>

          <div className="gallery-card">
            <img src={team3} alt="" />
            <p>Training & Development</p>
          </div>
        </div>
      </section>

      {/* JOBS */}

      <section className="section">
        <h2>Open Positions</h2>

        <div className="jobs">
          {jobs.map((job, index) => (
            <div className="job-card" key={index}>
              <h3>{job.title}</h3>

              <p>
                <MapPin size={16} />
                &nbsp; {job.location}
              </p>

              <button
                className="btn-primary"
                onClick={() => setSelectedJob(job)}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* JOB MODAL */}

      {selectedJob && (
        <div className="modal-overlay">
          <div className="job-modal">

            <button
              className="close-btn"
              onClick={() => setSelectedJob(null)}
            >
              <X size={22} />
            </button>

            <h2>{selectedJob.title}</h2>

            <div className="job-info">
              <p>
                <MapPin size={18} />
                {selectedJob.location}
              </p>

              <p>
                <Briefcase size={18} />
                {selectedJob.experience}
              </p>

              <p>
                <IndianRupee size={18} />
                {selectedJob.salary}
              </p>
            </div>

            <h3>Job Description</h3>
            <br/>

            <p>{selectedJob.description}</p>
            <br/>

            <h3>Required Skills</h3>

            <div className="skills">
              {selectedJob.skills.map((skill, i) => (
                <span key={i} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>

            <h3>Apply For This Position</h3>
 <br/>
            <form
              className="apply-form"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Full Name"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
              />

              <input
                type="file"
                required
              />

              <textarea
                rows="4"
                placeholder="Tell us about yourself..."
                required
              />

              <button
                type="submit"
                className="btn-primary"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}

      {/* BENEFITS */}

      <section className="section">
        <h2>Our Benefits</h2>

        <div className="benefits">
          <div className="benefit">
            <HeartHandshake size={45} />
            <h3>Health Benefits</h3>
          </div>

          <div className="benefit">
            <Clock size={45} />
            <h3>Flexible Hours</h3>
          </div>

          <div className="benefit">
            <Laptop size={45} />
            <h3>Remote Work</h3>
          </div>

          <div className="benefit">
            <Trophy size={45} />
            <h3>Career Growth</h3>
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section className="section">
        <h2>Our Hiring Process</h2>

        <div className="process">
          <div><CheckCircle size={18} /> Apply</div>
          <div><CheckCircle size={18} /> Screening</div>
          <div><CheckCircle size={18} /> Interview</div>
          <div><CheckCircle size={18} /> Assessment</div>
          <div><CheckCircle size={18} /> Offer</div>
          <div><CheckCircle size={18} /> Join</div>
        </div>
      </section>

      {/* CTA */}

      <section className="cta">
        <div>
          <h2>
            Ready To Grow
            <br />
            <span>With Us?</span>
          </h2>

          <p>
            Discover opportunities to learn,
            innovate and make an impact.
          </p>

          
        </div>

        <img src={teamBottom} alt="Team" />
      </section>
    </div>
  );
}