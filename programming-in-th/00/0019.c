#include<stdio.h>
int i,j=0,l,sour[100],bitter[100],count[100],sequence=0,sumsour[100],sumbitter[100],sum1,sum2,sum12;
unsigned long int min=1000000000;
void perket(int sour[],int bitter[],int count[],int sequence,int j){
    sum1=1;
    sum2=0;
if(sequence==i){
        for(l=0;l<i;l++)
        {
            sum1=sum1*sumsour[l];
            sum2=sum2+sumbitter[l];
            sum12=sum1-sum2;
            if(sum12<0)
                sum12=sum12*-1;
            if(sum12<min)
                min=sum12;
        }
    return;
}
for(j=0;j<i;j++){
    if(count[j]==0){
        continue;
    }
    sumsour[sequence]=sour[j];
    sumbitter[sequence]=bitter[j];
    count[j]--;
    perket(sour,bitter,count,sequence+1,j);
    count[j]++;
}
}
int main(){
    int k;
scanf("%d",&i);
for(k=0;k<i;k++)
{
    count[k]=1;
}
for(k=0;k<i;k++)
{
    scanf("%d%d",&sour[k],&bitter[k]);
}
perket(sour,bitter,count,sequence,j);
printf("%d",min);
}
