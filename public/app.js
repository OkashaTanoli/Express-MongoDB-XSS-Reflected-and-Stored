// let tasks = [
//     {
//         text: "Hello world",
//         url: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/wnkhtwo4n0dhe6zmrbcs/Burj%20Khalifa%20Observation%20Deck%20Ticket%20in%20Dubai.jpg'
//     },
//     {
//         text: "Hello",
//         url: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/wnkhtwo4n0dhe6zmrbcs/Burj%20Khalifa%20Observation%20Deck%20Ticket%20in%20Dubai.jpg'
//     },
// ];


document.querySelector(".head").addEventListener("submit", function (event) {
    event.preventDefault();
    let data = document.querySelector(".input1");
    let img = document.querySelector(".input2");
    console.log(data.value)
    fetch('http://localhost:3123/api',
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: data.value,image:img.value })
        }
    )
        .then(() => {
            displayTasks();
        })
        .catch((err) => {
            console.log('front end ', err)
        });
});

function displayTasks() {
    let orderList = document.querySelector('.tasks')
    fetch('http://localhost:3123/api')
        .then(response => response.json())
        .then(info => {
            let {data} = info
            let tasksList = data.map((data) => {
                return `<li><img src=${data.image} width="100px"><p>${data.text}</p></li>`
            }).join('')
            orderList.innerHTML = tasksList
        });

}

displayTasks();


