#include<stdio.h>
struct node{
    int grade;
    int id;
    struct node *next;
    struct node *previous;
};
struct node *first;
struct node *last;
int queue[1000],index=0;

struct node* newNode(struct node *Node,int grade,int id){
    Node = (struct node *)malloc(sizeof(struct node));
    Node->next = NULL;
    Node->previous = NULL;
    Node->grade = grade;
    Node->id = id;
    return Node;
}

void addNode(int grade,int id){
    struct node *temp;
    temp = newNode(&temp,grade,id);
    if(first == NULL){
        first = temp;
        last = temp;
    }
    else{
        last->next = temp;
        temp->previous = last;
        last = temp;
    }
}

void sortAddNode(int grade,int id){
    struct node *temp,*check;
    temp = newNode(&temp,grade,id);
    if(first == NULL){
        first = temp;
        last = temp;
    }
    else{
        for(check=first;check!=NULL;check=check->next){
            if(check->next != NULL){
                if(temp->grade == check->grade && temp->grade != check->next->grade){
                    struct node *set;
                    set = check->next;
                    temp->next = set;
                    temp->previous = check;
                    check->next = temp;
                    set->previous = temp;
                return;
                }
            }
        }
        last->next = temp;
        temp->previous = last;
        last = temp;
    }
}

void displayNode(){
    struct node *temp;
    temp = (struct node *)malloc(sizeof(struct node));
    for(temp=first;temp!=NULL;temp=temp->next){
        printf("%d %d\n",temp->grade,temp->id);
    }
}

void deleteNodeFirst(){
    struct node *temp;
    if(first != NULL){
        queue[index++] = first->id;
        temp = first;
        first = temp->next;
        free(temp);
    }
    else{
        int i;
        printf("empty\n");
        for(i=0;i<index;i++){
                if(queue[i] == 0){
                break;
            }
                printf("%d\n",queue[i]);
        }
        if(queue[i-1]!=0){
            printf("0");
        }
        return 0;
    }
}

int main(){
    int numberOfGrade,numberOfStudent,i,chooseStudent;
    int student[1000][2];
    char command;
    scanf("%d",&numberOfGrade);
    scanf("%d",&numberOfStudent);
    for(i=0;i<numberOfStudent;i++){
        scanf("%d",&student[i][0]);
        scanf("%d",&student[i][1]);
    }
    while(command!='X'){
        scanf(" %c",&command);
        if(command == 'X'){
           continue;
        }
        if(command == 'E'){
            scanf("%d",&chooseStudent);
            for(i=0;i<numberOfStudent;i++){
                if(student[i][1] == chooseStudent){
                    sortAddNode(student[i][0],student[i][1]);
                }
            }
        }
        if(command == 'D'){
            deleteNodeFirst();
        }
    }
    for(i=0;i<numberOfStudent;i++){
            if(queue[i] == 0){
            break;
        }
        printf("%d\n",queue[i]);
    }
    if(queue[i-1]!=0){
        printf("0");
    }
}
