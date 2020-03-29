#include<stdio.h>
int main() {
    int i,j,k,level;
    scanf("%d",&level);
    for(i=0;i<level*2-1;i++) {
        for(j=0;j<level*2-1;j++) {
            if(j==level-1 || i == level-1) {
              if(i == j) {
                printf("%d",level);
              } else {
                if(i!=level-1) {
                  if(i+1<=level) {
                    printf("%d",i+1);
                  } else {
                    printf("%d",level*2-i-1);
                  }
                } else if(i==level-1) {
                  if(j+1<=level) {
                    printf("%d",j+1);
                  } else {
                    printf("%d",level*2-j-1);
                  }
                }
              }
            } else {
              printf("*");
            }
        }
        printf("\n");
    }
    printf("\n");
}