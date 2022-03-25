//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
  if (str.length <= 1) {
    return str;
  }
  return (
    str.charAt(str.length - 1) + reverseString(str.substring(0, str.length - 1))
  );
}

console.log(reverseString('yoyo mastery'));
//should return: 'yretsam oyoy'
