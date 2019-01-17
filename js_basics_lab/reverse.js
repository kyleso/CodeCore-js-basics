function reverse(string) {
    let stringArr = string.split('');
    let finalString = "";
    for (let i = stringArr.length - 1; i >= 0; i -= 1) {
        finalString = finalString + stringArr[i];
    }
    return finalString;
}

console.log(reverse("one two three four five six seven"));