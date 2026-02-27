// Input:
// nums = [2, 7, 11, 15]
// target = 9
// Output:
// [0, 1] 
// karena nums[0] + nums[1] = 2 + 7 = 9
// nums = [2, 7, 11, 15]


function findComplement(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    console.log(nums[i] + " butuh " + complement);
  }
}

findComplement([2,7,11,17], 9);
