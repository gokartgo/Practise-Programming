#include <stdio.h>
int main() {
    int i,j,k,question;
    char answer[100][100];
    scanf("%d",&question);
    for(i=0;i<question;i++) {
        scanf(" %[^\n]",answer[i]); // https://stackoverflow.com/questions/43032984/using-scanfd-with-a-space-after-the-d
    }
    for(i=0;i<question;i++) {
        for(j=0;j<100;j++) {
            if(answer[i][j] == '\0') {
                answer[i][j] = '!';
                printf("Case #%d: ",i+1);
                for(k=0;k<j+1;k++) {
                    if(answer[i][k] >= 97 && answer[i][k] <= 122) {
                        printf("%c",answer[i][k]-32);
                    } else if(answer[i][k] >= 65 && answer[i][k] <= 90) {
                        printf("%c",answer[i][k]);
                    } else if(answer[i][k] == '!'){
                        printf("!");
                    } else {
                        printf(" ");
                    }
                }
                printf("\n");
                break;
            }
        }
    }
    
}