import { Stack } from './components';
import safeBadge from './assets/safe6_badge.png';
import solutionsArchitectBadge from './assets/solutions_architect_badge.png';

export default function CV() {
    return (
        <div className='page cv'>
            <h2>Employment</h2>
            <hr/>
            <br/>
            <b>Software Developer</b>
            <Stack>
                <div>Leidos</div>
                <div style={{marginLeft: "auto"}}>May 2020 - Present</div>
            </Stack>
            <ul>
                <li>
                    Work with a small team in order to maintain a high-volume data processing application
                </li>
                <li>
                    All development is accomplished in a Linux environment, using modern IDEs like IntelliJ IDEA
                </li>
                <li>
                    Valuable full-stack development experience working with tools like Java/Spring, React, Docker, and PostgreSQL (using the Spring Data JPA for secure database access)
                </li>
                <li>
                    Automated testing with Gitlab Pipelines, JUnit, Cypress, React Testing Library
                </li>
            </ul>
            <b>Trivia Host</b>
            <Stack>
                <div>Team Trivia WV</div>
                <div style={{marginLeft: "auto"}}>October 2023 - July 2024</div>
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
                <b>Bachelor of Computer Science</b>
                <Stack>
                    <div>Fairmont State University, 2020</div>
                    <p style={{marginLeft: "auto"}}>GPA: 3.81</p>
                </Stack>
                <b>Bachelor of Mathematics</b>
                <Stack>
                    <div>West Virginia University, 2017</div>
                    <p style={{marginLeft: "auto"}}>GPA: 3.34</p>
                </Stack>
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
        </div>
    )
}