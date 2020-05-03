#include<stdio.h>
#define MAX 10
struct node {
  int edge;
  int visited;
  struct node *next;
};
// begin use for save index start of pointer graph
struct node* begin[MAX];
struct node* graph[MAX];
struct node* stack;

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
    // set begin to contain start index of graph
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

void moveVertex(int current,int *start,int *des) {
  start+=current;
  *start = -1;
  des+=current;
  *des = 1;
}

int dfs(int current,int *whiteSet,int *graySet,int * blackSet) {
  moveVertex(current,whiteSet,graySet);
  while(graph[current] != NULL) {
    if(blackSet[current] == 1) {
      graph[current] = graph[current]->next;
      continue;
    }
    if(graySet[graph[current]->edge] == 1) {
      return 1;
    }
    if(dfs(graph[current]->edge,whiteSet,graySet,blackSet)) {
      return 1;
    }
    graph[current] = graph[current]->next;
  }
  moveVertex(current,graySet,blackSet);
  return 0;
}

int cycleInDirectedGraph() {
  int whiteSet[MAX],graySet[MAX],blackSet[MAX],i;
  for(i=0;i<MAX;i++) {
    whiteSet[i] = 1;
    graySet[i] = 0;
    blackSet[i] = 0;
  }
  int check = 1;
  int current;
  while(check) {
     for(i=0;i<MAX;i++) {
      if(whiteSet[i] == -1) {
        continue;
      } else {
        current = i;
        break;
      }
    }
    if(dfs(current,whiteSet,graySet,blackSet)) {
      return 1;
    }

    for(i=0;i<MAX;i++) {
      if(whiteSet[i] == -1) {
        check = 0;
      } else {
        check = 1;
        break;
      }
    }
  }
  return 0;
}

void addStack(int current) {
  struct node* temp;
  temp = (struct node *)malloc(sizeof(struct node));
  temp->edge = current;
  if(stack->next == NULL) {
    temp->next = NULL;
  } else {
    temp->next = stack->next;
  }
  stack->next = temp;
}

int topologicalSort(int current,int *visited) {
  visited[current] = 1;
  while(graph[current] != NULL) {
    if(topologicalSort(graph[current]->edge,visited)) {
      return 1;
    }
    graph[current] = graph[current]->next;
  }
  addStack(current);
  return 0;
}

int main() {
  int i;
  stack = (struct node *)malloc(sizeof(struct node));
  stack->next = NULL;
  stack->edge = 0;
  // create directed graph
  for(i=0;i < MAX;i++) {
    graph[i] = NULL;
  }
  addnode(0,4);
  addnode(1,2);
  addnode(4,1);
  addnode(4,5);
  addnode(5,6);
  // show Graph was created
  // for(i=0;i < MAX;i++) {
  //   showGraph(i);
  // }
  // setStartIndexGraph();

  // check is Cycle in directed graph
  if(cycleInDirectedGraph()) {
    printf("cannot topological sort with cycle directed graph");
  } else {
    // set graph pointer to start index
    setStartIndexGraph();
    int visited[MAX];
    for(i=0;i<MAX;i++) {
      if(visited[i] == 1) {
        continue;
      }
      topologicalSort(i,visited);
    }
    stack = stack->next;
    while(stack != NULL) {
      printf("%d ",stack->edge);
      stack = stack->next;
    }
  }
  printf("\n");
}