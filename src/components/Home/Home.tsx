import React, { useEffect } from 'react';
import { HomeContentContainer } from './HomeContent/HomeContentContainer';
import Data from '../../data.json';
import {connectorType} from "./HomeContainer";
import {devMode} from "../../utils/devMode";

export type ownPropsType = {
    match: { params: { n:string } }
}

const Home:React.FC<connectorType> = (props) => {
    const {
        driversList, getDriversAction, isNewMessage,
        filterStatusTitle,
        clearFilterStatusDriversAction,
        writeToStoreDriversAction,
        match: { params: { n } }
    } = props;
    console.log(props);

    useEffect(() => {
        getDriversAction({});
        //--- Dev mod
        devMode(writeToStoreDriversAction.bind(this,{ result: Data.drivers.result, pages_count: '12'}))
        //---
        return () => {
            clearFilterStatusDriversAction();
        };
    }, []);
    useEffect(() => {
        if (n || isNewMessage) {
            getDriversAction({ n, filterStatusTitle });
        }
    }, [n, isNewMessage]);



    return (
        <>
            <div className="list-items-wrapper  col-lg-9 col-12">
                <div className="scroll-view pb-5">
                    {

                       driversList.map((el) => (
                            //@ts-ignore
                            < HomeContentContainer
                                key={el.id}
                                //@ts-ignore
                                data={el}/>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Home;
