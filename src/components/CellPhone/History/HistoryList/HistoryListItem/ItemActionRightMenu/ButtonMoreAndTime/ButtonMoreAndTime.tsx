import React from 'react';
import more_icon from "../../../../../../../static/icons/more.svg";
import moment from "moment";

type propsType = {
    date:string
}

export const ButtonMoreAndTime:React.FC<propsType> = ({date}) => {

    const dateFormat = moment(new Date(date)).format('DD.MM')

    return (
        <>
            <div className="cellphone-list__item_meta">
                <span>{dateFormat}</span>
            </div>
            <div className="cellphone-list__item_more">
                <img src={more_icon} alt=""/>
            </div>
        </>
    );
};
