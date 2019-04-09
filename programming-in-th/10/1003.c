#include<stdio.h>
int main(){
    int number,i=0,j=0,k=0,l=20,nutget[500],input=6,check,count=0;
    scanf("%d",&number);
    if(number<6)
    {
        printf("no");
        return 0;
    }
    while(input<=number)
    {
        if(input%3==0)
        {
            nutget[i++]=input;
        }
        if(input%20==0&&nutget[i-1]!=input)
        {
            nutget[i++]=input;
        }
        check=input/20;

        if( (input/20>0) && nutget[i-1]!=input)
        {
            for(j=1;j<=check;j++)
            {
                if( ( ((input-(20*j))%3==0) || (input-(20*j))%20==0 )&& input >= 26  && input!=43)
                {
                    for(k=0;k<i;k++)
                    {
                        if(nutget[k]==input)
                        {
                            count++;
                            break;
                        }
                    }
                    if(count==0)
                    {
                        nutget[i++]=input;
                    }
                }
                count=0;
            }
        }
        input++;
    }


    for(j=0;j<i;j++)
    {
        if(number==nutget[j])
        {
            k++;
            break;
        }
    }

    /*if(k==0)
    {
        printf("no");
    }
    else
    {*/
        for(j=0;j<i;j++)
        {
            printf("%d\n",nutget[j]);
            if(nutget[j]==number){
                return 0;
            }
        }
    //}
}
