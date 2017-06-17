# Recursion - Exercices
# 3. Write a Python program of recursion list sum.
# Test Data: [1, 2, [3,4], [5,6], [1,[2,3],1] ]
# Expected Result: 28

def sumList(myList):
    total = 0;
    for item in myList:
        if type(item) is list:
            total += sumList2(item)
        else:
            total += item 

    return total

# Using many recusive call - not good
def sumList2(myList, total):
    if (len(myList) == 0):
        return total 

    if (type(myList[0]) is not list):
        total += myList[0]
        return sumList(myList[1:], total)
    else:
        total = sumList(myList[0], total)
        return sumList(myList[1:], total)

print(sumList([1, 2, [3,4], [5,6], [1,[2,3],1] ], 0))
print(sumList2([1, 2, [3,4], [5,6], [1,[2,3],1] ]))