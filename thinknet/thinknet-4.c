#include<stdio.h>
#define LENGTH 1000000

// int number[LENGTH],numberReverse[LENGTH],answer[LENGTH],numberBefore[LENGTH];
int number[LENGTH],numberReverse[LENGTH],choose[LENGTH];

int reverseNumber(int number) {
    int digit = 0;
    while(number > 0) {
        digit = digit * 10 + number % 10;
        number = number/10;
    }
    return digit;
}

int main() {
    int i,j,k,destination[200];
    for(k=1;k<=100;k++) {
        scanf("%d",&destination[k]);
    }
    // scanf("%d",&destination);
    for(i = 1;i<=LENGTH;i++) {
        number[i] = i;
        numberReverse[i] = reverseNumber(i);
        choose[i] = 1;
    }
    for(i = 1;i<=LENGTH;i++) {
        if(numberReverse[i] <= LENGTH){
            if(number[i]+1 < number[i+1]) {
                number[i+1] = number[i]+1;
            }
            if(number[i]+1 < numberReverse[i] && choose[i] == 1 && i < numberReverse[i]) {
                number[numberReverse[i]] = number[i] + 1;
                if(numberReverse[i] == i) {
                    number[numberReverse[i]] -= 1;
                }
                choose[numberReverse[i]] = 0;
            }
        }
    }
    printf("---------------------------------------------------\n");
    for(i = 1;i<=100;i++) {
        // printf("%d ----------------- %d\n",number[10111],destination[i]);
        printf("%d\n",number[destination[i]]);
    }
}
