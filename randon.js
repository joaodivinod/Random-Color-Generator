function getRandomColor(){
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i <6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function changeBgColor(){
    window.document.body.style.backgroundColor = getRandomColor();
    window.document.body.style.transition = "300ms"
    let hexadecimal = window.document.getElementById('hexadecimal')
    hexadecimal.innerText = getRandomColor()
    
}

