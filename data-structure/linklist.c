#include<stdio.h>
struct node{
int data;
struct node *next;
};
   struct node *first;
struct node * newNode(struct node *Node,int data)
{
        Node=(struct node*)malloc(sizeof(struct node));
        Node->data = data;
        return Node;
}

void addnode(int i)
{
    struct node *tail;

    tail=newNode(&tail,i);
    if(first->next==NULL)
        tail->next=NULL;
    else
        tail->next=first->next;
        first->next=tail;
}

void removenodefirst()
{
    struct node *exit;
    exit=first->next;
    first->next=exit->next;
    free(exit);

}

void removenodelast()
{
    struct node *last;
    for(last=first->next;last->next->next!=NULL;last=last->next)
    {
    }
    struct node *temp;
    temp=last->next;
    free(temp);
    last->next=NULL;
}

void removenodeselect(int i)
{
    struct node *select;
    struct node *temp;
    for(select=first->next;select!=NULL;select=select->next)
    {
        if(select->next->data==i)
        {
            temp=select->next;
            select->next=temp->next;
            free(temp);
            break;
        }
    }
}

int main(){
    first=(struct node *)malloc(sizeof(struct node));
    first->data=0;
    first->next=NULL;

    addnode(10);
    addnode(20);
    addnode(30);
    addnode(40);
    addnode(50);
    addnode(60);

    struct node *ans;
    for(ans=first->next;ans!=NULL;ans=ans->next)
    {
        printf("%d\n",ans->data);
    }

    removenodefirst();
    removenodefirst();
    removenodefirst();
    removenodeselect(20);

    for(ans=first->next;ans!=NULL;ans=ans->next)
    {
        printf("%d",ans->data);
    }
}
