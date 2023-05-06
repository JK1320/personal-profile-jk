import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import "../styleSheets/Resume.css";

const Resume = () => {
    return (
      <div className="resume">
        <Header />
        <div>
          <ul className="contact-info">
            <li>Phone: 07803702899</li>
            <li>Email: kaurjus1@gmail.com</li>
          </ul>

          <div className="career-summary">
            <h4>Career Summary and Experiences</h4>
            <div className="career-summary-list">
              <h6>Hackathon</h6>
              <p>Capgemini | CodeYourFuture | September 2021 - October 2021</p>
              <li>Homework Club — Full Stack Project</li>
              <p>
                Took part in Capgemini Hackathon program. I was mainly
                responsible for the front end aspects of the app but also took
                part in the discussions about design, creating database and end
                points.
              </p>
              <p>Our team meetings were held twice a week.</p>
            </div>
            <div className="career-summary-list">
              <h6>Full Stack web developer - trainee</h6>
              <p>
                Code Your Future, West Midlands | September 2020 - July 2021
              </p>
              <li>Knowledge Checklist — Full Stack Project</li>
              <p>
                Worked in a team of 4 to create an app in 4 weeks. I contributed
                to the front-end (created wireframe and react components) and
                the back-end (contributed to creating routes, tables in database
                & writing sql queries) aspects of the app. We used React, Node,
                Express and PostgreSQL, CSS to create it and used heroku to
                deploy it.
              </p>
              <li>Baby Names — Front End Project</li>
              <li>Job Listings — Front End Project</li>
              <p>
                Created these apps using React and deployed on netlify. These
                were individual projects.
              </p>
            </div>
            <div className="career-summary-list">
              <h6>Customer Liaison Officer/Cashier</h6>
              <p>Vaultex UK Ltd, Birmingham | December 2004 - May 2019</p>
              <li>
                Accurately counted monies received and balanced against customer
                documentation
              </li>
              <li>
                Responded to queries raised by customers' banks liaison teams
                and other related organisations
              </li>
              <li>
                Investigated and advised customers of any discrepancies in their
                banking
              </li>
              <li>
                Maintained query records through the QMS system and error logs
              </li>
            </div>
            <div className="career-summary-list">
              <p>McGrath Immigration, Birmingham</p>
              <li>Attended clients’s meetings and took notes</li>
              <li>Researched relevant law</li>
              <li>Drafted legal documents and letters to clients</li>
              <li>Proofread legal documents</li>
            </div>
            <div className="career-summary-list">
              <p>Birmingham Law Centre, Small Heath</p>
              <li>Observed clients’ interviews</li>
              <li>Drafted letters to clients and parties involved</li>
              <li>Researched relevant law</li>
              <li>Attended Priory Court observing possession order hearings</li>
            </div>
          </div>
          <div className="skills">
            <section className="skill-section tech-skills">
              <h4>Tech Skills</h4>
              <ul className="skills-list">
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Material UI</li>
                <li>Styled Components</li>
                <li>nodejs</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Git/Github</li>
                <li>Netlify</li>
                <li>Heroku</li>
                <li>EmailJS</li>
              </ul>
            </section>
            <section className="skill-section">
              <h4>Soft Skills</h4>
              <ul className="skills-list">
                <li>Team-work</li>
                <li>Presentation</li>
                <li>Communication</li>
                <li>Leadership</li>
                <li>Problem-solving</li>
                <li>Time Management</li>
              </ul>
            </section>
            <section className="skill-section">
              <h4>Interests</h4>
              <ul>
                <li>
                  Coding: creating my very first personal profile web page
                </li>
                <li>
                  Socialising: with family and friends and also with like minded
                  people who have similar interests
                </li>
                <li>Meditating: early mornings</li>
              </ul>
            </section>
          </div>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    );
}

export default Resume;
