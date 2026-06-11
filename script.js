function transferMoney() {
    const sender = document.getElementById("sender").value;
    const receiver = document.getElementById("receiver").value;
    const amount = document.getElementById("amount").value;
    const message = document.getElementById("message");

    if (sender === "" || receiver === "" || amount === "") {
        message.innerHTML = "Please fill all fields!";
        message.style.color = "red";
        return;
    }

    if (amount <= 0) {
        message.innerHTML = "Enter a valid amount!";
        message.style.color = "red";
        return;
    }

    message.innerHTML =
        `₹${amount} transferred successfully from ${sender} to ${receiver}.`;

    message.style.color = "green";

    document.getElementById("sender").value = "";
    document.getElementById("receiver").value = "";
    document.getElementById("amount").value = "";
          }
