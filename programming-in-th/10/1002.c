#include<stdio.h>
int main(){
    int number,n[500],value;
    int i=0,v=0,x=0,l=0,c=0,j,k;
    char ans[50];
    scanf("%d",&value);
    for(j=0;j<value;j++)
    {
        n[j]=j+1;
    }
    for(j=0;j<value;j++){
            number=n[j];
        while(number!=0){
            if(number-4==0){
                //printf("iv");
                number=number-4;
                i++;
                v++;
            }
            else if(number-9==0){
                //printf("ix");
                number=number-9;
                i++;
                x++;
            }
            else if(number-40<10&&number-40>=0){
                //printf("xl");
                number=number-40;
                x++;
                l++;
            }
            else if(number-90<10&&number-90>=0){
                //printf("xc");
                number=number-90;
                x++;
                c++;
            }
            else if(number-100>=0)
            {
                //printf("c");
                number=number-100;
                c++;
            }
            else if(number-50>=0)
            {
                //printf("l");
                number=number-50;
                l++;
            }
            else if(number-10>=0)
            {
                //printf("x");
                number=number-10;
                x++;
            }
            else if(number-5>=0)
            {
                //printf("v");
                number=number-5;
                v++;
            }
            else if(number-1>=0)
            {
                //printf("i");
                number=number-1;
                i++;
            }
        }
    }
    printf("%d %d %d %d %d",i,v,x,l,c);
}
