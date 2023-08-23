// JS const and var
const amount = document.getElementById("inputAmt");
const depositeBtn = document.getElementById("depositeBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const balanceDiv = document.getElementById("balanceDiv");

// Class
class BankAcc {
    constructor(money) {  //fname, lname, accNo,
        this.balance = money;
        // this.firstName = fname;
        // this.lastName = lname;
        // this.accountNo = accNo;
    }

    getBalance() {
        console.log(`Balance: ${this.balance}`);
    }

    deposite(money) {
        this.balance += money;
        console.log(`Deposite successful!`);
        console.log(`Current Balance: $${this.balance}`);
    }

    withdraw(money) {
        if(this.balance - money < 0) {
            console.log(`Not enough balance in your account :(`);
            console.log(`Current Balance:  $${this.balance}`);
            return;is
        }
        this.balance -= money;
        console.log(`Money successfuly withdrawed!`);
        console.log(`Current Balance: $${this.balance}`);
    }
}

const user1 = new BankAcc(100);
user1.getBalance();
user1.deposite(100);
user1.withdraw(50);
user1.withdraw(150);

depositeBtn.onclick = () => {
    const amt = Number(amount.value);
    user1.deposite(amt);
    balanceDiv.innerHTML = `<h3>Balance: ${user1.balance}</h3>`
}

withdrawBtn.onclick = () => {
    const amt = Number(amount.value);
    if(amt <= 0) {
        console.log("Can't withdraw $0. Enter more amount.");
        return;
    }
    user1.withdraw(amt);
    balanceDiv.innerHTML = `<h3>Balance: ${user1.balance}</h3>`;
}

document.addEventListener("keydown", (event) => {
    console.log(`Ouch You Pressed Me (${event.key} Key)`);
    document.getElementById("punch").play();
})

