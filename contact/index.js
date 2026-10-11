const aliasInput = document.getElementById("nameInput");
const textInput = document.getElementById("textInput");
const btn = document.getElementById("sendButton");

const workerURL = "https://old-glitter-95f3.siltreza.workers.dev/";

btn.onclick = async function () {
    console.log("Button clicked!");

    const alias = aliasInput.value.trim();
    const message = textInput.value.trim();

    console.log("Alias:", alias);
    console.log("Message:", message);

    if (!alias || !message) {
        alert("Please enter an alias and a message!");
        return;
    }

    try {
        console.log("Sending request to Worker...");

        const response = await fetch(workerURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                alias: alias,
                message: message
            })
        });

        const result = await response.text();

        console.log("Worker status:", response.status);
        console.log("Worker response:", result);

        if (!response.ok) {
            throw new Error(result || "Failed to send message.");
        }

        alert("Message sent!");
        aliasInput.value = "";
        textInput.value = "";

    } catch (error) {
        console.error("Request failed:", error);
        alert("Couldn't send your message. Check the console.");
    }
};