#include<stdio.h>
int main() {
  int i,j,k,level;
  scanf("%d",&level);
  for(i=0;i<level;i++) {
    for(j=0;j<level*2;j++) {
      if(j%2==0) {
        if(i*2==j) {
          printf("=");
        } else if(j > i*2) {
          printf("+");
        } else if(j < i*2) {
          printf("*");
        }
      } else {
        printf(" ");
      }
    }
    printf("\n");
  }
}