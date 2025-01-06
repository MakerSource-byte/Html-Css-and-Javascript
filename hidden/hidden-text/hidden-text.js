const buttonElement = document.getElementById("secretButton");
const pElement = document.getElementById("hiddenText");

const toggleHiddenElement = (docElement) =>{
    if (docElement.style.display === 'none'){
        docElement.style.display = 'block';
    }else{
        docElement.style.display = 'none';
    }
}

buttonElement.addEventListener('click', () => {
    toggleHiddenElement(pElement);
})