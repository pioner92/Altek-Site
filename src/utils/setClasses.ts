export const setClasses = () => {
    let elements = [
        document.querySelector('#root'),
        document.querySelector('html'),
        document.querySelector('body'),
        document.querySelector('.App'),
        document.querySelector('.page'),
        document.querySelector('.page-wrapper'),
        document.querySelector('.container')
    ] as Array<HTMLElement>;

    if (window.innerHeight <= elements[1].offsetHeight) {
        elements.forEach(function (el) {
            el.classList.remove("h-mh-100");
        })
    } else {
        elements.forEach(function (el) {
            el.classList.add("h-mh-100");
        })
    }
}
