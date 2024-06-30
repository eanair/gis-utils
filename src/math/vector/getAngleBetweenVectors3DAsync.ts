const FILE_NAME = "vector";
const Module = require(`./${FILE_NAME}.js`);
/**
 * ## 3D 벡터 간의 각도를 계산하는 Web Assembly 함수
 * @param point1 - 첫번째 벡터
 * @param point2 - 두번째 벡터
 * @param point3 - 세번째 벡터
 * @returns 3D 벡터 간의 각도
 */
export default async function getAngleBetweenVectors3DAsync(
  point1: { x: number; y: number; z: number },
  point2: { x: number; y: number; z: number },
  point3: { x: number; y: number; z: number }
): Promise<number> {
  const module = await Module({
    locateFile: (path: string, prefix: string) => {
      if (path.endsWith(".wasm")) {
        return `${prefix}/${FILE_NAME}.wasm`;
      }
      return prefix + path;
    },
  });

  const point3D1 = module.ccall(
    "createPoint3D",
    "number",
    ["number", "number", "number"],
    [point1.x, point1.y, point1.z]
  );
  const point3D2 = module.ccall(
    "createPoint3D",
    "number",
    ["number", "number", "number"],
    [point2.x, point2.y, point2.z]
  );
  const point3D3 = module.ccall(
    "createPoint3D",
    "number",
    ["number", "number", "number"],
    [point3.x, point3.y, point3.z]
  );

  const result = module.ccall("getAngleBetweenVectors3D", "number", ["number", "number", "number"], [point3D1, point3D2, point3D3]);
  return result;
}
