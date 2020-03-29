#include<stdio.h>
int main() {
    int i,j,k,input[100][6],answer[6],check=1;
    for(i=0;i<100;i++) {
        for(j=0;j<6;j++) {
            scanf(" %d",&input[i][j]);
        }
    }
    printf("------------------------------\n");
    for(i=0;i<100;i++) {
        check = 1;
        for(j=0;j<4;j++) {
            for(k=0;k<6;k++) {
                if(j == 0){
                    if(k%2 == 0) {
                        if(input[i][k] > input[i][k+1]) {
                            answer[k] = input[i][k+1];
                            answer[k+1] = input[i][k];
                        } else {
                            answer[k] = input[i][k];
                            answer[k+1] = input[i][k+1];
                        }
                    }
                    if(k==5) {
                        input[i][0] = answer[0];
                        input[i][1] = answer[2];
                        input[i][2] = answer[1];
                        input[i][3] = answer[4];
                        input[i][4] = answer[3];
                        input[i][5] = answer[5];
                    }
                }
                if(j == 1 ){
                    if(k%2 == 0) {
                        if(input[i][k] > input[i][k+1]) {
                            answer[k] = input[i][k+1];
                            answer[k+1] = input[i][k];
                        } else {
                            answer[k] = input[i][k];
                            answer[k+1] = input[i][k+1];
                        }
                    }
                    input[i][k] = answer[k];
                }
                if(j == 2){
                    if(k==1 || k==3) {
                        if(input[i][k] > input[i][k+1]) {
                            answer[k] = input[i][k+1];
                            answer[k+1] = input[i][k];
                        }
                    }
                    input[i][k] = answer[k];
                }
                if(j == 3){
                    if(k==2) {
                        if(input[i][k] > input[i][k+1]) {
                            answer[k] = input[i][k+1];
                            answer[k+1] = input[i][k];
                        }
                    }
                    input[i][k] = answer[k];
                }
            }
        }
        for(k=0;k<5;k++) {
            if(answer[k] > answer[k+1]) {
                check = 0;
                break;
            }
        }
        if(check == 1) {
            printf("Case #%d: Sorted!",i+1);
        } else {
            printf("Case #%d: %d %d %d %d %d %d",i+1,answer[0],answer[1],answer[2],answer[3],answer[4],answer[5]);
        }
        printf("\n");
    }
}