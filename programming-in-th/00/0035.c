#include<stdio.h>
int a[100],b,x[100],y[100],i,j,k,ans[100],count[100],step=0,number[100],sum1=0,sum2=0,sum3;
float max;

void permutation(int number[],int count[],int ans[],int step,int i,int k,int x[],int y[]){
    if(step==3)
    {
            sum1=x[ans[0]]*y[ans[1]]+x[ans[1]]*y[ans[2]]+x[ans[2]]*y[ans[0]];
            sum2=y[ans[0]]*x[ans[1]]+y[ans[1]]*x[ans[2]]+y[ans[2]]*x[ans[0]];
            sum3=sum1-sum2;
            if(sum3<0)
                sum3=sum3*-1;
            if(max<sum3)
                max=sum3;
        return;
    }
    for(k=0;k<i;k++)
    {
        if(count[k]==0)
            continue;
        ans[step]=number[k];
        count[k]--;
        permutation(number,count,ans,step+1,i,k,x,y);
        count[k]++;
    }
}

int main(){
scanf("%d",&i);
for(b=0;b<i;b++)
{
    count[b]=1;
    number[b]=b;
    scanf("%d %d",&x[b],&y[b]);
}
permutation(number,count,ans,step,i,k,x,y);
printf("%.3f",max/2.0);
}
