const reverseString = function(string) {
let strMath = string.length;
let output = ""
for(i=strMath;i >= 0; i--){
    let letterGrabber = string.charAt(i-1)
    output += letterGrabber;

}
return(`${output}`)

};

// Do not edit below this line
module.exports = reverseString;
