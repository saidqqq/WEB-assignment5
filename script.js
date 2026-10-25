
const userProfile = {
    name: "Anna",
    birthYear: 2007,
    isDeveloper: false,
    hobbies: ["Music", "Movies", "Reading"]
};

function calculateAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - userProfile.birthYear;
}

function countHobbies() {
    return userProfile.hobbies.length;
}

function displayProfile() {
    document.getElementById("profileName").textContent =
        userProfile.name;
    document.getElementById("profileYear").textContent =
        userProfile.birthYear;
    document.getElementById("profileAge").textContent =
        calculateAge();
    document.getElementById("profileDeveloper").textContent =
        userProfile.isDeveloper ? "Yes" : "No";
    document.getElementById("profileHobbies").textContent =
        countHobbies();
    document.getElementById("avatar").textContent =
        userProfile.name.charAt(0).toUpperCase();
}

function displayHobbies() {
    const hobbyList = document.getElementById("hobbyList");
    hobbyList.innerHTML = "";
    for (let i = 0; i < userProfile.hobbies.length; i++) {
        const li = document.createElement("li");
        li.textContent = userProfile.hobbies[i];
        hobbyList.appendChild(li);
    }
    document.getElementById("profileHobbies").textContent =
        countHobbies();
}

document.getElementById("profileForm")
    .addEventListener("submit", function(event) {
        event.preventDefault();
        const username =
            document.getElementById("username").value.trim();
        const birthYear =
            Number(document.getElementById("birthYear").value);
        const currentYear = new Date().getFullYear();
        if (username === "" ||
            !Number.isInteger(birthYear) ||
            birthYear < 1900 ||
            birthYear > currentYear) {
            alert("Please enter valid profile information.");
            return;
        }

        userProfile.name = username;
        userProfile.birthYear = birthYear;
        const developer = document.querySelector(
            'input[name="developer"]:checked'
        ).value;
        userProfile.isDeveloper = developer === "true";
        displayProfile();
        
        document.getElementById("profileMessage").textContent =
            "Profile updated successfully!";
    });

    document.getElementById("addBtn")
    .addEventListener("click", function() {
        const hobbyInput = document.getElementById("newHobby");
        const newHobby = hobbyInput.value.trim();

        if (newHobby === "") {
            alert("Please enter a hobby.");
            return;
        }
        userProfile.hobbies.push(newHobby);
        const li = document.createElement("li");
        li.textContent = newHobby;
        document.getElementById("hobbyList").appendChild(li);
        document.getElementById("profileHobbies").textContent =
            countHobbies();
        hobbyInput.value = "";
        
        document.getElementById("hobbyMessage").textContent =
            "Hobby added successfully!";
    });

    document.getElementById("removeBtn")
    .addEventListener("click", function() {
        const hobbyList = document.getElementById("hobbyList");
        if (userProfile.hobbies.length === 0) {
            alert("There are no hobbies to remove.");
            return;
        }
        userProfile.hobbies.pop();
        hobbyList.lastElementChild.remove();
        document.getElementById("profileHobbies").textContent =
            countHobbies();

        document.getElementById("hobbyMessage").textContent =
            "Last hobby removed successfully!";
    });

displayProfile();
displayHobbies();

console.log("Initial profile:", userProfile);
console.log("Age:", calculateAge());
console.log("Total hobbies:", countHobbies());

