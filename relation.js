// jshint esversion:6

//Establishing the relationships and embedding document using mongoose

// require the mongoose 
const mongoose = require('mongoose');
// connnet to mongoose and also make the database (name of tyhe database is "fruitsDB")
mongoose.connect("mongodb://localhost:27017/relationDB",{useNewUrlParser: true,useUnifiedTopology: true });
/*
	Steps
		1) Create the schema then create the model then enter the some data as document
		2) for establishing the relation we should use the fruit schema in people schema that you can see i used the 1) for denoting that
		3) i already mentioned the steps in below coding 1),2),3),4)

*/
//Making the schema of fruits
const fruitSchema = new mongoose.Schema({
	Name : String,
	Rating : Number,
	Review : String
});
//create a new collection
const Fruit = mongoose.model("Fruit",fruitSchema);
//Making a new schema of peoples
const peopleSchema = new mongoose.Schema({
	Name: String,
	Age: Number,
	Email: String,
	// this is used for establishing the relationships
	//1) Creating the new data in object
	favouriteFruit: fruitSchema
});
//create a new collection of the peoples
const People = mongoose.model("People",peopleSchema);
//************************************************************
//For the fruits schema we entre the data (4 data)

//first data
const fruit = new Fruit ({
	Name:"Strawberry",
	Rating:7,
	Review:"Having a decent taste"
})
//enter more fruits
const kiwi = new Fruit({
	Name:"KIWI",
	Rating :9,
	Review:"Good Fruit. it's having a good taste"
})
const banana = new Fruit({
	Name:"Banana",
	Rating :10,
	Review:"Healthier Fruit increse the weight also"
})
const orange = new Fruit({
	Name:"Orange",
	Rating :8,
	Review:"Sour Fruit but increse the immunity system"
})
//after 2) creating a new document of fruits
const pineapple = new Fruit ({
	Name:"Pineapple",
	Rating:9,
	Review:"Good fuits"
})

//pineapple.save();
//saving the Fruit
//fruit.save();
// we are entering the many daya using the insertMany 
/*
Fruit.insertMany([kiwi,banana,orange],function(err){
	if (err){
		console.log(error)
	}else{
		//console.log("Fruits Data Succesfully Entered ......");
	}
})
*/
//********************************************************************
// data for the peoples collections (3 data)
//first data
const people = new People ({
	Name:"Aditya Shakya",
	Age:28,
	Email:"aditya@gmail.com"
});
//people.save();
// more data on peoples collection
const people1 = new People ({
	Name:"Vishal Shakya",
	Age:20,
	Email:"vishalshakya@gmail.com"
});
const people2 = new People ({
	Name:"Shivam Shakya",
	Age:23,
	Email:"shivamshakya@gmail.com"
});

//3)lets create a new document of people with relation
const person = new People({
	Name:"Lallu Yadav",
	Age:12,
	Email:'lallu@gmail.com',
	// 4) establishing the relationships
	favouriteFruit:banana
})
person.save()
/*
People.insertMany([people1,people2],function(err){
	if (err){
		console.log(error)
	}else{
		//mongoose.connection.close();
		//console.log("People Data Succesfully Entered ......");
	}
})
*/

