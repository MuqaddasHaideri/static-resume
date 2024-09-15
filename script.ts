
    
    document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsButton = document.getElementById('toggleSkillsButton') as HTMLButtonElement;
    const skillsSection = document.getElementById('skillsSection') as HTMLDivElement;

    if (toggleSkillsButton && skillsSection) {
        toggleSkillsButton.addEventListener('click', () => {
            if (skillsSection.classList.contains('hidden')) {
                skillsSection.classList.remove('hidden');
                toggleSkillsButton.textContent = 'Hide Skills';
            } else {
                skillsSection.classList.add('hidden');
                toggleSkillsButton.textContent = 'Show Skills';
            }
        });
    }
});


