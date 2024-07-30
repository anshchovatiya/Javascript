function countVowels(string) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let cur of string) {
    if (vowels.includes(cur)) {
      count++;
    }
  }
  return count;
}

document.getElementById("submit").addEventListener("click", () => {
  let string = document.getElementById("str");
  string = string.value;
  let arr = string.split(" ");
  string = string.trim();
  let length = string.length;
  let vowels = countVowels(string);

  document.getElementById("length").innerText = length;
  document.getElementById("vowels").innerText = vowels; 
  document.getElementById("nonVowels").innerText = length - vowels; 
  document.getElementById("words").innerText = arr.length;

});
