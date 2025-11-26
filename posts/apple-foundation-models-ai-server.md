---
title: "Building a Simple AI Server for Apple Intelligence Foundation Models (On Device)"
date: 2025-11-26
description: A lightweight Swift HTTP server that exposes Apple's Foundation Models API, enabling on-device AI access from JavaScript, Python, or any language without cloud APIs or costs.
tags: posts
layout: post.njk
---

# Building a Simple AI Server for Apple Intelligence Foundation Models (On Device)

When Apple announced the Foundation Models framework at WWDC 2025, I was excited. Finally, a way to run AI locally on my Mac without sending data to the cloud or paying per request fees. There was just one problem: it's Swift only 😕

So I built a simple HTTP server that wraps Apple's Foundation Models API. This solution provides on device AI from JavaScript, Python, or any other language.

Get the source code here: [https://github.com/aicodechef/apple-foundation-model-ai-server](https://github.com/aicodechef/apple-foundation-model-ai-server)

## The Problem

Apple's Foundation Models framework is powerful:
- Runs entirely on device (privacy first)
- Uses the Neural Engine (blazing fast on Apple Silicon)
- Zero API costs (unlimited requests)
- Works offline

But accessing it requires:
- Learning Swift
- Understanding Foundation Models API
- Building in Xcode

## The Solution

I built a lightweight HTTP server in Swift that exposes Foundation Models through a REST API. Now you can do this from JavaScript:

```javascript
const response = await fetch('http://localhost:8080/completion', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    prompt: 'Explain closures in JavaScript',
    systemPrompt: 'You are a patient programming tutor'
  })
});

const data = await response.json();
console.log(data.response);
```

That's it. No Swift, no Xcode, no cloud APIs.

The process of creating the Swift server wrapper app wasn't incredibly difficult or time consuming. It was also interesting to take a closer look at Swift and the Foundation Models API.

I personally don't have any huge desires to build an application completely written in Swift at this point in time. My original idea was to access the AI natively available on my MacBook, preferably from a JavaScript and HTML based application, potentially using Electron. Hence the idea for the Swift server.

## Why This Matters

### Privacy First

In an era where every API call sends your data to someone else's servers, having truly local AI is powerful. Your prompts, your code, your ideas all stay on your machine.

This matters for:
- Sensitive code review
- Personal knowledge management
- Client work with NDAs
- Learning and experimentation

### Zero Cost

Cloud APIs are amazing, but costs add up fast. With this approach:
- No per token charges
- No monthly subscriptions
- No rate limits
- Unlimited experimentation

### Developer Experience

Web developers shouldn't need to learn Swift to experiment with AI. An HTTP API is universal:
- Works from any language
- Standard JSON request/response
- Easy to integrate into existing apps
- No platform lock in

## How It Works

The architecture is surprisingly simple:

```
┌─────────────┐    HTTP     ┌──────────────┐    Swift API    ┌─────────────┐
│   Your      │ ──────────► │   Server     │ ──────────────► │ Foundation  │
│   Web App   │   JSON      │   (Swift)    │  LanguageModel  │ Models (AI) │
└─────────────┘             └──────────────┘                 └─────────────┘
                                                               (On-Device)
```

Your app sends HTTP POST with a prompt
- Swift server validates and processes request
- Calls Apple's Foundation Models API
- AI runs locally on Neural Engine
- Response returned as JSON
- No data leaves your machine

## The Code

The core is about 200 lines of Swift. Here's the interesting part: handling the actual AI generation:

```swift
func generateCompletion(
    prompt: String,
    systemPrompt: String? = nil,
    temperature: Double? = nil
) async throws -> String {
    // System prompts aren't a direct API in LanguageModelSession
    // So we prepend them - this is a common pattern when
    // the API doesn't support native system messages
    let fullPrompt: String
    if let systemPrompt = systemPrompt {
        fullPrompt = """
        System: \(systemPrompt)

        User: \(prompt)
        """
    } else {
        fullPrompt = prompt
    }

    var options = GenerationOptions()
    if let temp = temperature {
        options.temperature = temp
    }

    // This runs on your Mac's Neural Engine + GPU
    let response = try await session.respond(to: fullPrompt, options: options)
    return response.content
}
```

The trickiest part? Getting the HTTP server to actually wait for responses to send before closing connections. Async networking in Swift has some gotchas:

```swift
// Wait for send to complete before closing connection
await withCheckedContinuation { continuation in
    connection.send(content: response, completion: .contentProcessed { _ in
        continuation.resume()
    })
}
```

Without this, responses would get cut off mid-transmission.

## Performance Notes

On my M4 Max:
- First request: ~2-3 seconds (model loads)
- Subsequent: <1 second for typical responses
- Memory: ~2-4 GB
- Totally snappy after warmup

The first request is slower because the model loads into memory. After that, it's incredibly fast.

## Limitations

Let's be honest about what this isn't:
- **Not a GPT-4 replacement**: Apple's model is ~3B parameters. It's designed for on-device efficiency, not world-class reasoning.
- **Not production-ready**: No authentication, rate limiting, or proper error handling. This is a development tool.
- **Device requirements**: Requires macOS 26 (Tahoe) and Apple Silicon that supports Apple Intelligence.

Best for:
- Prototyping, R&D, experimentation
- Local development
- Learning
- Privacy sensitive work

Not for:
- Complex reasoning
- Latest world knowledge
- Production deployments (yet)

## Final Thoughts

We're in an interesting moment. AI is powerful but mostly cloud-based. Privacy concerns are real. Costs add up. Open source models exist but are complex to deploy.

Apple's Foundation Models framework is a middle ground: powerful, private, and built-in. But it needed a bridge to the web development world.

This server is that bridge.
