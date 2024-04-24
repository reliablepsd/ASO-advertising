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

  jQuery(".flavor-row-new").each(function (index) {
    let i = 1,
      startElement = 32,
      amountFlavor = jQuery(this).find(".flavor-new-item").length,
      amountElement = 18;

    if (amountFlavor > (startElement + i * amountElement)) {
      jQuery(this).addClass("btn-on-mob").append('<div class="flavor-btns"><a href="#!" class="flavor-btn-more">LOAD MORE FLAVORS</a></div>')

      jQuery(this).on("click", ".flavor-btn-more", function () {
        if ((startElement + i * amountElement) < amountFlavor) {
          jQuery(this)
            .closest(".flavor-row-new")
            .addClass("flavor-" + index)
            .find(jQuery("style"))
            .remove()
          jQuery(this)
            .closest(".flavor-row-new")
            .append(
              "<style>@media (max-width: 1250px) {.btn-on-mob.flavor-" +
                index +
                " .flavor-new-item:nth-of-type(-n+" +
                (startElement + i * amountElement) +
                ") { display: block; }}</style>"
            )
          i += 1
        } else {
          jQuery(this).closest(".flavor-row-new").addClass("flavor-all-visible")
        }
      })
    }
  })
}
