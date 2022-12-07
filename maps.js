
    function openNav() {
          document.getElementById("mySidebar").style.width = "250px";
          document.getElementById("m").style.marginLeft = "250px";
        }
        
        function closeNav() {
          document.getElementById("mySidebar").style.width = "0";
          document.getElementById("main").style.marginLeft= "0";
        }
        $('.carousel').carousel({
          interval: 1
        })