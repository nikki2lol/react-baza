"use strict";
class CarImpl {
    constructor(mark, model, year, engine, transmission, tires) {
        this.mark = mark;
        this.model = model;
        this.year = year;
        this.engine = engine;
        this.transmission = transmission;
        this.tires = tires;
    }
    displayInfo() {
        console.log(`Car Info: ${this.year} ${this.mark} ${this.model}`);
        console.log(`Engine: ${this.engine.type}, Horsepower: ${this.engine.horsepower}, Running: ${this.engine.isRunning}`);
        console.log(`Transmission: ${this.transmission.type}, Current Gear: ${this.transmission.gear}`);
        console.log(`Tires: ${this.tires.brand}, Pressure: ${this.tires.pressure} PSI`);
    }
    updateTirePressure(newPressure) {
        this.tires.pressure = newPressure;
        console.log(`Updated tire pressure to ${newPressure} PSI.`);
    }
}
class EngineImpl {
    constructor(type, horsepower) {
        this.type = type;
        this.horsepower = horsepower;
        this.isRunning = false;
    }
    start() {
        this.isRunning = true;
        console.log(`Engine started.`);
    }
    stop() {
        this.isRunning = false;
        console.log(`Engine stopped.`);
    }
}
class TransmissionImpl {
    constructor(type) {
        this.type = type;
        this.gear = 1; // Начальная передача
    }
    shiftUp() {
        this.gear++;
        console.log(`Shifted up to gear ${this.gear}.`);
    }
    shiftDown() {
        if (this.gear > 1) {
            this.gear--;
            console.log(`Shifted down to gear ${this.gear}.`);
        }
        else {
            console.log(`Already in the lowest gear.`);
        }
    }
}
class TiresImpl {
    constructor(brand, pressure) {
        this.brand = brand;
        this.pressure = pressure;
    }
    checkPressure() {
        console.log(`Current tire pressure is ${this.pressure} PSI.`);
    }
}
// Создаем экземпляры подсистем
const engine = new EngineImpl('V8', 450);
const transmission = new TransmissionImpl('Automatic');
const tires = new TiresImpl('Michelin', 32);
// Создаем экземпляр автомобиля
const myCar = new CarImpl('Ford', 'Mustang', 2020, engine, transmission, tires);
// Выводим информацию об автомобиле
myCar.displayInfo();
// Запускаем двигатель
engine.start();
// Проверяем давление в шинах
tires.checkPressure();
// Обновляем давление в шинах
myCar.updateTirePressure(34);
// Смена передачи
transmission.shiftUp();
transmission.shiftDown();
// Останавливаем двигатель
engine.stop();
