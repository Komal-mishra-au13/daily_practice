# BACKEND PROJECT - Online Blogging Website



**Project Name - BlogginBow** [link to Blogginbow!](https://blog-website-akx.herokuapp.com/)

## Introduction 

“Blogginbow” is a fully-fledged blogging website with various features to ease the work of 
bloggers in showcasing their pieces of art. In technical terms, blogging is referred to as content marketing. In fact, content is called ‘King of Digital Marketing’, it is the foundation 
for successful online marketing. Hence, it is extremely essential to blog about almost 
anything in today’s world, and what could be better than an easy-to-use and secure 
blogging platform that can help users effectively summarising their knowledge in words and 
pictures. The main aim of this project is to provide data to Users in only one site. Users can 
gather the information from one site as well as create their own blog. Users can post their 
views and thought and analyse themselves.


## Objective

The main objective of our project is to provide an online platform to the people to manage 
the details of Blogs, Comments, New category, New Blog. They can be used for anything 
that involves communicating or publishing information on the World Wide Web. Common 
uses include teaching, knowledge sharing, educational and corporate use. Your blog can be 
a personal diary, a project collaboration tool, a guide, or any means of communicating and 
publishing information on the web. Users can gather the information from one site as well 
as create their own blog. Users can post their views and thought and analyse themselves


## Tech stacks used:

* JavaScript for performing various array operations and making functions etc.
* Node.js as a backend language for the project
* Express.js, a node.js framework to create a server and make API’s
* MongoDB to store the user data, blog data, and other comments(if any)
* Mongoose, a MongoDB framework to get more functionalities to retrieve and 
manipulate data.
* JWT(jsonwebtoken) for user authentication
* HTML/CSS for designing the front end part
* Bootstrap to add some styles to our existing front end section* Handlebars(hbs) template engine for rendering views from the backend
* Bcryptjs for password encryption
* Multer for uploading pictures
* Marked library for converting plain text to markdown text


## What all features are included in BlogginBow?

* User Signup –> Blogginbow uses a detailed signup form where it takes your Full 
name, email, gender, phone number and password.

* User Login –> The login section in pretty easy to use and it also has an admin 
checkbox that will give you admin access if you are a genuine admin, it restricts you 
if you are try to open admin section without necessary access.

* User home page – After a successful signup and login, the page will redirect to the 
user page, where a user is welcomed and gets access to his profile, read/write blogs, 
update profile, upload a display picture, edit/delete blogs if exists, and the logout 
button.

* Profile Page – The profile page is a portfolio of the user where he can enter all 
his/her details like Phone number, Address, DP, About Social media links etc.

* Update Profile – The profile page will be initially empty and only name will be 
populated. User can go to update profile section and enter his/her details to 
complete his profile with the field mentioned above.

* Password reset – There is an option to reset the password inside profile page. It is 
very easy to use. User can simply enter the old password and then the new password 
in the respective input fields. Upon submission, the password will be changed and 
you will be asked to log back in with new password, provided you have entered all 
the details correctly. It will throw you an error if the old password doesn’t match or 
both of the new password fields contain different values.

* Write-blog section – Here, user can write a well-structured blogpost with the 
help of editor provided by us. The text are for content detects the markdown text 
symbols and converts the plain text to a markdown content upon submission.

* Read-blogs – Users can check all their blogs listed in user page right below the 
header section. To read a particular blog, user can simply click on the desired blog 
and it will open up in a new tab with all its contents.

* Edit blog – There is a tab named Edit/Delete blog in the navbar of both the user 
and the profile page. Upon clicking, it will open all the all the blogs written by the 
user along with Edit and Delete buttons inside each blog listing. User can simply click 
on the Edit button to edit that particular blog contents and then repost the same.

* Delete blog – Under the same tab, there is also a Delete button. Upon clicking the 
delete button, the target blog gets deleted and removed from the user’s account as 
well the database.


* Comment section – Whenever someone opens a particular blog by clicking on it, 
it will open in a new tab along with a comment section at the bottom of the page 
which will contains all the comments posted by the readers along with their name 
and content of the comment.

* Comment button – The comment section has a comment button which will open 
a modal upon clicking. The reader or the user can enter their name and the 
comments then click on post comment button to submit the comment for that 
particular blog. Comments without name or body will not be accepted.

* BlogginBow Home – The home page of our website is accessible to both the 
registered and non-registered users, it consists of a Navigation bar, Header and Blogs 
section. The navigation panel can be used for signup, login, reading about 
Blogginbow and to contact us.

* General reading section – As mentioned above the homepage will have all the 
blogs listed in the order of latest blog first. Any reader, registered or non-registered user can scroll through the blogs and read it by clicking on it. They can also comment 
on any blogs.

* Category filter – A categories filter is provided on the left side of the blog listing 
section through which the reader can filter out the blogs as per the category of their 
choice and continue browsing the blog section.

* Admin mode – As mentioned above, the login form also contains a checkbox for 
admin access. IF any admin wants to login, they have to enter their credentials and 
also check the admin checkbox. It will open up the Admin dashboard for them.

* heck all Logged users – The Admin dashboard contains the list of all those users 
who are currently logged in to the website. The list contains user’s first name and 
the email.

* All registered users – Admin also has access to see the list of all the registered 
users along with their name and email.

* Activate/Deactivate users – In the Admin dashboard, the admin has access to 
Activate or Deactivate one or more users if he finds their blogs as inappropriate.
Upon deactivation the user won’t be able to login to his profile unless activated back 
by the admin. It will through an error message stating “Your account is temporarily 
suspended”.

* Check Author profile – A normal reader can also check out the profile of the 
authors by clicking on the author’s name under the posted by section. Author profile 
is a read-only page along with a contact button through which a reader can contact 
the author via email.

Apart from all the above features, Blogginbow also has the errors and general messages 
section which comes into picture whenever there is any error from user or server side. It 
gets displayed in its respective places whenever needed.

## Benefits of Project 

This project really helped in understanding the underlying concepts of backend environment 
very deeply. Node.js is really a fantastic language, with all its inbuilt libraries and npm 
package support, it becomes even more powerful. Concepts related to Authentication, 
securing password, defining user roles (authorisation) and saving data securely to database 
are crystal clear after getting my hands dirty on this project. Although it is a backend 
project, yet the user interface made me learn many front end topics as well, I feel 
empowered with the front end tools and concepts too. It was really a very great experience 
for me and I have put my heart and soul to make this project live just in time.


## Future Scope

* There is always some room for improvement, we can make the website mobile 
friendly and also implement responsive web design.

* O-auth like Google auth or Facebook auth can be implemented.

* Reputed writers can write blogs for any business or an individual, thereby 
implementing a business model for creative writers to earn extra bucks from our 
website using their skills.

* For the above-mentioned point,  a safe and secure payment gateway can be 
implemented as well.



