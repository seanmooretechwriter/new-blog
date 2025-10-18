---
title: "AI Code Generation Showdown: Testing 9 Tools with Identical Prompts"
date: 2025-10-18
description: A comprehensive comparison of 9 AI code generation tools tested with identical prompts to build a Vue dashboard, analyzing code quality, UI design, and how well each tool meets requirements.
tags: posts
layout: post.njk
---

## Introduction

Something I've been wanting to do for quite some time, now, is compare various AI code generation tools and models.

There are a few motivating factors for this experiment. I want to examine the output that different models and tools generate, and investigate the current offerings in the code generation product market. I also wanted to share the output from the tools with anyone else who might be interested.

All code examples are available on GitHub: [https://github.com/aicodechef/ai-code-showdown](https://github.com/aicodechef/ai-code-showdown)

## The Experiment

This exercise was intentionally kept simple. I used a single prompt to build a relatively simple feature of a modern web application:

**The Prompt:**
> "Build a responsive dashboard component in Vue with: Dark/light mode toggle, 3 chart types (line, bar, pie) using charts.js, Data can be mock JSON files, TypeScript with full type safety, Must be production ready"

The same exact prompt was provided to several tools and models.

**The Contenders:**
- <a href="#claude-code-cli-with-opus-4">Claude Code (CLI) - powered by Opus 4</a>
- <a href="#gemini-25-pro">Gemini 2.5 Pro</a>
- <a href="#claudeai-with-sonnet-45">Claude.ai with Sonnet 4.5</a>
- <a href="#bolt">Bolt - powered by Anthropic's Claude Agent and Claude Sonnet LLMs</a>
- <a href="#lovable">Lovable</a>
- <a href="#replit">Replit</a>
- <a href="#grok">Grok</a>
- <a href="#base44">Base44</a>
- <a href="#emergent">Emergent - powered by ChatGPT 5.0 (Beta)</a>

## UI Design Winners

Base44, Claude Code, and Emergent are taking the win for pure UI design. The visual output for the feature is definitely impressive for these tools. I'm talking about pure look and feel for the consumer or user here, not code quality. Claude.ai running Sonnet 4.5 in the browser has a great look and feel as well. Claude Code made a better dark mode version, in my opinion.

## Generation Speed

All of the tools spent anywhere from one to ten minutes generating the code for my prompt. Not bad. I wasn't expecting the browser based tools to be as sophisticated as they are. Bolt actually created an entire Vue project.

## Implementation Approaches

The tools took different approaches to delivering the solution:
- **Standalone HTML Files** (no build required): Claude.ai Sonnet, Gemini 2.5 Pro, Base44
- **Full Project Structure** (build tools required): Claude Code, Bolt, Emergent
- **Component Only** (requires existing project): Grok
- **Refused/Failed**: Lovable, Replit

## Tool by Tool Results

### <span id="claude-code-cli-with-opus-4">Claude Code (CLI) with Opus 4</span>

Claude Code knocked it out of the park. I didn't have much doubt, as Claude Code was what I used to create [a simple NES style game](https://moo-chainz-game.vercel.app/). I had recent experience using Claude Code, so I knew it would be able to handle creating the feature from the prompt.

<a href="/images/ai-showdown/claude-code-opus.png" target="_blank">
  <img src="/images/ai-showdown/claude-code-opus.png" alt="Claude Code Dashboard Output">
</a>

View the code: [https://github.com/aicodechef/ai-code-showdown/tree/master/claude-code-opus](https://github.com/aicodechef/ai-code-showdown/tree/master/claude-code-opus)

**A Quick Look at the Code:**

Claude Code delivered the most technically complete solution, properly fulfilling all requirements including TypeScript with full type safety.

**The Good:**

Claude Code was one of the few tools that properly implemented a Vue project with full TypeScript support. The type definitions are comprehensive and well structured:

```typescript
export interface ChartDataset {
  labels: string[]
  datasets: Dataset[]
}

export interface DashboardChartData {
  monthly: ChartDataset
  quarterly: ChartDataset
  categories: ChartDataset
}
```

The architecture shows strong attention to Vue 3 best practices with Composition API and composables for shared logic:

```typescript
export function useChartConfig<T extends 'line' | 'bar' | 'pie'>(chartType: T) {
  const themeStore = useThemeStore()
  
  const baseOptions = computed(() => {
    const isDark = themeStore.current === 'dark'
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: textColor,
            font: { size: 12 }
          }
        }
      }
    } as ChartOptions<T>
  })
}
```

The component structure is exceptionally clean with proper separation of concerns. Individual chart components (LineChart.vue, BarChart.vue, PieChart.vue) are composed into the main Dashboard. The theme system uses Pinia stores for global state management, which is the recommended approach for Vue 3.

The UI design shows professional polish with statistics cards, smooth transitions, and an activity feed. This goes well beyond the basic requirements with features like stat cards showing revenue metrics with percentage changes.

**The Not So Good:**

The implementation is perhaps overengineered for a simple dashboard demo. With multiple stores, composables, and component files, it might be overkill for the requirements. The file structure complexity could make it more difficult for beginners to understand.

**The Verdict:**

Claude Code delivered the only truly complete solution that met all requirements, including proper TypeScript support. The code quality is production ready with proper error handling, type safety, and Vue 3 best practices. While it might be overengineered for a simple demo, this is close to the kind of architecture you'd want in a real application.

### <span id="claudeai-with-sonnet-45">Claude.ai with Sonnet 4.5</span>

Claude.ai impressed me quite a bit with the preview functionality. When I first thought about this experiment, I assumed I'd have to take the code from each browser based tool, copy it into a file somewhere on my system, and then get it up and running. That wasn't the case with any of the tools I tried in this exercise, except for Grok.

I like that Claude.ai supplied me with a single file for the output of the feature. Absolute links to the appropriate libraries are used, making the code extremely portable.

<a href="/images/ai-showdown/claude-ai-sonnet-4-5.png" target="_blank">
  <img src="/images/ai-showdown/claude-ai-sonnet-4-5.png" alt="Claude.ai Sonnet 4.5 Dashboard Output">
</a>

View the code: [https://github.com/aicodechef/ai-code-showdown/tree/master/claude-sonnet-4.5](https://github.com/aicodechef/ai-code-showdown/tree/master/claude-sonnet-4.5)

**A Quick Look at the Code:**

Claude Sonnet 4.5 delivered a polished, production ready solution that works immediately and goes beyond the basic requirements.

**The Good:**

This is a completely standalone HTML file that opens and runs in any browser. No build tools required:

```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/3.3.4/vue.global.prod.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.umd.min.js"></script>
```

Claude went beyond the requirements by adding a stats dashboard with formatted metrics:

```javascript
const formatValue = (value, label) => {
  if (label.includes('Revenue') || label.includes('Value')) {
    return `$${value.toLocaleString()}`;
  } else if (label.includes('Rate')) {
    return `${value}%`;
  }
  return value.toLocaleString();
};
```

This shows thoughtful attention to real world dashboard needs. Revenue displays as currency, rates as percentages, and everything includes proper number formatting.

The chart theme update approach is more efficient than some competitors:

```javascript
const updateChartThemes = () => {
  if (lineChartInstance) {
    lineChartInstance.options = getChartOptions('line');
    lineChartInstance.update();
  }
};
```

Instead of destroying and recreating charts on every theme change, Claude updates the existing instances. This is more performant and prevents flickering.

**The Not So Good:**

Claude skipped the TypeScript requirement entirely. This is straight JavaScript with no type safety. Given the prompt specifically requested "TypeScript with full type safety," this is a clear miss on the requirements.

The template is defined as a string inside the component object rather than in standard HTML. This works but is unconventional for single file examples.

**The Verdict:**

Claude Sonnet 4.5 delivered a highly polished, immediately functional solution with professional touches like stat cards, smooth animations, and smart data formatting. The code is clean, well organized, and more performant than some competitors. However, like most tools in this test, it completely ignored the TypeScript requirement. The bonus features and attention to UX details show Claude thinking beyond just fulfilling the basic prompt.

### <span id="gemini-25-pro">Gemini 2.5 Pro</span>

Gemini took a similar approach to Claude.ai. I used the Gemini 2.5 Pro model, which I have a decent amount of experience using. I wasn't too worried about Gemini producing acceptable code. It did a great job on the UI and also provides the ability to preview the output. I think that's a pretty important feature at this point in the evolution of these types of tools.

Gemini also produced a single file with all the code and added absolute links for the libraries. This is nice because the code is highly portable. I can copy it all to a file on my computer, open it in a browser, and then edit it to my needs and liking. Removing that step of needing to copy fragments of code from the chatbot into files, then get it running within an existing app, or having to set up something new, is really convenient. When I first started generating code with ChatGPT in 2022, I used that process quite a bit. I envisioned tools like I'm seeing during the course of this showdown experiment.

<a href="/images/ai-showdown/gemini-2-5-pro.png" target="_blank">
  <img src="/images/ai-showdown/gemini-2-5-pro.png" alt="Gemini 2.5 Pro Dashboard Output">
</a>

View the code: [https://github.com/aicodechef/ai-code-showdown/tree/master/gemini-2.5-pro](https://github.com/aicodechef/ai-code-showdown/tree/master/gemini-2.5-pro)

**A Quick Look at the Code:**

Gemini delivered what Grok couldn't: a completely functional, production ready file that works immediately.

**The Good:**

The standout feature is that this is a true standalone HTML file. Everything needed is included via CDN links:

```javascript
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdn.tailwindcss.com"></script>
```

Open it in a browser and it just works. No build tools, no setup, no installation required.

Gemini went beyond the requirements with localStorage persistence and system preference detection:

```javascript
onMounted(() => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedMode = localStorage.getItem('darkMode');
  
  if (savedMode === 'true' || (savedMode === null && prefersDark)) {
    isDarkMode.value = true;
    document.documentElement.classList.add('dark');
  }
  
  createCharts();
});
```

The theme toggle remembers your preference and respects your system settings. That's polished UX.

The code is well documented with JSDoc type annotations, providing TypeScript like intellisense in editors:

```javascript
/** @type {import('vue').Ref<boolean>} */
const isDarkMode = ref(false);

/** @type {import('vue').Ref<HTMLCanvasElement | null>} */
const lineChartCanvas = ref(null);

/**
 * Common chart options that react to dark mode changes.
 * @type {import('vue').ComputedRef<import('chart.js').ChartOptions>}
 */
const chartOptions = computed(() => {
    // ...
});
```

**The Not So Good:**

While Gemini used JSDoc comments for type hints, this isn't actual TypeScript compilation as requested in the prompt. It's clever, but technically doesn't fulfill the "TypeScript with full type safety" requirement. There's no compile time type checking happening here.

Like most of the tools, mock data is hardcoded inline rather than loaded from separate JSON files as the prompt specified.

**The Verdict:**

Gemini 2.5 Pro nailed the "production ready" requirement. This code is immediately usable, well structured, and includes thoughtful UX touches like theme persistence. The professional polish with Inter font, smooth transitions, and responsive grid layout shows attention to detail. While it bent the TypeScript requirement with JSDoc annotations, the practical result is a file you can start using in seconds.

### <span id="bolt">Bolt</span>

Bolt actually created an entire Vue project.

View the code: [https://github.com/aicodechef/ai-code-showdown/tree/master/bolt](https://github.com/aicodechef/ai-code-showdown/tree/master/bolt)

**A Quick Look at the Code:**

Bolt delivered a complete Vue 3 project with TypeScript support, properly meeting the core requirements.

**The Good:**

Bolt correctly used Vue 3 with TypeScript, creating a proper project structure with separate component files and type definitions:

```typescript
export interface DashboardData {
  metrics: DashboardMetric[];
  lineChartData: ChartData;
  barChartData: ChartData;
  pieChartData: ChartData;
}

export type Theme = 'light' | 'dark';
```

The composables pattern for theme management is clean and follows Vue 3 best practices:

```javascript
const { theme, toggleTheme } = useTheme();
const isDark = computed(() => theme.value === 'dark');
```

The component structure is well organized with separate chart components and a clean dashboard layout. The metrics grid with hover effects and responsive design shows attention to UX details.

The CSS variables approach for theming is maintainable and performant, switching themes without re-rendering components. The responsive grid layouts adapt well to different screen sizes.

**The Not So Good:**

While the TypeScript types are defined, they're relatively basic compared to Claude Code. The type safety could be stronger, particularly around chart configurations and data transformations.

The styling is more basic compared to tools like Emergent or Base44. Functional but not as visually impressive. The chart configurations are simpler without some of the advanced features seen in other implementations.

**The Verdict:**

Bolt successfully delivered a Vue 3 plus TypeScript dashboard that meets all the core requirements. The code is clean, well structured, and follows Vue best practices. While it may not have the visual polish of some competitors or the comprehensive type safety of Claude Code, it's a solid, production ready implementation that correctly uses the requested technology stack. This is a reliable, no-nonsense solution that gets the job done.

### <span id="emergent">Emergent</span>

I wanted to stick to a single prompt per tool for this experiment. A couple of the tools ended up with errors for the initial prompt.

Emergent was one of the tools that ran into an error. I copied the error from the Preview window into a prompt for Emergent and instructed the agent to fix the error. It did really well, and with that one additional prompt the feature was working and displaying beautifully in the Preview window.

Emergent created a React version of the feature. It didn't confirm that a Vue version could not be created. It just built the feature using React. The end result was awesome, but I do have concerns about how Emergent handled the request in my prompt. A developer can look at the code and quickly determine the correct library wasn't used. I don't know if Emergent is targeting strictly experienced developers with their product offering. This might be disconcerting for a non-developer to discover that the project they're excited about is using an incorrect library.

Something else I should mention is the shadcn/ui component library that Emergent used in the dashboard feature. While browsing the code in the project that Emergent generated, I noticed a components directory with about twenty files in it. I was curious, so I asked the chatbot in Emergent and it informed me that the components are "a pre-bundled set of shadcn/ui components that ship with this template. They are lightweight wrappers around Radix UI primitives styled with Tailwind (e.g., button.jsx, card.jsx, tabs.jsx, switch.jsx, etc.)." That's pretty interesting. The Emergent AI is pulling in an external component library. The code for that library is not included in the accompanying repo for this writeup.

<a href="/images/ai-showdown/emergent.png" target="_blank">
  <img src="/images/ai-showdown/emergent.png" alt="Emergent Dashboard Output">
</a>

View the code: [https://github.com/aicodechef/ai-code-showdown/tree/master/emergent](https://github.com/aicodechef/ai-code-showdown/tree/master/emergent)

**A Quick Look at the Code:**

Emergent delivered a visually stunning React dashboard with TypeScript, though it completely ignored the Vue requirement.

**The Good:**

Emergent shows exceptional UI/UX design with professional animations and a modern component library approach. The implementation includes proper TypeScript with type annotations:

```typescript
// From Emergent's Dashboard.tsx
function useDarkMode() {
  const [dark, setDark] = useState<boolean>(() => {
    const saved = localStorage.getItem(THEME_KEY);
    return saved ? saved === "dark" : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
}
```

The use of custom React hooks for theme management and chart configuration shows sophisticated React patterns.

The component leverages shadcn/ui components for professional UI elements, and the timeframe switching feature adds realistic dashboard functionality.

**The Bad:**

The biggest issue is that Emergent completely ignored the Vue requirement and built with React instead. This is a fundamental miss on the core requirement, though it did properly implement TypeScript as requested.

The heavy reliance on prebuilt shadcn/ui components means much of the UI polish comes from external libraries rather than custom implementation.

**The Verdict:**

Emergent produced the most visually impressive dashboard with smooth animations, professional UI components, and proper TypeScript implementation. However, completely ignoring the Vue requirement is a critical failure. This highlights a key issue with some AI tools. They may produce technically competent results, but for the wrong framework. For teams already using React with TypeScript, this would be an excellent solution. For Vue teams, it's completely unusable.

### <span id="base44">Base44</span>

Base44 is another one I've been really curious about. Part of the reason for my curiosity is the magnitude of ads I've been served on YouTube for Base44.

Base44 does not support Vue code generation. It was different though because it went ahead and created a React version of the feature rather than halting. I didn't notice until I took a closer look at the code. That could be more of a problem for someone who wouldn't notice the feature was implemented with a different library than requested.

Base44 also had an error after it was done generating the code from the prompt. It was pretty smart though, as it realized it ran into an error and then provided a small prompt with a button that said "resolve this issue with AI." I clicked the button and it sent the error to the chatbot. After one iteration, it had a fully functional version of the feature displaying in the preview window. The UI that Base44 generated is really nice. Sadly, Base44 wanted me to upgrade to a paid plan to obtain a ZIP file for the project. I did my best harvesting the code it produced.

<a href="/images/ai-showdown/base-44-01.png" target="_blank">
  <img src="/images/ai-showdown/base-44-01.png" alt="Base44 Dashboard Output - View 1">
</a>

<a href="/images/ai-showdown/base-44-02.png" target="_blank">
  <img src="/images/ai-showdown/base-44-02.png" alt="Base44 Dashboard Output - View 2">
</a>

View the code: [https://github.com/aicodechef/ai-code-showdown/tree/master/base44](https://github.com/aicodechef/ai-code-showdown/tree/master/base44)

**A Quick Look at the Code:**

Base44 created a visually impressive React dashboard with sophisticated animations, though it ignored the Vue requirement.

**The Good:**

Base44's UI design is exceptional with smooth animations throughout the interface. The stats cards include sophisticated entrance animations with staggered delays, and the theme toggle animation is particularly polished with rotating sun/moon icons.

The gradient backgrounds and color coded stats (blue for revenue, purple for users, green for growth, orange for orders) create a visually cohesive and modern design. The component structure with separate cards for different chart types shows good organization.

**The Bad:**

Like Emergent, Base44 completely ignored the Vue requirement and built with React. This is a fundamental failure to meet the specification.

**The Verdict:**

Base44 produced one of the most visually impressive dashboards with beautiful animations and modern design. The UI/UX is top-tier with thoughtful microinteractions and smooth transitions. However, it failed on multiple core requirements: using React instead of Vue and apparently lacking TypeScript support. The paywall for accessing the full code is also a significant limitation for evaluation. While the visual result is stunning, the failure to meet basic requirements and the commercial restrictions make this less useful for the stated purpose.

### <span id="lovable">Lovable</span>

Another tool I've seen a lot of ads for is Lovable. I was pretty excited to try it out. But then...

Lovable could not create a Vue version of the dashboard feature. The prompt was met with this message:

> "I appreciate your detailed request! However, I need to clarify an important limitation: Lovable projects are built on React, Vite, Tailwind CSS, and TypeScript. I cannot use Vue or other frameworks like Angular, Svelte, or Next.js."

This is a better approach than some of the other tools. At least the user is made aware of this limitation before any code is generated. I'm sure this will save a few people some frustration and confusion. After seeing that message, at least the user knows they're getting React and not another library. I didn't proceed with Lovable.

### <span id="replit">Replit</span>

Replit had errors for the prompt. I tried the same approach I used with Emergent. I copied the error and instructed the agent to fix it. However, the results were underwhelming. The chatbot immediately told me "You've reached your Starter usage limit" and asked me to upgrade to a paid monthly subscription plan. That was as far as I went with Replit.

### <span id="grok">Grok</span>

Grok output a single chunk of code. I do like how specifically and literally Grok read the prompt, it did EXACTLY what the prompt instructed. So, this may be a good option for a developer. It may not be the best AI App Building Tool for a non-developer though.

There's no preview functionality. The chunk of code produced isn't fully functional. I'd have to take this code and add it to an existing Vue application, or set up a new one and add this code, just to run it and preview what it looks like and the functionality for the feature. After seeing what all of these other tools were able to create, I didn't even bother. It is what it is.

View the code: [https://github.com/aicodechef/ai-code-showdown/tree/master/grok](https://github.com/aicodechef/ai-code-showdown/tree/master/grok)

**A Quick Look at the Code:**

Looking at the Grok output after the fact reveals an interesting dichotomy. The code shows solid technical understanding but fails the fundamental requirement of being runnable.

**The Good:**

Grok delivered proper TypeScript implementation with full type safety:

```typescript
interface MockData {
  labels: string[];
  datasets: ChartDataset<'line' | 'bar' | 'pie'>[];
}

export default defineComponent({
  name: 'DashboardComponent',
  setup() {
    const theme: Ref<'light' | 'dark'> = ref('light');
    const toggleTheme = (): void => {
      theme.value = theme.value === 'light' ? 'dark' : 'light';
    };
  },
});
```

The Vue 3 Composition API usage is clean, with proper reactive state management and lifecycle hooks. Memory management is handled correctly with chart cleanup on theme changes.

**The Bad:**

The critical failure is that this code is completely unusable as delivered. It's a Vue Single File Component with import statements that require a bundler:

```javascript
import { defineComponent, ref, onMounted, watch, Ref } from 'vue';
import Chart from 'chart.js/auto';
```

These imports won't work without a build tool. You can't just open this file in a browser. Additionally, there's a CSS syntax error that would break styling. The `darken()` function is SASS, not valid CSS. This won't work in a browser.

**The Verdict:**

Grok understood the concepts and delivered technically competent code with proper TypeScript types and Vue patterns. However, it completely missed the "production ready" requirement by delivering component code without any of the scaffolding needed to actually run it. This highlights a key distinction: some tools give you "correct" code that isn't actually functional out of the box.

## Lessons Learned

Two of the tools generated React code for the features without asking first. Even though I was trying to keep all the code for this experiment within a single library, I ended up with React based implementations. I'll say this is somewhat indicative of working with generative AI. You really have to keep an eye on it.

## Conclusion

Those are my initial impressions of the AI code generation tools and the UIs they generate. The next important question concerns the underlying code quality itself.

I created a GitHub repo where you'll find the significant source code for each of the various AI tools: [https://github.com/aicodechef/ai-code-showdown](https://github.com/aicodechef/ai-code-showdown)

Take a look and see what you think.