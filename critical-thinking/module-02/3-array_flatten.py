

input_val=['am',['jam'],'kathal',[4,5,6,[7,8,9]]]
def flatten_arr(arr):
  if len(arr)==0:
    return []
  if isinstance(arr[0],list):
    return flatten_arr(arr[0])+flatten_arr(arr[1:])
  return [arr[0]]+flatten_arr(arr[1:])

result=flatten_arr(input_val)
print(result)