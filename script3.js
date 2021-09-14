function min(array){
    if (array[0] < array [1]){
      return array[0];
    } else{
      return array[1];
    }
  }
  
  var sample = ['small', 'larger'];
  var finished = min(sample);
  console.log(finished)