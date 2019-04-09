#include<stdio.h>
#include<time.h>
#define MAX 5
int main(){
int value[MAX],i,j,k,check=0,temp=-1;
    srand(time(NULL));
    for(i=0;i<MAX;i++)
    {
        value[i]=rand()%50+1;
    }

    for(i=0;i<MAX;i++)
    {
        for(j=i-1;j>=0;j--)
        {
            if(value[i]<value[j])
            {
                check=j;
            }
        }
        if(check!=i)
            temp=value[i];
        for(k=i;k>check;k--)
        {
            value[k]=value[k-1];
        }
        if(temp!=-1)
            value[check]=temp;
        temp=-1;
        check=i+1;
    }
    for(i=0;i<MAX;i++)
        printf("%d ",value[i]);
}
