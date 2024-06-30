/**
 * ## 3D 벡터 간의 각도를 계산하는 함수
 * @param point1 - 첫번째 벡터
 * @param point2 - 두번째 벡터
 * @param point3 - 세번째 벡터
 * @returns
 */
export default function getAngleBetweenVectors3D(
  point1: { x: number; y: number; z: number },
  point2: { x: number; y: number; z: number },
  point3: { x: number; y: number; z: number }
): number {
  function normalize(vector: { x: number; y: number; z: number }) {
    const magnitude = Math.sqrt(vector.x ** 2 + vector.y ** 2 + vector.z ** 2);
    return {
      x: vector.x / magnitude,
      y: vector.y / magnitude,
      z: vector.z / magnitude,
    };
  }
  const vector1 = {
    x: point1.x - point2.x,
    y: point1.y - point2.y,
    z: point1.z - point2.z,
  };

  const vector2 = {
    x: point3.x - point2.x,
    y: point3.y - point2.y,
    z: point3.z - point2.z,
  };

  const normalizedVector1 = normalize(vector1);
  const normalizedVector2 = normalize(vector2);

  const dotProduct =
    normalizedVector1.x * normalizedVector2.x +
    normalizedVector1.y * normalizedVector2.y +
    normalizedVector1.z * normalizedVector2.z;

  const angleRadians = Math.acos(Math.max(-1, Math.min(1, dotProduct)));

  const angleDegrees = angleRadians * (180 / Math.PI);

  return angleDegrees;
}
