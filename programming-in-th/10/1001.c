#include<stdio.h>

int rowMap,columMap,i,j,k,rock[30],barrier[30];
char Map[30][30],answer[30][30];

int main(){
    scanf(" %d",&rowMap);
    scanf(" %d",&columMap);
    for(i=0;i<rowMap;i++)
    {
        for(j=0;j<columMap;j++)
        {
            scanf(" %c",&Map[i][j]);
        }
    }

    for(j=0;j<columMap;j++)
    {
        scanf("%d",&rock[j]);
    }

    for(j=0;j<columMap;j++)
    {
        for(i=0;i<rowMap;i++)
        {
            if(Map[i][j]=='O')
            {
                barrier[j]=i;
                break;
            }
            else
            {
                barrier[j]=i;
            }
        }
    }

    for(j=0;j<columMap;j++)
    {
        for(i=barrier[j];i>=0;i--)
        {
            if(barrier[j]==rowMap-1&&Map[i][j]!='O'&&rock[j]>0)
            {
                Map[i][j]='#';
                rock[j]--;
            }
            else if(rock[j]>0&&i-1>=0)
            {
                Map[i-1][j]='#';
                rock[j]--;
            }
        }
    }

    for(i=0;i<rowMap;i++)
    {
        for(j=0;j<columMap;j++)
        {
            printf("%c",Map[i][j]);
        }
        printf("\n");
    }
}
