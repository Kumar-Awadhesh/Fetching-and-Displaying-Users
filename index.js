document.getElementById("fetchUsers").addEventListener("click", function(){
    fetch("https://reqres.in/api/users?page=2").then(res =>{
        if(!res.ok){
            throw new error("network provider not valid!");
        };
        return res.json();
    }).then(data =>{
        fetchUser(data.data);
    }).catch(error =>{
        console.log("somthing went wrong", error);
    });
});

function fetchUser(users){
    let content = document.getElementById("content");
        content.innerHTML = "";

    users.forEach(user => {
        
        let container = document.createElement("div");

        let image = document.createElement("img");
        image.src = user.avatar

        let first_name = document.createElement("h3");
        first_name.innerText = user.first_name;

        let last_name = document.createElement("h3");
        last_name.innerText = user.last_name;

        let email = document.createElement("p");
        email.innerText = user.email;

        container.append(image, first_name, last_name, email);

        content.append(container);
    });
};