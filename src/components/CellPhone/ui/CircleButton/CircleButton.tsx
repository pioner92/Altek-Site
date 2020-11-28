import React from 'react';

type propsType = {
    onClick: () => void
    icon: string,
    className: string
    title?: string
}

export const CircleButton: React.FC<propsType> = ({onClick, icon, className, title}) => {
    return (
        <div className={'number-action-button'} style={{display: 'grid'}}>
            <div onClick={onClick} className={className}>
                <img src={icon} alt=""/>
            </div>
            {title &&
            <span style={{
                marginTop: 10,
                textAlign:'center',
                fontSize:13,
                fontWeight:400
            }}>
                {title}
            </span>
            }
        </div>
    );
};
