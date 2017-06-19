# Recursion - Exercices
# 6. Write a Python program to get the sum of a non-negative integer.
# sumDigits(345) -> 12 / sumDigits(45) -> 9

# Not a good approach because is converting int to string and slice
def sumDigits(n):
    stringN = str(n)
    if len(stringN) > 1:
        return int(stringN[0]) + sumDigits(int(stringN[1:]))
    else:
        return int(stringN[0])

# Better solution would take advantage of integer's module
def sumDigitsImproved(n):
    if (n < 10):
        return n
    return (n % 10) + sumDigitsImproved(n // 10) 
    

print(sumDigits(451))
print(sumDigitsImproved(451))