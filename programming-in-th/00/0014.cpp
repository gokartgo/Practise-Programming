#include<stdio.h>

int main(){
    
int a,b,c,d,e=1;
    
scanf("%d",&a);
    
scanf("%d",&b);
    
if(a<=b)
    
{
        
c=a;
        
d=b;
    
}
    
else if(b<=a)
    
{
        
c=b;
        
d=a;
    
}
    
while(e!=0)
    
{
        
e=d%c;
        
if(e!=0)
        
{
            
d=c;
            
c=e;
        
}
    
}
    
printf("%d",c);

}