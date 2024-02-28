document.addEventListener('DOMContentLoaded', function () {
     const buttonSideBar = document.getElementById('check-icon');
     const sidebarContent = document.querySelector('.sidebar-content');
     const hamburger = document.getElementById("sidebar");
  
     function openSidebar() {
          sidebarContent.classList.toggle("active");
      }
  
      buttonSideBar.addEventListener('click', () => {
        openSidebar()
      });
  });