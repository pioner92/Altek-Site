import React from 'react';


type propsType = {
    leftCallback:()=>void
    rightCallback:()=>void
    leftTitle:string
    rightTitle:string,
    flag:boolean
}

export const ToggleComponent:React.FC<propsType> = ({leftCallback,rightCallback,leftTitle,rightTitle,flag}) => {

    const classGenerate = (state:boolean) => {
        return `cellphone-switcher__item ${state?'active':''}`
    }

    return (
        <div className="cellphone-switcher">
            <div onClick={leftCallback} className={classGenerate(flag)}>
                <span>{leftTitle}</span>
            </div>
            <div onClick={rightCallback} className={classGenerate(!flag)}>
                <span>{rightTitle}</span>
            </div>
        </div>
    );
};
