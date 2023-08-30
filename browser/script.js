const appListElement = document.getElementById('appList');

// Replace this URL with your actual GitHub raw JSON URL
const dataUrl = 'https://raw.githubusercontent.com/thisrealhymika/thisrealhymika.github.io/master/hypernet.json';

// Fetch the app data from the JSON file
fetch(dataUrl)
    .then(response => response.json())
    .then(data => {
        data.forEach(app => {
            const appCard = document.createElement('div');
            appCard.className = 'app-card';

            const appIcon = document.createElement('img');
            appIcon.className = 'app-icon';
            appIcon.src = app.iconUrl;
            appIcon.alt = `${app.appName} Icon`;

            const appDetails = document.createElement('div');
            appDetails.className = 'app-details';

            const appName = document.createElement('div');
            appName.className = 'app-name';
            appName.textContent = app.appName;

            const appDescription = document.createElement('div');
            appDescription.className = 'app-description';
            appDescription.textContent = app.description;

            const appSize = document.createElement('div');
            appSize.className = 'app-size';
            appSize.textContent = `Size: ${app.size}`;

            const downloadButton = document.createElement('a');
            downloadButton.className = 'download-button';
            downloadButton.href = app.buttonUrl;
            downloadButton.textContent = 'Download';

            appDetails.appendChild(appName);
            appDetails.appendChild(appDescription);
            appDetails.appendChild(appSize);
            appDetails.appendChild(downloadButton);

            appCard.appendChild(appIcon);
            appCard.appendChild(appDetails);

            appListElement.appendChild(appCard);
        });
    })
    .catch(error => console.error('Error fetching app data:', error));
