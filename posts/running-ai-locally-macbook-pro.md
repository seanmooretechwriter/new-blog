---
title: "Running AI Locally on a MacBook Pro"
date: 2025-10-25
description: My journey from cloud-based AI to running local LLMs with Ollama, discovering how simple it can be, and exploring the future of on-device AI models.
tags: posts
layout: post.njk
---

## My Journey to Local AI

I first started exploring AI in greater depth earlier this year. At the time I was using my old 2018 MacBook Pro. It was struggling, at best. That was just using AI tools in a web browser.

One thing that's really been on my mind is running AI locally. I had a really good feeling that old 2018 MacBook Pro would not be too great at running AI locally. I ended up taking the plunge and getting a much better, newer MacBook Pro, mostly with the intention of working with AI tools and of course running AI on the machine.

## Setting Up Ollama

Running AI models locally was quite mysterious to me and my mind had it turned into some complex, time intensive task. It ended up being both quick and easy. Well, with the help of Claude.ai, anyway.

I installed Ollama via the Terminal using:

```bash
brew install ollama
```

After that I downloaded a model using:

```bash
ollama run llama3.2
```

Then I opened a new Terminal window and ran:

```bash
ollama serve
```

I then ran:

```bash
ollama run llama3.2
```

Boom! Right there in my Terminal was a chat interface to the LLM, running locally. I was pretty shocked at how quick and easy this really was.

## The Lightbulb Moment

I started digging to understand how things were working out of curiosity. I ended up realizing the model is basically running through a server. When I'm chatting with the model it's accepting requests, like any API would. So many things clicked for me at that moment.

Way back in 2022 I'd experimented with the OpenAI API. I was trying to figure out how to send generated JavaScript to another JS interpreter API, then send the errors back to the OpenAI API so it could try to fix its own code.

What I realized running the AI on my local machine was, it's the exact same thing. The AI is just an API that accepts input, processes the input, then returns output. Nothing all that magical, or mysterious.

## Next Steps: Better Models

My new MacBook is a decent one so the next steps for me are to acquire some better LLMs to experiment with. The llama3.2 model isn't terrible, but it doesn't feel as powerful as Claude Opus or Sonnet, or even Gemini 2.5 Pro. Totally understandable as llama3.2 is a much smaller model. I believe this machine should be able to run some of the larger, more powerful models and I'm really curious to see them in action.

## The Future Vision

The next step is one of my larger, more long term goals. Once I heard Apple is working on moving the models onto their hardware, I think we all saw a glimpse into the future. It just makes so much more sense. The privacy issues are resolved as well as cost.

I'm currently on the highest tier of the available subscriptions for the Claude Max plan. It's quite expensive, and despite the cost I'm still hitting usage limits regularly. If the models are moved onto devices and they perform well enough, I think the cloud based products won't be as appealing.

This also enables a developer to write applications that access an LLM that's on the user's device. That's what I'm working to figure out next. How to access the AI for an application that's running on my machine.

I suspect it may be a little while before the models are available on all personal computers and smartphones, tablets, etc. However, if that's what's next, applications will be able to harness the power of AI without the same cost restrictions. I can't even imagine the cost for an application that uses one of the cloud based AI APIs, especially for an application with a lot of users.

## Wrapping Up

Anyway, that's where I am with AI now. More exciting development, and blog posts ahead!
