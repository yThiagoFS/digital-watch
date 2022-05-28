
const horas = document.getElementById('hora')
const minuto = document.getElementById('minutos')
const segundo = document.getElementById('segundos')
const body = document.querySelector('.body')

const relogioBtn = document.querySelector('.relogio')



let imagensDia = ['./img/imgDia2.jpg', './img/imgDia3.jpg'  , './img/imgDia6.jpg', './img/imgDia8.jpg' , './img/imgDia9.jpg' , './img/imgDia10.jpg' , './img/imgDia12.jpg' , './img/imgDia13.jpg' ,  './img/imgDia15.jpg']

let imagensTarde = ['./img/imgTarde1.jpg', './img/imgTarde2.jpg', './img/imgTarde3.jpg' , './img/imgTarde4.jpg' , './img/imgTarde5.jpg' ,  './img/imgTarde8.jpg' , './img/imgTarde10.jpg' ,  './img/imgTarde12.jpg' ,  './img/imgTarde15.jpg']

let imagensNoite = ['./img/imgNoite1.jpg', './img/imgNoite2.jpg', './img/imgNoite3.jpg' , './img/imgNoite4.jpg' , './img/imgNoite5.jpg' ,  './img/imgNoite7.jpg' , './img/imgNoite8.jpg' , './img/imgNoite9.jpg' , './img/imgNoite10.jpg' , './img/imgNoite11.jpg' , './img/imgNoite12.jpg' , './img/imgNoite13.jpg'  , './img/imgNoite15.jpg']

let imagemBg = 0;

function randomImg(){

    let data = new Date();
    let hr = data.getHours();
        
   
    
    if (hr >= 7 && hr < 12) {  
        imagemBg = imagensDia[Math.floor(Math.random() * imagensDia.length )]
        body.style.backgroundImage = "url("+imagemBg+")"  
        console.log(imagemBg)
    }else if (hr >= 12 && hr < 18) { 
        imagemBg = imagensTarde[Math.floor(Math.random() * imagensTarde.length)]
        body.style.backgroundImage = "url("+imagemBg+")"
        
    }else if (hr >= 18 ) {  
        imagemBg = imagensNoite[Math.floor(Math.random() * imagensNoite.length)]
        body.style.backgroundImage = "url("+imagemBg+")"
        

    }
    
}

randomImg()

const relogio = setInterval( () => {
    let data = new Date();
    let hr = data.getHours();
    let min = data.getMinutes();
    let sec = data.getSeconds();
    

    if(hr < 10){
        hr = '0' + hr;
    }
    if(min < 10){
        min = '0' + min;
    }
    if(sec < 10){
        sec = '0' + sec;
    }

    horas.textContent = hr;
    minuto.textContent = min;
    segundo.textContent = sec;
    
    
    
 
})

function displayRelogio(){
    if(relogioBtn.classList.contains('active')){
        relogioBtn.classList.remove('active')
        body.style.alignItems = "center"
    } else {
        relogioBtn.classList.add('active')
        body.style.alignItems = "self-end"
    }
}



