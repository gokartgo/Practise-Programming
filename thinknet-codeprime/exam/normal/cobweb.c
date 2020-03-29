#include<stdio.h>
int main() {
  int i,j,k,level;
  scanf("%d",&level);
  for(i=0;i<level*2+1;i++) {
    for(j=0;j<level*4+1;j++) {
      if(j%2==0) {
        if(i*2==j || (level*4)-i*2 == j || j == level*2 || i == level) {
          printf("*");
        } else {
          printf(".");
        }
      } else {
        printf(" ");
      }
    }
    printf("\n");
  }
}