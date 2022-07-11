//Substring Check.
//You are given two strings S1 and S2,you need to check whether the string S1 is a substring of string S2 or not.


var Substring_Check = (S1, S2) => 
{
  if(S1.indexOf(S2) !== -1){
    return ("YES");
  }
  else
  {
    return ("NO");
  }   
};
 
