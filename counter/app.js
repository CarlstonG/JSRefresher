let count = 0;

const message = document.querySelector("#message");
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");


// Using a traditional for loop to iterate through each button
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(e) {
        const style = e.currentTarget.classList;

        // Using ternary operator to update the count based on the button class
        count = style.contains("decrease") ? count - 1 :
                style.contains("increase") ? count + 1 : 0;
                style.contains("text-btn") 

        // Using ternary operator to change the color based on the count
        value.style.color = count > 0 ? "green" :
                            count < 0 ? "red" : "#222";

        value.textContent = count;  // Update displayed count
        
        updateMessage(style)

    });

}

const updateMessage = (style) => {
    message.textContent = style.contains("decrease") ? "Count Decreased!" :
                          style.contains("increase") ? "count Increased!" :
                          "Coun Reset!"
}
