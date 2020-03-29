#include<stdio.h>
int main() {
  int i,j,k,level;
  scanf("%d",&level);
  for(i=0;i<level*2-1;i++) {
    for(j=0;j<level*2-1;j++) {
        if(i%2==1 && ((j>=i && j<=level*2-2-i) || (j>=level*2-2-i && j<=i))) {
            printf(" ");
        } else if(j%2==1 && i<level && (i>=j || j>=level*2-2-i)) {
            printf(" ");
        } else if(j%2==1 && i>=level && (j <= level*2-2-i || j > i)) {
            printf(" ");
        } else {
            printf("*");
        }
    }
    printf("\n");
  }
}