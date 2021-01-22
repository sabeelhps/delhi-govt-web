// SHORTCOMING OF ONCLICK--------------------------------

// const btn = document.getElementById('btn');


// const shout=function(e){
//     console.log("Shout!!!!!");
// }

// const scream=function(e){
//     console.log("Scream");
// }

// btn.addEventListener('click',shout);
// btn.addEventListener('click',scream);

// btn.addEventListener('click',(e)=>{
//     console.log(e.target);
//     console.log("Hey I am Shouting");
// });



// btn.onclick=shout;
// btn.onclick=scream;





// ----------------------------EVENT LISTENER-----------------------

const divs = document.querySelectorAll('div');

// const h1= document.getElementsByTagName('h1')[0];


// h1.addEventListener('click',(e)=>{
//     e.target.style.backgroundColor='cyan';
// })

for(let eachDiv of divs){
    eachDiv.addEventListener('click',(e)=>{
        e.target.style.display='none';
    })
}


// divs[1].addEventListener('click',(e)=>{
//     e.target.style.display='none';
// })
// divs[2].addEventListener('click',(e)=>{
//     e.target.style.display='none';
// })
// divs[3].addEventListener('click',(e)=>{
//     e.target.style.display='none';
// })
// divs[4].addEventListener('click',(e)=>{
//     e.target.style.display='none';
// })




