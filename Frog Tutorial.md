# Frog Tutorial

### 1. Choose your background and add Frog to the game

   - Search for flappy and add the `setBackdropURL` code to the right side
   - Search for frog and copy/paste the code to the right
   - Click back right next to where you typed in frog to get back to all the options

### 2. Make the frog move

   - Click the "Control" section and find the `forever` block, add this to the right
   - Click the "Event" section and find the orange "when key pressed" block, add the inner code to the right inside the `forever` loop. We do not need the outer `onKeyPressed` event since it is already inside a forever event. We will learn more about events next week! 
     HINT: you will see a line `/* do stuff here */`, place the following code under this
     
     ```javascript
     if (keysDown.includes('UP')) {
      /* do something here */
     }
     ```
  
   - Replace the text inside the `includes` parentheses with 'LEFT'
   - Inside the `if` statement curly braces, add `frog.x -= 10`, what does this do? Try out your code by clicking the Preview screen on the left, and pressing the left key
   - Now work on the frog moving the other three directions, how can you get it to move each way?
     HINT: take a look at your code for LEFT and see what you need to change for UP, DOWN, and RIGHT

### 3. Make the frogs tongue

   - In the "Sprites and Backgrounds" section click line at the bottom, copy this code and add underneath all your code on the right
   - Replace lineSprite1 with `tongue`
   - Set each of the following inside of the line

   ```javascript
   color: "red",
   width: 5,
   x: frog.x,
   y: frog.y,
   x1: frog.x,
   y1: frog.y + 100
   ```

   - Add another `forever` block under all the code
     HINT: if you are confused look at step 2 for how you found it the first time
   - Add the following code inside the forever loop like you did the last time

   ```javascript
   tongue.x = frog.x;
   tongue.y = frog.y;
   tongue.x1 = frog.x;
   ```

   - Add `tongue.sendToBack()` under all the rest

### 4. Make space bar control the tongue

   - Add another `forever` loop at the end
   - Add an `if(keysDown)` statement inside forever loop and replace the text with 'SPACE'
     HINT: see step 2 for help on `keysDown`
   - Add `tongue.y1 += 20` inside the `if` statement
   - Add `else` case directly after the `if`, do you know what the `else` statement does? Ask a teacher to help!
     HINT: paste the following directly after the closing curly brace from the if

   ```javascript
    else {
     tongue.y1 -= 20
   }
   ```

   - The frog looks goofy, right? Let’s fix it by not letting the tongue go behind the frog. Add another `if` statement to check if tongue.y1 is less than or equal to frog.y, and set tongue.y1 to frog.y if so, do you know why we have to do this? Look at the previous step and see if you can think of it
     HINT: paste the following directly after that closing curly brace from the last step

   ```javascript
   if (tongue.y1 < frog.y) {
     tongue.y1 = frog.y;
   }
   ```

### Now try adding a fly for the frog to try to eat with its tongue. How would you do this? Ask a teacher if you need help getting started!
