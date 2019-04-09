#include<stdio.h>
#include<string.h>
#include<ctype.h>
int main(){
  int count=0,i=0,j=0,k=0;
  char ch[10000]="";
  scanf("%s",ch);
  count=strlen(ch);
  islower(ch[0]);
  isupper(ch[0]);
  for(i=0;i<count;i++)
  {
      j+=islower(ch[i]);
  }
  for(i=0;i<count;i++)
  {
      k+=isupper(ch[i]);
  }

    if(j==0&&k!=0)
    {
        printf("All Capital Letter");
    }
    else if(k==0&&j!=0)
    {
        printf("All Small Letter");
    }
    else
    {
        printf("Mix");
    }
}
