import './styles/index.scss'
import $ from "jquery";
// import 'bootstrap';

const userStack = {
    language: 'JavaScript',
    framework: 'React'
}

const user = {
    name: 'Alex',
    age: '24',
    ...userStack
}

$('.block').html('jQuery is working');

console.log(user)