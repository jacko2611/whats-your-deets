const Intern = require('../lib/intern')

describe("Intern", () => {
    describe("Initialization", () => {
      it("should create an object with a name, id, email, school and have a role of 'Intern' if provided valid arguments", () => {
        const intern = new Intern("Jackson", 1, "jackson@kent.com", "USYD", "Intern");
  
        expect(intern.getName()).toEqual("Jackson");
        expect(intern.getId()).toEqual(1);
        expect(intern.getEmail()).toEqual("jackson@kent.com");
        expect(intern.getSchool()).toEqual("USYD")
        expect(intern.getRole()).toEqual("Intern")
      });
  
     
      });
    });