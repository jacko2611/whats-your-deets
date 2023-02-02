const Engineer = require('../lib/engineer')

describe("Engineer", () => {
    describe("Initialization", () => {
      it("should create an object with a name, id, email, github username and have a role of 'Engineer' if provided valid arguments", () => {
        const engineer = new Engineer("Jackson", 1, "jackson@kent.com", "github", "Engineer");
  
        expect(engineer.getName()).toEqual("Jackson");
        expect(engineer.getId()).toEqual(1);
        expect(engineer.getEmail()).toEqual("jackson@kent.com");
        expect(engineer.getGitHub()).toEqual("github")
        expect(engineer.getRole()).toEqual("Engineer")
      });
  
     
      });
    });