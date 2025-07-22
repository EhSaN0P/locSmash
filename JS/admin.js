const navLinks = document.querySelectorAll('.nav-link');
const tabs = document.querySelectorAll('.tab-content');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        const target = link.getAttribute('data-tab');
        tabs.forEach(tab => {
            tab.classList.add('d-none');
        });
        document.getElementById('tab-' + target).classList.remove('d-none');
    });
});

document.addEventListener('click', e => {
    if (e.target.classList.contains('btn-accept')) {
        const card = e.target.closest('.card');
        card.classList.add('accepted');
        document.getElementById('accepted-list').appendChild(card);
    } else if (e.target.classList.contains('btn-reject')) {
        const card = e.target.closest('.card');
        card.classList.add('rejected');
        document.getElementById('rejected-list').appendChild(card);
    }
});