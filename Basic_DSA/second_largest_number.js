const nums = [10, 5, 8, 20, 15];
let largest = -Infinity;
let scndlargest = -Infinity;

for(let i = 0; i < nums.length ; i++ ){
  
  if(nums[i] > largest){
    scndlargest = largest;
    largest = nums[i]
  }
  else if(nums[i] < largest && nums[i] > scndlargest){
    scndlargest = nums[i];
  }
}

if(scndlargest === -Infinity){
  console.log('Tidak ada')
}
else{
  console.log(scndlargest);
}


