let tg = window.Telegram.WebApp;

window.addEventListener("DOMContentLoaded", (event) => {
    let btn = document.getElementById("my_kek_button");

    btn.addEventListener("click", function() {
        var captain_name = document.getElementById("captain_name")
        var group = document.getElementById("group")
        var phone = document.getElementById("phone")
        var team_name = document.getElementById("team_name")
        var team_size = document.getElementById("team_size")
        var captain_name = document.getElementById("captain_name")

        let arr = [captain_name, group, phone, team_name, team_size, captain_name];
        let i = 0;
        for (i < arr.length) {
            if (arr[i].value == "") {
                arr[i].style.borderColor="red"
            }
        }

        fetch("http://localhost:8000/register", {
            method: "POST",
            body: JSON.stringify({
                userId: 1,
                captain_name: captain_name.value,
                group: group.value,
                phone: phone.value,
                team_name: team_name.value,
                team_size: team_size.value,
                cpatain_name: captain_name.value,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    });
});
