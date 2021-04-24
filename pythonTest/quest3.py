# There are N books numbered from 1 to N.
# It takes t[i] time to read the ith book.
# A can start reading books in any order.
# B can start reading books in any order.
# They cannot read a book at the same time.
# What is the minimum total time required for them to read all the books?
# Sample Input -

# 3
# 2 3 8
# Sample Output -

# 16
# Explanation -

# B starts reading 3rd book.
# Meanwhile A is reading book 1 and book 2.
# Total time taken to read book 3 by B = 8 sec.
# A waits for B to finish reading book B.
# After 8 Seconds, A starts reading Book 3 and B starts reading book 1 and book2 . Again total time taken by A to read book 3 is 8 seconds and B in this time has finished reading book1 and book2
# Total time=8+8=16seconds

def minimumTime(a, n):
    sum = 0

    T = max(a)
    for i in range(n):
    
        sum += a[i]

    print(max(2 * T, sum))

if __name__ == '__main__':
 
    
    n = int(input())
    a = list(map(int, input().strip().split()))

    minimumTime(a, n)