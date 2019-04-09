#include<stdio.h>
struct node{
    struct node *next;
    struct node *previous;
    int data;
};
    struct node *first;
    struct node *last;

void addnode(int value){
    struct node *n;
    n=(struct node *)malloc(sizeof(struct node));
    n->data=value;
    n->next=NULL;
    n->previous=NULL;
    if(last==NULL)
    {
        first=n;
        last=n;
    }
    else
    {
        last->next=n;
        n->previous=last;
        last=n;
    }
}

void displaynode(){
    printf("NODE : ");
    struct node *temp;
    for(temp=first;temp!=NULL;temp=temp->next)
    {
        printf("%d ",temp->data);
    }
}

void displaynodereverse(){
    printf("NODE : ");
    struct node *temp;
    for(temp=last;temp!=NULL;temp=temp->previous)
    {
        printf("%d ",temp->data);
    }
}

void searchnode(int value){
    struct node *movefirst;
    struct node *movelast;
    movefirst=first;
    movelast=last;
    while(1){
        printf("#");
        if(movefirst->data==value)
        {
            printf("\n%d\nfound(first)",movefirst->data);
            break;
        }
        else if(movelast->data==value)
        {
            printf("\n%d\nfound(last)",movelast->data);
            break;
        }
        else if(movelast==first&&movefirst==last)
        {
            printf("\nNot found");
            break;
        }
        movefirst=movefirst->next;
        movelast=movelast->previous;
    }

}

int main(){
    addnode(41);
    addnode(51);
    addnode(61);
    addnode(71);
    displaynode();
    printf("\n");
    displaynodereverse();
    printf("\n");
    searchnode(60);
}
