import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <ul>
                <li>
                    <Link to="mission">Mission</Link>
                </li>
                <li>
                    <Link to="team">Team</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
    );
}

export default About;