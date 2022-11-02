(function(){
    
    const sliders = [...document.querySelectorAll('.releases__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentReleases = document.querySelector('.releases__body--show').dataset.id;
        value = Number(currentReleases);
        value+= add;


        sliders[Number(currentReleases)-1].classList.remove('releases__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('releases__body--show');

    }

})();