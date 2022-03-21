const container = document.querySelector(".data-container");
function swap(el1, el2) {
  console.log("In swap()");
  let temp = el1.style.height;
  let temp1 = el1.innerText;
  let temp2 = el2.innerText;
  console.log(temp1);
  console.log(temp2);
  el1.style.height = el2.style.height;
  el2.style.height = temp;
  el1.childNodes[0].innerText = temp2;
  el2.childNodes[0].innerText = temp1;

}
// function to generate bars
// generatebars();
function generatebars(num = 20) {
  //for loop to generate 20 bars

  // console.log(num);
  
  for (let i = 0; i < num; i += 1) {
    // To generate random values from 1 to 100
    let value = Math.floor(Math.random() * 100 + 1);
    console.log(value);
    // To create element "div"
    let bar = document.createElement("div");
    
    // To add class "bar" to "div"
    bar.classList.add("bar");
    
    // Provide height to the bar
    bar.style.height = `${value * 3}px`;
    
    // Translate the bar towards positive X axis
    bar.style.transform = `translateX(${i * 30}px)`;
    
    // To create element "label"
    let barLabel = document.createElement("label");
     
    // To add class "bar_id" to "label"
    barLabel.classList.add("bar__id");
    
    // Assign value to "label"
    barLabel.innerHTML = value;
    
    // Append "Label" to "div"
    bar.appendChild(barLabel);
    
    // Append "div" to "data-container div"
    container.appendChild(bar);
  }
}


 
   // asynchronous function to perform "Selection Sort"
