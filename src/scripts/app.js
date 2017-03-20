import $ from 'jquery'
import Backbone from 'backbone'

import {createStartingTemplate} from './home-template.js'
// import {createContactTemplate} from './contact-template.js'


const AppRouter = Backbone.Router.extend({
	initialize: function(){
		console.log('app is routing!')
		Backbone.history.start()
	},

  routes: {
	//   'projects' : 'showProjects',
	// 	'projects/:id' : 'showOneProject',
	// 	'skills' : 'showSkillsPage',
	// 	'section1': 'showContactPage',
		'' : 'showHomePage'
	//
	},

	// showContactPage: function(){
	// console.log("HELLO HOME PAGE!!!")
	// let infoContainerEl = document.querySelector('.information-container')
	//
	// 		infoContainerEl.innerHTML =  createContactTemplate()
	//
	// },


showHomePage: function(){
console.log("HELLO HOME PAGE!!!")
let infoContainerEl = document.querySelector('.information-container')

		infoContainerEl.innerHTML =  createStartingTemplate()

},



})


let myPortfolio = new AppRouter()
