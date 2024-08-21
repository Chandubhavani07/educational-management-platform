import React, { useEffect, useState } from 'react';

const EditCourses = () => {
    const [formData, setFormData] = useState({});
    const [courseId, setCourseId] = useState(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('courseId');
        setCourseId(id);

        fetch('https://jxg2714.uta.cloud/backend/courses.php')
            .then((response) => response.json())
            .then((data) => {
                const specificCourse = data.find((course) => course.id === id);
                if (specificCourse) {
                    setFormData(specificCourse);
                }
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://jxg2714.uta.cloud/backend/courses.php', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: courseId,
                ...formData,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Course updated:', data);
                alert('Course updated');
            });
    };
    const handleDelete = () => {
        fetch(`https://jxg2714.uta.cloud/backend/courses.php`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: courseId,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Course deleted:', data);

            });
    };

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="/contact_us">Contact Us</a></li>
                    </ul>
                    <div className="icons">
                        <a href="profile"><i className="fa fa-user"></i></a>
                        <a href="messages_dashboard"><i className="fa fa-envelope"></i></a>
                        <a href='/home'><i className="fa fa-sign-out"></i></a>
                    </div>
                </nav>
                <h1>Welcome to the Educational Management Platform</h1>
            </header>
            <main>
                <form id="update-course-form" onSubmit={handleSubmit}>
                    <section className="form-group">
                        <label htmlFor="course-name">Course Name:</label>
                        <input
                            type="text"
                            id="course-name"
                            name="courseName"
                            value={formData.courseName || ''}
                            onChange={handleChange}
                        />
                    </section>

                    <section className="form-group">
                        <label htmlFor="course-description">Course Description:</label>
                        <textarea
                            id="course-description"
                            name="courseDescription"
                            value={formData.courseDescription || ''}
                            onChange={handleChange}
                        ></textarea>
                    </section>

                    <section className="form-group">
                        <label htmlFor="course-duration">Course Duration:</label>
                        <input
                            type="text"
                            id="course-duration"
                            name="courseDuration"
                            value={formData.courseDuration || ''}
                            onChange={handleChange}
                        />
                    </section>

                    <section className="form-group">
                        <label htmlFor="course-start-date">Course Start Date:</label>
                        <input
                            type="date"
                            id="course-start-date"
                            name="courseStartDate"
                            value={formData.courseStartDate || ''}
                            onChange={handleChange}
                        />
                    </section>


                    <button type="submit">Update Course</button>
                    <button type="button" onClick={handleDelete}>Delete Course</button>

                </form>
            </main>
        </div>
    );
};

export default EditCourses;