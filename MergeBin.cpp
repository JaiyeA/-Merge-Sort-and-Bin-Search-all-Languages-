#include <iostream>
#include <vector>
#include <string>
#include <math.h>
using namespace std;

vector<int> Merge(vector<int> left, vector<int> right){
  vector<int> result;
  while(left.size() >= 1 && right.size() >= 1){
    if(left[0] <= right[0]){
      result.push_back(left[0]);
      left.erase(left.begin());
    } else{
      result.push_back(right[0]);
      right.erase(right.begin());
    }
  }
  while(left.size() >= 1){
    result.push_back(left[0]);
    left.erase(left.begin());
  }
  while(right.size() >= 1){
    result.push_back(right[0]);
    right.erase(right.begin());
  }
  return result;
}

vector<int> MergeSort(vector<int> list){
  if(list.size() <= 1){
    return list;
  }
  vector<int> left={};
  vector<int> right={};
  for(int i=0; i < list.size();i++){
    if(i < floor(list.size()/2)){
      left.push_back(list[i]);
    } else{
      right.push_back(list[i]);
    }
  }

  left = MergeSort(left);
  right = MergeSort(right);
  return Merge(left, right);
}

int main() {
  vector<int> li={6,1,7,3,5};
  li = MergeSort(li);
  cout <<"sorted list: ";
  for(int i=0; i < li.size();i++){
    cout << li[i]<<", ";
  }
  return 0;
}
