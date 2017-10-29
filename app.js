// alert("Hello World!");
$(function() {
  $(".accordion_header").click(function(event) {
    let clickedHeader = $(this);
    // console.log(clickedHeader.text());
    let accordionContent = clickedHeader.next(".accordion_content");
    accordionContent.toggle();
  })
})
