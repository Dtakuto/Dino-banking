let text = document.getElementById('text');
let slider = document.getElementById('slider');

slider.oninput = function() {
    let lightness = this.value;
    let color = 'hsl(4, 0%, ' + lightness + '%)';
    text.style.color = color;

}

