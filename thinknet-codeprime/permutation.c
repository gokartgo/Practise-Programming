#include<stdio.h>
#define SIZE 8
int answer[SIZE],count[SIZE],number[SIZE],i,j,k,level = 0;

void permutation(int number[], int count[], int level) {
    int i;
    if(level == SIZE) {
        for(j=0;j<SIZE;j++) {
            printf("%d",answer[j]);
        }
        printf("\n");
        return;
    }
    for(i=0;i<SIZE;i++) {
        if(count[i] == 1) {
            continue;
        }
        answer[level] = number[i];
        count[i]++;
        permutation(number,count,level+1);
        count[i]--;
    }
}

int main() {
    for(i=0;i<SIZE;i++) {
        count[i] = 0;
        number[i] = i+1;
    }
    permutation(number,count, level);
}