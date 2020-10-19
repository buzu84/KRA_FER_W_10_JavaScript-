document.addEventListener("DOMContentLoaded", function(){
    const parents = document.querySelectorAll('.parent');
    for(let i=0; i < parents.length; i++){
        parents[i].addEventListener('mouseover', function(){
            this.querySelector('.children').style.display = "block";
        });
        parents[i].addEventListener('mouseout', function(){
            this.querySelector('.children').style.display = "none";
        });
    }
});
