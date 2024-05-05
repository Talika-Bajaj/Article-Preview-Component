const share = document.getElementById('share');
const shareBtn = document.getElementById('share-btn');

share.addEventListener('click', displayOptions);
share.addEventListener('click', displayOptionsWide);
shareBtn.addEventListener('click', hideOptions);

function displayOptions() {
    if (screen.width <= 950) {
        document.querySelector('.info').style.display = 'none';
        document.getElementById('share-options').style.display = 'flex';
    }
}

function hideOptions() {
    if (screen.width <= 950) {
        document.querySelector('.info').style.display = 'flex';
        document.getElementById('share-options').style.display = 'none';
    }
}

function displayOptionsWide() {
    if (screen.width > 950) {
        if (document.getElementById('share-options').style.display === 'flex') {
            document.getElementById('share-options').style.display = 'none';
        } else {
            document.getElementById('share-options').style.display = 'flex';

        }
    }
}