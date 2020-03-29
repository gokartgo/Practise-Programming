#include<stdio.h>
int input[100][4],answer[4];

void switchValue(int i,int k) {
    if(input[i][k] > input[i][k+1]) {
        answer[k] = input[i][k+1];
        answer[k+1] = input[i][k];
    } else {
        answer[k] = input[i][k];
        answer[k+1] = input[i][k+1];
    }
}


int main() {
    int i,j,k,check=1;
    for(i=0;i<100;i++) {
        for(j=0;j<4;j++) {
            scanf(" %d",&input[i][j]);
        }
    }
    printf("------------------------------\n");
    for(i=0;i<100;i++) {
        check = 1;
        answer[0] = input[i][0];
        answer[1] = input[i][1];
        answer[2] = input[i][2];
        answer[3] = input[i][3];
        for(j=0;j<5;j++) {
            for(k=0;k<4;k++) {
                if(j == 0){
                    if(k == 2) {
                        switchValue(i,k);
                    }
                    if(k == 3) {
                        input[i][0] = answer[2];
                        input[i][1] = answer[0];
                        input[i][2] = answer[1];
                        input[i][3] = answer[3];
                        answer[0] = input[i][0];
                        answer[1] = input[i][1];
                        answer[2] = input[i][2];
                        answer[3] = input[i][3];
                    }
                }
                if(j == 1 ){
                    if(k == 2) {
                        switchValue(i,k);
                    }
                    if(k == 3) {
                        input[i][1] = answer[2];
                        input[i][2] = answer[1];
                        input[i][3] = answer[3];
                        answer[1] = input[i][1];
                        answer[2] = input[i][2];
                        answer[3] = input[i][3];
                    }
                }
                if(j == 2){
                    if(k == 2) {
                        switchValue(i,k);
                    }
                    input[i][k] = answer[k];
                }
                if(j == 3){
                    if(k==1) {
                        switchValue(i,k);
                    }
                    input[i][k] = answer[k];
                }
                if(j == 4){
                    if(k==0) {
                        switchValue(i,k);
                    }
                    input[i][k] = answer[k];
                }
            }
        }
        for(k=0;k<3;k++) {
            if(answer[k] > answer[k+1]) {
                check = 0;
                break;
            }
        }
        if(check == 1) {
            printf("Case #%d: Sorted!",i+1);
        } else {
            printf("Case #%d: %d %d %d %d",i+1,answer[0],answer[1],answer[2],answer[3]);
        }
        printf("\n");
    }
}