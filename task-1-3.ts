// Базовый класс для описания банковского счета. Абстрактный, так как напрямую мы его не вызываем, только как депозитный или кредитный аккаунт.
abstract class Account {
    protected balance: number;

    protected constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    getBalance(): number {
        return this.balance;
    }

    abstract deposit(amount: number): void;
    abstract withdraw(amount: number): void;
}

// Класс для дебетового счета
class DebitAccount extends Account {
    constructor(initialBalance: number) {
        super(initialBalance);
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            console.log("Сумма пополнения должна быть положительной.");
            return;
        }
        this.balance += amount;
        console.log(`Пополнен дебетовый счет на ${amount}. Текущий баланс: ${this.getBalance()}`);
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            console.log("Сумма снятия должна быть положительной.");
            return;
        }
        if (amount > this.balance) {
            console.log("Недостаточно средств на счете.");
            return;
        }
        this.balance -= amount;
        console.log(`Снято с дебетового счета ${amount}. Текущий баланс: ${this.getBalance()}`);
    }
}

// Класс для кредитного счета
class CreditAccount extends Account {
    private readonly creditLimit: number;

    constructor(initialBalance: number, creditLimit: number) {
        super(initialBalance);
        this.creditLimit = creditLimit;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            console.log("Сумма пополнения должна быть положительной.");
            return;
        }
        this.balance += amount;
        console.log(`Пополнен кредитный счет на ${amount}. Текущий баланс: ${this.getBalance()}`);
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            console.log("Сумма снятия должна быть положительной.");
            return;
        }
        if (this.balance + this.creditLimit < amount) {
            console.log("Превышен кредитный лимит.");
            return;
        }
        this.balance -= amount;
        console.log(`Снято с кредитного счета ${amount}. Текущий баланс: ${this.getBalance()}`);
    }

    getDebt(): number {
        return this.balance < 0 ? Math.abs(this.balance) : 0;
    }
}

// Пример использования классов
const debitAccount = new DebitAccount(1000);
debitAccount.deposit(500);
debitAccount.withdraw(300);
debitAccount.withdraw(1500); // недостаточно средств

const creditAccount = new CreditAccount(500, 200);
creditAccount.deposit(300);
creditAccount.withdraw(600); // доступно, так как лимит позволяет
creditAccount.withdraw(300); // превышение лимита
console.log(`Текущий долг по кредитному счету: ${creditAccount.getDebt()}`);