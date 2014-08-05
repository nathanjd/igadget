$$("body") {
  # Add a class for page specific styling
  add_class("_category")

  $(".//div[@id='Wrapper']") {
    $(".//div[contains(@class, 'Left')]") {
      
    }
  }

  $(".//div[@id='CategoryHeading']") {
    $("./div[@class='BlockContent']") {
      # Move page title on top of the content area
      $("./h2") {
        move_to("../../../../div[@class='Left']", "top")
      }
      $("./div[@class='FloatRight SortBox']") {
        $("./form") {
          wrap_text_children("span")
        }
      }
    }
  }
}