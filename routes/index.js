var fetchUrl   = require("fetch").fetchUrl,
    User       = require('../models/user'),
    Vote       = require('../models/vote'),
    Feedback   = require('../models/feedback'),
    middleware = require('../middleware'),
    Message   =  require('../models/messages'),
    cryptto    = require("crypto"),
    express    = require("express"),
    router     = express.Router();


var base_hash = "fngreurh389u4e82h8e42q0s@";

// Landing page route
router.get("/", middleware.isLoggedIn, function(req, res) {
    res.render("landing");
});

router.get("/results", middleware.isLoggedIn, function(req, res) {
    res.render("results");
});

router.get("/esc", middleware.isLoggedIn, function(req, res) {
    res.render("esc");
});


router.post("/messages/submit/:id", middleware.isLoggedIn, function(req, res){
    // var messages ={
    //     MessagesId:12345,
    //     MessagesId: req.body
    // }
    // user.subject =req.body.subject;
    // user.name =req.body.name;
    // user.email =req.body.email;
    // user.save();

//   console.log(req.body.subject);

//     messages.subject.push(req.body.subject);
//     messages.name.push(req.body.name);
//     messages.email.push(req.body.email);
//     messages.save();

    var messa ={
        messagesId:12345,
        messages1: req.body
    }

Message.create(messa, function(err, message)
                   {
        if (err){
            console.log(err);
        }
        else
            {
            message.subject =req.body.subject;
            message.name =req.body.name;
            message.email =req.body.email;
            message.save();
            //   res.send("Hello") 
            //     console.log(message.message1);
                   
            }
    })

    console.log(req.body);
    

res.redirect('/landing2');


});

router.get("/messo/:id", middleware.isLoggedIn, function(req, res) {
    Message.find(function(err, users) {
        if(err) {
            req.flash("error", "An error has occurred.");
            console.log(err);
            res.redirect("back");
        } else {
            Message.findById(req.params.id, function(err, user) {
                if(err) {
                    req.flash("error", "An error has occurred.");
                    console.log(err);
                    res.redirect("back");
                } else {
                    //var userhash = "3456ujnfhgfdinofgtybgs9otg";
                   console.log (message.subject);
                   console.log ( message.name);
                   console.log ( message.email);
                    // if(user.hash_id) {
                    //     userhash = user.hash_id;
                    // }

                    // var user_hashes = [];
                    // for (var i = 0; i < users.length; i++) {
                    //     user_hashes.push(users[i].hash_id);
                    // }

                    // res.render("hashes", {user_hashes : user_hashes, userhash : userhash});
                }
            });
        }
    });
});



// Vote Post Route
router.post("/vote/submit/:id", middleware.isLoggedIn, function(req, res) {

    var hash_uid = cryptto.randomBytes(20).toString('hex');

    User.findById(req.params.id, function(err, user) {
        if(err) {
            console.log(err);
        } else {
            if(!user.hasVoted) {
                // Update user voting profile
                user.chairman = req.body.chairman;
                // user.chairlady = req.body.chairlady;
                // user.secretary = req.body.secretary;
                // user.academic_rep = req.body.academic_rep;
                // user.clubs_rep = req.body.clubs_rep;
                // user.entertainment_rep = req.body.entertainment_rep;
                // user.it_rep = req.body.it_rep;
                // user.sports_rep = req.body.sports_rep;
                // user.wellness_rep = req.body.wellness_rep;
                // user.treasurer = req.body.treasurer;
                // user.honor_council = req.body.honor_council;
                user.country = req.body.country;
                user.hall = req.body.hall;
                user.hasVoted = true;
                user.hash_id = hash_uid;
                user.save();


                Vote.findOne({
					voteId: 12345
				}, function(err, vote) {
					if (err) {
						req.flash("error", "An error has occurred");
						res.redirect("back");
					} else {

						if (vote == null) {
							var vote_v = {
								voteId: 12345
							}
							Vote.create(vote_v, function(err, voteV) {
								if (err) {
									console.log(err);
								} else {

                        console.log(req.body.chairman);
                        // console.log(req.body.chairlady);
                        // console.log(vote.chairman);
                        // console.log(vote.chairlady);
                        voteV.chairman.push(req.body.chairman);
                        // vote.chairlady.push(req.body.chairlady);
                        // vote.secretary.push(req.body.secretary);
                        // vote.academic_rep.push(req.body.academic_rep);
                        // vote.clubs_rep.push(req.body.clubs_rep);
                        // vote.entertainment_rep.push(req.body.entertainment_rep);
                        // vote.it_rep.push(req.body.it_rep);
                        // vote.sports_rep.push(req.body.sports_rep);
                        // vote.wellness_rep.push(req.body.wellness_rep);
                        // vote.treasurer.push(req.body.treasurer);
                        // vote.honor_council.push(req.body.honor_council);
                        vote.save();
                        console.log(vote);
                    }
                });
            } else {

                vote.chairman.push(req.body.chairman);
            }
        }
                    res.redirect("/");
                });
            

            } else {
                req.flash("error", "You can only vote once.");
                console.log(err);
                res.redirect("back");
            }
        
        }
    });
    
});
        


