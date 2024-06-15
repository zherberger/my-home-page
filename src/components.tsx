//import githubLogoBlack from './assets/GitHub_Logo.png';
import githubLogoWhite from './assets/GitHub_Logo_White.png';
import './components.css';
import { FaTimes } from 'react-icons/fa';
import { useCallback, useEffect } from 'react';
import { BsGithub } from 'react-icons/bs';
import Sidenav from './Sidenav';

export function Page({
    children
} : {
    children: JSX.Element | JSX.Element[]
}) {
    return (
        <>
        <Sidenav/>
        <div className='page'>
            
            {children}
        </div>
        </>
    )
}

export function Stack({
    direction = 'row',
    spacing,
    alignItems,
    justifyContent,
    children
} : {
    direction?: 'row' | 'column',
    spacing?: number,
    alignItems?: string,
    justifyContent?: string,
    children: JSX.Element | JSX.Element[]
}) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: direction,
            gap: `${spacing}rem`,
            alignItems: alignItems,
            justifyContent: justifyContent,
            width: "100%"
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