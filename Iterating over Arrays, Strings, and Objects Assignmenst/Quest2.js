function determineAccess(person){
            return person.role === "admin" ?
                (person.active ? 
                    (person.experience > 5 ?
                        (person.department === "IT" ? "Full IT Admin Access" : "Full General Admin Access") :
                    "Limited Admin Access"):
                "Admin Access Revoked"):
              person.role === "manager"  ?
                (person.active ? 
                    (person.experience > 3 ?
                        (person.department === "Sales" ? "Full Sales Manager Access" : "Full Manager Access") :
                    "Limited Manager Access") :
                "Manager Access Revoked") :
              person.role === "user" ?
                (person.active ?
                    (person.department === "Support" ? "Priority Support Access" : "User Access") :
                "User Access Revoked"):
              "Invalid Role"
        };

        // Example usage:

        let person1 = { role: "admin", experience: 7, active: true, department: "IT" };
        console.log(determineAccess(person1));  // Output: "Full IT Admin Access"

        let person2 = { role: "manager", experience: 4, active: true, department: "Marketing" };
        console.log(determineAccess(person2));  // Output: "Full Manager Access"

        let person3 = { role: "user", experience: 2, active: true, department: "Support" };
        console.log(determineAccess(person3));  // Output: "Priority Support Access"

        let person4 = { role: "admin", experience: 3, active: false, department: "Finance" };
        console.log(determineAccess(person4));  // Output: "Admin Access Revoked"
