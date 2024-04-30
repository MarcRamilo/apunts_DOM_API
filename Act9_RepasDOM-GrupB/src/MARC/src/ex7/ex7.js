document.addEventListener('DOMContentLoaded', (event) => {
    const div = document.querySelector('#list-app'); // Get the div element
    const ul = document.createElement('ul'); // Create an unordered list element
    ul.classList.add('responsive-gallery'); // Add the responsive gallery class
    div.appendChild(ul); // Append the list element to the div
    const input = document.createElement('input'); // Create an input element
    input.type = 'text'; // Set input type to text
    div.appendChild(input); // Append the input element to the div
    const button = document.createElement('button'); // Create a button element
    button.textContent = 'Filtrar'; // Set button text content
    div.appendChild(button); // Append the button element to the div

    const images = ['cat.jpg', 'beach.jpg', 'pizza.jpg']; // Array of image names
    images.forEach((image) => { // Loop through each image name
        const li = document.createElement('li'); // Create a list item element
        const img = document.createElement('img'); // Create an image element
        img.src = `/src/image/${image}`; // Set image source
        img.classList.add('responsive-img'); // Add a class for responsive images
        li.appendChild(img); // Append the image to the list item
        
        const figcaption = document.createElement('figcaption'); // Create a figcaption element
        figcaption.textContent = image; // Set the text content to the image name
        li.appendChild(figcaption); // Append the figcaption to the list item
        
        ul.appendChild(li); // Append the list item to the unordered list
    });

    button.addEventListener('click', () => { // Add event listener to the button
        const filter = input.value.toLowerCase(); // Get the filter value
        ul.innerHTML = ''; // Clear the list

        images.forEach((image) => { // Loop through each image
            if (image.includes(filter)) { // Check if image name contains the filter text
                const li = document.createElement('li'); // Create a list item element
                const img = document.createElement('img'); // Create an image element
                img.src = `/src/image/${image}`; // Set image source
                img.classList.add('responsive-img'); // Add a class for responsive images
                li.appendChild(img); // Append the image to the list item
                
                const figcaption = document.createElement('figcaption'); // Create a figcaption element
                figcaption.textContent = image; // Set the text content to the image name
                li.appendChild(figcaption); // Append the figcaption to the list item
                
                ul.appendChild(li); // Append the list item to the unordered list
            }
        });
    });
});
