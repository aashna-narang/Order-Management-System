function login() {

    // var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var registeredID = [{
            
            "email": "sonu@gmail.com",
            "password": "sonu^%$ert"
        },
        {
            
            "email": "himanshu@gmail.com",
            "password": "himanshu^%$ert"
        },
        {
            
            "email": "aashna@gmail.com",
            "password": "aashna^%$ert"
        },
        {
            
            "email": "vishnu@gmail.com",
            "password": "vishnu^%$ert"
        },

        {
            
            "email": "umesh@gmail.com",
            "password": "umesh^%$ert"
        }

    ]


    const obj = registeredID.find(element =>  element.password == password && element.email == email);

    if (obj != null) {
        console.log(obj)
        window.location = "../order Managment/dashboard.html"

    } else {
        console.log(obj)
        const mailcheck = registeredID.find(element => element.email == email);
        // const usercheck = registeredID.find(element => element.username == username);
        const passcheck = registeredID.find(element => element.password == password);

        // var index=registeredID.findIndex(element => element.username == "aashna")
        // console.log(registeredID[index].username)

        // if (!usercheck) {
        //     document.getElementById("username").style.borderColor = "red";
        //     document.getElementById("user-error").style.display = "block";
        //     if (username == "") {
        //         document.getElementById("user-error").innerHTML = "Please Enter your Name";
        //     }
        //     // document.getElementById("username").value= username +"!";
        // }
        // if (usercheck) {
        //     document.getElementById("username").style.borderColor = "green";
        //     document.getElementById("user-error").style.display = "none";
        // }

        if (!mailcheck) {
            document.getElementById("email").style.borderColor = "red";
            document.getElementById("email-error").style.display = "block";
            if (email == "") {
                document.getElementById("email-error").innerHTML = "Please Enter your Email";
            }

        }
        if (mailcheck) {
            console.log(mailcheck)
            document.getElementById("email").style.borderColor = "green";
            document.getElementById("email-error").style.display = "none";
        }

        if (!passcheck) {
            document.getElementById("password").style.borderColor = "red";
            document.getElementById("pass-error").style.display = "block";
            if (password == "") {
                document.getElementById("pass-error").innerHTML = "Please Enter your Password";
            }
        }
        if (passcheck) {
            document.getElementById("password").style.borderColor = "green";
            document.getElementById("pass-error").style.display = "none";
        }

    }

}