#include<stdio.h>
#include<string.h>
#define max 50
int top=0,stackdata[max],length,count=0,weight;
char infix[max],ans[max],check,checksymbol;

void push(char value){
    if(top<max)
    {
        stackdata[top]=value;
        top++;
    }
    else
    {
        printf("stack over flow");
    }
}

char pop(){
    char ans;
    if(top>0)
    {
        top--;
        ans=stackdata[top];
        return ans;
    }
    else
    {
        return -1;
    }
}

int getweight(char symbol){
    switch(symbol)
    {
        case'(':return 1;
        case'+':
        case'-':return 2;
        case'*':
        case'/':return 3;
        case'^':return 4;
        default : return -1;
    }
}

void postfix(){
    length=strlen(infix);
    int i;
    for(i=0;i<length;i++)
    {
        switch(infix[i])
        {
            case'(': push(infix[i]);
                        break;
            case')': while(1){
                        check=pop();
                        if(check=='(')
                            break;
                        ans[count++]=check;
                        }
                            break;
            case'+':
            case'-':
            case'*':
            case'/':
            case'^':weight=getweight(infix[i]);
                    while(top!=-1&&weight<=(checksymbol=getweight(stackdata[top-1])))
                    {
                       ans[count++]=pop();
                    }
                    push(infix[i]);
                    break;
            default: ans[count++]=infix[i];
        }
    }
     if(infix[i]=='\0')
        {
            while(top>0)
                ans[count++]=pop();
        }
}

int main(){
    scanf("%s",infix);
    postfix();
    printf("%s",ans);
}
