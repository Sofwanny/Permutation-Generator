const permuteString = (str, prefixVal = "", results = []) => {
  if (str.length === 0) {
    results.push(prefixVal);
    return results
  }
  str.split("").forEach( (char, index) => {
     const remaining = str.slice(0, index) + str.slice(index + 1);
    return permuteString(remaining, prefixVal + char, results);
  })
 return [...new Set(results)];
}

console.log(permuteString("far"));