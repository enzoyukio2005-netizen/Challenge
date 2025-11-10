
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const msg = document.querySelector(".form-message");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nome = form.querySelector("#contact-name").value.trim();
      const email = form.querySelector("#contact-email").value.trim();
      const mensagem = form.querySelector("#contact-msg").value.trim();

      if (!nome || !email || !mensagem) {
        msg.textContent = "⚠️ Preencha todos os campos antes de enviar.";
        return;
      }

      msg.style.color = "green";
      msg.textContent = "✅ Mensagem enviada com sucesso!";

      form.reset();
      setTimeout(() => (msg.textContent = ""), 3000);
    });
  }


  const loginForm = document.querySelector("#login-form");
  const loginMsg = document.querySelector("#login-message");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = loginForm.querySelector("#email").value.trim();
      const senha = loginForm.querySelector("#senha").value.trim();

      if (!email || !senha) {
        loginMsg.textContent = "⚠️ Preencha todos os campos.";
        return;
      }

      const userData = JSON.parse(localStorage.getItem("users")) || {};
      if (!userData[email]) {
 
        userData[email] = senha;
        localStorage.setItem("users", JSON.stringify(userData));
        loginMsg.style.color = "green";
        loginMsg.textContent = "✅ Conta criada com sucesso! Faça login novamente.";
      } else if (userData[email] === senha) {
     
        localStorage.setItem("loggedUser", email);
        window.location.href = "index.html";
      } else {
        loginMsg.textContent = "❌ Senha incorreta.";
      }
    });
  }

  const user = localStorage.getItem("loggedUser");
  const header = document.querySelector(".site-header h1");
  if (user && header) {
    const span = document.createElement("span");
    span.textContent = " (Bem-vindo, " + user.split("@")[0] + ")";
    span.style.fontSize = "15px";
    span.style.opacity = "0.8";
    header.appendChild(span);
  }
});
