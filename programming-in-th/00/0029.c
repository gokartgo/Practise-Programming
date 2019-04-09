#include<stdio.h>
int main(){
int a,b,c;
scanf("%d %d",&a,&b);
c=b/a;
if(b%a!=0)
    c+=1;
    if(a>b)
        c=2;
printf("%d",c);
}
