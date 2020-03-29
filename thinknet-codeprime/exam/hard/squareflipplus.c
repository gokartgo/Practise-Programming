#include<stdio.h>
int main() {
  int i,j,k,level;
  scanf("%d",&level);
  for(i=0;i<level*4+1;i++) {
    for(j=0;j<level*4+1;j++) {
      if(i%2==0 && j%2==0){
        if(i==level*2 || j == level*2) {
          printf("+");
        } else {
          if(i+j < level*2 || j > level*2 + i || (i > level*2 &&  (j <= i - (level * 2 + 1) || j >=  (level * 6 + 2 - i))) ){
            printf(" ");
          } else {
            printf("*");
          }
        }
      } else {
        printf(" ");
      }
    }
    printf("\n");
  }
}