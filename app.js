

document.addEventListener("DOMContentLoaded", function(){
    const loadMoreButton = document.querySelector('#load-more');
    const contentContainer = document.querySelector('.content-container');
    let itemsLoaded = 3; 

    loadMoreButton.addEventListener('click', function(){
        const itemsToLoad = 3;

        if(itemsLoaded < 27) {
            for(let i = 0; i <itemsToLoad; i++){
                itemsLoaded++;
                const newItem = document.createElement('div');
                const newImage = document.createElement('img');

                newItem.className = 'content-item';
                newImage.setAttribute('src', 'Images/img' + itemsLoaded + ".png");
                newItem.appendChild(newImage);
                contentContainer.appendChild(newItem);
            }
        } else {
            loadMoreButton.style.display = 'none';
        }
    })
})