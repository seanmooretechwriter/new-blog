---
title: Building an NES Style, Browser-Based Game with Claude Code
date: 2025-10-04
description: A detailed journey of building an NES-style browser game using Claude Code CLI, covering first impressions, vibe coding, SVG graphics generation, testing strategies, and lessons learned from a massive refactoring disaster.
tags: posts
layout: post.njk
---

## The Journey Begins

For the last couple of months I've spent my weekends, and a few evenings, building an old school, NES style game using AI. There have been moments of triumph, moments of frustration and everything in between. I don't have any hard numbers or stats on the time I've spent working on the game. In retrospect that may have been useful data. I'm not going to lament on that though. The main intention was to learn more about application development using Claude Code.

I'm not a gamer. I'm also not a game developer. Sure, I've made a few toy games in the past, as most devs have. I also have built some game-like applications, mostly in the e-learning space. That said, game development, and gaming in general are not my expertise. That's part of the reason I chose a game to build. This is new territory for me. My thinking is, don't translate anything from memory through the AI into code and an application. For this experiment that's what I wanted. I would probably do the opposite outside of any strict learning or experimental work.

## First Impressions with Claude Code

This was my first time using a CLI AI tool. At first it all seemed quite mysterious to me and my brain had a tough time grasping the concept. The first few times I started Claude Code in the Terminal were somewhat intimidating. Granting any access to my machine to an AI tool feels strange, maybe even scary. Those fears were quickly suppressed though, because one of the first things Claude Code does is ask for permission to a specific directory on the system it's running on.

I'd previously built an extremely simple application with Cursor IDE. The process I used was more typical of how I generally work with AI when coding. So, precise, surgical and very intentional; maybe one step removed from actually typing the code out myself. I created a very simple MVC style framework, and then built the app on top of the simple framework. I used this similar approach when starting to build the game with Claude Code.

## Embracing "Vibe Coding"

I tinkered with the framework and initial scaffolding, eventually landing on a more IoC style framework to build the game within. I didn't work in the same fashion that I typically would though and really let Claude Code drive. So, closer to what a lot of people would classify as Vibe Coding. This approach felt pretty weird at first, and continued to feel strange during the development. The way I used Claude Code I didn't keep a close, intentional eye on the code being written. I just let the AI do its thing. This was a very intentional decision. I guess we could call it intentionally being unintentional.

Once I embraced "the vibes" and focused on what I wanted the game to be, how it should look and how it should function, the initial development process was relatively smooth and fast. That itching question crept in many times though, what does the code look like!? I took a quick peek here and there, but for the most part I continued to let the AI do its thing and write the code. My focus was quality prompting, context engineering and the look and feel and functionality.

## Surprising Graphics Capabilities

One thing that really surprised me was the ability of the AI to create graphics. My first pass through the levels for the game ended up being prompt driven. I explained through prompts how each level should look, and what it should contain. In addition to the levels, the intro screen, leaderboard, main player character and enemy characters were all created through prompts. Granted I wasn't trying to build some hi fidelity, 3D, modern type of game, so the graphics are simple. I guess I was surprised the AI could create any graphics that were even halfway decent looking purely through prompting.

At a later point in the game I had a different idea for the graphics for the various levels. It occurred to me that I'd need to design many levels to continue down the path I had started for the game scenery. I decided it might be cooler to dynamically generate the scene for each level by using a large graphics library. That seemed like a better approach to game design. I've created various images in the past with ChatGPT and to a lesser extent, Gemini. So I know AI generated images was an option. I ended up using the web based version of Claude to generate graphics. As it turns out Claude can generate SVG graphics, if you ask it to. At first it said it couldn't generate graphics at all. These SVG graphics worked really well because I ended up simply providing the SVG data to Claude Code and it integrated it into the game, mostly without a ton of manual effort.

I have a feeling it was because I switched the way the scenes were generated in the game, but there was some trial and error getting the SVG graphics into the game. Mostly with regard to positioning. I went through several rounds of prompts getting some of the graphics positioned on the y axis correctly. This was actually a recurring problem during the development of the game.

## Testing and Logging Strategies

A couple of things I figured out and ended up doing were, create a suite of unit tests, create a suite of end-to-end tests and create a system where the console.log statements are piped out to files each time the game is run. The tests are for obvious reasons. The logging was something I figured out while working with Claude Code to develop the game.

