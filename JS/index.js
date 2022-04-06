// 1.ways to print in JavaScript
        // console.log("hello world");
        // alert("hello world");
        // document.write("hello world");
        
        
//2. javascript consaole API
        //  console.log("hello world",8*8,"hehehehe");
        //  console.warn("this is warning");
        //  console.error("this is error");

//3.javascript variables
      //what are variables
      //we use ....var....

    //   var n1 = 22;
    //   var n2 = 22;
    //   console.log(n1+n2);


//4. Datatypes in javascript
    //NUMBERS
    //var n1 = 44;

    //STRINGS
    //var str1="hello vishwa";

    //OBJECTS
    // var marks = {
    //      vishwa : 56,
    //      chetan:44,
    //      virat:100,
    //      
    //  }

//5.Booleans
        // var a = true;
        // var b= false;
        // console.log(a,b);

//6. undefined , if nothing is mentioned then its undefined only
//var n;
   // console.log(n);

//7. there are two types of Datatypes in javascript
   /* 1.Primitive datatypes:undefined,null,Number,String,Boolean,Symbol.
    2.Reference datatypes :Objects,Arrays
    
    */

  //var arr = [1,2,"vishwa",4,5];
 // console.log(arr);  


 //  7.    .................FUNCTIONS.................................

//  function avg(a,b){
//      return (a+b)/2;
//  }
 //c = avg(2,2);
 //console.log("The average of given input is :",c);

//  var a = '2';
//  var a1 = 2;
 //console.log(a,a1);
 //NOTE: if its number it will print in blue color and if its black color then it will print in black



 //  8.  .......CONDITIONAL STATEMENTS.........

 /*
   var a = 10;
 if(a>0){
     console.log("postive");
 }
 else if(a<0){
     console.log("negative");
 }
 else{
     console.log("zero");
 }
 */

 // 9.........LOOPS.................

 //var arr=[1,2,3,'vishwa',5];

/* for(var i=0;i<arr.length;i++){
     console.log(i);
 }
*/

//NOTE:THIS BELOW FOREACH IS BETTER AND SIMPLER THAN FOR LOOP

//  arr.forEach(function(i){
//      console.log(i)
//  })


//NOTE:


/*     var: its old javascript useage
       let: its new, and in functions its scope is over once function is done (good memory management)
  */
/*     const: its used when we are afraid of over writting things */
 
 /*const v=0;
 v++; //This will give error because we are trying to change v
*/


//WHILE LOOP
/*let arr1 =[1,2,3,4,5,6,7];
let j=0;
while(j<arr1.length){
    console.log(arr1[j]);
    j++;
}

//do while loop
do{
    console.log(arr1[j]);
        j++
}while(j<arr1.length);
*/

//break and continue statment
 /*
 let ac=[1,2,3,4,5,6,7];
 for(var i =0;i<ac.length;i++){
     if(i==2)
         //break;
         //continue
     console.log(ac[i])
 }
*/

//METHODS IN JAVASCRIPT
//pop,push,sort,shift,unshift,tostring

// var arr2 =['vishwa',1,44,'viart','a','A'];
// arr2.push('vish');
// arr2.pop()
// arr2.shift(5)
// arr2.sort()
// var v=arr2.unshift('anv')
// console.log(v)
//console.log(arr2);

// var arr1 =['vishwa',1,44,'viart','a','A'];
// var s=arr1.toString()
// console.log(s)

//STRING METHODS IN JS
// x.length,   x.indexof(''),   x.lastindexof(''),  x.slice(1,2),   x.replace(src,dest)
// var x = [1,2,3,'vishwa',5];
// console.log(x.length);
// console.log(x.indexOf('vishwa'))
// console.log(x.slice(1,3));
// console.log(x.reverse())

// //............DATE METHODS.............
// let date = new Date();
// console.log(date.getTime()); //time is seconds Ex:  373648321489
// console.log(date.getDay());
// console.log(date.getFullYear());
//many more


