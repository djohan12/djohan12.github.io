const filterButtons = document.querySelectorAll('.filter-btn');
const skills = document.querySelectorAll('.skill');

function filterSkills(category) {
    skills.forEach(skill => {
        if (category === 'all' || skill.dataset.category === category) {
            skill.style.display = 'flex';
        } else {
            skill.style.display = 'none';
        }
    });
}

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterSkills(btn.dataset.category);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const activeBtn = document.querySelector('.filter-btn.active');
    if (activeBtn) filterSkills(activeBtn.dataset.category);
});
