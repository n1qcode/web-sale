import {useState, useLayoutEffect} from "react";

const queries = [
    '(max-width: 560px)',
    '(min-width: 561px) and (max-width: 960px)',
    '(min-width: 961px) and (max-width: 1423px)',
    '(min-width: 1424px)'
];

export const useMathMedia = (): {isMobile: boolean, isTablet: boolean, isDesktop: boolean, isWideScreen: boolean} | Record<string, never> => {
    if (typeof window === 'undefined') return {}; // in case SSR

    const mediaQueryLists = queries.map(query => matchMedia(query));

    const getValues = () => mediaQueryLists.map(mql => mql.matches);

    const [values, setValues] = useState(getValues);

    useLayoutEffect(() => {
        const handler = () => setValues(getValues);

        mediaQueryLists.forEach(mql => mql.addEventListener('change', handler));

        return () => mediaQueryLists.forEach(mql => mql.removeEventListener('change', handler));
    });

    const [isMobile, isTablet, isDesktop, isWideScreen] = values;
    console.log(isMobile, isTablet, isDesktop, isWideScreen);
    return {
        isMobile,
        isTablet,
        isDesktop,
        isWideScreen
    };
};
