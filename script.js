//var name = document.getElementById("name").value;
    
    function Welcome(){

                    var name = document.getElementById("name").value;
                    alert("Hi" + " " +  name + " " + ")");

                }

know = {
                "hello" : "hi",
                "Hello" : "hello",
                "Hi" : "hi",
                "hi" : "Hi",
                "whats up" : "pretty good",
                "wassup" : "pretty good",
                "Whats up" : "pretty good",
                "Wassup" : "pretty good",
                "how are you?" : "good",
                "How are you?" : "good",
                "how are you ?" : "good",
                "How are you ?" : "good",
                "ok" : ":)",
                "Ok" : ":)",
                "okay" : ":)",
                "bye" : "goodbye",
                "Bye" : "Goodbye",
                "fuck off" : "u better don't fuck with me",
                "Fuck off" : "u better don't fuck with me",
                "Fuck you" : "now you're fucked",
                "fuck you" : "now you're fucked",
                "Sorry" : "apologies accepted",
                "sorry" : "apologies accepted",
                "Sorry" : "apologies accepted",
                "sorry" : "apologies accepted",
                "fuck" : "u better stop cursing",
                "Fuck" : "u better stop cursing",
                "suck my cock" : "Sorry,but I'm not able to be gay,I'm just a bot",
                "Suck my cock" : "Sorry,but I'm not able to be gay,I'm just a bot",
                "suck my dick" : "Sorry,but I'm not able to be gay,I'm just a bot",
                "Suck my dick" : "Sorry,but I'm not able to be gay,I'm just a bot",
                "bitch" : "yes you are",
                "Bitch" : "yes you are",
                "Fuck you bitch" : "u better watch I don't fuck you first",
                "fuck you bitch" : "u better watch I don't fuck you first",


            };
            
            function talk() {

                var name = document.getElementById("name").value;
                var user = document.getElementById("userBox").value;
                document.getElementById("userBox").value = "";
                
                 if (name == "") {
                        
                        document.getElementById("chatRez").innerHTML += "USER : " + " " + " " + user+"<br>";
                if (user in know) {
                    document.getElementById("chatRez").innerHTML += "BOT : " + " " + " " + know[user]+"<br>";
                } else {
                    document.getElementById("chatRez").innerHTML += "BOT : " + "I don't understand...<br>";
                }


                } else {
                document.getElementById("chatRez").innerHTML += name + " : " + " " + " " + user+"<br>";
                if (user in know) {
                    document.getElementById("chatRez").innerHTML += "BOT : " + " " + " " + know[user]+"<br>";
                } else {
                    document.getElementById("chatRez").innerHTML += "BOT : " + "I don't understand...<br>";
                }

            }
            
}

            

                