PROJECT TITLE - MAZE SOLVER

PROJECT AIM: The aim of this project is to build a python program that runs as a command-line
tool. It should take the input and output file name as command-line arguments.
Using the square matrix present in the input file it should generate a path to reach
the end of the maze and put it in the output file. If the maze is unsolvable, it should
return -1 as the only value in the output file.

WHAT IS MAZE SOLVER?

Maze solver is an algorithm. It is used to solve maze where Inputs are given in the form of O’s and 1’s. It is designed to find the shortest path between source point (starting point) to the destination point. 



DESCRIPTION: The folder mainly contains four files:
1) Input.txt
2) Output.txt
3) Maze.py
4) Read.md

Input data like :
Enter number of rows:
4 
row1:
1 0 0 1
row2:
1 1 1 0
row3:
0 1 0 0
row4:
1 1 1 1

Where 0 is all the blocked paths and 1 is all the paths that you can go to. Now the
task is to go through any 1 possible path and give it in the output file. We have to
mark all the points you have visited while traversing the path as 1. So, the output will be:
1 0 0 1
1 1 1 0
1 1 0 0 
0 1 1 1

Tools used:
➔ Python tool
➔ Visual code