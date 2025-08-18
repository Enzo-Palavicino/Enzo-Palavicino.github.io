document.getElementById("sendBtn").addEventListener("click", function() {
    const input = document.getElementById("textInput").value.trim();
    const feedbackText = document.getElementById("feedbackText");
    const feedbackSection = document.getElementById("feedbackSection");

    if (input === "") {
        alert("Enter Valid Feedback.");
        return;
    }

    feedbackText.textContent = input;
    feedbackSection.style.display = "block";
    document.getElementById("textInput").value = "";
});
