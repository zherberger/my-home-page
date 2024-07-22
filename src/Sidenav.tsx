import { useCallback, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import { Dialog, Stack } from './components';
import { ThemeSwitcher } from './ThemeSwitcher';
import { useScreenIsSmall } from './hooks';

export default function Topnav() {
    const [showLinks, setShowLinks] = useState(false);
    const screenIsSmall = useScreenIsSmall();
    const { pathname } = useLocation();

    const onBarsClicked = useCallback((event : React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        setShowLinks(true);
    }, [])

    return (
        <div className='sidenav'>
            {
                screenIsSmall ?
                <>
                    <div className='sidenav-title'>{
                        pathname === '/' ? 'Zachary Herberger' :
                        pathname === '/projects' ? 'Projects' :
                        pathname === '/cv' ? 'C.V.' :
                        pathname === '/contact' ? 'Contact' :
                        ''
                    }</div>
                    <div className="bars" onClick={onBarsClicked}>
                        <FaBars/>
                    </div>
                    <LinksDialog show={showLinks} setShow={setShowLinks}/> 
                </>
                :
                <>
                    <ThemeSwitcher/>
                        <Stack justifyContent="center">
                        <MyNavLink to='/'>Zachary Herberger</MyNavLink>
                        <MyNavLink to='/projects'>Projects</MyNavLink>
                        <MyNavLink to='/cv'>C.V.</MyNavLink>
                        <MyNavLink to='/contact'>Contact</MyNavLink>
                    </Stack>
                </>
            }
        </div>
    )
}

function getLinkClassname({isActive} : {isActive: boolean}) {
    return isActive ? 'sidenav-link sidenav-link-active' : 'sidenav-link';
}

function MyNavLink({
    to,
    children
} : {
    to: string,
    children: string | JSX.Element
}) {
    return (
        <NavLink className={getLinkClassname} to={to}>{children}</NavLink>
    )
}

function LinksDialog({show, setShow} : {show: boolean, setShow: (show: boolean) => void}) {
    const screenIsSmall = useScreenIsSmall();

    return (
        <Dialog title="Navigation" show={show} setShow={setShow}>
            <Stack direction='column'>
                <MyNavLink to='/'>Zachary Herberger</MyNavLink>
                <MyNavLink to='/projects'>Projects</MyNavLink>
                <MyNavLink to='/cv'>C.V.</MyNavLink>
                <MyNavLink to='/contact'>Contact</MyNavLink>
                {
                    screenIsSmall ?
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        padding: "0 1rem",
                        alignItems: "center",
                        justifyContent: "space-around",
                    }}>
                        <p>Theme:</p>
                        <ThemeSwitcher/>
                    </div> :
                    <></>
                }
            </Stack>
        </Dialog>
    )
}