document.querySelectorAll('.bar').forEach(bar => {
    bar.addEventListener('click', () => {
        const url = bar.getAttribute('data-url');
        window.location.href = url;
    });
});
