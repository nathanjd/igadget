$(".//div[@id='Footer']") {
  # Insert a line break at the end of every sentence.
  $('./p') {
    inner() {
      replace(/\.(?=([^"]*"[^"]*")*[^"]*$)/, ".<br/>")
    }
  }

  insert("p", "powered by:", class: "mw-footer")
  insert("div", class: "moovweb-logo")
}