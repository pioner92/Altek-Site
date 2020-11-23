import {createEffect} from "effector";
import Data from '../../../data.json'

type sendFaxProps = {
    files: Array<HTMLInputElement>
    note: string
    numbers: Array<string>
}

export const sendFaxToServer = createEffect(async ({files, note, numbers}: sendFaxProps) => {
    try {
        const formData = new FormData()

        for (const file of files) {
            //@ts-ignore
            formData.append('file', file, file.name)
        }
        formData.append('note', note)
        formData.append('numbers', numbers.toString())

        const response = await fetch(`${Data.url}/send_fax`,{
            method: 'POST',
            body: formData
        })
        return await response.json()

    } catch (error) {
        console.log('Send fax error ' + error)
    }
})

