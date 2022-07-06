async function selectionsort(){
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  let arraySize = document.querySelector('[id="array_size"]');
  
    for(let i=0;i<parseInt(arraySize.value)-1;i++){
     var min_idx=i;
     
              
  //var ele1=document.getElementById("a"+parseInt(j));       

var ele2=document.getElementById("a"+parseInt(min_idx));  
for(let j=i+1;j<parseInt(arraySize.value);j++){
    var ele1=document.getElementById("a"+parseInt(j));  
if(parseInt(ele1.style.height)<parseInt(ele2.style.height)){
        min_idx=j;
        ele2=document.getElementById("a"+parseInt(min_idx));
    }}
    ele1=document.getElementById("a"+parseInt(i)); 
    ele1.style.background="red";
     ele2.style.background="red";
       await waitforme(delay);
       ele2.style.background="rgb(240, 221, 57)";
        swap(ele1,ele2);
        ele1.style.background="green";
       // ele2.style.background="rgb(240, 221, 57)";
}
//ele1.style.background="rgb(240, 221, 57)";
ele1=document.getElementById("a"+parseInt(arraySize.value-1));
ele1.style.background="green";

//if(j+1==99-i){
   //     var x= document.getElementById("a"+parseInt(j+1));
  //      var y= document.getElementById("a"+parseInt(j));
  ///      x.style.background="green";
  //      y.style.background="green";
 //}
       
 enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();}
       
    
  