---
title: Source Code for NES-Style, Browser-Based Game Developed with Claude Code (CLI)
date: 2025-10-11
description: Releasing the public source code repository for Moo Chainz game, with observations on AI-generated code quality, refactoring decisions, and broader thoughts on the future of AI-assisted development.
tags: posts
layout: post.njk
---

## Introduction

If you've been following along, you're aware of the simple, browser-based, NES/arcade-style game I built with Claude Code (CLI). If this is your first visit and you're interested in my thoughts and observations throughout the development journey, there are additional blog posts that may be of interest.

## The Repository

I've created a public repository with the source code for the game:

[https://github.com/aicodechef/moo-chainz-game-public](https://github.com/aicodechef/moo-chainz-game-public)

For the most part, the code is straight output from Claude Code. I did spend some time working with Claude Code to refactor and clean up the code, but I deliberately avoided intensive, line-by-line refactoring. This decision provides an opportunity to examine the raw code output from Claude Code and the underlying Opus and Sonnet models (LLMs).

## Initial Code Review Observations

I've looked through the code a few times and will continue studying it. Part of the plan is to build context that I can provide to Claude Code in CLAUDE.md files to help guide it toward writing better code. I'm also curious what raw code output from an LLM looks like.

From my initial review, the code isn't as bad as it could be or as bad as I've seen from other code generation tools. I've seen similar and worse code written by humans, including myself. Two things stood out immediately:

- The classes and methods are too large
- The conditional logic is pretty gnarly

## Broader Thoughts on AI-Generated Code

Code quality is a major concern in the wider scope of AI-assisted development. There are countless stories across social media and the internet criticizing AI and the code it produces. From my experience, there are a couple of important things to consider: the quality of the prompts and the specific model (LLM) you're using. Good prompting with clear and precise direction, combined with a higher quality model, will result in much better output than a lower quality model with vague, incomplete, or unclear direction.

I don't use any prompting tricks. I do try to form my thoughts into clear, actionable, direct messages. I also believe that shorter prompts working in small chunks of information are more effective than huge prompts making large, sweeping changes.

## Looking Forward

I'm of the mindset that the models and tooling will continue to improve. I believe that over time, developers will continue to refine and craft their approach when combining AI with the software development workflow and process. I do find myself asking: what will software development look like in five, ten, and twenty years?