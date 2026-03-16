function StartSystem(TargetName, ImageAmmount){
    const loadMoreButton = document.querySelector('#load-more');
    const contentContainer = document.querySelector('.content-container');
    let itemsLoaded = 3; 

    loadMoreButton.addEventListener('click', function(){
        const itemsToLoad = 3;

        if(itemsLoaded < ImageAmmount) {
            for(let i = 0; i <itemsToLoad; i++){
                itemsLoaded++;
                const newItem = document.createElement('div');
                const newImage = document.createElement('img');

                const ImageURl = 'Images/' + TargetName + "/img" + itemsLoaded + ".png"
                newItem.className = 'content-item';
                newImage.setAttribute('src', ImageURl);
                newItem.appendChild(newImage);
                contentContainer.appendChild(newItem);

                newImage.addEventListener('click', function(){
                    window.open(ImageURl)
                })
            }
        } else {
            loadMoreButton.style.display = 'none';
        }
    })
}