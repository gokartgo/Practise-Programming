#include<stdio.h>
int main() {
  int i,j,k,level;
  scanf("%d",&level);
  for(i=0;i<level*2-1;i++) {
    for(j=0;j<level*2-1;j++) {
      if(j>=i&&j<=level*2-2-i) {
        printf("%d",i+1);
      } else if(j>=level*2-2-i && j<=i) {
        printf("%d",level*2-1-i);
      } else if(j<level){
        printf("%d",j+1);
      } else {
        printf("%d",level*2-2-j+1);
      }
    }
    printf("\n");
  }
}