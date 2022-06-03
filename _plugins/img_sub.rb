# Inspired by https://gist.github.com/mmistakes/77c68fbb07731a456805a7b473f47841#gistcomment-2940035
#
# Description: 
#   Takes the image path and image alt text specified in Markdown 
#   and sends it to partial/image.html, where we override the 
#   default HTML output to add Fastly IO parameters.

Jekyll::Hooks.register :documents, :pre_render do |document, payload|
docExt = document.extname.tr('.', '')
# only process if we deal with a markdown file
if payload['site']['markdown_ext'].include? docExt
    newContent = document.content.gsub(/!\[(.*)\]\(([^\)]+)\)(?:{:([^}]+)})*/, '{% capture alt-text %}\1{% endcapture %}{% include image.html url="\2" alt=alt-text %}')
    document.content = newContent
end
end
