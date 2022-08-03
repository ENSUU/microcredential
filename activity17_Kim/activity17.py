# Eunsu (David) Kim - Activity 17

'''
Multiple
line
comments.
'''

# LISTS

fruits = ["Apples", "Oranges", "Grapes", "Pears", "Cherries", "Mangoes"]
print(fruits)

# arr.copy() => Used to create an independent copy of a list:
    # Changes to the copied list don't affect the original list. 
copyFruits = fruits.copy()
copyFruits.reverse()
copyFruits.append("Grapes")
print("Original List: %s \nCopy List: %s" % (fruits, copyFruits))

# arr.count(elem) => Returns the amount of times an element appears in the list. 
numGrapes = copyFruits.count("Grapes")
print("There are", numGrapes, "grapes in the list.")

numKiwi = copyFruits.count("Kiwis")
print("There are", numKiwi, "kiwis in the list.")

# arr.index(elem) => Returns the index of the element in the list.
indexPears = fruits.index("Pears")
print("Pears has index", indexPears)


# STRINGS
msg = input("Enter a message: ")
fullName = input("Enter a full name: ")
print("%s. Welcome %s" %(msg, fullName))

nameLen = len(fullName) 
print("Name: %s has %s characters" % (fullName, nameLen))

lastCharName = fullName[nameLen - 1]
index_a = fullName.find('a')
print("Name: %s has %s characters and the last character is: %s" % (fullName.upper(), nameLen, lastCharName))
print("Name: %s has letter a with index %s " %(fullName, index_a))

print("Hello World")

# Variables + Data Types
number1 = -30
number2 = 15.6
addition = number1 + number2
name = "Eunsu Kim"
character = 't'
no_yes = False
print("Number 1 =", number1)

# input() function
firstName = input("Enter a name: ")
print("Welcome to the program:", firstName)

# Type Casting from string to integer
num1 = input("Enter a number: ")
num1 = int(num1) 
num2 = int(input("Enter a 2nd number: "))
prod = num1 * num2
print("The product of ", num1, " and ", num2, " is ", prod)

# Example 1: Find the Hypotenuse of a right angle
h = float(input("Enter the height: "))
w = float(input("Enter the width: "))
hyp = (h**2 + w**2)**0.5
print("The hypotenuse is:", hyp)

