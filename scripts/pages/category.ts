$$("body") {
  # Add a class for page specific styling
  add_class("_category")

  remove(".//div[contains(@class, 'NewsletterSubscription')]")

  $(".//div[@id='Wrapper']") {
    $(".//div[contains(@class, 'Left')]") {
      # Accordionize.
      $(".//div[@id='SideShopByBrand' or @id='SideCategoryShopByPrice']") {
        attribute("data-ur-set", "toggler")

        $(".//h2") {
          add_class("mw_bar")
          attribute("data-ur-toggler-component", "button")

          insert("div", class: "mw_indicator")
        }

        $(".//div[contains(@class, 'BlockContent')]") {
          attribute("data-ur-toggler-component", "content")

          $('.//a') {
            insert("div", class: "mw_arrow")
          }
        }
      }
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