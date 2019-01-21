function reverse(string) {

  if (string.length === 0) {
    return "";
  } else {
    return string.charAt(string.length - 1) + reverse(string.slice(0, -1)); 
  }
}

console.log(reverse("Hello"));