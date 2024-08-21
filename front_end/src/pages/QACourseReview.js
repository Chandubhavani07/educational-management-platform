import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style.css';

const CourseReview = () => {
    const [selectedCourse, setSelectedCourse] = useState('course1');
    const [courseReviewList, setSelectedCourseReview] = useState([]);
    const [findings, setFindings] = useState('');

    const [courses, setCourses] = useState([]);
    const [selectedReviewData, setSelectedReviewData] = useState();
    const [formData, setFormData] = useState({
        courseId: '',
        courseObjectives: '',
        courseContent: '',
        courseAssesments: '',
        courseFindings: ''
    });
    

    useEffect(() => {
        const fetchCourseData = async () => {
            const { data: courseResponse } = await axios.get('https://jxg2714.uta.cloud/backend/courses.php');
            setCourses(courseResponse);
        }

        const fetchCourseReviewData = async () => {
            const { data: courseReviewResponse } = await axios.get('https://jxg2714.uta.cloud/backend/course_review.php')
            setSelectedCourseReview(courseReviewResponse);
            console.log("courseReviewResponse", courseReviewResponse);
        }
        
        fetchCourseData();
        fetchCourseReviewData();
    }, []);

    const handleCourseChange = (e) => {
        setSelectedCourse(e.target.value);
        let course = courseReviewList.filter((course, index) => (course.courseId == e.target.value))[0];
        // setSelectedReviewData({
        //     ...selectedReviewData,
        //     course
        // });
        console.log('course', course);
        setSelectedReviewData(course);
        setFormData(course);
    };

    const handleFindingsChange = (e) => {
        setFindings(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(`Course: ${selectedCourse}, Findings: ${findings}`);
        console.log('formData', formData);
        console.log('selectedCourse', selectedCourse);
        
        try {
            const reqBody = {
                ...formData,
                courseId: parseInt(selectedCourse, 10)
            };
            console.log('reqBody', reqBody);
            const { data: postData } = await axios.put('https://jxg2714.uta.cloud/backend/course_review.php', reqBody)
            alert('Course review added successfully');
            console.log('Response:', postData);
        } catch (err) {
            alert('Failed to add course review');
            console.log('Error:', err);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target.value);
        setFormData(prevState => ({ ...prevState, [name]: value }));
        setSelectedReviewData(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="home">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="qa_dashboard">Dashboard</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                    <div class="icons">
                        <a href="profile"><i class="fa fa-user"></i></a>
                        <a href="messages_dashboard"><i class="fa fa-envelope"></i></a>
                        <a href='home'><i className="fa fa-sign-out"></i></a>
                    </div>
                </nav>
                <h1>Course Review </h1>
            </header>
            <main>
                <form id="course-review-form" onSubmit={handleSubmit}>
                    <section className="form-group">
                        <label htmlFor="select-course">Select Course:</label>
                        <select id="select-course" name="selectCourse" value={selectedCourse} onChange={handleCourseChange}>
                            {/* <option value="course1">Course 1</option>
                            <option value="course2">Course 2</option> */}
                             <option value="0">Select Course</option>
                            {courses.map(course => (
                                <option key={course.id} value={course.id}>
                                    {course.courseName}
                                </option>
                            ))}
                            {/* Add more options as needed */}
                        </select>
                    </section>

                    {/* ... Assume these textareas get their values from elsewhere ... */}
                    {/* <ReadOnlyTextArea id="course-objectives" name="courseObjectives" label="Course Objectives:" />
                    <ReadOnlyTextArea id="course-content" name="courseContent" label="Course Content:" />
                    <ReadOnlyTextArea id="course-assessments" name="courseAssessments" label="Course Assessments:" /> */}

                    <label htmlFor="courseObjectives">Course Objectives:</label>
                    <textarea id="courseObjectives" name="courseObjectives" onChange={handleChange} 
                    value={selectedReviewData ? selectedReviewData?.courseObjectives : ''}></textarea>

                    <label htmlFor="courseContent">Course Content:</label>
                    <textarea id="courseContent" name="courseContent" onChange={handleChange}
                    value={selectedReviewData ? selectedReviewData?.courseContent : ''}></textarea>

                    <label htmlFor="courseAssesments">Course Assessments:</label>
                    <textarea id="courseAssesments" name="courseAssesments" onChange={handleChange} 
                    value={selectedReviewData ? selectedReviewData?.courseAssesments : ''}></textarea>

                    <label htmlFor="courseFindings">Findings and Areas for Improvement:</label>
                    <textarea id="courseFindings" name="courseFindings" onChange={handleChange} 
                    value={selectedReviewData ? selectedReviewData?.courseFindings : ''}></textarea>

                    {/* <section className="form-group">
                        <label htmlFor="findings">Findings and Areas for Improvement:</label>
                        <textarea id="findings" name="findings" value={findings} onChange={handleFindingsChange}></textarea>
                    </section> */}

                    <button type="submit">Submit Review</button>
                </form>
            </main>
        </div>
    );
};

const ReadOnlyTextArea = ({ id, name, label }) => (
    <section className="form-group">
        <label htmlFor={id}>{label}</label>
        <textarea id={id} name={name} readOnly></textarea>
    </section>
);

export default CourseReview;
