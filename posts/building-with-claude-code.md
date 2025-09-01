---
title: Building an Application with Claude Code (CLI)
date: 2025-09-01
description: Real-world experience using Claude Code CLI for AI-assisted game development, including debugging techniques, code quality insights, and practical tips for managing token limits.
tags: posts
layout: post.njk
---

## The Journey So Far

I've been working on a simple browser-based NES style game for around a month now. The main intention was to work with Claude Code to build an application.

For the most part, I let Claude Code drive. So, you could say I'm "vibe coding". I think that's a bit of a loaded term at this point in the evolution of AI though. There are a lot of negative connotations surrounding what is and isn't vibe coding. To be clear, I'm a software developer and have been for quite some time; **decades, not years**.

I think a better explanation of what I've been doing is **context engineering mixed with vibe coding**. I think an even better qualifier is really just **AI assisted development**.

This particular development effort has involved less of a variable by variable, method by method approach and more letting the AI write the code. This has been a very intentional decision. I've been using AI to assist with writing code in a much more closely monitored way for a couple of years, with a great amount of success.

## The Three Tiers of AI-Assisted Development

I'd consider AI assisted development to have three tiers:

1. **Browser + Chatbot**: Using a web browser and a chatbot to generate code, then copying and pasting into an IDE
2. **AI-Capable IDE**: Using an AI capable IDE such as VSCode with Copilot or Cursor
3. **CLI Tools**: Using Claude Code or Cursor CLI and providing files with context or detailed instructions for building applications

Each has its advantages and disadvantages. There are also tips, tricks and techniques for each methodology. It's also possible to combine one or more of these approaches into a development process or workflow.

## The Cost of Building with AI

While developing my game with Claude Code I've discovered that the **Pro plan at $20 a month is not sufficient** for steady, in-depth coding. I ended up upgrading to the Max plan at $100 a month. Even with the Max plan I keep running into account restrictions and usage limits. 

I also have noticed that I'll get a handful of decent sized prompts to work with the **Opus model**, then I'll get downgraded to the **Sonnet model**. After a few hours I'll get another set of prompts to use Opus, but then it's back to Sonnet. There is a very noticeable difference between the two models when using Claude Code. I've considered upgrading to the $200 a month Max plan so I can keep working when I'm in the zone.

## Debugging Strategies That Actually Work

Something else I figured out was debugging. At first I had Claude Code add logic to write logging information to the browser console window. I'd go harvest debug logs and provide them in a prompt. Sometimes I would find the specific error or information and provide that in a prompt. Other times I had to provide more robust logging information. That ended up eating too many tokens. 

So, I had Claude Code add code to write the logging information to **log files in a log directory**. Then I asked it to use `grep` to search the logs for what it needed. This approach seems far more efficient and uses less tokens.

## Code Quality: The Reality Check

One thing that a lot of people will bash on is the code an AI tool will generate. That's a fair argument, especially when you're letting the tool do most of the coding and not intervening to steer it into better patterns, avoiding duplication, and avoiding writing code that isn't that clean. 

I noticed that **smaller applications and codebases aren't too terrible**. Especially if you provide a lot of context to the AI tool about how to code, follow SOLID principles, follow best practices, etc. As the codebase grows the quality of the code definitely starts to degrade. I've stopped every so often and asked Claude Code to do sweeps across the codebase to adhere to clean coding standards and follow good engineering practices.

### The Refactoring Trap

As the codebase grows with complexity the code quality will continue to degrade. I stopped the sweeps at one point and just let the tool write the code as I provided prompts and context focused on functionality and the UI. I started looking through the code and it wasn't super terrible and impossible to understand, but it wasn't the same quality that I would write. 

I started working with Claude Code to clean up the codebase. It did really well cleaning up the code, but **there were so many regressions introduced** I ended up rebuilding a significant part of the game, restoring logic from git commits, etc. I took a really hands off approach though. I think at that point you have to really drive the AI to refactor on a smaller scale. Like, variable by variable and method by method, even splitting code into classes. That's going to be one of the things I tackle next to see how involved it will be.

## UI and Graphics: The Pleasant Surprise

This is a new application. It's mostly just me figuring out what works and doesn't work while using a CLI based AI development tool. There aren't any heavy duty security concerns. It's not a complex distributed application. It's just a simple game. The UI is somewhat complex though. That's part of the reason I chose to create a game. 

One thing that shocked me was **how good Claude Code was at translating my prompts into graphics for the game**. For what it is, a simple browser based NES style old school game it's been doing a pretty good job in the UI and game graphics department. At one point I figured out that it's actually more effective to just use Claude in the browser to generate SVG graphics, then providing the SVG to Claude Code.

## What's Next?

I'm hoping to have a beta version of the game available for public viewing soon. There are still a few things I need to finish. I'm also planning on releasing the source code for the game, for people to examine and study. I may or may not clean that code up. I think it might make sense to leave it as it is so we can all see the quality of the code generated by Claude Code in a pretty hands off development effort. One thing there though, I'm still learning how to use Claude Code and I'm sure there are some people who've worked with it more that would be able to prevent some of the huge God classes, etc.

Alright, stay tuned for more.