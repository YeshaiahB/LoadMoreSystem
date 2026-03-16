function StartSystem(TargetName, ImageAmmount){
    const loadMoreButton = document.querySelector('#load-more');
    const contentContainer = document.querySelector('.content-container');
    let itemsLoaded = 3; 

    const initialImages = contentContainer.querySelectorAll('img');
    
    initialImages.forEach((img, index) => {
        const ImageURl = 'Images/' + TargetName + "/img" + (index + 1) + ".png"
        img.setAttribute('src', ImageURl);
        img.addEventListener('click', function(){
            window.open(ImageURl)
        });
    });

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