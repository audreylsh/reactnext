


/* import React from 'react';
import { courseData } from './CourseData';


const [courseItem, setCourseitem] = useState(courseData);

const catfilter= (cat) => {
    let filteredData = courseData.filter((course) => course.category === cat)
    if(filteredData.length >0) {
        setCourseitem(filteredData)
    }
}

//const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredCourses = courseData.filter((course) => {
        return (
            course.name.toLowerCase().includes(searchString) ||
            course.description.toLowerCase().includes(searchString)
        );
    });
    setCourseitem(filteredCourses);
});

return (

) */