window.onload = function() {
    function mostrarSidebar() {
        var buttons = document.getElementById('buttons');
        var menuButton = document.getElementById('checkbtn');
        var sidebar = document.getElementById('sidebar');
        menuButton.onclick = function(){
            sidebar.style.display = 'block';
            buttons.style.display = 'none';
            menuButton.style.display = 'none';
        }

        var closebutton = document.getElementById('close-sidebar');
        closebutton.onclick = function(){
            sidebar.style.display = 'none';
            buttons.style.display = 'flex';
        };
    }

    mostrarSidebar();

    var collapseButtons = document.querySelectorAll('.collapse-btn');

    collapseButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var collapsibleContent = this.nextElementSibling;
            var collapsibleElement = this.parentElement;
            var icon = this.querySelector('.icon');
    
            
            collapsibleElement.classList.toggle('open');
    
            
            collapsibleContent.style.display = (collapsibleContent.style.display === 'none' || !collapsibleContent.style.display) ? 'block' : 'none';
    
            
            if (collapsibleElement.classList.contains('open')) {
                collapsibleElement.style.backgroundColor = '#EEEEEE';
                this.style.color = 'black';
                icon.classList.add('open-icon'); // Agregar la clase 'open-icon' al icono
            } else {
                collapsibleElement.style.backgroundColor = 'transparent';
                this.style.color = 'initial';
                icon.classList.remove('open-icon'); // Quitar la clase 'open-icon' del icono
            }

            // Cerrar los otros elementos colapsables
            if (collapsibleElement.classList.contains('open')) {
                document.querySelectorAll('.collapsible-element').forEach(function(element) {
                    if (element !== collapsibleElement && element.classList.contains('open')) {
                        var content = element.querySelector('.collapsible-content');
                        content.style.display = 'none';
                        element.style.backgroundColor = 'transparent';
                        element.querySelector('.collapse-btn').style.color = '#707070';
                        element.classList.remove('open');
                    }
                });
            }

        });
    });
    
};
