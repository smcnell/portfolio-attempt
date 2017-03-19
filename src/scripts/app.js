import $ from 'jquery'
import Backbone from 'backbone'

// import {createRadioTemplate} from './template-radio.js'
import {createStartingTemplate} from './home-template.js'
// import {Playlist1Collection, Playlist2Collection} from './_models.js'


const AppRouter = Backbone.Router.extend({
	initialize: function(){
		console.log('app is routing!')
		Backbone.history.start()
	},

  routes: {
	  'projects' : 'showProjects',
		'projects/:id' : 'showOneProject',
		'skills' : 'showSkillsPage',
		'contact': 'showContactPage',
		'' : 'showHomePage',

	},

// 	showContactPage: function(){
// console.log("HELLO Contact PAGE!!!")
// let infoContainerEl = document.querySelector('.information-container')
//
//
// let playlist2RadioCollection= new Playlist2Collection()
//
// playlist2RadioCollection.fetch().then(function(serverRes){
// 	let secondModelsList= playlist2RadioCollection.models
// 	let bigHTMLStr= createRadioTemplate(secondModelsList, "Radio2")
// 	document.querySelector(".information-container").innerHTML= bigHTMLStr
//
// })
//
// },


showHomePage: function(){
console.log("HELLO HOME PAGE!!!")
let infoContainerEl = document.querySelector('.information-container')



// $.getJSON('http://www.bbc.co.uk/radio1/playlist.json').then(function(serverRes){
// 		let introducingArray = serverRes.playlist.introducing
		// console.log(introducingArray)
		infoContainerEl.innerHTML =  createStartingTemplate()
// })
},



})


let myPortfolio = new AppRouter()
