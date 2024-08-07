const share = document.getElementById('share');
const shareImg = document.getElementById('share-img');
const authorInfo = document.querySelector('.author-info');
const infoDiv = document.querySelector('.info');
const shareOptions = document.getElementById('share-options');

share.addEventListener('click', () => {
    const isSmallScreen = window.innerWidth < 950;
    if (isSmallScreen) {
        handleSmallScreenOptions();
    } else {
        handleWideScreenOptions();
    }
});

function handleSmallScreenOptions() {
    const isActive = share.classList.toggle('active');
    shareImg.classList.toggle('active', isActive);
    shareOptions.classList.toggle('active', isActive);

    if (isActive) {
        authorInfo.style.display = 'none';
        infoDiv.classList.add('active');
    } else {
        authorInfo.style.display = 'flex';
        infoDiv.classList.remove('active');
    }
}

function handleWideScreenOptions() {
    const isActive = shareOptions.classList.contains('active');

    if (isActive) {
        shareOptions.classList.remove('active');
        share.classList.remove('active');
        shareImg.classList.remove('active');
    } else {
        shareOptions.classList.add('active');
        share.classList.add('active');
        shareImg.classList.add('active');
    }
}

function handleResize() {
    if (window.innerWidth > 950 && infoDiv.classList.contains('active')) {
        infoDiv.classList.remove('active');
        authorInfo.style.display = 'flex';
    } else if (window.innerWidth < 950 && shareOptions.classList.contains('active')) {
        infoDiv.classList.add('active');
        authorInfo.style.display = 'none';
    }
}

window.addEventListener('resize', handleResize);
