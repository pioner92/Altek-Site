import React, {useState} from 'react';

export const ToggleAvailable = () => {
    const [isActive,setIsActive] = useState(false)

    const onClickAvailable = () => {
        setIsActive(true)
    }

    const onClickUnavailable = () => {
        setIsActive(false)
    }

    return (
        <div className="cellphone-availability">
            <div onClick={onClickAvailable} className={`cellphone-availability-btn ${isActive && 'active'}`}>
                <span>Available</span>
            </div>
            <div onClick={onClickUnavailable} className={`cellphone-availability-btn ${!isActive && 'active'}`}>
                <span>Unavailable</span>
            </div>
        </div>
    );
};
