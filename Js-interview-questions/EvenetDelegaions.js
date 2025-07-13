let parentsId = document.getElementById("parents");

//this is basically mine the play and the pause btn
parentsId.addEventListener("click", (e) => {
    if (e.target.id === "play") {
        console.log("play happend...");
    } else if (e.target.id === "pause") {
        console.log("pause happend...");
    }
}
);
