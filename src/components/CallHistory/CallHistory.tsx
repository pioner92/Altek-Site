import React, {useEffect} from 'react';
import CallHistorySubheader from "./CallHistroySubheader/CallHistorySubheader";
import CallHistoryItem from "./CallHistoryItem/CallHistoryItem";
import CallHistorySubhead from "./CallHistroySubhead/CallHistorySubhead";
import Preloader from "../../static/Preloader/Spinner-1s-200px.gif";
import {connectorType} from "./CallHistoryContainer";
//@ts-ignore
import {match} from "assert";
import {PaginationContainer} from "../Pagination/PaginationContainer";



export type ownPropsType = {
    match: { params: { n: string, id: string } }
}

const CallHistory: React.FC<connectorType> = (
    {
        drivers,
        callHistory,
        getCallHistoryAction,
        deleteCallHistoryAction,
        callHistoryPageCount,
        isFetching,
        writeToStoreCallHistoryAction,
        deleteCallHistoryItemFromListAction, match: {params: {n, id}}
    }) => {

    console.log(match)

    useEffect(() => {
        //@ts-ignore
        getCallHistoryAction({id, n,author:window.is_admin?undefined:'self'})
        //--DevMod
        // writeToStoreCallHistoryAction({
        //     pages_count: 0, user: ['12'],
        //     history: [
        //         {
        //             link: 'http://',
        //             date: '25 September 2020 10:46',
        //             from: '+15703144444',
        //             status: 'Busy',
        //             id: 12,
        //             to: '888'
        //         }]
        // })
        // --
    }, [])

    useEffect(() => {
        if (n) {
            getCallHistoryAction({n})
        }
    }, [n])


    return (
        <div className="block col-lg-9 col-12">
            {id && <CallHistorySubhead drivers={drivers} id={id}/>}
            <div className="block-title">
                <span>Call history</span>
            </div>
            <div className="table-wrapper">
                <CallHistorySubheader/>
                <div className="table-content">
                    <div className="scroll-view pb-5" style={{paddingRight: "25px", paddingLeft: "25px"}}>
                        {!isFetching || callHistory?.history.length > 0 ?
                            callHistory.history.map((el) => {
                                return (
                                    <CallHistoryItem
                                        deleteCallHistoryItemFromListAction={deleteCallHistoryItemFromListAction}
                                        deleteCallHistoryAction={deleteCallHistoryAction} key={el.id} Data={el}/>
                                )
                            }) :
                            <div className="preloader">
                                <img src={Preloader}/>
                            </div>
                        }
                    </div>
                </div>
            </div>
            {/*<Pagination currentPage={n} data={callHistoryPageCount} link='/settings/main/page/'/>*/}
            <PaginationContainer/>
            {/*<Pagination  onChange={(el,value)=>{console.log(value)}}  count={10}  color='standard'/>*/}
        </div>
    );
};

export default CallHistory
