type course = {
    title: string;
    duration: number;
    instructor: string;
    price: number;
    level: 'beginner' | 'intermediate' | 'advanced';

}

let javascriptCourse: course = {
    title: 'JavaScript Fundamentals',
    duration: 3,
    instructor: 'John Doe',
    price: 99.99,
    level: 'beginner'
}

let pythonCourse: course = {
    title: 'Python for Data Science',
    duration: 4,
    instructor: 'Jane Smith',
    price: 129.99,
    level: 'intermediate'
}
console.log(javascriptCourse);
console.log(pythonCourse);