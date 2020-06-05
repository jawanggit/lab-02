'use strict'

let keywordArr = [];

function Image(image) {
  this.image_url = image.image_url;
  this.title = image.title;
  this.keyword = image.keyword;
  this.description = image.description;
  this.horns = image.horns;

  keywordArr.push(image.keyword);
}


//feature 1 - Use AJAX, specifically $.ajax(), to read the provided JSON file.
// - Each object should become a new instance of a constructor function. Refer to the data to determine the necessary properties.
// - Use jQuery to make a copy of the HTML template of the photo component. For each object, fill in the duplicated template with its properties, then append the copy to the DOM.
$.ajax('data/page-1.json')
  .then(data => {

    data.forEach(obj =>{

      let img = new Image(obj);
      // console.log(img);

      let $p_template = $('<div></div>').clone();
      $p_template.html( $('#photo-template').html() );
      $p_template.find('h2').text(obj.title);
      $p_template.find('img').attr('src', obj.image_url);
      $p_template.find('p').text(obj.description);
      $('main').append($p_template);

      // let $opt = $('<option></option>').clone();
      // $opt.attr("value", obj.keyword);
      // $opt.text(obj.keyword);
      // $('select').append($opt);
      // let $uniqueOpt = $('option')
    // $uniqueOpt = jQuery.uniqueSort($uniqueOpt)
    });

    let uniqueArr =[];
    keywordArr.forEach((key,index) => {
      if (keywordArr.indexOf(key) === index){
        uniqueArr.push(key);
        return uniqueArr;
      }
    });
    console.log(uniqueArr);
    // console.log(keywordArr);

  });
//feature 2 - Create a <select> element which contains unique <option> elements extracted dynamically from the JSON file, one for each keyword.
// Use an event handler to respond when the user chooses an option from the select menu. Hide all of the images, then show those whose keyword matches the option chosen.

