var $ = jQuery.noConflict()
jQuery(function () {
  isElementExist(".flavor-row-new", btnMore)
})

// Helper if element exist then call function
function isElementExist(_el, _cb) {
  var elem = document.querySelector(_el)

  if (document.body.contains(elem)) {
    try {
      _cb()
    } catch (e) {
      console.log(e)
    }
  }
}

function btnMore() {
  jQuery(".flavor-btns").closest(".flavor-row-new").addClass("btn-on-mob")
  jQuery(".flavor-row-new").each(function (index) {
    let i = 1,
        startElement = 32,
        amountElement = 18;
    jQuery(this).on("click", ".flavor-btn-more", function () {
      jQuery(this).closest(".flavor-row-new").addClass("flavor-" + index).find(jQuery("style")).remove()
      jQuery(this).closest(".flavor-row-new").append(
          "<style>@media (max-width: 1250px) {.btn-on-mob.flavor-" + index +" .flavor-new-item:nth-of-type(-n+" + (startElement + i * amountElement) +") { display: block; }}</style>")
      i += 1
    })
  })
}
