#Self Learning Clinic
##Programming tasks for day 2

###This exercise write tests and codes to pass the test. (Tests are written with Jasmine)

* Write a function called *words*  that takes in a string argument and counts the occurrences of each word in the string.
The function should return a JSON object showing the words identified, and their occurrences.
For example for the input `olly olly in come free`, the output should be
>olly: 2
>in: 1
>come: 1
>free: 1

* Write a function *reverseString*  that takes in a string argument and returns the reverse of the string provided.
If the reverse of the string is the same as the original string, as in the case of palindromes, return true instead.

* A simple command line application that consumes a Public API using a HTTP client library. (No test is written for this)
### For the API task
1. Clone or download this repo
2. You should have nodeJs installed on your PC
3. Run npm install
4. You need an API key from [NewYork Times](http://developer.nytimes.com "NewYork Times")
5. Create a .env file in the root folder and assign your API key to the variable API_KEY.
