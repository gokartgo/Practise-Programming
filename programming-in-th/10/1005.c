#include<stdio.h>
int main(){
    int sequence[3000],number,i,j,k,count=0,ans[3000],sum=0,ans_count;
    int max=0;
    scanf("%d",&number);
    for(i=0;i<number;i++){
        scanf("%d",&sequence[i]);
    }
    for(i=0;i<number;i++){
            sum=0;
        for(j=i;j<number;j++){
            sum=sum+sequence[j];
            if(sum>max){
                max=sum;
                count=0;
                for(k=i;k<=j;k++){
                    ans[count++]=sequence[k];
                }
            }
        }
    }
    if(max<=0){
        printf("Empty sequence");
    }
    else{
        for(i=0;i<count;i++){
            printf("%d ",ans[i]);
        }
        printf("\n%d",max);
    }

}
