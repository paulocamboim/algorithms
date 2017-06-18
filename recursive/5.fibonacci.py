# Recursion - Exercices
# 5. Write a Python program to solve the Fibonacci sequence using recursion.
# The program should return the Nth number in Fibonacci sequence.

def fibonnaciElementAt(n):
    if (n == 1 or n == 2):
        return 1

    return fibonnaciElementAt(n - 1) + fibonnaciElementAt(n - 2)

print(fibonnaciElementAt(7))