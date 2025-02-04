//conditional clases
import java.util.Scanner;
public class Ex4 {
    public static void main(String args[])
    {
        Scanner obj=new Scanner(System.in);
        /*int mark=obj.nextInt();
        if(mark>35)
        {
            System.out.println("YOu pass the exam!!");
        }
        else{
            System.out.println("YOU fail in the exam");
        }
        */
        int income=obj.nextInt();
        if(income<10000)
        {
            System.out.println("Scholorship Available ");
        }
        else{
            System.out.println("Scholorship not available");
        }
    }
}
