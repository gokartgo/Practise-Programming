#include<stdio.h>
int main(){
int i,j,a[100][100],k,l,m,n,o,sum;
scanf("%d %d",&i,&j);
scanf("%d %d",&l,&m);
scanf("%d",&k);
for(n=0;n<i;n++)
{
    for(o=0;o<j;o++)
    {
        scanf("%d",&a[n][o]);
    }
}
sum=l*m*k;
for(n=0;n<i;n++)
{
    for(o=0;o<j;o++)
    {
        sum=sum+a[n][o];
    }
}
if(sum%k!=0)
    sum=(sum/k)+1;
else
    sum=sum/k;
printf("%d",sum);
}
