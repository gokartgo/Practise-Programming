#include<stdio.h>
int main() {
    int i,j,k,level;
    scanf("%d",&level);
    for(i=0;i<level;i++) {
        for(j=0;j<=i;j++) {
            printf("*");
        }
        printf(" ");
    }
    printf("\n");
}