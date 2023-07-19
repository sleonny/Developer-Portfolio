import React, { useState } from "react";
import "./resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume-section">
        <h2 className="experience">Experience</h2>

        <div className="job">
          <h3>General Manager - Buffalo Wild Wings - Leesburg, VA</h3>
        </div>
        <p>
          Instrumental in managing the comprehensive operations of a bustling
          chicken wing restaurant and sports bar, with a key focus on providing
          superior food quality, exceptional customer service, and engaging
          sports entertainment. Developed and executed innovative marketing
          strategies that significantly enhanced brand visibility and customer
          footfall. Orchestrated recruitment, training, and management of a
          highly effective team, fostering a supportive work environment that
          encouraged growth and development. Demonstrated proficiency in menu
          planning, supply chain oversight, budgeting, and financial planning to
          optimize business profitability. Implemented stringent hygiene
          standards and safety procedures, ensuring compliance with local and
          federal regulations. Successfully enhanced customer relations through
          direct engagement and feedback resolution, resulting in an increased
          repeat customer rate. Regularly analyzed performance metrics, driving
          continuous improvement and business growth in line with corporate
          policies and objectives.
        </p>

        <div className="job">
          <h3>Director of Food & Beverage - River Creek Club - Leesburg, VA</h3>
        </div>

        <p>
          Championed as the key executive overseeing the food and beverage
          operations at a premium country club, managing a full-service
          restaurant renowned for its exquisite wine list, private events
          including weddings and parties, and catering for golf tournaments.
          Showcased excellence in curating and maintaining an extensive wine
          list that enhanced the fine dining experience and increased revenue.
          Supervised the planning and execution of numerous private events,
          ensuring all services met and exceeded members' expectations.
          Orchestrated seamless catering services for large-scale golf
          tournaments, reinforcing the club's reputation for superior service.
          Demonstrated adeptness in personnel management, from recruitment to
          training, fostering a culture of excellence and commitment. Directed
          budgeting, financial planning, and inventory management, ensuring
          cost-effective operations without compromising on quality. Skillfully
          negotiated with suppliers and vendors for top-quality ingredients and
          beverages. Employed a member-centric approach to improve relations,
          solicit feedback, and implement changes to deliver unparalleled dining
          and event experiences. Consistently monitored performance metrics,
          driving continuous improvement and aligning the food and beverage
          department's goals with the club's vision and objectives.
        </p>

        <div className="job">
          <h3>
            Office Administrator/Assistant Accountant - River Creek Club -
            Leesburg, VA
          </h3>
        </div>

        <p>
          Serving in a dual role as Assistant Accountant and Office Manager,
          proficiently handling a broad range of financial and administrative
          duties. Entrusted with managing accounts payable and receivable,
          executing precise and timely billing, and addressing and resolving any
          billing disputes. Demonstrated expertise in processing payments,
          managing cash flows, and conducting periodic account reconciliations,
          ensuring the highest level of financial accuracy. Played an integral
          role in document management, including organizing, filing, and
          archiving important financial and administrative records, which
          greatly increased operational efficiency. Developed and implemented
          robust financial procedures and controls that significantly improved
          the company's financial health. Proactively participated in financial
          reporting, providing key insights that informed strategic
          decision-making. Beyond financial responsibilities, adeptly managed
          the smooth functioning of the office, coordinating with different
          departments, managing schedules, and handling office supplies.
          Exhibited exceptional interpersonal skills, liaising effectively with
          clients, suppliers, and staff, further solidifying relationships and
          ensuring the office environment remains productive and professional.
        </p>

        <div className="resume-section">
          <h2 className="experience">Education</h2>
          <div className="school">
            <h3>George Washington University</h3>
          </div>

          <p>Full Stack Web Development Certification</p>

          <div className="school">
            <h3>Northern Virginia Community College</h3>
          </div>

          <p>Some progress towards Associates</p>

          <div className="school">
            <h3>Loudoun Valley High School</h3>
          </div>
          <p>Advanced Diploma</p>
        </div>
        <div className="resume-section">
          <h2 className="experience">Skills</h2>
          <ul className="skills-list">
            <li>HTML, CSS</li>
            <li>Javascript</li>
            <li>Web, 3rd Party & Server-side API's</li>
            <li>node.js</li>
            <li>Object-Oriented Programming</li>
            <li>express.js</li>
            <li>SQL</li>
            <li>Object-Relational Mapping</li>
            <li>Model-View-Controller</li>
            <li>NoSQL - MongoDB & Mongoose</li>
            <li>Progressive Web Applications</li>
            <li>React</li>
            <li>State</li>
            <li>MERN Full Stack</li>
          </ul>
        </div>

        <a href="https://docs.google.com/document/d/15NBWUrvLEH5hA2j_AJh6F3RY1AiRCdigx9nw2hp9NvA/edit?usp=sharing">
          View my official resume
        </a>
      </div>
    </div>
  );
};
export default Resume;
