document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const details = otherItem.querySelector('.dish-details');
                    details.classList.add('hidden');
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.toggle-icon').textContent = '+';
                }
            });
            
            const details = item.querySelector('.dish-details');
            const toggleIcon = item.querySelector('.toggle-icon');
            
            details.classList.toggle('hidden');
            item.classList.toggle('active');
            
            if (details.classList.contains('hidden')) {
                toggleIcon.textContent = '+';
            } else {
                toggleIcon.textContent = '-';
            }
        });
    });
});