document.addEventListener('DOMContentLoaded', function () {
    // Sample data for suggested realtors
    const realtorsData = [
        { name: 'Paul Evans', experience: '5 years', specialization: 'Residential Properties', phone: "204-981-0071", image: 'https://cdn.realtor.ca/individual/TS638108934000000000/highres/1344843.jpg' },
        { name: 'Ed Dale', experience: '8 years', specialization: 'Commercial Properties', phone: "204-477-0500", image: 'https://cdn.realtor.ca/individual/TS638104612800000000/highres/1215914.jpg' },
        { name: 'DJ Campbell Trudeau', experience: '3 years', specialization: 'Luxury Homes', phone: "204-583-2315", image: 'https://cdn.realtor.ca/individual/TS638370477000000000/highres/1276177.jpg' },
        { name: 'Rachael Luhowy', experience: '10 years', specialization: 'Luxury Homes', phone: "204-510-5302", image: 'https://cdn.realtor.ca/individual/TS638205711000000000/highres/1253768.jpg' },
        { name: 'Justin Beaulieu', experience: '10 years', specialization: 'Luxury Homes', phone: "204-894-7080", image: 'https://cdn.realtor.ca/individual/TS638370477000000000/highres/1224543.jpg' },
        { name: 'Olivia Benoit', experience: '10 years', specialization: 'Luxury Homes', phone: "204-223-3148", image: 'https://cdn.realtor.ca/individual/TS638349991800000000/highres/1439934.jpg' },
    ];

    // Get the container where realtor cards will be added
    const realtorList = document.getElementById('realtorList');

    // Dynamically generate realtor cards and arrange them in rows
    for (let i = 0; i < realtorsData.length; i += 2) {
        const row = document.createElement('div');
        row.className = 'realtor-row';

        for (let j = i; j < i + 2 && j < realtorsData.length; j++) {
            const realtor = realtorsData[j];

            const card = document.createElement('div');
            card.className = 'realtor-card';

            const details = document.createElement('div');
            details.className = 'realtor-details';
            details.innerHTML = `
                <h2>${realtor.name}</h2>
                <p>Experience: ${realtor.experience}</p>
                <p>Specialization: ${realtor.specialization}</p>
                <p>Phone: ${realtor.phone}</p>
            `;

            const buttonsContainer = document.createElement('div');
            buttonsContainer.className = 'realtor-buttons';

            const emailButton = document.createElement('button');
            emailButton.className = 'realtor-button';
            emailButton.textContent = 'Email';
            emailButton.addEventListener('click', () => window.location.href = `mailto:${realtor.email}`);

            const chatButton = document.createElement('button');
            chatButton.className = 'realtor-button';
            chatButton.textContent = 'Chat';
            chatButton.addEventListener('click', () => alert(`Start chat with ${realtor.name}`));

            const imageContainer = document.createElement('div');
            imageContainer.className = 'realtor-image-container';

            const image = document.createElement('img');
            image.className = 'realtor-image';
            image.src = realtor.image;
            image.alt = realtor.name;

            card.appendChild(details);

            buttonsContainer.appendChild(emailButton);
            buttonsContainer.appendChild(chatButton);

            details.appendChild(buttonsContainer);

            imageContainer.appendChild(image);
            card.appendChild(imageContainer);

            row.appendChild(card);
        }

        realtorList.appendChild(row);
    }
});
