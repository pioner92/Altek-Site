import React, {useRef} from 'react';
import ChoosingDriver from "./ChoosingDriver/ChoosingDriver";
import ChoosingDispatcher from "./ChoosingDispatcher/ChoosingDispatcher";
import {ChoosingSubheaderContainer} from "../ChoosingSubheader/ChoosingSubheaderContainer";


const ChoosingContent = (props) => {
    const {groupData,addToGroupDriversAction,addToGroupDispatchersAction,groupName} = props
    const checkBoxRef = useRef()

    const onChangeCheckboxDrivers = (id,status)=>{
        addToGroupDriversAction(id,status)
    }
    const onChangeCheckBoxDispatchers = (id,status)=>{
        addToGroupDispatchersAction(id,status)
    }



    return (
        <div className="block col-lg-9 col-12">
            <div className="block-title">
                <span>Groups</span>
            </div>
            <div className="table-wrapper container-wrap choosing">
                ​
                <ChoosingSubheaderContainer groupName={groupName}/>
                ​
                <div className="table-content driver-dispatcher_wrap">
                    <div className="scroll-view row">
                        <div className="col-2"/>
                        <div className="col-4 row justify-content-between mb-4 drivers_wrap">
                            <div className="col-12 d-flex">
                                <div className="checkbox-column item-column" style={{marginLeft: "-38px",}}>
                                    {groupData?.drivers?.map((el) => {
                                        return (
                                            <ChoosingDriver checkBoxRef={checkBoxRef}
                                                            onChangeCheckboxDrivers={onChangeCheckboxDrivers}
                                                            key={el.id} {...el}/>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="col-6 row justify-content-between mb-4 dispatchers_wrap">
                            <div className="col-12 d-flex">
                                <div className="checkbox-column item-column" style={{marginLeft: "-31px"}}>
                                    {groupData?.dispatchers?.map((el) => {
                                        return (
                                            <ChoosingDispatcher checkBoxRef={checkBoxRef}
                                                                onChangeCheckbox={onChangeCheckBoxDispatchers}
                                                                key={el.id} {...el}/>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ChoosingContent;
