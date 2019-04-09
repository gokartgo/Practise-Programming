#include<stdio.h>
int num[200],ans[200],count[200],source=0,k,i;
void permutation(int num[],int count[],int ans[],int source,int k){
    if(source==i)
    {
        for(k=0;k<i;k++)
            printf("%d",ans[k]);
        printf("\n");
        return;
    }
    for(k=0;k<i;k++)
    {
        if(count[k]==0)
            continue;
        ans[source]=num[k];
        count[k]--;
        permutation(num,count,ans,source+1,k);
        count[k]++;
    }

}



int main(){
    int j;
    scanf("%d",&i);
    for(j=0;j<i;j++)
    {
        num[j]=j+1;
        count[j]=1;
    }
    permutation(num,count,ans,source,k);
    }



