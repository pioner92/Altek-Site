import React from 'react';

type isAdminPropsType = {
    children: React.ReactNode
    flag: boolean
}

declare const is_admin: boolean

export const IsAdmin: React.FC<isAdminPropsType> = ({flag, children}) => {
    return (
        <>
            {
                flag ?
                    is_admin && children
                    : !is_admin && children
            }
        </>
    )
};
