function twoSum(nums, target) {
  // your code here

  //儲存數字及index
  let numList = {};

  for (let i = 0; i < nums.length; i++) {
    let need = target - nums[i];

    if (numList.hasOwnProperty(need)) {
      return [numList[need], i];
    }
    numList[nums[i]] = i;
  }
}

/*
	For example:
		twoSum([2, 7, 11, 15], 9);
	Should returns:
		[0, 1]
	Because:
		nums[0] + nums[1] is 9
*/
console.log(twoSum([2, 7, 11, 15], 9));
