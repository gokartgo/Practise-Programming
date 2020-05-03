// add graph undirect (undirect is line haven't pointer x ->)
#include<stdio.h>
#define MAX 10
struct node {
  int edge;
  int visited;
  struct node *next;
};
struct node* graph[MAX];
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
  } else {
    tail->next=graph[vector]->next;
    graph[vector]->next=tail;
  }
}

void addEdge(int vector,int edge) {
  addNode(vector,edge);
  addNode(edge,vector);
}

void show(int i) {
  printf("index %d : ",i);
  while(graph[i] != NULL) {
    printf("%d ",graph[i]->edge);
    graph[i] = graph[i]->next;
  }
  printf("\n");
}

int main() {
  int i;
  for(i=0;i < MAX;i++) {
    graph[i] = NULL;
  }
  addEdge(0,5);
  addEdge(0,7);
  for(i=0;i < MAX;i++) {
    show(i);
  }
  printf("\n");
}