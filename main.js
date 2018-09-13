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
}

var car = new Car($img, 5, 'west', [0, 0])

console.log(car)
