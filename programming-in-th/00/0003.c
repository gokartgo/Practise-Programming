#include<stdio.h>
int main(){
int m=0,n=0,o=0,p=0,a[100][100],b[100][100],c[100][100];
scanf("%d%d",&m,&n);
for(o=0;o<m;o++)
{
    for(p=0;p<n;p++)
    {
        scanf("%d",&a[o][p]);
    }
}
for(o=0;o<m;o++)
{
    for(p=0;p<n;p++)
    {
        scanf("%d",&b[o][p]);
    }
}
for(o=0;o<m;o++)
{
    for(p=0;p<n;p++)
    {
        c[o][p]=a[o][p]+b[o][p];
    }
}
for(o=0;o<m;o++)
{
    for(p=0;p<n;p++)
    {
        printf("%d ",c[o][p]);
    }
    printf("\n");
}
}
