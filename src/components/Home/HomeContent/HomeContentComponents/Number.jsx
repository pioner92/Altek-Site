import React, { useContext } from 'react';
import { Context } from '../../../Context/Context';

const Number = ({
    selectDriver, id, number, name, onClickDriverCall,
}) => {
    const { setIsVisibleNewSmsModal } = useContext(Context);

    const onClickCall = () => {
        onClickDriverCall({ id, number, name });
    };

    const openModalSendSMS = () => {
        selectDriver(id,false);
        setIsVisibleNewSmsModal(true);
    };

    return (
        <div className="number-column item-column col-12 col-lg-3">
            <div className="hide-on-medium-and-up header">Number:</div>
            <div className="content">
                {window.is_admin && <p className="phone-number">{number}</p>}
                <div className="flex-wrapper" style={{ display: 'flex', flexDirection: 'row' }}>
                    <div onClick={onClickCall}
                        data-number={number} data-name={name} data-id={id}
                        className="call-button btn btn-success font-weight-light">CALL
                    </div>
                    <div onClick={openModalSendSMS} className="font-weight-light btn btn-primary sms-button">SMS</div>
                </div>
            </div>
        </div>
    );
};

export default Number;
