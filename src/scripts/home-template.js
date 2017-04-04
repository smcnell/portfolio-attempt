

import Backbone from 'backbone';


export const createStartingTemplate = function(){

	return `

	<div id="starting" class="starting">

		<div class="jumbotron birds-jumbo">
			<img src="./looking.jpg" />
		</div>
		<div class="my-name">
			<h1> Shannon McNellis </h1>
			<h2> Front-End Engineer </h2>
		</div>
	</div>





<div id="skills" class="skills">
<div class= "about-title-container">
	<h1> </i> Skills </h1>
</div>

	<div class= "skills-container">

		<div class= "front-end-skills my-skills">
			<i class="html-icon fa fa-html5" aria-hidden="true"></i>
			<h1> Front-End Development </h1>
			<ul>
				<li> HTML5 </li>
				<li> SCSS </li>
				<li> Javascript </li>
				<li> React </li>
				<li> jQuery </li>
				<li> Backbone </li>
				<li> Bootstrap </li>
			</ul>
		</div>


			<div class= "responsive-skills my-skills">
			<i class="html-icon fa fa-mobile" aria-hidden="true"></i>
				<h1> Responsive Web Development </h1>
				<p> Mobile digital media time is higher than desktops, and the difference keeps growing.  Using frameworks such as Bootstrap, I use a mobile-first approach to ensure quality for all devices available now and for those to come.</p>
			</div>
			<div class="jumbotron triangles-jumbo">
			</div>
		</div>

		<p class="resume"> <a href="./McNellis_resume.pdf" target="_blank">Open Resume</a> </p>
	</div>



<div id="projects" class="projects">
<h1> Projects </h1>

	<div class="project-giant">




	<div class="project-each-container">
		<div class="pic-container">
			<img src="./GitHub_home.png" alt="...">
		</div>
			<div class="caption">
				<h3>GitHub Remake</h3>
				<p>Using GitHub's public API, I created a clone of GitHub with a live search of active profiles.</p>
				<p class= "tech">Technologies: Backbone - HTML5 - SCSS - AJAX - Node.js</p>
				<p><a href="https://github.com/smcnell/assignment-19" target="_blank">link to project</a><p>
			</div>
	</div>

	<div class="project-each-container">
		<div class="pic-container">
			<img src="./thumbnail_Final.png" alt="...">
		</div>
			<div class="caption">
				<h3>Charleston Planner</h3>
				<p>A front-end/back-end collaboration where users have the ability to browse local events, search events by keyword, create new events, and save events to their accounts. </p>
				<p class="tech">Technologies: React - Backbone - HTML5 - SCSS </p>
				<p><a href="https://github.com/mackenzielewerke/CharlestonPlanner" target="_blank">link to project</a><p>
			</div>
	</div>

	  <div class="project-each-container">
	    <div class="pic-container">
	      <img src="./Etsy_search.png" alt="...">
			</div>
	      <div class="caption">
	        <h3>Etsy Remake</h3>
					<p>In this clone of Etsy, I used Etsy's public API to display items for sale.  I used routing to go from a thumbnail to single view.  Users can search by keyword and view by listings by categories. </p>
	        <p class="tech">Technologies: Backbone - HTML - SCSS -AJAX - jQuery - Node.js</p>
					<p><a href="https://github.com/smcnell/assignment-21" target="_blank">link to project</a><p>
	      </div>
	  </div>





	</div>
</div>

<div id="about" class="about-me">
	<div class= "big-container">
			<div class= "about-title-container">
				<img src= "./ironspiral3.jpg"/>
				<h1> About Me</h1>
				<img src= "./ironspiralflipped3.jpg"/>
			</div>
		<div class= "about">
			<img src ="./headshotcopy.jpg"/>
			<p>Hi, I'm Shannon, and I'm a Front-End Engineer.  I am a recent graduate of The Iron Yard of Charleston, where my love for problem-solving and creating took shape in the form of coding for the first time.  I am a former Special Education teacher and will forever be inspired by individuality.</p>
		</div>
	</div>
</div>

	<div id="contact" class="contact">
		<div class="jumbotron circle-jumbo">
			<a href="http://pixady.com/image/ml3/"><img src="./greencircles.jpg" alt="" /></a>
			<div class="my-contact">
				<h1> Contact Information </h1>
				<h2> Shannon McNellis </h2>
				<h2> <a href="mailto:shannmcnelli@gmail.com?subject=Portfolio">shannmcnelli@gmail.com</a></h2>
				<a class= "icon" href="https://github.com/smcnell" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
				<a class= "icon" href="https://www.linkedin.com/in/shannon-mcnellis-291815138/" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
				<a class= "icon" href="https://twitter.com/shannonmcnellis" target="_blank"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>

			</div>
		</div>


	`

}
