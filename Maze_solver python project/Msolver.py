# Project - 1 (DSA ) Maze Solver  Project  - To Find_path


def DisPlay(visited):
    print('Solved maze path:')
    for i in visited:
        for j in i:
            print(str(j)+' ',end='')
        print('')


def FindPath(Graph,Row):
    visited=[[0 for i in range(Row)] for i in range(Row)]
    if MazePath(Graph,0,0,visited,Row):
        DisPlay(visited)
    else:
        print('Path doesnt exist')



def ValidatePath(Graph,x,y,visited,Row):
    if x>=0 and x<Row and y >=0 and y<Row and Graph[x][y]==1:
        return True
    else:
        return False


def MazePath(Graph,x,y,visited,Row):
    if x==Row-1 and y==Row-1:
        visited[x][y]=1
        return True

    if ValidatePath(Graph,x,y,visited,Row):
        visited[x][y]=1

        if MazePath(Graph,x+1,y,visited,Row):
            return True

        if MazePath(Graph,x,y+1,visited,Row):
            return True

            

if __name__ == "__main__":
    Graph=[]
    Row=int(input('Enter number of rows\n'))
    for i in range(Row):
        print('Enter row:',i+1)
        row=list(map(int,input().split()))
        Graph.append(row)
    FindPath(Graph,Row)