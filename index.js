#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(1000 + Math.random() * 9000);
let myBalance = 0;
const useranswer = await inquirer.prompt([
    {
        type: 'input',
        message: 'Enter your name:',
        name: 'students',
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter some value";
        },
    },
    {
        type: 'list',
        name: 'course',
        message: 'select course to enroll:',
        choices: ["MS office", "C++ programming", "web development", "ethical hacking", "cloud computing"]
    }
]);
const tutionfee = {
    "MS office": 3000,
    "C++ programming": 4000,
    "web development": 4500,
    "ethical hacking": 5000,
    "cloud computing": 3500
};
console.log(`\nTution fees: ${tutionfee[useranswer.course]}/-\n`);
console.log(`balance ${myBalance}\n`);
const paymentType = await inquirer.prompt([
    {
        type: 'list',
        name: 'payment',
        message: 'select payment method:',
        choices: ["Paypal", "Bank transfer", "Jazz cash", "Easy Paisa"]
    },
    {
        type: 'input',
        message: 'Enter your amount:',
        name: 'Tranfer_amount',
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter some value";
        },
    },
]);
console.log(`\n You select payment method: ${paymentType.payment}`);
let Tutionfees = tutionfee[useranswer.course];
const paymentAmount = parseFloat(paymentType[`Tranfer_amount`]);
if (Tutionfees === paymentAmount) {
    console.log(`successfully enrolled in ${useranswer.course}\n`);
    let ans = await inquirer.prompt([
        {
            type: 'list',
            message: 'what would you like to next:',
            name: 'select',
            choices: ["view status", "exit"]
        },
    ]);
    if (ans.select === "view status") {
        console.log("\n **********status**********");
        console.log(`Student Name: ${useranswer.students}`);
        console.log(`Student ID ${randomNumber}`);
        console.log(`course: ${useranswer.course}`);
        console.log(`Tution fees paid: ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }
    else {
        console.log("\n Exiting Student Management system");
    }
}
else {
    console.log("invalid amount due to course");
}
