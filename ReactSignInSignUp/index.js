// console.log(a)
// abc();
// var abc = ()=>{
//     console.log("hello");
// }
// var a=9;
// console.log(a);

function doSomething() {
    console.log(this);
}
     
doSomething();

let obj = {
    name: "rohan",
    getname: function doSomething() {
        console.log(this.name);
    }
}

var getName = obj.getname;
       
var obj2 = {name:"akshay", getName };
obj2.getName();