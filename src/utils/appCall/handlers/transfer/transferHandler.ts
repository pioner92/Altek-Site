import Data from "../../../../data.json";


type propsType = {
    to:string
    from:string
    myExt:string
    callback?:()=>void
}

export const transferHandler = ({to,myExt,from,callback}:propsType) => {
    console.log('FROM')
    console.log(from)
        fetch(`${Data.url}/call_to_dispatcher/${to}/${myExt}/agent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({from}),
        })
            .then((res) => callback && callback());
}
