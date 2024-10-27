// Функции для выполнения арифметических операций

// Сложение
function add(a: number | string, b: number | string, base: 10 | 2 | 16 = 10): string {
    const numA = parseInt(a.toString(), base);
    const numB = parseInt(b.toString(), base);
    const result = numA + numB;
    return result.toString(base);
}

// Вычитание
function subtract(a: number | string, b: number | string, base: 10 | 2 | 16 = 10): string {
    const numA = parseInt(a.toString(), base);
    const numB = parseInt(b.toString(), base);
    const result = numA - numB;
    return result.toString(base);
}

// Умножение
function multiply(a: number | string, b: number | string, base: 10 | 2 | 16 = 10): string {
    const numA = parseInt(a.toString(), base);
    const numB = parseInt(b.toString(), base);
    const result = numA * numB;
    return result.toString(base);
}

// Деление
function divide(a: number | string, b: number | string, base: 10 | 2 | 16 = 10): string {
    const numA = parseInt(a.toString(), base);
    const numB = parseInt(b.toString(), base);

    if (numB === 0) {
        throw new Error("Деление на ноль!");
    }

    const result = numA / numB;
    return result.toString(base);
}

// Примеры вызова
console.log("Демонстрация работы калькулятора:");

const decA = "10"; // Десятичное число
const decB = "5"; // Десятичное число

console.log(`Сложение (десятичные): ${decA} + ${decB} = ${add(decA, decB)}`);
console.log(`Вычитание (десятичные): ${decA} - ${decB} = ${subtract(decA, decB)}`);
console.log(`Умножение (десятичные): ${decA} * ${decB} = ${multiply(decA, decB)}`);
console.log(`Деление (десятичные): ${decA} / ${decB} = ${divide(decA, decB)}`);

const binA = "1010"; // Двоичное число
const binB = "101"; // Двоичное число

console.log(`Сложение (двоичные): ${binA} + ${binB} = ${add(binA, binB, 2)}`);
console.log(`Вычитание (двоичные): ${binA} - ${binB} = ${subtract(binA, binB, 2)}`);
console.log(`Умножение (двоичные): ${binA} * ${binB} = ${multiply(binA, binB, 2)}`);
console.log(`Деление (двоичные): ${binA} / ${binB} = ${divide(binA, binB, 2)}`);

const hexA = "A"; // Шестнадцатеричное число
const hexB = "5"; // Шестнадцатеричное число

console.log(`Сложение (шестнадцатеричные): ${hexA} + ${hexB} = ${add(hexA, hexB, 16)}`);
console.log(`Вычитание (шестнадцатеричные): ${hexA} - ${hexB} = ${subtract(hexA, hexB, 16)}`);
console.log(`Умножение (шестнадцатеричные): ${hexA} * ${hexB} = ${multiply(hexA, hexB, 16)}`);
console.log(`Деление (шестнадцатеричные): ${hexA} / ${hexB} = ${divide(hexA, hexB, 16)}`);