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
import {getCompanyName} from "../../../utils/getCompanyName";


const HomeSubheader = ({
                           selectedId, setDriverStatusAction, clearSelectedDrivers, match: {params: {n}},
                       }) => {
    const checkbox = useRef();
    const [toggle, setToggle] = useState(false);
    const [toggleFilterMenu, setToggleFilterMenu] = useState(false);

    const changeCheckbox = () => {
        setToggleFilterMenu(checkbox.current.checked);
        clearSelectedDrivers();
    };


    useEffect(() => {
        if (selectedId.length > 0) {
            setToggleFilterMenu(false);
            setToggle(true);
        } else {
            setToggle(false);
        }
    }, [selectedId]);


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
        </div>
    );
};

export default React.memo(HomeSubheader);
