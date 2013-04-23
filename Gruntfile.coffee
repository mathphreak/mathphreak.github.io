fs = require "fs"

module.exports = (grunt) ->
    grunt.initConfig
        pkg: grunt.file.readJSON 'package.json'

    grunt.registerTask 'new', 'Create a new blog post.', (arg) ->
        throw new Error "No post name given!" unless arg?
        now = new Date
        str = now.toISOString()
        contents = """
                   ---
                   layout: post
                   title: #{ arg }
                   ---

                   """
        console.log contents
        filename = "_posts/#{ str.substr 0, str.indexOf 'T' }-#{ arg }.markdown"
        fs.writeFileSync(filename, contents)