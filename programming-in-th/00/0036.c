#include<stdio.h>
int main(){
unsigned long long i,j,k=1,l=1,m=1;
scanf("%llu",&i);
if(i%2==1)
    i++;
for(j=i;j>(i/2);j--)
{
    k=k*j;
}
i=i/2;
for(j=i;j>1;j--)
{
    l=l*j;
}
printf("%llu",k/l);
}
