# Unit 2 Bonus Assessment

#### This assessment is meant to be quite harder than the assessment that you all passed with ease last friday ;)

-

### In order to pass, you will need to:

- Connect to a local MongoDB Database
	-  Don't forget to `npm i`, specifically for mongoose
	-  create a config folder, with a `database.js` file inside
	-  create a model folder with a `Hobby.js` file inside, which will hold the `hobbySchema`
- Perform Full CRUD on a "Hobby"
	- Write a controller function (create) that **CREATES** a hobby in the database
	- Write a controller function (index) that **FINDS ALL** hobbbies in the database
	- Write a controller function (show) that **FINDS ONE** hobby in the database
		-  *Hint:* use **findById**
	- Write a controller function that allows you to **UPDATE** one hobby in the database 
		- *Hint:* use **findByIdAndUpdate**
	- Write a controller function (delete) that allows you to **DELETE ONE** hobby in the databse
- Create two views: `index.ejs` and `show.ejs`
	- `index.ejs` will have the list of all hobbies, with two buttons next to each hobby
		- the first button will take you to the detail page for that specific hobby
		- the second button will allow you to delete the hobby right there
			- *Hint:* don't forget about **method-override!**
	- `show.ejs` will have the details for a specific hobby
		- within `show.ejs` you should be able to:
			- update the hobby (method-override)
				- after successfully updating, redirect back to that updated hobby 
			- delete the hobby (method-override)
				- after successfully deleting, redirect back to the `index.ejs` page 

-

## Below are Screenshots of the working application:

    ![index.ejs with no hobbies]('public/images/img1.png')
    ![index.ejs with hobbies]('public/images/img2.png')
    ![show.ejs]('public/images/img3.png')