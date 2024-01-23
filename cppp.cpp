#include <iostream>
using namespace std;
int MAXSIZE = 20;
int coins[20];
int top = -1;
// check if the coins is full...
int isfull()
{
  if (top == MAXSIZE)
    return 1;
  else
    return 0;
}
int push(int data)
{
  if (!isfull())
  {
    top = top + 1;
    coins[top] = data;
  }
  else
  {
    cout << "could not insert ,/n coins is full :";
  }
  return data;
}
// Main function....
int main()
{
  int x;
  push(12);
  push(13);
  push(14);
  push(15);
  push(16);
  cout << "coins Element: \n";
  // print coins data...
  for (int x = 0; x < 20; x++)
  {
    cout << "coins: ", coins[x];
  }
  return 0;
}