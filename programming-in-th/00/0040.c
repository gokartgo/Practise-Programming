#include<stdio.h>
#include<math.h>
#define MAX 10000
int main(){
char number[10][MAX],answer[11];
int i,j,lastindex[10],amount;
scanf("%d",&amount);
for(i=0;i<amount;i++){
            scanf("%s",number[i]);
}
for(i=0;i<amount;i++){
    for(j=0;j<MAX;j++){
                if(number[i][j]=='\0')
                {
                    lastindex[i]=j-1;
                    break;
                }
        }
    }

for(i=0;i<amount;i++){
        if(strcmp(number[i],"2")==0)
            answer[i]='T';
        else if(number[i][lastindex[i]]=='1')
            answer[i]='T';
        else if(number[i][lastindex[i]]=='3')
            answer[i]='T';
        else if(number[i][lastindex[i]]=='5')
            answer[i]='T';
        else if(number[i][lastindex[i]]=='7')
            answer[i]='T';
        else if(number[i][lastindex[i]]=='9')
            answer[i]='T';
        else
            answer[i]='F';
}

for(i=0;i<amount;i++){
    printf("%c\n",answer[i]);
}

}


