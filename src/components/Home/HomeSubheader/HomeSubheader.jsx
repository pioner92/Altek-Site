import React, {useEffect, useRef, useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import SubheaderTitle from './SubheaderTitle/SubheaderTitle';
import {SubheaderMenuFilterContainer} from './SubheaderMenu/SubheaderMenuFilterContainer';
import {SubheaderMenuStatusContainer} from './SubheaderMenu/SubheaderMenuStatusContainer';
import {setDispatchersQueue} from "../../../utils/callQueu/setDispatchersQueue";
import {InQueueValidate} from "../../../utils/callQueu/InQueueValidate";
import burgerIcon from '../../../static/icons/burger.svg';
import inQueue from '../../../static/icons/in_the_queue.svg'
import outOfQueue from '../../../static/icons/out_of_queue.svg'


const HomeSubheader = ({
                           selectedId, setDriverStatusAction,writeToStoreQueueStatusAction, activeDispatchers, clearSelectedDrivers, match: {params: {n}},
                       }) => {
    const [isInQueue, setIsInQueue] = useState(false)
    const checkbox = useRef();
    const [toggle, setToggle] = useState(false);
    const [toggleFilterMenu, setToggleFilterMenu] = useState(false);

    const changeCheckbox = () => {
        setToggleFilterMenu(checkbox.current.checked);
        clearSelectedDrivers();
    };

    // const onSetQueueStatus = () => {
    //     setDispatchersQueue(window.number, !isInQueue)
    //         .then((res) => setIsInQueue((prevState => !prevState)))
    //
    // }

    useEffect(() => {
        if (selectedId.length > 0) {
            setToggleFilterMenu(false);
            setToggle(true);
        } else {
            setToggle(false);
        }
    }, [selectedId]);


    useEffect(()=>{
        const company_name = window.location.host.match(/([a-z]+)./)[1]
        const number = window.number
        setIsInQueue(InQueueValidate(activeDispatchers,number))
    },[activeDispatchers])

    useEffect(()=>{
        writeToStoreQueueStatusAction(isInQueue)
    },[isInQueue])

    return (
        <div style={{display:'flex'}} className="hide-on-medium-and-down subhead-wrapper">
            <div className="list-headers-wrapper-main container-wrap col-lg-9" style={{paddingRight: '41px'}}>
                <div style={{height: '22px'}}
                     className="checkbox-column item-column col-12 col-lg-1 checkbox_dispatcher">
                    <label className="b-contain pl-0">
                        <span>
                            <div className="hide-on-medium-and-up header">Select</div>
                        </span>
                        <label className="main-burger" htmlFor="checkdbox_row">
                            <img src={burgerIcon} alt="menu"/>
                        <input checked={toggleFilterMenu} onChange={changeCheckbox} ref={checkbox} data-id=""
                               id="checkdbox_row"
                               type="checkbox"/>
                        </label>

                        {/*<div class="burger-menu-btn">*/}
                        {/*    <img src={burgerIcon} alt="menu"/>*/}
                        {/*</div>*/}
                        <div id="63211" className="b-input"/>
                    </label>
                </div>
                <CSSTransition
                    in={toggle}
                    timeout={{
                        enter: 200,
                        exit: 100,
                    }}
                    classNames={'my-node'}
                    mountOnEnter
                    unmountOnExit
                >
                    <SubheaderMenuStatusContainer
                        clearSelectedDrivers={clearSelectedDrivers}
                        setDriverStatusAction={setDriverStatusAction}
                        page={n}
                    />
                </CSSTransition>

                <CSSTransition
                    in={toggleFilterMenu}
                    timeout={{
                        enter: 200,
                        exit: 100,
                    }}
                    classNames={'my-node'}
                    mountOnEnter
                    unmountOnExit
                >
                    <SubheaderMenuFilterContainer/>
                </CSSTransition>

                <CSSTransition
                    in={!toggle && !toggleFilterMenu}
                    timeout={{
                        enter: 800,
                        exit: 0,
                    }}
                    classNames={'my-node2'}
                    mountOnEnter
                    unmountOnExit
                >
                    <SubheaderTitle/>
                </CSSTransition>

            </div>
                {/*{SetQueueStatus(isInQueue, onSetQueueStatus)}*/}
            {/*<img src={inQueue} alt=""/>*/}
        </div>
    );
};

// const SetQueueStatus = (status, callback) => {
//     return (
//         <div onClick={callback} className='col-lg-3' style={{display: 'flex', cursor: 'pointer',justifyContent:'center'}}>
//             {status
//                 ? <img src={inQueue} alt=""/>
//                 : <img src={outOfQueue} alt=""/>}
//         </div>
//     )
// }

export default React.memo(HomeSubheader);
