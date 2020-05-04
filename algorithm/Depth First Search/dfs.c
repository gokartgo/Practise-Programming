// use Graph List
#include<stdio.h>
#define MAX 10
struct node {
  int edge;
  int visited;
  struct node *next;
};
struct node* graph[MAX];
struct node* begin[MAX];
struct node * newNode(struct node* Node,int edge)
{
  Node=(struct node*)malloc(sizeof(struct node));
  Node->edge = edge;
  Node->visited = 0;
  return Node;
}

void addNode(int vector,int edge)
{
  struct node *tail;
  tail = newNode(&tail,edge);
  if(graph[vector]==NULL) {
    tail->next=NULL;
    graph[vector]=tail;
    begin[vector]=graph[vector];
  } else {
    tail->next=graph[vector]->next;
    graph[vector]->next=tail;
  }
}

void showGraph(int i) {
  printf("index %d : ",i);
  while(graph[i] != NULL) {
    printf("%d ",graph[i]->edge);
    graph[i] = graph[i]->next;
  }
  printf("\n");
}

void setStartIndexGraph() {
  int i;
  for(i=0;i < MAX;i++) {
    graph[i] = begin[i];
  }
}

void dfs(int current) {
  if(graph[current]) {
    if(graph[current]->visited == 1) {
    return;
    }
    graph[current]->visited = 1;
    while(graph[current]) {
      dfs(graph[current]->edge);
      graph[current] = graph[current]->next;
    }
  }
  printf("%d ",current);
}

int main() {
  int i;
  for(i=0;i < MAX;i++) {
    graph[i] = NULL;
  }
  addNode(0,5);
  addNode(0,7);
  addNode(7,8);
  addNode(7,9);
  // for(i=0;i < MAX;i++) {
  //   showGraph(i);
  // }
  // setStartIndexGraph();
  dfs(0);
  printf("\n");
}