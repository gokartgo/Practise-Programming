#include<stdio.h>
#include <stdlib.h>
#include <time.h>
#define MAX 5
int main(){
int value[MAX],i,j,k;
    srand((unsigned)time(0));
    for(i=0;i<MAX;i++)
        value[i]=rand()%30+1;
    for(i=0;i<MAX-1;i++)
    {
        for(j=0;j<MAX-(i+1);j++)
        {
            if(value[j]>value[j+1])
            {
                int temp;
                temp=value[j+1];
                value[j+1]=value[j];
                value[j]=temp;
            }
        }
    }
    for(i=0;i<MAX;i++)
        printf("%d  ",value[i]);

}
