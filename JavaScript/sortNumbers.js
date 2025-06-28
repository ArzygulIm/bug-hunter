// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
function solution(nums){
if (!Array.isArray(nums) || nums.length === 0) {
        return [];
    }
    return nums.sort((a, b) => a - b);
}

// Other solutions
function solution(nums){
  return (nums || []).sort(function(a, b){
    return a - b
  });
}

function solution(nums){
  return nums ? nums.sort(function(a, b) { return a - b;}) : [];
}

function solution(nums){
  return nums ? nums.sort((a,b)=>a-b) : []
}

const solution = (nums, arr = nums === null ? [] : nums) => arr.sort((a, b)=> a - b)