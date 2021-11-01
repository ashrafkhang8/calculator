function sum() {

    let rad = document.getElementById('game').value;

    let area = document.getElementById('name').value;

    let lan = document.getElementById('l').value;
    let bre = document.getElementById('b').value;

    var PI = 3.142,
        r = rad,
        l = lan,
        b = bre;


    if (area == 'circle' || area == 'Circle') {
        document.getElementById('demo').innerHTML = `The area of ${area} :- ${PI*r**2 }cm`;

    } else if (area == 'rectangle' || area == 'Rectangle') {
        document.getElementById('demo').innerHTML = `The area of ${area} : ${l*b}`;

    } else if (area == 'triangle' || area == 'Triangle') {
        document.getElementById('demo').innerHTML = `The area of ${area} : ${(1/2)*l*b}`;

    } else if(area == 'square' || area == 'Square'){
        document.getElementById('demo').innerHTML = `The area of ${area} : ${a**2}`;
        
        
        
    }else{
        console.log('false')
        document.getElementById('demo').innerHTML = `Not found fill Currect Values`;
    }

}
