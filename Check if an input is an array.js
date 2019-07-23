const is_array = (arr) => {
  if(!Array.isArray(arr)){
    return false;
  }else {
    return true;
  }
}
console.log(is_array([1,2,3])); // Return: true
console.log(is_array(234)); // Return: false
console.log(is_array(something)); // undefined
