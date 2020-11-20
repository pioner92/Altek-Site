import React from 'react';

type isAdminPropsType = {
    children: React.ReactNode
    flag: boolean
}

declare const window: {
    is_admin:boolean
}

export const IsAdmin: React.FC<isAdminPropsType> = ({flag, children}) => {
    return (
        <>
            {
                flag ?
                    window.is_admin && children
                    : !window.is_admin && children
            }
        </>
    )
};
