const districts = [
    "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", 
    "Dindigul", "Erode", "Kallakurichi", "Kancheepuram", "Karur", "Krishnagiri", 
    "Madurai", "Nagapattinam", "Kanyakumari", "Namakkal", "Perambalur", "Pudukkottai", 
    "Ramanathapuram", "Ranipet", "Salem", "Sivagangai", "Tenkasi", "Thanjavur", 
    "Theni", "Thiruvallur", "Thiruvarur", "Tuticorin", "Trichirappalli", "Thirunelveli", 
    "Tirupattur", "Tiruppur", "Tiruvannamalai", "The Nilgiris", "Vellore", 
    "Viluppuram", "Virudhunagar"
];

const districtsPerPage = 6;
let currentPage = 1;

function renderDistricts() {
    const districtsDiv = document.getElementById('districts');
    districtsDiv.innerHTML = '';
    
    const startIndex = (currentPage - 1) * districtsPerPage;
    const endIndex = Math.min(startIndex + districtsPerPage, districts.length);

    for (let i = startIndex; i < endIndex; i++) {
        const district = districts[i];
        const districtDiv = document.createElement('div');
        districtDiv.className = 'district';
        districtDiv.innerHTML = `
            <h2>${district}</h2>
            <button onclick="showDonors('${district}')">Click Here</button>
        `;
        districtsDiv.appendChild(districtDiv);
    }
    
    renderPagination();
}

function renderPagination() {
    const paginationDiv = document.getElementById('pagination');
    paginationDiv.innerHTML = '';

    const totalPages = Math.ceil(districts.length / districtsPerPage);

    const backButton = document.createElement('button');
    backButton.innerText = 'Back';
    backButton.onclick = () => goToPage(currentPage - 1);
    backButton.disabled = currentPage === 1;
    paginationDiv.appendChild(backButton);

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.innerText = i;
        pageButton.onclick = () => goToPage(i);
        pageButton.disabled = i === currentPage;
        paginationDiv.appendChild(pageButton);
    }

    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next';
    nextButton.onclick = () => goToPage(currentPage + 1);
    nextButton.disabled = currentPage === totalPages;
    paginationDiv.appendChild(nextButton);
}

function goToPage(page) {
    const totalPages = Math.ceil(districts.length / districtsPerPage);
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    renderDistricts();
}

function showDonors(district) {
    alert(`Showing donors for ${district}`);
    // Here you can fetch and display the donors list
}

document.addEventListener('DOMContentLoaded', renderDistricts);
