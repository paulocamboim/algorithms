# Recursion - Exercices
# 2. Write a Python program to converting an Integer to a string in any base.

def intToString(n, base):    
    chars = "0123456789ABCDEF"
    # Base case
    if (n < base):
        return chars[n]

    # Recursion
    return intToString(n // base, base) + chars[n % base]

print(intToString(2835,16))
print(intToString(10,2))