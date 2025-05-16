document.addEventListener('DOMContentLoaded', function() {

    function courseDisplay(courseId) {

        const courseData = getCourseData(courseId);
        
        const modal = document.createElement('div');
        modal.className = 'course-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <img src="${courseData.image}" alt="${courseData.title} illustration" class="modal-image">
                <h2>${courseData.title}</h2>
                <p>${courseData.description}</p>
                <h3>What You'll Learn</h3>
                <ul>
                    ${courseData.lessons.map(lesson => `<li>${lesson}</li>`).join('')}
                </ul>
                <div class="modal-buttons">
                    <button class="modal-start-btn" onclick="startCourse('${courseId}')">Begin Course</button>
                    <button class="modal-close-btn">Close</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        const closeBtn = modal.querySelector('.close-modal');
        const modalCloseBtn = modal.querySelector('.modal-close-btn');
        
        closeBtn.onclick = function() {
            document.body.removeChild(modal);
        };
        
        modalCloseBtn.onclick = function() {
            document.body.removeChild(modal);
        };

        modal.onclick = function(e) {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        };
    }
    
    function startCourse(courseId) {
        const courseData = getCourseData(courseId);
        const modal = document.querySelector('.course-modal .modal-content');
    
        modal.innerHTML = `
            <span class="close-modal">&times;</span>
            <h2>Course Registration: ${courseData.title}</h2>
            <form id="courseForm">
                <label for="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" required>
                
                <label for="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" required>
                
                <label for="age">Age (max 10):</label>
                <input type="number" id="age" name="age" required max="10">
                
                <label for="email">Email Address:</label>
                <input type="email" id="email" name="email" required>
                
                <label for="course">Selected Course:</label>
                <input type="text" id="course" name="course" value="${courseData.title}" readonly>
                
                <button type="submit" class="modal-start-btn">Submit</button>
            </form>
        `;
    
        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.onclick = function() {
            document.body.removeChild(document.querySelector('.course-modal'));
        };
    
        const form = modal.querySelector('#courseForm');
        form.onsubmit = function(e) { 
            e.preventDefault();
            alert('Thank you! Your registration has been submitted.');
            document.body.removeChild(document.querySelector('.course-modal'));
        };
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
    window.startCourse = startCourse;
});