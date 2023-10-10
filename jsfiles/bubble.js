  async function bubblesort(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    let arraySize = document.querySelector('[id="array_size"]');
   
    for(let i=0;i<parseInt(arraySize.value);i++){

        for(let j=0;j<parseInt(arraySize.value)-i-1;j++){
              
  var ele1=document.getElementById("a"+parseInt(j));       

var ele2=document.getElementById("a"+parseInt(j+1));  

if(parseInt(ele1.style.height)>parseInt(ele2.style.height)){
        ele1.style.background="red";
        ele2.style.background="red";
        await waitforme(delay);
       


 
        swap(ele1,ele2);
       
}
ele1.style.background="rgb(240, 221, 57)";
ele2.style.background="rgb(240, 221, 57)";

if(j+1==parseInt(arraySize.value)-i-1){
        var x= document.getElementById("a"+parseInt(j+1));
        //var y= document.getElementById("a"+parseInt(j));
        x.style.background="green";
       // y.style.background="green";
 }

        }
       
    }
   var y= document.getElementById("a"+parseInt(0));
 y.style.background="green";
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();}
  
