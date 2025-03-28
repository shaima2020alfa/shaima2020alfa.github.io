const apiKey = "nZewhuwqQJEPJe4UiAVIVXBjN0WIE54J"; // Replace with your actual API key
const apiUrl = `https://api.polygon.io/space/data?apiKey=${apiKey}`;

async function fetchSpaceData() {
    try {
         const response = await fetch(apiUrl);
         const data = await response.json();

         document.getElementById("data").innerHTML = `
            <h2>Space Data</h2>
            <pre>${JSON.stringify(data, null, 2)}</pre>
    `;
   } catch (error) {
           document.getElementById("data").innerHTML = "<p>Failed to load data.</p>";
           console.error("Error fetching data:", error);
   }
} 