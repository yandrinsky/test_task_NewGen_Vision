# Тестовое задание NewGen Vision

Алгоритм нахождения подходящих по цене курсов следующий: 
Т.к. цена - это промежуток, то мы должны искать пересечения промежутков (даже в точке). Если промежутки имеют пересечение - вывести этот курс
Мой алгоритм идёт от обратного: если промежутки не имеют пересечений, пропустить курс
Условия отсутствия пересечений: 
1) начало диапазона фильтра больше, чем конец диапазона цены курса
2) конец диапазона фильтра меньше, чем чем начало диапазона цены курса

Как я понял null в цене курса - это отсуствие границы, и я воспринимал null в начальной позиции как минимально возможную цену, null в конечной позиции - каксимально возможную цену 

Алгоритм сортировки: 
1) От меньшего к большему
Сортируем по левой границе цены, null вопсринимается как наименьшее значение
2) От большего к меньшему
Сортируем по правой границе цены, null вопсринимается как наибольшее значение
