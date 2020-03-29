#include<stdio.h>
int main() {
    int number,i,j;
    float a,b,answer[100];
    scanf("%d",&number);
    for(i = 0;i<number;i++) {
        scanf("%f %f",&a,&b);
        answer[i] = a/b;
    }
    for(i = 0;i<number;i++) {
        printf("Case #%d: %.8f\n",i+1,answer[i]);
    }
}