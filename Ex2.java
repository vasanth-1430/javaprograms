//TO GET THE INPUT'S FROM THE USER
//WE NEED TO IMPORT:import java.util.Scanner;
import java.util.Scanner;
public class Ex2 {
     public static void main(String args[])
    {
        Scanner obj=new Scanner(System.in);
        int a=obj.nextInt();
        int b=obj.nextInt();
        System.out.println("Addition of 2No's:"+(a+b));
        System.out.println("subtraction of 2No's:"+(a-b));
        System.out.println("MUltiplication of 2No's:"+(a*b));
        System.out.println("division of 2No's:"+(a/b));
        System.out.println("MODulus of 2No's:"+(a%b));
    }
}
