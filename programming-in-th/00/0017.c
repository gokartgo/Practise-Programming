#include<stdio.h>
int main(){
int a[4],*aa,b,c,val,submin;
    aa=a;
    for(b=0;b<=3;b++)
    {
        scanf("%d",aa++);
    }
    aa-=b;
   for(b=1;b<=3;b++)
   {
       for(c=0;c<=(3-b);c++)
       {
           if(*aa>*(aa+1))
           {
               val=*(aa+1);
               *(aa+1)=*aa;
               *aa=val;
           }
           aa++;
       }
       aa-=c;
   }
    printf("%d",*a**(a+2));
}
