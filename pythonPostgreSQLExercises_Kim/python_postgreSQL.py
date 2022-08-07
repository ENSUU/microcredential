'''
Python and PostgreSQL Exercises
Eunsu (David) Kim
'''

'''
print(" ------------------------------ ACTIVITY A ------------------------------")

numItems = int(input("Enter the number of fruits you would like to add: "))
fruits = []
itemCount = 1

for itemIndex in range(numItems):
    fruits.append(input("Fruit %s: " % (itemCount)))
    itemCount += 1

print("User created a list of %s items and entered the values: %s" % (numItems, fruits))
    
print(" ------------------------------ ACTIVITY B ------------------------------")

userNum1 = int(input("Enter number 1: "))
userNum2 = int(input("Enter number 2: "))

while userNum2 == userNum1:
    userNum2 = int(input("You have entered the same number twice. Please enter number 2 again: "))
    
for num in range(min(userNum1, userNum2), max(userNum1, userNum2)):
    print(num)
'''

print(" ------------------------------ ACTIVITY C ------------------------------")
import math

def volumeCylinder(h, r):
    return round(math.pow(r, 2) * math.pi * h, 2)

radius = int(input("Enter a radius: "))
height = int(input("Enter a radius: "))
volume = volumeCylinder(height, radius)
print("The volume of a cylinder with radius %s and height %s is %s\n" % (radius, height, volume))


print(" ------------------------------ ACTIVITY D ------------------------------")
import random

def diceRolls(numRolls):

    for roll in range(numRolls):
        randomNumber = random.randint(0, 6)
        print("Roll %s = %s" % (roll + 1, randomNumber))
        
numRolls = int(input("How many times do you want to roll the dice?: "))
diceRolls(numRolls)





