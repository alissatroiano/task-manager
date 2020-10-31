$(document).ready(function () {
  $(".sidenav").sidenav();
  $(".collapsible").collapsible();
  $(".tooltipped").tooltip();
  $("select").formSelect();
  $(".datepicker").datepicker({
    format: "dd mmmm, yyyy",
    yearRange: 3,
    showClearBtn: true,
    i18n: {
      done: "Select",
    },
  });

  validateDropdownFunction();
  function validateDropdownFunction() {
    let validClass = {
      "border-bottom": "1px solid #c8e6c9",
      "box-shadow": "0 1px 0 0 #66bb6a",
    };
    let invalidClass = {
      "border-bottom": "1px solid #ef9a9a",
      "box-shadow": "0 1px 0 0 #b71c1c",
    };
    if ($("select.validate").prop("required")) {
      $("select.validate").css({
        display: "block",
        height: "0",
        padding: "0",
        width: "0",
        position: "absolute",
      });
    }
    $(".select-wrapper input.select-dropdown")
      .on("focusin", function () {
        $(this)
          .parent(".select-wrapper")
          .on("change", function () {
            if (
              $(this)
                .children("ul")
                .children("li.selected:not(.disabled)")
                .on("click", function () {})
            ) {
              $(this).children("input").css(validClass);
            }
          });
      })
      .on("click", function () {
        if (
          $(this)
            .parent(".select-wrapper")
            .children("ul")
            .children("li.selected:not(.disabled)")
            .css("background-color") === "rgba(0, 0, 0, 0.03)"
        ) {
          $(this).parent(".select-wrapper").children("input").css(validClass);
        } else {
          $(".select-wrapper input.select-dropdown").on(
            "focusout",
            function () {
              if (
                $(this)
                  .parent(".select-wrapper")
                  .children("select")
                  .prop("required")
              ) {
                if (
                  $(this).css("border-bottom") != "1px solid rgb(76, 175, 80)"
                ) {
                  $(this)
                    .parent(".select-wrapper")
                    .children("input")
                    .css(invalidClass);
                }
              }
            }
          );
        }
      });
  }
});
