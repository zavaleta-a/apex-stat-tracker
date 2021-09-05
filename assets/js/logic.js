$(function () {
  var mq = matchMedia("(max-width: 1200px)");
  if (mq.matches) {
    console.log("TEST RETURNS TRUE");
  } else {
    console.log("TEST RETURNS FALSE");
  }
});

/*matchMedia("(max-width: 1200px)");
if (matchMedia.matches) {
  console.log("True");
} else {
  console.log("False");
}*/
