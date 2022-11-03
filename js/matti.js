const mImg = document.querySelector('.mainimg > figure');
const atc = document.querySelectorAll('.artinav h2');
const btn = document.querySelectorAll('.menunav > ul li button');
const main = document.querySelector('main');
const board = document.querySelector('.artinav');

let inter;
let sd = {y:0, y2:0, state:true}
let offset = [];
let boardSet;
let scrY = window.scrollY

function init(){
    let sd = {y:0, y2:0, state:true}
    window.addEventListener('scroll',()=>{
        mImg.style = `opacity:${1 - ( window.pageYOffset / window.innerHeight )};`;
        
    })
}

/* function init(){

    let sd = {y:0, y2:0, state:true}
    window.addEventListener('scroll',()=>{
        sd.y = window.pageYOffset
        sd.state = (sd.y > sd.y2)?'true':'false';
        sd.y2 =sd.y;
        if(sd.state){
            
            mImg.classList.add('active');
            
        }else{
            //올림
            mImg.classList.remove('active');
        }
        console.log(sd.state);
    })
    
} */

window.addEventListener('load',init);

/* scrollFun = ()=>{
        sd.y = window.pageYOffset     
        sd.state = (sd.y > sd.y2) ?  'true' : 'false';
        sd.y2 = sd.y;
        if(sd.state == 'true'){
            //내림
            mImg.classList.add('active');
        }else{
            //올림
        }
    }
    window.addEventListener('scroll',scrollFun()); */

    

atc.forEach((ele)=>{
    offset.push(ele.offsetTop - window.innerHeight/5)
});

btn.forEach((ele,key)=>{
    let idx = 0;
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
