#include<stdio.h>
int main(){
struct student{
int score[5];
};
struct student stu[5];
int i,j,sum[6],max;

for(i=0;i<5;i++)
{
    for(j=0;j<4;j++)
    {
    scanf("%d",&stu[i].score[j]);
    }
}
for(i=0;i<5;i++)
{
    sum[i]=0;
    for(j=0;j<4;j++)
    {
        sum[i]=sum[i]+stu[i].score[j];
    }
}
max=sum[0];
for(i=0;i<5;i++)
{
    if(max<=sum[i])
    {
    max=sum[i];
    j=i+1;
    }
}
printf("%d %d",j,max);

}
