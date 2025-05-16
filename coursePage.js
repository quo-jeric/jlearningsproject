document.addEventListener('DOMContentLoaded', function() {

    function courseDisplay(courseId) {

        document.querySelectorAll('.course-box').forEach(box => {
            box.style.display = 'none';
        });
        
        const comingSoon = document.querySelector('h1[style*="text-align: center"]');
        if (comingSoon) comingSoon.style.display = 'none';
        
        const topText = document.querySelector('.top-text');
        if (topText) topText.style.display = 'none';
        
        let detailContainer = document.querySelector('.course-detail-container');
        if (!detailContainer) {
            detailContainer = document.createElement('div');
            detailContainer.className = 'course-detail-container';
            document.querySelector('.main-content').appendChild(detailContainer);
        }
        
        const courseData = getCourseData(courseId);
        
        detailContainer.innerHTML = `
            <img src="${courseData.image}" alt="${courseData.title} illustration" class="course-detail-image">
            <h1>${courseData.title}</h1>
            <p>${courseData.description}</p>
            <h2>What You'll Learn</h2>
            <ul>
                ${courseData.lessons.map(lesson => `<li>${lesson}</li>`).join('')}
            </ul>
            <button class="course-button" onclick="startCourse('${courseId}')">Begin Course</button>
            <button class="back-button" onclick="showAllCourses()">Back to All Courses</button>
        `;
        
        detailContainer.style.display = 'block';
    }
    
    function showAllCourses() {

        document.querySelectorAll('.course-box').forEach(box => {
            box.style.display = 'block';
        });
        
        const comingSoon = document.querySelector('h1[style*="text-align: center"]');
        if (comingSoon) comingSoon.style.display = 'block';
        
        const topText = document.querySelector('.top-text');
        if (topText) topText.style.display = 'block';
        
        const detailContainer = document.querySelector('.course-detail-container');
        if (detailContainer) detailContainer.style.display = 'none';
    }
    
function startCourse(courseId) {
    const detailContainer = document.querySelector('.course-detail-container');
    
    const formHTML = `
        <h2>Enroll in ${getCourseData(courseId).title}</h2>
        <form id="enrollmentForm">
            <label for="firstName">First Name:</label><br>
            <input type="text" id="firstName" name="firstName" required><br><br>

            <label for="lastName">Last Name:</label><br>
            <input type="text" id="lastName" name="lastName" required><br><br>

            <label for="age">Age:</label><br>
            <input type="number" id="age" name="age" min="3" required><br><br>

            <label for="course">Course:</label><br>
            <input type="text" id="course" name="course" value="${getCourseData(courseId).title}" readonly><br><br>

            <button type="submit">Submit</button>
        </form>
        <br>
        <button class="back-button" onclick="showAllCourses()">Back to All Courses</button>
    `;

    detailContainer.innerHTML = formHTML;

    document.getElementById("enrollmentForm").addEventListener("submit", function(e) {
        e.preventDefault(); // prevent page reload

        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const age = document.getElementById("age").value;

        alert(`Enrollment Successful!\nName: ${firstName} ${lastName}\nAge: ${age}\nCourse: ${getCourseData(courseId).title}`);
    });
}
    
    function getCourseData(courseId) {
        const courses = {
            math: {
                title: "Basic Math",
                image: "math.png",
                description: "This course will explore the fundamentals of mathematics through engaging lessons and fun activities designed for young learners.",
                lessons: [
                    "Counting numbers 1-100",
                    "Basic addition and subtraction",
                    "Shapes and patterns",
                    "Simple word problems",
                    "Measurement concepts"
                ]
            },
            science: {
                title: "Basic Science",
                image: "science.png",
                description: "Discover scientific concepts through interactive experiments and hands-on learning activities tailored for young minds.",
                lessons: [
                    "Introduction to the scientific method",
                    "Plants and animals",
                    "Weather and seasons",
                    "Basic physics concepts",
                    "Simple chemistry experiments"
                ]
            },
            reading: {
                title: "Reading Fundamentals",
                image: "reading.png",
                description: "Build essential reading skills with our phonics-based program and engaging story-time activities.",
                lessons: [
                    "Letter recognition",
                    "Phonics basics",
                    "Sight words",
                    "Reading simple sentences",
                    "Comprehension skills"
                ]
            },
            values: {
                title: "Core Values and Ethics",
                image: "valEth.webp",
                description: "Teach children core values and ethical principles through relatable stories and scenarios that help them understand right from wrong in everyday situations.",
                lessons: [
                    "Honesty and truthfulness",
                    "Respect for others",
                    "Responsibility",
                    "Kindness and empathy",
                    "Sharing and cooperation"
                ]
            },
            arts: {
                title: "Creative Arts",
                image: "arts.png",
                description: "Spark imagination and self-expression through fun art projects exploring colors, shapes, and various creative mediums for young artists.",
                lessons: [
                    "Color theory basics",
                    "Drawing fundamentals",
                    "Painting techniques",
                    "Collage and mixed media",
                    "Art appreciation"
                ]
            },
            writing: {
                title: "Writing Fundamentals",
                image: "pen-4702531_640.webp",
                description: "Build essential writing skills from letters to sentences through interactive exercises that make learning to write enjoyable and rewarding.",
                lessons: [
                    "Letter formation",
                    "Writing simple words",
                    "Constructing sentences",
                    "Creative writing basics",
                    "Punctuation and capitalization"
                ]
            },
            environment: {
                title: "Environmental Awareness",
                image: "environment.png",
                description: "Introduce kids to nature conservation and eco-friendly habits through interactive activities that foster love for our planet.",
                lessons: [
                    "Understanding ecosystems",
                    "Recycling basics",
                    "Water conservation",
                    "Planting and gardening",
                    "Animal habitats"
                ]
            },
            tech: {
                title: "Technology 101",
                image: "tech.jpg",
                description: "Explore how everyday technology works through simple experiments and child-friendly explanations of digital concepts.",
                lessons: [
                    "How computers work",
                    "Basic coding concepts",
                    "Internet safety",
                    "Digital creativity tools",
                    "Technology in daily life"
                ]
            },
            computer: {
                title: "Computer Basics",
                image: "computer.png",
                description: "Build fundamental computer skills from keyboarding to safe internet use with engaging, age-appropriate lessons.",
                lessons: [
                    "Parts of a computer",
                    "Using a mouse and keyboard",
                    "Basic typing skills",
                    "Introduction to software",
                    "Safe internet practices"
                ]
            }
        };
        
        return courses[courseId] || {
            title: "Course Not Found",
            image: "",
            description: "The requested course could not be found.",
            lessons: []
        };
    }
    
    window.courseDisplay = courseDisplay;
    window.showAllCourses = showAllCourses;
    window.startCourse = startCourse;
});