"""
Activity 19: Functions
Eunsu (David) Kim
"""

import math
import random

# Example 8) pass statement

def filter_num():
    pass

# Example 7) Boolean function
def is_divisible(x, y):
    print("--------------------------------- EXAMPLE 7 ---------------------------------")
    if x % y == 0 or y % x == 0:
        return True
    else:
        return False

# Example 6) Define a function with parameter and return value

def sum(num1, num2):
    total = num1 + num2
    return total

def number():
    print("--------------------------------- EXAMPLE 6 ---------------------------------")
    n1 = int(input("Enter number 1: "))
    n2 = int(input("Enter number 2: "))
    x = sum(n1, n2)
    print("The sum of %s and %s is %s" % (n1, n2, x))


# Example 5) Define a function with default parameters + no return value
def country(c = "Norway"):
    print("--------------------------------- EXAMPLE 5 ---------------------------------")
    print("I am from %s" % (c))

# Example 4) Define a function with parameter + no return value

def name(fname):
    print("--------------------------------- EXAMPLE 4 ---------------------------------")
    print("Welcome to the program: %s" % (fname))

# Example 3) Define a function with no parameters + no return value

def my_function():
    print("--------------------------------- EXAMPLE 3 ---------------------------------")
    print("Hello from function!\n")


# Example 2) Random Numbers - Randomly pick a color from a list.
    # Notes:
    # random.uniform(beginning, end) - Generates a random float number between the range of beginning and end.
    # random.randint(beginning, end) - Generates a random integer between the range of beginning and end.
    # random.randrange(beginning, end, multiple) - Generates a random number between beginning and end + multiple of specified value
    # random.random() - Generates a random number between 0 and 1

print("--------------------------------- EXAMPLE 2 ---------------------------------")
colors = ["Red", "Blue", "Green"]
randomIndex = random.randint(0,2)
print("The randomly picked color: %s" % (colors[randomIndex]))


print("--------------------------------- EXAMPLE 1 ---------------------------------")
# Example 1) Using built-in functions of math library to calculate the circumference given the radius.
    # Notes:
    # math.floor(number) - Rounds down
    # math.pow(number, power) - Raises number to power
    # math.pi - returns the value of pi

radius = float(input("Enter a radius: "))
circumference = round(2 * math.pi * radius, 2)
area = math.floor(math.pow(radius, 2) * math.pi)
print("The circumference with radius %s is %s and the area is %s" % (radius, circumference, area))
