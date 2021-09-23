import { Link } from "react-router-dom";

const Home = (): JSX.Element => (
	<nav>
		<ul>
			<li>
				<Link to="/linking-nodes">
					Linking Nodes
				</Link>
			</li>
		</ul>
	</nav>
);

export default Home;
