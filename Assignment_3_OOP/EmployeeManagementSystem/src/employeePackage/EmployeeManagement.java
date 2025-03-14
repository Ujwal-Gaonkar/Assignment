package employeePackage;

import java.util.*;

class Employee {
    private int id;
    private String name;
    private double salary;

    // Constructor to Initialize employee objects
    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Method to display details of employee
    public void displayDetails() {
        System.out.println("ID: " + id + ", Name: " + name + ", Salary: " + salary);
    }
}

public class EmployeeManagement {
	public static void main(String[] args) {
        // Creating objects
        Employee emp1 = new Employee(101, "Ujwal", 50000);
        Employee emp2 = new Employee(102, "Aman", 60000);
        Employee emp3 = new Employee(103, "Prajwal", 55000);
        
        // Storing in a list
        List<Employee> employeeList = new ArrayList<>();
        employeeList.add(emp1);
        employeeList.add(emp2);
        employeeList.add(emp3);
        
        // Displaying employee details
        System.out.println("Employee Details:");
        for (Employee emp : employeeList) {
            emp.displayDetails();
        }
    }

}
