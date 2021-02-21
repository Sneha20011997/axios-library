// AXIOS GLOBALS
axios.defaults.headers.common['X-Auth-Token'] =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

// GET REQUEST
function getUsers() {
   axios({
     method: 'get',
    url: 'https://jsonplaceholder.typicode.com/users',
    params: {
     _limit: 5
    }
   })
     .then(res => showOutput(res))
     .catch(err => console.error(err));

  axios
    .get('https://jsonplaceholder.typicode.com/users_limit=5', {
      timeout: 5000
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

// POST REQUEST
function addUsers() {
  axios
    .post('https://jsonplaceholder.typicode.com/users', {
      title: 'New User',
      completed: false
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

// PUT/PATCH REQUEST
function updateUsers() {
  axios
    .patch('https://jsonplaceholder.typicode.com/users/1', {
      title: 'Updated User',
      completed: true
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

// DELETE REQUEST
function removeUsers() {
  axios
    .delete('https://jsonplaceholder.typicode.com/users/1')
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}
// AXIOS INSTANCE
const axiosInstance = axios.create({
  // Other custom settings
  baseURL: 'https://jsonplaceholder.typicode.com'
});
// axiosInstance.get('/comments').then(res => showOutput(res));

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
