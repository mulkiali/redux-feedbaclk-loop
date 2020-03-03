# Redux Feedback Loop

## Description
For this assignment, I created a feedback app based on Prime's feedback system. Feedback is collected over 4 pages, and a review page shows the current feedback values. Once you hit the submit button on the review page, the data is sent to a SQL database.


 ## Technology Used
 - React
 - Redux
 - Axios
 - SQL
 
### SETUP

Create your database and tables using the provided `data.sql` file. Start the server.

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```

### ADD NEW FEEDBACK

> NOTE: As a baseline requirement, you must use Redux to store your data across views.

Create a multi-part form that allows users to leave feedback for today. 
There will be 4 views for the form parts.

The parts:
- How are you feeling today?
![feeling](wireframes/feeling.png)
- How well are you understanding the content?
![understanding](wireframes/understanding.png)
- How well are you being supported?
![support](wireframes/supported.png)
- Any comments you want to leave?
![comments](wireframes/comments.png)

While there is no nav bar, each part of the form should be at its own route. Clicking next should move the user to the appropriate step in the process.

### Input Validation

Each step should only allow the user to advance to the next step if a score was provided. Be sure to tell the user in some way that a value must be provided.

The `Comments` step does not need to be validated, an empty value is okay.

## THE REVIEW COMPONENT

The last step of the process will allow the user to review their feedback. Users are not able to change their input on this step or go back for Base Mode. 

![comments](wireframes/review-active.png)

## SUBMIT THE FEEDBACK

The `Review` step needs to have a submit button which will be clicked on to actually submit the completed feedback to the server.

When the submit button is clicked, save the submission in the database. The user should see a submission success page. They can then click the button to take a new survey, which needs to reset all the data and go back to the first step.

![understanding](wireframes/page-five.png)

