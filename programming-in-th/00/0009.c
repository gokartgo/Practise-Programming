#include<stdio.h>
int main()
{
int b[3],i,max=0,min=0,med=0;
char a[20];
for(i=0;i<3;i++)
{
    scanf("%d",&b[i]);
}
max=b[0];
min=b[0];
med=b[0];
for(i=0;i<3;i++)
{
    if(max<=b[i])
        max=b[i];
    else if(min>=b[i])
        min=b[i];
}
for(i=0;i<3;i++)
{
     if(b[i]>min&&b[i]<max)
        med=b[i];
}
for(i=0;i<4;i++)
    scanf("%c",&a[i]);
for(i=0;i<4;i++)
if(a[i]=='A')
    printf(" %d",min);
else if(a[i]=='B')
    printf(" %d",med);
else if(a[i]=='C')
    printf(" %d",max);

}
