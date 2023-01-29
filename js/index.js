document.getElementById('one').addEventListener('mouseenter', clickedOne);
document.getElementById('two').addEventListener('mouseenter', clickedTwo);
document.getElementById('three').addEventListener('mouseenter', clickedThree);

document.getElementById('one').addEventListener('mouseleave', resetOne);
document.getElementById('two').addEventListener('mouseleave', resetTwo);
document.getElementById('three').addEventListener('mouseleave', resetThree);

function clickedOne(){
    const button = document.getElementById('assinar-one');
    button.style.color = 'white';
    button.style.backgroundColor = '#1d539e';
    button.style.transitionDuration = '2s';

    const reviewButton = document.getElementById('review-one'); 
    reviewButton.style.opacity = '1';
    reviewButton.style.transition = '2s';

    const priceBox = document.getElementById('one');
    priceBox.style.boxShadow = '7px 5px 15px black';
    priceBox.style.transform = 'translateY(-20px)'; 
    priceBox.style.transitionDuration = '2s';

    const div = document.getElementById('title-one');
    div.style.backgroundColor = '#ffcc29';
    div.style.borderTopLeftRadius = '0.5rem';
    div.style.borderTopRightRadius = '0.5rem';
    div.style.color= '#1d539e';
    div.style.transitionDuration = '2s';
}

function clickedTwo(){
    const button = document.getElementById('assinar-two')
    button.style.color = 'white';
    button.style.backgroundColor = '#1d539e';
    button.style.transitionDuration = '2s';

    const reviewButton = document.getElementById('review-two');
    reviewButton.style.display = 'block';
    reviewButton.style.opacity = '1';
    reviewButton.style.transition = '2s';

    const priceBox = document.getElementById('two');
    priceBox.style.boxShadow = '7px 5px 15px black';
    priceBox.style.transform = 'translateY(-20px)';
    priceBox.style.transitionDuration = '2s';

    const div = document.getElementById('title-two');
    div.style.backgroundColor = '#ffcc29';
    div.style.borderTopLeftRadius = '0.5rem';
    div.style.borderTopRightRadius = '0.5rem';
    div.style.color= '#1d539e';
    div.style.transitionDuration = '2s';
}

function clickedThree(){
    const button = document.getElementById('assinar-three')
    button.style.color = 'white';
    button.style.backgroundColor = '#1d539e';
    button.style.transitionDuration = '2s';

    const reviewButton = document.getElementById('review-three');
    reviewButton.style.opacity = '1';
    reviewButton.style.transition = '2s';

    const priceBox = document.getElementById('three');
    priceBox.style.boxShadow = '7px 5px 15px black';
    priceBox.style.transform = 'translateY(-20px)';
    priceBox.style.transitionDuration = '2s';

    const div = document.getElementById('title-three');
    div.style.backgroundColor = '#ffcc29';
    div.style.borderTopLeftRadius = '0.5rem';
    div.style.borderTopRightRadius = '0.5rem';
    div.style.color= '#1d539e';
    div.style.transitionDuration = '2s';
}

function resetOne(){
    const button = document.getElementById('assinar-one')
    button.style.color = '#1d539e';
    button.style.backgroundColor = 'white';
    button.style.transitionDuration = '1.5s';

    const reviewButton = document.getElementById('review-one');
    reviewButton.style.opacity = '0';
    reviewButton.style.transition = '1.5s';

    const priceBox = document.getElementById('one');
    priceBox.style.boxShadow = '0px 0px 0px white';
    priceBox.style.transform = 'translateY(0px)';
    priceBox.style.transitionDuration = '1.5s';

    const div = document.getElementById('title-one');
    div.style.backgroundColor = 'transparent';
    div.style.borderTopLeftRadius = '0.5rem';
    div.style.borderTopRightRadius = '0.5rem';
    div.style.color= 'black';
    div.style.transitionDuration = '1.5s';
}

function resetTwo(){
    const button = document.getElementById('assinar-two')
    button.style.color = '#1d539e';
    button.style.backgroundColor = 'white';
    button.style.transitionDuration = '1.5s';

    const reviewButton = document.getElementById('review-two');
    reviewButton.style.opacity = '0';
    reviewButton.style.transition = '1.5s';

    const priceBox = document.getElementById('two');
    priceBox.style.boxShadow = '0px 0px 0px white';
    priceBox.style.transform = 'translateY(0px)';
    priceBox.style.transitionDuration = '1.5s';

    const div = document.getElementById('title-two');
    div.style.backgroundColor = 'transparent';
    div.style.borderTopLeftRadius = '0.5rem';
    div.style.borderTopRightRadius = '0.5rem';
    div.style.color= 'black';
    div.style.transitionDuration = '1.5s';
}

function resetThree(){
    const button = document.getElementById('assinar-three')
    button.style.color = '#1d539e';
    button.style.backgroundColor = 'white';
    button.style.transitionDuration = '1.5s';

    const reviewButton = document.getElementById('review-three');
    reviewButton.style.opacity = '0';
    reviewButton.style.transition = '1.5s';

    const priceBox = document.getElementById('three');
    priceBox.style.boxShadow = '0px 0px 0px white';
    priceBox.style.transform = 'translateY(0px)';
    priceBox.style.transitionDuration = '1.5s';

    const div = document.getElementById('title-three');
    div.style.backgroundColor = 'transparent';
    div.style.borderTopLeftRadius = '0.5rem';
    div.style.borderTopRightRadius = '0.5rem';
    div.style.color= 'black';
    div.style.transitionDuration = '1.5s';
}