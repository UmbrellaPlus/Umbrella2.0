document.getElementById("tg").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const phone = document.getElementById("user_phone").value;
  
    if (phone === `+380` && phone.length < 13) {
      window.alert("Введите номер телефона/Введіть номер телефону");
    } else {
      document.querySelector("input").style.display = "none";
      document.querySelector(".main-consult button").style.display = "none";
  
      axios
        .post("https://umbrella-bot-edgx.onrender.com/sendMessage", {
          phone: phone,
        })
        .then((res) => {
          this.user_phone.value = "";
          document.getElementById("success").style.display = "block";
        })
        .catch((err) => {
          console.error(err);
          alert("Ошибка при отправке сообщения.");
        });
    }
  });