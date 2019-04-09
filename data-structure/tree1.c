#include<stdio.h>

struct node{
    int data;
    struct node *left;
    struct node *right;
};
struct node *tree=NULL;

struct node* NewNode(int data){
struct node *temp;
temp=(struct node*)malloc(sizeof(struct node*));
temp->data=data;
temp->left=NULL;
temp->right=NULL;
return temp;
}

void AddNode(struct node **temp,int data){
    if(*temp==NULL)
    {
        *temp=NewNode(data);
        printf("Create New Node %d \n",(*temp)->data);
        return;
    }
    else
    {
        if( data < (*temp)->data  )
        {
            printf("add %d to left of %d \n",data,(*temp)->data);
            AddNode(&((*temp)->left),data);
        }
        else if( data >= (*temp)->data  )
        {
            printf("add %d to right of %d \n",data,(*temp)->data);
            AddNode(&((*temp)->right),data);
        }
    }
    return;
}

int main(){
    AddNode(&tree,5);
    AddNode(&tree,4);
    AddNode(&tree,6);
}
