#include<stdio.h>
char ch[1000];
int i,j,k;
void a1(){
for(j=1;j<=i;j++)
{
if(j%3==0)
{
    printf("..*.");
 if(j+1>i)
        printf(".");
}
else
{
    printf("..#.");
 if(j+1>i)
        printf(".");
}
}
printf("\n");
}
void a2(){
for(j=1;j<=i;j++)
{
if(j%3==0)
{
    printf(".*.*");
    if(j+1>i)
        printf(".");

}
else
{
    printf(".#.#");
    if(j+1>i)
        printf(".");
}
}
printf("\n");
}

void a3(){
for(j=1;j<=i;j++)
{
if(j%3==0)
    printf("*.%c.*",ch[j-1]);
else
{
    if(j%3!=0&&j!=1)
    {
        printf(".%c.",ch[j-1]);
        if(j%3==1)
            printf("#");
        else if(j+1>i)
            printf("#");
    }
    else
        printf("#.%c.#",ch[j-1]);
}
}
printf("\n");
}


int main()
{
for(i=0;i<20;i++)
{
ch[i]=getchar();
if(ch[i]=='\n')
    break;
    else if(i==15)
        break;
}
a1();
a2();
a3();
a2();
a1();
}
