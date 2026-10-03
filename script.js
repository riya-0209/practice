fetch("data.json")
    .then(response => response.json())
    .then(data => {

        const container = document.querySelector("#events");

        data.forEach(event => {

            const card = document.createElement("div");

            card.innerHTML = `
                <h2>${event.name}</h2>
                <p>Category: ${event.category}</p>
                <p>Venue: ${event.venue}</p>
                <p>Seats: ${event.seats}</p>
            `;

            container.appendChild(card);
        });

    })
    .catch(error => {
        console.log("Error:", error);
    });