#include<stdio.h>
#include<stdlib.h>
int main(){
char a[1000000],*aa;
unsigned long int i,j,k,l=0,m,n=0,p,q,r,s=0;
aa=a;
    for(i=0;i<100000000;i++)
    {
    scanf("%c",aa);
    if(*aa=='\n')
        break;
    aa++;
    }
    for(j=i;j>0;j--)
    {
        n++;
        aa--;
            if(*aa=='0')
            k=0;
            else if(*aa=='1')
            k=1;
            else if(*aa=='2')
            k=2;
            else if(*aa=='3')
            k=3;
            else if(*aa=='4')
            k=4;
            else if(*aa=='5')
            k=5;
            else if(*aa=='6')
            k=6;
            else if(*aa=='7')
            k=7;
            else if(*aa=='8')
            k=8;
            else if(*aa=='9')
            k=9;
            if(n%2==1)
            r=k;
            else if(n%2==0)
            {
            p=k*10;
            s=s+(p+r)%11;
            n=0;
            r=0;
            }
        l=l+k%3;
    }
    s=s+r%11;
    printf("%d %d",l%3,s%11);
}
