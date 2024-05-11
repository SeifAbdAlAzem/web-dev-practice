// Define a loader function to fetch tasks data asynchronously
export const tasksLoader = async () => {
    // Fetch tasks data from the server
    const res = await fetch("http://localhost:3000/tasks");

    // Return the parsed JSON response
    return res.json();
};