import java.util.*;
public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<Integer> list=new ArrayList<Integer>();
		list.add(1);
		list.add(2);
		list.add(3);
		list.add(4);
		ListIterator<Integer> listIt=list.listIterator();
		System.out.println("fd");
		while(listIt.hasNext()) {
			System.out.println(listIt.next());
		}
		System.out.println("rd");
		while(listIt.hasPrevious()) {
			System.out.println(listIt.previous());
		}
	}

}
