// Initialize width and height values and display those values in boxes 
document.querySelector('#width').textContent = window.innerWidth + 'px';
document.querySelector('#height').textContent = window.innerHeight + 'px';

// Update width and height when window resize
window.addEventListener('resize', function() {
    document.querySelector('#width').textContent = window.innerWidth + 'px';
    document.querySelector('#height').textContent =  window.innerHeight + 'px';
})
// To disable right-click on width box
document.querySelector('#box-width').addEventListener('contextmenu', function(event) {
    event.preventDefault(window.alert('Right-click is disabled!'));
});
//  To disable left-click on box height
document.querySelector('#box-height').addEventListener('click', function(event) {
    if (event.button === 0) {
        event.preventDefault(window.alert('Left-click is disabled!'));
    }
});