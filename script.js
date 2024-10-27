function drawTriangle(triangleSize) {
   let number_T = 1
   let symbolthing = "*"
   while (number_T <= triangleSize) {
      console.log(symbolthing.repeat(number_T))
      number_T++

   }

}

console.log("Testing drawTriangle()...");

// TODO: Test drawTriangle() with different arguments
drawTriangle(12);
