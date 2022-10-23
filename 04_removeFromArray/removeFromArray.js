const removeFromArray = function(...argu) {
    let arrayOne = argu[0];
    const newArray = [];
    arrayOne.forEach((item)=>{
        if(!argu.includes(item)) {
            newArray.push(item)
        };
        

    });
    return(newArray);




};

// Do not edit below this line
module.exports = removeFromArray; 
