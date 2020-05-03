#include<stdio.h>

void test(int** d) {
  printf("%p\n",d);
  printf("a%d\n",**d);
}

int main() {
    int *a,**c, *d;
    int b = 5;
    a = &b;
    printf("%p\n",&a);
    *a = 6;
    printf("%d\n",*a);
    test(&a);
    printf("%p\n",&a);
    printf("%d",*a);
    // int *a = 0,**c;
    // int b = 5;
    // a = &b;
    // c = &a;
    // printf("%p %p %p",&b,a,*c);
}