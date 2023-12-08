function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function spin() {
    // Play the sound
    wheel.play();

    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let selectedItem = "";

    // Define angles for each prize
    const ANGLES = {
        MagicRoaster: [1890, 2250, 2610],
        Sepeda: [1850, 2210, 2570],
        RiceCooker: [1810, 2170, 2530],
        LunchBox: [1770, 2130, 2490],
        Sanken: [1750, 2110, 2470],
        Electrolux: [1630, 1990, 2350],
        JblSpeaker: [1570, 1930, 2290]
    };

    // Shuffle and pick the first angle for each prize
    for (let prize in ANGLES) {
        shuffle(ANGLES[prize]);
    }

    // Choose a random prize
    let prizeList = Object.values(ANGLES).map(prize => prize[0]);
    let resultAngle = shuffle(prizeList)[0];

    // Determine the selected prize
    selectedItem = Object.keys(ANGLES).find(prize => ANGLES[prize].includes(resultAngle));

    // Naming convention for prizes
    const PRIZE_NAMES = {
        MagicRoaster: "Magic Roaster",
        Sepeda: "Sepeda Aviator",
        RiceCooker: "Rice Cooker Philips",
        LunchBox: "Lunch Box Lock&Lock",
        Sanken: "Air Cooler Sanken",
        Electrolux: "Electrolux Blender",
        JblSpeaker: "JBL Speaker"
    };

    // Spin the wheel
    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = `rotate(${resultAngle}deg)`;
    element.classList.remove("animate");
    setTimeout(() => element.classList.add("animate"), 5000);

    // Show result
    setTimeout(() => {
        applause.play();
        swal(
            "Congratulations",
            `You Won The ${PRIZE_NAMES[selectedItem]}.`,
            "success"
        );
    }, 5500);

    // Reset the wheel
    setTimeout(() => {
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";
    }, 6000);
}