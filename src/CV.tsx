import React from 'react';
import { Page, Stack } from './components';
import safeBadge from './assets/safe6_badge.png';
import solutionsArchitectBadge from './assets/solutions_architect_badge.png';

export default function CV() {
    return (
        <Page>
            <h2>Employment</h2>
            <hr/>
            <br/>
            <Stack
                alignItems="end"
                justifyContent="space-between"
            >
                <div>
                    <b>Software Developer</b>
                    <div>Leidos</div>
                </div>
                <div style={{marginLeft: "auto"}}>May 2020 - Present</div>
            </Stack>
            <ul>
                <li>
                    All development is in a Linux environment using modern IDEs like IntelliJ IDEA
                </li>
                <li>
                    Have gained valuable full-stack dev experience using tools like Java/Spring, React, Docker, and PostgreSQL (using the Spring Data JPA for secure database access)
                </li>
                <li>
                    Automated testing with JUnit, Cypress, React Testing Library
                </li>
                <li>
                    Continuous deployment using Kubernetes, Gitlab CI/CD pipelines
                </li>
                <li>
                    Employ Agile methodologies in day-to-day operations, e.g. daily Team Sync, writing user stories, demoing completed stories to Product Owner
                </li>
            </ul>
            <br/>
            <Stack
                alignItems="end"
                justifyContent="space-between"
            >
                <div>
                    <b>Trivia Host</b>
                    <div>Team Trivia WV</div>
                </div>
                <div>October 2023 - July 2024</div>
            </Stack>
            <ul>
                <li>
                    Traveled to a local restaurant once each week to host games
                </li>
                <li>
                    Clear communication was essential, as questions are read aloud to the contestants
                </li>
            </ul>
            <h2>Education</h2>
            <hr/>
            <br/>
            <Stack
                alignItems="end"
                justifyContent="space-between"
            >
                <div>
                    <b>Bachelor of Computer Science</b>
                    <div>Fairmont State University, 2020</div>
                </div>
                <div>GPA: 3.81</div>
            </Stack>
            <br/>
            <Stack
                alignItems="end"
                justifyContent="space-between"
            >
                <div>
                    <b>Bachelor of Mathematics</b>
                    <div>West Virginia University, 2017</div>
                </div>
                <div>GPA: 3.34</div>
            </Stack>
            <br/>
            <h2>Certifications</h2>
            <hr/>
            <br/>
            <Stack
                alignItems="center"
                spacing={1}
            >
                <img src={solutionsArchitectBadge} alt="AWS Solutions Architect Associate Certification" style={{width: "100px"}}/>
                <b>AWS Certified Solutions Architect - Associate</b>
                <div style={{marginLeft: "auto"}}>April 2024</div>
            </Stack>
            <br/>
            <Stack
                alignItems="center"
                spacing={1}
            >
                <img src={safeBadge} alt="SAFE Agile Certification" style={{width: "100px"}}/>
                <b>Certified SAFe 6 Professional</b>
                <div style={{marginLeft: "auto"}}>February 2024</div>
            </Stack>
            <br/>
            <br/>
        </Page>
    )
}