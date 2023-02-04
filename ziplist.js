const abc = ['a', 'b', 'c'];
const numbers = [1, 2, 3];

function zipList(arr1, arr2) {
  const combined = [];
  for (let i = 0; i < arr1.length; i++) {
    combined.push(arr1[i]);
    combined.push(arr2[i]);
  }
  return combined;
}
console.log(zipList(abc, numbers));

function zipListTheSimpleWay(arr1, arr2) {
  const combined = _.flatten(_.zip(arr1, arr2));
  return combined;
}
console.log(zipListTheSimpleWay(abc, numbers));
