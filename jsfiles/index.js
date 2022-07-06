
function newgenerate(size){
  var boxes = document.querySelectorAll(".bar");

boxes.forEach(box => {
  box.remove();
});
let arr=[];
for(let i=0;i<size;i++){
  arr[i]=randomintfromrange(30,450);
}

for(let i=0; i<size;i++) {
  var x = document.createElement("div");

  x.id="a"+parseInt(i);
x.className="bar";
x.style.verticalAlign;
 // x.innerHTML = "CLICK ME";
  x.style.width="15px";
x.style.height=parseInt(arr[i])+"px";
 //x.style.backgroundColor ="yellow";
// document.body.appendChild(x);
  
  var element = document.getElementById("allbar");
  element.appendChild(x);}
}

function randomintfromrange(min,max){
  return Math.floor(Math.random() * (max - min) ) + min;

}
function swap(el1,el2)
{
  let temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}
function waitforme(milisec) {
  return new Promise(resolve => {
      setTimeout(() => { resolve('') }, milisec);
  })
}   
//to disable all sorting button during execution of one sorting algo is going on
function disableSortingBtn(){
  document.querySelector("#Bubble_sort").disabled = true;
  document.querySelector("#Insertion_sort").disabled = true;
  document.querySelector("#Merge_sort").disabled = true;
  document.querySelector("#Quick_sort").disabled = true;
  document.querySelector("#Selection_sort").disabled = true;
}
//to enable all sorting button after generating new array
function enableSortingBtn(){
  document.querySelector("#Bubble_sort").disabled = false;
  document.querySelector("#Insertion_sort").disabled = false;
  document.querySelector("#Merge_sort").disabled = false;
  document.querySelector("#Quick_sort").disabled = false;
  document.querySelector("#Selection_sort").disabled = false;
}
//disable size slider button
function disableSizeSlider(){
  document.querySelector("#array_size").disabled = true;
}

// Enables size slider button
function enableSizeSlider(){
  document.querySelector("#array_size").disabled = false;
}

// Disables newArray button 
function disableNewArrayBtn(){
  document.querySelector("#New_array").disabled = true;
}

// Enables newArray buttons 
function enableNewArrayBtn(){
  document.querySelector("#New_array").disabled = false;
}
let delay = 260;

// Selecting speed slider from DOM
/*let speed = document.querySelector('#speed_input');

// Event listener to update delay time 
speed.addEventListener('input', function(){
    console.log(speed.value, typeof(speed.value));
    delay = 320 - parseInt(speed.value);
});*/
function js (){
  
  document.getElementById("Bubble_sort").addEventListener("click",bubblesort);
  //document.getElementById("New_array").addEventListener("click",newgenerate(parseInt(arraySize.value)));
  document.getElementById("Selection_sort").addEventListener("click",selectionsort);
  document.getElementById("Insertion_sort").addEventListener("click",insertionsort);
  document.getElementById("Merge_sort").addEventListener("click",Merge_sort);
  document.getElementById("Quick_sort").addEventListener("click",Quick_Sort);
  let arraySize = document.querySelector('[id="array_size"]');
  newgenerate(parseInt(arraySize.value));
  arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    newgenerate(parseInt(arraySize.value));
  });
  document.getElementById("New_array").addEventListener("click",function(){
    console.log(arraySize.value, typeof(arraySize.value));
    newgenerate(parseInt(arraySize.value));
  });
  let speed = document.querySelector('#speed_input');

// Event listener to update delay time 
speed.addEventListener('input', function(){
    console.log(speed.value, typeof(speed.value));
    delay = 320 - parseInt(speed.value);
});
}
