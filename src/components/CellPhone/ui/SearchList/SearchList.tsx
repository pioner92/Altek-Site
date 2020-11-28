import React from 'react';

type propsType = {

}

export const SearchList:React.FC<propsType> = ({children}) => {
    return (
        <div className="celphone-searchlist celphone-scroll-view">
            {children}
        </div>
    );
};
