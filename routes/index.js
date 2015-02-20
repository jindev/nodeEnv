doctype html
html
  head(prefix="og: http://ogp.me/ns#")
    meta(charset="utf-8")
    meta(name="viewport" content="width=device-width, initial-scale=1")
    title= title
    link(rel='stylesheet' href='/bower_components/bootstrap/dist/css/bootstrap.min.css')
    script(src='/bower_components/jquery/dist/jquery.min.js')
    script(src='/bower_components/bootstrap/dist/js/bootstrap.min.js')
  body
    block content
    include ga
    include github_badge