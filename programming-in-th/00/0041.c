#include<stdio.h>
#include<math.h>
int main(){
    int circle;
    float square;
    scanf("%d",&circle);
    if(circle==3){
        printf("%f",2+sqrt(3.0));
    }
    else if(circle==1){
        printf("%f",2.0);
    }
    else if(circle%2==0)
    {
        printf("%f",circle*1.0);
    }
    else{
        printf("%f",circle+0.464102);
    }
}
