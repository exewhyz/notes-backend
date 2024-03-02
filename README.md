# Day 3 (Express.js)

## Express Framework

## Express Server request-response

## configuration and middleware

## REST APIs in Express

## Mini Project - NoteBook Backend


## Getting Started

After downloading this source code, download all packages by running the below command:

```bash
npm install
```

The above command will download all packages and create a node_modules folder

To run the file use the following command:

```bash
npm run start
```
Open [http://localhost:5000](http://localhost:5000) with your browser to see the result.


## you can test all the routes in the thunder client to get the response.

#### to test these apis run your first restart your server.

- Start your MongoDB Compass Server by clicking on connect button.

## To Fetch all the notes
### for example

- you want to fetch all the notes open your thunder client and create a new request.
- select GET method and enter your localhost url like:
```bash
    http://localhost:5000/getNotes
```
- click on send button.

## To Create a new Note
### for example
- open your thunder client and create a new request.
- select POST method and enter your localhost url like:

```bash
    http://localhost:5000/createNote
```

- go to body tab and select JSON tab.
- And paste the following :

```bash
    {
        "title":"Maths",
        "description":"This is a Maths Note",
        "tags": "IT"
    }
```

- Click on the send button.

- if you want to create a new note just change all the values of the above object and paste in that body tab in thunder client and send request.


## To Update a new Note
### for example

- open your thunder client and create a new request.
- select PUT method and enter your localhost url like:

```bash
    http://localhost:5000/update/write-an-id-of-an-note
```
- go to body tab and select JSON tab.
- And paste the following :

```bash
    {
        "title":"AIML",
        "description":"This is an AIML Note",
        "tags": "IT"
    }
```
- Click on the send button.


## To Delete a new Note
### for example

- open your thunder client and create a new request.
- select DELETE method and enter your localhost url like:

```bash
    http://localhost:5000/delete/write-an-id-of-an-note
```
- Click on the send button. //It will delete the note.


# How to upload your code or project on github.

## Create an account on github.

- Login to github and create a new repository.

- Create **.gitignore** file in your projects folder of VS Code.

- In **.gitignore** file write: /node_modules.

- Run this command

```bash
git init
```

- Run this command in VS code terminal.

```bash
git add .
```
  
- Run this command in VS code terminal.

```bash
git commit -m "first commit"
```
- Run this command in VS code terminal.

##### here you have to use your own repository Url - you will get that Url after creating an repository. 
```bash
git remote add origin your-repository-url
git branch -M main
git push -u origin main
```
