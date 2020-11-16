import React from 'react';
import styles from 'styled-components'
import {CSSTransition} from "react-transition-group";
import CloseSvg from '../../../static/icons/closeDark.svg'
import {connectorType} from "./CallNotificationContainer";

export type propsType = {
    closeModal: () => void
    isVisible: boolean
}

export const CallNotification: React.FC<connectorType> = ({closeModal, isVisible,callNotificationContent}) => {

    const arr = [{read:'1',id:1,text:'12121212'},{read:'0',id:2,text:'12121212'}]
    const {content,unread_count}  = callNotificationContent

    return (
        <CSSTransition
            in={isVisible}
            timeout={{
                enter: 500,
                exit: 500,
            }}
            classNames='call-notification'
            mountOnEnter
            unmountOnExit
        >
            <NotificationDiv>
                <HeaderDiv>
                    <img style={{cursor: 'pointer'}} src={CloseSvg} onClick={closeModal}/>
                </HeaderDiv>
                <ContentWrapper>
                    {content.map((el) => {
                        return (
                            <NotificationItem read={el.read} key={el.id}>
                                <NotificationElement style={{color:+el.read?'#000':'#fff'}}> Missed call from: {el.text}</NotificationElement>
                            </NotificationItem>
                        )
                    })}
                </ContentWrapper>
            </NotificationDiv>
        </CSSTransition>

    );
};

type notificationItemType = {
    children:React.ReactChild
    read:string
}

const NotificationItem: React.FC<notificationItemType> = ({children,read}) => {
    return (
        <NotificationItemWrapper style={{backgroundColor:+read?'':'#EC5454'}}>
            {children}
        </NotificationItemWrapper>
    )
}


const NotificationDiv = styles.div`
    background-color:${'#ffffff'};
    height:500px;
    width:310px;
    top:10px;
    position:absolute;
    right:0px;
    z-index:20;
    border-radius:10px;
    box-shadow:0px 2px 5px #ccc;
`
const ContentWrapper = styles.div`
   overflow-y: scroll;
   height:90%;
`
const HeaderDiv = styles.div`
    height:10%;
    display:flex;
    flex-direction:row-reverse;
    align-item:center;
    padding:10px;
`
const NotificationItemWrapper = styles.div`
    display:flex;
    align-item:center;
    border-top:1px solid ${'#ececec'};
    padding:10px;
`
const NotificationElement = styles.h6`
    font-family:"Roboto", sans-serif;
    font-wight:100;
`
