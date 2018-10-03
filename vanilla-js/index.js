window.addEventListener('DOMContentLoaded', function(){

	var hexMap        = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
	var rangeSliders  = document.querySelector('.range-sliders');
	var rgbContainer  = document.getElementById('rgb-value');
	var hexContainer  = document.getElementById('hex-value');
	var currentColors = getComputedColors(document.body);

	function getComputedColors(el){
		return window.getComputedStyle(el).backgroundColor.replace('rgba(', '').replace(')', '').split(',').map(function(item, idx){
				return idx < 3 ? parseInt(item) : Math.round(item);
		});
	}

	function rgbToHex(colorArray){
		var hexString = '';
		for (var i=0; i < colorArray.length - 1; i++){
			hexString += (hexMap[Math.floor(colorArray[i]/16)] + hexMap[colorArray[i] % 16]).toString();
		}
		return hexString;
	}

	function handleColorChange(e){
		currentColors[e.target.dataset.id] = (e.target.dataset.id === '3') ? e.target.value/100 : parseInt(e.target.value);
		hexContainer.value = '#' + rgbToHex(currentColors);
		var updatedColor = 'rgba(' + currentColors.join(',') + ')';
		document.body.style.backgroundColor = updatedColor;
		rgbContainer.value = updatedColor;
	}

	rangeSliders.addEventListener('input', handleColorChange);

});
