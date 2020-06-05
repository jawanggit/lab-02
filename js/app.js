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
      $p_template.find('img').attr('alt', obj.keyword);
      $p_template.find('p').text(obj.description);
      $('main').append($p_template);

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
    uniqueArr.forEach((value) => {
      let $opt = $('<option></option>').clone();
      $opt.attr('value', value);
      $opt.text(value);
      $('select').append($opt);
    });
  });

function hideImg(){
  $('div').each(function() { //funciton for evaluating what to hide
      $(this).show();
  })
  //iterate through the div els that we have created
  //money this is what is being acted on (select) use change
  let keyword = $(this).val(); // returns a keyword
  console.log(keyword)
  // console.log($(this));
  $('div').each(function() { //funciton for evaluating what to hide
    console.log(keyword);
    let abc = $(this).find('img')[0].alt;
    console.log(abc)
    if ( keyword!== abc){
      // console.log($(this));
      $(this).hide();
      
    }
  });
  //compare img alt to the clicked option
  //if they are the same do not hide them
  //else hide the div
//TODO: John wants this
  // console.log($(this));
  // $('div').each((keyword) => {//inside is div
  //   console.log($(this))
  //   if (keyword !== $(this).find('img').alt){
  //     $(this).hide();
  //   }
  // });
}
$('select').on('change', hideImg);

//feature 2 - Create a <select> element which contains unique <option> elements extracted dynamically from the JSON file, one for each keyword.
// Use an event handler to respond when the user chooses an option from the select menu. Hide all of the images, then show those whose keyword matches the option chosen.

