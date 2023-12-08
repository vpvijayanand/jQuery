document.addEventListener("DOMContentLoaded", function() {
    const wheel = document.getElementById("wheel");
    const spinBtn = document.getElementById("spin-btn");

    spinBtn.addEventListener("click", function() {
        // Disable the button while spinning
        spinBtn.disabled = true;

        // Generate a random degree to spin
        const randomDegree = Math.floor(Math.random() * 3600) + 1800; // Between 1800 and 5400 degrees

        // Calculate the final degree after spinning
        const currentDegree = getCurrentDegree();
        const totalDegree = currentDegree + randomDegree;

        // Apply the rotation animation
        wheel.style.transition = "transform 5s ease-out";
        wheel.style.transform = `rotate(${totalDegree}deg)`;

        // Wait for the animation to finish
        setTimeout(function() {
            // Enable the button
            spinBtn.disabled = false;

            // Calculate the selected section
            const selectedSection = Math.floor(((totalDegree % 360) + 360) % 360 / 72);

            // Map the section to the topic
            const topics = ["Python", "Java", "PHP", "C++", ".Net"];
            const selectedTopic = topics[selectedSection];

            alert(`You landed on: ${selectedTopic}`);
        }, 5000); // Wait for 5 seconds for the wheel to stop
    });

    function getCurrentDegree() {
        const transformStyle = window.getComputedStyle(wheel).getPropertyValue("transform");
        const matrix = new DOMMatrix(transformStyle);
        const rotate = matrix.rotate(2); // Extract the rotation in degrees
        return rotate;
    }
});