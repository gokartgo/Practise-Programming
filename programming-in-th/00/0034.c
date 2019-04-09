#include<stdio.h>
int main(){
int a,b,c,d,e,i,j,k,l;
scanf("%d %d %d",&c,&d,&e);
for(i=1;i<=100;i++)
{
    for(j=1;j<=100;j++)
    {
        if(i*j==c)
        {
         a=i;
         b=j;
            for(k=-100;k<=100;k++)
            {
                for(l=-100;l<=100;l++)
                {
                    if(k*l==e)
                    {
                        if((b*k)+(a*l)==d)
                        {
                            printf("%d %d %d %d",a,k,b,l);
                            return 0;
                        }
                    }
                }
            }
        }
    }
}
printf("No Solution");
}
