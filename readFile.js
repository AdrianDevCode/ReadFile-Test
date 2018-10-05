const fs = require('fs');
const readline = require('readline');
const stream = require('stream');

const streamIn = fs.createReadStream('test.txt'); // change this to itcont.txt for the big data
const streamOut = new stream();
const readLine = readline.createInterface(streamIn, streamOut);

//get line count for file
let totalNumberOfLines = 0;

// create array list of names
let names = [];

// donations occurring in each month
let dateDonationTotal = [];
let dateDonations = {};

readLine.on('line', function (line) {

    totalNumberOfLines++;

    // get all names. could also try using regex expression for better results
    let name = line.split('|')[7];
    names.push(name);

    // format to year and month
    let date = line.split('|')[4].slice(0, 6);
    let formattedDate = date.slice(0, 4) + '-' + date.slice(4, 6);
    dateDonationTotal.push(formattedDate);
});

readLine.on('close', function () {
    // 1. Write a program that will load in this data and print out the total number of lines.
    console.log(totalNumberOfLines);

    /*
    2.  Notice that the 8th column contains a person’s name for records pertaining to
    a person. Write a program that loads in this data and creates an array or
    list-like structure with all name strings. Print out the 432nd and 43243rd
    names.
    */
   // used smaller test file for speed
    console.log(names[0]); //432 
    console.log(names[24]); // 43242

    /*
    3. Notice that the 5th column contains a form of date. Count how many
    donations occurred in each month and print out the results. Go ahead and
    use a date parsing library if that helps.
    */

    dateDonationTotal.forEach(date => {
        dateDonations[date] = (dateDonations[date] || 0) + 1;

    });
    for (let date in dateDonations) {
        console.log(`donations on ${date} :  ${dateDonations[date]}`)
    }
    /*
    4. Notice that the 8th column contains a person’s name. Create an array or
    list-like structure with each first name. Identify the most common first name
    in the data and how many times it occurs.
    */
    // could not get to it in under 1 hour. 
    // I would try using regex expression to locate first name on each line and save to an array
    // then loop thru to check the count for each name.
});