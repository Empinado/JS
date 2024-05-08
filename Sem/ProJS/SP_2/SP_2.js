//Класс для управления банковским счетом. Класс должен содержать приват свйоство #balance
//get balance
//method deposit(amount) пополнение баланса
//withdraw(amount) снятие со счета

class BankAccount {
  #balance = 0;

  constructor(amount) {
    if (amount < 0) {
      throw new Error("Отрицательный баланс для инициализации счета");
    }
    this.#balance = amount;
  }

  get balance() {
    return this.#balance;
  }

  //   set balance(amount) {
  //     this.#balance = amount;
  //   }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error(
        "Введено отрицательное или равное 0 число для пополнения счета"
      );
    }
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error(
        "Введено отрицательное или равное 0 число для пополнения счета"
      );
    }
    if (this.#balance - amount < 0) {
      throw new Error("Сумма для снятия больше суммы счета");
    }
    this.#balance -= amount;
    return this.#balance;
  }
}

const bankAccount1 = new BankAccount(0);

console.log(bankAccount1.balance);
bankAccount1.deposit(1500);
console.log(bankAccount1.balance);
bankAccount1.withdraw(1000);
console.log(bankAccount1.balance);
bankAccount1.balance = 300;
console.log(bankAccount1.balance);
// bankAccount1.withdraw(1000);
// console.log(bankAccount1.balance);