async function SelectionSort() {
      let bars = document.querySelectorAll(".bar");
      // Assign 0 to min_idx
      var min_idx = 0;
      for (var i = 0; i < bars.length; i += 1) {
        // Assign i to min_idx
        min_idx = i;
          
    // Provide darkblue color to the ith bar
    bars[i].style.backgroundColor = "darkblue";
    for (var j = i + 1; j < bars.length; j += 1) {
      // Provide red color to the jth bar
      bars[j].style.backgroundColor = "red";

      // To pause the execution of code for 300 milliseconds
      await waitforme(delay);
      console.log(delay);
      
      // To store the integer value of jth bar to var1
      var val1 = parseInt(bars[j].childNodes[0].innerHTML);
      
      // To store the integer value of (min_idx)th bar to var2
      var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
      
      // Compare val1 & val2
      if (val1 < val2) {
        if (min_idx !== i) {
          // Provide skyblue color to the (min-idx)th bar
          bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";
        }
        min_idx = j;
      } else {
        // Provide skyblue color to the jth bar
        bars[j].style.backgroundColor = " rgb(24, 190, 255)";
      }
    }
    
    // To swap ith and (min_idx)th bar
    var temp1 = bars[min_idx].style.height;
    var temp2 = bars[min_idx].childNodes[0].innerText;
    bars[min_idx].style.height = bars[i].style.height;
    bars[i].style.height = temp1;
    bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
    bars[i].childNodes[0].innerText = temp2;
    
    // To pause the execution of code for 300 milliseconds
    await waitforme(delay);
    console.log(delay);
    // await new Promise((resolve) =>
    // setTimeout(() => {
      //     resolve('');
    //   },260)
    // );

    // Provide skyblue color to the (min-idx)th bar
    bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";

    // Provide lightgreen color to the ith bar
    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }

  // To enable the button "Generate New Array" after final(sorted)
  document.getElementById("Button1").disabled = false;
   
  // To enable the button "Selection Sort" after final(sorted)
  document.getElementById("Button2").disabled = false;
   
}
// Bubblt Sort
async function bubble() {
  // console.log("In bubbe()");
  const ele = document.querySelectorAll(".bar");
  // console.log(ele.length);
  for (let i = 0; i < ele.length - 1; i++) {
    // console.log("In ith loop");
    for (let j = 0; j < ele.length - i - 1; j++) {
      console.log("In jth loop");
      ele[j].style.background = "red";
      ele[j + 1].style.background = "green";
      //  await new Promise((resolve) =>
      //    setTimeout(() => {
      //      resolve();
      //    }, 300)
      //  );
      await waitforme(delay);
      if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
        // console.log("In if condition");
        // console.log("YES");
        // await waitforme(300);
        // await new Promise((resolve) =>
        //   setTimeout(() => {
        //     resolve();
        //   }, 300)
        // );
        await waitforme(delay);
        console.log("swap");
        swap(ele[j], ele[j + 1]);

      }
      ele[j].style.background = "cyan";
      ele[j + 1].style.background = "cyan";
    }
    ele[ele.length - 1 - i].style.background = "orange";
  }
  ele[0].style.background = "orange";

  document.getElementById("Button1").disabled = false;
  
  // To enable the button "Selection Sort" after final(sorted)
  document.getElementById("Button2").disabled = false;
  
}
// Insertion Sort
async function Insertion() {
  // console.log("In insertion()");
  const ele = document.querySelectorAll(".bar");
  // color
  ele[0].style.background = "green";
  for (let i = 1; i < ele.length; i++) {
    // console.log("In ith loop");
    let j = i - 1;
    let key = ele[i].style.height;
    // color
    ele[i].style.background = "blue";

    // await new Promise((resolve) =>
    //   setTimeout(() => {
    //     resolve();
    //   }, 300)
    // );
    await waitforme(delay);

    while (j >= 0 && parseInt(ele[j].style.height) > parseInt(key)) {
      console.log("In while loop");
      // color
      let temp1 = ele[j].innerText;
      let temp2 = ele[j + 1].innerText;
      console.log(temp1);
      console.log(temp2);
      ele[j].style.background = "blue";
      ele[j + 1].style.height = ele[j].style.height;
      ele[j].childNodes[0].innerText = temp2;
      ele[j + 1].childNodes[0].innerText = temp1;

      j--;
      // await new Promise((resolve) =>
      //   setTimeout(() => {
      //     resolve();
      //   }, 300)
      // );
      await waitforme(delay);
      // color
      for (let k = i; k >= 0; k--) {
        ele[k].style.background = "green";
      }
    }
    ele[j + 1].style.height = key;
    // color
    ele[i].style.background = "green";
  }

  // To enable the button "Generate New Array" after final(sorted)
  document.getElementById("Button1").disabled = false;

  // To enable the button "Selection Sort" after final(sorted)
  document.getElementById("Button2").disabled = false;
}
// Merge Sort 
async function merge(ele, low, mid, high) {
  // console.log("In merge()");
  // console.log(`low=${low}, mid=${mid}, high=${high}`);
  const n1 = mid - low + 1;
  const n2 = high - mid;
  console.log(`n1=${n1}, n2=${n2}`);
  let left = new Array(n1);
  let right = new Array(n2);
  let tempArray = new Array(n1 + n2);
  let map = new Map();

  for (let i = 0; i < n1; i++) {
    // await new Promise((resolve) =>
    //   setTimeout(() => {
    //     resolve();
    //   }, 300)
    // );
    await waitforme(delay);
    // console.log("In merge left loop");
    // console.log(ele[low + i].style.height + " at " + (low + i));
    // color
    ele[low + i].style.background = "orange";
    left[i] = ele[low + i].style.height;
    // map.set(parseInt(ele[low + i].style.height), ele[low + i].innerText);
}
  for (let i = 0; i < n2; i++) {
    // await new Promise((resolve) =>
    //   setTimeout(() => {
    //     resolve();
    //   }, 300)
    // );
    await waitforme(delay);
    // console.log("In merge right loop");
    // console.log(ele[mid + 1 + i].style.height + " at " + (mid + 1 + i));
    // color
    ele[mid + 1 + i].style.background = "yellow";
    right[i] = ele[mid + 1 + i].style.height;
    // map.set(parseInt(ele[mid+1+i].style.height), ele[mid+1+i].innerText);
    
  }

   
   
  // console.log(tempArray);
//  await new Promise((resolve) =>
//    setTimeout(() => {
//      resolve();
//    }, 300)
//  );
  await waitforme(delay);
  let i = 0,
    j = 0,
    k = low,z = 0;
  
  while (i < n1 && j < n2) {
    // await new Promise((resolve) =>
    //   setTimeout(() => {
    //     resolve();
    //   }, 300)
    // );
    await waitforme(delay);
    // console.log("In merge while loop");
    // console.log(parseInt(left[i]), parseInt(right[j]));

    // To add color for which two r being compared for merging

    if (parseInt(left[i]) <= parseInt(right[j])) {
      // console.log("In merge while loop if");
      // color
      const vv = parseInt(left[i]);
      if (n1 + n2 === ele.length) {
        ele[k].style.background = "green";
        // ele[k].childNodes[0].innerText = vv / 3;
        // right[j] = vv;
        // ele[k].childNodes[0].innerText = tempArray[z]; //; ele[z++].innerText;
      } else {
        ele[k].style.background = "lightgreen";
        // ele[k].childNodes[0].innerText = tempArray[z]; //; ele[z++].innerText;
        // ele[k].childNodes[0].innerText = vv / 3;
        // right[j] = vv;
      }

      ele[k].style.height = left[i];
      // ele[k].childNodes[0].innerText = tempArray[z]; //; ele[z++].innerText;
      ele[k].childNodes[0].innerText = vv / 3;
      // right[j] = vv;
      i++;
      k++;
      z++;
    } else {
      // console.log("In merge while loop else");
      // color
      const tt = parseInt(right[j]);
      if (n1 + n2 === ele.length) {
        ele[k].style.background = "green";
        // ele[k].childNodes[0].innerText = tempArray[z]; //; ele[z++].innerText;
        // ele[k].childNodes[0].innerText = tt / 3;
        // left[i] = tt;
      } else {
        ele[k].style.background = "lightgreen";
        // ele[k].childNodes[0].innerText = tempArray[z]; //; ele[z++].innerText;
        // ele[k].childNodes[0].innerText = tt / 3;
        // left[i] = tt;
      }
      // ele[i].style.height = ele[j].style.height;
      // ele[i].childNodes[0].innerText = ele[j].innerText;
      ele[k].style.height = right[j];
      // ele[k].childNodes[0].innerText = tempArray[z]; //; ele[z++].innerText;
      ele[k].childNodes[0].innerText = tt / 3;
      // left[i] = right[j];
      j++;
      k++;
      z++;
    }
  }
  while (i < n1) {
    // await new Promise((resolve) =>
    //   setTimeout(() => {
    //     resolve();
    //   }, 300)
    // );
    await waitforme(delay);
    console.log("In while if n1 is left");
    // color
    if (n1 + n2 === ele.length) {
      ele[k].style.background = "green";
    } else {
      ele[k].style.background = "lightgreen";
    }
    ele[k].style.height = left[i];
    ele[k].childNodes[0].innerText = parseInt(left[i])/3;
    i++;
    k++;
  }
  while (j < n2) {
    // await new Promise((resolve) =>
    //   setTimeout(() => {
    //     resolve();
    //   }, 300)
    // );
    await waitforme(delay);
    console.log("In while if n2 is left");
    // color
    if (n1 + n2 === ele.length) {
      ele[k].style.background = "green";
    } else {
      ele[k].style.background = "lightgreen";
    }
    ele[k].style.height = right[j];
    ele[k].childNodes[0].innerText = parseInt(right[j])/3;
    j++;
    k++;
  }
}
async function mergeSort(ele, l, r) {
  console.log("In mergeSort()");
  if (l >= r) {
    console.log(`return cause just 1 elemment l=${l}, r=${r}`);
    return;
  }
  const m = l + Math.floor((r - l) / 2);
  console.log(`left=${l} mid=${m} right=${r}`, typeof m);
  await mergeSort(ele, l, m);
  await mergeSort(ele, m + 1, r);
  await merge(ele, l, m, r);

  
  // To enable the button "Generate New Array" after final(sorted)
  document.getElementById("Button1").disabled = false;
   
  // To enable the button "Selection Sort" after final(sorted)
  document.getElementById("Button2").disabled = false;
}
async function MergeSort() {
  let ele = document.querySelectorAll(".bar");
  let l = 0;
  let r = parseInt(ele.length) - 1;
  await mergeSort(ele, l, r);

  // To enable the button "Generate New Array" after final(sorted)
  document.getElementById("Button1").disabled = false;

  // To enable the button "Selection Sort" after final(sorted)
  document.getElementById("Button2").disabled = false;
}
// Quick Sort 
async function partitionLomuto(ele, l, r) {
  console.log("In partitionLomuto()");
  let i = l - 1;
  // color pivot element
  ele[r].style.background = "red";
  for (let j = l; j <= r - 1; j++) {
    console.log("In partitionLomuto for j");
    // color current element
    ele[j].style.background = "yellow";
    // pauseChamp
    // await new Promise((resolve) =>
    //   setTimeout(() => {
    //     resolve();
    //   }, 300)
    // );
    await waitforme(delay);
    if (parseInt(ele[j].style.height) < parseInt(ele[r].style.height)) {
      console.log("In partitionLomuto for j if");
      i++;
      swap(ele[i], ele[j]);
      // color
      ele[i].style.background = "orange";
      if (i != j) ele[j].style.background = "orange";
      // pauseChamp
      // await new Promise((resolve) =>
      //   setTimeout(() => {
      //     resolve();
      //   }, 300)
      // );
      await waitforme(delay);
    } else {
      // color if not less than pivot
      ele[j].style.background = "pink";
    }
  }
  i++;
  // pauseChamp
  // await new Promise((resolve) =>
  //   setTimeout(() => {
  //     resolve();
  //   }, 300)
  // );
  await waitforme(delay);
  swap(ele[i], ele[r]); // pivot height one
  console.log(`i = ${i}`, typeof i);
  // color
  ele[r].style.background = "pink";
  ele[i].style.background = "green";

  // pauseChamp
  // await new Promise((resolve) =>
  //   setTimeout(() => {
  //     resolve();
  //   }, 300)
  // );
await waitforme(delay);
  // color
  for (let k = 0; k < ele.length; k++) {
    if (ele[k].style.background != "green") ele[k].style.background = "cyan";
  }

  return i;
}
async function quickSort(ele, l, r) {
  console.log("In quickSort()", `l=${l} r=${r}`, typeof l, typeof r);
  if (l < r) {
    let pivot_index = await partitionLomuto(ele, l, r);
    await quickSort(ele, l, pivot_index - 1);
    await quickSort(ele, pivot_index + 1, r);
  } else {
    if (l >= 0 && r >= 0 && l < ele.length && r < ele.length) {
      ele[r].style.background = "green";
      ele[l].style.background = "green";
    }
  }
}
async function Quicksort() {
  let ele = document.querySelectorAll(".bar");
  let l = 0;
  let r = ele.length - 1;
  await quickSort(ele, l, r);

  // To enable the button "Generate New Array" after final(sorted)
  document.getElementById("Button1").disabled = false;

  // To enable the button "Selection Sort" after final(sorted)
  document.getElementById("Button2").disabled = false;
}
// Call "generatebars" function
generatebars();
// function to generate new random array
function generate() {
  window.location.reload();
}
// function to disable the button
function disable() {
  // To disable the button "Generate New Array"
  document.getElementById("Button1").disabled = true;
  document.getElementById("Button1").style.backgroundColor = "#232428";
  document.getElementById("Button1").style.color = "#525250";

  // To disable the button "Selection Sort"
  document.getElementById("Button2").disabled = true;
  document.getElementById("Button2").style.backgroundColor = "#232428";
  document.getElementById("Button2").style.color = "#525250";

}
         
