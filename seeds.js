var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Malana Village",
        image: "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/04/Malana-Village-Trek.jpg",
        description: "Located in the Dhauladhar Range of the Himalayas, Beas Kund is not just a beautiful place but also a place of immense historical significance. To reach Beas Kund, one needs to complete a short trek. It is a 15 to 17 km trek which can be easily covered in three days. It is suitable for all age groups since it is not very strenuous. Also, you don’t need to be a pro at trekking for completing this journey. One can stay at the campsites along the path and enjoy the scenic beauty."


    },
    {
        name: "Chandrakhani Pass",
        image: "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/04/Chandrakhani-Pass-Trek.jpg",
        description: "Located in the Dhauladhar Range of the Himalayas, Beas Kund is not just a beautiful place but also a place of immense historical significance. To reach Beas Kund, one needs to complete a short trek. It is a 15 to 17 km trek which can be easily covered in three days. It is suitable for all age groups since it is not very strenuous. Also, you don’t need to be a pro at trekking for completing this journey. One can stay at the campsites along the path and enjoy the scenic beauty."


    },
    {
        name: "Hampta Pass",
        image: "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/04/Hampta-Pass-Trek.jpg",
        description: "Located in the Dhauladhar Range of the Himalayas, Beas Kund is not just a beautiful place but also a place of immense historical significance. To reach Beas Kund, one needs to complete a short trek. It is a 15 to 17 km trek which can be easily covered in three days. It is suitable for all age groups since it is not very strenuous. Also, you don’t need to be a pro at trekking for completing this journey. One can stay at the campsites along the path and enjoy the scenic beauty."


    }
    
]

function seedDB(){
    Campground.deleteMany({},function(err){
        if(err){
            console.log(err);
        }else{
            console.log("all campgrounds removed");
            // data.forEach(function(campground){
            //     Campground.create(campground,function(err, data) {
            //       if(err){
            //           console.log(err);
            //        }else{
            //            console.log("campground created");
            //            Comment.create({
            //                text: "This place is marvellous......",
            //                author: "John"
            //            },function(err, comment){
            //                if(err){
            //                    console.log(err);
            //                }else{
            //                    data.comments.push(comment);
            //                    data.save();
            //                    console.log("Created new comment");
            //                }
            //            })
            //        } 
            //     })
            // })
        }
    })
}

module.exports = seedDB;