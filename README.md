# Backbone Routing + Backbone Models/Collections -- Route, Fetch, Render Artists 

## Objectives

After completing this assignment, you should be able to:

* Breakdown a simple sequence of procedural steps into a series of statements in JS
* Use Backbone Router to listen to the hash and render different UI's
* Use Backbone Models + Collections to fetch data
* Successfully render data to the page in a formatted layout


## Details

### Setup Instructions

##### 1. Clone this repository into a now-new `assignment-20` directory
```
git clone git@github.com:t3patterson/webpack-node-proxy-server.git assignment-20

npm install
```

##### 2. In terminal have 2 tabs open

##### 3. In one tab, run the webpack task runner. 
  ```
  npm run go
  ```

##### 4. In another tab, run the proxy server
  ```
  npm start
  ```

##### 5. use the proxy server to access a non-CORS/non-JSONP API under by sending requests to the proxy server endpoint:
  ```
  /proxy?api=http://www.bbc.co.uk/radio1/playlist.json
  ```
  - examples on how to use in applicatione:

  **jQuery**
  ```
  $.getJSON('/proxy?api=http://www.bbc.co.uk/radio1/playlist.json').then(...)
  ```


  **Backbone** 
  ```
  let SomeCollection = Backbone.Collection.extend({
    url: '/proxy?api=http://www.bbc.co.uk/radio1/playlist.json',
  })
  ```
### Deliverables
* A page that dynamically fetches and renders data based on information in the hash route

### Requirements

* An application that uses Backbone Collections to fetch JSON data from the [BBC Radio 1](http://www.bbc.co.uk/radio1/playlist.json) & [BBC Radio 2](http://www.bbc.co.uk/radio2/playlist.json) using AJAX requests.
* An application that shows requests data from different URL endpoints depending on what is in the hash-route

## Normal Mode

Create a simple application that fetches and renders data from the BBC Radio APIs. It should have buttons in a navigation bar for navigating the page, changing the hash and fetching data. The routes should be as follows:
  - `#radio/2
  - `#radio/1`
  - `""` (home route)

The home route should show a special feature for the artist contained in the `introducing:` property on the data returned from the radio1 API.

The playlists for the radio1 and radio2 are contained in the `a:` property

You can start fetching with `$.getJSON(...)` but you will ultimately need to use a Backbone Collection. 

## Adventure Mode

Create extra routes for displaying the playlist for morning/afternoon/evening which correspond to the `a`, `b`, `c` properties.


The Routes should 
- `#radio/2/:timeOfDay` *(displays songs for morning, afternoon, or evening)*
- `#radio/1/:timeOfDay` *(displays songs for morning, afternoon or evening)*
- `#radio/1`  *(displays all songs from #radio/1)*
- `#radio/2` *displays all songs from #radio1*


## Adventure Mode
Also, create a route for featured content that displays 
- the track of the day (`totd`) from radio1
- the `greatestriffs` from radio2
- the artist of the week (`aotw`)  from radio2
- the (`rotw`) from radio2

-  #featured-content/:contentTitle


##Epic Mode
Add a link to each track that navigates to an `artist/:name` route. This route should fetch data from the Spotify API to for a given artist and render it to the page.

https://api.spotify.com/v1/search?q=roling&type=artist



