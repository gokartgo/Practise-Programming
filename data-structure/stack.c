#include<stdio.h>
#define max 10
int top=0,stackdata[max];

void push(int value){
    if(top<max)
    {
        stackdata[top]=value;
        top++;
    }
    else
    {
        printf("stack over flow");
    }
}

int pop(){
    int ans;
    if(top>0)
    {
        top--;
        ans=stackdata[top];
        return ans;
    }
    else
    {
        return -1;
    }
}

int main(){
    int i;
    push(10);
    push(20);
    push(30);
    for(i=0;i<50;i++)
    {
        int a=pop();
        if(a==-1)
        {
            printf("NULL");
            break;
        }
    printf("stack data : %d\n",a);
    }
}
