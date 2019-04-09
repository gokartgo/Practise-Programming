#include<stdio.h>
int main(){
char a[10000][50],min[50];
int i,j,k,l,m=0;
scanf("%d",&j);
for(i=0;i<j;i++)
{
    scanf("%s",a[i]);
}
for(i=0;i<j;i++)
{
    for(k=0;k<j-i-1;k++)
    {
        if(a[k][0]>a[k+1][0])
        {
            for(l=0;l<50;l++)
            {
                min[l]=a[k][l];
            }
            for(l=0;l<50;l++)
            {
                a[k][l]=a[k+1][l];
            }

            for(l=0;l<50;l++)
            {
                a[k+1][l]=min[l];
            }
        }
        else if(a[k][0]==a[k+1][0])
        {
            for(l=0;l<50;l++)
            {
                if(a[k][l]==a[k+1][l])
                    continue;
                if(a[k][l]>a[k+1][l])
                {
                    for(l=0;l<50;l++)
                    {
                    min[l]=a[k][l];
                    }
                    for(l=0;l<50;l++)
                    {
                    a[k][l]=a[k+1][l];
                    }

                    for(l=0;l<50;l++)
                    {
                    a[k+1][l]=min[l];
                    }
                    break;
                }
                else if(a[k][l]<a[k+1][l])
                    break;
            }
        }
    }
}
for(k=0;k<j;k++)
{
    m=0;
    for(l=0;l<50;l++)
    {
        if(a[k][l]==a[k+1][l])
        {
            m++;
        }
    }
    if(m==l)
    continue;
    printf("%s\n",a[k]);
}
}
