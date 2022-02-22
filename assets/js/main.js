let box = document.getElementsByClassName('nav');
console.log(box);
let changeMe = document.getElementById('navChange');

changeMe.addEventListener('click', () => {
    console.log('test');
    if (box[0].style.backgroundColor === 'rgb(246, 200, 159)') {
        console.log('testif');
        box[0].style.backgroundColor = 'unset';
        box[0].style.color = 'white';
        box[1].style.backgroundColor = 'unset';
        box[1].style.color = 'white';
        box[2].style.backgroundColor = 'unset';
        box[2].style.olor = 'white';
        changeMe.style.backgroundColor = '#4CAF50';
        changeMe.style.color = 'white';
    } else {
        console.log('testelse');
        box[0].style.backgroundColor = '#f6c89f';
        box[0].style.color = '#333';
        box[1].style.backgroundColor = '#ffe7d1';
        box[1].style.color = '#333';
        box[2].style.backgroundColor = '#4b8e8d';
        box[2].style.olor = '#333';
        changeMe.style.backgroundColor = '#396362';
        changeMe.style.color = '#666';

    }
})