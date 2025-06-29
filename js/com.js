/*Lists animation black*/
const listb = document.querySelectorAll('.a965_rowb');

listb.forEach(listb => {
    listb.addEventListener('mouseover', ()=>{
        listb.classList.add('hover');
    });

    listb.addEventListener('mouseout', ()=>{
        listb.classList.remove('hover');
    });
});

/*change arrow-black*/
const festlistb = document.querySelectorAll('.a965_rowb');

festlistb.forEach(item => {
    const arrowb = item.querySelector('.list-arrow-b');

    item.addEventListener('mouseover', () =>{
        if (arrowb) arrowb.src = 'images/logo-icons/Black Arrow Icon-Hover.svg';
    })
    item.addEventListener('mouseout', () => {
        if (arrowb) arrowb.src = 'images/logo-icons/Black Arrow Icon.svg'
    })
})