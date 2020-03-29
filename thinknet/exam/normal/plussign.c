#include<stdio.h>
int main() {
    int i,j,k,level;
    scanf("%d",&level);
    for(i=0;i<level*2+1;i++) {
        for(j=0;j<level*2+1;j++) {
            if(j==level || i == level) {
              if(i == j) {
                printf("%d",level);
              } else {
                printf("*");
              }
            } else {
              printf(" ");
            }
        }
        printf("\n");
    }
    printf("\n");
}