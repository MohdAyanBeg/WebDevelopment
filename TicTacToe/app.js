const box=document.querySelectorAll('.box');
const winner=document.querySelector('.winState')
const boxes=document.querySelector('.boxes');
const btn=document.querySelector('.startbtn');
// const chance=document.querySelector('.winState');
let gameover=false;
let player='X';
 let count=0;
 let p1,p2;



//chances
let chances = ()=>{
    return player==='X'?'O':'X'
}

//win

const win=()=>{
    let wins=[[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

    wins.forEach(e=>
                {
                    if(box[e[0]].innerText==box[e[1]].innerText && box[e[1]].innerText==box[e[2]].innerText && box[e[0]].innerText!=="")
                    {
                        winner.children[0].innerText=`${box[e[0]].innerText} won the match`;
                        gameover=true; 
                    }
                    
                    
                })
}

//logic
const play=()=>{
    Array.from(box).forEach(element=>
    {
        element.addEventListener('click',e=>
        {
            if(element.innerHTML==='')
            {
                element.innerHTML=player;
                player=chances()
                console.log("turn changed")
                win();
                if(!gameover){

                winner.children[0].innerHTML=`Turn for ${player}`
                console.log(count++)
               if(count===9){
                    winner.children[0].innerHTML=`DRAW MATCH`
                }
            }}
        })
    })

}
// start
btn.addEventListener('click',()=>{
    winner.children[0].innerHTML=`Turn for ${player}`;
    play()
})     
//restart

document.querySelector('.resetbtn').addEventListener('click',()=>{
    Array.from(box).forEach(element=>
        {
            element.innerText='';
            player='X';
            winner.children[0].innerText=`Turn for ${player}`;
            gameover=false;
            count=0;
        })
        play()
        })
// //  //restart
// //  document.querySelector('resetbtn').addEventListener('click',()=>{
// //     count=0
// //  })
// //  //start
//  btn.addEventListener('click',e=>
//  {
//     console.log("start")
//     console.log(chance.children[0].innerHTML)
//     // winner.children[0].innerHTML=`Chance of ${player[count%2]}`;
//     changeTurn();
//     gameover=true;
//     console.log(gameover)
//  })
//  //change turn
// function changeTurn()
// {
//     if(count%2==0)
//     {
//         winner.children[0].innerHTML=`Chance of ${player[count%2]}`;
//     }
//     else
//     {
//         winner.children[0].innerHTML=`Chance of ${player[count%2]}`;
//     }
// }
// //draw
// function draw(count)
// {
//     if(count===9){
//         return true;
//         count=0;
//     }
//     else{
//         return false;
//     }
// }
// //check win
// const win=(won)=>{
//     let wins=[
//         [0,1,2],
//         [3,4,5],
//         [6,7,8],
//         [0,3,6],
//         [1,4,7],
//         [2,5,8],
//         [0,4,8],
//         [2,4,6]
//     ]
//     wins.forEach(e=>
//         {
//             console.log("c=",count)
//             // console.log(box[e[0]].textContent,box[e[1]].textContent,box[etextContent)
//             if(box[e[0]].textContent==box[e[1]].textContent && box[e[1]].textContent==box[e[2]].textContent && box[e[0]].textContent!=="")
//             {
//                 winner.children[0].innerHTML=`${player[won]} won the match`;
//                 gameover=false;                
//             }
//             else{
//                 changeTurn();
//             }
//         })
// }
// // //logic
//         box.forEach(element=>
//             {
//                 element.addEventListener('click',e=>
//                 {
//                     if(element.textContent=="")
//                     {
//                         let won=count%2;
//                         element.textContent=`${player[count%2]}`;
//                         count+=1
//                         win(won)
//                         draw(count                       
//                     }
//                 })
//             })
// //Reset
// document.querySelector('.resetbtn').addEventListener('click',()=>{
//     box.forEach(e=>{
//         e.textContent=""
//         winner.children[0].innerHTML=``
//         count=0;
// })// })
    

