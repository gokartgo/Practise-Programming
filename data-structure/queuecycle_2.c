#define MAX 5
#include<stdio.h>
int queue[MAX],head=-1,tail=-1;

void enqueue(int value){
    if((tail==MAX-1&&head==0) || head==tail+1){
        printf("FULL\n");
    }
    else{
        if(tail==-1){
            head=0;
            tail=0;
        }
        else if(tail==MAX-1)
        {
            tail=0;
        }
        else
        {
            tail++;
        }
        queue[tail]=value;
    }
}

int dequeue(){
    if(head==-1)
    {
        printf("NULL");
        return -1;
    }
    int temp=head,value;
    if(head==tail){
        head=-1;
        tail=-1;
    }
    else if(head==MAX-1){
        head=0;
    }
    else{
        head++;
    }
    value=queue[temp];
    return value;
}

int main(){
    printf("%d\n",dequeue());
    enqueue(1);
    enqueue(2);
    printf("%d\n",dequeue());
    printf("%d\n",dequeue());
    printf("%d\n",dequeue());
    enqueue(1);
    enqueue(2);
    printf("%d\n",dequeue());
    enqueue(3);
    enqueue(4);
    enqueue(5);
    enqueue(6);
    enqueue(7);
    printf("%d\n",dequeue());
    printf("%d\n",dequeue());
    printf("%d\n",dequeue());
    printf("%d\n",dequeue());
    printf("%d\n",dequeue());

}
