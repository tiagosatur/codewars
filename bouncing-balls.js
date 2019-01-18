/*

Bouncing Balls

A child is playing with a ball on the nth floor of a tall building.
The height of this floor, h, is known.

He drops the ball out of the window. The ball bounces (for example),
to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her
window (including when it's falling and bouncing?

Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note: The ball can only be seen if the height of the rebounding ball is
stricty greater than the window parameter.

Example:
h = 3, bounce = 0.66, window = 1.5, result is 3
h = 3, bounce = 1, window = 1.5, result is -1 (Condition 2) not fulfilled).

*/


function bouncingBall_01(h, bounce, w) {
  return rebounds = (bounce > 0 && bounce < 1 && w < h)
  ? (1 + 2 * Math.floor(Math.log(w / h) / Math.log(bounce)))
  : -1;
}

console.log('bouncingBall_01(3,0.66,1.5)) ==', bouncingBall_01(3,0.66,1.5));
console.log('bouncingBall_01(30, 0.9999999999, 1) == ', bouncingBall_01(30, 0.9999999999, 1));



// Solution 02

function bouncingBall_02(h,  bounce,  window) {

  if(bounce >= 1 || bounce === 0){
    return -1;
  }

  if(h > window){
    h *= bounce;
  }

  if(h < window){
    return 1;
  } else {
    return 2 + bouncingBall_02(h, bounce, window);
  }

}

// bouncingBall_02(30, 0.9999999999, 1);
// console.log('bouncingBall_02(30, 0.9999999999, 1) == ', bouncingBall_02(30, 0.9999999999, 1)); RangeError: Maximum call stack size exceeded
console.log('bouncingBall_02(30.0, 0.66, 1.5) == ', bouncingBall_02(30.0, 0.66, 1.5));



// Solution 03

function bouncingBall_03(h,  bounce,  window) {
  var rebounds = -1;
  if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
  return rebounds;
}
console.log('bouncingBall_03(30.0, 0.66, 1.5) == ', bouncingBall_03(30.0, 0.66, 1.5));
