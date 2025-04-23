document.getElementById("btnFiltrar").addEventListener("click", function () {
  const categoria = document.getElementById("categoria").value;
  const periodo = document.getElementById("periodo").value;

  const dinossauros = document.querySelectorAll(".dino-card");

  dinossauros.forEach((dino) => {
    const dinoCategoria = dino.getAttribute("data-categoria");
    const dinoPeriodo = dino.getAttribute("data-periodo");

    // Mostrar ou ocultar cards com base nos filtros
    if (
      (categoria === "todos" || categoria === dinoCategoria) &&
      (periodo === "todos" || periodo === dinoPeriodo)
    ) {
      dino.style.display = "block";
    } else {
      dino.style.display = "none";
    }
  });
});

// ===========================================
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".saiba-mais").forEach((btn) => {
    btn.addEventListener("click", () => {
      modalImg.src = btn.getAttribute("data-img");
      modalTitle.textContent = btn.getAttribute("data-nome");
      modalDesc.textContent = btn.getAttribute("data-desc");
      modal.classList.remove("hidden");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });
});
