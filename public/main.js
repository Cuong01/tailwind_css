const topMenu = document.getElementById('ntc-top-menu');
const toggleTopMenu = document.getElementById('ntc-toggle');

document.addEventListener('click', (e) => {
    if (toggleTopMenu.contains(e.target)) {
        topMenu.classList.toggle('hidden')
        topMenu.classList.toggle('ntv-topmenu-expanded')
    } else {
        if (topMenu.classList.contains('ntv-topmenu-expanded')) {
            topMenu.classList.toggle('ntv-topmenu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})