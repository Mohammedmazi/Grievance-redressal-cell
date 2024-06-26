// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Student = require('./models/Student');
const Union = require('./models/Union');
const Admin = require('./models/Admin');
const Grievance = require('./models/Grievance');
const Uniong = require('./models/Uniong');
const Status = require('./models/Status');
// Create Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Define route for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Welcome to the Grievance Retrieval and Resolution System!is Runnniiingggg');
});

// Define route for student registration
app.post('/api/register', async (req, res) => {
  try {
    // Extract form data from request body
    const { id, email, password } = req.body;

    // Create a new Student instance
    const student = new Student({ id, email, password });

    // Save the student data to the database
    await student.save();

    res.status(201).json({ message: 'Student registered successfully' });
  } catch (error) {
    console.error('Error registering student:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Define route for student login
app.post('/api/login', async (req, res) => {
  try {
    // Extract student id and password from request body
    const { id, password } = req.body;

    // Find the student in the database by id
    const student = await Student.findOne({ id });

    // If student is not found, return error
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Check if password matches
    if (password !== student.password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // Login successful
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Define route for Union login
app.post('/api/union', async (req, res) => {
  try {
    // Extract Union member id and password from request body
    const { id, password } = req.body;

    // Find the Union member in the database by id
    const unionMember = await Union.findOne({ id });

    // If Union member is not found, return error
    if (!unionMember) {
      return res.status(404).json({ message: 'Union member not found' });
    }

    // Check if password matches
    if (password !== unionMember.password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // Login successful
    res.status(200).json({ message: 'Union member login successful' });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// Define route for Union login
app.post('/api/admin', async (req, res) => {
  try {
    // Extract Union member id and password from request body
    const { id, password } = req.body;

    // Find the Union member in the database by id
    const unionMember = await Admin.findOne({ id });

    // If Union member is not found, return error
    if (!unionMember) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Check if password matches
    if (password !== unionMember.password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // Login successful
    res.status(200).json({ message: 'Admin login successful' });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// Define route for student registration
app.post('/api/grievance', async (req, res) => {
  try {
    // Extract form data from request body
    const { description } = req.body;

    // Create a new Student instance
    const student = new Grievance({ description });
    const uniong = new Uniong({ description });

    // Save the student data to the database
    await student.save();
    await uniong.save();

    res.status(201).json({ message: 'Grievance noted successfully' });
  } catch (error) {
    console.error('Error registering Grievance:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/api/uniong', async (req, res) => {
  try {
    // Fetch grievance data from the database
    const grievances = await Uniong.find();

    // Return the grievance data as JSON response
    res.status(200).json(grievances);
  } catch (error) {
    console.error('Error fetching grievance data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.post('/api/admindis', async (req, res) => {
  try {
    // Extract form data from request body
    const { date, grievance, decision } = req.body;

    // Create a new Student instance
    const student = new Status({ date, grievance, decision });

    // Save the student data to the database
    await student.save();

    res.status(201).json({ message: 'Decision posted successfully' });
  } catch (error) {
    console.error('Error posting desion:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/api/stat', async (req, res) => {
  try {
    // Fetch grievance data from the database
    const grievances = await Status.find();

    // Return the grievance data as JSON response
    res.status(200).json(grievances);
  } catch (error) {
    console.error('Error fetching grievance data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});




// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
