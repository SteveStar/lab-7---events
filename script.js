var hoverDiv = document.getElementById('hoverDiv');

hoverDiv.addEventListener('mouseenter', function() {
    this.style.backgroundColor = 'salmon';
});

hoverDiv.addEventListener('mouseleave', function() {
    this.style.backgroundColor = 'transparent';
});