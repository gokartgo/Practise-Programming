#include<stdio.h>
#include<time.h>
#define MAX 5
int main(){
    int i,j,k,value[MAX],temp;
    srand(time(NULL));
    for(i=0;i<MAX;i++)
    {
        value[i]=rand()%50+1;
    }
    for(i=0;i<MAX;i++)
    {
        temp=value[i];
        for(j=i-1;j>=0;j--)
        {
            if(temp>value[j])
                break;
            value[j+1]=value[j];
        }
        value[j+1]=temp;
    }

    for(i=0;i<MAX;i++)
    {
        printf("%d\n",value[i]);
    }

}
