#include<stdio.h>
void a(int a){
    return b(7);
}
void b(int c){
    printf("%d",a+c);
}
int main(){
    a(5);
}
