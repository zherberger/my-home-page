import { useContext } from "react"
import { ThemeContext } from "./main";
import { FaMoon, FaSun } from "react-icons/fa";
import { Stack } from "./components";

export function ThemeSwitcher() {
    const themeContext = useContext(ThemeContext);

    return (
        <div>
            <Stack direction="row" spacing={1} alignItems="center">
                <FaMoon/>
                <div
                    className="theme-switcher"
                    onClick={() => themeContext.toggleTheme()}
                >
                    <div
                        className={`theme-switcher-slider ${themeContext.theme === 'dark' ? 'dark' : 'light'}`}
                    />
                </div>
                <FaSun/>
            </Stack>
        </div>
    )
}