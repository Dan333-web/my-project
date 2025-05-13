document.addEventListener('DOMContentLoaded', () => {
    // Animate skill bars on scroll into view
    const skillLevels = document.querySelectorAll('.skill-level');
    const profilePhoto = document.querySelector('.profile-photo');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function animateSkills() {
        skillLevels.forEach(skill => {
            if (isInViewport(skill)) {
                skill.style.width = skill.style.width; // Trigger CSS transition
            }
        });
    }

    function animateProfilePhoto() {
        if (profilePhoto && isInViewport(profilePhoto)) {
            profilePhoto.classList.add('visible');
        }
    }

    window.addEventListener('scroll', () => {
        animateSkills();
        animateProfilePhoto();
    });

    animateSkills();
    animateProfilePhoto();
});
