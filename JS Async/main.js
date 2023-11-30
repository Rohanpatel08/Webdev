"use strict"
// // callbacks

// /*const posts = [
//     {title: 'Post One', desc: 'this is post one'},
//     {title: 'Post Two', desc: 'this is post two'},
// ]

// function getPosts(){
//     setTimeout(()=>{
//         let output = ''
//         posts.forEach((post)=>{
//             output = post.title;
//             console.log(output);
//         })
//         document.body.innerHTML = output
//     }, 2000)
// }

// function createPost(post, callback){
//     setTimeout(()=>{
//         posts.push(post);
//         callback();
//     },2000)
// }

// createPost({title: 'Post Three', desc: 'this is post three'}, getPosts);
// // getPosts();
// */


// //promises

// const posts = [
//     {title: 'Post One', desc: 'this is post one'},
//     {title: 'Post Two', desc: 'this is post two'},
// ]

// function getPosts(){
//     setTimeout(()=>{
//         let output = ''
//         posts.forEach((post)=>{
//             output = post.title;
//             console.log(output);
//         })
//         document.body.innerHTML = output
//     }, 2000)
// }

// function createPost(post){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             posts.push(post);
//             const err = false;
//             if (err == false) {
//                 resolve();
//             }else{
//                 reject('Something went wrong!')
//             }
//         },2000);
//     });
// }

// // createPost({title: 'Post Three', desc: 'this is post three'}).then(getPosts);


// // Async / Await

// async function init(){
//     const users = await fetch('https://jsonplaceholder.typicode.com/users');
//     let res = await users.json(); 
//     console.log(res);
// };

// init();


// let [a,b,c] = [10,20,30]

// let arr = [40, 50, 60]

// let n = [a,b,c,...arr]
// console.log(n);

let obj = {a:7, b:6}
const {a,b} = obj;

console.log(a,b);
