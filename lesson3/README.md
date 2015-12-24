###What happens when you connect your build process to the browser?

Magic - think about live editing, say your job is to construct shelves - just imagine how much life would suck without a power drill.
A manual screwdriver would work if you’re just constructing one shelf for yourself once a year
but a power drill will save you lots of time and energy in the long run, and will be a great optimisation

Live editing solves the problem of editing your code, going to the terminal, then refreshing the browser - it works by having a watcher in your editor, or build process that’s connected to a similar watcher in the browser.

When you save a file in the editor, the editor communicates with the browser, and the website is reloaded, or patched on the fly without you having to intervene.

- that means fewer context switches, as you can now have your editor next to your browser window, and watch for changes as you code.
- you can set up live editing in a number of ways, here are 3:

1. Every keystroke in sublime
2. Every save via gulp
3. All in the browser - move your entire workflow into the browser - skipping the editor!

in the end, we prefer the build tool option, 

Browser sync allows us to have live editing that is assisted by our build tool, improving upon editor live editing and all in the browser live editing.

We can make use of the watch task to implement browser sync.

Browser-sync works by creating or proxying a local webserver which serves and tracks your files for changes 
But what is a proxy server, and how does browsersync work??
http://windows.microsoft.com/en-gb/windows-vista/what-is-a-proxy-server
A proxy server is computer that functions as an intermediary between a web browser (such as Internet Explorer) and the Internet. Proxy servers help improve web performance by storing a copy of frequently used webpages. When a browser requests a webpage stored in the proxy server's collection (its cache), it is provided by the proxy server, which is faster than going to the web. Proxy servers also help improve security by filtering out some web content and malicious software.
Proxy servers are used mostly by networks in organizations and companies. Typically, people connecting to the Internet from home will not use a proxy server.
- Browser sync works across multiple devices - tablets, etc


