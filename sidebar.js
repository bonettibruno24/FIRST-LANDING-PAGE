document.addEventListener('DOMContentLoaded', function () {
     const buttonSideBar = document.getElementById('check-icon');
     const sidebarContent = document.querySelector('.sidebar-content');
     const hamburger = document.getElementById("sidebar");
  
     function openSidebar() {
          sidebarContent.classList.toggle("active");
      }
  
      buttonSideBar.addEventListener('click', () => {
          openSidebar();
      });
  
      hamburger.addEventListener('click', () => {
          // Adicione um atraso antes de chamar openSidebar
          setTimeout(() => {
              openSidebar();
          }, 10000); // Ajuste o valor de 300 para o tempo desejado em milissegundos
      });
  });