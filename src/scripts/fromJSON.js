export function fromJSON() {;
    connect();

    async function connect() {
        try {
            const response = await fetch('/src/data/data.json');
            const data = await response.json();
            console.log(data);
            header(data["sections"]["header"]);
            hero(data["sections"]["hero"]);
            scroll(data["sections"]["scroll"]);
            gallery(data["sections"]["gallery"]);
            slider(data["sections"]["slider"]);
            observed(data["sections"]["observed"]);
            FAQ(data["sections"]["FAQ"]);
        } catch (error) {
            console.log('Ошибка', error);
        }
    }

    function header(data) {
        document.querySelector("#header .logo").setAttribute('href', data['logo']);
        ul(data);
        document.querySelector("#header .contacts").innerHTML = data['phone'];
    }

    function hero(data) {
        document.querySelector("#hero h2").innerHTML = data["title"];
        document.querySelector("#hero .slogan").innerHTML = data['slogan'];
        document.querySelector("#hero .comment p").innerHTML = data['comment'];
    }

    function scroll(data) {
        document.querySelector("#scroll h2").innerHTML = data["title"];
    }

    function gallery(data) {
        document.querySelector("#gallery h2").innerHTML = data["title"];
        
        let list = document.querySelectorAll('#gallery li a');
        list.forEach(element => {
            const array = Object.values(list);
            element.setAttribute('href', data["ul"][array.indexOf(element)]["previewUrl"])
            element.querySelector('img').setAttribute('href', data["ul"][array.indexOf(element)]["imageUrl"])
        });
    }

    function slider(data) {
        document.querySelector("#slider h2").innerHTML = data["title"];
        const list = document.querySelectorAll("#slider .swiper-slide");
        list.forEach(element => {
            const array = Object.values(list);
            element.querySelector('img').setAttribute('href', data["ul"][array.indexOf(element)]["imageUrl"])
        });
    }

    function observed(data) {
        document.querySelector("#observed h2").innerHTML = data["title"];
        document.querySelector("#observed img").setAttribute('href', data["imageUrl"]);
    }

    function FAQ(data) {
        document.querySelector("#FAQ h2").innerHTML = data["title"];
        const list = document.querySelectorAll("#FAQ li");
        list.forEach(element => {
            const array = Object.values(list);
            element.querySelector('.head h3').innerHTML = data["ul"][array.indexOf(element)]["head"];
            element.querySelector('.content p').innerHTML = data["ul"][array.indexOf(element)]["content"];
        });
    }

    function ul(data) {
        const ulList = document.querySelectorAll("#header ul");
        ulList.forEach(ul => {
            let list = ul.querySelectorAll('li a');
            list.forEach(element => {
                const array = Object.values(list);
                element.innerHTML = data["ul"][array.indexOf(element)]["content"] ?? "";
                element.setAttribute('href', data["ul"][array.indexOf(element)]["url"] ?? "")
            });
        });
    }
}