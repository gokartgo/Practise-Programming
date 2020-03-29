#include<stdio.h>
int main() {
  int i,j,k,level;
  scanf("%d",&level);
  for(i=0;i<level*2-1;i++) {
    for(j=0;j<level*2;j++) {
      if(( j>i&&j< level*2-1-i&&i<level) || (j>=level*2-1-i&& j<=i &&i>=level)) {
        printf(" ");
      } else {
        printf("*");
      }
    }
    printf("\n");
  }
}