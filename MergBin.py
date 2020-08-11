import math

li = [1,5,3,6,0,17,11]

def MergeSort(m):
  #base case
  if len(m) <= 1:
    return m

  left = []
  right = []
  for i in range(len(m)):
    if i < math.floor(len(m)/2):
      left.append(m[i])
    else:
      right.append(m[i])
  #breaking up the arrays into individual arrays of one element
  left = MergeSort(left)
  right = MergeSort(right)
  #merging individual arrays. Eventually we end up with 2 sorted arrays that will, in turn, be merged into one final sorted array
  return Merge(left, right)

def Merge(left, right):
  result  = []
  while left and right:
    if left[0] <= right[0]:
      result.append(left[0])
      left = left[1:]
    else:
      result.append(right[0])
      right = right[1:]
  while left:
    result.append(left[0])
    left = left[1:]
  while right:
    result.append(right[0])
    right = right[1:]
  return result
li = MergeSort(li)
print(li)

#=======================================
def bsearch(arr, num):
  lo = 0
  hi = len(arr)-1

  while lo <= hi:
    mid = math.floor((lo+hi)/2)
    if arr[mid] < num:
      lo = mid+1
    elif arr[mid] > num:
      hi = mid-1
    else:
      print("the index of num is", mid)
      break

n = 5
bsearch(li,n)
