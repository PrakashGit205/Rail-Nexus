package com.irctc.tester;

  class Singleton {
	
 private static	Singleton s;
		
	private Singleton() {
		s=null;
		System.out.println("COunstructor called");
			
		}
		public static Singleton getObject() {
			if(s==null)
			{
				System.out.println("object called");
				s = new Singleton();
				return s;
			}
			return s;
			
		}
		
}
  public class Singleton1
  {
	  public static void main(String[] args) {
			Singleton s = Singleton.getObject();
			
			Singleton s1 = Singleton.getObject();
			
		}
  }
