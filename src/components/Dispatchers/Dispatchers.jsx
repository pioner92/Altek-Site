import React, {useContext, useEffect, useState} from 'react';
import {Context} from '../Context/Context';
import {filterActiveDispatcher} from "../../utils/callQueu/filterActiveDispatchers";
import {setDispatchersQueue} from "../../utils/callQueu/setDispatchersQueue";
import {DispatcherItemContainer} from "./DispatcherItem/DispatchersItemContainer";
import {getDispatcherQueue} from "../CellPhone/api/get-active-dispatchers";
import {getCompanyName} from "../../utils/getCompanyName";

const Dispatchers = ({
                         dispatchers, getDispatchersAction,
                         deleteDispatcherAction, writeToStoreActiveDispatchersAction
                     }) => {
    const {setIsVisibleNewDispatcherModal} = useContext(Context);
    const [numbers, setNumbers] = useState([])
    const [isChecked, setIsChecked] = useState(false)

    const onChangeCheckBox = (phone, status) => {
        setDispatchersQueue(phone, status)
            .then((res) => setIsChecked((prevState => !prevState)))
    };

    useEffect(() => {
        getDispatchersAction();
    }, []);

    useEffect(() => {
        const company_name = getCompanyName()
        if (company_name) {
            getDispatcherQueue(company_name).then((data) => {
                if(data)
                setNumbers(data)
                writeToStoreActiveDispatchersAction(filterActiveDispatcher(dispatchers, data))
            })
        }
    }, [isChecked])


    return (
        <div className="block col-lg-9 col-12">
            <div className="block-title">
                <span>Dispatchers</span>
            </div>
            <div className="table-wrapper drivers-table">
                <div className="row table-head">
                    <div className="header col-12 d-flex justify-content-end pd-r-55">
                        <div onClick={() => setIsVisibleNewDispatcherModal(true)}
                             className="header-btn header-round-btn" id="new-dispatcher-btn">
                            <span>Add a new dispatcher</span>
                        </div>
                    </div>
                </div>
                <div className="row table-head hide-on-medium-and-down" style={{paddingLeft: '80px'}}>
                    <div className="header col-3 d-flex justify-content-start">
                        Login
                    </div>
                    <div className="header col-2 d-flex justify-content-start">
                        Name
                    </div>
                    <div className="header col-3 d-flex justify-content-start">
                        Email
                    </div>
                    <div className="header col-3 d-flex justify-content-start">
                        Extensions
                    </div>
                </div>
                <div className="table-content">
                    <div className="scroll-view" style={{paddingLeft: '80px'}}>
                        {dispatchers.map((el) => {
                            const checked = numbers?.includes(el.phone);
                            return (
                                <DispatcherItemContainer
                                    isChecked={checked}
                                    onChangeCheckBox={onChangeCheckBox}
                                    deleteDispatcherAction={deleteDispatcherAction}
                                    key={el.id}
                                    data={el}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Dispatchers);
