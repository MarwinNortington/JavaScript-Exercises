stringArray = ['hey','yo','mike','yo,'hey','yo','what'];

let frequency = {};
let max = 0, count = 0;
let result;
let word_from_store;

for(let word in stringArray) {
  word_from_store = stringArray[word];
  frequency[word_from_store] = (frequency[word_from_store] || 0) + 1;
  
  if(frequency[word_from_store] > max){
    count++;
    max = frequency[word_from_store];
    result = word_from_store;
  }
  
}
console.log(`The word that appears most: ${result}`);
console.log(`Number of times: ${count}`);
