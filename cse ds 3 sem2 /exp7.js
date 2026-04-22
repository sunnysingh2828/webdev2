// Student data
const students = [
    {
        name: "Rahul Sharma",
        course: "Computer Science",
        marks: 85
    },
    {
        name: "Anita Verma",
        course: "Information Technology",
        marks: 92
    },
    {
        name: "Rohan Gupta",
        course: "Electronics",
        marks: 78
    }
];

// Select container
const container = document.getElementById("studentContainer");

// Function to create card
function createCard(student) {
    const card = document.createElement("div");
    card.className = "card";

    const name = document.createElement("div");
    name.className = "name";
    name.innerText = student.name;

    const course = document.createElement("div");
    course.className = "info";
    course.innerText = "Course: " + student.course;

    const marks = document.createElement("div");
    marks.className = "info";
    marks.innerText = "Marks: " + student.marks;

    card.appendChild(name);
    card.appendChild(course);
    card.appendChild(marks);

    return card;
}

// Display all students
students.forEach(student => {
    const card = createCard(student);
    container.appendChild(card);
});