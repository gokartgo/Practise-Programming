#include<stdio.h>
int main(){
 int *i,ii[1000],j,k,l=0,m=0,n,o,p[2000],q=0;
    i=ii;
    scanf("%d",&j);
    scanf("%d",&o);

	for(k=2;k<=j;k++)
        {
            if(k%2==0)
            {
            *i=k;
            i++;
            m++;
            }
    	}

	for(n=3;n<=j;n+=2)
        {
		for(k=n;k<=j;k+=2)
			{
			if(k%n==0)
				{
				p[q]=k;
				q++;
				*i=k;
				i++;
				for(l=0;l<q-1;l++)
				{
				if(k==p[l])
                    {
                    i--;
                    break;
                    }
                }
                }
            }
            m++;
        }
	i=i-m;
	printf("%d\n",*(i+o-1));

    /*
    i=i-j+1;
    printf("%lu ",*(i+o-1));
    */


}



