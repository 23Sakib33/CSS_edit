let box = document.querySelector("div"),
    input = document.querySelector("input");

input.addEventListener("input", function() {
    box.style.borderRadius = input.value + "px";
    box.style.background = input.value;
});

// Add CSS transitions and hover effects
box.style.transition = "border-radius 0.3s, background 0.3s";
box.style.width = "200px";
box.style.height = "200px";
box.style.margin = "20px";
box.style.display = "inline-block";
box.style.border = "1px solid black";

box.addEventListener("mouseenter", function() {
    box.style.transform = "scale(1.1)";
});

box.addEventListener("mouseleave", function() {
    box.style.transform = "scale(1)";
});
