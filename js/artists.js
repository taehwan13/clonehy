fetch("./data/artists.json")
.then((str)=>( str.json()))
.then((data)=>{

    const aListBtn = document.querySelectorAll(".a-btn li button");
    const aList = document.querySelector(".artlist > ul");
    const navList = document.querySelectorAll(".a-btn li");
    const navBtn = document.querySelector(".a-btn");

    const hovImg = document.querySelector(".art-hover > figure");

    let artLi ='';
    let num = 0;

    function listFun(t){
        artLi = '';
        for(let key in data){        
            //console.log(key,t)
            
            if(key == t){
                for(let title in data[t]){
                    artLi += `<li data-key="${title}"><a href="./martin.html">${title}</a></li>`
                }
            }
            if(t=='All'){
                for(let title in data[key]){
                    artLi += `<li data-key="${title}"><a href="./martin.html">${title}</a></li>`
                }
            }
        };
        aList.innerHTML = artLi;


        const thumb = document.querySelectorAll(".artlist ul li");
        thumb.forEach((item,key)=>{ 
            item.addEventListener('mouseenter',()=>{
                let imgSrc, dataKey = item.dataset.key;
                for(let key in data){ 
                    console.log( key)
                    for(let title in data[key]){
                        if(title == dataKey){
                            imgSrc = data[key][title];
                        }
                    }
                }
                hovImg.innerHTML = `<img src="./img/GALLERYHYUNDAI/Artists/${imgSrc}">`;
                
                item.addEventListener('mouseleave',()=>{
                    hovImg.innerHTML = ``;}) 
            })
        });
    

    } 
    listFun('Artists');
    navBtn.addEventListener('click',()=>{
        navBtn.classList.toggle('active');
        
/*         let target = event.target.className;
        if(target !=='a-btn active'){
            navBtn.classList.add('active');
        }else{
            navBtn.classList.remove('active');
        } */
    })
    
    aListBtn.forEach((btn,key)=>{
        btn.addEventListener('click',()=>{
            
            navList[num].classList.remove('active');
            aListBtn[num].classList.remove('active');
            navList[key].classList.add('active');
            aListBtn[key].classList.add('active');
            num = key;

            listFun(btn.textContent);

        })
    });

  



});
