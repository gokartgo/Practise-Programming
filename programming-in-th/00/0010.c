#include<stdio.h>
int main(){
char a[100];
int c=1,i,j;
for(i=0;i<51;i++)
{
    scanf("%c",&a[i]);
    if(a[i]=='\n')
        break;
}
for(j=0;j<i;j++)
{
    if(a[j]=='A'&&c==1)
        c+=1;
    else if(a[j]=='A'&&c==2)
        c-=1;
    else if(a[j]=='A'&&c==3)
        c+=0;
    else if(a[j]=='B'&&c==1)
        c+=0;
    else if(a[j]=='B'&&c==2)
        c+=1;
    else if(a[j]=='B'&&c==3)
        c-=1;
    else if(a[j]=='C'&&c==1)
        c+=2;
    else if(a[j]=='C'&&c==2)
        c+=0;
    else if(a[j]=='C'&&c==3)
        c-=2;
}
printf("%d",c);
}
