const mImg = document.querySelector('.mainImg > figure > img');
const atc = document.querySelectorAll('.artinav h2');
const btn = document.querySelectorAll('.menunav > ul li button');
let offset = [];

let inter,idx=0,num=0;
let sd = {y:0, y2:0, state:true}

function init(){
    let sd = {y:0, y2:0, state:true}
    window.addEventListener('scroll',()=>{
        mImg.style = `opacity:${1 - ( window.pageYOffset / window.innerHeight )};`;
        
    })
}
atc.forEach((ele)=>{
    offset.push(ele.offsetTop - window.innerHeight/4)
});

btn.forEach((ele,key)=>{
    ele.addEventListener('click',()=>{

        window.scrollTo({
            left:0,
            top:offset[key],
            behavior:'smooth'
        });
        
        btn[idx].classList.remove('active')
        btn[key].classList.add('active')
        idx = key;
    })
})
