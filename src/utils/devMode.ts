export const devMode = (fn: any) => {
    //@ts-ignore
    if (window.location.href === 'http://localhost:3000/') {
        fn()
    }
}
