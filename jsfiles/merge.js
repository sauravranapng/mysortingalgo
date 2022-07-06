 /*
 function Merge_sort(){
   
    let arraySize = document.querySelector('[id="array_size"]');
    let speed=document.querySelector('[id="speed_input"]');
    let delay =300-parseInt(speed.value);
   
 mergeSort( 0,parseInt(arraySize.value) - 1,delay);





}

async function merge( l, m, r,delay)
{
    var n1 = m - l + 1;
    var n2 = r - m;

    // Create temp arrays
    let L = new Array(n1); 
    let R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++){
     let ele1=document.getElementById("a"+parseInt(l+i));
     //await waitforme(delay);
        L[i] =ele1.style.height;}
    for (var j = 0; j < n2; j++){
      let ele2=document.getElementById("a"+parseInt(m + 1 + j));
     // await waitforme(delay);
        R[j] = ele2.style.height;}

    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    var i = 0;

    // Initial index of second subarray
    var j = 0;

    // Initial index of merged subarray
    var k = l;

    while (i < n1 && j < n2) {
        var ele=document.getElementById("a"+parseInt(k));
        if (parseInt(L[i]) <=parseInt(R[j])) {
            //var ele=document.getElementById("a"+parseInt(k));
          //  await waitforme(delay);
            ele.style.height = parseInt(L[i]);
            i++;
        }
        else {
           // var ele=document.getElementById("a"+parseInt(k));
          //  await waitforme(delay);
            ele.style.height  = parseInt(R[j]);
            j++;
        }
        k++;
    }

    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        var ele=document.getElementById("a"+parseInt(k));
       // await waitforme(delay);
        ele.style.height = L[i];
        i++;
        k++;
    }

    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        var ele=document.getElementById("a"+parseInt(k));
        //await waitforme(delay);
        ele.style.height = R[i];
       
        j++;
        k++;
    }
}


async function mergeSort(l, r,delay){
    if(l>=r){
        return;//returns recursively
    }
    var m =l+ Math.floor((r-l)/2);
     await mergeSort(l,m,delay);
    await mergeSort(m+1,r,delay);
    await merge(l,m,r,delay);}
*/
async function merge(ele, low, mid,high){

    const n1 = mid - low + 1;
    const n2 = high - mid;
    
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++){
        await waitforme(delay);
        
        // color
        ele[low + i].style.background = 'orange';
        left[i] = ele[low + i].style.height;
    }
    for(let i = 0; i < n2; i++){
        await waitforme(delay);
      
        // color
        ele[mid + 1 + i].style.background = 'yellow';
        right[i] = ele[mid + 1 + i].style.height;
    }
    await waitforme(delay);
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        await waitforme(delay);
       
        
        // To add color for which two r being compared for merging
        
        if(parseInt(left[i]) <= parseInt(right[j])){
           
            // color
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
            }
            else{
                ele[k].style.background = 'lightgreen';
            }
            
            ele[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            
            // color
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
            }
            else{
                ele[k].style.background = 'lightgreen';
            } 
            ele[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i < n1){
       await waitforme(delay);
        
        // color
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'lightgreen';
        }
        ele[k].style.height = left[i];
        i++;
        k++;
    }
    while(j < n2){
        await waitforme(delay);
       
        // color
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'lightgreen';
        }
        ele[k].style.height = right[j];
        j++;
        k++;
    }
}

async function mergeSort(ele, l, r){
   
    if(l >= r){
       
        return;
    }
    const m = l + Math.floor((r - l) / 2);
   
    await   mergeSort(ele, l, m,delay);
    await mergeSort(ele, m + 1, r,delay);
    await merge(ele, l, m, r,delay);
}

 function Merge_sort(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(ele.length) - 1;
   
    disableSizeSlider();
    disableNewArrayBtn();
   
     mergeSort(ele, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
}