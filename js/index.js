const a965_header_hammenu = document.querySelector('.a965_header_hammenu');

const off_screen_menu = document.querySelector('.off_screen_menu');

a965_header_hammenu.addEventListener('click', () => {
    a965_header_hammenu.classList.toggle('active');
    off_screen_menu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
})

/*festivals-frame animation*/
const left = document.querySelector('.a965_frame1_content_left');
const frame = document.querySelector('.a965_frame1');
const right = document.querySelector('.a965_frame1_content_right');

left.addEventListener('mouseover', () => {
    frame.classList.add('hover');
});

left.addEventListener('mouseout', ()=> {
    frame.classList.remove('hover');
});

right.addEventListener('mouseover', ()=> {
    frame.classList.add('hover2');
})

right.addEventListener('mouseout', ()=> {
    frame.classList.remove('hover2');
})

/*festivals-frame2 animation*/
const left2 = document.querySelector('.a965_frame2_content_left');
const frame2 = document.querySelector('.a965_frame2');
const right2 = document.querySelector('.a965_frame2_content_right');

left2.addEventListener('mouseover', () => {
    frame2.classList.add('hover');
});

left2.addEventListener('mouseout', ()=> {
    frame2.classList.remove('hover');
});

right2.addEventListener('mouseover', ()=> {
    frame2.classList.add('hover2');
});

right2.addEventListener('mouseout', ()=> {
    frame2.classList.remove('hover2');
});

/*change image*/
const image24 = document.getElementById('a965_icons_24');
const image65 = document.getElementById('a965_icons_65');
const imageTM = document.getElementById('a965_icons_TM');

image24.addEventListener('mouseover', ()=>{
    image24.src = 'images/home/24OWLS-Hover.png';  
});
image24.addEventListener('mouseout', ()=>{
    image24.src = 'images/home/24OWLS.png';  
});

image65.addEventListener('mouseover',()=>{
    image65.src = 'images/home/65-Hover.png'
});
image65.addEventListener('mouseout',()=>{
    image65.src = 'images/home/65.png'
});
imageTM.addEventListener('mouseover',()=>{
    imageTM.src = 'images/home/Tangent Moves-Hover.png'
});
imageTM.addEventListener('mouseout',()=>{
    imageTM.src = 'images/home/Tangent Moves.png'
});
