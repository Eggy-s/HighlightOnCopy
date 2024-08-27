


let color_on_select = `#e66159b3`; /* In case you're curious why I have a useless variable for the color its because I'm lazy and originally wanted the user to be able to change it*/



document.addEventListener('copy', function() {
    const style = document.createElement('style');
    style.textContent = `::selection {background-color:` + color_on_select + `;}`
    document.head.appendChild(style);
    setTimeout(function() {
        document.head.removeChild(style);
    }, 200);
    
})

