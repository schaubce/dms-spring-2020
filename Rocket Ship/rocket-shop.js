setBackdropURL("./docs/images/rr-backdrop.jpg")
setBackdropStyle("cover")

var rocket = new Image({
  url: "./docs/images/rocket.png",
  width: 120,
  height: 60,
})


onKeyDown(() => {
 if (keysDown.includes('UP')) {
   /* do something here */
     rocket.angle = UP
     rocket.move(10)
  }

   if (keysDown.includes('RIGHT')) {
   /* do something here */
     rocket.angle = RIGHT
     rocket.move(10)
  }

   if (keysDown.includes('LEFT')) {
   /* do something here */
     rocket.angle = LEFT
     rocket.move(10)
  }

     if (keysDown.includes('DOWN')) {
   /* do something here */
     rocket.angle = DOWN
     rocket.move(10)
  }
})
