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

/*change arrow-white*/
const festlist = document.getElementById('a965_row');
const arrow = document.getElementById('list-arrow');

festlist.addEventListener('mouseover', ()=>{
    arrow.src = 'images/logo-icons/Arrow Icon-Hover.svg';  
});

festlist.addEventListener('mouseout', ()=>{
    arrow.src = 'images/logo-icons/Arrow Icon.svg'
})

/*lists animation black*/
const listBlack = document.querySelectorAll('.a965_rowblack');

listBlack.forEach(listBlack => {
    listBlack.addEventListener('mouseover', ()=>{
        listBlack.classList.add('hover');
    })
})