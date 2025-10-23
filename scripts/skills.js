const filterButtons = document.querySelectorAll('.filter-btn');
const skills = document.querySelectorAll('.skill');

// Function to filter skills
function filterSkills(category) {
    skills.forEach(skill => {
        if (category === 'all' || skill.dataset.category === category) {
            skill.style.display = 'flex';
        } else {
            skill.style.display = 'none';
        }
    });
}

// Add click event to buttons
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterSkills(btn.dataset.category);
    });
});

// Filter by active button on page load
document.addEventListener('DOMContentLoaded', () => {
    const activeBtn = document.querySelector('.filter-btn.active');
    if (activeBtn) filterSkills(activeBtn.dataset.category);
});
