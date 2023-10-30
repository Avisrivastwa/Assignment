import java.util.Random;

class shuff{
    public static void main(String[] args) {
        int[] arr={1,2,3,4,5,6,7};
        Random n=new Random();
        for(int i=0;i<arr.length;i++)
        {
            int ind;
            do{
                ind=n.nextInt(arr.length);
            }while(i==ind);
            int temp=arr[ind];
            arr[ind]=arr[i];
            arr[i]=temp;
        }
        for(int i=0;i<arr.length;i++)
        {
            System.out.print(arr[i]+" ");
        }
    }
}