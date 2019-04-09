#include<stdio.h>
int main(){
int a[10000],b[10000],i,j,k,l=0,count[10000],max=-1,temp;
scanf("%d",&i);
for(j=0;j<i;j++)
{
    scanf("%d",&a[j]);
}

for(k=0;k<i;k++)
{
    for(j=k+1;j<i;j++)
    {
        if(a[k]==a[j]&&a[k]!=-1)
        {
        count[k]++;
        a[j]=-1;
        }
    }
}
for(k=0;k<i;k++)
{
    if(max<count[k])
        max=count[k];
}
for(k=0;k<i;k++)
{
    if(count[k]==max)
    b[l++]=a[k];
}
for(k=1;k<l;k++)
{
    for(j=0;j<l-k;j++)
    {
        if(b[j]>b[j+1])
        {
        temp=b[j];
        b[j]=b[j+1];
        b[j+1]=temp;
        }
    }
}
for(j=0;j<l;j++)
    printf("%d ",b[j]);
}
