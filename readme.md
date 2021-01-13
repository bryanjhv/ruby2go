# Ruby2Go &nbsp;&nbsp;&nbsp; [![Donate][paybtn]][paylnk]

Run Ruby in your Firefox OS smartphone.

## Installation

Open the Marketplace in your Firefox OS device, search for "Ruby2Go" then
install it! Or, go to https://marketplace.firefox.com/app/ruby2go/.

P.S.: Yes, it's on the Marketplace now. :smile:

## Contributing

I'm using Bower and Gulp, so grab these before proceeding.

1.  Fork and clone the project.
2.  Install bower dependencies (run `bower install`).
3.  Make your changes inside `app` folder.
4.  Create the package (run `gulp`), generates `dist` folder and `package.zip`.
5.  Test your changes with the WebIDE.
6.  Submit a pull request to this repository.

For now, I **need contributions about**:

- New features. (specially Firefox OS specific ones)
- Bug fixing. (but only tested on real devices)
- Better UI. (better if it matches Mozilla patterns)
- Faster compilation. (current takes about a second)
- Cross-browser support. (for the future)
- Testing.

## Credits

I'm using and distributing some libraries I wish to thank:

- [Ruby](https://www.ruby-lang.org) for being so awesome.
- [CodeMirror](https://codemirror.net) for the Ruby editor.
- [Opal](http://opalrb.org) for Ruby to JavaScript conversion.
- [Font Awesome SVG-PNG](https://github.com/encharm/Font-Awesome-SVG-PNG) for
  some of the icons I used.
- [Gaia Building Blocks](http://buildingfirefoxos.com) for the UI design and
  implementation.

## License

This project is released under the [MIT license](license.txt). The licenses for
the libraries used are [here](thirdpartylicense.txt).

[paybtn]: https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif
[paylnk]:
  https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=DVB7SSMVSHGTN
