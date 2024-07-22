import { useMediaQuery } from "react-responsive";

export const SMALL_SCREEN_THRESHOLD = 768;

export const useScreenIsSmall = () => {
    return useMediaQuery({ query: `(max-width: ${SMALL_SCREEN_THRESHOLD}px)` });
}