//your JS code here. If required.
function secondHighest(arr) {
  if (arr.length < 2) return -Infinity;

  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
		
      first = num;
    } else if (num < first && num > second) {
      second = num;
    }
  }

  return (second === -Infinity) ? -Infinity : second;
}
