# Todo Challenge

A demo of this app can be found at https://todo-ify.herokuapp.com/#/

This is my submission for the Todo challenge. It implements all of the User stories, namely:

* Tasks are stored but they do not persist. No database added. The tasks are stored in an array of Javascript objects inside the controller.
* New tasks can be added by typing into the text box and hitting return.
* Tasks can be edited by clicking on the task text.
* Tasks can be deleted by clicking on the red x next to the entry.
* Tasks can be marked as complete and the text will be struck out.
* Tasks can be filtered by complete, incomplete or all.
* Completed Tasks can be cleared by clicking the clear button.
* A count of all tasks is displayed.
* The app was styled with twitter bootstrap.

A screen dumps are shown below.

![Screen](https://i.imgur.com/vqSSnvY.png)

![Screen2](https://i.imgur.com/Jpk6V1f.png)

To run the application, carry out the following steps:

* Install Node.js
* Clone this repo.
* Perform a npm install
* Perform a bower install
* Start the Express web server using 'npm start'
* Goto localhost:3000




* Deadline: submit completed pull request by 9am on Monday
* You may use whatever level of JavaScript you feel comfortable with - pure JS, jQuery, Angular, or whatever weird and wonderful framework you want to try. Extra points for DogeScript

Steps
-------

1. Fill out your learning plan self review for the week: https://github.com/makersacademy/learning_plan 
2. Fork this repo, and clone to your local machine
3. Complete the following challenge:

## Challenge

![Todo mockup](https://makersacademy.mybalsamiq.com/mockups/2914603.png?key=afabb09aef2901a2732515ae4349c1ec0458294b)

Build a Todo list as a mini front-end application. You don't have to use a database, the front-end is more important - you can use an appropriate data structure stored somewhere in your JavaScript (this time only!)

Here are the core user stories:

```
As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my todo list (adding and changing entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice
```

Here are some other user stories you may choose to implement:

```
As a person with a lot of tasks
I want to be able to filter my tasks by "All", "Active", "Complete"
So that I only see the relevant tasks

As a person who doesn't like counting by hand
I want to see a total number of tasks
So that I don't have to count

As someone who has done lots of stuff
I want to be able to clear my completed tasks
So I never see them again
```

As you may imagine, implementing a To-do list is very much a solved problem. However, we are mainly interested in seeing how you approach testing and design. We are looking for:

* well written, well structured acceptance and unit tests
* clear and expressive JavaScript
* good HTML5 markup

Don't worry about deployment, and make sure you read the CONTRIBUTING.md when submitting a pull request.

## Extensions

* Deploy the app
* Create a persistance layer (e.g. MongoDB), or use LocalStorage or the filesystem through Node
* Make it look purdy (CSS) - try a framework like Bootstrap or Foundation

## CI

Read the `.travis.yml` if any of the steps below don't make sense! 

* Make sure you have set up `npm test` in your `package.json` so that it runs your Karma tests
* Make sure you have your Protractor config file at `e2e/conf.js`
* Make sure `npm start` spins up whatever serves up your app - `http-server`, Sinatra or Node

Good luck!
