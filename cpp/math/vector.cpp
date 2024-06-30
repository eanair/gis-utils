#include <cmath>

struct Point3D
{
  double x;
  double y;
  double z;
};

extern "C"
{
  Point3D *createPoint3D(double x, double y, double z)
  {
    return new Point3D{x, y, z};
  }

  void freePoint3D(Point3D *point)
  {
    delete point;
  }

  double getAngleBetweenVectors3D(Point3D *point1, Point3D *point2, Point3D *point3)
  {
    auto normalize = [](Point3D vector)
    {
      double magnitude = std::sqrt(vector.x * vector.x + vector.y * vector.y + vector.z * vector.z);
      return Point3D{vector.x / magnitude, vector.y / magnitude, vector.z / magnitude};
    };

    Point3D vector1 = {point1->x - point2->x, point1->y - point2->y, point1->z - point2->z};
    Point3D vector2 = {point3->x - point2->x, point3->y - point2->y, point3->z - point2->z};

    Point3D normalizedVector1 = normalize(vector1);
    Point3D normalizedVector2 = normalize(vector2);

    double dotProduct = normalizedVector1.x * normalizedVector2.x +
                        normalizedVector1.y * normalizedVector2.y +
                        normalizedVector1.z * normalizedVector2.z;

    double angleRadians = std::acos(std::fmax(-1.0, std::fmin(1.0, dotProduct)));

    double angleDegrees = angleRadians * (180 / M_PI);

    return angleDegrees;
  }
}