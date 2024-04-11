#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 35000; //dollars

let  myPin = 1475;

console.log("Welcome to Al-Shareef Islamic Bank");
console.log(`Your Balance is ${myBalance}`);
    
    let askPin = await inquirer.prompt(
        [
            {
                message: "Please Enter Your Pin Number",
                name: "pin",
                type: "number"
            }
        ]
    );
    if (askPin.pin === myPin){
        let options = await inquirer.prompt(
            [
                {
                    message: "Select the Option Below",
                    name: "opt",
                    type: "list",
                    choices: ["Withdraw", "Deposit", "Fast Cash", "Check Balance" ]
                }
            ]
        );
       
        if (options.opt === "Withdraw"){
            let askamount = await inquirer.prompt(
                [
                    {
                        message: "Enter Amount you want to Withdraw",
                        name: "amount",
                        type: "number"
                    }
                ]
                );
                myBalance -= askamount.amount;
                console.log(`Your Remaining Balance is ${myBalance}`);    
            }

        else if(options.opt === "Check Balance"){
            console.log(`Currently Your Balance is ${myBalance}`);
        }
        else if(options.opt === "Deposit"){
            let depamount = await inquirer.prompt(
                [
                    {
                        message: "Enter Amount you want to Deposit",
                        name: "depo",
                        type: "number"
                    }
                ]
            );
            myBalance += depamount.depo;
            console.log(`Now Your Balance is ${myBalance}`);

        }

        else if(options.opt === "Fast Cash"){
            let fastamount = await inquirer.prompt(
                [
                    {
                        message: "Select the Amount you want to Cash",
                        name: "fstamount",
                        type: "list",
                        choices: ["1000", "3000", "5000", "10000"]
                    }
                ]
            );
            myBalance -= fastamount.fstamount;
            console.log(`Your Remaining Balance is ${myBalance}`);
        } 
     }
    

    else{
        console.log("Invalid Pin Number");
    }
    console.log("Thanks for Using");