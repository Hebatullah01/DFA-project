#include<iostream>
using namespace std;

string evenZerosEvenOnes(string w){
    int currentState = 0, finalState[]={5,6};

    for(int i=0; i<w.size(); i++){
        char input = w[i];
        cout<<"state : "<<currentState<<endl;
        switch (currentState){
        case 0 : 
            if(input == 'w'){
                currentState = 1;
            }
            else{
                currentState = 4;
            }
        break;
        case 1 :
            if(input == 'w'){
                currentState = 2;
            }
            else{
                currentState = 3;
            }
        break;
        case 2 :
            if(input == 'w'){
                currentState = 2;
            }
            else{
                currentState = 5;
            } 
        break;
        case 3 : 
            if(input == 'w'){
                currentState = 2;
            }
            else{
                currentState = 5;
            }
        break;
        case 4 : 
            if(input == 'w'){
                currentState = 2;
            }
            else{
                currentState = 6;
            }
        break;
        case 5 : 
            if(input == 'w'){
                currentState = 2;
            }
            else{
                currentState = 5;
            }
        break;
        case 6 : 
            if(input == 'w'){
                currentState = 2;
            }
            else{
                currentState = 6;
            }
        break;
        }
    }
    cout<<"the final current state is : "<<currentState<<endl;
    if((currentState  == finalState[0]) || (currentState  == finalState[1])){
        return "Accepted";
    }
    else{
        return "Rejected";
    }
}

int main(){
    #ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
    #endif
    string s;cin>>s;
    cout<<evenZerosEvenOnes(s);
    return 0;
}