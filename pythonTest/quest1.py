# You are given an array A of size N.
# Find MEX of array A.
# MEX (minimum excluded) of an array A is the lowest positive integer that does not exist in the list.
# Sample Input -
# 3
# 1 2 3
# Sample Output -
# 4
# 4 is the first positive(>0) integer that doesn't exist in the array

def firstPositive(a):

    for pos in range(len(a)):
        if a[pos] < 0:
            a[pos] = 0

    for pos in range(len(a)):
        value = abs(a[pos])
        if value > 0 and value-1 < len(a):
            if a[value-1] > 0:
                a[value-1] *= -1
            elif a[value-1] == 0:
                a[value-1] = -(value)

    for pos in range(len(a)):
        if a[pos] >= 0:
            return pos+1

    return len(a)+1


n = int(input())

a = list(map(int, input().split()))

print(firstPositive(a))