#include<stdio.h>
int main(){
char aa[100],*a;
int i,j;
a=aa;
for(i=0;i<100;i++)
{
    scanf("%c",a);
    if(*a=='\n')
        break;
    a++;
}
a=a-i;
for(j=0;j<i;j++)
{
    if(*a=='a'||*a=='e'||*a=='i'||*a=='o'||*a=='u')
    {
        printf("%c",*a);
        a++;
    if(*a=='p')
    {
        a++;
        j++;
    }
    if(*a=='a')
      {
        a++;
        j++;
      }
    else if(*a=='e')
       {
        a++;
        j++;
       }
    else if(*a=='i')
        {
        a++;
        j++;
        }
    else if(*a=='o')
        {
        a++;
        j++;
        }
    else if(*a=='u')
     {
        a++;
        j++;
     }
    continue;
    }

     printf("%c",*a);
    a++;
    }
}

