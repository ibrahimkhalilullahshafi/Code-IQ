import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <section className='ques-ans'>
            <h2>
                Some frequntly asked questions
            </h2>
            <div>
                <strong>Q: 1: What is the purpose of react router?</strong>
                <br />
                <strong>Ans:</strong><p> Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
                    React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</p>
                <strong>Q: 2: How does context api works?</strong>
                <br />
                <strong>Ans:</strong><p> React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
                <br />
                <strong>Q: 3: What is useRef?</strong>
                <strong>Ans:</strong><p> Ref means just reference, so it can be a reference to anything (DOM node, Javascript value, etc). The useRef hook returns a mutable object which doesn’t re-render the component when it’s changed. Think it like useState, but unlike useState, doesn’t trigger re-render of the component. The object that useRef returns have a current property that can hold any modifiable value.</p>
            </div>
        </section>
    );
};

export default Blog;