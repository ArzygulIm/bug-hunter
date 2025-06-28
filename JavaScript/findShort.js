// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s){
  let arr=s.split(' ')
  let min=s.length
  for( i of arr){
    if( i.length<min){
      min=i.length
    }
  }
  return min
}

function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}

const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;