//DOM (DOCUMENT OBJECT MODEL)    Ex:   document.location,document.title,document.url.........
//DOM manupulation
//let elem = document.getElementById('firstcon')
//console.log(elem)
//let elemClass = document.getElementsByClassName('container')
//console.log(elemClass);
//elemClass[1].style.background='red';
//elemClass[0].classList.add('ttooos');
//elemClass[0].classList.add('three');
//elemClass[1].classList.add('ttooos');
//elemClass[0].classList.add('three');
//elemClass[1].classList.add('three');
// console.log(elem.innerHTML)   //gives inner struture
// console.log(elemClass[0].innerHTML) //givess inner struture of particular field or div
// console.log(elem.innerText)


//get elements by tag name like div,button
//tagname1 = document.getElementsByTagName('button');
//tagname2 = document.getElementsByTagName('div');
// console.log(tagname1);
// console.log(tagname2);


//creating new child element like new para <p>,header ...<h2>tag
createdElement=document.createElement('p');
createdElement.innerTEXT="hiiiiiiiiiiiii this is vishhhhhhhhhh";
tagname2[0].appendChild(createdElement);
createdElement2=document.createElement('b');
createdElement2.innerTEXT="this is created bold";
tagname2[0].replaceChild(createdElement2,createdElement);
//removeChild(element); ----->removes element, there are many more methods explore it google it.



//...................selecting using queries...............
sel1 = document.querySelector('.container')
sel2 = document.querySelectorAll('.container')
//console.log(sel1,sel2)



//...............Events in javascript..............
// function clicked(){
//     console.log("clicked vishwa");
// }



// firstcon.addEventListener('click',function(){
//     document.querySelectorAll('.container')[0].innerHTML="<b>we have clicekd</b>"
//     console.log("clicked on container")
// })

// firstcon.addEventListener('mouseover',function(){
//     console.log("Mouse on container")
// })

// firstcon.addEventListener('mouseout',function(){
//     console.log("mouse out of container")
// })



// PrevHTML = document.querySelectorAll('.container')[0].innerHTML;
// firstcon.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[0].innerHTML=PrevHTML
//     console.log("mouse up when on container")
// })

// firstcon.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[0].innerHTML="<b>we have clicekd</b>"

//     console.log("mouse down when on container")
// })


//NOTE : THERE ARE MANY MORE EVENTS FOR [DRAG] EXPLORE


//.........ARROW FUNCTIONS...

//same as normal function but arrow
// summ=(a,b)=>{
//     return a+b;
// }


//..........settimeout and setinterval
//runs after stipulated given time
// hello=()=>{
//     firstcon.addEventListener('mouseup',function(){
//         document.querySelectorAll('.container')[0].innerHTML='<b>hurrey</b>'
//         console.log('hi vishwa here');
//     })
// }
//setTimeout(hello,2000)  //2000 milli seconds
//setInterval(hello,2000)  //2000 milli seconds   
/* 
 it runs continuous every 2000millisec so to stop  it
  returns an ID store it in some variable and use clearInterval(variable) or clearTimeout(varriable)
*/
//variable = setInterval(hello,2000)
//clearInterval(variable)





//............JavaScript local storage......

//  1.But store only small data like name and date of birth ....blablabla
//  2.Dont store important data as it is visible in the (Application)in console lane..

// localStorage.setItem('name','vishwa');
// localStorage.getItem('name');
// localStorage.clear();
//localStorage.removeItem('name')


//...... ...........JSON.....................

//  1.IT is used to exchanege data
//  2.json supports only double quotes""

// obj = {"name":'vishwa',"age":21,'married':false ,"a":{"this":'tha\"t'}}
// jso = JSON.stringify(obj);
//console.log(obj,typeof(obj))     //gives content of obj and type of it thats OBJECT
//console.log(jso,typeof(jso))     //stringfy converts obj to string 

// parsed =JSON.parse(`{"name":"vish","age":21,"married":false ,"a":{"this":"that"}}`)
// console.log(parsed)


//ECMAScript: its bascically the versions
//ES4,ES5(ARROW FN),ES6

//..................TEMPLATE LITERALS-BACKTICKS........................
a=44;
console.log(`the no is ${a}`)                    //used backticks
console.log("the no is ${a}"+a)                 //used doublequotes then put + every time 