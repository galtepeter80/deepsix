import React, {Component} from 'react';
import '../css/about.css'; 
import kiddos from "../img/kiddos.jpg";
import selfie from "../img/selfie.jpg";
import gametable from "../img/gametable.jpg";

class About extends Component {
	constructor(props) {
		super(props);

		this.state = {
			div1Visible: false,
			div2Visible: false,
			div3Visible: false,
		};
	}

	componentDidMount() {
		this.showSection(0);
	}

	showSection = (sectionNum) => {
		const stateKey = `div${sectionNum}Visible`;

		this.setState({ [stateKey]: true }, () => {
		if (sectionNum < 3) {
			setTimeout(() => {
				this.showSection(sectionNum + 1);
			}, 1000); 
		}
		});
	};

	render() {
		const { div1Visible, div2Visible, div3Visible } = this.state;

		return (
			<div className='about-me-page'>
				<br/>
				<div className={`about-section left ${div1Visible ? 'visible' : ''}`}>
					<img className="left" src={selfie}/>
					<div>
						<p>Hey, there!</p>
						<p>My name is Greg Altepeter, and I’m a software developer who specializes in back-end web development. But that’s not all I do. Since you’re here, you’ve no doubt seen a bit of Sprawl Sites, a React.js application that uses a custom PHP API and MySQL database. I designed it, originally, for use with a tabletop RPG called “River City Chronicles,” but have since expanded it for other uses as well. It uses a google maps API to chart fictitious, interesting locations in real-world places, in order to help players get a better grasp of what they’re looking at in the story. </p>
					</div>
				</div>
				<div className={`about-section right ${div2Visible ? 'visible' : ''}`}>
					<div>
						<p>I live in St. Louis, MO, with my kiddo-cakes, Dominic (froggy) and Agatha (bone-princess). They’re both very much into web development as well, using Scratch. They’re big into crafting, writing stories, Undertale (I’m pretty sure froggy knows more about UT than even Toby Fox), Minecraft, and a little show called The Owl House. Aggie is getting into baking pretty heavily. </p>
						<p>As for myself, I’m skilled in PHP, Javascript, MySQL, React.js, Node.js, Symfony, ETL, as well as the simpler things, like HTML and CSS. I’m absolutely in love with building websites and backend endpoints. I’ve got six years’ experience with it professionally. And that expertise could be yours. </p>
					</div>
					<img className="right" src={kiddos}/>
				</div>
				<div className={`about-section left ${div3Visible ? 'visible' : ''}`}>
					<img className="left" src={gametable}/>
					<div>
						<p>Sprawl Sites is, itself, built using a React frontend and my own PHP Axios endpoints that call from the MySQL DB. By selecting a game from the nav bar, it makes API calls and populates a list of various regions in that location, each which populate their own array of gmaps markers that breathe visual life into imaginary settings, overlaid on the real world.</p>
						<p>In the future, I’ve planned to add a user login interface and user ability to add further character notes for every region. It’s exciting, and I want to share it with you! Feel free to check it out. </p>
					</div>
				</div>
			</div>
		);
	}
}

export default About;

