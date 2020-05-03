#include<stdio.h>

void test(int** d) {
  printf("%p\n",d);
  printf("a%d\n",**d);
}

void testArray2(int *ar) {
  printf("%d\n",*ar);
}

void testArray(int *ar) {
  printf("%d\n",*(++ar));
  ar = ar+2;
  *ar = 10;
  ar = ar-3;
  testArray2(ar);
}

int main() {
    int *a,**c, *d;
    int b = 5,f[10];
    a = &b;
    f[0] = 4;
    f[1] = 7;
    // printf("%p\n",&a);
    // *a = 6;
    // printf("%d\n",*a);
    // test(&a);
    // printf("%p\n",&a);
    // printf("%d",*a);
    // int *a = 0,**c;
    // int b = 5;
    // a = &b;
    // c = &a;
    // printf("%p %p %p",&b,a,*c);
    testArray(f);
    printf("%d\n",f[3]);
}