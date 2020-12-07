const origin = 'https://sms.green-node.ru'

const urlCreate = (url: string) => `${origin}${url}`

export const urls = {
    getToken: (name: string, number: string) => urlCreate(`/token/generate/${name}/${number}`),
    getActiveDispatchers: (companyName: string) => urlCreate(`/get_active_dispatchers/${companyName}`),
    sendFax: () => urlCreate(`/send_fax`),
    setDispatchersList: () => urlCreate(`/set_dispatchers_list`),
    callToDispatcher: (companyName: string, to: string, myExt: string) => urlCreate(`/call_to_dispatcher/${companyName}/${to}/${myExt}/agent`)
}
