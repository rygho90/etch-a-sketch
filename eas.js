const easContainer = document.querySelector('.eas-container');

for (let i = 0; i < (16*16); i++) {
    let newDiv = document.createElement('div');
    easContainer.append(newDiv);
}