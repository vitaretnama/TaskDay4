function createRange(min, max) {
  var range = [];
  for (let i = min; i <= max; i++) {
    range.push(i);
  }
  return range;
}
console.log(createRange(4, 8));
