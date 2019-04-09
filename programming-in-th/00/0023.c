#include<stdio.h>
int main(){
int *a,aa[]={31,28,31,30,31,30,31,31,30,31,30,31},i,j,k,l=0;
a=aa;
scanf("%d %d",&i,&j);
for(k=0;k<j-1;k++)
{
    l=l+*a;
    a++;
}
l=l+i;
if(l%7==1)
    printf("Thursday");
else if(l%7==2)
    printf("Friday");
else if(l%7==3)
    printf("Saturday");
else if(l%7==4)
    printf("Sunday");
else if(l%7==5)
    printf("Monday");
else if(l%7==6)
    printf("Tuesday");
else if(l%7==0)
    printf("Wednesday");
}
