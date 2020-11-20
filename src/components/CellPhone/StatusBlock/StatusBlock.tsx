import React from 'react';

export const StatusBlock = () => {
    return (
        <div className="cellphone-info-box" id="cellphone-info-box">
            <div className="cellphone-info-box__status">
                <span className="incomming">Incomming call ◉</span>
                <span className="connected">Connected 1:32</span>
            </div>
            <div className="cellphone-info-box__member">
                <div className="cellphone-info-box__member-avatar">
                    <img src="https://image.freepik.com/free-photo/happy-man-with-newspaper_23-2147694656.jpg" alt=""/>
                </div>
                <div className="cellphone-info-box__member-name">
                    <span>Damien Jones</span>
                </div>
                <div className="cellphone-info-box__member-phone">
                    <span>+1 823 746 3456</span>
                </div>
                <div className="cellphone-info-box__member-meta">
                    <span>V204</span>
                </div>
            </div>
        </div>
    );
};
