var $img = document.createElement('img')
$img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7mTzM_WiZY_Yu7pkO3Xfsm0xzVK7W-jhxrOWp6JwT10qjStdH')
document.body.appendChild($img)

class Car {
  constructor($img, speed, direction, location) {
    this.$img = $img
    this.speed = speed
    this.direction = direction
    this.location = location
  }
  turn(direction) {
    this.direction = direction
    this.$img.classList.remove('north', 'south', 'west', 'east')
    this.$img.classList.add(direction)
  }
  move () {
    switch (this.direction) {
      case 'north':
        this.location[1] += this.speed
        break
      case 'south':
        this.location[1] -= this.speed
        break
      case 'east':
        this.location[0] += this.speed
        break
      case 'west':
        this.location[0] -= this.speed
    }
    this.$img.style.top = this.location[1] * -1 + 'px'
    this.$img.style.left = this.location[0] + 'px'
  }
  start () {
    this.stopMove = setInterval(this.move.bind(this), 16)
  }
  stop () {
    clearInterval(this.stopMove)
    this.stopMove = null
  }
}

document.addEventListener('keydown', function (event) {
  switch (event.key) {
    case 'ArrowUp':
      car.turn('north')
      break
    case 'ArrowDown':
      car.turn('south')
      break
    case 'ArrowRight':
      car.turn('east')
      break
    case 'ArrowLeft':
      car.turn('west')
  }
})

document.addEventListener('keydown', function (event) {
  if (event.key === ' ') {
    if (car.stopMove) {
      car.stop()
    }
    else {
      car.start()
    }
  }
})

var car = new Car($img, 5, 'west', [0, 0])

console.log(car)
