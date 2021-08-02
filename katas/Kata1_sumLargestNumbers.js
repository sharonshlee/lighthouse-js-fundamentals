const sumLargestNumbers = function(data) {
   for (let i = 0; i < data.length; i++) {
       for (let j = 0; j < data.length; j++) {
            if(data[j] < data[j+1]) {
                let temp = data[j];
                data[j] = data[j+1];
                data[j+1] = temp;
            }
       }
    
   }
   return data[0] + data[1];
  };
  
  console.log(sumLargestNumbers([1, 10]));
  console.log(sumLargestNumbers([1, 2, 3]));
  console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));