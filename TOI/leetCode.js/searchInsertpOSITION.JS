var i=0;
var searchInsert = function(nums, target,i) {
    
    
    if(nums[i]===target){
        return  i
    }
    else if(target >nums[i] &&target <nums[i+1]  )
    {
        return i+1 
    }
    else{
        return i
    }
  
    
    i++;
    searchInsert(nums,target,i)
    
    
};
let nums=[2,7,12,78,79,84,100]
console.log(searchInsert(nums,7));