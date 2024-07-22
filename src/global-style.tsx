import { createGlobalStyle } from "styled-components"
import normalize from "styled-normalize"

export const lightTheme = {
    backgroundImage: "url(\"src/assets/pgh-light.png\")",
    backgroundColor: "#ffffff",
    accentColor: "#b0b9b9",
    borderColor: "#ccc",
    color: "#213547",
}

export const darkTheme = {
    backgroundImage: "url('src/assets/pgh-dark.png')",
    backgroundColor: "#242424",
    accentColor: "#121718",
    borderColor: "#444",
    color: "white",
}

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    :root {
        font-family: system-ui, Arial, sans-serif;
        font-size: 18px;
        line-height: 1.5;
        font-weight: 400;
    
        color: ${(props) => props.theme.color};
        background-color: ${(props) => props.theme.backgroundColor};
        background-image: ${(props) => props.theme.backgroundImage};
        background-attachment: fixed;
        background-repeat: none;
    
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
    }
      
      h1 {
        font-size: 3.2em;
        line-height: 1;
      }
      
      h2 {
        font-size: 2em;
        line-height: 1;
      }
      
      h3 {
        font-size: 1.5em;
        line-height: 1;
      }
      
      .page {
        padding: 1rem;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        overflow-y: auto;
        overflow-x: hidden;
      }
      
      .home {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        margin: 1rem;
      }
      
      .profile-pic {
        border: 0.5rem solid rgba(0, 0, 0, 0.3);
        max-width: min(500px, 50vw);
        margin-right: 1rem;
      }
      
      .sidenav {
        background-color: ${(props) => props.theme.accentColor};
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 5vh;
        position: sticky;
        top: 0;
        padding-left: 1rem;
      }
      
      .links-dialog {
        position: fixed;
        margin: auto;
        top: 20px;
        background-color: black;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
      }
      
      .sidenav-title {
        font-weight: 700;
        color: var(--color);
      }
      
      .sidenav > .bars {
        padding: 0.75em 1em 0.5em 1em;
        margin-left: auto;
      }
      
      .bars:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 255, 0.5);
      }
      
      .sidenav-link {
        padding: 0.5em 1.5em;
        text-decoration: none;
        font-weight: 500;
        font-size: 1.2em;
        color: var(--color);
      }
      
      .sidenav-link-active {
        font-weight: 700;
        background-color: ${(props) => props.theme.borderColor};
      }
      
      .sidenav-link:hover {
        background-color: ${(props) => props.theme.borderColor};
      }
      
      hr {
        width: 100%;
      }
      
      @media screen and (max-width: 768px) {
        .home {
          flex-direction: column;
          align-items: center;
        }
      }
      
      @media screen and (min-width: 1280px) {
        .page {
          width: 1200px;
        }
      }
      
      @media screen and (max-width: 768px) {
        h2 {
          font-size: 1.5em;
        }
      }

      .github-link {
        background-color: ${(props) => props.theme.accentColor};
        border: 1px solid ${(props) => props.theme.borderColor};
        width: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 10px;
        padding: 0.25rem 0.5rem;
        color: var(--color);
    }
    
    .github-link > img {
        width: 60px;
    }
    
    .dialog {
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .dialog-content {
        padding-bottom: 0.5rem;
        background-color: ${(props) => props.theme.backgroundColor};
        border-radius: 10px;
        border: 1px solid ${(props) => props.theme.borderColor};
    }
    
    .dialog-top-bar {
        padding: 0.5rem 1rem;
        background-color: var(--accent-color);
        border-top-left-radius: 9px;
        border-top-right-radius: 9px;
    }

    .theme-switcher {
        background-color: ${(props) => props.theme.accentColor};
        border: 1px solid ${(props) => props.theme.color};
        width: 25px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 100px;
        color: var(--color);
        cursor: pointer;
        position: relative;
    }

    .theme-switcher-slider {
      padding: 6px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.color};
    }

    .theme-switcher-slider.dark {
      margin-right: auto;
    }

    .theme-switcher-slider.light {
      margin-left: auto;
    }
`