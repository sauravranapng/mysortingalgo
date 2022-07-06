async function insertionsort(){
   disableSortingBtn();
   disableSizeSlider();
   disableNewArrayBtn();
   let arraySize = document.querySelector('[id="array_size"]');
   
   var j;
    for(let i=1;i<parseInt(arraySize.value);i++){
    
    var key=document.getElementById("a"+parseInt(i)).style.height; 
   document.getElementById("a"+parseInt(i)).style.background="red";
   // var j;
    j=i-1;        
 // var ele1=document.getElementById("a"+parseInt(j));       
 console.log(i);
//var ele2=document.getElementById("a"+parseInt(min_idx));  
while(j>=0 &&( parseInt(document.getElementById("a"+parseInt(j)).style.height)>parseInt(key))){
 var ele2=document.getElementById("a"+parseInt(j+1)); 
 //console.log(i);
 await waitforme(delay);
 var ele1=document.getElementById("a"+parseInt(j)); 
ele2.style.height=ele1.style.height;
j=j-1;
//var ele1=document.getElementById("a"+parseInt(j));   
}
var ele3=document.getElementById("a"+parseInt(j+1));       
ele3.style.height=key;
console.log('outside while loop');
   // ele1=document.getElementById("a"+parseInt(i)); 
   // ele1.style.background="red";
     //ele2.style.background="red";
     //  await waitforme(200);
      // ele2.style.background="rgb(240, 221, 57)";
      //  swap(ele1,ele2);
     //   ele1.style.background="green";
       // ele2.style.background="rgb(240, 221, 57)";
     //  key.style.background="rgb(240, 221, 57)";
     document.getElementById("a"+parseInt(i)).style.background="rgb(240, 221, 57)";
     if(i==parseInt(arraySize.value)-1){
        for(let k=0;k<70;k++){
           document.getElementById("a"+parseInt(k)).style.background="green";
        }
    }
}
//ele1.style.background="rgb(240, 221, 57)";
//ele2.style.background="green";
//document.getElementById("a"+parseInt(i)).style.background="rgb(240, 221, 57)";
//if(j+1==99-i){
   //     var x= document.getElementById("a"+parseInt(j+1));
  //      var y= document.getElementById("a"+parseInt(j));
  ///      x.style.background="green";
  //      y.style.background="green";
 //}
 

       
 enableSortingBtn();
 enableSizeSlider();
 enableNewArrayBtn();}
       
    
  