/* exported getAreaOfCircle */
function getAreaOfCircle(radius) {
  const radiusSquared = radius * radius;
  const areaCircle = Math.PI * radiusSquared;
  return areaCircle;
}
