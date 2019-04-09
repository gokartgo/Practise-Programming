#include<stdio.h>
#include<string.h>
struct point{
    int x;
    int y;
    char name[30];
};
struct point p;

struct node{
    struct point data;
    struct node *next;
};
struct node *head;

void addnode(struct point i){
struct node *n;
n=(struct node*)malloc(sizeof(struct node));

n->data.x=i.x;
n->data.y=i.y;
strcpy(n->data.name,i.name);

    if(head->next==NULL)
    {
        n->next=NULL;
    }
    else
    {
        n->next=head->next;
    }
head->next=n;
}

int main(){
    head=(struct node*)malloc(sizeof(struct node));
    head->next=NULL;
    head->data.x=0;
    head->data.y=0;
    strcpy(head->data.name,"");
    p.x=100;
    p.y=200;
    strcpy(p.name,"gokart");
    addnode(p);
    p.x=300;
    p.y=400;
    strcpy(p.name,"maihom");
    addnode(p);
    struct node *temp;
    for(temp=head->next;temp!=NULL;temp=temp->next)
    {
        printf("%d %d %s\n",temp->data.x,temp->data.y,temp->data.name);
    }
}
