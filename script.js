document.addEventListener('DOMContentLoaded', function () {
    const toggleHeaders = document.querySelectorAll('.toggle-header');
    const sections = document.querySelectorAll('.toggle-section');

    toggleHeaders.forEach(header => {
        header.addEventListener('click', function () {
            // Remove 'active' class from all sections
            sections.forEach(section => section.classList.remove('active'));

            // Add 'active' class to the clicked section
            const section = this.parentElement;
            section.classList.add('active');
        });
    });
});
