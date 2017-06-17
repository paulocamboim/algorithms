# Recursion - Exercices
# 1. Write a Python program to calculate the sum of a list of numbers.

def sumList(list):
    # Base Case
    if (len(list) == 0):
        return 0
    elif (len(list) == 1):
        return list[0]
    else:
        return (list[0] + list[1]) + sumList (list[2:])

print(sumList([2, 4, 5, 6, 7]))