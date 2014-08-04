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


  @import "sections/header.ts"
  @import "sections/footer.ts"

  @import "mappings.ts"

}
