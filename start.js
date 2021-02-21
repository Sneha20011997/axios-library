// GET REQUEST
function getUsers() {
  console.log('GET Request');
}

// POST REQUEST
function addUsers() {
  console.log('POST Request');
}

// PUT/PATCH REQUEST
function updateUsers() {
  console.log('PUT/PATCH Request');
}

// DELETE REQUEST
function removeUsers() {
  console.log('DELETE Request');
}


// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getUsers);
document.getElementById('post').addEventListener('click', addUsers);
document.getElementById('update').addEventListener('click', updateUsers);
document.getElementById('delete').addEventListener('click', removeUsers);
