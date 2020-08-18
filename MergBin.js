function MergeSort(arr){
  if(arr.length <= 1){
    return arr
  }

  var left = []
  var right = []
  for(var i=0; i <= (arr.length-1);i++){
    if(i < Math.floor(arr.length/2)){
      left.push(arr[i])
    } else{
      right.push(arr[i])
    }
  }

  left = MergeSort(left)
  right = MergeSort(right)

  return Merge(left,right)
}

function Merge(left,right){
  var result = []
  while(left.length >= 1 && right.length >= 1){
    if(left[0] >= right[0]){
      result.push(right[0])
      right.shift()
    }
    else{
      result.push(left[0])
      left.shift()
    }
  }
  while(left.length >= 1){
    result.push(left[0])
    left.shift()
  }
  while(right.length >= 1){
    result.push(right[0])
    right.shift()
  }
  return result
}
var li = [1,24,68,9,111,56]
li = MergeSort(li)
console.log(li)

//==============================
function bSearch(arr,num){
  var lo = 0
  var hi = arr.length - 1

  while(lo <= hi){
    var mid = Math.floor((lo+hi)/2)
    if(arr[mid] < num){
      lo = mid+1
    }
    else if(arr[mid] > num){
      hi = mid-1
    }
    else{
      console.log('The index of your number is:', mid)
      return
    }
  }
  console.log('number doesn\'t exist')
  return
}

bSearch(li,68)
