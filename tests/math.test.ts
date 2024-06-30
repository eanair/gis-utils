import { getAngleBetweenVectors3D } from "../src/math";

describe("Math functions", () => {
  describe("getAngleBetweenVectors3D function", () => {
    it("correctly calculates the angle between three points", () => {
      expect(getAngleBetweenVectors3D({ x: 1, y: 2, z: 3 }, { x: 2, y: 3, z: 4 }, { x: 3, y: 4, z: 5 })).toBeCloseTo(0, 5);
      expect(getAngleBetweenVectors3D({ x: -1, y: 1, z: 2 }, { x: 1, y: 2, z: 3 }, { x: 2, y: 3, z: 4 })).toBeCloseTo(0, 5);
      expect(getAngleBetweenVectors3D({ x: 5, y: 5, z: 5 }, { x: 6, y: 6, z: 6 }, { x: 7, y: 7, z: 7 })).toBeCloseTo(0, 5);
    });
  });
});
