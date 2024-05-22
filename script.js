const container = document.querySelector('.container');
const loader = document.querySelector('.loader');
document.getElementById("btn_ran").addEventListener('click', async () =>{
    try{
        loader.style.display = 'block';
        const res  = await fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=60");
        if(!res.ok){
        throw new Error("Ответ не получен !");
        }
        const data = await res.json();
        data.forEach(imageUrl => {
            const img = document.createElement('img');
            img.src = imageUrl.url;
            container.appendChild(img);
            });
            loader.style.display = 'none';
        }
        catch(e){
            console.e('Error');
            loader.style.display = 'none';
        }
    });

document.getElementById("btn_cat").addEventListener('click', async() =>{
    try{
        loader.style.display = 'block';
        const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=20');
        if(!res.ok){
        throw new Error("Ответ не получен ! ");
        }
        const data = await res.json();
        data.forEach(cat =>{
            const img = document.createElement('img');
            img.src = cat.url;
            container.appendChild(img)
            });
        loader.style.display = 'none';
        }catch(e){
            console.e('Error');
            loader.style.display = 'none';
        }
});

document.getElementById("btn_dog").addEventListener('click', async() =>{
    try{
        loader.style.display = 'block';
        const res = await fetch('https://dog.ceo/api/breeds/image/random/20');
        if(!res.ok){
        throw new Error("Ответ не получен ! ");
        }
        const data = await res.json();
        const images = data.message;
        images.forEach(dog =>{
            const img = document.createElement('img');
            img.src = dog;
            container.appendChild(img)
            });
        loader.style.display = 'none';
        }catch(e){
            console.e('Error');
            loader.style.display = 'none';
        }
});

document.getElementById("btn_del").addEventListener('click', function(){
    container.innerHTML = "";
})