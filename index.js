const share = document.getElementById('share');

share.addEventListener('click', displayOptions);
share.addEventListener('click', displayOptionsWide);

function displayOptions() {
    if (screen.width <= 650) {
        document.querySelector('.info').style.display = 'none';
        document.getElementById('share-options').style.display = 'flex';
    }
}

function displayOptionsWide() {
    if (screen.width > 650) {
        if (document.getElementById('share-options').style.display === 'flex') {
            document.getElementById('share-options').style.display = 'none';
        } else {
            document.getElementById('share-options').style.display = 'flex';

        }
    }
}