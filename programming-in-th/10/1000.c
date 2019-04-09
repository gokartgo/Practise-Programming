#include<stdio.h>
#include<stdlib.h>

int main(){
int i,j,k,l,m=0,n=1;
char aa[1000000],bb[1000000],cc[2000];
scanf("%d",&i);
scanf("%d",&j);

for(k=0;k<j;k++)
{
m=0;
scanf("%s",aa);
if(j<=1)
    {
    printf("%s\n",aa);
    return 0;
    }

    for(l=0;l<i;l++)
    {
        if(aa[l]!=bb[l]&&k>=1)
            m++;
    }
if(m>2&&n==1)
    {
    for(l=0;l<i;l++)
        {
         cc[l]=bb[l];
        }
        n=0;
        printf("%s\n",cc);
        return 0;
    }

    for(l=0;l<i;l++)
        bb[l]=aa[l];

}
if(n==1)
    printf("%s",aa);
}
