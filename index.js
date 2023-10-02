let tg = window.Telegram.WebApp;

window.addEventListener("DOMContentLoaded", (event) => {
    let btn = document.getElementById("my_kek_button");

    btn.addEventListener("click", function() {
        var captain_name = document.getElementById("captain_name")
        var group = document.getElementById("group")
        var phone = document.getElementById("phone")
        var team_name = document.getElementById("team_name")
        var team_size = document.getElementById("team_size")

        let arr = [captain_name, group, phone, team_name, team_size];
        let i = 0;
        while (i < arr.length) {
            if (arr[i].value == "") {
                arr[i].style.borderColor="red";
            }
            i = i + 1;
        }
        try {
            postData().then((response) => {
                if (response.status !== 200) {
                    alert("Код ответа НЕ 200!")
                }
            })
        } catch (error) {
            alert(error)
        }
        
    });
});

async function postData() {
    const response = await fetch("https://www.quiz-on.ru/api/register", {
        mode: 'cors',
        method: "POST",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({
            userId: 1,
            captain_name: captain_name.value,
            group: group.value,
            phone: phone.value,
            team_name: team_name.value,
            team_size: team_size.value,
        }),
    })
    return response;
}
