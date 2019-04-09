#include<stdio.h>
#include<time.h>
#include<stdlib.h>
#define MAX 10
int value[MAX],i,j,k;
void setvalue(){
    srand(time(NULL));
    printf("Before sort : ");
    for(i=0;i<MAX;i++)
        value[i]=rand()%50+1;
    for(i=0;i<MAX;i++)
        printf("%d  ",value[i]);

}

void quicksort(int val[],int low,int up){
    int left,right,temp,piv;
    int pivot=1;
    piv=low;
    left=low;
    right=up;
    if(low>=up)
        return;
        while(pivot){
        //compare right to left
        while(val[piv]<=val[right]&&piv<right)
            right--;
            if(piv==right)
                pivot=0;
            if(val[piv]>val[right])
            {
                temp=val[piv];
                val[piv]=val[right];
                val[right]=temp;
                piv=right;
            }

        //compare left to right
        while(val[piv]>=val[left]&&piv>left)
            left++;
            if(piv==left)
                pivot=0;
            if(val[piv]<val[left])
            {
                temp=val[piv];
                val[piv]=val[left];
                val[left]=temp;
                piv=left;
            }
        }

            quicksort(val,low,piv-1);
            quicksort(val,piv+1,up);

}

int main(){
    setvalue();
    quicksort(value,0,MAX-1);
    printf("\n");
    printf("After quicksort : ");
    for(i=0;i<MAX;i++)
        printf("%d  ",value[i]);
}
