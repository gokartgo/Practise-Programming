#include<stdio.h>



int main(){
    int input,i,j,k;
    unsigned long long ans=0,sum[500];


    for(input=1;input<=300;input++)
    {
        for(i=1;i<=input;i++)
        {
            for(j=1;j<=input+i;j++)
            {
                for(k=1;k<=input+i+j;k++)
                {
                    ans = ans+((i*j*k)%(i+j+k));
                }
            }
        }
        sum[input]=ans;
        ans=0;
        printf("if(n[i]==%d)\nprintf(\"%%llu\\n\",%llu);\n",input,sum[input]);
    }

}
