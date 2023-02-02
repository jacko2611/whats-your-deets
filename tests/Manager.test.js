const Manager = require('../lib/manager')

describe("Manager", () => {
    describe("Initialization", () => {
      it("should create an object with a name, id, email, office number and have a role of 'Manager' if provided valid arguments", () => {
        const manager = new Manager("Jackson", 1, "jackson@kent.com", "55555", "Manager");
  

        expect(manager.getName()).toEqual("Jackson");
        expect(manager.getId()).toEqual(1);
        expect(manager.getEmail()).toEqual("jackson@kent.com");
        expect(manager.getOfficeNumber()).toEqual("55555")
        expect(manager.getRole()).toEqual("Manager")
      });
  
     
      });
    });