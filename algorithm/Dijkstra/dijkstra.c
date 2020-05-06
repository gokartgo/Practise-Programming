// add graph undirect (undirect is line haven't pointer x ->)
#include<stdio.h>
#define MAX 9
#define INF 9999
int graph[MAX][MAX] = {{0, 4, 0, 0, 0, 0, 0, 8, 0},
                      {4, 0, 8, 0, 0, 0, 0, 11, 0},
                      {0, 8, 0, 7, 0, 4, 0, 0, 2},
                      {0, 0, 7, 0, 9, 14, 0, 0, 0},
                      {0, 0, 0, 9, 0, 10, 0, 0, 0},
                      {0, 0, 4, 14, 10, 0, 2, 0, 0},
                      {0, 4, 0, 0, 0, 2, 0, 1, 6},
                      {8, 11, 0, 0, 0, 0, 1, 0, 7},
                      {0, 0, 2, 0, 0, 0, 6, 7, 0}};

int main() {
  int i,j,vertex,source[MAX],select[MAX],min,index_min;
  printf("input start vertex : ");
  scanf("%d",&vertex);
  for(i = 0;i<MAX;i++) {
    if(graph[vertex][i] != 0 || vertex == i) {
      source[i] = graph[vertex][i];
    } else {
      source[i] = INF;
    }
    if(i == vertex) {
      select[i] = 1;
    } else {
      select[i] = 0;
    }
  }
  for(i = 0;i<MAX-1;i++) {
    min = INF;
    for(j = 0;j<MAX;j++) {
      if(source[j] < min && select[j] == 0) {
        min = source[j];
        index_min = j;
      }
    }
    select[index_min] = 1;
    for(j = 0;j<MAX;j++) {
      if(graph[index_min][j] + min < source[j] && graph[index_min][j] != 0) {
        source[j] = graph[index_min][j] + min;
      }
    }
  }
  for(i = 0;i<MAX;i++) {
    printf("source : %d ---> des %d : value : %d\n",vertex,i,source[i]);
  }
}