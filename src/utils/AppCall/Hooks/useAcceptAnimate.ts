import {useEffect} from "react";

type propsType = {
    animFlag:boolean
    setBtnAcceptColor: (color: string | ((color: string) => string)) => void
}

enum acceptColor {
    activeAnim='#30f354',
    active='#7EDC5D',
    disabled='#AEDE9E'
}

export const useAcceptAnimate = ({animFlag,setBtnAcceptColor}:propsType) => {
    useEffect(()=>{
        let timer = setInterval(() => {
            if (animFlag) {
                setBtnAcceptColor((prevState) => {
                    if (prevState === acceptColor.disabled) {
                        return acceptColor.activeAnim
                    } else {
                        return acceptColor.disabled
                    }
                })
            } else {
                clearInterval(timer)
                setBtnAcceptColor(acceptColor.active)
            }
        }, 600)
        return () =>{
            setBtnAcceptColor(acceptColor.active)
            clearInterval(timer)
        }
    },[animFlag])
}
