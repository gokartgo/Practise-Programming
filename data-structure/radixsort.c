#include<stdio.h>
#define MAX 5

    int value[MAX]={18,39,13,56,62};

struct node{
    struct node *next;
    struct node *previous;
    int data;
};
struct node *first[10];
struct node *last[10];

void addnode(int value,int sequence){
    struct node *n;
    n = (struct node *)malloc(sizeof(struct node));
    n->next=NULL;
    n->previous=NULL;
    n->data=value;

    if(last[sequence]==NULL)
    {
        first[sequence]=n;
        last[sequence]=n;
    }
    else
    {
        last[sequence]->next=n;
        n->previous=last[sequence];
        last[sequence]=n;
    }

}
void shownode(){
    struct node *temp;
    int i,count=0;
    for(i=0;i<10;i++)
    {
    for(temp=first[i];temp!=NULL;temp=temp->next)
    {
        value[count]=temp->data;
        printf("%d\n",value[count]);
        count++;
    }
    }
}

void getfree(){
    int i;
    for(i=0;i<10;i++)
    {
    while(first[i]!=NULL)
    {
        struct node *temp;
        temp=first[i];
        first[i]=first[i]->next;
        temp=NULL;
    }
    last[i]=NULL;
    }
}

int main(){
    int i,j,k,which;
    for(i=0;i<MAX;i++)
    {
        which=value[i]%10;
        addnode(value[i],which);
    }
    shownode();
    getfree();
    printf("\n");
    for(i=0;i<MAX;i++)
    {
        which=value[i]/10;
        addnode(value[i],which);
    }
    shownode();
    getfree();
}
