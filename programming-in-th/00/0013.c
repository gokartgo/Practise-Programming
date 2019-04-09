#include<stdio.h>
int main(){
int a[10],i,j=0,k=0,l,m;
for(i=0;i<9;i++)
{
    scanf("%d",&a[i]);
}
for(i=0;i<9;i++)
{
    j+=a[i];
}
j=j-100;
for(l=0;l<9;l++)
{
    for(k=l+1;k<9;k++)
    {
     if(a[l]+a[k]==j)
            break;
    }
    if(a[l]+a[k]==j)
            break;

}
for(i=0;i<9;i++)
    if(a[i]==a[l]||a[i]==a[k])
    continue;
    else
        printf("%d\n",a[i]);
}
