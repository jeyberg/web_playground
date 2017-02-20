var myGamePiece

function startGame(){
    myGameArea.start()
    myGamePiece = new component(250, 250, 50)
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 500
        this.canvas.height = 500
        this.context = this.canvas.getContext("2d")
        document.body.insertBefore(this.canvas, document.body.childNodes[0])
        this.interval = setInterval(updateGameArea, 16)
        window.addEventListener('mousemove', function(e){
            myGameArea.x = e.pageX
            myGameArea.y = e.pageY
        })
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}

function component(x, y, rad) {
    this.speedX = 0
    this.speedY = 0
    this.x = x
    this.y = y
    this.rad = rad
    this.gravity = 0.5
    this.gravitySpeed = 0
    this.update = function () {
        ctx = myGameArea.context
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI)
        ctx.stroke()
    }
    this.newPos = function() {
        
        this.gravitySpeed += this.gravity
        this.x += this.speedX
        this.y += this.speedY + this.gravitySpeed
        this.hitBottom()
    }
    this.accelerate = function() {
        if (myGameArea.x && myGameArea.y) {
            this.speedX = (myGameArea.x - this.x) / 40
            this.speedY = (myGameArea.y - this.y) / 40
        }
    }
    this.hitBottom = function() {
        var bottom = myGameArea.canvas.height - this.rad
        if ( this.y > bottom) {
            this.y = bottom
        }
    }
}

function updateGameArea() {
    myGameArea.clear()
    myGamePiece.accelerate()
    myGamePiece.newPos()
    myGamePiece.update()
}

function getDistance() {
    if (myGameArea.x && myGameArea.y) {
        return Math.sqrt(Math.pow(((myGameArea.x - this.x), 2) + Math.pow(((myGameArea.y - this.y), 2))))
    }
}