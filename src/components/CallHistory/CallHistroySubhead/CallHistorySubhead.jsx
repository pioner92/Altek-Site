import React from 'react';
import icon_back from '../../../static/icons/back.svg'

const CallHistorySubhead = ({drivers,id}) => {
    const driver = drivers.find((el) => el.id.toString() === id)

    const onClickBack = () => {
        window.history.back()
    }

    return (
        <div className="list-headers-wrapper container-wrap messenger-subhead">
            <div className="col-12 row">
                <div className="col-6 row">
                    <div className="header row col-2">
                        <a onClick={onClickBack} href="#" id="header-back-button">
                            <img src={icon_back} alt='/'/> Back
                        </a>
                    </div>
                    <div className="header col-4">
                        {driver?.name}
                    </div>
                    <div className="header col-3">
                        ID: {driver?.id}
                    </div>
                    {window.is_admin&&
                    <div className="header col-3">
                        {driver?.number}
                    </div>
                    }
                </div>

            </div>
        </div>
    );
};

export default React.memo(CallHistorySubhead, ((prevProps, nextProps) => prevProps === nextProps))
