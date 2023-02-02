const Employee = require('../lib/employee')



describe("Employee", () => {

  describe("Initialization", () => {
    it("should create an object with a name, id and email if provided valid arguments", () => {
      const employee = new Employee("Jackson", 1, "jackson@kent.com");

      expect(employee.getName()).toEqual("Jackson");
      expect(employee.getId()).toEqual(1);
      expect(employee.getEmail()).toEqual("jackson@kent.com");
      expect(employee.getRole()).toEqual("Employee")
    });

   
    });
  });
