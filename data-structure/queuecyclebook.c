#include<stdio.h>
#define MAX 5
int head=-1,tail=-1,number[MAX];

void enqueue(int value){
    if((tail==MAX-1&&head==0)||(head==tail+1))
    {
        printf("Over flow\n");
        return;
    }
    if(tail==-1)
    {
        head=0;
        tail=0;
    }
    else
    {
        if(tail==MAX-1)
            tail=0;
        else
            tail++;
    }
        number[tail]=value;
}

int dequeue(){
    int temp;
    if(tail==-1)
    {
        printf("NULL");
        return -1;
    }
    temp=number[head];
    if(head==tail)
    {
        tail=-1;
        head=-1;
    }
    else
    {
        if(head==MAX-1)
            head=0;
        else
            head++;
    }
    return temp;
}

int main(){
    int i;
    for(i=1;i<=6;i++)
        enqueue(i);
    for(i=1;i<=3;i++)
        printf("%d\n",dequeue());
      for(i=1;i<=6;i++)
        enqueue(i);
        for(i=1;i<=6;i++)
        printf("%d\n",dequeue());

}
