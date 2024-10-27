// Интерфейс для двигателя
interface Engine {
    type: string;
    horsepower: number;
    isRunning: boolean;
    start(): void;
    stop(): void;
}

// Интерфейс для трансмиссии
interface Transmission {
    type: string;
    gear: number;
    shiftUp(): void;
    shiftDown(): void;
}

// Интерфейс для шин
interface Tires {
    brand: string;
    pressure: number;
    checkPressure(): void;
}

// Главный интерфейс для автомобиля
interface Car {
    mark: string;
    model: string;
    year: number;
    engine: Engine;
    transmission: Transmission;
    tires: Tires;

    displayInfo(): void;
    updateTirePressure(newPressure: number): void;
}

class CarImpl implements Car {
    mark: string;
    model: string;
    year: number;
    engine: Engine;
    transmission: Transmission;
    tires: Tires;

    constructor(mark: string, model: string, year: number, engine: Engine, transmission: Transmission, tires: Tires) {
        this.mark = mark;
        this.model = model;
        this.year = year;
        this.engine = engine;
        this.transmission = transmission;
        this.tires = tires;
    }

    displayInfo(): void {
        console.log(`Car Info: ${this.year} ${this.mark} ${this.model}`);
        console.log(`Engine: ${this.engine.type}, Horsepower: ${this.engine.horsepower}, Running: ${this.engine.isRunning}`);
        console.log(`Transmission: ${this.transmission.type}, Current Gear: ${this.transmission.gear}`);
        console.log(`Tires: ${this.tires.brand}, Pressure: ${this.tires.pressure} PSI`);
    }

    updateTirePressure(newPressure: number): void {
        this.tires.pressure = newPressure;
        console.log(`Updated tire pressure to ${newPressure} PSI.`);
    }
}

class EngineImpl implements Engine {
    type: string;
    horsepower: number;
    isRunning: boolean;

    constructor(type: string, horsepower: number) {
        this.type = type;
        this.horsepower = horsepower;
        this.isRunning = false;
    }

    start(): void {
        this.isRunning = true;
        console.log(`Engine started.`);
    }

    stop(): void {
        this.isRunning = false;
        console.log(`Engine stopped.`);
    }
}

class TransmissionImpl implements Transmission {
    type: string;
    gear: number;

    constructor(type: string) {
        this.type = type;
        this.gear = 1; // Начальная передача
    }

    shiftUp(): void {
        this.gear++;
        console.log(`Shifted up to gear ${this.gear}.`);
    }

    shiftDown(): void {
        if (this.gear > 1) {
            this.gear--;
            console.log(`Shifted down to gear ${this.gear}.`);
        } else {
            console.log(`Already in the lowest gear.`);
        }
    }
}

class TiresImpl implements Tires {
    brand: string;
    pressure: number;

    constructor(brand: string, pressure: number) {
        this.brand = brand;
        this.pressure = pressure;
    }

    checkPressure(): void {
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