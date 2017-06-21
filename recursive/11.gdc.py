# Recursion - Exercices
# 11. Write a Python program to find  the greatest common divisor (gcd) of two integers

def gdc(a,b):
    rest = (a  % b)
    if rest == 0:
        return b
    else:
        return gdc(b, rest)

print(gdc(90,30))