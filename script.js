document.addEventListener('DOMContentLoaded', function () {
    var toggleSkillsButton = document.getElementById('toggleSkillsButton');
    var skillsSection = document.getElementById('skillsSection');
    if (toggleSkillsButton && skillsSection) {
        toggleSkillsButton.addEventListener('click', function () {
            if (skillsSection.classList.contains('hidden')) {
                skillsSection.classList.remove('hidden');
                toggleSkillsButton.textContent = 'Hide Skills';
            }
            else {
                skillsSection.classList.add('hidden');
                toggleSkillsButton.textContent = 'Show Skills';
            }
        });
    }
});
