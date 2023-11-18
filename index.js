let count = 0;
const cats = [];
let price = document.querySelector('#price');
const paw = document.querySelector('#paw');
const buyCat = document.querySelector('#buycat');

buyCat.addEventListener('click', () => {
    let cash = price.innerHTML;
    const currentCash = parseInt(cash.split('$')[1]);
    if(currentCash >= 70){
        createCat();
        price.innerHTML = `$${currentCash - 70}`; // Corrected increment and assignment

    }

})

paw.addEventListener('click', () => {
    let cash = price.innerHTML;
    const currentCash = parseInt(cash.split('$')[1]);
    price.innerHTML = `$${currentCash + 1}`; // Corrected increment and assignment
})
paw.addEventListener('dblclick', e => {
    e.preventDefault();
})

paw.addEventListener('copy', e => {
    e.preventDefault();
})

const createCat = () => {
    const element = document.createElement('div');
    element.classList.add('cat');
    element.classList.add('move-right');
    document.body.appendChild(element); 
    cats.push({
        x: 0,
        action: 'right',
        element: element
    });
}

setInterval(() => {

    for(let i = 0; i < cats.length; i++){ 
        const cat = cats[i];
        if(cat.action === 'right' && cat.x > window.innerWidth - 100){
            cat.action = 'left';
            cat.element.classList.remove('move-right');
            cat.element.classList.add('move-left')
        } else if( cat.action == 'left' && cat.x < -10) {
            cat.action = 'right';
            cat.element.classList.remove('move-left');
            cat.element.classList.add('move-right')

        }
        if(cat.action === 'right') { 
            cat.x++
        } 
        else if(cat.action === 'left'){
            cat.x--
        };
        
        cat.element.style.left = `${cats[i].x}px`;
    }
}, 33);

paw.addEventListener('touchstart', () => {
    paw.classList.add('active');
});
paw.addEventListener('touchend', () => {
    paw.classList.remove('active');
});

setInterval(()=>{
    let cash = price.innerHTML;
    const currentCash = parseInt(cash.split('$')[1]);
    price.innerHTML = `$${currentCash + cats.length}`; // Corrected increment and assignment
},1000)