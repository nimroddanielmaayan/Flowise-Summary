# Flowise Summary

## General

### The Basics

- LEAVE THIS FOR LATER. FOR NOW, N8N IS ENOUGH

- Flowise is not an iPaaS (Integration Platforms as a Service). It's an
  AI-specific application builder

- Flowise is an open-source platform, with options for either paid cloud hosting
  or self hosting on any server we want

- The Flowise cloud has an option for managing credentials, for several
  editors\users, etc. Also, the licence probably requires using cloud hosting
  for white labeling (I need to check the license)

- The licence should be on GitHub

- The Flowise docs has a list of recommended self-hosting providers

- The course that I'm doing recommends Render for hosting

- For self hosting, we'll probably need to use environment variables

- Self hosting is a good option for clients that want a fully independent "self
  hosted, open source" system, which isn't n8n

- Flowise doesn't have an advanced "front end" for chatbots

- Flowise is a substitute for n8n - for now, I probably won't use it

- Course URL:
  <https://www.youtube.com/watch?v=pUnKEKz-Mdg&list=PL4HikwTaYE0Gi60Xkc1VAZV6u1vrJiZLr&index=3>

- I need to check if Flowise features good chat UI customizations (like TypeBot)
  or not

- Flowise handles session IDs, conversational memory and RAG out of the box. If
  user A and user B are talking to your bot, Flowise automatically tracks their
  separate conversations, remembers the context, and stores the chat history in
  its database (without needing to connect a third-party database node, like in
  n8n)

- Flowise is built directly on LangGraph. This allows us to build highly
  complex, stateful multi-agent systems. We can create true "chains of thought"
  where an agent gets stuck, loops back, tries a different tool, shares memory
  with another agent, and iterates until a problem is solved

- The term "prediction" in Flowise comes from the underlying mechanics of Large
  Language Models (LLMs)—they generate text by predicting the most likely next
  word (or token) based on your prompt
