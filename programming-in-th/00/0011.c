#include<stdio.h>
int main(){
    int a[100],b[100],i,j,k=0,l=0;
    for(i=0;i<10;i++)
    {
        scanf("%d",&a[i]);
    }
    for(i=0;i<10;i++)
    {
        b[i]=a[i]%42;
    }
    for(i=0;i<10;i++)
    {
    k++;
        for(j=i+1;j<10;j++)
        {
            if(b[i]==b[j])
            {
            l++;
            break;
            }
        }
    }
    printf("%d",k-l);
}
