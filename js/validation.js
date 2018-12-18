$(function() {
            $("#form").validate({
                errorPlacement: function(error, element) {
                    error.appendTo(element.parent());
                    if (element.attr("name") == "color"
                        || element.attr("name") == "music"
                        || element.attr("name") == "car"
                        || element.attr("name") == "food"
                        || element.attr("name") == "genres[]"
                        || element.attr("name") == "comment") {
                        error.prependTo(element.parent());
                    }
                },
                success: function(label) {
                    label.parent().removeClass("error-parent");
                },
                highlight: function(element, errorClass) {
                    $(element).parent().addClass("error-parent");
                    $(element).parent().find(".error").fadeOut(function() {
                        $(this).fadeIn();
                    });
                },
                rules: {
                    username: {
                        required: true,
                        minlength: 6
                    },
                    password: {
                        required: true,
                        minlength: 9
                    },
                    password_confirm: {
                        equalTo: "#password",
                        minlength: 9
                    },
                    color: {
                        required: true
                    },
                    music: {
                        required: true
                    },
                    car: {
                        required: true
                    },
                    food: {
                        required: true
                    },
                    email: {
                      required: true,
                      email: true
                    },
                    'genres[]': {
                        required: true,
                        minlength: 4
                    },
                    comment: {
                      required: true,
                      minlength: 10
                    }

                },
                messages: {
                    username: {
                        required: "Please enter a username",
                        minlength: "Username Must consist of 6 letters"
                    },
                    password: {
                        required: "Please provide a password",
                        minlength: "Password must be at least 9 characters"
                    },
                    password_confirm: {
                        required: "Passwords must match"
                    },
                    email: {
                      required: "You must provide a valid email"
                    },
                    'genres[]': {
                        required: "Please choose at least 4 Genres. <br>",
                        minlength: "You must choose at least 4 Genres."
                    },
                    comment: {
                        required: "Please enter a comment",
                        minlength: "Your comment must consist of at least 10 characters<br>"
                    },
                    color: {
                        required: "Select a favorite color! <br>",
                    },
                    music: {
                        required: "Select a favorite music genre! <br>",
                    },
                    car: {
                        required: "Select a favorite brand of car! <br>",
                    },
                    food: {
                        required: "Select a favorite food! <br>",
                    }
                }
            });


        });
