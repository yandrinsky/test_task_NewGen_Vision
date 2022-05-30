let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];
let requiredRange4 = [500, null];

//Функция по нахождению подходящий курсов
function findCourses(courses, range){
    const res = [];
    for (let i = 0; i < courses.length; i++) {
        let course = courses[i];
        if(range[0] !== null){
            //Если начало диапазона пользователя больше конца диапазона курса
            if(course.prices[1] !== null && range[0] > course.prices[1]){
                continue;
            }
        }
        if(range[1] !== null){
            //Если конец диапазона пользователя меньше начала диапазона курса
            if(course.prices[0] !== null && range[1] < course.prices[0]){
                continue;
            }
        }
        res.push(course);
    }
    return res;
}

//Функция соритировки курсов по цене
function sortCourses(target, type) {
    const res = [...target]; //Чтобы не мутировать входной массив
    if (type === "toTop") {
        return res.sort((a, b) => {
            //Если начало диапазона null, значит самый дешёвый
            if (a.prices[0] === null) return false;
            if (b.prices[0] === null) return true;
            return a.prices[0] > b.prices[0];
        });
    } else {
        return res.sort((a, b) => {
            //Если конец диапазона null, значит самый дорогой
            if (a.prices[1] === null) return false;
            if (b.prices[1] === null) return true;
            return a.prices[1] < b.prices[1];
        });
    }
}

//У меня в node соритровка массива с объектами не работает, в браузере всё отлично
console.log(sortCourses(courses, "toTow"));

console.log(findCourses(courses, requiredRange1));
console.log(findCourses(courses, requiredRange2));
console.log(findCourses(courses, requiredRange3));
console.log(findCourses(courses, requiredRange4));
