import { Link } from "react-router-dom";

const Home = (): JSX.Element => (
	<nav>
		<ul>
			<li>
				<Link to="/linking-nodes">
					Linking Nodes
				</Link>
			</li>
			<li>
				<Link to="/animated-triangles">
					Animated Triangles
				</Link>
			</li>
			<li>
				<Link to="/three-js">
					Three JS
				</Link>
			</li>
		</ul>
	</nav>
);

export default Home;
