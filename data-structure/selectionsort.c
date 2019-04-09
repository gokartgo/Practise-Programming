#include<stdio.h>
#include<string.h>
#define MAX 5
struct Person{
int code;
char name[30];
};
struct Person person[MAX];

int main(){
int box[MAX],min,i,j,k;

    for(i=0;i<MAX;i++){
        scanf("%d",&person[i].code);
        scanf("%[^\n]",person[i].name);
    }

    for(i=0;i<MAX;i++)
    {
        min=person[i].code;
        for(j=i+1;j<MAX;j++)
        {
            if(person[i].code>person[j].code&&min>person[j].code)
            {
                struct Person temp;
                min=person[i].code;
                temp=person[j];
                person[j]=person[i];
                person[i]=temp;
            }
        }
    }
    for(i=0;i<MAX;i++)
    {
        printf("%d %s\n",person[i].code,person[i].name);
    }
}
