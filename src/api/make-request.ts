type method = 'GET' | 'POST' | 'PUT'
type options = {
    method: method
    body?: any
    headers: {}
}


export const makeRequest = async (url: string, method: method = 'GET', body?: any) => {
    try{
        const options: options = {
            method,
            headers: {
                'Content-Type': 'application/json',
            }
        }
        body && (options.body = JSON.stringify(body))

        const response = await fetch(url, options)
        if(response.ok){
            return await response.json()
        }
    }
    catch (e) {
        console.log('Request ERROR: ',e)
    }
}
