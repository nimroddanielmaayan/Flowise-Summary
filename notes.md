# Flowise Summary

## General

### The Basics

- Flowise is not an iPaaS (Integration Platforms as a Service). It's an
  AI-specific application builder. It's focused on chat, image\audio processing,
  multi-agent flows, and so on

- Flowise is an open-source platform, with options for either paid cloud hosting
  or self hosting on any server we want

- The Flowise cloud has an option for managing credentials, for several
  editors\users, etc. Also, the licence probably requires using cloud hosting
  for white labeling\allowing clients to modify their own chatbot (I need to
  check the license). The licence should be on GitHub

- The Flowise docs has a list of recommended self-hosting providers. The course
  that I'm doing recommends Render for hosting. I prefer Coolify

- Self hosting is a good option for clients that want a fully independent "self
  hosted, open source" system, which isn't n8n

- Flowise doesn't have a "flow builder" for chatbots, like Typebot

- Flowise is a substitute for n8n, in several ways. It can do certain things
  that n8n can't do

- Course URL:
  <https://www.youtube.com/watch?v=pUnKEKz-Mdg&list=PL4HikwTaYE0Gi60Xkc1VAZV6u1vrJiZLr>

- Flowise is built directly on LangGraph. This allows us to build highly
  complex, stateful multi-agent systems. It can create true "chains of thought"
  where an agent gets stuck, loops back, tries a different tool, shares memory
  with another agent, and iterates until a problem is solved

### Features

- The Flowise native chat widget is pretty good. It has some features that the
  n8n widget doesn't have, like: Clearing the conversation, bot\user avatars,
  custom logo, link in footer (can be used for WhatsApp), tooltip, and built-in
  audio input. I need to check if the Flowise widget can use "action buttons"
  with automatic open + send, like the n8n chat widget

- Flowise handles conversational memory and RAG out of the box. If user A and
  user B are talking to your bot, Flowise automatically tracks their separate
  conversations, remembers the context, and stores the chat history in its
  database by default (without needing to connect a database node, like in n8n)

- Flowise has a built-in message history, for all users

- Starter prompts\follow-up prompts: Lets the user start or continue the
  conversation with pre-made, relevant questions (or questions pre-created
  on-the-fly using AI)

- Feedback: Allows the user to like\dislike responses, and explain why

- Lead form: Allows to ask user information before the chat starts (doesn't have
  to be mandatory)

- Consent management: Flowise has a built-in concent screen

- Speach to text and file uploads: Exist natively in the platform

- Rate limiting: As another guardrail against user abuse

- Flowise can read documents\images and process audio, like in n8n (though it's
  done differently)

- Human approval: Flowise can stop and request approval in mid-chat for certain
  actions, like Claude Code does

## Specific Tasks

### AI Chains vs AI Agents

- Flowise (and also n8n) has options for "basic" LLM chains, that don't act like
  full AI agents that can call tools

- Different chains are focused on different things

### Managing State Variables

- Flowise has built-in global variables, that can be used to manage user state.
  n8n has this too, but only in the paid plans. Managing users in the long term
  and across devices requires a database, and some form of identification
  mechanism

### Parsing Output

- Like in n8n, it's possible to parse the output and to force it to be in a
  certain structure

- This is useful for text chat, image\voice information extraction, and so on

### Agents

- Similar to AI agents in n8n

- Tool calling in agents: Like in n8n. Some of the differences in Flowise
  include seeing the tool calls in the chat preview, and a universal "tool
  library" (though in n8n something similar can be done with the "code tool"
  node)

### Reasoning Steps and Behind-the-Scenes Processes

- I need to complete this when I will need to build reasoning agents. I think
  that the reasoning steps can be seen in both Flowise and n8n, just in
  different places in the UI

- I think that some processes always happen behind-the-scenes and can't be
  inspected in either platform

### Web Scraping

- It seems like Flowise has a native scraping tool, unlike n8n. If I'll need to,
  I can explore this further later

### RAG

- Flowise has a built-in RAG process, that is very detailed and controlable. It
  can be good for clients that need RAG-intensive systems and can't make do with
  the simple OpenAI\Google RAG stores

- The entire RAG process can be done in-house and open source, using open-source
  applications that are available in Coolify, like SupaBase

- Pinecone is also an option. But it's only free for a certain usage volume

- The RAG properties can be modified and tested. In general, Flowise's RAG
  system is very good and comprehensive, which is an advantage over n8n in this
  perspective

- The RAG record manager is important for managing the RAG data, avoiding
  duplicates, and so on. Without it, records will be duplicated unneccessarily,
  and this might cause problems
