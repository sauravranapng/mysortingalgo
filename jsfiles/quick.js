 async function partition(ele, low, high) {
 
    // pivot
    let pivot = ele[high].style.height;
  
  ele[high].style.background = 'red';
  ele[low].style.background = 'blue';
  await waitforme(delay);
    // Index of smaller element and
    // indicates the right position
    // of pivot found so far
    let i = (low - 1);
 
    for (let j = low; j < high ; j++) {

  ele[j].style.background = 'lightgreen'
        // If current element is smaller
        // than the pivot
        if (parseInt(ele[j].style.height) <parseInt(pivot)) {
        
            // Increment index of
            // smaller element
            i++;
            
            
            
           // ele[i].style.background="red";
 //ele[j].style.background="rgb(240, 221, 57)";
             await waitforme(delay);
            swap(ele[i],ele[j]);
            
          //  ele[i].style.background=" ";
           // ele[j].style.background="rgb(240, 221, 57)";
        }
        ele[j].style.background="rgb(240, 221, 57)";
    }
    ele[high].style.background = "rgb(240, 221, 57)";
   
    swap(ele[i + 1],ele[high]);

    return (i + 1);
}
async function quickSort(ele, low, high) {
    if (low < high) {
 
        // pi is partitioning index, arr[p]
        // is now at right place
        let pi = await partition(ele, low, high);
       ele[pi].style.background="green";
        // Separately sort elements before
        // partition and after partition
        await quickSort(ele, low, pi - 1);
       await  quickSort(ele, pi + 1, high);
    }
    else{
        ele[low].style.background="green";
    }
    
}
function Quick_Sort(){
    let ele = document.querySelectorAll('.bar');
    let low = 0;
    let high= parseInt(ele.length) - 1;
    disableSizeSlider();
    disableSortingBtn();
    disableNewArrayBtn();
     quickSort(ele,low,high);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
}