function changeColor() {
    // console.log('hi');
    var choices = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
        var randomNumber = Math.floor(Math.random() * 16); 
        color += choices[randomNumber];
       // console.log(color);
    }
   // console.log(color);
    document.body.style.backgroundColor = color;
    title.style.color = 'white';
}


function reset() {
    document.body.style.backgroundColor = '#eee';
    title.style.color = 'black';
}
