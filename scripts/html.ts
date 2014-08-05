# HTML Transformations go here

$("/html") {
  add_canonical_tag()
  rewrite_links()

  # Rewrite relative img and script paths to absolute
  absolutize()

  rewrite_aspnet_scripts()

  # Add mobile meta tags
  clean_mobile_meta_tags()

  # Remove styles and comments
  remove_all_styles()
  remove_html_comments()

  add_assets()

  remove(".//div[@id='AjaxLoading']")

  # Add accordions.
  $(".//div[contains(@class, 'FeaturedProducts') or contains(@class, 'NewProducts') or contains(@class, 'TopSellers') or contains(@class, 'PopularProducts') or contains(@class, 'CategoryContent') or contains(@class, 'SideRelatedProducts') or contains(@class, 'SideRecentlyViewed') or @id='SimilarProductsByCustomerViews'][count(*) > 0]") {
    attribute("data-ur-set", "carousel")
    attribute("data-ur-infinite", "disabled")

    $(".//ul[contains(@class, 'ProductList')]") {
      attribute("data-ur-carousel-component", "scroll_container")

      $("./li") {
        attribute("data-ur-carousel-component", "item")
      }
    }

    insert("div") {
      attribute("data-ur-carousel-component", "dots")
    }

    $(".//a[contains(., 'Add To Cart')]") {
      add_class('button add-to-cart')
    }
    $(".//a[contains(., 'Choose Options')]") {
      add_class('button choose-options')
    }
  }

  # Remove newsletter subscription
  remove(".//div[contains(@class, 'NewsletterSubscription')]")

  @import "sections/header.ts"
  @import "sections/footer.ts"

  @import "mappings.ts"

}
