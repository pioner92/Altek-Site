import React, { useContext } from 'react';
import CheckBox from './HomeContentComponents/CheckBox';
import Name from './HomeContentComponents/Name';
import Group from './HomeContentComponents/Group';
import Number from './HomeContentComponents/Number';
import Text from './HomeContentComponents/Text';
import { Context } from '../../Context/Context';
import {responseDriverDataType} from "../../../Redux/Actions/WriteToStoreActions/WriteToStoreActions";
import {connectorType} from "./HomeContentContainer";

export type ownPropsType = {
    data:responseDriverDataType
}

const HomeContent:React.FC<connectorType> = (props:any) => {
    const {
        selectedId, selectDriverAction,
        data: {
            id, group, name, number, message, is_working,
            is_fired, veh_id, not_working_day, not_working_time,
        },
    } = props;
    const {
        setStatusData, setCellPhoneInput, Call, setId,
    } = useContext(Context);

    const selectDriver = (_id:number, isChecked:boolean) => {
        // selectDriverAction(isChecked, _id);
        selectDriverAction(_id,isChecked);
    };

    const onClickDriverCall = (data:{ id:number, number:string, name:string }) => {
        setStatusData(data);
        setId(data.id);
        // @ts-ignore
        window.is_admin && setCellPhoneInput(data.number);
        Call(data.number);
    };
    return (
        <>
            <div data-is_working={is_working} data-is_fired={is_fired} key={id}
                className="item row container-wrap go-to-driver" data-id={id}>
                <div className="checkbox-column item-column col-12 col-lg-1 checkbox_dispatcher">
                    <CheckBox selectDriver={selectDriver} selectedId={selectedId} id={id}/>
                </div>
                <div className="col-lg-11 row">
                    <Name name={name} veh_id={veh_id} id={id}/>
                    {//@ts-ignore
                        window.is_admin && <Group group={group}/>}
                    <Number
                        onClickDriverCall={onClickDriverCall}
                        selectDriver={selectDriver}
                        id={id}
                        number={number}
                        name={name}/>
                    <Text
//                        @ts-ignore
                        not_working_day = { not_working_day}
                        not_working_time={not_working_time}
                        is_fired={is_fired} is_working={is_working}
                        id={id}
                        message={message}/>
                </div>
            </div>
        </>
    );
};

export default React.memo(HomeContent, ((prevProps, nextProps) => prevProps === nextProps));
