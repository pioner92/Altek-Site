export type responseDataType = {
    result:string
}

export const getFileUrl = (file:any) =>{
    const formData = new FormData()
    formData.append('file',file)
    formData.append('action','add_attachment')
    return fetch('/wp-admin/admin-ajax.php',{
        method:'POST',
        body:formData
    })
        .then((res)=>res.json())
        .then((data:responseDataType)=>data.result)
}
