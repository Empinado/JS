//Создать класс User и статус премиум аккаунта

class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  get userinfo() {
    return console.log(
      `Информация о пользователе: Имя - ${this.name}, Фамилия - ${this.surname}`
    );
  }
}

class RegularUser extends User {
  constructor(name, surname) {
    super(name, surname);
  }
}

class PremiumUser extends User {
  constructor(name, surname) {
    super(name, surname);
    this.premiumAccount = null;
  }

  setPremium() {
    this.premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1); //Установление срока премиума на год вперед
  }
}

function getAccountInfo(user) {
  if (user instanceof PremiumUser) {
    console.log(
      user.premiumAccount ?? "Информация о премиуме отсуствует",
      user.name,
      user.surname
    );
  } else if (user instanceof RegularUser) {
    console.log(`Инфо: ${user.name}, ${user.surname}`);
  } else {
    console.log("Тип пользователя неопределен");
  }
}

const rUser = new RegularUser("name1", "surname1");
getAccountInfo(rUser);

const pUser = new PremiumUser("name2", "surname2");
pUser.setPremium();
getAccountInfo(pUser);
console.log(pUser);

const pUser2 = new PremiumUser("name3", "surname3");
getAccountInfo(pUser2);
