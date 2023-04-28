<h1>my-job-board-api</h1>
  
  <p>This is a RESTful API for managing job offers. It allows users to create, read, update, and delete job offers.</p>
  
  <h2>Technologies Used</h2>
  
  <p>This project was built using the following technologies:</p>
  
  <ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>MongoDB</li>
  </ul>
  
  <h2>Setup</h2>
  
  <p>To use this API, you'll need to do the following:</p>
  
  <ol>
    <li>Clone this repository to your local machine.</li>
    <li>Install the dependencies by running <code>npm install</code>.</li>
    <li>Create a <code>.env</code> file in the root directory of the project and add the following environment variables:</li>
  </ol>
  
  <pre><code>MONGODB_URL=&lt;your_mongodb_url&gt;</code></pre>
  
  <p>Start the server by running <code>npm start</code>.</p>
  
  <p>You can now access the API at <code>http://localhost:8080/api/job-offers</code>.</p>
  
  <h2>Endpoints</h2>
  
  <p>The following endpoints are available:</p>
  
  <ul>
    <li><code>GET /api/job-offers</code>: This endpoint returns all job offers stored in the database.</li>
    <li><code>GET /api/job-offers/:id</code>: This endpoint returns a single job offer by its ID.</li>
    <li><code>POST /api/job-offers</code>: This endpoint creates a new job offer.</li>
    <li><code>PUT /api/job-offers/:id</code>: This endpoint updates a job offer by its ID.</li>
    <li><code>DELETE /api/job-offers/:id</code>: This endpoint deletes a job offer by its ID.</li>
    <li><code>GET /api/search</code>: This endpoint allows users to search for job offers based on their position, location, and contract type.</li>
  </ul>
  
  <h2>Example Request</h2>
  
  <p>To create a new job offer, make a POST request to <code>/api/job-offers</code> with the following data:</p>
  
  <pre><code>{
    "company": "Example Inc.",
    "logo": "https://example.com/logo.png",
    "logoBackground": "#ffffff",
    "position": "Web Developer",
    "contract": "Full-time",
    "location": "New York",
    "website": "https://example.com",
    "apply": "https://example.com/apply",
    "description": "We are looking for a talented web developer to join our team.",
    "requirements": {
        "content": "The ideal candidate should have the following qualifications:",
        "items": [
            "3+ years of experience in web development",
            "Experience with React.js",
            "Strong problem-solving skills"
        ]
    },
    "role": {
        "content": "Responsibilities include:",
        "items": [
            "Building and maintaining web applications",
            "Collaborating with other developers and stakeholders",
            "Troubleshooting and debugging issues as they arise"
        ]
    }
}</code>
