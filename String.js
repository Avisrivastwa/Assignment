let str="hello world";
const strans=str.split(" ");
let ans="";
for(let i=0;i<strans.length;i++)
{
    for(let j=strans[i].length-1;j>=0;j--)
    {
        ans=ans+strans[i].charAt(j);
    }
    ans=ans+" ";
}
console.log(ans);
