let row = 5;  // Number of rows
        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  // List of numbers

            for (let i = 1; i <= row; i++) {
                let rowString = '';  // Initialize an empty string for each row

                for (let j = 1; j <= i; j++) {
                    if (j % 3 === 0) {  // Skip every third number
                        continue;
                    }if(j % 7 === 0){
                        break;
                    }
                    rowString += numbers[j - 1] + ' ';  // Add number to row string
                }

                console.log(rowString.trim());  // Print the row, removing trailing space
            }