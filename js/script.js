// ===== MENU ACTIVE (TỰ ĐỘNG) =====
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const currentPage = location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.style.background = "#3498db";
      link.style.color = "#fff";
    }
  });
});

// ===== CONTACT FORM (NẾU CÓ) =====
function sendMessage(e) {
  e.preventDefault();
  const msg = document.getElementById("msg");
  if (msg) {
    msg.textContent = "Cảm ơn bạn đã liên hệ! (Demo)";
    msg.className = "success";
  }
}

// ===== TIỆN ÍCH CHUNG =====
function goHome() {
  window.location.href = "index.html";
}
