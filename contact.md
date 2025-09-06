---
layout: base.njk
title: Contact
description: Get in touch with AI Code Chef for questions, feedback, or collaboration opportunities. 
---

# Contact

Have a question, feedback, or want to share your AI development experience? I'd love to hear from you!

<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/thanks/">
  <p style="display: none;">
    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
  </p>
  
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
  </div>
  
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
  </div>
  
  <div class="form-group">
    <label for="message">Comments, Feedback & Questions:</label>
    <textarea id="message" name="message" rows="6" required></textarea>
  </div>
  
  <button type="submit" class="submit-btn">Send Message</button>
</form>

---

## Other Ways to Connect

- Follow the blog via [RSS feed](/feed.xml)
- Check out my latest posts on AI-assisted development

{% set randomQuote = quotes | randomQuote %}
*"{{ randomQuote.text }}"* — {{ randomQuote.author }}