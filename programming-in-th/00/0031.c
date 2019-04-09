#include<stdio.h>
int main(){
    unsigned long long a,b,c,i=0,j,k;
    scanf("%llu %llu %llu",&a,&b,&c);
    while(a!=1||b!=1||c!=1)
    {
        if(a!=1)
        {
    a=a/2;
    i++;
        }
        else if(b!=1)
        {
    b=b/2;
    i++;
    }
    else if(c!=1)
    {
        c=c/2;
        i++;
    }
    }
    printf("%d",i);
}
