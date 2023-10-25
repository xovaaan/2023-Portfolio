function scrollToElement(element,existence = 0){
    const elements = document.querySelectorAll(element);
    if (elements.length > existence) {
        element[existence].scrollToView({behavior: 'smooth'});
}
}

const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');

link1.addEventListener('click', () => {
    scrollToElement('.second-intro');
    
})