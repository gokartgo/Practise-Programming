#include<stdio.h>
int main(){
int n=0;
long int a[2000],b=0,c=0,d=0,max=0,min=0;
scanf("%d",&n);
for(b=0;b<n;b++)
{
    scanf("%d",&a[b]);
}
max = a[0];
min = a[0];
for(c=0;c<n;c++)
{
    if(a[c]>=max)
    {
    max=a[c];
    }
    if(a[c]<=min)
    {
    min=a[c];
    }
}
printf("%d\n%d",min,max);
}
