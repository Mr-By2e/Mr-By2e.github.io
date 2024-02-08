from math import pi,sqrt
from abc import ABC, abstractmethod
class Shape:
    lister = []
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.__class__.lister.append(self)
    @abstractmethod
    def area(self):
        pass
    @staticmethod
    def totalizator():
        total = 0
        for i in __class__.lister:
            total += i.area()
        return total
class Circle(Shape):
    def __init__(self, radius, x=0,y=0):
        super().__init__(x,y)
        self.radius = radius
    def area(self):
            return pi * self.radius**2 
    def perimeter(self):
            return 2 * pi * self.radius
class Triangle(Shape):
    def __init__(self, z, x=0,y=0):
        super().__init__(x,y)
        self.z = z
    def area(self):
        p = (self.x + self.y + self.z) / 2
        s = sqrt(p* (p - self.x) * (p - self.y) * (p - self.z))
        return s
    def perimeter(self):
            return self.x + self.y + self.z
class Square(Shape):
    def __init__(self,side=1,x=0,y=0):
        super().__init__(x,y)
        self.side = side
    def area(self):
         return self.x * self.y
    def perimeter(self):
         return (self.x + self.y) * 2
         
def main():
    print("Выберите фигуру:")
    print("1. Круг")
    print("2. Треугольник")
    print("3. Квадрат")

    choice = int(input("Введите номер фигуры: "))

    if choice == 1:
        radius = float(input("Введите радиус круга: "))
        circle = Circle(radius)
        print("Площадь круга:", circle.area())
        print("Периметр круга:", circle.perimeter())

    elif choice == 2:
        x = float(input("Введите длину первой стороны треугольника: "))
        y = float(input("Введите длину второй стороны треугольника: "))
        z = float(input("Введите длину третьей стороны треугольника: "))
        triangle = Triangle(x, y, z)
        print("Площадь треугольника:", triangle.area())
        print("Периметр треугольника:", triangle.perimeter())

    elif choice == 3:
        side = float(input("Введите длину стороны квадрата: "))
        square = Square(side)
        print("Площадь квадрата:", square.area())
        print("Периметр квадрата:", square.perimeter())

    else:
        print("Некорректный выбор.")

if __name__ == "__main__":
    n = ''
    while n != 'N':
        n = input("Continue? Y/N")
        main()
        