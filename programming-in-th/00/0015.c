#include<stdio.h>
int main(){
int a=0,b=0,c=0;
scanf("%d%d%d",&a,&b,&c);
if(b-a>=c-b) printf("%d",b-a-1);
else printf("%d",c-b-1);
}
