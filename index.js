// Your code goes here

// add the .addEventListener

document.addEventListener( "DOMContentLoaded", function () {
    updateDOM()
} );

// ✓ should change the text on the page when DOM content has loaded
  function updateDOM() {
    document.getElementById( "text" )
      .innerHTML = "This is really cool!";
  }