# [DothraKIT](https://dothrakit.herokuapp.com/)

## Description 
With the final season of GOT coming out it's time to brush up on your Dothraki phrases! DothraKIT uses a spaced repeitition algorithm to ensure you are learning efficiently. The rules are simple: learn the word, get it right, you live. Or else...well, best not to get on Khal's bad side.

## Features
:white_check_mark: Users can create an account for themselves with their first name, last name, username, and password
<img src="https://i.imgur.com/9qGEExz.png" alt="login/register" width="400px" />

:white_check_mark: Upon logging in, users will be directed to a dashboard (home page) where they can start learning Dothraki!
<img src="https://i.imgur.com/35s48yu.png" alt="homepage" width="400px" />

:white_check_mark: After users submit their answer for the dothraki phrase, they will be given proper feedback which includes the correct translation in English, their mastery of the given phrase, and a funny surprise to keep them entertained
<img src="https://i.imgur.com/66TnGX6.png" alt="homepage" height="400px" width="400px" />
<img src="https://i.imgur.com/CrqYlh5.jpg" alt="homepage" height="400px" width="400px" />

:white_check_mark: The order in which the phrases appear is based on a spaced repeitition algorithm; the more often the user gets a given phrase correct, the later it'll start to appear, and vice versa

:white_check_mark: Users can see their overall progress at the top of their dashboard

:white_check_mark: Users can look over the Dothraki phrases at any time by clicking on the glossary tab in the navbar 
<img src="https://i.imgur.com/aq6C24l.png" alt="homepage" width="400px" />

## Tech Stack 
Full-stack app with:
- React for the frontend
- Redux for state management
- Node/Express for the backend
- MongoDB for the database
- JWTs for authentication
- Mocha/Chai for server-side testing

## Links
[Server Repo](https://github.com/thinkful-ei26/DothraKIT-Server-Nikkie-Sam)
[Deployed App On Heroku](https://dothrakit.herokuapp.com/)