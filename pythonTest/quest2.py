# Given an array A of length N.
# A sequence B is a subsequence of an array A if B can be obtained from A by deleting some (possibly zero) elements.
# Find out if there exists a non-empty subsequence of array A such that the product of its elements is not a perfect square.


perfectSquare = set(s ** 2 for s in range(1, 101))

for t in range(int(input())):
   n = int(input())
   print('NO' if all(int(s) in perfectSquare for s in input().split()) else 'YES')