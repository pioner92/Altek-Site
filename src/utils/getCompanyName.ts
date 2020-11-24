export const getCompanyName = () => {
    const host = window.location.host
    const match = host.match(/([a-z]+)./);
    if(match){
        return match[1]
    }
    return 'null'
}
