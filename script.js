var dateCT = new Date("Jan 1, 2023  0:0:0").getTime();

const audio = new Audio("bell.mp3"),
    link = document.getElementById("info");

function liveViews(e) {
    document.getElementById("visits").innerText = e.value;
}

link.addEventListener("click", function() {
        alert("Website information: \n\nAuthor Name: Axel \nDiscord: Fumioo#3602 \nIG: @axellfumioo\n\nKamu dapat share website ini menggunakan link \nhttps://2023.axellfumioo.my.id/");
    }),

    console.log("Hallo semua, terimakasih telah mengunjungi website saya."),
    console.log("Sejujurnya saya buat website ini karna saya bosan hehe.");

var x = setInterval(function() {
    var e = new Date().getTime(),
        n = dateCT - e;
    (document.getElementById("timer").innerHTML = Math.floor(n / 864e5) + " hari " + Math.floor((n % 864e5) / 36e5) + " jam  " + Math.floor((n % 36e5) / 6e4) + " menit dan " + Math.floor((n % 6e4) / 1e3) + " detik!"),
    n < 0 && (clearInterval(x), audio.play(), (document.getElementById("timer").innerHTML = "HAPPY NEW YEARS! \uD83C\uDF89\uD83C\uDF89"));
}, 1e3);