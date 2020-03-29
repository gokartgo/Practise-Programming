#include<stdio.h>
#define COLUMN 100
#define ROLL 100
#define TYPE 200

int main() {
    int card[TYPE][ROLL][COLUMN];
    int type,column[TYPE],roll[TYPE],i,j,k,l,columnAns,rollAns;
    int answer=0,answer1=0,sum=0,sum1=0;
    scanf("%d",&type);
    for(i=0;i<type;i++) {
        scanf("%d %d",&roll[i],&column[i]);
        for(j=0;j<roll[i];j++) {
            for(k=0;k<column[i];k++) {
                // %1d reads a single digit
                scanf("%1d",&card[i][j][k]);        
            }
        }
    }
    for(i=0;i<type;i++) {
        answer = 0;
        for(j=0;j<roll[i];j++) {
            sum = 0;
            for(k=0;k<column[i];k++) {
                sum += card[i][j][k];
            }
            if(sum % 2 == 1) {
                answer++;
                rollAns = j;
                if(answer == 2) {
                    break;
                }
                for(k=0;k<column[i];k++) {
                    sum1 =0;
                    for(l=0;l<roll[i];l++) {
                        sum1 += card[i][l][k];
                    }
                    if(sum1 % 2 == 1) {
                        columnAns = k;
                        break;
                    }
                }
            }
        }
        if(answer != 2) {
            answer1 = 0;
            for(k=0;k<column[i];k++) {
            sum1 =0;
            for(l=0;l<roll[i];l++) {
                sum1 += card[i][l][k];
            }
            if(sum1 % 2 == 1) {
                answer1++;
                columnAns = k;
                 if(answer1 == 2) {
                    break;
                }
            }
        }
        }
       if(answer == 2 || answer1 == 2) {
            printf("Case #%d: Two Flips",i+1);
        }
        else if(answer == 0) {
            printf("Case #%d: No Flip",i+1);
        } else {
            printf("Case #%d: %d %d",i+1,rollAns,columnAns);
        }
        printf("\n");
    }
}
