var remove = "You are looking amazing";
console.log(remove)

var arr1 = remove.split("");
console.log(arr1)

var reg=/[aouie]/ig;

var arr2=remove.match(reg)

console.log(arr2)

for (var i=0; i<arr1.length; i++) {
    if(arr2.indexOf(arr1[i])===-1) 
    {
        noVowels.push(arr1[i])
    }
}
console.log(noVowels)
console.log(noVowels.join(""))