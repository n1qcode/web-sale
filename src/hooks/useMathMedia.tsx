import {useState, useLayoutEffect} from "react";

const queries = [
    '(max-width: 960px)',
    '(min-width: 767px) and (max-width: 1199px)',
    '(min-width: 1200px)'
];

export const useMathMedia = (): {isMobile: boolean, isTablet: boolean, isDesktop: boolean} => {
    // if (typeof window === 'undefined') return {}; // in case SSR

    const mediaQueryLists = queries.map(query => matchMedia(query));

    const getValues = () => mediaQueryLists.map(mql => mql.matches);

    const [values, setValues] = useState(getValues);

    useLayoutEffect(() => {
        const handler = () => setValues(getValues);

        mediaQueryLists.forEach(mql => mql.addEventListener('change', handler));

        return () => mediaQueryLists.forEach(mql => mql.removeEventListener('change', handler));
    });


    // return ['isMobile', 'isTablet', 'isDesktop'].reduce((acc, screen, index) => ({
    //     ...acc,
    //     [screen]: values[index]
    // }), {});

    return {
        'isMobile': values[0],
        'isTablet': values[1],
        'isDesktop': values[2]
    };
};
