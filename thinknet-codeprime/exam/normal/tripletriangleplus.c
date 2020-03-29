#include<stdio.h>
int main() {
    int i,j,k,level,check=0,check1=0;
    scanf("%d",&level);
    for(i=0;i<level*2;i++) {
        check = 0;
        for(j=0;j<level*4-1;j++) {
            if(i < level) {
                if(j>=level*2 - i - 1 && j<=level*2 + i - 1) {
                    if(check%2==0) {
                        if(j==level*2 - i - 1 || j==level*2 + i - 1 || i==level-1) {
                            printf("+");
                        } else {
                            printf("*");
                        }
                    } else {
                        printf(" ");
                    }
                    check++;
                } else {
                    printf(" ");
                }
            } else {
                if((j>=level*2 - i - 1 && j<=i-1) || (j>=level * 4 - i - 1 && j<=level*2 + i - 1)) {
                    if((j < level * 2 && check%2==0) || (j >= level * 2 && check%2==1)) {
                        if((j==level*2 - i - 1 || j==i-1) || (j==level * 4 - i - 1 || j==level*2 + i - 1) || i == level*2-1) {
                            printf("+");
                        } else {
                            printf("*");
                        }
                    } else {
                        printf(" ");
                    }
                    check++;
                } else {
                    printf(" ");
                }                
            }
        }
        printf("\n");
    }
    printf("\n");
}