At first I would copy and paste errors from the console window in the web browser, or from the GitHub Action build log. The size of the logs ended up consuming a lot of tokens. I kept getting downgraded to Sonnet from Opus and reaching my account usage. It occurred to me that it would be better to write the logs to the file system and then have AI search the logs, using grep, to find the specific information it needed. It ended up working pretty well. I did have to keep telling the AI to look in the logs directory and read/search the logs. I suppose this is something that could be added to a context file, like the CLAUDE.md file.

## Working with CLAUDE.md

Speaking of the CLAUDE.md file. When I first watched a few videos on Claude Code before using it, the whole concept of context engineering and using files like CLAUDE.md fascinated me immensely. It was one of the more interesting advancements I've seen in the AI space. Now that it's not as much of a mystery the combination of a terminal based app having access to the file system and OS level command line commands coupled with using files like a CLAUDE.md file are two of the stand out features of Claude Code, or any CLI based AI tool that's similar.

I'm not sure of the exact best practices or best approach for working with the CLAUDE.md file. My initial research and understanding are that it's the main plan, context and project level information for an application. When you first start Claude Code and build the application the file will be read and work will begin. It's the main, project level, starting prompt. In the beginning of the development process I constantly had Claude Code update the CLAUDE.md file. I guess the thinking was, keep the file updated to let Claude Code know what's going on with the application and its codebase, and each time I start Claude Code this file will be valuable to resume development. That worked pretty well at first.

I don't know if it was the specific information that Claude Code was adding to the CLAUDE.md file, or the size of the file, but after a while it didn't seem to matter much anymore. I stopped having Claude Code update the CLAUDE.md file and didn't notice a ton of difference as I continued to work on and refine the game.

## The Refactoring Disaster

After several weeks of development I decided to finally take a closer look at the code that was being generated. The codebase had started to grow substantially and I figured it was enough AI generated code to take a look at. It wasn't as horrible as I'd feared. I think the three main things that stood out initially were the class sizes, the method size and the conditional statements. The classes and methods were pretty huge, at least too huge for my taste. I figured this would be a good time to experiment with refactoring a non-trivial sized codebase with a CLI based AI tool.

Things didn't go that well, at all. You may have seen the meme on social media that says something like AI wrote such amount of code and it was beautiful, it just didn't run. That sums up my first experience refactoring a decent amount of code with AI in large sweeps. I wrote some quite specific prompts about adhering to SOLID principles, decomposing classes into more focused, smaller classes, shortening methods, and creating packages to better organize things. I also instructed Claude Code to clean up the conditional logic, use the early exit pattern, etc. Around this time is when I also started using the web based version of Claude to generate more Claude Code friendly prompts. So my refactoring prompts were quite detailed and specific.

I think this was the first time I actually just had to step away from the machine for a while, other than when I hit usage limits. After sending my refactoring prompt Claude Code worked and worked. Once it finally finished the refactoring work I started looking through the codebase again. The first thing I noticed is that only some of the refactoring work was done. Mostly some of the organization, and class and method size reduction and decomposition. I was pretty impressed. Until I ran the game.

There were countless regressions and breaking changes that had been made. This is despite explicit instruction to avoid making any breaking changes and to retain and maintain all existing functionality. It didn't bother me much and I started down the path of pointing Claude Code to the log files to search for errors and fix them. I spent a few hours doing so with the anticipation and goal of restoring all of the broken functionality. I believe this was the first time I encountered the positioning problems with the SVG graphics. I spent enough time trying to get everything working again that I really started questioning everything about AI assisted programming. Really for the first time since the introduction of ChatGPT. It had been a long day and I stepped away from the machine for the evening.

## Lessons Learned

My conclusion the next day was, revert to the commit before the refactoring and subsequent attempts at restoring functionality. Also, any fears anyone has about AI taking their dev jobs should certainly be tempered. After some sleep I'd realized that you can't throw the AI baby out with the AI bathwater. It's going to have limitations. Who knows what the future holds, but it's not one-shot prompting entire end to end applications for humans without knowledge of programming languages, development, and all of the other things a software developer knows and knows how to do. The creative problem solving and critical thinking is what a human knows how to do. The coding and moving things around in memory on a machine are what AI knows how to do. Why not meet in the middle? Learn what the AI is good at and use it to the best of our human ability. At least for now, who knows what five years from the time of this writing looks like. I've spent a lifetime in this profession and field and regardless of AI, it's quickly moving water, at best, period. So hang on.

I'll probably write more about this soon. This post is growing and I fear it is reaching the, too long, didn't read, phase. Until next time...