//sidebar route
// router.get("/sidebar", middleware.isLoggedIn, function(req, res) {
//     res.render("sidebar");
//     });


//Grow route
// router.get("/grow", middleware.isLoggedIn, function(req, res) {
//     res.render("grow");
//     });
//feedback route
// router.get("/feedback", middleware.isLoggedIn, function(req, res) {
//     res.render("feedback");
// });
// router.post("/feedback/submit/:id", middleware.isLoggedIn, function(req, res) {
//     var feed ={
//         feedbackId:12345,
//         feedback1: req.body
//     }
//     //console.log(req.body)
//     Feedback.create(feed, function(err, feedback)
//                    {
//         if (err){
//             console.log(err);
//         }
//         else
//             {
//               res.send("Hello") 
//                 console.log(feedback.feedback1);
                   
//             }
//     })
    
// });

//Unhash get route
router.get("/unhash", middleware.isLoggedIn, function(req, res) {
    res.render("unhash");
});


//Unhash post route
router.post("/unhash", middleware.isLoggedIn, function(req, res) {
    if(req.body.hashId == base_hash) {
        res.redirect("/resultsss");
    } else {
        User.findOne({hash_id : req.body.hashId}, function(err, user) {
            if(err) {
                req.flash("error", "An error has occurred. Your hash is invalid.");
                console.log(err);
                res.redirect("back");
            } else if(user == null) {
                req.flash("error", "An error has occurred. Your hash is null.");
                console.log(err);
                res.redirect("back");
            } else {
                console.log(user);
                res.render("unhash", {user : user});
            }
        });
    }
});

//Hashes Route
router.get("/hashes/:id", middleware.isLoggedIn, function(req, res) {
    User.find({hasVoted : true}, function(err, users) {
        if(err) {
            req.flash("error", "An error has occurred.");
            console.log(err);
            res.redirect("back");
        } else {
            User.findById(req.params.id, function(err, user) {
                if(err) {
                    req.flash("error", "An error has occurred.");
                    console.log(err);
                    res.redirect("back");
                } else {
                    var userhash = "3456ujnfhgfdinofgtybgs9otg";
                    if(user.hash_id) {
                        userhash = user.hash_id;
                    }

                    var user_hashes = [];
                    for (var i = 0; i < users.length; i++) {
                        user_hashes.push(users[i].hash_id);
                    }

                    res.render("hashes", {user_hashes : user_hashes, userhash : userhash});
                }
            });
        }
    });
});


//Messages route
router.get("/display", middleware.isLoggedIn, function(re, res){
    
    Message.findOne({messagesId:12345,}, function(err, message){
        if(err) {

            req.flash("error", "An error has occured.You hash is invalid");
            console.log(err);
            res.redirect("back");
        } else {
            
            var name = message.name,
                email = message.email,
                subject = message.subject;

             res.render("display", {
                name : name,
                email : email,
                subject : subject,
                
            });

        }
    })
});


