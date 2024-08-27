


let color_on_select = `#e66159b3`;



document.addEventListener('copy', function() {
    const style = document.createElement('style');
    style.textContent = `::selection {background-color:` + color_on_select + `;}`
    document.head.appendChild(style);
    setTimeout(function() {
        document.head.removeChild(style);
    }, 200);
    
})

