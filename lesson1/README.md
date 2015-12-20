#Optimization

- Don’t go overboard - think time + risk
- Not all tools are created equal, and not all optimisations are worth doing.
- e.g. use chopsticks to eat a steak, vs using knife and fork - the right tools!

##IDE vs Editor

- e.g. Steak Knife vs. pocket swiss army knife

####IDE: Integrated development environmnet
an attempt to create a development productivity swiss army knife that can do it all
- editing
- debugging
- building
- compiling
- optimizing

IDE’s come at the expense of using tools that do one thing really well. It works well with XCode and Android Studio - they offer official support and control the programming language and platform

But on the web, we live with fragmentation:
- different browsers
- different devices
- different standards

Embrace the chaos and use individual tools best for each job, while ensuring that they function well together.

###Choosing an IDE:
- well supported
- stable

####Switching between tags with Atom

- CMD+ T: this is easier than looking for a previously open tab that you know the name of -zero mouse input - faster and simpler than clicking a tab.
- CMD+R
- Tab completion and snippets
- img then press tab
- Multi-selection ALT+ drag
- CMD SHIFT P - find new cool things

###What to look for in a build tool:

- Fast (live reload)
- Community-driven (add plugins, stackoverflow)
- Modular & Extensible
- Feature-rich
- solves problems out the box

Grunt -has most these. Gulp - 2 significant advantages over grunt - it’s built for speed and can execute tasks in parallel, plus converts open files into super fast streams internally.

Gulp’s tasks use code over configuration, meaning you can just use normal javascript, and extend or modify tasks that don’t work for you.

Grunt focuses on configuration, while gulp focuses on code - but what does that even mean in practice?

- it uses a JavaScript config object to configure certain tasks, such as concat and uglify
- to change any of these tasks, you have to go into the actual plugin themselves

Consider the same functionality in a gulp config file,

- it’s much more like standard javascript
- at any given point, you can intervene and pipe your files into another function before moving on 
- the second big argument is all about speed. Grunt executes tasks in sequence, one after another, while Gulp, by default executes tasks in parallel, and finishes when all have finished. - but that’s not only what makes gulp faster
- Gulp comes with a concept called streams, that costs much less i/o or file system access
