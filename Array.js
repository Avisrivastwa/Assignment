const arr=[1,2,3,4,5,6];
for(let i=arr.length-1;i>=0;i--)
{
    for(let j=0;j<i;j++)
    {
        if(arr[i]>arr[j])
        {
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
console.log(arr);