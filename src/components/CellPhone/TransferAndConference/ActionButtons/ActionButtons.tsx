import React from 'react';
import {CircleButton} from "../../ui/CircleButton/CircleButton";
import plus from "../../../../static/icons/plus.svg";
import warm_transfer from "../../../../static/icons/warm-transfer.svg";
import blind_transfer from "../../../../static/icons/phone-blind-transfer.svg";
import {useStore} from "effector-react";
import {$isVisibleConference, setIsVisibleTransfer} from "../models";
import {$callingFrom, declineEvent} from "../../models/models";
import {$selectedDispatcherNumber, setSelectedDispatcherNumber} from "../models/models";
import {setInputValueDispatcherTransfer} from "../CellPhoneDispatcherInput/models";
import {transfer} from "../../api/transfer";
import {getCompanyName} from "../../../../utils/getCompanyName";

declare const window: {
    number: string
}

export const ActionButtons = () => {

    const isVisibleConference = useStore($isVisibleConference)
    const selectedDispatcher = useStore($selectedDispatcherNumber)

    const from = useStore($callingFrom)

    const call = async ({myExt, callback}: { myExt: boolean, callback?: () => void }) => {
        selectedDispatcher && transfer({
            companyName:getCompanyName(),
            to: selectedDispatcher,
            from,
            myExt: myExt ? window.number : '000',
            callback
        })
        setSelectedDispatcherNumber('')
        setInputValueDispatcherTransfer('')
        setIsVisibleTransfer(false)
    }

    const onCLickAdd = () => call({myExt: true});

    const onClickWarmTransfer = () => call({myExt: true, callback: declineEvent});

    const onClickBlindTransfer = () => call({myExt: false, callback: declineEvent});


    return (
        <div className={`number-action-buttons__right justify-content-start`}>
            {isVisibleConference
                ? <CircleButton title={'Add'} onClick={onCLickAdd} icon={plus} className={'number-action-button backBtn'}/>
                : <>
                    <CircleButton title='Warm Transfer' onClick={onClickWarmTransfer} icon={warm_transfer}
                                  className={'number-action-button backBtn'}/>
                    <CircleButton title='Blind Transfer' onClick={onClickBlindTransfer} icon={blind_transfer}
                                  className={'number-action-button backBtn'}/>
                </>
            }
        </div>
    );
};
