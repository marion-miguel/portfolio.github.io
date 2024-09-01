document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});
document.getElementById('openPdfBtn').addEventListener('click', function() {
    // URL of the PDF file
    var pdfUrl = 'Marion Ray G. Miguel Resume.pdf';

    // Open the PDF in a new tab
    window.open(pdfUrl, '_blank');
});
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('skills-section').classList.add('active');
});
