let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let selectPlanButton = document.querySelectorAll('.plan button');
let closeButton = document.querySelector('.modal__action--negative');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

for(var i = 0; i < selectPlanButton.length; i++){
    selectPlanButton[i].addEventListener('click', function(){
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        modal.classList.add('open');
        backdrop.classList.add('open');
    })
}

backdrop.addEventListener('click', function(){
    closeModal()
    mobileNav.classList.remove('open')
})

if(closeButton){
    closeButton.addEventListener('click', closeModal)
}


function closeModal(){
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    if(modal){
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function(){
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})

