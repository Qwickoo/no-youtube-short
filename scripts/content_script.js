const interval = setInterval(() => {
    const gridElements = document.querySelectorAll("ytd-grid-video-renderer");

    gridElements.forEach((gridElement) => {
        const isShort = gridElement.querySelector('.ytd-thumbnail[overlay-style="SHORTS"]');

        if (isShort) {
            gridElement.style.display = 'none';
        }
    });
}, 500);