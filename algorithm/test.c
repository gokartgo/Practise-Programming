#include<stdio.h>
int main() {
    int *a = 0,**c;
    int b = 5;
    a = &b;
    c = &a;
    printf("%p %p %p",&b,a,*c);
}