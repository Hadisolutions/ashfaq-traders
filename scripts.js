document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const formContainer = document.getElementById('formContainer');

    startBtn.addEventListener('click', () => {
        document.getElementById('header').style.display = 'none';
        formContainer.style.display = 'block';
        animateFormSections();
    });

    const genderBtns = document.querySelectorAll('.genderBtn');
    genderBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const gender = btn.getAttribute('data-gender');
            document.body.style.background = gender === 'male' ? '#2196f3' : '#e91e63';
        });
    });

    document.getElementById('profilePicInput').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const preview = document.getElementById('profilePicPreview');
                preview.src = e.target.result;
                preview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });
});

function animateFormSections() {
    const sections = document.querySelectorAll('.form-section');
    sections.forEach((section, index) => {
        section.style.animation = `fadeIn ${index + 1}s forwards`;
    });
}
