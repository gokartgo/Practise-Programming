#include<stdio.h>
int order=0,number[100],ans[100],count[100],check[100],i,j,k;
void permutation(int number[],int check[],int ans[],int count[],int order,int k){
if(order==i)
{
    for(k=0;k<j;k++)
    {
        if(ans[0]==check[k])
            return;
    }
    for(k=0;k<i;k++)
    {
        printf("%d ",ans[k]);
    }
    printf("\n");
    return;
}
for(k=0;k<i;k++)
{
    if(count[k]==0)
        continue;
    ans[order]=number[k];
    count[k]--;
    permutation(number,check,ans,count,order+1,k);
    count[k]++;
}
}

int main(){
scanf("%d",&i);
scanf("%d",&j);
for(k=0;k<j;k++)
    scanf("%d",&check[k]);
for(k=0;k<i;k++)
{
    count[k]=1;
    number[k]=k+1;
}
permutation(number,check,ans,count,order,k);
}
