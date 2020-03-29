#include<stdio.h>
int main() {
    int level,i,j,k,check=0;
    scanf("%d",&level);
    for(i=0;i<level;i++) {
        check = 0;
        for(j=0;j<level * 2 - 1;j++) {
            if(j >= level-i-1 && j <= level+i-1) {
                if(check%2==1) {
                    printf(" ");
                } else {
                    printf("*");
                }
                check++;
            } else {
                printf(" ");
            }
        }
        printf("\n");
    }
    printf("\n");
}