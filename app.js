$(function()
{
  $(".accordion_header").click(function(event)
  {
    let clickedHeader = $(this);
    let accordionContent = clickedHeader.next(".accordion_content");
    accordionContent.toggle();
  })
})
