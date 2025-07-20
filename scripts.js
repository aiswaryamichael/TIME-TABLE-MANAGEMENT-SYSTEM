document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
  
    // Clear previous error messages
    errorMessage.textContent = '';
  
    // Form validation
    if (!username || !password) {
      errorMessage.textContent = 'Please fill in all fields.';
      return;
    }
  
    // Simulate login logic
    const role = new URLSearchParams(window.location.search).get('role');
    if (role === 'admin' && username === 'admin' && password === 'admin123') {
      window.location.href = 'admin.html';
    } else if (role === 'teacher' && username === 'teacher' && password === 'teacher123') {
      window.location.href = 'teacher.html';
    } else if (role === 'student' && username === 'student' && password === 'student123') {
      window.location.href = 'student.html';
    } else {
      errorMessage.textContent = 'Invalid username or password.';
    }
  });