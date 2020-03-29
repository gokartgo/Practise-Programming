#include<stdio.h>
int main() {
  int i,j,k,level;
  scanf("%d",&level);
  for(i=0;i<level;i++) {
    for(j=0;j<level*2-1;j++) {
      if(j%2==0) {
        if(level*2-(i*2+2) == j) {
          printf("B");
        } else if(j < level*2-(i*2+2)){
          if( ((level*2-j) % 4 == 2 && i%2==0) || ((level*2-j) % 4 == 0 && i%2==1) ) {
            printf("-");
          } else {
            printf("R");
          }
        } else if(j > level*2-(i*2+2)) {
          if( ((level*2-j) % 4 == 2 && i%2==0) || ((level*2-j) % 4 == 0 && i%2==1) ) {
            printf("-");
          } else {
            printf("G");
          }
        }
      } else {
        printf(" ");
      }
    }
    printf("\n");
  }
}