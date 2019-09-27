function draw() {
    var arena = document.getElementById('arena');
    
    if (arena.getContext) {
        var ctx = arena.getContext('2d');
        ctx.
        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(125, 50);
        ctx.lineTo(100, 25)
        ctx.fillStyle = 'rgb(200, 0, 0)'
        ctx.fill();

        ctx.beginPath()
        ctx.moveTo(140, 50)
        ctx.lineTo(165, 75)
        ctx.lineTo(190, 50)
        ctx.lineTo(165, 25)
        ctx.fillStyle = 'rgb(0, 0, 200)'
        ctx.fill()

        // Drawing a box, with the interior cleared, and an outline inside.
        ctx.fillRect(85, 85, 100, 100); // Draws a 100x100 black box
        ctx.clearRect(105, 105, 60, 60); // This erases the middle area
        ctx.strokeRect(110, 110, 50, 50); // This makes an outline 
        // Same as above but moved down below
        ctx.fillRect(85, 200, 100, 100)
        ctx.clearRect(105, 220, 60, 60)
        ctx.strokeRect(110, 225, 50, 50)

        // Red Square
        // ctx.fillStyle = 'rgba(200, 0, 0, 0.5)'
        // ctx.fillRect(10, 10, 100, 100)

        // Blue square
        // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)'
        // ctx.fillRect(40, 40, 100, 100)
    }
    
}