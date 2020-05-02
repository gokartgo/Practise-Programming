#include<stdio.h>
#define MAX 10
struct node {
  int edge;
  int visited;
  struct node *next;
};
struct node* graph[20];

struct node * newNode(struct node* Node,int data)
{
  Node=(struct node*)malloc(sizeof(struct node));
  Node->edge = data;
  Node->visited = 0;
  return Node;
}

void addnode(int vector,int edge)
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

int main() {
  int i;
  for(i=0;i < 5;i++) {
    graph[i] = NULL;
  }
  addnode(0,5);
  addnode(0,7);
  printf("%d",graph[0]->edge);
  printf("%d",graph[0]->next->edge);
  printf("\n");
}