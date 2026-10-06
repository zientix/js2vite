console.log("Katalog warsztatów uruchomiony")
const kursJS = {
    type: "Kurs JS",
    seats: 12,
    enrolled: 5
}

const kursCPP = {
    type: "Nauka C++",
    seats: 24,
    enrolled: 19
}

const kursy = [kursJS, kursCPP];
let wybranyKurs = kursy[0];
console.log(kursy);

function getCoursesInformation() {
    for (let i = 0; i < kursy.length; i++) {
        view(kursy[i])
    }
}

function view(wybrany = wybranyKurs) {
    console.log(`Kurs: ${wybrany.type} ${wybrany.enrolled >= wybrany.seats ? "zamknięty" : "otwarty"}`)
    getFreeSeats(wybrany);
}

function getFreeSeats(wybrany = wybranyKurs) {
    console.log(`Wolnych miejsc: ${wybrany.seats - wybrany.enrolled}`)
}

getCoursesInformation();