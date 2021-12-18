import React, { ReactNode, useState } from 'react';
interface IProps {
    children: ReactNode;
}

export const StickyHeaderContext = React.createContext({
    intersectingFunction: (a: boolean) => {},
    isIntersectingValue: false,
});

const StickyHeaderProvider = (props: IProps) => {
    const [isInsersecting, setIsInsecting] = useState(false);

    const setIntersecting = (intersecting: boolean) => {
        setIsInsecting(intersecting);
    };

    const values = {
        intersectingFunction: setIntersecting,
        isIntersectingValue: isInsersecting,
    };

    return (
        <StickyHeaderContext.Provider value={values}>
            {props.children}
        </StickyHeaderContext.Provider>
    );
};

export default StickyHeaderProvider;
