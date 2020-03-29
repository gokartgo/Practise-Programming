#include<stdio.h>
#define INF 999
#define V 1000
int main() 
{ 
    int i,j,k;
                    //    a  b  c  d  e  f  g  h  
    int graph[V][V] = { { 0, 8, 2, 5, 0, 0, 0, 0 }, 
                        { 8, 0, 0, 2, 0, 13, 0, 0 }, 
                        { 2, 0, 0, 2, 5, 0, 0, 0 }, 
                        { 5, 2, 2, 0, 1, 6, 3, 0 }, 
                        { 0, 0, 5, 1, 0, 0, 1, 0 }, 
                        { 0, 13, 0, 6, 0, 0, 2, 3 }, 
                        { 0, 0, 0, 3, 1, 2, 0, 6 }, 
                        { 0, 0, 0, 0, 0, 6, 3, 0 } }; 
    int select[V],answer[V];
    int min=INF,choose=0;
    int u[V],v[V];
    u[0] = 0;
    
    for(i=0;i<V;i++) {
        select[i] = 0;
        for(j=0;j<V;j++) {
            if(i!=j&&graph[i][j]==0){
                graph[i][j] = INF;
            }
        }
    }
    select[0] = 1;
    for(i=0;i<V;i++) {
        v[i] = graph[0][i];
    }

    for(i=0;i<V;i++){
        select[choose] = 1;
        min = INF;
        for(j=0;j<V;j++) {
            if(u[choose] + graph[choose][j] < v[j] && choose != j){
                v[j] = u[choose] + graph[choose][j];
            }
        }
        for(j=0;j<V;j++) {
            if(v[j] < min && choose != j && select[j] == 0) {
                min = v[j];
                choose=j;
                u[j] = min;
                printf("%d %d\n",u[j],choose);
            }
        }

    }

    printf("\n\n");
    for(i=0;i<V;i++){
        printf("%d ",v[i]);
    }
    

    return 0; 
} 