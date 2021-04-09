
const login = document.querySelector('#login');
const email = document.querySelector("#email");
const password = document.querySelector("#password");
console.log(email.value)
// console.log(`email: ${email}, password: ${password}`);



login.addEventListener('click', function(e){
    e.preventDefault();
    const emailid = email.value;
    const pwd = password.value;
    postreq(emailid, pwd)
    
});
async function postreq(email,pwd){
    try {
        const options = {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: pwd
        }),
            headers: {
                "Content-Type": "application/json"
            }
        }

        console.log("Options:",options)
        let response = await fetch("https://reqres.in/api/login", options);
        console.log("Response: ", response);
        if (response.status == 200) {
            setTimeout(() => {
                window.location.replace('home.html');
                console.log("Post request Successful");
            }, 3000);
            
        } else {
                console.log("POST request failed");
        }
    } catch (error) {
        console.log("Error in post request");
    }

}