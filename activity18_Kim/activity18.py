'''
Activity 18 - for and while loops
Eunsu (David) Kim
8/3/22
'''

print("\n\n-------------------------- WHILE LOOPS -----------------------------")

print("Example 15) Ask user to enter two numbers between 0 and 10 with checkpoint. Use a while loop to increment each number by 2 until the sum of them reach 30")

number1 = int(input("Enter a number between 0 and 10: "))
while number1 < 0 or number1 > 10:
    number1 = int(input("Try again! Enter a number between 0 and 10: "))
    
number2 = int(input("Enter a number between 0 and 10: "))
while number2 < 0 or number2 > 10:
    number2 = int(input("Try again! Enter a number between 0 and 10: "))

while number1 <= 20 and number2 <= 20:
    addition = number1 + number2

    if addition > 30:
        break
    
    print("%s + %s = %s" % (number1, number2, addition))
    number1 += 2
    number2 += 2

    
print("Example 14) Checkpoint: Create a while loop that checks if an entered number is between 0 and 10")
number = int(input("Enter a number between 0 and 10: "))

while number < 0 or number > 10:
    number = int(input("Try again! Enter a number between 0 and 10: "))

print("Entered number = ", number)

print("\nExample 13) User enters two numbers. Use while loop to increment each number by 2 until one number reach 20")
num1 = int(input("Enter a number between 0 and 10: "))
num2 = int(input("Enter a number between 0 and 10: "))

while num1 <= 20 and num2 <= 20:
    print("Number 1 = %s, Number 2 = %s" %(num1, num2))
    num1 += 2
    num2 += 2


print("\nExample 12) while loop")
i = 0
while i < 6:
    print("i=", i)
    i += 1


print("\n\n-------------------------- FOR LOOPS -----------------------------")
print("Example 11: for-else statement")
for n in range(7):
    print(n)
else:
    print("DONE!")

print("\nExample 10) Use for loop to print num from 10 to -5 and skip numbers that are multiples of 4")
for num in range(10, -5, -1):
    if num % 4 == 0:
        continue
    print(num)

print("\nExample 9) Nesting for loop and if statement")
for counter in range(10):

    if counter == 5:
        continue
    print("Now counting:", counter)
    print("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*")

print("\nExample 8) for loop to iterate through a string")
msg = "Hello World"

for m in msg:
    print("character =", m)

print("\nExample 7) for loop to iterate through a list")
colors = ["yellow", "red", "blue", "green", "white", "black"]
for c in colors:
    print("Color =", c)

print("\nExample 6) for loop decrement counting")
for z in range(20, -10, -5):
    print("z=", z)

print("\nExample 5) for loop with three arguments")
for y in range(2, 30, 3):
    print("y =", y)

print("\nExample 4) Basic for loop")
for x in range(1, 5):
    print("Counting:", x)


print("\n\n--------------------- CONDITIONAL STATEMENTS ---------------------")
# and/or operators
# Example 3:
age = int(input("Enter an age: "))
gender = input("Type M for male or F for female: ")

if age == 5 and gender == 'M' or gender == 'm':
    print("5 year old boy!")
elif age == 5 and gender == 'F' or gender == 'f':
    print("5 year old girl!")
else:
    print("Any other age rather than 5")

# if-elif-else statement
# Example 2:
if age == 5:
    print("Age = 5, Height ~ 102cm, Weight ~ 14.8lbs")
elif age == 6:
    print("Age = 6, Height ~ 108cm, Weight ~ 16.3lbs")
elif age == 7:
    print("Age = 7, Height ~ 113cm, Weight ~ 18.0lbs")
else:
    print("Unable to display height and width")
    
# if statement + if-else statement
# Example 1: Check if user is an adult using if-else statement. 

if age >= 21:
    print("You are an adult!")
else:
    print("You are underage!")
print("Welcome to the class!")



