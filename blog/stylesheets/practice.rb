def pairing_100(arr)
  final_arr = []
  result_arr = []
  for i in 0..arr.length-1
    for j in 0..arr.length-1
      if arr[i] + arr[j] == 100
        result_arr.push(arr[i])
        result_arr.push(arr[j])
      end
    end
  end
  return final_arr.push(result_arr)
end

data = [0, 1, 100, 99, 0, 10, 90, 30, 55, 33, 55, 75, 50, 51, 49, 50, 51, 49, 51]
p pairing_100(data)