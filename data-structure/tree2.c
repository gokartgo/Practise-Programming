#include<stdio.h>

struct node{
    struct node *left;
    struct node *right;
    int data;
};
struct node *root=NULL;

struct node_q{
    struct node *add;
    struct node_q *next;
};
struct node_q *first_q,*last_q,*new_q;

//breadth-first traversal//////////////////////////////

void add_q(struct node *root){
    new_q=(struct node_q *)malloc(sizeof(struct node_q));
    new_q->add=root;
    new_q->next=NULL;
    if(first_q==NULL){
        first_q=last_q=new_q;
    }
    else
    {
         last_q->next=new_q;
         last_q=last_q->next;
    }
}

struct node* delete_q(struct node *root){
    if(first_q==NULL){
        root=NULL;
    }
    else
    {
        root=first_q->add;
        new_q=first_q;
        first_q=first_q->next;
        free(new_q);
    }
    return(root);
}

void breadth_search(struct node *root){
while(root!=NULL){
    printf("access node %d\n",root->data);
    if(root->left!=NULL){
        add_q(root->left);
    }
    if(root->right!=NULL){
        add_q(root->right);
    }
    root=delete_q(root);
}
}

//add_node////////////////////////////////////////////

struct node* new_node(int data){
    struct node *temp;
    temp = (struct node *)malloc(sizeof(struct node));
    temp->left=NULL;
    temp->right=NULL;
    temp->data=data;
    return temp;
}

void add_node(struct node **tree,int data){
    if(*tree==NULL){
        *tree = new_node(data);
        printf("add %d in node\n",data);
    }
    else
    {
        if(data < (*tree)->data)
        {
            printf("input %d in left of %d\n",data,(*tree)->data);
            add_node(&(*tree)->left,data);
        }
        else if(data >= (*tree)->data)
        {
            printf("input %d in right of %d\n",data,(*tree)->data);
            add_node(&(*tree)->right,data);
        }
    }
}

//depth-first traversal//////////////////

void inorder(struct node *root){
    if(root!=NULL)
    {
    inorder(root->left);
    printf("%d ",root->data);
    inorder(root->right);
    }
}

void postorder(struct node *root){
    if(root!=NULL)
    {
    postorder(root->left);
    postorder(root->right);
    printf("%d ",root->data);
    }
}

void preorder(struct node *root){
    if(root!=NULL)
    {
    printf("%d ",root->data);
    preorder(root->left);
    preorder(root->right);
    }
}

// delete node /////////////////////////////

void delete_node_right(struct node *root){
if(root->right==NULL){
    printf("not have node in right");
    return;
}
struct node *p,*q;
p=root->right;

if(p->left!=NULL){
    q=root->right=p->left;
    while(q->right!=NULL){
        q=q->right;
    }
    q->right=p->right;
    free(p);
}
else{
    q=p;
    root->right=p->right;
    free(q);
}

}

void delete_node_left(struct node *root){
if(root->left==NULL){
    printf("not have node in left");
    return;
    }
struct node *p,*q;
p=root->left;
if(p->right!=NULL){
    q=root->left=p->right;
    while(q->left!=NULL){
        q=q->left;
    }
    q->left=p->left;
    free(p);
}
else{
    q=p;
    root->left=p->left;
    free(q);
}

}

//search////////////////////////////
void binary_search(struct node *root,int data){
    if(root==NULL){
        printf("\nnot found\n");
        return;
    }
    else{
        printf("#");
    if(data < root->data){
        binary_search(root->left,data);
    }
    else if(data > root->data){
        binary_search(root->right,data);
    }
    else if(data == root->data){
        printf("\nfound %d\n",data);
    }
    }
}


int main(){
    add_node(&root,5);
    add_node(&root,7);
    add_node(&root,4);
    add_node(&root,8);
    add_node(&root,1);
    add_node(&root,13);
    printf("Inorder : ");
    inorder(root);
    printf("\n");
    printf("Postorder : ");
    postorder(root);
    printf("\n");
    printf("Preorder : ");
    preorder(root);
    printf("\n");
    binary_search(root,7);
}
