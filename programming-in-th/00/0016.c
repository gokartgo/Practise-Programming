#include<stdio.h>
int main(){
char adrian[200],bruno[200],goran[200],choice[200],*cho;
int i,j,k,a=0,b=0,c=0;
    cho=choice;
    scanf("%d",&k);
    for(i=0;i<=k;i++)
        scanf("%c",cho++);
    cho=cho-k;
    for(i=0;i<k;i++)
    {
        if(i%3==0)
            adrian[i]='A';
        else if(i%3==1)
            adrian[i]='B';
        else if(i%3==2)
            adrian[i]='C';
    }


    for(i=0;i<k;i++)
    {
        if(i%4==0)
            bruno[i]='B';
        else if(i%4==1)
            bruno[i]='A';
        else if(i%4==2)
            bruno[i]='B';
        else if(i%4==3)
            bruno[i]='C';
    }

    for(i=0;i<k;i++)
    {
        if(i%6==0)
            goran[i]='C';
        else if(i%6==1)
            goran[i]='C';
        else if(i%6==2)
            goran[i]='A';
        else if(i%6==3)
            goran[i]='A';
        else if(i%6==4)
            goran[i]='B';
        else if(i%6==5)
            goran[i]='B';
    }
    for(i=0;i<k;i++)
    {
        if(adrian[i]==*cho)
                a++;
        if(bruno[i]==*cho)
            b++;
        if(goran[i]==*cho)
            c++;
            cho++;

    }

    if(a>b&&a>c)
        printf("%d\nAdrian",a);
    else if(b>a&&b>c)
        printf("%d\nBruno",b);
    else if(c>a&&c>b)
        printf("%d\nGoran",c);
    else if(a==b&&a>c)
        printf("%d\nAdrian\nBruno",a);
    else if(a==c&&a>b)
        printf("%d\nAdrian\nGoran",a);
    else if(b==c&&b>a)
        printf("%d\nBruno\nGoran",b);
    else if(a==b&&a==c)
        printf("%d\nAdrian\nBruno\nGoran",a);

        return 0;

}
