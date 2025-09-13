---
title: Building a Custom Game with Claude Code (CLI)
date: 2025-09-13
description: A detailed journey of creating a complete custom game using Claude Code CLI, covering everything from SVG graphics generation to automated testing, code quality challenges, and practical development strategies.
tags: posts
layout: post.njk
---

Over the past several weeks I've built a completely new custom game. The entire game was created with Claude code and Claude.ai in a web browser. The browser version of Claude was used for research, creating graphics, and writing prompts.

## Why a Game?

### Background: My Limited Gaming Experience

I'm not a gamer. I played a decent amount of Atari and NES back in the day, but my gaming days mostly stopped in the late 80s. There were some games I played in the 90s and I tried GTA in the early 00s to see what the hype was about. For the most part though, I haven't played many games over the last 20 years.

### The Technical Challenge

I chose a game because it's a non-trivial application to build. While it doesn't have the same needs as a cloud-based web app, there's substantial logic within a game that wouldn't exist in a typical web application. There are elements of front-end to backend functionality such as the login and leaderboard, which I felt were sufficient for this development initiative. This was my first attempt at using Claude code to build an application, so I tried not to get too carried away.

## Discovering SVG Graphics Generation

Before beginning this journey, I wasn't aware that Claude.ai could create SVG graphics. When I first asked it to create graphics, it said that functionality wasn't available. Some quick research indicated that the SVG format was supported. I started providing the SVG markup to Claude code and it was able to add the graphics to the game. Getting Claude.ai to generate NES style graphics was challenging, but after some trial and error I got it working well enough. The AI-generated graphics approach was substantially faster than creating them all by hand.

## Planning with CLAUDE.md

I started the project by iterating with Claude.ai to generate a prompt that could be used as the CLAUDE.md file. This required thinking through as much of the game as I could at the time, similar to writing a technical design document for any other application. I like this approach and how it pushes the developer to write out a project plan and think through the tech stack, purpose, and desired functionality of the application.

## The Development Process

### "Vibe Coding" vs Traditional AI-Assisted Programming

In contrast to most of the AI-assisted programming I do, the process for the game was what people call "vibe coding." In this process, I act as an overseer, director, and orchestrator of the AI while it's writing code. Typically when I'm using AI for programming, I take a hands-on approach. It's some combination of research, reading documentation, Google searches, and looking through discussions on StackOverflow or Reddit. The process involves a web browser and an IDE. I've used Copilot and Cursor as well and I generally approve or reject any code being generated. I've found this to be a productive approach to development.

### Key Observations About AI-Assisted Development

A couple of observations on AI-assisted development:

- The better I know the language and environment, the better the AI's results and the more productive I can be
- The better I understand the exact problem I'm solving, the more effective using AI becomes

## Version Control is Critical

I've learned quite a lot about AI-assisted programming and Claude code during the development of the game. That was the primary goal of this exercise. One thing that's important to pass along is using git and making sure you commit changes regularly. This is a lifesaver when the AI goes off the rails and makes unintended changes or when something goes wrong and your application breaks. This only happened twice during the game dev sessions. After the second time, I devised a strategy for working incrementally and making frequent commits. When things go wrong, I can revert to the last commit and reevaluate the current problem or feature I was implementing.

## Automated Testing Strategy

Another effective practice is having the AI create unit and e2e tests. The tests run for the branch containing the code for my game app each time I push the repo to the remote. This has helped me keep an eye on the state of the tests and any failures that may have occurred. When there are failures, I can provide the error log to Claude code and work to resolve them and understand what went wrong. I haven't taken a deep look at the test code, but I did provide instructions indicating that the tests should only be created for core application logic and that the codebase doesn't need 100% test coverage.

## Initial App & Codebase Creation

### Starting with Clean Architecture

The initial code generated after running the main prompt in the CLAUDE.md file wasn't bad. I'd originally created a set of instructions for a previous app and reused and adjusted it. The instructions contained information about the stack, languages, coding techniques, architecture, and patterns I wanted to use. I ended up iterating on the base level code for a bit, converting a simple MVC architecture to a more IoC approach. All of this code in the beginning was pretty clean.

## As the Codebase Grew

### The Code Quality Question

Now, the elephant in the room: code quality. That's a fair question and concern. I've worked with plenty of tools that generated subpar code. I've also worked with plenty of code written by humans that was brittle, difficult to understand, and far from elegant. I'm not advocating that garbage code should be generated or that accumulating tech debt is acceptable. I think AI-assisted programming tools and techniques are worth exploring. They have a use, a place, and a time. Using the tools and learning about their strengths and weaknesses can be valuable for developers.

### Specific Code Issues Observed

The code quality of the game isn't award-winning, but I've seen worse from human developers. One issue with the code for the game is how it grows without much regard for cleaning things up as the AI works. It continues adding code to an ever-expanding codebase. Another issue is the size of the classes being generated; they're huge. The overall naming of classes and members isn't terrible. Names are important but I'm not going to spend excessive time choosing names for an experimental application.

## Refactoring AI-Generated Code with AI

### The Refactoring Experiment

One of the things I tried was using AI to refactor its output. On the surface, this went well. I came up with a list of things to address to clean up the code and walked Claude code through performing the tasks. I worked with the AI to make some large sweeps across the growing codebase. Tasks ranged from cleaning up dead code to moving magic numbers and strings into constants, and more complex assignments like splitting methods and classes apart into smaller units. Even more complex refactoring instructions were provided on a general level, like searching for and eliminating known code smells.

### Lessons from Failure

I worked through this cleanup for about 4 hours, hoping I could do it all in one sweep then do thorough manual testing to ensure nothing had been adversely affected. I made regular stops to clean up, modify, and add unit tests for the code being refactored. Unfortunately, it was a major crash and burn. The exercise did provide valuable lessons though. I still want to try this code cleanup using Claude code on the codebase it created. I learned that it's probably better to work one class at a time, or find another way to isolate the work into smaller segments rather than making huge sweeps across the codebase all at once. I wouldn't typically do that when using AI to write code, but I wanted to try it to see what would happen.

## Have the AI Read from Runtime Logs

### The Token Problem

During the development process, I noticed that providing error logs to Claude code started using too many tokens and poisoning the context. I tried to provide only the relevant error information from the logs, but that became too cumbersome.

### A Creative Solution

What I did instead was have Claude code add logic to my application to write error logs to the file system. Then I directed the AI to read through the logs, using grep to find what it needed to resolve errors and troubleshoot problems. I wasn't sure if it would work, but it actually worked really well. This is a useful tip for anyone else learning about Claude code and how to effectively use it for development.

## Automated Code Review Tools

### Exploring AI-Driven Reviews

Something I've been wanting to explore further is tools such as CodeRabbit. I've tried the automated AI-driven code review in Copilot a little bit and from what I've seen it could be improved. I'm curious if there are better tools. I also wonder if AI-driven PR reviews are effective. I may run some of the game codebase through them and see what happens. It could be an interesting experiment.

## Conclusion

That's probably enough for one blog post. I hope you've found some of this entertaining or helpful. The game is still in active development. I should have a new post soon with a link to the repo and a playable version of the game. Until next time...