//Results route
router.get("/resultsss", middleware.isLoggedIn, function(req, res) {
    Vote.findOne({voteId : 12345}, function(err, vote) {
        if(err) {
            req.flash("error", "An error has occurred. Your hash is invalid.");
            console.log(err);
            res.redirect("back");
        } else {
            var totalVotes = 0,
                chairman_v = 0;
                // chairlady_v = 0,
                // secretary_v = 0,
                // academic_rep_v = 0,
                // clubs_rep_v = 0,
                // entertainment_rep_v = 0,
                // it_rep_v = 0,
                // sports_rep_v = 0,
                // wellness_rep_v = 0,
                // treasurer_v = 0,
                // honor_council_v = 0;

            chairman_v = vote.chairman.length;        
            // chairlady_v = vote.chairlady.length;
            // secretary_v = vote.secretary.length;
            // academic_rep_v = vote.academic_rep.length;
            // clubs_rep_v = vote.clubs_rep.length;
            // entertainment_rep_v = vote.entertainment_rep.length;
            // it_rep_v = vote.it_rep.length;
            // sports_rep_v = vote.sports_rep.length;
            // wellness_rep_v = vote.wellness_rep.length;
            // treasurer_v = vote.treasurer.length;
            // honor_council_v = vote.honor_council.length;
            totalVotes = chairman_v ;
            // + chairlady_v + secretary_v + academic_rep_v + clubs_rep_v +
            // entertainment_rep_v + it_rep_v + sports_rep_v + wellness_rep_v + treasurer_v + honor_council_v

            var henry = 0,
                roli = 0,
                adnan = 0,
                jimcale = 0;
                // tania = 0,
                // oluwa = 0,
                // dorcas = 0,
                // tomiwa = 0,
                // tago = 0,
                // pape = 0,
                // ashley = 0,
                // gerry = 0,
                // kiinga = 0,
                // dennis = 0,
                // ubong = 0,
                // tiyin = 0,
                // jesse = 0,
                // ihsane = 0,
                // jonathan = 0,
                // rihab = 0;

            first();

            function first() {
                for (var i = 0; i < vote.chairman.length; i++) {
                    if (vote.chairman[i] == "Henry Victor") {
                        henry += 1;
                    } else if (vote.chairman[i] == "Adnan Kaka Shafi") {
                        adnan += 1;
                    } else if (vote.chairman[i] == "Rolinhlanhla Zinyemba") {
                        roli += 1;
                    } else if (vote.chairman[i] == "Jimcale") {
                        jimcale += 1;
                    }
                };

               // second();
            
            // function second() {
            //     for (var i = 0; i < vote.chairlady.length; i++) {
            //         if (vote.chairlady[i] == "Tania Twinoburyo") {
            //             tania += 1;
            //         } else if (vote.chairlady[i] == "Oluwakayomide Christiana") {
            //             oluwa += 1;
            //         } 
            //     };
            //     third();
            // }

            // function third() {
            //     for (var i = 0; i < vote.secretary.length; i++) {
            //         if (vote.secretary[i] == "Dorcas K Mendin") {
            //             dorcas += 1;
            //         } 
            //     };
            //     fourth();
            // }

            // function fourth() {
            //     for (var i = 0; i < vote.academic_rep.length; i++) {
            //         if (vote.academic_rep[i] == "Ayotomiwa Promise") {
            //             tomiwa += 1;
            //         } 
            //     };
            //     fifth();
            // }

            // function fifth() {
            //     for (var i = 0; i < vote.clubs_rep.length; i++) {
            //         if (vote.clubs_rep[i] == "David Tago") {
            //             tago += 1;
            //         } 
            //     };
            //     sixth();
            // }

            // function sixth() {
            //     for (var i = 0; i < vote.entertainment_rep.length; i++) {
            //         if (vote.entertainment_rep[i] == "Pape Abdul") {
            //             pape += 1;
            //         } else if (vote.entertainment_rep[i] == "Ashley Omondi") {
            //             ashley += 1;
            //         } 
            //     };
            //     seventh();
            // }

            // function seventh() {
            //     for (var i = 0; i < vote.it_rep.length; i++) {
            //         if (vote.it_rep[i] == "Gerry Migwi") {
            //             gerry += 1;
            //         } 
            //     };
            //     eighth();
            // }

            // function eighth() {
            //     for (var i = 0; i < vote.sports_rep.length; i++) {
            //         if (vote.sports_rep[i] == "Dennis Mwangi") {
            //             dennis += 1;
            //         } else if (vote.sports_rep[i] == "Kiinga Kioi") {
            //             kiinga += 1;
            //         } 
            //     };
            //     nineth();
            // }

            // function nineth() {
            //     for (var i = 0; i < vote.wellness_rep.length; i++) {
            //         if (vote.wellness_rep[i] == "Tiyinoluwa Omotosho") {
            //             tiyin += 1;
            //         } else if (vote.wellness_rep[i] == "Ubongabasi Asuquo") {
            //             ubong += 1;
            //         } 
            //     };
            //     tenth();
            // }

            // function tenth() {
            //     for (var i = 0; i < vote.treasurer.length; i++) {
            //         if (vote.treasurer[i] == "Jesse Mwangi") {
            //             jesse += 1;
            //         } 
            //     };
            //     eleventh();
            // }

            // function eleventh() {
            //     for (var i = 0; i < vote.honor_council.length; i++) {
            //         if (vote.honor_council[i] == "Jonathan Banza") {
            //             jonathan += 1;
            //         } else if (vote.honor_council[i] == "Rihab Bouabdallah") {
            //             rihab += 1;
            //         } 
            //     };

                res.render("results", {
                    henry : henry,
                    roli : roli,
                    adnan : adnan,
                    jimcale : jimcale
                    // tania : tania,
                    // oluwa : oluwa,
                    // dorcas : dorcas,
                    // tomiwa : tomiwa,
                    // tago : tago,
                    // pape : pape,
                    // ashley : ashley,
                    // gerry : gerry,
                    // kiinga : kiinga,
                    // dennis : dennis,
                    // ubong : ubong,
                    // tiyin : tiyin,
                    // jesse : jesse,
                    // ihsane : ihsane,
                    // jonathan : jonathan,
                    // rihab : rihab
                });
            }
        }
    });
});








module.exports = router;