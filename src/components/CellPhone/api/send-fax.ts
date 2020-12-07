import {createEffect} from "effector";
import {makeRequest} from "../../../api/make-request";
import {urls} from "./urls/urls";

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

        return  await makeRequest(urls.sendFax(),'POST',formData)

    } catch (error) {
        console.log('Send fax error ' + error)
    }
})

