public class panagram {
    public static void main(String[] args) {
        String str="pack my box with five dozen liquor jugs";
        int[] arr=new int[256];
        for(int i=0;i<256;i++)
        {
            arr[i]=0;
        }
        for(int i=0;i<str.length();i++)
        {
            char ch=str.charAt(i);
            arr[Integer.valueOf(ch)]++;
        }
        int flag=0;
        // ascii value of a - 97 and z -122
        for(int i=97;i<=122;i++)
        {
            if(arr[i]==0)
            {
                flag=1;
                break;
            }
        }
        if(flag==1)
        {
            System.out.println("not panagram");
        }
        else
        {
            System.out.println("valid panagram");
        }
    }
    
}
