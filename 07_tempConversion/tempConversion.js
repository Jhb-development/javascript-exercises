var fatemp = ""
var catemp = ""
const ftoc = function(ftemp) {
  let num;
  num=(ftemp-32)*0.5556;
 catemp=(Math.round(num*10)/10)
 return catemp;

};

const ctof = function(ctemp) {
  let num;
  num = (ctemp*1.8)+32
  fatemp=(Math.round(num*10)/10)
  return fatemp;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
