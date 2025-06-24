/*Lists animation*/
const list = document.querySelectorAll('.a965_row');

list.forEach(list => {
    list.addEventListener('mouseover', ()=>{
        list.classList.add('hover');
    });

    list.addEventListener('mouseout', ()=>{
        list.classList.remove('hover');
    });
});
