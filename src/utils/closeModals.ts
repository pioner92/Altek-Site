import React from "react";


export const closeModalAndClearSelectedId = (e:React.MouseEvent<HTMLElement>, setVisible:(status:boolean)=>void, selectedId:string, clearSelectedDrivers:()=>void) => {
    //@ts-ignore
    if (e.target.className === 'mymodal-bg-blur' || e.target.className === 'yes-btn' || e.target.className === 'no-btn') {
        setVisible(false);
        if (selectedId.length > 0) {
            clearSelectedDrivers();
        }
    }
};

export const closeModal = (e:React.MouseEvent<HTMLElement>, setVisible:(status:boolean)=>void) => {
    //@ts-ignore
    if (e.target.className === 'mymodal-bg-blur' || e.target.className === 'yes-btn' || e.target.className === 'no-btn') {
        setVisible(false);
        return true;
    }
    return false;
};
