import githubLogoWhite from './assets/GitHub_Logo_White.png';
import { FaTimes } from 'react-icons/fa';
import { useCallback, useContext, useEffect } from 'react';
import { BsGithub } from 'react-icons/bs';
import Topnav from './Sidenav';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './main';
import { GlobalStyle, darkTheme, lightTheme } from './global-style';

export function Page({
    children
} : {
    children: JSX.Element | JSX.Element[]
}) {
    const themeContext = useContext(ThemeContext);
    let theme = themeContext.theme === 'dark' ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Topnav/>
            <div className='page'>
                {children}
            </div>
        </ThemeProvider>
    )
}

export function Stack({
    direction = 'row',
    spacing,
    padding,
    alignItems,
    justifyContent,
    children,
    ...others
} : {
    direction?: 'row' | 'column',
    spacing?: number,
    padding?: number,
    alignItems?: string,
    justifyContent?: string,
    children: JSX.Element | JSX.Element[]
    others?: any
}) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: direction,
            gap: `${spacing}rem`,
            alignItems: alignItems,
            justifyContent: justifyContent,
            width: "100%",
            padding:`${padding}rem`,
            ...others
        }}>
            {children}
        </div>
    )
}

export function GitHubLink({ url } : { url: string }) {
    return (
        <a href={url} target="_blank" className="github-link">
            <BsGithub/>
            <img src={githubLogoWhite} alt="GitHub" />
        </a>
    );
}

export function Dialog({
    title,
    show,
    setShow,
    children,
} : {
    title: string,
    show: boolean,
    setShow: (show: boolean) => void,
    children: JSX.Element | JSX.Element[]
}) {
    const windowListener = useCallback(() => {
        setShow(false);
    }, [])

    useEffect(() => {
        if(show) {
            window.addEventListener('click', windowListener);
        } else {
            window.removeEventListener('click', windowListener);
        }
    }, [show])

    return (
        <>
            {
                show &&
                <div className='dialog'>
                    <div className="dialog-content">
                        <div className='dialog-top-bar'>
                            <Stack>
                                <div>{title}</div>
                                <div style={{marginLeft: "auto"}}>
                                    <FaTimes onClick={() => setShow(false)} style={{cursor: "pointer"}}/>
                                </div>
                            </Stack>
                        </div>
                        {children}
                    </div>
                </div>
            }
        </>
    )
}