/*Lists animation white*/
const list = document.querySelectorAll('.a965_row');

list.forEach(list => {
    list.addEventListener('mouseover', ()=>{
        list.classList.add('hover');
    });

    list.addEventListener('mouseout', ()=>{
        list.classList.remove('hover');
    });
});

/*change arrow-white*/
const festlist = document.querySelectorAll('.a965_row');

festlist.forEach(item => {
    const arrow = item.querySelector('.list-arrow');

    item.addEventListener('mouseover', () =>{
        if (arrow) arrow.src = 'images/logo-icons/Arrow Icon-Hover.svg';
    })
    item.addEventListener('mouseout', () => {
        if (arrow) arrow.src = 'images/logo-icons/Arrow Icon.svg'
    })
})