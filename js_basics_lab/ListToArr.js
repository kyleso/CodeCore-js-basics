function ListToArr(obj) {
  let arr = Object.entries(obj).sort((a, b) => a[0] - b[0]);

  console.log(arr);
}