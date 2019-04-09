#include<stdio.h>
#define MAX 200
int head=-1,tail=-1,queue[MAX],max=5;
void enqueue(int value){
    if(head<=tail)
    {
        if(tail==max-1&&head>0)
        {
            tail=-1;
        }
        if(tail<max-1)
        {
            queue[++tail]=value;
        }
        else
        {
            printf("Over flow");
        }
    }
    else if(tail<head)
    {
        tail++;
        if(tail==head)
        {
            printf("Over flow");
            tail--;
        }
        else
        {
            queue[tail]=value;
        }
    }
}

int dequeue(){
    int temp;
        if(tail==-1)
        {
            printf("NULL");
        return -1;
        }
    if(head==-1)
        head=0;
    if(head<=tail)
    {
    temp=queue[head];
    if(head==tail)
    {
        head=-1;
        tail=-1;
        return temp;
    }
    else
    {
        head++;
    }
    return temp;
    }
    else if(head>tail)
    {
        temp=queue[head++];
        if(head==max)
        head=0;
        return temp;

    }
}



int main(){

    }
