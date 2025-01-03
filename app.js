// Menampilkan halaman pendaftaran
function showRegister() {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('register-section').style.display = 'block';
}

// Menampilkan halaman login
function showLogin() {
    document.getElementById('register-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
}

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Logika untuk memproses login
    showDashboard();
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Logika untuk memproses pendaftaran user baru
    showLogin();
});

function showDashboard() {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('register-section').style.display = 'none';
    document.getElementById('dashboard-section').style.display = 'block';
}

function addEmployee() {
    // Logika untuk menambahkan karyawan baru
}

function editEmployee(id) {
    // Logika untuk mengedit data karyawan
}

function deleteEmployee(id) {
    // Logika untuk menghapus data karyawan
}

// Contoh untuk menambah data ke tabel secara dinamis
var employees = [
    {name: 'John Doe', nik: '123', position: 'Manager', cluster: 'A', region: 'West', serviceManager: 'Jane Smith', noHp: '08123456789', noKtp: '987654321', statusTraining: 'Completed', joinDate: '2020-01-01'}
    // Data karyawan lainnya
];

employees.forEach(function(employee) {
    var row = document.createElement('tr');
    row.innerHTML = `
        <td>${employee.name}</td>
        <td>${employee.nik}</td>
        <td>${employee.position}</td>
        <td>${employee.cluster}</td>
        <td>${employee.region}</td>
        <td>${employee.serviceManager}</td>
        <td>${employee.noHp}</td>
        <td>${employee.noKtp}</td>
        <td>${employee.statusTraining}</td>
        <td>${employee.joinDate}</td>
        <td>
            <button onclick="editEmployee(${employee.nik})">Edit</button>
            <button onclick="deleteEmployee(${employee.nik})">Delete</button>
        </td>
    `;
    document.getElementById('employee-table-body').appendChild(row);
});
