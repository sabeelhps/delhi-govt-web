
const buttons = document.querySelectorAll('button');
const screen  = document.getElementById('screen');



for(let item of buttons){
    item.addEventListener('click',(e)=>{
        let buttonText=e.target.innerText;

        console.log(buttonText);

        if(buttonText=='x'){
            screen.value+='*';
        }
        else if(buttonText == 'C'){
            screen.value="";
        }
        else if(buttonText == '='){

            try{
                screen.value=eval(screen.value);
            }catch{
                screen.value="Invalid Operation";
            }

            
        }else{
            screen.value+=buttonText;
        }
    })
}