import React, { useContext } from "react";
import { GitHubLink, Page, Stack } from './components';
import beadProPenguinOriginal from './assets/bead-pro-penguin-original.png';
import beadProPenguinScreenshot from './assets/bead-pro-penguin-screenshot.png';
import botn1 from './assets/botn-1.png';
import botn2 from './assets/botn-2.png';
import botn3 from './assets/botn-3.png';
import myHomePageDark from './assets/my-home-page.png';
import myHomePageLight from './assets/my-home-page-light.png';
import { ThemeContext } from "./main";

function Project({
    name,
    url,
    description,
    date,
    images = []
} : {
    name: string,
    url: string,
    description: string,
    date?: string
    images?: string[]
}) {
    return (
        <>
            <Stack
                direction='row'
                spacing={1.5}
                alignItems='center'
            >
                <h2>{name}</h2>
                <GitHubLink
                    url={url}
                />
                {
                    date ?
                    <h2 style={{marginLeft: "auto"}}>{date}</h2> : <></>
                }
            </Stack>
            <hr/>
            <p className="bio">{description}</p>
            <Stack
                direction='row'
                spacing={1}
                justifyContent='space-around'
            >
                {
                    images.map((image, idx) => (
                        <img
                            key={idx}
                            src={image}
                            alt={name}
                            style={{
                                maxWidth: `${100 / images.length - 5}%`,
                                borderRadius: "10px"
                            }}
                        />
                    ))
                }
            </Stack>
        </>
    );
}

export default function Projects() {
    const themeContext = useContext(ThemeContext);

    return (
        <Page>
            <Project
                name="This Website"
                url="https://github.com/zherberger/my-home-page"
                description={"Woah, meta. I worked on this as a sort of \"capstone\" after completing my AWS Solutions Architect certification. It's hosted as a static webpage in S3 and delivered through CloudFront to ensure fast load times."}
                date="2024"
                images={themeContext.theme === "dark" ? [myHomePageLight] : [myHomePageDark]}
            />
            <br/>
            <Project
                name="Bead Pro"
                url="https://github.com/zherberger/bead-pro"
                description="Python program to match video game sprites to Perler bead colors."
                date="2024"
                images={[beadProPenguinOriginal, beadProPenguinScreenshot]}
            />
            <br/>
            <Project
                name="Beer of the Night"
                url="https://github.com/adherberger/BeerOfTheNight"
                description="Simple voting service to determine best beer. Created for a local homebrewing club."
                date="2023"
                images={[botn1, botn2, botn3]}
            />
        </Page>
    )
}