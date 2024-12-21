// Example Input 1
        let students = [
            { name: "Alice", marks: 45, subject: "Math" },
            { name: "Bob", marks: 75, subject: "Science" },
            { name: "Charlie", marks: 50, subject: "English" },
            { name: "David", marks: 30, subject: "History" }
        ];

        for(let student of students){
            if(student.marks >= 50){
                console.log(student);
            }
        }

        // Example Input 2
        let words = ["apple", "banana", "grapefruit", "kiwi", "pineapple"];

        for(let count of words){
            if(count.length == 10){
                console.log(count);
            }
        };
