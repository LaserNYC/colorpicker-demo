const hexMap = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

export function convertToHex(colorValues) {
  let hex = '';
  var colorArray = Object.values(colorValues);
  for (var i=0; i < colorArray.length - 1; i++){
    hex += (hexMap[Math.floor(colorArray[i]/16)] + hexMap[colorArray[i] % 16]).toString();
  }
  return '#' + hex;
}

export function convertToRgba(colorValues) {
  return `rgba(${Object.values(colorValues).toString()})`;
}