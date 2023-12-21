const btn = document.querySelector('#darkmode-btn')
const html = document.querySelector('html')
 
    
    btn.addEventListener('change', function() {
        html.classList.toggle('dark-mode')
    })
    
