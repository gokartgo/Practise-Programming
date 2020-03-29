#include<stdio.h>
int main() {
    int i,j,k,level;
    scanf("%d",&level);
    for(i=0;i<level;i++) {
        for(j=0;j<level;j++) {
            if(j==i || j==level-i-1) {
                printf("*");
            } else {
                printf(" ");
            }
        }
        printf("\n");
    }
    printf("\n");
}